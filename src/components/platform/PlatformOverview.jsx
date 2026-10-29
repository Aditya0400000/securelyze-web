import Link from "next/link";

import {
  ArrowRightIcon,
  AssetsIcon,
  ShieldIcon,
  WebsiteIcon,
} from "../about/AboutIcons";
import { LayersIcon } from "../pricing/PricingIcons";

const CAPABILITIES = [
  {
    number: "01",
    title: "Asset Discovery",
    description:
      "Explore publicly discoverable subdomains, DNS information, and internet-facing assets to better understand your external attack surface.",
    icon: AssetsIcon,
    href: "#assets-discovery",
    status: "In development",
    statusTone: "sky",
    iconTone: "border-[#C9DDF0] bg-[#EEF7FE] text-[#286B96]",
    ruleTone: "bg-[linear-gradient(90deg,#8FCCFF,transparent)]",
  },
  {
    number: "02",
    title: "Website Security Check",
    description:
      "Review SSL/TLS certificate context, DNS records, security headers, HTTPS status, and email-authentication signals in one place.",
    icon: WebsiteIcon,
    href: "#website-security-check",
    status: "Preview only",
    statusTone: "lime",
    iconTone: "border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]",
    ruleTone: "bg-[linear-gradient(90deg,#C6F36A,transparent)]",
  },
  {
    number: "03",
    title: "Security Overview",
    description:
      "Bring the checks together in a single summary with status indicators and a clear view of what to review next.",
    icon: LayersIcon,
    href: "#security-overview",
    status: "Illustrative preview",
    statusTone: "periwinkle",
    iconTone: "border-[#C9D4F5] bg-[#F0F3FF] text-[#4B5AA8]",
    ruleTone: "bg-[linear-gradient(90deg,#B9C3FF,transparent)]",
  },
];

const STATUS_TONES = {
  sky: {
    badge: "border-[#C9DDF0] bg-[#EEF7FE] text-[#286B96]",
    dot: "bg-[#8FCCFF]",
  },
  lime: {
    badge: "border-[#D7E9B0] bg-[#F4FBE5] text-[#4F7410]",
    dot: "bg-[#8ED13C]",
  },
  periwinkle: {
    badge: "border-[#D5D9F5] bg-[#F3F4FF] text-[#4B5AA8]",
    dot: "bg-[#B9C3FF]",
  },
};

function CapabilityCard({ capability }) {
  const Icon = capability.icon;
  const statusTone = STATUS_TONES[capability.statusTone];

  return (
    <Link
      href={capability.href}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-[#D7E4EF] bg-white/95 p-5 shadow-[0_18px_45px_-38px_rgba(7,29,52,0.35)] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:border-[#BFD5E6] hover:shadow-[0_24px_55px_-35px_rgba(7,29,52,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36536C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F5F9] motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-6"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px ${capability.ruleTone}`}
      />

      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${capability.iconTone}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-[#8A9BAA]">
          {capability.number}
        </span>
      </div>

      <span
        className={`mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] ${statusTone.badge}`}
      >
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${statusTone.dot}`}
        />
        {capability.status}
      </span>

      <h3 className="mt-3 text-pretty text-[1.15rem] font-bold leading-[1.25] tracking-[-0.03em] text-[#071D34] sm:text-[1.25rem]">
        {capability.title}
      </h3>
      <p className="mt-2.5 text-pretty text-[13.5px] leading-[1.7] text-[#526B7F]">
        {capability.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#E6EEF4] pt-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5D7487] transition-colors duration-200 group-hover:text-[#071D34] motion-reduce:transition-none">
          Explore section
        </span>
        <ArrowRightIcon className="h-4 w-4 text-[#071D34] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </div>
    </Link>
  );
}

export default function PlatformOverview() {
  return (
    <section
      id="platform-overview"
      aria-labelledby="platform-overview-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_52%,#F8FAFC_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[#DCE8F2]/60 blur-[110px]" />
        <div className="absolute -left-28 bottom-10 h-64 w-64 rounded-full border border-[#DCE7F1]" />
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full border border-dashed border-[#DCE7F1]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_18%,black,transparent_68%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[46rem]">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7410]">
            <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
            The platform
          </p>

          <h1
            id="platform-overview-heading"
            className="mt-4 text-balance text-[2.25rem] font-bold leading-[1.04] tracking-[-0.05em] text-[#071D34] sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            One platform. A clearer view of your public security surface.
          </h1>

          <p className="mt-5 max-w-[41rem] text-pretty text-[15px] leading-[1.75] text-[#526B7F] sm:mt-6 sm:text-base">
            Securelyze brings website security checks, asset discovery, and a
            unified overview together so you can understand what is exposed,
            what is covered, and what deserves a closer look.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E9B0] bg-[#F4FBE5] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#4F7410]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#8ED13C]"
              />
              Preview-first experience
            </span>
            <span className="text-[11.5px] leading-[1.6] text-[#5D7487]">
              Some capabilities are previews or in development.
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-12 lg:gap-5">
          {CAPABILITIES.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-[11.5px] leading-[1.65] text-[#5D7487]">
          <span
            aria-hidden="true"
            className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8FCCFF]"
          />
          The platform experience is being built in stages. Sample data is used
          where noted, and live checks are not yet available.
        </p>
      </div>
    </section>
  );
}
