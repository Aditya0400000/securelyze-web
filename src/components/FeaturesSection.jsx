import Link from "next/link";

import {
  ArrowRightIcon,
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  ShieldIcon,
} from "./about/AboutIcons";

const FEATURES = [
  {
    title: "SSL/TLS Analysis",
    description: "Review SSL certificates and TLS configuration.",
    icon: CertificateIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "DNS Security",
    description: "Review DNS records and configuration details.",
    icon: NetworkIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "Security Headers",
    description: "Check important HTTP security headers.",
    icon: CodeIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "Email Security",
    description: "Review SPF, DKIM, and DMARC authentication records.",
    icon: ShieldIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "HTTPS Check",
    description: "Verify whether a website uses a secure HTTPS connection.",
    icon: GlobeIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "Asset Discovery",
    description:
      "Explore Subdomain Discovery, DNS records, and other publicly visible internet-facing assets.",
    icon: AssetsIcon,
    href: "/platform#assets-discovery",
    ctaLabel: "Explore assets",
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  const isLinked = Boolean(feature.href);
  const Card = isLinked ? Link : "article";
  const cardProps = isLinked ? { href: feature.href } : {};

  return (
    <Card
      {...cardProps}
      className="group relative flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-200 ease-out hover:z-10 hover:border-emerald/40 hover:shadow-card-hover focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-light text-charcoal transition-colors duration-200 group-hover:border-emerald/30 group-hover:bg-soft-green/30 group-hover:text-emerald motion-reduce:transition-none">
          <Icon className="h-5 w-5" />
        </span>

        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 group-hover:border-emerald/30 group-hover:text-charcoal">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${
              isLinked
                ? "bg-emerald shadow-[0_0_6px_var(--emerald)]"
                : "bg-text-muted/60"
            }`}
          />
          {isLinked ? "Preview only" : "Planned"}
        </span>
      </div>

      <h3 className="mt-5 text-pretty text-[17px] font-semibold leading-[1.3] tracking-[-0.025em] text-charcoal transition-colors duration-200 group-hover:text-dark-green sm:text-[18px]">
        {feature.title}
      </h3>
      <p className="mt-2.5 text-pretty text-[14px] leading-[1.65] text-text-secondary">
        {feature.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted transition-colors duration-200 group-hover:text-emerald">
            {isLinked ? (feature.ctaLabel ?? "Open checker") : "Future release"}
          </span>

          {isLinked ? (
            <ArrowRightIcon className="h-4 w-4 text-text-muted transition-colors transition-transform duration-200 group-hover:text-emerald motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
          ) : (
            <span aria-hidden="true" className="h-px w-6 bg-border" />
          )}
        </div>
      </div>
    </Card>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="platform"
      aria-labelledby="security-features-heading"
      className="relative scroll-mt-24 border-t border-border/60 bg-gradient-subtle py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[42rem]">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-dark-green">
            <span aria-hidden="true" className="h-px w-8 bg-emerald" />
            Security Features
          </p>

          <h2
            id="security-features-heading"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-charcoal sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Explore Our Security Features
          </h2>

          <p className="mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:mt-6 sm:text-base">
            Understand your website&apos;s security with simple, actionable
            insights.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
