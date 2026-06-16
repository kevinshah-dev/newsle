export const MAX_ROUNDS = 5
export const MAX_POINTS_PER_ROUND = 1000
export const MAX_SCORE = MAX_ROUNDS * MAX_POINTS_PER_ROUND

export function calculatePoints(yearsOff: number): number {
  if (yearsOff === 0) return 1000
  if (yearsOff <= 1) return 800
  if (yearsOff <= 3) return 600
  if (yearsOff <= 5) return 400
  if (yearsOff <= 10) return 250
  if (yearsOff <= 20) return 100
  if (yearsOff <= 40) return 50
  return 0
}

export function getRating(score: number): string {
  if (score >= 4500) return "Front Page Legend"
  if (score >= 3500) return "Archive Ace"
  if (score >= 2500) return "History Buff"
  if (score >= 1500) return "Casual Reader"
  if (score >= 500) return "Newsstand Rookie"
  return "Lost in the Archives"
}
