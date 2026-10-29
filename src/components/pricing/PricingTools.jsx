import Link from "next/link";

import {
  ArrowRightIcon,
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldScanIcon,
} from "./PricingIcons";

const CHECKER_SIGNALS = [
  { label: "SSL / TLS", icon: CertificateIcon },
  { label: "DNS records", icon: NetworkIcon },
  { label: "HTTP headers", icon: CodeIcon },
];

export default function PricingTools() {
  return (
    <section
      id="tools"
      aria-labelledby="pricing-tools-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7FAFC] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,232,247,0.58),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 hidden h-[30rem] w-[30rem] rounded-full border border-[#DCE7F1] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-36 hidden h-[22rem] w-[22rem] rounded-full border border-dashed border-[#DCE7F1]/80 lg:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[45rem] text-center">
          <p className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7410]">
            <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
            The tools
            <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
          </p>
          <h2
            id="pricing-tools-heading"
            className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.08] tracking-[-0.045em] text-[#071D34] sm:text-[2.35rem] lg:text-[2.7rem]"
          >
            A premium toolkit.{" "}
            <span className="text-[#5C8414]">A zero-dollar price.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[38rem] text-pretty text-[14.5px] leading-[1.7] text-[#526B7F] sm:text-[15px]">
            Inspect a website&rsquo;s public security signals or widen the view
            to the assets around it. Both tools sit at the center of the
            Securelyze experience.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[#D7E4EF] bg-[linear-gradient(155deg,#FFFFFF_0%,#F8FCF4_100%)] p-6 shadow-[0_25px_65px_-48px_rgba(7,29,52,0.55)] sm:p-8 lg:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#C6F36A]/30"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-[#C6F36A]/10 blur-2xl"
            />
            <ShieldScanIcon
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-7 -right-5 h-44 w-44 text-[#071D34]/[0.035]"
            />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]">
                  <ShieldScanIcon className="h-5 w-5" />
                </span>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5D7487]">
                  Configuration context
                </p>
              </div>
              <span className="hidden rounded-full border border-[#D7E4EF] bg-white/80 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#5D7487] sm:inline-flex">
                Public view
              </span>
            </div>

            <h3 className="relative mt-8 max-w-[28rem] text-balance text-[1.35rem] font-bold leading-[1.2] tracking-[-0.035em] text-[#071D34] sm:text-[1.6rem]">
              Website Security Checker
            </h3>
            <p className="relative mt-3 max-w-[30rem] text-pretty text-[13.5px] leading-[1.7] text-[#526B7F]">
              Inspect supported website security signals and configuration,
              from SSL/TLS certificate context and DNS records to HTTPS setup
              and browser-facing headers.
            </p>

            <div className="relative mt-7 rounded-2xl border border-[#DDE8F1] bg-white/80 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <div className="flex items-center justify-between gap-3 border-b border-[#E9F0F5] pb-2.5">
                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#5D7487]">
                  Public configuration view
                </span>
                <span className="text-[8px] font-medium uppercase tracking-[0.13em] text-[#5D7487]">
                  Illustrative
                </span>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {CHECKER_SIGNALS.map((signal) => {
                  const Icon = signal.icon;

                  return (
                    <div
                      key={signal.label}
                      className="rounded-xl border border-[#E4EDF3] bg-[#FAFCFE] px-2.5 py-2.5"
                    >
                      <div className="flex items-center gap-1.5">
                        <Icon className="h-3.5 w-3.5 text-[#5C8414]" />
                        <span className="truncate text-[9.5px] font-semibold text-[#36536C]">
                          {signal.label}
                        </span>
                      </div>
                      <div className="mt-2.5 space-y-1" aria-hidden="true">
                        <span className="block h-1 w-full rounded-full bg-[#DCE8F1]" />
                        <span className="block h-1 w-2/3 rounded-full bg-[#E7EFF5]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-auto pt-7">
              <Link
                href="/platform#website-security-check"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#071D34] px-4 text-[12px] font-semibold tracking-[-0.005em] text-white shadow-[0_12px_28px_-18px_rgba(7,29,52,0.75)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#0B2B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7410] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FCF4] motion-safe:hover:-translate-y-px motion-reduce:transition-none"
              >
                Explore Security Checker
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            </div>
          </article>

          <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[#0B3150]/20 bg-[#07152B] p-6 text-white shadow-[0_25px_70px_-42px_rgba(7,29,52,0.85)] sm:p-8 lg:p-9">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#5D4BC8]/25 blur-[85px]" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#C6F36A]/[0.07] blur-[85px]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_55%_35%,black,transparent_76%)]" />
            </div>

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]">
                  <RadarIcon className="h-5 w-5" />
                </span>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  External footprint
                </p>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/50 sm:inline-flex">
                Wider view
              </span>
            </div>

            <h3 className="relative mt-8 max-w-[28rem] text-balance text-[1.35rem] font-bold leading-[1.2] tracking-[-0.035em] text-white sm:text-[1.6rem]">
              Asset Discovery
            </h3>
            <p className="relative mt-3 max-w-[30rem] text-pretty text-[13.5px] leading-[1.7] text-white/65">
              Explore discoverable public-facing domains, subdomains, and
              digital assets that may make up a broader external footprint,
              extending the view beyond the home page.
            </p>

            <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#081A31]/80 p-3.5">
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-2.5">
                <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  Public footprint view
                </span>
                <span className="text-[8px] font-medium uppercase tracking-[0.13em] text-white/50">
                  Illustrative
                </span>
              </div>

              <svg
                aria-hidden="true"
                viewBox="0 0 360 108"
                className="mt-2 h-auto w-full"
                fill="none"
              >
                <path
                  d="M180 56 76 26M180 56 284 24M180 56 84 88M180 56 288 86M180 56 180 16"
                  stroke="rgba(185,195,255,0.2)"
                  strokeWidth="1"
                />
                <path
                  d="M76 26 36 48M284 24 328 46M84 88 40 94M288 86 332 92"
                  stroke="rgba(143,204,255,0.12)"
                  strokeWidth="1"
                />
                <circle cx="180" cy="56" r="18" fill="#B9C3FF" fillOpacity="0.08" stroke="#B9C3FF" strokeOpacity="0.45" />
                <circle cx="180" cy="56" r="4" fill="#C6F36A" />
                <circle cx="76" cy="26" r="6" fill="#8FCCFF" fillOpacity="0.72" />
                <circle cx="284" cy="24" r="8" fill="#B9C3FF" fillOpacity="0.18" stroke="#B9C3FF" strokeOpacity="0.55" />
                <circle cx="84" cy="88" r="5" fill="#B9C3FF" fillOpacity="0.55" />
                <circle cx="288" cy="86" r="7" fill="#8FCCFF" fillOpacity="0.2" stroke="#8FCCFF" strokeOpacity="0.55" />
                <circle cx="180" cy="16" r="3.5" fill="#C6F36A" fillOpacity="0.75" />
                <circle cx="36" cy="48" r="2.5" fill="#8FCCFF" fillOpacity="0.45" />
                <circle cx="328" cy="46" r="2.5" fill="#B9C3FF" fillOpacity="0.45" />
                <circle cx="40" cy="94" r="2" fill="#8FCCFF" fillOpacity="0.35" />
                <circle cx="332" cy="92" r="2" fill="#8FCCFF" fillOpacity="0.35" />
              </svg>
            </div>

            <div className="relative mt-auto pt-7">
              <Link
                href="/platform#assets-discovery"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#C6F36A] px-4 text-[12px] font-semibold tracking-[-0.005em] text-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(96,133,28,0.9)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#D2F77F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07152B] motion-safe:hover:-translate-y-px motion-reduce:transition-none"
              >
                Explore Asset Discovery
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
