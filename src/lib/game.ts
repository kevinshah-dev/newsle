import type { GameMode, GameState, Guess, Headline } from "@/types/headline"
import { calculatePoints, MAX_ROUNDS } from "@/lib/scoring"

export function createGameState(
  mode: GameMode,
  selectedHeadlines: Headline[],
  date?: string,
): GameState {
  return {
    mode,
    date,
    currentRound: 0,
    selectedHeadlineIds: selectedHeadlines.map((headline) => headline.id),
    guesses: [],
    completed: false,
  }
}

export function createGuess(headline: Headline, guessedYear: number): Guess {
  const yearsOff = Math.abs(guessedYear - headline.year)

  return {
    headlineId: headline.id,
    guessedYear,
    correctYear: headline.year,
    yearsOff,
    points: calculatePoints(yearsOff),
  }
}

export function totalScore(guesses: Guess[]): number {
  return guesses.reduce((sum, guess) => sum + guess.points, 0)
}

export function applyGuess(state: GameState, guess: Guess): GameState {
  const guesses = [...state.guesses, guess]
  const completed = guesses.length >= MAX_ROUNDS

  return {
    ...state,
    guesses,
    completed,
    currentRound: completed ? MAX_ROUNDS : state.currentRound + 1,
  }
}

export function findHeadlineById(headlines: Headline[], id: string): Headline {
  const headline = headlines.find((item) => item.id === id)

  if (!headline) {
    throw new Error(`Unknown headline id: ${id}`)
  }

  return headline
}
