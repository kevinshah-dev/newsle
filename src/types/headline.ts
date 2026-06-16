export type HeadlineCategory =
  | "Politics"
  | "War"
  | "Science"
  | "Sports"
  | "Culture"
  | "Business"
  | "Disaster"
  | "Technology"
  | "Crime"
  | "World"
  | "Other"

export type HeadlineDifficulty = "easy" | "medium" | "hard"

export type Headline = {
  id: string
  headline: string
  publication: string
  date: string
  year: number
  sourceUrl: string
  pageImageUrl?: string
  archiveName: string
  context: string
  category: HeadlineCategory
  difficulty: HeadlineDifficulty
}

export type Guess = {
  headlineId: string
  guessedYear: number
  correctYear: number
  yearsOff: number
  points: number
}

export type GameMode = "daily" | "practice"

export type GameState = {
  mode: GameMode
  date?: string
  currentRound: number
  selectedHeadlineIds: string[]
  guesses: Guess[]
  completed: boolean
}
