import Link from "next/link";

import { ArrowRightIcon } from "@/components/about/AboutIcons";
import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";

export default function HomeFinalCta() {
  return (
    <section
      id="home-final-cta"
      aria-labelledby="home-final-cta-heading"
      className="bg-light pb-12 font-sans sm:pb-16 lg:pb-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-charcoal px-6 py-9 shadow-[var(--shadow-card-dark)] transition-colors duration-300 hover:border-emerald/25 motion-reduce:transition-none sm:p-10 lg:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(var(--bot-line-faint)_1px,transparent_1px),linear-gradient(90deg,var(--bot-line-faint)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
            <div className="absolute -right-16 -top-24 size-72 rounded-full bg-emerald/10 blur-3xl" />
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-emerald/60 to-transparent" />
          </div>

          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <div className="min-w-0 max-w-[38rem]">
              <p className="text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-emerald-light">
                START WITH VISIBILITY
              </p>
              <h2 id="home-final-cta-heading" className="heading-2 mt-3 text-balance text-white!">
                Ready to see your exposure?
              </h2>
              <p className="mt-4 text-pretty text-[15px] leading-[1.75] text-soft-green/75">
                Discover what your website reveals to the public. Run your first security scan and understand what needs attention.
              </p>
            </div>

            <Link
              href={PLATFORM_LOGIN_URL}
              className="btn-primary group w-full shrink-0 justify-self-start motion-reduce:transition-none! sm:w-auto lg:justify-self-end"
            >
              Start free scan
              <ArrowRightIcon className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
