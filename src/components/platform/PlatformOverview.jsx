import Link from "next/link";

import {
  ArrowRightIcon,
  AssetsIcon,
  WebsiteIcon,
} from "../about/AboutIcons";

const PILLARS = [
  {
    title: "Website Security Check",
    description:
      "Review SSL/TLS certificate context, DNS security, browser-facing headers, and email-security signals in one place.",
    href: "#website-security-check",
    icon: WebsiteIcon,
    status: "4 dedicated tools",
    statusTone: "preview",
  },
  {
    title: "Asset Discovery",
    description:
      "Map publicly discoverable subdomains, domains, hosts, and internet-facing services.",
    href: "/platform/asset-discovery",
    icon: AssetsIcon,
    status: "5 dedicated pages",
    statusTone: "preview",
    ctaLabel: "Open overview",
  },
];

const STATUS_TONES = {
  preview: {
    badge: "border-emerald/20 bg-emerald/10 text-dark-green",
    dot: "bg-emerald",
  },
};

function PillarCard({ pillar }) {
  const Icon = pillar.icon;
  const statusTone = STATUS_TONES[pillar.statusTone];

  return (
    <Link
      href={pillar.href}
      className="group flex h-full min-w-0 flex-col rounded-3xl border border-border bg-white/95 p-5 shadow-card transition-all duration-200 ease-out hover:border-emerald/30 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald transition-colors duration-200 group-hover:bg-soft-green/30 motion-reduce:transition-none">
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] ${statusTone.badge}`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${statusTone.dot}`}
          />
          {pillar.status}
        </span>
      </div>

      <h2 className="mt-6 text-pretty text-[1.15rem] font-semibold leading-[1.25] tracking-[-0.03em] text-charcoal sm:text-[1.25rem]">
        {pillar.title}
      </h2>
      <p className="mt-2.5 text-pretty text-[13.5px] leading-[1.7] text-text-secondary">
        {pillar.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-200 group-hover:text-charcoal motion-reduce:transition-none">
          {pillar.ctaLabel ?? "Explore section"}
        </span>
        <ArrowRightIcon className="h-4 w-4 text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-emerald motion-reduce:transition-none" />
      </div>
    </Link>
  );
}

export default function PlatformOverview() {
  return (
    <section
      id="platform-overview"
      aria-labelledby="platform-overview-heading"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-border/55 blur-[110px]" />
        <div className="absolute -left-28 bottom-10 h-64 w-64 rounded-full border border-border" />
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full border border-dashed border-border/80" />
        <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-soft-green/30 blur-3xl" />
        <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-emerald/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[46rem]">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
            <span aria-hidden="true" className="h-px w-8 bg-emerald" />
            The platform
          </p>

          <h1
            id="platform-overview-heading"
            className="mt-4 text-balance text-[2.25rem] font-bold leading-[1.04] tracking-[-0.05em] text-charcoal sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Explore the Securelyze Platform
          </h1>

          <p className="mt-5 max-w-[41rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:mt-6 sm:text-base">
            Securelyze brings website security checks and asset discovery
            together, so you can review public security signals and understand
            the assets that make up your external surface.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#website-security-check" className="btn-primary group w-full sm:w-auto">
              Explore Security Check
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
            <Link
              href="/platform/asset-discovery"
              className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 text-sm font-semibold tracking-[-0.01em] text-dark-green transition-colors duration-200 hover:border-emerald/40 hover:bg-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none sm:w-auto"
            >
              View Asset Discovery
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-dark-green">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald"
              />
              Connected security view
            </span>
            <span className="text-[11.5px] leading-[1.6] text-text-muted">
              Website Security Check and Asset Discovery pages use clearly
              labelled sample data.
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:gap-5">
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-[11.5px] leading-[1.65] text-text-muted">
          <span
            aria-hidden="true"
            className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
          />
          Website Security Check and Asset Discovery pages use clearly labelled
          sample data, including illustrative asset relationships and service
          snapshots.
        </p>
      </div>
    </section>
  );
}
