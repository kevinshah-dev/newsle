"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

type ShareButtonProps = {
  text: string
}

export function ShareButton({ text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-neutral-900 bg-[#f7c948] px-5 py-2.5 font-black text-neutral-950 shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#111]"
      onClick={copyResult}
      type="button"
    >
      {copied ? <Check aria-hidden size={18} /> : <Copy aria-hidden size={18} />}
      {copied ? "Copied" : "Share Result"}
    </button>
  )
}
