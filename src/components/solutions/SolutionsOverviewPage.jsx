import Link from "next/link";

import {
  ArrowRightIcon,
  CertificateIcon,
  CodeIcon,
  MailIcon,
  NetworkIcon,
  RadarIcon,
} from "../pricing/PricingIcons";
import SolutionClosingCta from "./SolutionClosingCta";
import SolutionSectionHeading from "./SolutionSectionHeading";

const AUDIENCES = [
  {
    number: "01",
    title: "Website Owners",
    description:
      "Understand your website security configuration and get better visibility into your digital presence.",
    focus: [
      "SSL/TLS",
      "DNS Security",
      "Security Headers",
      "Email Security",
      "Asset Discovery",
    ],
    href: "/solutions/website-owners",
    linkLabel: "Explore Website Owners",
  },
  {
    number: "02",
    title: "Developers",
    description:
      "Keep security checks close to your development and deployment workflow.",
    focus: [
      "Domain and subdomain visibility",
      "SSL/TLS configuration",
      "DNS records",
      "Security Headers",
      "Exposed services",
    ],
    href: "/solutions/developers",
    linkLabel: "Explore Developers",
  },
  {
    number: "03",
    title: "Small Businesses",
    description:
      "Build a practical understanding of your business website, domain, and email security.",
    focus: [
      "Website configuration",
      "Domain security",
      "Email authentication",
      "Digital asset visibility",
    ],
    href: "/solutions/small-businesses",
    linkLabel: "Explore Small Businesses",
  },
  {
    number: "04",
    title: "Security Teams",
    description:
      "Improve visibility across external-facing assets and website security configurations.",
    focus: [
      "Domain and subdomain discovery",
      "IP and host discovery",
      "Port and service discovery",
      "Website security checks",
    ],
    href: "/solutions/security-teams",
    linkLabel: "Explore Security Teams",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Asset Discovery",
    description:
      "Map the domains, subdomains, hosts, ports, and services that make up the public footprint.",
  },
  {
    title: "Website Security Check",
    description:
      "Review SSL/TLS, DNS, security headers, and email security context for the properties you are examining.",
  },
  {
    title: "Review available security information",
    description:
      "Bring the available context together to decide what to review, change, or ask about next.",
  },
];

const EXPLORE_LINKS = [
  {
    title: "SSL/TLS Analysis",
    description: "Certificate, HTTPS, and TLS configuration context.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "DNS records, resolution, and domain context.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description: "Browser-facing HTTP security headers.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description: "SPF, DKIM, and DMARC sender context.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
  {
    title: "Asset Discovery",
    description: "The connected view of the public footprint.",
    href: "/platform/asset-discovery",
    icon: RadarIcon,
  },
];

function AudienceLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-dark-green transition-colors duration-150 hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
    >
      {children}
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </Link>
  );
}

