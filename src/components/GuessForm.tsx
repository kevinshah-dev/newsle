"use client"

import { Send } from "lucide-react"
import { FormEvent, useMemo, useState } from "react"

type GuessFormProps = {
  onSubmit: (year: number) => void
}

export function GuessForm({ onSubmit }: GuessFormProps) {
  const [value, setValue] = useState("")
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const numericValue = Number(value)
  const isValid =
    /^\d{4}$/.test(value) && Number.isInteger(numericValue) && numericValue >= 1600 && numericValue <= currentYear

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValid) return

    onSubmit(numericValue)
    setValue("")
  }

  return (
    <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="year-guess">
        Guess publication year
      </label>
      <input
        className="min-h-14 rounded-full border-2 border-neutral-950 bg-white px-6 text-center text-2xl font-black text-neutral-950 shadow-[4px_4px_0_#111] outline-none transition placeholder:text-neutral-400 focus:-translate-y-0.5 focus:shadow-[6px_6px_0_#111]"
        id="year-guess"
        inputMode="numeric"
        max={currentYear}
        min={1600}
        onChange={(event) => setValue(event.target.value.replace(/\D/g, "").slice(0, 4))}
        placeholder="YYYY"
        type="text"
        value={value}
      />
      <button
        className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-neutral-950 bg-[#d94f30] px-7 font-black text-white shadow-[4px_4px_0_#111] transition enabled:hover:-translate-y-0.5 enabled:hover:shadow-[6px_6px_0_#111] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-500"
        disabled={!isValid}
        type="submit"
      >
        <Send size={18} aria-hidden />
        Lock It In
      </button>
    </form>
  )
}
