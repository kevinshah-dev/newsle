import { MAX_SCORE } from "@/lib/scoring"

type ScoreBadgeProps = {
  score: number
  compact?: boolean
}

export function ScoreBadge({ score, compact = false }: ScoreBadgeProps) {
  return (
    <div
      className={`score-pop inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-[#111111] px-4 py-2 font-black text-[#fff7e4] shadow-[4px_4px_0_#d94f30] ${
        compact ? "text-sm" : "text-base"
      }`}
    >
      <span>{score.toLocaleString()}</span>
      <span className="text-[#f7c948]">/ {MAX_SCORE.toLocaleString()}</span>
    </div>
  )
}
