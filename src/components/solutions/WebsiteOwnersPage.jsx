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
  UserIcon,
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
  "Know which settings and public assets to review.";

const HERO_ITEMS = [
  {
    icon: CertificateIcon,
    title: "SSL/TLS",
    detail: "Certificate validity and HTTPS settings.",
  },
  {
    icon: NetworkIcon,
    title: "DNS",
    detail: "Records for your website and email.",
  },
  {
    icon: CodeIcon,
    title: "Security headers",
    detail: "Security rules sent to browsers.",
  },
  {
    icon: MailIcon,
    title: "Email security",
    detail: "Domain email authentication settings.",
  },
  {
    icon: RadarIcon,
    title: "Asset discovery",
    detail: "Domains, subdomains, hosts, and services.",
  },
];

const CONCERNS = [
  {
    title: "Certificate and HTTPS issues",
    description:
      "A certificate helps browsers verify your site's identity and establish an encrypted connection. Expiration or a hostname mismatch can trigger warnings for visitors.",
  },
  {
    title: "Domain records that need review",
    description:
      "DNS records tell other systems where to find your website and email services. Old or incorrect records can send traffic to the wrong place.",
  },
  {
    title: "Security headers",
    description:
      "HTTP security headers tell browsers how to handle your site's content and connections. Their values need to match how your website works.",
  },
  {
    title: "Email security",
    description:
      "SPF, DKIM, and DMARC help receiving mail systems check whether messages are authorized to use your domain. Review them when setting up or changing email providers.",
  },
  {
    title: "Public assets you may have missed",
    description:
      "Subdomains and services can remain public after a project ends. Understanding what is visible helps you decide which assets still belong in your inventory.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description:
      "Learn what certificate validity, hostname coverage, and HTTPS settings mean for visitors.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description:
      "Understand the records that connect your domain to its website, email, and other services.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description:
      "Review browser security rules and understand why a missing or unsuitable value may need attention.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description:
      "Understand the domain settings used to authenticate email sent on your behalf.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Domain Discovery",
    description:
      "Review domain information and related domains where supported.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "Subdomain Discovery",
    description:
      "Find publicly visible names for applications, websites, or other services under your domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "Understand which public addresses your hostnames point to and where addresses are shared.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Review available information about reachable services. An open port alone is not a vulnerability.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Choose a domain to review",
    description:
      "Start with your main website domain or a public hostname you manage.",
  },
  {
    title: "Understand the settings",
    description:
      "Read the relevant configuration guides, then explore related domains, hosts, and services.",
  },
  {
    title: "Decide what needs follow-up",
    description:
      "Use the explanations to prepare questions for your developer, hosting provider, or email provider.",
  },
];

const USE_CASES = [
  {
    title: "Before a launch",
    label: "Launch",
    description:
      "Include certificates, domain records, and browser security settings in your launch review.",
  },
  {
    title: "After a hosting change",
    label: "Domain or hosting",
    description:
      "Review where your domain points and whether its certificate still covers the names visitors use.",
  },
  {
    title: "During routine maintenance",
    label: "Regular review",
    description:
      "Revisit email settings and public subdomains as providers, projects, and website needs change.",
  },
  {
    title: "When taking over a site",
    label: "New website",
    description:
      "Learn which services support the site and what to ask the previous owner or development team.",
  },
];

