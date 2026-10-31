import Link from "next/link";

import { ArrowRightIcon, CheckIcon } from "./PricingIcons";

const SILVER_FEATURES = [
  "Basic SSL/TLS certificate checks",
  "Basic domain/DNS checks",
  "Basic security-header checks",
  "Basic HTTPS status check",
  "Basic issue summary",
];

const CUSTOM_FEATURES = [
  "Higher or custom check limits",
  "Multiple users or team access",
  "Advanced security scanning",
  "Detailed reports and integrations",
  "Priority support",
];

function SilverPlanIllustration() {
  return (
    <svg
      role="img"
      aria-labelledby="silver-plan-illustration-title"
      viewBox="0 0 640 300"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      fill="none"
    >
      <title id="silver-plan-illustration-title">
        A browser window with a gold security shield and checkmarks
      </title>
      <defs>
        <linearGradient id="silver-plan-browser" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ECFDF5" />
          <stop offset="1" stopColor="#ECFDF5" />
        </linearGradient>
        <linearGradient id="silver-plan-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D1FAE5" />
          <stop offset="0.48" stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="silver-plan-shield-inner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D1FAE5" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <filter
          id="silver-plan-shadow"
          x="-40%"
          y="-40%"
          width="180%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="14"
            floodColor="#047857"
            floodOpacity="0.22"
          />
        </filter>
      </defs>

      <g opacity="0.72">
        <circle cx="92" cy="70" r="34" stroke="#D1FAE5" />
        <circle cx="560" cy="230" r="44" stroke="#D1FAE5" />
        <path
          d="M36 250h92M512 58h88"
          stroke="#D1FAE5"
          strokeDasharray="3 6"
        />
        <circle cx="70" cy="236" r="3" fill="#D1FAE5" />
        <circle cx="572" cy="78" r="3" fill="#D1FAE5" />
      </g>

      <g filter="url(#silver-plan-shadow)">
        <rect
          x="76"
          y="54"
          width="356"
          height="204"
          rx="20"
          fill="url(#silver-plan-browser)"
          stroke="#D1FAE5"
        />
        <path
          d="M76 74a20 20 0 0 1 20-20h316a20 20 0 0 1 20 20v22H76V74Z"
          fill="#ECFDF5"
        />
        <circle cx="96" cy="74" r="3.2" fill="#D1FAE5" />
        <circle cx="108" cy="74" r="3.2" fill="#D1FAE5" />
        <circle cx="120" cy="74" r="3.2" fill="#D1FAE5" />
        <rect
          x="140"
          y="68"
          width="220"
          height="12"
          rx="6"
          fill="#ECFDF5"
          stroke="#D1FAE5"
        />
        <rect x="154" y="72" width="92" height="4" rx="2" fill="#D1FAE5" />

        <rect
          x="100"
          y="120"
          width="206"
          height="108"
          rx="14"
          fill="#FFFFFF"
          stroke="#D1FAE5"
        />
        <rect x="116" y="136" width="76" height="8" rx="4" fill="#D1FAE5" />
        <rect x="116" y="152" width="126" height="5" rx="2.5" fill="#D1FAE5" />
        <rect x="116" y="164" width="104" height="5" rx="2.5" fill="#D1FAE5" />

        <g>
          <circle
            cx="124"
            cy="190"
            r="8"
            fill="#ECFDF5"
            stroke="#D1FAE5"
          />
          <path
            d="m120.5 190 2.4 2.4 4.4-4.6"
            stroke="#047857"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="140" y="186" width="90" height="5" rx="2.5" fill="#D1FAE5" />
          <circle
            cx="124"
            cy="212"
            r="8"
            fill="#ECFDF5"
            stroke="#D1FAE5"
          />
          <path
            d="m120.5 212 2.4 2.4 4.4-4.6"
            stroke="#047857"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="140" y="208" width="72" height="5" rx="2.5" fill="#D1FAE5" />
        </g>
      </g>

      <g filter="url(#silver-plan-shadow)">
        <circle cx="474" cy="146" r="78" fill="#ECFDF5" stroke="#D1FAE5" />
        <circle
          cx="474"
          cy="146"
          r="66"
          stroke="#D1FAE5"
          strokeDasharray="2 6"
        />
        <g transform="translate(416 92)">
          <path
            d="M58 0 112 21v42c0 38-22.6 68.8-54 84-31.4-15.2-54-46-54-84V21L58 0Z"
            fill="url(#silver-plan-shield)"
            stroke="#047857"
            strokeWidth="1.5"
          />
          <path
            d="M58 14 99 30v33c0 29-17 53-41 65-24-12-41-36-41-65V30L58 14Z"
            fill="url(#silver-plan-shield-inner)"
            stroke="#ECFDF5"
            strokeOpacity="0.45"
          />
          <path
            d="m38 55 13 13 27-29"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      <path d="M330 278h220" stroke="#D1FAE5" strokeDasharray="4 7" />
    </svg>
  );
}

