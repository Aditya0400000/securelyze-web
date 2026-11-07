import Link from "next/link";

import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="relative w-full border-b border-white/5 bg-charcoal font-sans text-soft-green selection:bg-emerald selection:text-charcoal"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-0.5 px-4 py-1.5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:px-6 sm:text-left lg:px-8">
        <p className="flex items-center gap-2 text-pretty text-[11px] leading-5 text-white/80 sm:text-[12px]">
          <span
            aria-hidden="true"
            className="h-1 w-1 shrink-0 rounded-full bg-emerald-light"
          />
          Website security checks and asset discovery are live.
        </p>

        <Link
          href={PLATFORM_LOGIN_URL}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-0.5 text-[11.5px] font-medium tracking-[-0.005em] text-emerald-light underline-offset-4 transition-colors duration-200 hover:text-soft-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:text-[12px]"
        >
          Sign in to run your first scan
          <span aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </aside>
  );
}
