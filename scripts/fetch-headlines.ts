import { writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  Headline,
  HeadlineCategory,
  HeadlineDifficulty,
} from "../src/types/headline";

/**
 * Newsle curation script
 *
 * Runtime gameplay intentionally uses src/data/headlines.ts and does not call
 * external APIs. This script is for expanding that seed file during curation.
 *
 * Preferred v1 source:
 * - Library of Congress Chronicling America collection through the current
 *   loc.gov JSON API. No API key is required.
 * - Page full text is fetched through the loc.gov text-services endpoint exposed
 *   on resource JSON responses as resources[0].fulltext_file.
 *
 * Newspaper Navigator note:
 * - Newspaper Navigator is valuable because it detects headline regions on
 *   Chronicling America pages. The old hosted prepackaged JSON URLs now redirect
 *   to the retired experiment page, so this script keeps LOC page search as the
 *   practical MVP import path. Future work can ingest the public Navigator repo
 *   annotations and ALTO XML to extract region-level headline text.
 *
 * Optional future APIs:
 * - NYT Article Search and Guardian Open Platform should be wired with
 *   environment variables only. Do not hardcode private keys in this repo.
 */

type LocSearchResult = {
  date?: string;
  title?: string;
  url?: string;
  image_url?: string[];
};

type LocSearchResponse = {
  results?: LocSearchResult[];
};

type LocResourceResponse = {
  item?: {
    date?: string;
    title?: string;
  };
  resources?: Array<{
    fulltext_file?: string;
    image?: string;
  }>;
  fulltext_service?: string;
};

type TextServiceResponse = Record<string, { full_text?: string }>;

type SearchPlan = {
  label: string;
  query: string;
  startDate: string;
  endDate: string;
  category: HeadlineCategory;
  difficulty: HeadlineDifficulty;
  context: string;
  frontPagesOnly?: boolean;
};

export const SEARCH_PLANS: SearchPlan[] = [
  {
    label: "San Francisco earthquake",
    query: "san francisco earthquake",
    startDate: "1906-04-18",
    endDate: "1906-04-20",
    category: "Disaster",
    difficulty: "easy",
    context:
      "Newspapers reported the San Francisco earthquake and fire through wire dispatches.",
  },
  {
    label: "Lusitania",
    query: "lusitania torpedoed",
    startDate: "1915-05-07",
    endDate: "1915-05-10",
    category: "War",
    difficulty: "easy",
    context:
      "The sinking of the Lusitania became a major pre-U.S.-entry World War I story.",
  },
  {
    label: "Armistice",
    query: "armistice signed",
    startDate: "1918-11-11",
    endDate: "1918-11-13",
    category: "War",
    difficulty: "easy",
    context: "Armistice coverage announced the end of fighting in World War I.",
  },
  {
    label: "Pearl Harbor aftermath",
    query: "declaration war japanese",
    startDate: "1941-12-08",
    endDate: "1941-12-09",
    category: "War",
    difficulty: "easy",
    context:
      "U.S. newspapers covered the declaration of war after Pearl Harbor.",
  },
  {
    label: "D-Day",
    query: "invasion france churchill",
    startDate: "1944-06-06",
    endDate: "1944-06-08",
    category: "War",
    difficulty: "easy",
    context:
      "D-Day reporting followed Allied landings and airborne operations in France.",
  },
];

