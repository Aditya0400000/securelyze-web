import Link from "next/link";

import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="relative w-full overflow-hidden border-b border-white/10 bg-charcoal font-sans text-soft-green selection:bg-emerald selection:text-charcoal"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_16%_50%,rgba(16,185,129,0.12),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/45 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 py-2.5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:text-left lg:px-8">
        <p className="flex items-center gap-2 text-pretty text-[12.5px] leading-5 text-soft-green/80 sm:text-[13px]">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-light shadow-[0_0_8px_var(--emerald-light)]"
          />
          Website security checks and asset discovery are live.
        </p>

        <Link
          href={PLATFORM_LOGIN_URL}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[12.5px] font-semibold tracking-[-0.005em] text-emerald-light underline-offset-4 transition-colors duration-200 hover:text-soft-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:text-[13px]"
        >
          Sign in to run your first scan
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
          >
            →
          </span>
        </Link>
      </div>
    </aside>
  );
}
