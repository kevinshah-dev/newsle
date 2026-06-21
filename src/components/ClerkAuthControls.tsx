"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function ClerkAuthControls() {
  const { isLoaded, isSignedIn } = useUser();
  const baseButtonClass =
    "inline-flex min-h-10 items-center justify-center rounded-full border border-neutral-950 px-4 py-2 text-sm font-black shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-50 disabled:hover:translate-y-0";

  if (isLoaded && isSignedIn) {
    return (
      <div className="flex items-center gap-2" aria-live="polite">
        <div className="grid h-10 w-10 place-items-center rounded-full border border-neutral-950 bg-white shadow-[3px_3px_0_#111]">
          <UserButton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2" aria-live="polite">
      <SignInButton mode="modal">
        <button
          className={`${baseButtonClass} bg-white text-neutral-950`}
          disabled={!isLoaded}
          type="button"
        >
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button
          className={`${baseButtonClass} bg-neutral-950 text-[#fff7e4]`}
          disabled={!isLoaded}
          type="button"
        >
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
}