export const SEARCH_PLANS_2: SearchPlan[] = [
  {
    label: "Stock market crash",
    query: "stock market crash stocks",
    startDate: "1929-10-29",
    endDate: "1929-10-30",
    category: "Business",
    difficulty: "easy",
    context:
      "Newspapers covered the Wall Street crash as stock prices collapsed and panic spread through financial markets.",
  },
  {
    label: "Cuban Missile Crisis",
    query: "cuba missile kremlin war",
    startDate: "1962-10-23",
    endDate: "1962-10-23",
    category: "World",
    difficulty: "easy",
    context:
      "Newspapers tracked the Cuban Missile Crisis as the United States began its quarantine and Soviet ships headed toward Cuba.",
  },
  {
    label: "Wright brothers flying machine",
    query: "flying machine wright brothers",
    startDate: "1903-12-18",
    endDate: "1903-12-18",
    category: "Technology",
    difficulty: "hard",
    context:
      "Early aviation reports described the first powered flights in the language of flying machines and experimental invention.",
  },
  {
    label: "Korean War",
    query: "korea seoul surrender reds",
    startDate: "1950-06-26",
    endDate: "1950-06-26",
    category: "War",
    difficulty: "medium",
    context:
      "Newspapers reported North Korean forces driving toward Seoul at the opening of the Korean War.",
  },
  {
    label: "JFK assassination aftermath",
    query: "kennedy johnson assassination suspect",
    startDate: "1963-11-23",
    endDate: "1963-11-23",
    category: "Politics",
    difficulty: "easy",
    context:
      "The day after President Kennedy's assassination, newspapers covered the transfer of power and the investigation into the killing.",
  },
];

export const SEARCH_PLANS_1800S: SearchPlan[] = [
  {
    label: "Fort Sumter",
    query: "fort sumter surrendered bombardment",
    startDate: "1861-04-13",
    endDate: "1861-04-15",
    category: "War",
    difficulty: "easy",
    context:
      "Newspapers reported the bombardment and surrender of Fort Sumter at the opening of the Civil War.",
  },
  {
    label: "Lincoln assassination",
    query: "lincoln assassination",
    startDate: "1865-04-15",
    endDate: "1865-04-20",
    category: "Crime",
    difficulty: "easy",
    context:
      "Newspapers covered President Abraham Lincoln's assassination and the national shock that followed.",
  },
  {
    label: "Custer and Little Bighorn",
    query: "custer massacre",
    startDate: "1876-07-06",
    endDate: "1876-07-12",
    category: "War",
    difficulty: "medium",
    context:
      "News of George Armstrong Custer's defeat at Little Bighorn spread by telegraph days after the battle.",
  },
  {
    label: "Garfield shooting",
    query: "garfield shot",
    startDate: "1881-07-02",
    endDate: "1881-07-08",
    category: "Crime",
    difficulty: "medium",
    context:
      "Newspapers reported the shooting of President James A. Garfield at a Washington railroad station.",
  },
  {
    label: "Transcontinental railroad",
    query: "pacific railroad completed",
    startDate: "1869-05-10",
    endDate: "1869-05-12",
    category: "Technology",
    difficulty: "hard",
    context:
      "Newspapers marked the joining of the Union Pacific and Central Pacific railroads at Promontory Summit.",
  },
  {
    label: "USS Maine explosion",
    query: "maine blown up havana",
    startDate: "1898-02-16",
    endDate: "1898-02-18",
    category: "Disaster",
    difficulty: "easy",
    context:
      "The explosion of the USS Maine in Havana Harbor became a major prelude to the Spanish-American War.",
  },
];

