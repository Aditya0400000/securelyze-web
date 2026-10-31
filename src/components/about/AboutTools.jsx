import Link from "next/link";

import {
  ArrowRightIcon,
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
} from "./AboutIcons";

const CHECKER_SIGNALS = [
  { label: "SSL / TLS", icon: CertificateIcon },
  { label: "DNS", icon: NetworkIcon },
  { label: "Security headers", icon: CodeIcon },
];

const ASSET_GROUPS = ["Domains", "Subdomains", "Endpoints"];

export default function AboutTools() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_0%,rgba(209,250,229,0.5),transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#059669]">
            <span aria-hidden="true" className="h-px w-8 bg-[#059669]/45" />
            The tools
            <span aria-hidden="true" className="h-px w-8 bg-[#059669]/45" />
          </p>
          <h2
            id="tools-heading"
            className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.7rem]"
          >
            Two views of the same public picture.
          </h2>
          <p className="mx-auto mt-5 max-w-[37rem] text-pretty text-[14.5px] leading-[1.7] text-[#475569] sm:text-[15px]">
            The Security Checker looks at how a website is configured. Asset
            Discovery widens the frame to the public assets connected to it.
            Each answers a different question; together they form a more useful
            starting point.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-[0_25px_65px_-48px_rgba(16,26,24,0.55)] sm:p-8 lg:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#10B981]/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-[#10B981]/10 blur-2xl"
            />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]">
                  <ShieldIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                    Configuration context
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold text-[#183B32]">
                    Security Checker
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-[#E2E8F0] bg-white/80 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#64748B] sm:inline-flex">
                Public view
              </span>
            </div>

            <h3 className="relative mt-8 max-w-[27rem] text-balance text-[1.3rem] font-bold leading-[1.2] tracking-[-0.035em] text-[#101A18] sm:text-[1.55rem]">
              Understand a website&rsquo;s public configuration.
            </h3>
            <p className="relative mt-3 max-w-[29rem] text-pretty text-[13.5px] leading-[1.7] text-[#475569]">
              Review SSL/TLS certificate context, DNS records, and
              browser-facing security headers in one place, with enough context
              to decide what deserves a closer look.
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {CHECKER_SIGNALS.map((signal) => {
                const Icon = signal.icon;

                return (
                  <span
                    key={signal.label}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#475569]"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#047857]" />
                    {signal.label}
                  </span>
                );
              })}
            </div>

            <div className="relative mt-auto pt-8">
              <Link
                href="/platform#website-security-check"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#101A18] px-4 text-[12px] font-semibold tracking-[-0.005em] text-white shadow-[0_12px_28px_-18px_rgba(16,26,24,0.75)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#183B32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#059669] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none"
              >
                Open the Security Checker
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            </div>
          </article>

          <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[#183B32]/20 bg-[#101A18] p-6 text-white shadow-[0_25px_70px_-42px_rgba(16,26,24,0.85)] sm:p-8 lg:p-9">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#047857]/20 blur-[80px]" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#10B981]/[0.06] blur-[80px]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_55%_35%,black,transparent_76%)]" />
            </div>

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]">
                  <RadarIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    External footprint
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold text-white/85">
                    Asset Discovery
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/55 sm:inline-flex">
                Wider view
              </span>
            </div>

            <h3 className="relative mt-8 max-w-[27rem] text-balance text-[1.3rem] font-bold leading-[1.2] tracking-[-0.035em] text-white sm:text-[1.55rem]">
              See the public assets around a website.
            </h3>
            <p className="relative mt-3 max-w-[29rem] text-pretty text-[13.5px] leading-[1.7] text-white/65">
              Surface related domains, subdomains, and internet-facing
              endpoints that may make up a broader public footprint, extending
              the view beyond the home page.
            </p>

            <div className="relative mt-6 grid grid-cols-3 gap-2">
              {ASSET_GROUPS.map((group) => (
                <div
                  key={group}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-2.5 py-2.5"
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-[#10B981]/75"
                    />
                    <span className="text-[8.5px] font-semibold uppercase tracking-[0.13em] text-white/50">
                      {group}
                    </span>
                  </div>
                  <div className="mt-2.5 space-y-1.5" aria-hidden="true">
                    <span className="block h-1 w-full rounded-full bg-white/15" />
                    <span className="block h-1 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2 text-[11.5px] font-semibold text-[#10B981] transition-colors duration-200 hover:text-[#D1FAE5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101A18] motion-reduce:transition-none"
              >
                See how the view connects
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.13em] text-white/45">
                <AssetsIcon className="h-3.5 w-3.5" />
                Public footprint
              </span>
            </div>
          </article>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-[#183B32]/20 bg-[#101A18] p-7 shadow-[0_30px_80px_-50px_rgba(16,26,24,0.9)] sm:mt-16 sm:p-10 lg:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#047857]/20 blur-[100px]" />
            <div className="absolute -bottom-24 left-[30%] h-64 w-64 rounded-full bg-[#10B981]/[0.06] blur-[90px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_78%)]" />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-1/2 hidden h-52 w-52 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#10B981]">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#10B981]"
                />
                Start with visibility
              </p>
              <h2 className="mt-4 max-w-[37rem] text-balance text-[1.65rem] font-bold leading-[1.14] tracking-[-0.045em] text-white sm:text-[2.1rem]">
                See what your website shares with the public.
              </h2>
              <p className="mt-4 max-w-[34rem] text-pretty text-[13.5px] leading-[1.7] text-white/65">
                Use the Security Checker to review the public configuration of
                a website, then follow the signals that matter to your next
                question.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/platform#website-security-check"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#10B981] px-4 text-[12px] font-semibold tracking-[-0.005em] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(5,150,105,0.9)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18] motion-safe:hover:-translate-y-px motion-reduce:transition-none"
              >
                Open the Security Checker
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 text-[12px] font-semibold text-white/75 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18] motion-reduce:transition-none"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
