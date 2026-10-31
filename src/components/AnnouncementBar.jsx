function ShieldAccent() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
    >
      <path
        d="M12 3.25 5.75 5.5v5.27c0 4.13 2.79 7.78 6.25 8.82 3.46-1.04 6.25-4.69 6.25-8.82V5.5L12 3.25Z"
        className="fill-[#10B981]/15 stroke-[#34D399]"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9.25 11.8 1.8 1.8 3.7-3.9"
        className="stroke-[#D1FAE5]"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#101A18] font-sans text-slate-200 selection:bg-[#10B981] selection:text-[#101A18]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_50%,rgba(255,122,26,0.13),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-3 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-[#10B981]/30 bg-gradient-to-br from-[#10B981]/20 to-[#059669]/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_-6px_rgba(255,122,26,0.4)]">
            <ShieldAccent />
          </span>

          <p className="min-w-0 text-pretty text-[13px] font-medium leading-[18px] tracking-[-0.005em] text-slate-200/90 sm:text-sm sm:leading-5">
            Discover your website&apos;s security posture with{" "}
            <span className="font-semibold text-white">Securelyze</span>.
          </p>
        </div>

        <a
          href="#security-posture"
          aria-label="Learn more about Securelyze website security posture"
          className="group inline-flex shrink-0 items-center gap-1.5 self-end rounded-md px-1 py-1 text-[13px] font-semibold text-[#D1FAE5] underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1FAE5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18] sm:self-auto sm:text-sm"
        >
          Learn more
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          >
            →
          </span>
        </a>
      </div>
    </aside>
  );
}