export const SEARCH_PLANS_1700S_1900S: SearchPlan[] = [
  {
    label: "Declaration of Independence",
    query: "declaration independence",
    startDate: "1776-07-04",
    endDate: "1776-08-31",
    category: "Politics",
    difficulty: "hard",
    frontPagesOnly: false,
    context:
      "Eighteenth-century newspapers carried the Declaration of Independence and related congressional news across slower colonial print networks.",
  },
  {
    label: "Treaty of Paris",
    query: "definitive treaty peace",
    startDate: "1783-09-03",
    endDate: "1783-12-31",
    category: "World",
    difficulty: "hard",
    frontPagesOnly: false,
    context:
      "Newspapers reported peace terms after the Treaty of Paris formally ended the American Revolutionary War.",
  },
  {
    label: "Washington inauguration",
    query: "president washington",
    startDate: "1789-04-30",
    endDate: "1789-06-15",
    category: "Politics",
    difficulty: "hard",
    frontPagesOnly: false,
    context:
      "Newspapers covered George Washington's inauguration and the early rituals of the new federal government.",
  },
  {
    label: "McKinley assassination",
    query: "mckinley shot",
    startDate: "1901-09-06",
    endDate: "1901-09-14",
    category: "Crime",
    difficulty: "medium",
    context:
      "Newspapers followed the shooting of President William McKinley at the Pan-American Exposition in Buffalo.",
  },
  {
    label: "Titanic sinking",
    query: "titanic sunk",
    startDate: "1912-04-15",
    endDate: "1912-04-19",
    category: "Disaster",
    difficulty: "easy",
    context:
      "Newspapers reported the sinking of the Titanic while early passenger and survivor details were still uncertain.",
  },
  {
    label: "Lindbergh transatlantic flight",
    query: "lindbergh flying french soil",
    startDate: "1927-05-21",
    endDate: "1927-05-22",
    category: "Technology",
    difficulty: "easy",
    context:
      "Newspapers tracked Charles Lindbergh's solo transatlantic flight as he approached Paris.",
  },
  {
    label: "Hindenburg disaster",
    query: "hindenburg death list",
    startDate: "1937-05-07",
    endDate: "1937-05-08",
    category: "Disaster",
    difficulty: "easy",
    context:
      "Newspapers covered the Hindenburg disaster as investigators and witnesses tried to explain the airship's destruction.",
  },
  {
    label: "Atomic bomb aftermath",
    query: "atomic bomb damage",
    startDate: "1945-08-07",
    endDate: "1945-08-08",
    category: "War",
    difficulty: "easy",
    context:
      "Newspapers covered the first atomic bombing and early reports of Hiroshima's damage.",
  },
  {
    label: "Cuban Missile Crisis",
    query: "cuba kremlin war",
    startDate: "1962-10-23",
    endDate: "1962-10-24",
    category: "World",
    difficulty: "easy",
    context:
      "Newspapers tracked the Cuban Missile Crisis as the U.S. quarantine and Soviet response raised fears of war.",
  },
];

const ACTIVE_SEARCH_PLANS = SEARCH_PLANS_1700S_1900S;

const LOC_COLLECTION_URL =
  "https://www.loc.gov/collections/chronicling-america/";
const OUTPUT_PATH = path.join(
  process.cwd(),
  "src/data/headline-candidates.json",
);

