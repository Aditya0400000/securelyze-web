import Link from "next/link";

import HeroScanVisual from "@/components/home/HeroScanVisual";
import HomeSectionBadge from "@/components/home/HomeSectionBadge";
import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";
import "@/components/home/HomeHero.css";

const HERO_SIGNALS = ["SSL/TLS", "DNS", "Headers", "Email", "Assets"];

export default function HeroSection() {
  return (
    <section
      id="security-checker"
      aria-labelledby="hero-heading"
      className="home-light-hero relative isolate overflow-hidden border-b border-border-subtle font-sans text-charcoal selection:bg-soft-green selection:text-charcoal"
    >
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-10 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10 lg:px-8 lg:pb-20 lg:pt-16 xl:gap-12">
        <div className="min-w-0">
          <HomeSectionBadge>
            INTERNET-FACING SECURITY &amp; ASSET DISCOVERY
          </HomeSectionBadge>

          <h1
            id="hero-heading"
            className="mt-5 max-w-[44rem] text-[clamp(1.875rem,8.5vw,2.65rem)] font-semibold leading-[1.07] tracking-[-0.055em] text-charcoal sm:mt-6 sm:text-[3.4rem] lg:text-[clamp(2.6rem,3.9vw,3.4rem)]"
          >
            <span className="block">
              See What&apos;s{" "}
              <span className="text-emerald-hover">Exposed.</span>
            </span>
            <span className="block">Know What to Check.</span>
          </h1>

          <p className="mt-5 max-w-[36rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:mt-6 sm:text-base">
            Discover internet-facing assets, check security configurations, and
            review security-related findings across your domains, IP addresses,
            and network services.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={PLATFORM_LOGIN_URL}
              className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-btn bg-emerald px-5 text-[14px] font-semibold tracking-[-0.01em] text-charcoal shadow-btn transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-emerald-hover hover:shadow-[var(--shadow-btn-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Start Security Check
              <span
                aria-hidden="true"
                className="text-[15px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>

            <a
              href="#how-it-works"
              className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-btn border border-dark-green/20 bg-white px-5 text-[14px] font-semibold tracking-[-0.01em] text-dark-green shadow-sm transition-[transform,border-color,background-color] duration-200 ease-out hover:border-emerald/55 hover:bg-soft-green/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Explore Tools
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2.5">
            {HERO_SIGNALS.map((signal) => (
              <span
                key={signal}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-text-secondary"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5 rounded-full bg-soft-green/70 p-0.5 text-emerald-hover"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="m10 2 6 2.5V9c0 3.7-2.4 6.4-6 8-3.6-1.6-6-4.3-6-8V4.5L10 2Z" />
                  <path d="m7 9 2 2 4-4" />
                </svg>
                {signal}
              </span>
            ))}
          </div>

          <p className="mt-4 text-[12px] leading-5 text-text-muted">
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