function AudienceFocus({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-[11.5px] font-medium leading-[1.5] text-text-secondary"
        >
          <span
            aria-hidden="true"
            className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-emerald"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AudienceRow({ audience }) {
  const { number, title, description, focus, href, linkLabel } = audience;

  return (
    <article className="grid gap-7 border-t border-border py-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-16 lg:py-12">
      <div className="order-2 lg:order-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
          Security focus
        </p>
        <AudienceFocus items={focus} />
      </div>

      <div className="order-1 min-w-0 lg:order-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
          Audience {number}
        </p>
        <h3 className="mt-3 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.04em] text-charcoal sm:text-[2rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-[36rem] text-[14px] leading-[1.75] text-text-secondary">
          {description}
        </p>
        <AudienceLink href={href}>{linkLabel}</AudienceLink>
      </div>
    </article>
  );
}

export default function SolutionsOverviewPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <section
        aria-labelledby="solutions-heading"
        className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-white to-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[56rem] text-center">
            <p className="relative mx-auto flex w-fit items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span
                aria-hidden="true"
                className="absolute right-full top-1/2 mr-3 h-px w-8 -translate-y-1/2 bg-emerald sm:static sm:mr-0 sm:translate-y-0"
              />
              Solutions
            </p>

            <h1
              id="solutions-heading"
              className="mt-5 text-balance text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.06em] text-charcoal sm:text-[4rem] lg:text-[4.5rem]"
            >
              Security Clarity for Every Team
            </h1>

            <p className="mx-auto mt-5 max-w-[42rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Security clarity shaped for the way your team works and the risks
              you manage.
            </p>

            <p className="mx-auto mt-4 max-w-[42rem] text-pretty text-[13px] leading-[1.7] text-text-muted">
              Securelyze brings website security checks and asset discovery into
              one connected place, so every team can explore the configuration
              details and public assets that shape its security.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#solutions-audiences"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Solutions
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <Link
                href="/platform"
                className="btn-outline group w-full sm:w-auto"
              >
                Explore Full Platform
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-different-heading"
        className="border-b border-border bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SolutionSectionHeading
              id="why-different-heading"
              eyebrow="Why a different approach"
              title="Why Security Needs a Different Approach"
            />

            <div className="sm:border-l sm:border-emerald/30 sm:pl-8">
              <div className="space-y-5">
                <p className="text-[14.5px] leading-[1.8] text-text-secondary">
                  A website owner is responsible for the experience customers
                  see and trust.
                </p>
                <p className="text-[14.5px] leading-[1.8] text-text-secondary">
                  A developer is responsible for the configuration that ships.
                </p>
                <p className="text-[14.5px] leading-[1.8] text-text-secondary">
                  A small business is responsible for getting the basics right
                  without a large team.
                </p>
                <p className="text-[14.5px] leading-[1.8] text-text-secondary">
                  A security team is responsible for organizing visibility
                  across a changing asset surface.
                </p>
              </div>

              <p className="mt-6 border-t border-border pt-5 text-[14px] font-medium leading-[1.75] text-charcoal">
                Different responsibilities, one shared need: clear visibility
                into website configurations and exposed digital assets.
                Securelyze brings that view together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="solutions-audiences"
        aria-labelledby="solutions-audiences-heading"
        className="scroll-mt-24 border-b border-border bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SolutionSectionHeading
            id="solutions-audiences-heading"
            eyebrow="Built around your work"
            title="Built for Your Team"
            description="Security clarity shaped around the responsibilities, challenges, and security needs of your team."
          />

          <div className="mt-10 sm:mt-12">
            {AUDIENCES.map((audience) => (
              <AudienceRow key={audience.href} audience={audience} />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="connected-workflows-heading"
        className="border-b border-border bg-light/60 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolutionSectionHeading
            id="connected-workflows-heading"
            eyebrow="Connected workflows"
            title="One Platform, Connected Security Workflows"
            description="Asset Discovery and Website Security Check organize the information behind a review, so teams can move from public assets to configuration context to the next step."
            align="center"
          />

          <ol className="mt-12 grid lg:grid-cols-3">
            {WORKFLOW_STEPS.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={step.title}
                  className={`py-6 lg:px-8 lg:py-0 ${
                    index > 0
                      ? "border-t border-border lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald/20 bg-white text-[10px] font-bold text-dark-green">
                      {stepNumber}
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
                      Step {stepNumber}
                    </p>
                  </div>
                  <h3 className="mt-4 text-[1.25rem] font-semibold leading-[1.2] tracking-[-0.03em] text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.75] text-text-secondary">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>

        </div>
      </section>

      <section
        aria-labelledby="explore-tools-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            <div>
              <SolutionSectionHeading
                id="explore-tools-heading"
                eyebrow="Platform tools"
                title="What You Can Explore"
                description="Explore the existing platform pages for the checks and discovery views behind a review."
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              <ul className="divide-y divide-border-subtle">
                {EXPLORE_LINKS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-4 px-4 py-4 transition-colors duration-150 hover:bg-light focus-visible:bg-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring motion-reduce:transition-none sm:px-5"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald"
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[13.5px] font-semibold text-charcoal">
                            {item.title}
                          </span>
                          <span className="mt-0.5 block text-[11.5px] leading-[1.55] text-text-muted">
                            {item.description}
                          </span>
                        </span>
                        <ArrowRightIcon className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-emerald motion-reduce:transition-none" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SolutionClosingCta
        id="solutions-cta"
        title="Make Security Easier to Understand"
        description="Start exploring your website security and digital asset visibility."
        primary={{ label: "Explore Securelyze", href: "/platform" }}
      />
    </main>
  );
}