const BENEFITS = [
  {
    title: "Know what to review",
    description:
      "Connect website settings with the domains and services they support.",
    icon: EyeIcon,
  },
  {
    title: "Understand the terminology",
    description:
      "Learn what certificates, DNS records, and email policies mean without starting from raw technical output.",
    icon: ShieldIcon,
  },
  {
    title: "Recognize configuration gaps",
    description:
      "Understand why an expired certificate or an unexpected record deserves follow-up.",
    icon: CodeIcon,
  },
  {
    title: "Ask more useful questions",
    description:
      "Discuss specific settings and public assets with the people who manage your website.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "Why should I review my website's settings?",
    answer:
      "Your website depends on domain records, certificates, browser security rules, and email settings. Reviewing them helps you understand how the site is configured and which details deserve attention.",
  },
  {
    question: "What can Securelyze help me review?",
    answer:
      "Securelyze brings internet-facing security analysis and Asset Discovery together. Its capability pages explain SSL/TLS, DNS, HTTP headers, and email authentication, alongside public domains, subdomains, hosts, ports, and services.",
  },
  {
    question: "Do I need technical knowledge to use Securelyze?",
    answer:
      "You can start with the explanations on these pages. If a setting needs changing, a developer or service provider can help you confirm the right value for your site.",
  },
  {
    question: "Can I run a security scan on this page?",
    answer:
      "No. This page explains the capabilities and links to their overviews. Example panels on the capability pages use sample data, not live results. These pages do not change or repair your website.",
  },
  {
    question: "When should I revisit these settings?",
    answer:
      "Review them around launches, hosting migrations, domain changes, and email provider changes. Include them in regular maintenance based on how often your website and services change.",
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

function WebsiteOwnersHero() {
  return (
    <section
      id="website-owners"
      aria-labelledby="website-owners-heading"
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current="Website Owners" />

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              FOR WEBSITE OWNERS
            </p>

            <h1
              id="website-owners-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Understand Your Website&apos;s Security Settings
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Review your domain, HTTPS, email security, and other important
              configurations. Understand what&apos;s publicly visible and what may
              need a closer look.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="btn-primary group w-full sm:w-auto"
              >
                Explore Website Security Check
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
              eyebrow="Website owner view"
              title="Settings worth understanding"
              icon={UserIcon}
              items={HERO_ITEMS}
              footer={HERO_CARD_FOOTER}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CommonConcernsSection() {
  return (
    <section
      id="common-security-concerns"
      aria-labelledby="common-concerns-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="common-concerns-heading"
              eyebrow="Common concerns"
              title="Settings worth a closer look"
              description="Your site relies on settings managed across hosting, domain, and email providers. Knowing what each setting does makes it easier to spot questions worth asking."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              A configuration question is easier to resolve when you know which
              setting to discuss.
            </p>
          </div>

          <ol className="border-t border-border">
            {CONCERNS.map((concern, index) => (
              <li
                key={concern.title}
                className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="pt-0.5 font-mono text-[10px] font-semibold tabular-nums tracking-[0.08em] text-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-semibold leading-[1.45] tracking-[-0.01em] text-charcoal">
                    {concern.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.7] text-text-secondary">
                    {concern.description}
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

function WebsiteSecurityChecksSection() {
  return (
    <section
      id="what-you-can-check"
      aria-labelledby="what-you-can-check-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="what-you-can-check-heading"
              eyebrow="What you can check"
              title="Understand your security settings"
              description="Learn how your domain, certificate, browser security rules, and email authentication affect the website you manage."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Each guide explains what the settings mean and where their limits are.
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

function ExposureSection() {
  return (
    <section
      id="website-exposure"
      aria-labelledby="website-exposure-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <SolutionSectionHeading
              id="website-exposure-heading"
              eyebrow="Asset discovery"
              title="Look beyond your main website"
              description="Your main website may be only one public asset. Asset Discovery explains how related domain names, hosts, and services fit together, using available public information."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              Use public asset information as a starting point. It does not confirm
              ownership, complete coverage, or a security weakness.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              Follow the category that matches the name, host, or service you want
              to understand.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-light/60 p-5 sm:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Your public footprint
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

function HowSecurelyzeHelpsSection() {
  return (
    <section
      id="how-securelyze-helps"
      aria-labelledby="how-securelyze-helps-heading"
      className="scroll-mt-24 bg-charcoal py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="how-securelyze-helps-heading"
          eyebrow="How it works"
          title="From a question to a next step"
          description="Choose the area you want to understand, learn what the settings mean, and decide who can help with the next step."
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
              <h3 className="mt-4 text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.03em] text-white lg:min-h-[2.3em]">
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
      id="website-owner-use-cases"
      aria-labelledby="use-cases-heading"
      className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="use-cases-heading"
          eyebrow="When to use it"
          title="Useful times to review your site"
          description="A launch or provider change is a good reason to revisit the settings and public assets behind your website."
        />

        <ul className="mt-10 grid gap-0 lg:grid-cols-3">
          <li className="border-t border-border py-6 lg:col-span-3">
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
              className={`border-t border-border py-5 lg:px-6 ${
                index === 0 ? "lg:pl-0" : "lg:border-l lg:pl-6"
              } ${index === otherUseCases.length - 1 ? "lg:pr-0" : ""}`}
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
      id="benefits"
      aria-labelledby="website-owners-benefits-heading"
      className="scroll-mt-24 bg-soft-green/25 py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="website-owners-benefits-heading"
          eyebrow="Benefits"
          title="Make informed website decisions"
          description="Understand the details behind a concern before deciding what to change or who to ask for help."
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
                <h3 className="mt-4 text-[14px] font-semibold leading-[1.45] text-charcoal lg:min-h-[2.9em]">
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
      id="faqs"
      aria-labelledby="faqs-heading"
      className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SolutionSectionHeading
          id="faqs-heading"
          eyebrow="FAQs"
          title="Website owner questions"
          description="What these pages cover, how to use them, and where further help may be needed."
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

export default function WebsiteOwnersPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <WebsiteOwnersHero />
      <CommonConcernsSection />
      <WebsiteSecurityChecksSection />
      <ExposureSection />
      <HowSecurelyzeHelpsSection />
      <UseCasesSection />
      <BenefitsSection />
      <FaqSection />

      <SolutionClosingCta
        layout="split"
        id="website-owners-cta"
        title="Start with the settings you want to understand"
        description="Explore the configuration guides, then review how related public assets connect to your website."
        primary={{
          label: "Review Security Settings",
          href: "/platform#website-security-check",
        }}
        secondary={{
          label: "Explore Asset Discovery",
          href: "/platform/asset-discovery",
        }}
      />
    </main>
  );
}
