import type { Headline } from "@/types/headline";

type HeadlineCardProps = {
  headline: Headline;
  revealImage?: boolean;
};

export function HeadlineCard({
  headline,
  revealImage = false,
}: HeadlineCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[1.25rem] border border-neutral-950 bg-[#fff7e4] shadow-[8px_8px_0_#111]">
      <div className="absolute inset-0 newspaper-noise opacity-55" />
      <div className="relative border-b border-neutral-950 bg-neutral-950 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.22em] text-[#fff7e4]">
        Archive Clipping
      </div>
      <div className="relative grid gap-5 p-5 sm:p-7">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-neutral-900 bg-[#d94f30] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
            {headline.category}
          </span>
          <span className="rounded-full border border-neutral-900 bg-[#f7c948] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-950">
            {headline.difficulty}
          </span>
        </div>

        <h2 className="text-balance font-serif text-4xl font-black leading-[1.02] text-neutral-950 sm:text-5xl">
          {headline.headline}
        </h2>

        <div className="flex flex-wrap items-center gap-2 border-t border-neutral-300 pt-4 text-sm font-bold text-neutral-700">
          <span>{headline.publication}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#d94f30]" />
        </div>

        {revealImage && headline.pageImageUrl ? (
          <div className="overflow-hidden rounded-xl border border-neutral-950 bg-neutral-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`Archive page from ${headline.publication}`}
              className="h-44 w-full object-cover grayscale"
              src={headline.pageImageUrl}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
