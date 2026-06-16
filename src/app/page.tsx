"use client"

import { useEffect, useMemo, useState } from "react"
import { FinalScoreScreen } from "@/components/FinalScoreScreen"
import { GameScreen } from "@/components/GameScreen"
import { GuessResult } from "@/components/GuessResult"
import { LandingScreen } from "@/components/LandingScreen"
import { headlines } from "@/data/headlines"
import { getDailyHeadlines, getPracticeHeadlines, getTodayDateString } from "@/lib/dailySeed"
import { applyGuess, createGameState, createGuess, findHeadlineById } from "@/lib/game"
import { loadDailyGame, saveDailyGame } from "@/lib/storage"
import type { GameState, Guess, Headline } from "@/types/headline"

export default function Home() {
  const today = useMemo(() => getTodayDateString(), [])
  const [state, setState] = useState<GameState | null>(null)
  const [revealedGuess, setRevealedGuess] = useState<Guess | null>(null)
  const [dailyCompleted, setDailyCompleted] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const saved = loadDailyGame(today)

      if (saved) {
        setState(saved)
        setDailyCompleted(saved.completed)
      }

      setHydrated(true)
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [today])

  function startDaily() {
    const saved = loadDailyGame(today)

    if (saved) {
      setRevealedGuess(null)
      setState(saved)
      setDailyCompleted(saved.completed)
      return
    }

    const selected = getDailyHeadlines(today, headlines)
    const nextState = createGameState("daily", selected, today)
    saveDailyGame(nextState)
    setRevealedGuess(null)
    setState(nextState)
    setDailyCompleted(false)
  }

  function startPractice() {
    const selected = getPracticeHeadlines(headlines)
    setRevealedGuess(null)
    setState(createGameState("practice", selected))
  }

  function goHome() {
    setRevealedGuess(null)
    setState(null)
    const saved = loadDailyGame(today)
    setDailyCompleted(Boolean(saved?.completed))
  }

  function submitGuess(headline: Headline, guessedYear: number) {
    if (!state || state.completed || revealedGuess) return

    const guess = createGuess(headline, guessedYear)
    const nextState = applyGuess(state, guess)

    if (nextState.mode === "daily") {
      saveDailyGame(nextState)
      setDailyCompleted(nextState.completed)
    }

    setState(nextState)
    setRevealedGuess(guess)
  }

  function continueAfterReveal() {
    setRevealedGuess(null)
  }

  if (!hydrated) {
    return (
      <main className="grid min-h-screen place-items-center px-6 text-center">
        <div className="rounded-[1.25rem] border border-neutral-950 bg-[#fff7e4] p-6 font-black shadow-[6px_6px_0_#111]">
          Loading the presses...
        </div>
      </main>
    )
  }

  if (!state) {
    return (
      <LandingScreen
        dailyCompleted={dailyCompleted}
        onPlayDaily={startDaily}
        onPractice={startPractice}
      />
    )
  }

  if (revealedGuess) {
    const headline = findHeadlineById(headlines, revealedGuess.headlineId)

    return (
      <GuessResult
        guess={revealedGuess}
        headline={headline}
        isLastRound={state.completed}
        onNext={continueAfterReveal}
      />
    )
  }

  if (state.completed) {
    return (
      <FinalScoreScreen
        headlines={headlines}
        onHome={goHome}
        onPractice={startPractice}
        state={state}
        today={today}
      />
    )
  }

  return (
    <GameScreen
      headlines={headlines}
      onGuess={submitGuess}
      onHome={goHome}
      revealedGuess={revealedGuess}
      state={state}
    />
  )
}