function CustomPlanIllustration() {
  return (
    <svg
      role="img"
      aria-labelledby="custom-plan-illustration-title"
      viewBox="0 0 640 300"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      fill="none"
    >
      <title id="custom-plan-illustration-title">
        A cloud connected to server racks and a security configuration panel
      </title>
      <defs>
        <linearGradient id="custom-plan-cloud" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#ECFDF5" />
        </linearGradient>
        <linearGradient id="custom-plan-server" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <filter
          id="custom-plan-shadow"
          x="-40%"
          y="-40%"
          width="180%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="14"
            floodColor="#047857"
            floodOpacity="0.14"
          />
        </filter>
      </defs>

      <g opacity="0.72">
        <circle cx="82" cy="74" r="38" stroke="#E2E8F0" />
        <circle cx="568" cy="220" r="46" stroke="#E2E8F0" />
        <path
          d="M42 246h98M508 54h92"
          stroke="#E2E8F0"
          strokeDasharray="3 6"
        />
        <circle cx="70" cy="222" r="3" fill="#D1FAE5" />
        <circle cx="574" cy="82" r="3" fill="#D1FAE5" />
        <circle cx="112" cy="56" r="2" fill="#D1FAE5" />
        <circle cx="540" cy="246" r="2" fill="#D1FAE5" />
      </g>

      <g filter="url(#custom-plan-shadow)">
        <path
          d="M196 124c-22 0-40-18-40-40 0-21 16-38 37-39 6-27 30-47 59-47 29 0 53 20 59 47 24 1 43 21 43 45 0 25-20 45-45 45H196Z"
          fill="url(#custom-plan-cloud)"
          stroke="#D1FAE5"
        />
        <path
          d="M204 110h194"
          stroke="#E2E8F0"
          strokeLinecap="round"
        />
        <g transform="translate(290 46)">
          <path
            d="M30 0 58 11v22c0 19-12 35-28 42C14 68 2 52 2 33V11L30 0Z"
            fill="#ECFDF5"
            stroke="#059669"
            strokeWidth="1.5"
          />
          <path
            d="m19 32 7 7 14-15"
            stroke="#047857"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      <path
        d="M236 122 174 174M404 122l62 52"
        stroke="#D1FAE5"
        strokeDasharray="4 5"
      />
      <circle cx="174" cy="174" r="4" fill="#34D399" />
      <circle cx="466" cy="174" r="4" fill="#34D399" />

      <g filter="url(#custom-plan-shadow)">
        <rect
          x="92"
          y="174"
          width="156"
          height="96"
          rx="14"
          fill="url(#custom-plan-server)"
          stroke="#D1FAE5"
        />
        <rect
          x="104"
          y="186"
          width="132"
          height="26"
          rx="7"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />
        <circle cx="116" cy="199" r="3" fill="#059669" />
        <rect x="128" y="196" width="54" height="5" rx="2.5" fill="#E2E8F0" />
        <rect
          x="104"
          y="220"
          width="132"
          height="26"
          rx="7"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />
        <circle cx="116" cy="233" r="3" fill="#34D399" />
        <rect x="128" y="230" width="72" height="5" rx="2.5" fill="#E2E8F0" />
      </g>

      <g filter="url(#custom-plan-shadow)">
        <rect
          x="392"
          y="174"
          width="156"
          height="96"
          rx="14"
          fill="url(#custom-plan-server)"
          stroke="#D1FAE5"
        />
        <rect
          x="404"
          y="186"
          width="132"
          height="26"
          rx="7"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />
        <circle cx="416" cy="199" r="3" fill="#059669" />
        <rect x="428" y="196" width="44" height="5" rx="2.5" fill="#E2E8F0" />
        <rect
          x="404"
          y="220"
          width="132"
          height="26"
          rx="7"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />
        <circle cx="416" cy="233" r="3" fill="#34D399" />
        <rect x="428" y="230" width="64" height="5" rx="2.5" fill="#E2E8F0" />
      </g>

      <g transform="translate(508 84)">
        <circle cx="28" cy="28" r="28" fill="#ECFDF5" stroke="#D1FAE5" />
        <path
          d="M28 11 43 17v13c0 12-6 21-15 26-9-5-15-14-15-26V17l15-6Z"
          fill="#FFFFFF"
          stroke="#059669"
          strokeWidth="1.5"
        />
        <path
          d="m21 27 4.5 4.5 9-9"
          stroke="#047857"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

function PlanFeatureList({ features, tone, proposed = false }) {
  const isGold = tone === "gold";

  return (
    <div
      className={`mt-5 border-t pt-4 ${
        isGold ? "border-[#D1FAE5]" : "border-[#E2E8F0]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p
          className={`text-[9.5px] font-semibold uppercase tracking-[0.18em] ${
            isGold ? "text-[#047857]" : "text-[#475569]"
          }`}
        >
          INCLUDES
        </p>
        {proposed ? (
          <span className="rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
            Proposed
          </span>
        ) : null}
      </div>

      <ul className="mt-3 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex min-w-0 items-start gap-2.5">
            <span
              className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border ${
                isGold
                  ? "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]"
                  : "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]"
              }`}
            >
              <CheckIcon className="h-[11px] w-[11px]" />
            </span>
            <span
              className={`min-w-0 text-[12.5px] leading-[1.5] ${
                isGold ? "text-[#1F2937]" : "text-[#475569]"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DemoPlaceholder({ tone }) {
  const isGold = tone === "gold";

  return (
    <p className="mt-2 text-center">
      {/* TODO: Replace this placeholder with the confirmed demo scheduling route when available. */}
      <span
        aria-disabled="true"
        title="Demo scheduling link pending"
        className={`inline-flex cursor-default items-center gap-1.5 text-[11px] font-semibold underline decoration-1 underline-offset-4 ${
          isGold
            ? "text-[#047857] decoration-[#10B981]/60"
            : "text-[#047857] decoration-[#D1FAE5]"
        }`}
      >
        Book a Demo
        <ArrowRightIcon className="h-2.5 w-2.5" />
      </span>
    </p>
  );
}

export default function PricingHero() {
  return (
    <section
      id="plans"
      aria-labelledby="pricing-plans-heading"
      aria-describedby="pricing-plans-description pricing-plan-note"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_50%,#F4F8FB_64%,#F8FAFC_79%,#FCFDFE_92%,#FFFFFF_100%)] py-16 font-sans selection:bg-[#10B981] selection:text-white sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-13rem] h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-[#E2E8F0]/70 blur-[120px]" />
        <div className="absolute -left-28 bottom-[-10rem] h-[24rem] w-[24rem] rounded-full border border-[#E2E8F0]" />
        <div className="absolute -right-36 top-24 h-[30rem] w-[30rem] rounded-full border border-[#E2E8F0]/80" />
        <div className="absolute -right-20 top-40 h-[21rem] w-[21rem] rounded-full border border-dashed border-[#E2E8F0]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_28%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[52rem] text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white/60 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#475569] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.55)]"
            />
            Plans &amp; pricing
          </p>

          <h1
            id="pricing-plans-heading"
            className="mt-6 text-balance text-[2.2rem] font-bold leading-[1.02] tracking-[-0.06em] text-[#101A18] min-[390px]:text-[2.7rem] sm:text-[3.3rem] lg:text-[4rem]"
          >
            Simple Plans for Stronger Security
          </h1>

          <p
            id="pricing-plans-description"
            className="mx-auto mt-5 max-w-[42rem] text-pretty text-[14.5px] leading-[1.72] text-[#475569] sm:text-[15.5px]"
          >
            Start with the essential security checks you need today, or choose a
            custom solution shaped around your team and infrastructure.
          </p>
        </div>

        <div
          id="included"
          className="mx-auto mt-12 grid max-w-[60rem] scroll-mt-28 gap-6 md:mt-14 md:grid-cols-2 md:gap-6 lg:mt-16 lg:gap-8"
        >
          <article
            aria-labelledby="silver-plan-heading"
            className="group relative mx-auto flex h-full w-full min-w-0 max-w-[30rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#D1FAE5] bg-[linear-gradient(180deg,#FFFDF7_0%,#FBF3E1_100%)] shadow-[-8px_28px_65px_-40px_rgba(5,150,105,0.45),0_12px_30px_-24px_rgba(5,150,105,0.2)] transition-[rotate,translate,box-shadow,border-color] duration-300 ease-out hover:border-[#10B981] hover:shadow-[-12px_38px_80px_-42px_rgba(5,150,105,0.55),0_18px_36px_-26px_rgba(5,150,105,0.25)] md:z-10 md:max-w-none md:rotate-[-0.8deg] md:motion-safe:hover:-translate-y-1.5 md:motion-safe:hover:rotate-[-1.2deg] lg:rotate-[-1.5deg] lg:motion-safe:hover:-translate-y-2 lg:motion-safe:hover:rotate-[-2.1deg] motion-reduce:transition-none"
          >
            <div className="relative h-[10.5rem] overflow-hidden border-b border-[#D1FAE5] bg-[linear-gradient(180deg,#FFFDF7_0%,#F9EFD9_100%)] sm:h-[11.5rem]">
              <SilverPlanIllustration />
              <span className="absolute left-1/2 top-2.5 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#D1FAE5] bg-[#ECFDF5]/95 px-2.5 py-0.5 text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[#047857] shadow-[0_8px_20px_-14px_rgba(5,150,105,0.5)] backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#10B981]"
                />
                Most Popular
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h2
                id="silver-plan-heading"
                className="text-[1.5rem] font-bold leading-none tracking-[-0.045em] text-[#101A18] sm:text-[1.7rem]"
              >
                Silver
              </h2>
              <p className="mt-2 max-w-[22rem] text-[12.5px] leading-[1.6] text-[#475569]">
                Essential security checks for your website.
              </p>

              <div className="mt-4 flex flex-wrap items-end gap-x-2.5 gap-y-1">
                <span
                  aria-hidden="true"
                  className="mb-1.5 text-[13.5px] font-medium text-[#64748B] line-through decoration-[#94A3B8] decoration-[1.5px]"
                >
                  $49
                </span>
                <span className="text-[2.35rem] font-bold leading-[0.9] tracking-[-0.07em] text-[#101A18]">
                  $0
                </span>
                <span className="mb-0.5 text-[11.5px] font-medium text-[#64748B]">
                  / month
                </span>
              </div>
              <p className="mt-1.5 text-[9.5px] font-medium uppercase tracking-[0.11em] text-[#64748B]">
                $49 is a visual reference only
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D1FAE5] bg-[#ECFDF5] px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#047857]">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#10B981]"
                  />
                  Proposed limit
                </span>
                <span className="text-[11px] font-medium text-[#475569]">
                  Up to 100 checks per month
                </span>
              </div>

              <PlanFeatureList features={SILVER_FEATURES} tone="gold" />

              <div className="mt-auto pt-5">
                <Link
                  href="/platform#website-security-check"
                  className="group/button inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-[#10B981] px-4 text-[12.5px] font-semibold tracking-[-0.005em] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_16px_30px_-20px_rgba(5,150,105,0.65)] transition-[background-color,translate] duration-200 ease-out hover:bg-[#059669] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ECFDF5] motion-safe:hover:-translate-y-px motion-reduce:transition-none"
                >
                  Get Started
                  <ArrowRightIcon className="h-3.5 w-3.5 transition-[translate] duration-200 group-hover/button:translate-x-0.5 motion-reduce:transition-none" />
                </Link>
                <DemoPlaceholder tone="gold" />
              </div>
            </div>
          </article>

          <article
            aria-labelledby="custom-plan-heading"
            className="group relative mx-auto flex h-full w-full min-w-0 max-w-[30rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#D1FAE5] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFD_100%)] shadow-[8px_28px_65px_-40px_rgba(24,59,50,0.3),0_12px_30px_-24px_rgba(24,59,50,0.14)] transition-[rotate,translate,box-shadow,border-color] duration-300 ease-out hover:border-[#D1FAE5] hover:shadow-[12px_38px_80px_-42px_rgba(24,59,50,0.38),0_18px_36px_-26px_rgba(24,59,50,0.18)] md:max-w-none md:rotate-[0.8deg] md:motion-safe:hover:-translate-y-1.5 md:motion-safe:hover:rotate-[1.2deg] lg:rotate-[1.5deg] lg:motion-safe:hover:-translate-y-2 lg:motion-safe:hover:rotate-[2.1deg] motion-reduce:transition-none"
          >
            <div className="relative h-[10.5rem] overflow-hidden border-b border-[#E2E8F0] bg-[linear-gradient(180deg,#F8FCFE_0%,#EAF4FB_100%)] sm:h-[11.5rem]">
              <CustomPlanIllustration />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h2
                id="custom-plan-heading"
                className="text-[1.5rem] font-bold leading-none tracking-[-0.045em] text-[#183B32] sm:text-[1.7rem]"
              >
                Custom
              </h2>
              <p className="mt-2 max-w-[22rem] text-[12.5px] leading-[1.6] text-[#475569]">
                Tailored to your unique security needs.
              </p>

              <div className="mt-4">
                <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  Scoped to your team
                </p>
                <p className="mt-1 text-[1.8rem] font-bold leading-none tracking-[-0.055em] text-[#183B32] sm:text-[1.95rem]">
                  Custom Pricing
                </p>
              </div>

              <PlanFeatureList
                features={CUSTOM_FEATURES}
                tone="blue"
                proposed
              />

              <div className="mt-auto pt-5">
                {/* TODO: Replace this placeholder with the confirmed sales/contact route when available. */}
                <button
                  type="button"
                  disabled
                  title="Sales contact link pending"
                  aria-label="Contact Sales (sales contact link pending)"
                  className="inline-flex h-11 w-full cursor-default items-center justify-center gap-1.5 rounded-xl border border-[#D1FAE5] bg-white/70 px-4 text-[12.5px] font-semibold tracking-[-0.005em] text-[#047857] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_28px_-22px_rgba(4,120,87,0.25)] transition-[border-color,background-color] duration-200 disabled:opacity-100 motion-reduce:transition-none"
                >
                  Contact Sales
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
                <DemoPlaceholder tone="blue" />
              </div>
            </div>
          </article>
        </div>

        <p
          id="pricing-plan-note"
          className="mx-auto mt-10 max-w-[48rem] text-balance text-center text-[11px] leading-[1.7] text-[#64748B]"
        >
          Plan details, check limits, and custom capabilities are proposed and
          subject to change. The $49 figure is a visual reference only, not a
          previous price.
        </p>
      </div>
    </section>
  );
}
