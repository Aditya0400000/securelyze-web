import Link from "next/link";

import {
  ArrowRightIcon,
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
} from "./about/AboutIcons";

const FEATURES = [
  {
    title: "SSL/TLS Analysis",
    description: "Review SSL certificates and TLS configuration.",
    icon: CertificateIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "DNS Analysis",
    description: "Explore DNS records and identify configuration details.",
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
    title: "HTTPS Check",
    description: "Verify whether a website uses a secure HTTPS connection.",
    icon: GlobeIcon,
    href: "/platform#website-security-check",
  },
  {
    title: "Subdomain Discovery",
    description: "Explore publicly discoverable subdomains.",
    icon: RadarIcon,
  },
  {
    title: "Asset Discovery",
    description: "Explore publicly discoverable internet-facing assets.",
    icon: AssetsIcon,
  },
];

// Matches the Explore Full Platform CTA background in Navbar.jsx.
const LABEL_HIGHLIGHT =
  "relative isolate transition-[color] duration-200 before:absolute before:-inset-x-2 before:-inset-y-1 before:-z-10 before:rounded-[2px] before:bg-[#C6F36A] before:opacity-0 before:transition-opacity before:duration-200 before:content-[''] group-hover:text-[#071D34] group-hover:before:opacity-100 motion-reduce:transition-none motion-reduce:before:transition-none";

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  const isLinked = Boolean(feature.href);
  const Card = isLinked ? Link : "article";
  const cardProps = isLinked ? { href: feature.href } : {};

  return (
    <Card
      {...cardProps}
      className="group relative flex h-full min-w-0 flex-col rounded-[3px] border border-[#D5E0E9] bg-white/90 p-5 transition-[translate,border-color,box-shadow] duration-200 ease-out hover:z-10 hover:border-[#B8C5D0] hover:shadow-[0_14px_30px_-24px_rgba(7,29,52,0.45)] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172554] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-[#D6E1EA] bg-white text-[#0B2B45] transition-[border-color] duration-200 group-hover:border-[#B8C5D0] motion-reduce:transition-none">
          <Icon className="h-[18px] w-[18px]" />
        </span>

        <span className={`inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5D7487] ${LABEL_HIGHLIGHT}`}>
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 ${
              isLinked ? "bg-[#5C8414]" : "bg-[#94A3B8]"
            }`}
          />
          {isLinked ? "Preview only" : "Planned"}
        </span>
      </div>

      <h3 className="mt-5 text-pretty text-[17px] font-semibold leading-[1.3] tracking-[-0.025em] text-[#172554] sm:text-[18px]">
        {feature.title}
      </h3>
      <p className="mt-2.5 text-pretty text-[14px] leading-[1.65] text-[#475569]">
        {feature.description}
      </p>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-3 border-t border-[#E3EAF0] pt-4">
          <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] text-[#6B7C8B] ${LABEL_HIGHLIGHT}`}>
            {isLinked ? "Open checker" : "Future release"}
          </span>

          {isLinked ? (
            <ArrowRightIcon className="h-4 w-4 text-[#172554] transition-[translate] duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
          ) : (
            <span aria-hidden="true" className="h-px w-6 bg-[#C6D2DC]" />
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
      className="relative scroll-mt-24 bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_50%,#F4F8FB_64%,#F8FAFC_79%,#FCFDFE_92%,#FFFFFF_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[42rem]">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2E526F]">
            <span aria-hidden="true" className="h-px w-8 bg-[#6F9E13]/50" />
            Security Features
          </p>

          <h2
            id="security-features-heading"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#172554] sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            Explore Our Security Features
          </h2>

          <p className="mt-5 max-w-[38rem] text-pretty text-[15px] leading-[1.75] text-[#475569] sm:mt-6 sm:text-base">
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