const REQUEST_TIMEOUT_MS = 20_000;
const REQUEST_RETRIES = 4;
const REQUEST_BACKOFF_MS = 900;
const REQUEST_PAUSE_MS = 350;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function fetchJson<T>(url: string): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= REQUEST_RETRIES; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(url, {
        headers: {
          "user-agent": "headline-hindsight-mvp/1.0",
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Request failed ${response.status}: ${url}`);
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error;

      if (attempt === REQUEST_RETRIES) {
        break;
      }

      const backoff = REQUEST_BACKOFF_MS * attempt;
      console.warn(
        `Request failed; retrying ${attempt}/${REQUEST_RETRIES - 1} in ${backoff}ms: ${errorMessage(error)}`,
      );
      await sleep(backoff);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  throw lastError;
}

function isInRange(
  date: string | undefined,
  startDate: string,
  endDate: string,
): date is string {
  return Boolean(date && date >= startDate && date <= endDate);
}

function stripSearchTags(text: string): string {
  return text.replace(/\[\[\/?tag\]\]/g, "");
}

function cleanLines(text: string): string[] {
  return stripSearchTags(text)
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter((line) => line.length >= 18 && line.length <= 95);
}

function looksLikeHeadline(line: string, query: string): boolean {
  const lower = line.toLowerCase();
  const queryTerms = query.toLowerCase().split(/\s+/);
  const matchingTerms = queryTerms.filter((term) =>
    lower.includes(term),
  ).length;
  const letterCount = line.replace(/[^a-z]/gi, "").length;
  const weirdCount = line.replace(/[A-Za-z0-9\s.,;:'"?!$&()—-]/g, "").length;

  if (matchingTerms === 0 && !/[A-Z]{4,}/.test(line)) return false;
  if (letterCount < 12 || weirdCount > 2) return false;
  if (
    /weather|forecast|classified|advertis|edition|temperature|continued|page \d/i.test(
      line,
    )
  ) {
    return false;
  }
  if (
    /whole no\.?|price|cents|volume|vol\.?|department store|state ticket|street|guaranteed|published/i.test(
      line,
    )
  ) {
    return false;
  }
  if (
    /^(the )?.*(daily|herald|tribune|journal|ledger|news|intelligencer)\.?$/i.test(
      line,
    )
  ) {
    return false;
  }
  if (
    /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b.*\b\d{4}\b/i.test(
      line,
    )
  ) {
    return false;
  }

  return true;
}

function publicationFromTitle(title: string | undefined): string {
  if (!title) return "Unknown newspaper";
  const dateMatch = title.match(/,\s+[A-Z][a-z]+ \d{1,2}, \d{4}/);
  return dateMatch
    ? title.slice(0, dateMatch.index).replace(/^Image \d+ of /, "")
    : title;
}

function pickCandidates(fullText: string, plan: SearchPlan): string[] {
  const seen = new Set<string>();

  return cleanLines(fullText)
    .filter((line) => looksLikeHeadline(line, plan.query))
    .filter((line) => {
      const key = line.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 3);
}

async function recordsForPlan(plan: SearchPlan): Promise<Headline[]> {
  const searchUrl = new URL(LOC_COLLECTION_URL);
  searchUrl.searchParams.set("dl", "page");
  if (plan.frontPagesOnly !== false) {
    searchUrl.searchParams.set("front_pages_only", "true");
  }
  searchUrl.searchParams.set("start_date", plan.startDate);
  searchUrl.searchParams.set("end_date", plan.endDate);
  searchUrl.searchParams.set("q", plan.query);
  searchUrl.searchParams.set("fo", "json");
  searchUrl.searchParams.set("c", "25");

  const search = await fetchJson<LocSearchResponse>(searchUrl.toString());
  await sleep(REQUEST_PAUSE_MS);
  const results = (search.results ?? []).filter((result) =>
    isInRange(result.date, plan.startDate, plan.endDate),
  );

  const records: Headline[] = [];

  for (const result of results.slice(0, 4)) {
    if (!result.url || !result.date) continue;

    try {
      const resourceUrl = new URL(result.url);
      resourceUrl.searchParams.set("fo", "json");

      const resource = await fetchJson<LocResourceResponse>(
        resourceUrl.toString(),
      );
      await sleep(REQUEST_PAUSE_MS);
      const fullTextUrl =
        resource.resources?.[0]?.fulltext_file ?? resource.fulltext_service;
      if (!fullTextUrl) continue;

      const textResponse = await fetchJson<TextServiceResponse>(fullTextUrl);
      await sleep(REQUEST_PAUSE_MS);
      const fullText = Object.values(textResponse)[0]?.full_text;
      if (!fullText) continue;

      for (const headline of pickCandidates(fullText, plan)) {
        records.push({
          id: `candidate-${records.length + 1}`,
          headline,
          publication: publicationFromTitle(resource.item?.title ?? result.title),
          date: result.date,
          year: Number(result.date.slice(0, 4)),
          sourceUrl: result.url,
          pageImageUrl: resource.resources?.[0]?.image ?? result.image_url?.[0],
          archiveName: "Library of Congress / Chronicling America",
          context: plan.context,
          category: plan.category,
          difficulty: plan.difficulty,
        });
      }
    } catch (error) {
      console.warn(
        `  Skipping ${result.url}: ${errorMessage(error)}`,
      );
    }
  }

  return records;
}

async function main() {
  const records: Headline[] = [];

  for (const plan of ACTIVE_SEARCH_PLANS) {
    console.log(`Fetching ${plan.label}...`);
    try {
      const planRecords = await recordsForPlan(plan);
      console.log(`  Found ${planRecords.length} candidates.`);
      records.push(...planRecords);
    } catch (error) {
      console.warn(`  Skipping plan: ${errorMessage(error)}`);
    }
  }

  const cleanRecords = records.filter(
    (record) => record.publication && record.date && record.year,
  );
  await writeFile(
    OUTPUT_PATH,
    `${JSON.stringify(cleanRecords, null, 2)}\n`,
    "utf8",
  );
  console.log(
    `Wrote ${cleanRecords.length} candidate records to ${OUTPUT_PATH}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
