import HomeSectionBadge from "@/components/home/HomeSectionBadge";
import Link from "next/link";

import { ArrowRightIcon } from "./AboutIcons";
import AboutInfrastructureVisual from "./AboutInfrastructureVisual";

const SIGNAL_LABELS = [
  "SSL/TLS",
  "DNS & email",
  "Security headers",
  "Public assets",
];

export default function AboutHero() {
  return (
    <section
      id="about"
      aria-labelledby="about-hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-[#E2E8F0] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#10B981] selection:text-[#101A18]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#D1FAE5]/65 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#10B981]/10 blur-3xl" />
        <div className="site-light-grid site-light-grid--right" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <HomeSectionBadge>ABOUT SECURELYZE</HomeSectionBadge>

          <h1
            id="about-hero-heading"
            className="mt-6 max-w-[43rem] text-balance text-[2.65rem] font-semibold leading-[1.01] tracking-[-0.055em] text-[#101A18] sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            Get to Know{" "}
            <span className="relative inline-block">
              Securelyze
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#C6F36A_0%,#8ED13C_60%,#6F9E13_100%)] sm:-bottom-1.5"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-[38rem] text-pretty text-[15.5px] leading-[1.72] text-[#475569] sm:text-[16.5px]">
            Securelyze helps you understand your internet-facing environment by
            bringing security configuration checks and asset discovery tools
            together in one place.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/platform#website-security-check"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#10B981] px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(5,150,105,0.9)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#059669] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(5,150,105,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Explore Security Checks
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>

            <a
              href="#ecosystem"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#183B32]/15 bg-white/70 px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#183B32] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-colors duration-200 hover:border-[#183B32]/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              See how it connects
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-t border-[#E2E8F0] pt-5">
            {SIGNAL_LABELS.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#475569]"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-[#059669]/70"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <AboutInfrastructureVisual />
        </div>
      </div>
    </section>
  );
}
