import type { Headline } from "@/types/headline"
import { MAX_ROUNDS } from "@/lib/scoring"

function hashSeed(seed: string): number {
  let hash = 2166136261

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

function seededRandom(seed: string): () => number {
  let state = hashSeed(seed) || 1

  return () => {
    state += 0x6d2b79f5
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

export function getTodayDateString(date = new Date()): string {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const day = `${date.getDate()}`.padStart(2, "0")

  return `${year}-${month}-${day}`
}

export function getSeededHeadlines(
  seed: string,
  headlines: Headline[],
  count = MAX_ROUNDS,
): Headline[] {
  if (headlines.length < count) {
    throw new Error(`Need at least ${count} headlines to start a game.`)
  }

  const random = seededRandom(seed)
  const shuffled = [...headlines]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  return shuffled.slice(0, count)
}

export function getDailyHeadlines(date: string, headlines: Headline[]): Headline[] {
  return getSeededHeadlines(`daily:${date}`, headlines, MAX_ROUNDS)
}

export function getPracticeHeadlines(headlines: Headline[]): Headline[] {
  return getSeededHeadlines(`practice:${Date.now()}:${Math.random()}`, headlines, MAX_ROUNDS)
}
