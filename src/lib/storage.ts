import type { GameState } from "@/types/headline"

const STORAGE_PREFIX = "headline-hindsight-daily"

export function dailyStorageKey(date: string): string {
  return `${STORAGE_PREFIX}-${date}`
}

export function loadDailyGame(date: string): GameState | null {
  if (typeof window === "undefined") return null

  const raw = window.localStorage.getItem(dailyStorageKey(date))
  if (!raw) return null

  try {
    return JSON.parse(raw) as GameState
  } catch {
    window.localStorage.removeItem(dailyStorageKey(date))
    return null
  }
}

export function saveDailyGame(state: GameState): void {
  if (typeof window === "undefined" || state.mode !== "daily" || !state.date) return

  window.localStorage.setItem(dailyStorageKey(state.date), JSON.stringify(state))
}
