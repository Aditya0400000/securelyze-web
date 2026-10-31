"use client";

import Link from "next/link";

const CARD_ACCENTS = {
  lime: {
    icon: "border-emerald/20 bg-emerald/10 text-soft-green",
    dot: "bg-emerald",
  },
  sky: {
    icon: "border-emerald/20 bg-emerald/10 text-soft-green",
    dot: "bg-emerald",
  },
  cyan: {
    icon: "border-emerald-light/20 bg-emerald-light/10 text-soft-green",
    dot: "bg-emerald-light",
  },
  periwinkle: {
    icon: "border-emerald/20 bg-emerald/10 text-soft-green",
    dot: "bg-emerald",
  },
};

function ShieldIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3.25 5.5 5.75v5.1c0 4.08 2.76 7.7 6.5 8.9 3.74-1.2 6.5-4.82 6.5-8.9v-5.1L12 3.25Z" />
      <path d="M9.25 11.8h5.5M9.25 14.3h3.4" />
    </svg>
  );
}

function CertificateIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4.5" y="9.25" width="15" height="10.25" rx="2.25" />
      <path d="M8 9.25V7.7a4 4 0 0 1 8 0v1.55M12 13.2v2.1" />
    </svg>
  );
}

function HeadersIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.25h14M5 9.5h10.5M5 13.75h7M5 18h11.5" />
    </svg>
  );
}

function DnsIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="7.4" />
      <path d="M4.8 12h14.4M12 4.6c1.9 2 2.95 4.55 2.95 7.4S13.9 17.4 12 19.4c-1.9-2-2.95-4.55-2.95-7.4S10.1 6.6 12 4.6Z" />
      <circle cx="17.8" cy="6.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="6.2" cy="17.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AssetsIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2.25" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="5.3" />
      <path d="M12 3.4v3.3M20.6 12h-3.3M12 20.6v-3.3M3.4 12h3.3" />
      <circle cx="18.2" cy="7.4" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="6.2" cy="16.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PreviewCard({ label, caption, icon, accent, children }) {
  const styles = CARD_ACCENTS[accent];

  return (
    <div className="relative min-h-[7.2rem] overflow-hidden rounded-[1.05rem] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-[10px] border ${styles.icon}`}
        >
          {icon}
        </span>
        <span
          aria-hidden="true"
          className={`h-1 w-1 rounded-full opacity-80 ${styles.dot}`}
        />
      </div>

      <p className="mt-3 text-[11.5px] font-semibold leading-[1.25] text-white/90">
        {label}
      </p>
      <p className="mt-0.5 text-[9.5px] font-medium uppercase tracking-[0.12em] text-white/35">
        {caption}
      </p>

      <div aria-hidden="true" className="mt-3">
        {children}
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[34rem] lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_42%,rgba(16,185,129,0.24),transparent_62%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-12 top-8 -z-10 h-52 w-52 rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-10 bottom-6 -z-10 h-32 w-32 rounded-full border border-emerald/10"
      />

      <div className="relative rounded-[1.9rem] border border-white/[0.14] bg-white/[0.065] p-1.5 shadow-[0_45px_120px_-50px_rgba(16,26,24,0.95),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/[0.1] bg-dark-green/95 p-3.5 sm:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_at_50%_15%,black,transparent_76%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-60 w-60 rounded-full bg-emerald/10 blur-3xl"
          />

          <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.07] pb-3.5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-emerald/25 bg-emerald/10 text-emerald">
                <ShieldIcon className="h-[17px] w-[17px]" />
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Securelyze
                </p>
                <p className="mt-0.5 truncate text-[12px] font-medium text-white/80">
                  Security workspace
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Preview
            </span>
          </div>

          <div className="relative mt-3.5 overflow-hidden rounded-[1.2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(24,59,50,0.32),rgba(16,26,24,0.3))] px-4 py-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(16,185,129,0.1),transparent_34%)]"
            />

            <div className="relative flex items-center gap-4">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-[6.5rem] sm:w-[6.5rem]">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-white/[0.08]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-[13px] rounded-full border border-dashed border-white/[0.11]"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-1 top-3 h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_12px_var(--emerald)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 left-1.5 h-1 w-1 rounded-full bg-emerald/80"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald/25 bg-dark-green text-emerald shadow-[0_0_34px_-6px_var(--glow-emerald)]">
                  <ShieldIcon className="h-6 w-6" />
                </span>
              </div>

              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.17em] text-white/40">
                  Illustration
                </span>
                <p className="mt-2 text-[12.5px] font-medium leading-5 text-white/80">
                  A unified view of your public web presence.
                </p>
                <p className="mt-1 text-[10px] leading-4 text-white/35">
                  Designed for future live checks.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-3 grid grid-cols-2 gap-2.5 sm:gap-3">
            <PreviewCard
              label="SSL/TLS Certificate"
              caption="Encryption layer"
              accent="lime"
              icon={<CertificateIcon className="h-[17px] w-[17px]" />}
            >
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald/80" />
                <span className="h-px flex-1 bg-gradient-to-r from-emerald/45 to-emerald/10" />
                <span className="h-1.5 w-1.5 rounded-full border border-emerald/50" />
                <span className="h-px w-5 bg-white/10" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>
            </PreviewCard>

            <PreviewCard
              label="Security Headers"
              caption="Response policy"
              accent="sky"
              icon={<HeadersIcon className="h-[17px] w-[17px]" />}
            >
              <div className="space-y-1.5">
                <span className="block h-1 w-full rounded-full bg-emerald/25" />
                <span className="block h-1 w-4/5 rounded-full bg-emerald/15" />
                <span className="block h-1 w-3/5 rounded-full bg-white/10" />
              </div>
            </PreviewCard>

            <PreviewCard
              label="DNS Analysis"
              caption="Name resolution"
              accent="cyan"
              icon={<DnsIcon className="h-[17px] w-[17px]" />}
            >
              <svg
                viewBox="0 0 110 24"
                fill="none"
                className="h-6 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M6 17 27 8l22 10 23-12 32 9"
                  stroke="rgba(52,211,153,0.35)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="6" cy="17" r="2" fill="var(--emerald-light)" fillOpacity="0.75" />
                <circle cx="49" cy="18" r="1.6" fill="var(--emerald-light)" fillOpacity="0.45" />
                <circle cx="72" cy="6" r="2" fill="var(--emerald-light)" fillOpacity="0.75" />
                <circle cx="104" cy="15" r="1.4" fill="var(--white)" fillOpacity="0.35" />
              </svg>
            </PreviewCard>

            <PreviewCard
              label="Asset Discovery"
              caption="Public footprint"
              accent="periwinkle"
              icon={<AssetsIcon className="h-[17px] w-[17px]" />}
            >
              <svg
                viewBox="0 0 110 24"
                fill="none"
                className="h-6 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M13 15 37 8l23 9 20-11 17 8"
                  stroke="rgba(16,185,129,0.28)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="13" cy="15" r="2.2" fill="var(--emerald)" fillOpacity="0.8" />
                <circle cx="60" cy="17" r="1.8" fill="var(--emerald)" fillOpacity="0.55" />
                <circle cx="80" cy="6" r="2.2" fill="var(--emerald)" fillOpacity="0.8" />
                <circle cx="97" cy="14" r="1.4" fill="var(--white)" fillOpacity="0.35" />
              </svg>
            </PreviewCard>
          </div>

          <div className="relative mt-3.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-white/[0.07] pt-3">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30">
              <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
              Visual preview only
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/25">
              No live data
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -left-4 top-1/3 hidden h-20 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent sm:block"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="security-checker"
      aria-labelledby="hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-gradient-hero font-sans text-white selection:bg-emerald selection:text-charcoal"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[12%] top-[4%] h-[34rem] w-[34rem] rounded-full bg-emerald-hover/15 blur-[140px]" />
        <div className="absolute right-[-10%] top-[-6%] h-[42rem] w-[42rem] rounded-full bg-emerald/12 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[34%] h-[26rem] w-[26rem] rounded-full bg-emerald/[0.04] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-[64%] bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:pb-24 lg:pt-24 xl:gap-14">
        <div className="lg:col-span-7">
          <div className="inline-flex rounded-full bg-[linear-gradient(120deg,var(--emerald)_0%,var(--soft-green)_50%,var(--emerald-hover)_100%)] p-px shadow-[0_0_34px_-12px_var(--glow-emerald)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-dark-green/95 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[-0.005em] text-white/90 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-soft-green shadow-[0_0_9px_var(--soft-green)]"
              />
              Your Website. Our Priority.
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 max-w-[43rem] text-balance text-[2.5rem] font-semibold leading-[1.01] tracking-[-0.055em] text-white sm:text-[3.25rem] lg:text-[2.85rem] xl:text-[3.65rem]"
          >
            <span className="sm:block">
              Free{" "}
              <span className="text-emerald drop-shadow-[0_0_20px_var(--glow-emerald)]">
                Website Security
              </span>
            </span>{" "}
            <span className="sm:block">
              Checker &amp; <span className="text-emerald">Asset</span>
            </span>{" "}
            <span className="sm:block">
              <span className="text-emerald">Discovery</span> Tools
            </span>
          </h1>

          <p className="mt-5 max-w-[36rem] text-pretty text-[15px] leading-[1.7] text-white/85 sm:text-base">
            Check your website’s security configuration, review SSL/TLS
            certificates and DNS records, identify missing security headers, and
            discover internet-facing digital assets—all from one simple
            platform.
          </p>

          <div className="mt-8 flex max-w-[37rem] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/platform#website-security-check"
              className="btn-primary group w-full sm:w-auto"
            >
              Security Check
              <span
                aria-hidden="true"
                className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>

            <Link
              href="/platform#assets-discovery"
              className="group inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-soft-green/25 bg-white/5 px-5 text-sm font-semibold tracking-[-0.01em] text-soft-green transition duration-200 ease-out hover:border-emerald/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-safe:hover:-translate-y-px motion-reduce:transition-none sm:w-auto"
            >
              Asset Discovery
              <span
                aria-hidden="true"
                className="text-[14px] text-soft-green transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <DashboardPreview />
          <p className="sr-only">
            Decorative dashboard illustration with SSL/TLS Certificate, Security
            Headers, DNS Analysis, and Asset Discovery preview cards. It does not
            show live scan results.
          </p>
        </div>
      </div>
    </section>
  );
}
