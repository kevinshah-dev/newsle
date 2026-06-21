import { Dices, RotateCcw } from "lucide-react";
import type { GameState, Headline } from "@/types/headline";
import { getRating, MAX_SCORE } from "@/lib/scoring";
import { findHeadlineById, totalScore } from "@/lib/game";
import { ShareButton } from "@/components/ShareButton";
import { ScoreBadge } from "@/components/ScoreBadge";
import { ClerkAuthControls } from "@/components/ClerkAuthControls";

type FinalScoreScreenProps = {
  state: GameState;
  headlines: Headline[];
  today: string;
  onPractice: () => void;
  onHome: () => void;
};

export function FinalScoreScreen({
  state,
  headlines,
  today,
  onPractice,
  onHome,
}: FinalScoreScreenProps) {
  const score = totalScore(state.guesses);
  const rating = getRating(score);
  const label = state.mode === "daily" ? `#${state.date ?? today}` : "Practice";
  const shareText =
    state.mode === "daily"
      ? `Newsle #${state.date ?? today}: ${score.toLocaleString()}/${MAX_SCORE.toLocaleString()}`
      : `Newsle Practice: ${score.toLocaleString()}/${MAX_SCORE.toLocaleString()}`;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8">
      <nav className="flex justify-end py-2" aria-label="Account">
        <ClerkAuthControls />
      </nav>
      <section className="grid gap-6">
        <div className="rounded-[1.5rem] border border-neutral-950 bg-[#fff7e4] p-6 text-center shadow-[8px_8px_0_#111] sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d94f30]">
            Newsle {label}
          </p>
          <h1 className="mt-3 text-balance text-5xl font-black leading-none text-neutral-950 sm:text-7xl">
            {rating}
          </h1>
          <div className="mt-5">
            <ScoreBadge score={score} />
          </div>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ShareButton text={shareText} />
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-white px-5 py-2.5 font-black text-neutral-950 shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5"
              onClick={onPractice}
              type="button"
            >
              <Dices size={18} aria-hidden />
              Practice Mode
            </button>
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-white px-5 py-2.5 font-black text-neutral-950 shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5"
              onClick={onHome}
              type="button"
            >
              <RotateCcw size={18} aria-hidden />
              Home
            </button>
          </div>
        </div>

        <div className="grid gap-3">
          {state.guesses.map((guess, index) => {
            const headline = findHeadlineById(headlines, guess.headlineId);

            return (
              <article
                className="rounded-2xl border border-neutral-950 bg-white p-4 shadow-[4px_4px_0_#111]"
                key={guess.headlineId}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d94f30]">
                      Headline {index + 1}
                    </p>
                    <h2 className="mt-1 font-serif text-2xl font-black leading-tight text-neutral-950">
                      {headline.headline}
                    </h2>
                    <p className="mt-2 text-sm font-bold text-neutral-600">
                      {headline.publication} · {headline.date}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center sm:min-w-80">
                    <MiniStat label="Guess" value={guess.guessedYear} />
                    <MiniStat label="Year" value={guess.correctYear} />
                    <MiniStat label="Off" value={guess.yearsOff} />
                    <MiniStat label="Pts" value={guess.points} dark />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function MiniStat({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: number;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-3 ${dark ? "bg-neutral-950 text-[#fff7e4]" : "bg-[#fff7e4]"}`}
    >
      <p className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">
        {label}
      </p>
      <p className="mt-1 text-lg font-black">{value}</p>
    </div>
  );
}
