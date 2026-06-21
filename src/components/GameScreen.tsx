"use client"

import { ArrowLeft, Trophy } from "lucide-react"
import type { GameState, Guess, Headline } from "@/types/headline"
import { findHeadlineById, totalScore } from "@/lib/game"
import { MAX_ROUNDS } from "@/lib/scoring"
import { GuessForm } from "@/components/GuessForm"
import { HeadlineCard } from "@/components/HeadlineCard"
import { ClerkAuthControls } from "@/components/ClerkAuthControls"
import { ScoreBadge } from "@/components/ScoreBadge"

type GameScreenProps = {
  state: GameState
  headlines: Headline[]
  onGuess: (headline: Headline, year: number) => void
  onHome: () => void
  revealedGuess: Guess | null
}

export function GameScreen({ state, headlines, onGuess, onHome, revealedGuess }: GameScreenProps) {
  const activeId = revealedGuess?.headlineId ?? state.selectedHeadlineIds[state.currentRound]
  const headline = findHeadlineById(headlines, activeId)
  const score = totalScore(state.guesses)
  const roundNumber = Math.min(state.guesses.length + (revealedGuess ? 0 : 1), MAX_ROUNDS)

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <button
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-[#fff7e4] px-4 py-2 font-black text-neutral-950 shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5"
          onClick={onHome}
          type="button"
        >
          <ArrowLeft size={17} aria-hidden />
          Home
        </button>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-950 bg-white px-4 py-2 font-black text-neutral-950 shadow-[3px_3px_0_#111]">
            <Trophy size={17} aria-hidden />
            Headline {roundNumber} of {MAX_ROUNDS}
          </div>
          <ScoreBadge score={score} compact />
          <ClerkAuthControls />
        </div>
      </header>

      <section className="grid flex-1 items-center gap-6 lg:grid-cols-[1fr_0.78fr]">
        <HeadlineCard headline={headline} />
        <div className="rounded-[1.25rem] border border-neutral-950 bg-white p-5 shadow-[8px_8px_0_#111] sm:p-6">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d94f30]">
            {state.mode === "daily" ? "Today's edition" : "Practice edition"}
          </p>
          <h1 className="mt-2 text-3xl font-black leading-tight text-neutral-950">
            What year did this hit the page?
          </h1>
          <p className="mt-3 font-semibold leading-7 text-neutral-600">
            The publication is fair game. The date stays under ink until you commit.
          </p>
          <div className="mt-6">
            <GuessForm onSubmit={(year) => onGuess(headline, year)} />
          </div>
        </div>
      </section>
    </main>
  )
}
