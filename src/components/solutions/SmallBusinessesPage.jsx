import Link from "next/link";

import {
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  CompassIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import {
  ArrowRightIcon,
  EyeIcon,
  LayersIcon,
  MailIcon,
} from "../pricing/PricingIcons";
import SolutionBreadcrumb from "./SolutionBreadcrumb";
import SolutionClosingCta from "./SolutionClosingCta";
import SolutionHeroCard from "./SolutionHeroCard";
import SolutionSectionHeading from "./SolutionSectionHeading";

const HERO_CARD_FOOTER =
  "A practical view of your online presence.";

const HERO_ITEMS = [
  {
    icon: CertificateIcon,
    title: "Website connection",
    detail: "Certificate and HTTPS context.",
  },
  {
    icon: NetworkIcon,
    title: "Domain records",
    detail: "DNS records that route your business.",
  },
  {
    icon: MailIcon,
    title: "Email authentication",
    detail: "SPF, DKIM, and DMARC context.",
  },
  {
    icon: RadarIcon,
    title: "Public assets",
    detail: "Domains, hosts, and services.",
  },
];

const CHALLENGES = [
  {
    title: "Security configurations are difficult to understand",
    description:
      "Technical settings are often spread across hosting, DNS, and email tools. A clearer view can make the basics easier to review.",
  },
  {
    title: "SSL certificates and HTTPS need attention",
    description:
      "Expired certificates or incomplete HTTPS settings can affect trust and access. It helps to know where to look.",
  },
  {
    title: "DNS records may be incorrectly configured",
    description:
      "Missing, conflicting, or unintended records can affect how your website and email work.",
  },
  {
    title: "Company email domains need authentication",
    description:
      "SPF, DKIM, and DMARC help receiving servers verify your business email. Gaps can affect deliverability and trust.",
  },
  {
    title: "Domains and subdomains may be forgotten",
    description:
      "A business can accumulate public hostnames over time. A clear inventory helps you see what is part of your online presence.",
  },
  {
    title: "Small teams may not have security specialists",
    description:
      "You may be managing security alongside operations, marketing, and everything else. Plain-language context helps you decide what to review next.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description:
      "Understand the certificate and HTTPS setup for your business website.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "Review the DNS records that support your business domain.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description:
      "Understand the browser-facing settings that affect your website.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description:
      "Review SPF, DKIM and DMARC for your business email domain.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Domain Discovery",
    description:
      "Understand the primary domains that make up your business's public footprint.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "Subdomain Discovery",
    description:
      "Review public subdomains that may sit alongside your main website.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Explore the IP addresses and hosts connected to your public environment.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Review internet-facing ports and services that may need attention.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Start With Your Domain",
    description:
      "Enter or identify the business domain you want to understand.",
  },
  {
    title: "Explore Security Information",
    description:
      "Review the available website security checks and asset discovery information.",
  },
  {
    title: "Understand Areas That Need Attention",
    description:
      "Use the available information to identify configuration areas worth reviewing.",
  },
];

const USE_CASES = [
  {
    title: "Launching a new business website.",
    label: "New website",
    description:
      "Review the public security signals and asset context you plan to launch with.",
  },
  {
    title: "Setting up a new business domain.",
    label: "New domain",
    description:
      "Understand the DNS records and public details connected to a new domain.",
  },
  {
    title: "Configuring company email.",
    label: "Email setup",
    description:
      "Review the SPF, DKIM, and DMARC context for the domain used to send business email.",
  },
  {
    title: "Changing hosting or DNS settings.",
    label: "Hosting or DNS",
    description:
      "Check whether a provider or DNS change has altered the context you expect.",
  },
  {
    title: "Reviewing or expanding your online presence.",
    label: "Review or expand",
    description:
      "Revisit certificates, headers, email settings, and public assets when reviewing an existing site or adding new domains, subdomains, and services.",
  },
];

const BENEFITS = [
  {
    title: "Better visibility into website security.",
    description:
      "See how certificates, DNS, headers, email settings, and public assets fit together.",
    icon: EyeIcon,
  },
  {
    title: "Easier access to domain security information.",
    description:
      "Find the context that explains how your business domain is configured.",
    icon: NetworkIcon,
  },
  {
    title: "Awareness of email authentication configuration.",
    description:
      "Understand the SPF, DKIM, and DMARC details that support business email.",
    icon: MailIcon,
  },
  {
    title: "Understanding exposed assets and where to start.",
    description:
      "See the public domains, hosts, and services that make up your online presence, with a practical starting point for security reviews.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "Can small businesses use Securelyze without a security team?",
    answer:
      "Yes. The pages are written to explain technical topics in plain language. You can start with the overview, follow the checks that are relevant to your business, and share the context with a developer or hosting provider if a change is needed.",
  },
  {
    question: "What website security checks are available?",
    answer:
      "Securelyze includes SSL/TLS, DNS, security headers, and email security checks, plus Asset Discovery for public domains, subdomains, hosts, and services.",
  },
  {
    question: "Can I review my business email security?",
    answer:
      "Yes. The Email Security page explains SPF, DKIM, and DMARC context for the domain used to send email.",
  },
  {
    question: "Can Securelyze help me discover subdomains?",
    answer:
      "Asset Discovery includes a Subdomain Discovery page that explains how public subdomains can be reviewed.",
  },
  {
    question: "Does Securelyze automatically fix security issues?",
    answer:
      "No. Securelyze does not automatically fix security issues. The available pages help you review configuration context and identify areas that may need attention.",
  },
];

function FaqItem({ item }) {
  return (
    <details className="group rounded-xl border border-border bg-white open:border-emerald/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        <span className="text-[13.5px] font-semibold leading-[1.5] text-charcoal">
          {item.question}
        </span>
        <span
          aria-hidden="true"
          className="text-[18px] font-light leading-none text-text-muted group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="border-t border-border px-5 py-4 text-[13px] leading-[1.75] text-text-secondary">
        {item.answer}
      </p>
    </details>
  );
}

function SmallBusinessesHero() {
  return (
    <section
      id="small-businesses"
      aria-labelledby="small-businesses-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current="Small Businesses" />

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              SOLUTIONS FOR SMALL BUSINESSES
            </p>

            <h1
              id="small-businesses-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Practical Website Security for Growing Businesses
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Understand your website security configuration, business domain,
              email security and exposed digital assets without needing a large
              technical team.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Website Security
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/platform/asset-discovery"
                className="btn-outline group w-full sm:w-auto"
              >
                Explore Asset Discovery
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <SolutionHeroCard
              eyebrow="Small business view"
              title="The basics in one place"
              icon={ShieldIcon}
              items={HERO_ITEMS}
              footer={HERO_CARD_FOOTER}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section
      id="small-business-challenges"
      aria-labelledby="small-business-challenges-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="small-business-challenges-heading"
              eyebrow="Common challenges"
              title="Common Security Challenges for Small Businesses"
              description="Small teams often manage the website, domain, email, and hosting at the same time. These are the details that can be easy to overlook without a dedicated security specialist."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              You do not need a security team to start with a clearer view of
              the basics.
            </p>
          </div>

          <ol className="border-t border-border">
            {CHALLENGES.map((challenge, index) => (
              <li
                key={challenge.title}
                className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="pt-0.5 font-mono text-[10px] font-semibold tabular-nums tracking-[0.08em] text-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-semibold leading-[1.45] tracking-[-0.01em] text-charcoal">
                    {challenge.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.7] text-text-secondary">
                    {challenge.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ChecksSection() {
  return (
    <section
      id="small-business-security-checks"
      aria-labelledby="small-business-security-checks-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="small-business-security-checks-heading"
              eyebrow="Security checks"
              title="Essential Website Security Checks"
              description="Review the public configuration details behind your website, domain, and email setup."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Explore each check to understand the security context behind your
              website, domain, and email setup.
            </p>
          </div>

          <div className="border-t border-border">
            {CHECKS.map((check) => {
              const Icon = check.icon;

              return (
                <Link
                  key={check.title}
                  href={check.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-border py-5 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring sm:gap-5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-white text-emerald group-hover:border-emerald/40"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold leading-[1.45] text-charcoal">
                      {check.title}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-[1.7] text-text-secondary">
                      {check.description}
                    </span>
                  </span>
                  <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-text-muted group-hover:text-emerald" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetsSection() {
  return (
    <section
      id="small-business-asset-discovery"
      aria-labelledby="small-business-asset-discovery-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="small-business-asset-discovery-heading"
              eyebrow="Asset discovery"
              title="Understand Your Business's Digital Assets"
              description="Asset Discovery brings public domains, subdomains, hosts, ports, and services into a connected view. For a small business, it is a way to see the external-facing environment around your website."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              A clear inventory makes it easier to see what belongs to your
              business online and what may need a closer look.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              Use these categories together to understand the public footprint
              around your business.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-light/60 p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Asset categories
            </p>

            <ul className="mt-4 divide-y divide-border-subtle">
              {ASSET_CATEGORIES.map((asset) => {
                const Icon = asset.icon;

                return (
                  <li key={asset.title}>
                    <Link
                      href={asset.href}
                      className="group flex items-start gap-4 py-4 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-white text-emerald group-hover:border-emerald/40"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13.5px] font-semibold leading-[1.4] text-charcoal">
                          {asset.title}
                        </span>
                        <span className="mt-1 block text-[11.5px] leading-[1.65] text-text-muted">
                          {asset.description}
                        </span>
                      </span>
                      <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-text-muted group-hover:text-emerald" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/platform/asset-discovery"
              className="group mt-4 inline-flex items-center gap-2 border-t border-border pt-4 text-[12px] font-semibold text-dark-green hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2"
            >
              Explore Asset Discovery
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section
      id="small-business-workflow"
      aria-labelledby="small-business-workflow-heading"
      className="scroll-mt-24 bg-charcoal py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="small-business-workflow-heading"
          eyebrow="A practical workflow"
          title="How Securelyze Helps"
          description="Use a structured review path to move from your business domain to the configuration areas that may need attention."
          tone="dark"
        />

        <ol className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-0">
          {WORKFLOW_STEPS.map((step, index) => (
            <li
              key={step.title}
              className={`lg:px-8 ${
                index > 0
                  ? "border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pt-0"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-soft-green">
                  Step {index + 1}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-4 text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.75] text-white/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

function UseCasesSection() {
  const [primaryUseCase, ...otherUseCases] = USE_CASES;

  return (
    <section
      id="small-business-use-cases"
      aria-labelledby="small-business-use-cases-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="small-business-use-cases-heading"
          eyebrow="When to use it"
          title="When Small Businesses Can Use Securelyze"
          description="Use the platform as a review aid at moments when your website, domain, or email setup is changing."
        />

        <ul className="mt-10 grid gap-0 sm:grid-cols-2">
          <li className="border-t border-border py-6 sm:col-span-2">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-text-muted">
              01 / {primaryUseCase.label}
            </p>
            <h3 className="mt-2 max-w-[42rem] text-[1.6rem] font-semibold leading-[1.2] tracking-[-0.03em] text-charcoal sm:text-[1.8rem]">
              {primaryUseCase.title}
            </h3>
            <p className="mt-2 max-w-[46rem] text-[13px] leading-[1.75] text-text-secondary">
              {primaryUseCase.description}
            </p>
          </li>

          {otherUseCases.map((useCase, index) => (
            <li
              key={useCase.title}
              className={`border-t border-border py-5 ${
                index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"
              }`}
            >
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                0{index + 2} / {useCase.label}
              </p>
              <h3 className="mt-1.5 text-[14px] font-semibold leading-[1.45] text-charcoal">
                {useCase.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.7] text-text-secondary">
                {useCase.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      id="small-business-benefits"
      aria-labelledby="small-business-benefits-heading"
      className="scroll-mt-24 bg-soft-green/25 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="small-business-benefits-heading"
          eyebrow="Benefits"
          title="Benefits for Small Businesses"
          description="A clearer view of the website security details that support your business."
          align="center"
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <li
                key={benefit.title}
                className={`lg:px-6 ${
                  index > 0 ? "lg:border-l lg:border-emerald/15" : "lg:pl-0"
                } ${index === BENEFITS.length - 1 ? "lg:pr-0" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald/20 bg-white text-emerald"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[14px] font-semibold leading-[1.45] text-charcoal">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.7] text-text-secondary">
                  {benefit.description}
                </p>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      id="small-business-faqs"
      aria-labelledby="small-business-faqs-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="small-business-faqs-heading"
          eyebrow="FAQs"
          title="Small Business FAQs"
          description="Short answers about website security checks, asset discovery, and practical next steps."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SmallBusinessesPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <SmallBusinessesHero />
      <ChallengesSection />
      <ChecksSection />
      <AssetsSection />
      <WorkflowSection />
      <UseCasesSection />
      <BenefitsSection />
      <FaqSection />

      <SolutionClosingCta
        layout="split"
        id="small-businesses-cta"
        title="Make Your Business Website Security Easier to Understand"
        description="Explore your website configuration and digital assets with Securelyze."
        primary={{
          label: "Explore Securelyze",
          href: "/platform",
        }}
      />
    </main>
  );
}
