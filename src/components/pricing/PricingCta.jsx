import HomeSectionBadge from "@/components/home/HomeSectionBadge";
import Link from "next/link";

import { ArrowRightIcon } from "./PricingIcons";

export default function PricingCta() {
  return (
    <section
      aria-labelledby="pricing-cta-heading"
      className="bg-white pb-16 font-sans selection:bg-emerald selection:text-charcoal sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-dark-green/20 bg-charcoal p-7 shadow-[var(--shadow-card-dark)] sm:p-10 lg:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 size-80 rounded-full bg-emerald-hover/20 blur-[100px]" />
            <div className="absolute -bottom-24 left-[30%] size-64 rounded-full bg-emerald/[0.06] blur-[90px]" />
            <div className="absolute inset-0 bg-[linear-gradient(var(--white)_1px,transparent_1px),linear-gradient(90deg,var(--white)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.03] [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_78%)]" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-1/2 hidden size-52 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <div className="min-w-0">
              <HomeSectionBadge>Start with visibility</HomeSectionBadge>

              <h2
                id="pricing-cta-heading"
                className="mt-4 max-w-[37rem] text-balance text-[1.65rem] font-bold leading-[1.14] tracking-[-0.045em] text-white sm:text-[2.1rem]"
              >
                Start Exploring Securelyze
              </h2>

              <p className="mt-4 max-w-[34rem] text-pretty text-[13.5px] leading-[1.7] text-white/65">
                Choose a security check or asset discovery tool to learn more
                about your internet-facing environment.
              </p>

              <p className="mt-6 max-w-[34rem] text-[9.5px] font-medium uppercase tracking-[0.16em] text-white/55">
                Free plan · $0
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/platform#website-security-check"
                className="group inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald px-4 text-center text-[12px] font-semibold tracking-[-0.005em] text-charcoal shadow-[var(--shadow-btn-primary)] transition-[background-color,transform] duration-200 ease-out hover:bg-emerald-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-safe:hover:-translate-y-px motion-reduce:transition-none sm:w-auto"
              >
                Get Started
                <ArrowRightIcon className="size-3.5 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              <Link
                href="/platform#assets-discovery"
                className="inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 text-center text-[12px] font-semibold text-white/75 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:w-auto"
              >
                Discover Assets
                <ArrowRightIcon className="size-3.5 shrink-0" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
