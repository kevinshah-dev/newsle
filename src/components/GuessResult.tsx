import { ArrowRight, ExternalLink, Sparkles } from "lucide-react"
import type { Guess, Headline } from "@/types/headline"
import { HeadlineCard } from "@/components/HeadlineCard"

type GuessResultProps = {
  headline: Headline
  guess: Guess
  isLastRound: boolean
  onNext: () => void
}

export function GuessResult({ headline, guess, isLastRound, onNext }: GuessResultProps) {
  const perfect = guess.yearsOff === 0

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
      <HeadlineCard headline={headline} revealImage />

      <aside className="rounded-[1.25rem] border border-neutral-950 bg-white p-5 shadow-[8px_8px_0_#111] sm:p-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#f7c948] px-3 py-1 text-sm font-black text-neutral-950">
          <Sparkles size={16} aria-hidden />
          {perfect ? "Bullseye" : "Presses stopped"}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-neutral-200 bg-[#fff7e4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-neutral-500">Your guess</p>
            <p className="mt-1 text-3xl font-black">{guess.guessedYear}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-[#fff7e4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-neutral-500">Correct year</p>
            <p className="mt-1 text-3xl font-black">{guess.correctYear}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-[#fff7e4] p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-neutral-500">Years off</p>
            <p className="mt-1 text-3xl font-black">{guess.yearsOff}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 bg-[#111] p-4 text-[#fff7e4]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f7c948]">Points</p>
            <p className="score-pop mt-1 text-3xl font-black">+{guess.points}</p>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-neutral-100 p-4">
          <p className="font-bold leading-7 text-neutral-700">{headline.context}</p>
          <p className="mt-3 text-sm font-black text-neutral-950">
            {headline.publication} · {headline.date}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-white px-4 py-2 font-black text-neutral-950 shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5"
            href={headline.sourceUrl}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink size={17} aria-hidden />
            View archive source
          </a>
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-[#d94f30] px-4 py-2 font-black text-white shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5"
            onClick={onNext}
            type="button"
          >
            {isLastRound ? "See Score" : "Next Headline"}
            <ArrowRight size={17} aria-hidden />
          </button>
        </div>
      </aside>
    </section>
  )
}
