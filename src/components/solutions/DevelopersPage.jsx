import Link from "next/link";

import {
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  CompassIcon,
  DeveloperIcon,
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
  "A connected view of the public surface.";

const HERO_ITEMS = [
  {
    icon: CertificateIcon,
    title: "TLS & HTTPS",
    detail: "Certificate and connection context.",
  },
  {
    icon: NetworkIcon,
    title: "DNS records",
    detail: "Routing and domain configuration.",
  },
  {
    icon: CodeIcon,
    title: "HTTP headers",
    detail: "Browser-facing security policy.",
  },
  {
    icon: RadarIcon,
    title: "Asset context",
    detail: "Domains, subdomains, hosts, and services.",
  },
];

const CHALLENGES = [
  {
    title: "SSL/TLS configuration after deployment",
    description:
      "Certificates, hostnames, and TLS settings can differ between local, staging, and production environments. A deployment can surface a mismatch that was not visible during development.",
  },
  {
    title: "DNS changes and domain configuration",
    description:
      "Record updates, provider changes, and routing adjustments can alter how a domain resolves. The public result may differ from the configuration you expected.",
  },
  {
    title: "Missing or incorrectly configured security headers",
    description:
      "Headers such as HSTS and CSP need deliberate configuration. Missing or inconsistent values can be easy to overlook when shipping a change.",
  },
  {
    title: "Subdomains and hosts that may be overlooked",
    description:
      "Preview environments, legacy hosts, and new subdomains expand the public surface. Without a clear inventory, they can fall outside a routine review.",
  },
  {
    title: "Exposed ports and services",
    description:
      "Internet-facing ports and services may exist alongside the application you intended to expose. Understanding the public footprint helps you see what is reachable.",
  },
  {
    title: "Security checks being separated from regular development work",
    description:
      "When review lives in a separate process or tool, configuration details can drift from the work that created them. A connected view makes the context easier to revisit.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description: "Understand certificate and HTTPS configuration.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "Review DNS records and domain configuration.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description:
      "Understand browser-facing security header configuration.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description: "Review domain email authentication configuration.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Subdomain Discovery",
    description:
      "Review public subdomains and the hostnames connected to a domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "Domain Discovery",
    description:
      "Understand the primary domains that make up the public surface.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Explore IP addresses and hosts associated with the environment.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Review internet-facing ports and services in the asset view.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Identify",
    description: "Start with a domain or explore available digital assets.",
  },
  {
    title: "Review",
    description:
      "Explore relevant website security checks and configuration information.",
  },
  {
    title: "Understand",
    description:
      "Review the available information to identify areas that may need attention.",
  },
];

const USE_CASES = [
  {
    title: "Before or after a website deployment.",
    label: "Deployment",
    description:
      "Review the public configuration context around a release and compare what the environment exposes.",
  },
  {
    title: "After changing DNS or hosting configuration.",
    label: "DNS or hosting",
    description:
      "Revisit domain and host context when routing or hosting changes affect how the site is delivered.",
  },
  {
    title: "When adding a new domain or subdomain.",
    label: "New domain",
    description:
      "Check the public surface connected to a new domain or subdomain as it joins the environment.",
  },
  {
    title: "During website maintenance.",
    label: "Maintenance",
    description:
      "Use a consistent review path when revisiting certificates, headers, or domain records.",
  },
  {
    title: "When reviewing exposed services.",
    label: "Exposed services",
    description:
      "Explore the hosts, ports, and services that make up the external-facing environment.",
  },
];

const BENEFITS = [
  {
    title: "Better visibility into external-facing assets.",
    description:
      "See the domains, subdomains, hosts, ports, and services that make up the public surface.",
    icon: EyeIcon,
  },
  {
    title: "Easier access to website security checks.",
    description:
      "Move from a domain to SSL/TLS, DNS, security header, and email security context in one place.",
    icon: ShieldIcon,
  },
  {
    title: "More clarity around domain configuration.",
    description:
      "Review the records and configuration details that shape how a domain resolves and behaves.",
    icon: NetworkIcon,
  },
  {
    title: "A practical way to review security-related information.",
    description:
      "Use a consistent review path to organize the configuration details you want to inspect.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "What can developers check with Securelyze?",
    answer:
      "You can explore SSL/TLS, DNS, security headers, email security, and Asset Discovery. Asset Discovery covers domains, subdomains, IP addresses and hosts, and ports and services.",
  },
  {
    question: "Can I review SSL/TLS and DNS configuration?",
    answer:
      "Yes. SSL/TLS Analysis and DNS Security explain certificate, HTTPS, DNS record, and domain configuration context.",
  },
  {
    question: "Can Securelyze help identify subdomains?",
    answer:
      "The Asset Discovery section includes Subdomain Discovery, which explains how public subdomains fit into the external-facing environment.",
  },
  {
    question: "Does Securelyze integrate with CI/CD pipelines?",
    answer:
      "No. Securelyze does not currently provide CI/CD integration, automated pipeline checks, or continuous monitoring. Developers can use the available security checks and Asset Discovery pages to review configuration context.",
  },
  {
    question: "Does Securelyze automatically fix security issues?",
    answer:
      "No. Securelyze does not automatically remediate or change website, DNS, certificate, header, or email configuration. The available checks provide context to help you decide what to review or change in your own workflow.",
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

function DevelopersHero() {
  return (
    <section
      id="developers"
      aria-labelledby="developers-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current="Developers" />

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              SOLUTIONS FOR DEVELOPERS
            </p>

            <h1
              id="developers-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Keep Security Closer to Your Development Workflow
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Understand your domains, website configurations, and exposed
              digital assets while building and maintaining web applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Security Tools
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
              eyebrow="Developer view"
              title="Public configuration at a glance"
              icon={DeveloperIcon}
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
      id="developer-challenges"
      aria-labelledby="developer-challenges-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="developer-challenges-heading"
              eyebrow="Where configuration drifts"
              title="Security Challenges Developers Face"
              description="Configuration issues often appear at the edges of a deployment: a certificate, a DNS record, a header, or a host that was not part of the last review."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              A configuration can be correct in code and still surface
              differently once it is deployed.
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
      id="developer-security-checks"
      aria-labelledby="developer-security-checks-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="developer-security-checks-heading"
              eyebrow="Security checks"
              title="Security Checks Developers Can Explore"
              description="Review the public configuration details behind the applications you build, debug, and maintain."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Explore each check to understand the configuration context it
              covers.
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
      id="developer-asset-discovery"
      aria-labelledby="developer-asset-discovery-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="developer-asset-discovery-heading"
              eyebrow="Asset discovery"
              title="Understand Your Exposed Assets"
              description="Asset Discovery brings public domains, subdomains, hosts, ports, and services into a connected view. For developers, it is a way to see the external-facing environment around an application."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              Visibility into these assets helps you understand what is
              publicly reachable and how the pieces relate to the environments
              you maintain.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              Use these categories together to understand the public surface
              around your applications.
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
      id="developer-workflow"
      aria-labelledby="developer-workflow-heading"
      className="scroll-mt-24 bg-charcoal py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-workflow-heading"
          eyebrow="A practical workflow"
          title="A Practical Developer Workflow"
          description="Use a structured review path to move from a domain or asset to the configuration context that may need attention."
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
      id="developer-use-cases"
      aria-labelledby="developer-use-cases-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-use-cases-heading"
          eyebrow="When to use it"
          title="When Developers Can Use Securelyze"
          description="Use the platform as a review aid at moments when the public configuration is changing."
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
      id="developer-benefits"
      aria-labelledby="developer-benefits-heading"
      className="scroll-mt-24 bg-soft-green/25 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-benefits-heading"
          eyebrow="Benefits"
          title="Benefits for Developers"
          description="A clearer view of the public configuration around the applications you build."
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
      id="developer-faqs"
      aria-labelledby="developer-faqs-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="developer-faqs-heading"
          eyebrow="FAQs"
          title="Questions Developers Ask"
          description="Short answers about security checks, asset discovery, and developer workflows."
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

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <DevelopersHero />
      <ChallengesSection />
      <ChecksSection />
      <AssetsSection />
      <WorkflowSection />
      <UseCasesSection />
      <BenefitsSection />
      <FaqSection />

      <SolutionClosingCta
        id="developers-cta"
        title="Build With Better Security Visibility"
        description="Explore your website configuration and external-facing digital assets."
        primary={{
          label: "Explore Securelyze Tools",
          href: "/platform#website-security-check",
        }}
      />
    </main>
  );
}
