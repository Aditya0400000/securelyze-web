import Link from "next/link";

import HeroScanVisual from "@/components/home/HeroScanVisual";
import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";

const HERO_SIGNALS = ["SSL/TLS", "DNS", "Headers", "Email", "Assets"];

export default function HeroSection() {
  return (
    <section
      id="security-checker"
      aria-labelledby="hero-heading"
      className="home-hero relative isolate overflow-hidden font-sans text-white selection:bg-emerald selection:text-charcoal"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="home-hero__ambient home-hero__ambient--one" />
        <div className="home-hero__ambient home-hero__ambient--two" />
        <div className="home-hero__grid" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-12 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20 xl:gap-14">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald/35 bg-emerald/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.01em] text-soft-green sm:text-[12px]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald-light shadow-[0_0_8px_var(--emerald-light)]"
            />
            Free website security checker
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-[44rem] text-balance text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:mt-6 sm:text-[3.4rem] lg:text-[3rem] xl:text-[3.75rem]"
          >
            See your website the way an{" "}
            <span className="whitespace-nowrap text-emerald-light">attacker&apos;</span> does
          </h1>

          <p className="mt-5 max-w-[36rem] text-pretty text-[15px] leading-[1.75] text-soft-green/75 sm:mt-6 sm:text-base">
            Securelyze checks your SSL/TLS certificate, DNS records, security
            headers and email authentication, then finds the subdomains, hosts
            and open services anyone on the internet can reach.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={PLATFORM_LOGIN_URL}
              className="group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald px-5 text-[14px] font-semibold tracking-[-0.01em] text-charcoal shadow-[0_10px_24px_-14px_rgba(16,185,129,0.65)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-emerald-hover hover:shadow-[0_14px_28px_-16px_rgba(5,150,105,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Start free scan
              <span
                aria-hidden="true"
                className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>

            <a
              href="#how-it-works"
              className="group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/[0.06] px-5 text-[14px] font-semibold tracking-[-0.01em] text-white transition-[transform,border-color,background-color] duration-200 ease-out hover:border-emerald/55 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-light focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              See how it works
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {HERO_SIGNALS.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-soft-green/70"
              >
                {signal}
              </span>
            ))}
          </div>

          <p className="mt-4 text-[12px] leading-5 text-soft-green/55">
            Free to start. Sign in with a one-time email code, no password
            needed.
          </p>
        </div>

        <div className="min-w-0">
          <HeroScanVisual />
        </div>
      </div>
    </section>
  );
}
