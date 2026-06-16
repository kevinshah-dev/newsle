import { CalendarDays, Dices, Newspaper } from "lucide-react";

type LandingScreenProps = {
  onPlayDaily: () => void;
  onPractice: () => void;
  dailyCompleted: boolean;
};

export function LandingScreen({
  onPlayDaily,
  onPractice,
  dailyCompleted,
}: LandingScreenProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-5 sm:px-8">
      <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1fr_0.82fr]">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-[#fff7e4] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] shadow-[3px_3px_0_#111]">
            <Newspaper size={16} aria-hidden />
            Daily archive game
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-balance text-5xl font-black leading-[0.95] text-neutral-950 sm:text-7xl lg:text-8xl">
              Newsle
            </h1>
            <p className="max-w-2xl text-2xl font-black text-[#d94f30] sm:text-3xl">
              Guess the year. Beat the archive.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 font-black text-[#fff7e4] shadow-[4px_4px_0_#d94f30] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#d94f30]"
              onClick={onPlayDaily}
              type="button"
            >
              <CalendarDays size={19} aria-hidden />
              {dailyCompleted ? "View Today's Score" : "Play Today's Game"}
            </button>
            <button
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-950 bg-[#f7c948] px-6 py-3 font-black text-neutral-950 shadow-[4px_4px_0_#111] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111]"
              onClick={onPractice}
              type="button"
            >
              <Dices size={19} aria-hidden />
              Practice Mode
            </button>
          </div>

          <p className="font-black text-neutral-700">
            5 headlines. 5 guesses. 5,000 possible points.
          </p>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-neutral-950 bg-[#fff7e4] shadow-[10px_10px_0_#111]">
          <div className="absolute inset-0 newspaper-noise opacity-60" />
          <div className="absolute inset-x-0 top-0 border-b border-neutral-950 bg-neutral-950 px-5 py-3 text-center font-black uppercase tracking-[0.28em] text-[#fff7e4]">
            Daily Extra
          </div>
          <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 pt-16">
            <div className="border-b-4 border-double border-neutral-950 pb-4 text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-neutral-600">
                Archive edition
              </p>
              <p className="mt-2 text-5xl font-black leading-none text-neutral-950">
                ????
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-4/5 bg-neutral-950" />
              <div className="h-4 w-2/3 bg-neutral-950" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-28 border border-neutral-900 bg-[#e8dfc5]" />
                <div className="col-span-2 space-y-2">
                  <div className="h-3 bg-neutral-800" />
                  <div className="h-3 bg-neutral-800" />
                  <div className="h-3 w-2/3 bg-neutral-800" />
                  <div className="mt-4 h-3 bg-neutral-400" />
                  <div className="h-3 bg-neutral-400" />
                </div>
              </div>
            </div>
            <div className="rotate-[-3deg] self-start rounded-full border-4 border-[#d94f30] px-5 py-2 text-2xl font-black uppercase text-[#d94f30]">
              Guess!
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
