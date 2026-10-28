import Link from "next/link";

import {
  ArrowRightIcon,
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  ShieldIcon,
} from "./about/AboutIcons";

const DASHBOARD_SIGNALS = [
  {
    label: "SSL/TLS",
    detail: "Certificate context",
    icon: CertificateIcon,
  },
  {
    label: "DNS Records",
    detail: "Routing & mail records",
    icon: NetworkIcon,
  },
  {
    label: "Security Headers",
    detail: "Browser policy context",
    icon: CodeIcon,
  },
];

function DashboardSignal({ label, detail, icon: Icon }) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2.5 sm:px-3.5 sm:py-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#8FCCFF]/15 bg-[#8FCCFF]/[0.07] text-[#C4E7FF]">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold tracking-[-0.01em] text-white sm:text-[12.5px]">
            {label}
          </p>
          <p className="text-[9px] leading-[1.5] text-white/55 sm:text-[10px]">
            {detail}
          </p>
        </div>
      </div>

      <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.035] px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-white/60">
        Sample
      </span>
    </div>
  );
}

function SecurityOverviewMockup() {
  return (
    <figure
      aria-labelledby="home-about-dashboard-caption"
      className="mx-auto w-full min-w-0 max-w-[36rem] lg:max-w-[39rem]"
    >
      <div className="rounded-[1.75rem] border border-[#D3DEE9] bg-[#071D34] p-1.5 shadow-[0_28px_70px_-52px_rgba(7,29,52,0.55)] sm:p-2">
        <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0A223B]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#C6F36A]/20 bg-[#C6F36A]/[0.07] text-[#C6F36A]">
                <ShieldIcon className="h-3.5 w-3.5" />
              </span>
              <span className="truncate text-[10px] font-semibold tracking-[-0.01em] text-white/80">
                Securelyze
              </span>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/60">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#C6F36A]"
              />
              Illustrative
            </span>
          </div>

          <div className="p-3.5 sm:p-4 lg:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  Security overview
                </p>
                <p className="mt-1.5 truncate text-[17px] font-semibold tracking-[-0.025em] text-white sm:text-[19px]">
                  example.com
                </p>
                <p className="mt-0.5 text-[9.5px] text-white/55 sm:text-[10px]">
                  Demo data · 3 signal groups
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-[#8FCCFF]/20 bg-[#8FCCFF]/[0.08] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#C4E7FF]">
                Sample site
              </span>
            </div>

            <div className="mt-4 space-y-2">
              {DASHBOARD_SIGNALS.map((signal) => (
                <DashboardSignal key={signal.label} {...signal} />
              ))}
            </div>

            <div className="mt-3 flex items-start gap-2 rounded-xl border border-[#C6F36A]/15 bg-[#C6F36A]/[0.035] px-3 py-2.5">
              <span
                aria-hidden="true"
                className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6F36A]"
              />
              <p className="text-[9.5px] leading-[1.55] text-white/60">
                Illustrative preview only. Sample indicators are not connected
                to a live scanner.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[8.5px] font-medium tracking-[0.02em] text-white/50 sm:px-5">
            <span>Securelyze / Security overview</span>
            <span>Sample data</span>
          </div>
        </div>
      </div>

      <figcaption id="home-about-dashboard-caption" className="sr-only">
        Illustrative security dashboard preview for example.com using sample
        data, showing SSL/TLS, DNS records, and security headers. This is not a
        live scan.
      </figcaption>
    </figure>
  );
}

export default function HomeAboutSection() {
  return (
    <section
      id="about-securelyze"
      aria-labelledby="home-about-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_50%,#F4F8FB_64%,#F8FAFC_79%,#FCFDFE_92%,#FFFFFF_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-14 xl:gap-16">
          <div className="order-1 min-w-0 md:order-2 md:col-span-5">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7A0A]">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#6F9E13]/50"
              />
              About Securelyze
            </p>

            <h2
              id="home-about-heading"
              className="mt-4 max-w-[34rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#172554] sm:text-[2.25rem] lg:text-[2.75rem]"
            >
              Security Clarity for Every Website.
            </h2>

            <p className="mt-5 max-w-[32rem] text-pretty text-[15px] leading-[1.75] text-[#475569] sm:mt-6 sm:text-base">
              Securelyze helps you understand your website&apos;s security
              configuration through clear insights into SSL/TLS, DNS records,
              and security headers. Our goal is to make website security easier
              to understand and help you identify potential issues.
            </p>

            <Link
              href="/about"
              className="group mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#071D34] px-5 text-[13px] font-semibold tracking-[-0.005em] text-white shadow-[0_12px_28px_-18px_rgba(7,29,52,0.75)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#0B2B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F9E13] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F5F9] motion-safe:hover:-translate-y-px motion-reduce:transition-none sm:mt-8 sm:w-auto"
            >
              <span>Learn More About Securelyze</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>

          <div className="order-2 min-w-0 md:order-1 md:col-span-7">
            <SecurityOverviewMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
