/** Shared Tailwind class strings so every section uses the same look. */

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#00BFFF] px-7 py-3 font-semibold text-black transition hover:bg-[#33CCFF] hover:shadow-[0_0_24px_-4px_#00BFFF]";

export const outlineButton =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[#00BFFF] px-7 py-3 font-semibold text-white transition hover:bg-[#00BFFF] hover:text-black";

/** The one card style used across the page: left-aligned, single hover effect (border glow). */
export const card =
  "rounded-xl border border-gray-800 bg-[#111827] p-6 text-left transition duration-300 hover:border-[#00BFFF]/70 hover:shadow-[0_0_28px_-10px_#00BFFF]";

export const badge =
  "inline-block rounded-full bg-[#00BFFF]/10 px-3 py-1 text-xs font-medium text-[#00BFFF]";

export const iconBox =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#00BFFF]/10 text-[#00BFFF]";

/** Same vertical rhythm for every section. */
export const section = "scroll-mt-20 px-6 py-20 md:py-28";
