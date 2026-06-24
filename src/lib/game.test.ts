import { describe, expect, it } from "vitest";
import { getDailyHeadlines, getSeededHeadlines, getTodayDateString } from "./dailySeed";
import {
  applyGuess,
  createGameState,
  createGuess,
  findHeadlineById,
  totalScore,
} from "./game";
import { calculatePoints, getRating, MAX_ROUNDS } from "./scoring";
import type { Headline } from "@/types/headline";

function makeHeadline(id: string, year: number): Headline {
  return {
    id,
    headline: `Headline ${id}`,
    publication: "Daily Test",
    date: `${year}-01-01`,
    year,
    sourceUrl: "https://example.com",
    archiveName: "Test Archive",
    context: "",
    category: "World",
    difficulty: "medium",
  };
}

const headlines = [
  makeHeadline("one", 1900),
  makeHeadline("two", 1901),
  makeHeadline("three", 1902),
  makeHeadline("four", 1903),
  makeHeadline("five", 1904),
  makeHeadline("six", 1905),
];

describe("Newsle scoring", () => {
  it("maps year distance to the intended point bands", () => {
    expect(calculatePoints(0)).toBe(1000);
    expect(calculatePoints(1)).toBe(800);
    expect(calculatePoints(3)).toBe(600);
    expect(calculatePoints(5)).toBe(400);
    expect(calculatePoints(10)).toBe(250);
    expect(calculatePoints(20)).toBe(100);
    expect(calculatePoints(40)).toBe(50);
    expect(calculatePoints(41)).toBe(0);
  });

  it("keeps rating boundaries stable", () => {
    expect(getRating(4500)).toBe("Front Page Legend");
    expect(getRating(3499)).toBe("History Buff");
    expect(getRating(499)).toBe("Lost in the Archives");
  });
});

describe("Newsle game state", () => {
  it("creates guesses with year distance and points", () => {
    expect(createGuess(headlines[0], 1903)).toEqual({
      headlineId: "one",
      guessedYear: 1903,
      correctYear: 1900,
      yearsOff: 3,
      points: 600,
    });
  });

  it("advances rounds and marks the game complete after five guesses", () => {
    let state = createGameState("daily", headlines.slice(0, MAX_ROUNDS), "2026-06-24");

    for (const headline of headlines.slice(0, MAX_ROUNDS)) {
      state = applyGuess(state, createGuess(headline, headline.year));
    }

    expect(state.currentRound).toBe(MAX_ROUNDS);
    expect(state.completed).toBe(true);
    expect(totalScore(state.guesses)).toBe(5000);
  });

  it("finds selected headlines by id and fails loudly for unknown ids", () => {
    expect(findHeadlineById(headlines, "three").headline).toBe("Headline three");
    expect(() => findHeadlineById(headlines, "missing")).toThrow(
      "Unknown headline id: missing",
    );
  });
});

describe("Newsle daily selection", () => {
  it("formats local dates as yyyy-mm-dd", () => {
    expect(getTodayDateString(new Date(2026, 5, 24))).toBe("2026-06-24");
  });

  it("selects deterministic unique headlines for a seed", () => {
    const firstRun = getSeededHeadlines("seed", headlines);
    const secondRun = getSeededHeadlines("seed", headlines);

    expect(firstRun.map((headline) => headline.id)).toEqual(
      secondRun.map((headline) => headline.id),
    );
    expect(firstRun).toHaveLength(MAX_ROUNDS);
    expect(new Set(firstRun.map((headline) => headline.id)).size).toBe(MAX_ROUNDS);
  });

  it("throws when there are not enough headlines for a game", () => {
    expect(() => getDailyHeadlines("2026-06-24", headlines.slice(0, 4))).toThrow(
      "Need at least 5 headlines to start a game.",
    );
  });
});
