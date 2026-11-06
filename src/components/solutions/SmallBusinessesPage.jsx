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
  "Understand the services behind your business online.";

const HERO_ITEMS = [
  {
    icon: CertificateIcon,
    title: "Website connection",
    detail: "Certificate validity and HTTPS settings.",
  },
  {
    icon: NetworkIcon,
    title: "Domain records",
    detail: "Where website and email traffic goes.",
  },
  {
    icon: MailIcon,
    title: "Email authentication",
    detail: "Settings used to verify domain email.",
  },
  {
    icon: RadarIcon,
    title: "Public assets",
    detail: "Public domains, hosts, and services.",
  },
];

const CHALLENGES = [
  {
    title: "Settings spread across providers",
    description:
      "Your website, domain, and email may use different providers. Understanding each provider's settings helps you know where to ask for help.",
  },
  {
    title: "Certificate warnings",
    description:
      "An expired certificate or a name mismatch can cause browser warnings. Learn which certificate details matter for your business website.",
  },
  {
    title: "Website and email routing",
    description:
      "Domain records connect your business name to its website and email services. Old or incorrect records can interfere with those connections.",
  },
  {
    title: "Email sent using your domain",
    description:
      "Email authentication helps receiving systems check whether a message is authorized to use your domain. Review it when setting up business email.",
  },
  {
    title: "Forgotten public services",
    description:
      "An old campaign site or unused application can remain public. Knowing the associated domains and hosts helps you decide what still belongs in use.",
  },
  {
    title: "Knowing what to ask",
    description:
      "You do not need to manage every setting yourself. Clear explanations help you prepare specific questions for a developer or service provider.",
  },
];

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description:
      "Learn what your website's certificate and encrypted connection settings tell visitors.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    title: "DNS Security",
    description: "Understand the records that connect your business domain to its services.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    title: "Security Headers",
    description:
      "Learn about the security instructions your website sends to visitors' browsers.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    title: "Email Security",
    description:
      "Understand SPF, DKIM, and DMARC settings used to authenticate email from your domain.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

const ASSET_CATEGORIES = [
  {
    title: "Domain Discovery",
    description:
      "Review domain details and related domains where supported.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    title: "Subdomain Discovery",
    description:
      "Explore public names for shops, applications, or other services under your domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: RadarIcon,
  },
  {
    title: "IP & Host Discovery",
    description:
      "See how public hostnames relate to the addresses used to reach their services.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: AssetsIcon,
  },
  {
    title: "Port & Service Discovery",
    description:
      "Understand available information about public services and whether their exposure is expected.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: LayersIcon,
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Choose your business domain",
    description:
      "Begin with the domain for your website or business email.",
  },
  {
    title: "Learn what the settings mean",
    description:
      "Read the relevant configuration explanations and explore related public assets.",
  },
  {
    title: "Ask about the next step",
    description:
      "Use the details to discuss a concern with your developer or service provider.",
  },
];

const USE_CASES = [
  {
    title: "Launching a website",
    label: "New website",
    description:
      "Include domain records, certificates, and browser security settings in your launch checklist.",
  },
  {
    title: "Setting up a domain",
    label: "New domain",
    description:
      "Understand how the domain connects to the website and services your business will use.",
  },
  {
    title: "Changing email providers",
    label: "Email setup",
    description:
      "Review authentication settings with your provider so they match the services sending your business email.",
  },
  {
    title: "Moving your website",
    label: "Hosting or DNS",
    description:
      "Revisit domain records and HTTPS settings when your site moves to another hosting provider.",
  },
  {
    title: "Adding services or reviewing old ones",
    label: "Review or expand",
    description:
      "Explore associated subdomains and hosts when adding a shop, application, or campaign site, or deciding what to retire.",
  },
];

const BENEFITS = [
  {
    title: "Know what supports your business",
    description:
      "Understand how your domains, website, email, and public services connect.",
    icon: EyeIcon,
  },
  {
    title: "Understand provider settings",
    description:
      "Learn which domain and website settings to discuss with each provider.",
    icon: NetworkIcon,
  },
  {
    title: "Ask informed email questions",
    description:
      "Recognize the authentication settings your email provider needs to review.",
    icon: MailIcon,
  },
  {
    title: "Choose a practical next step",
    description:
      "Use specific configuration details to decide what needs clarification or further review.",
    icon: CompassIcon,
  },
];

const FAQS = [
  {
    question: "Do I need a security team to get started?",
    answer:
      "No. Start with the explanations for your website, domain, or email settings. If a change is needed, share the details with the developer or provider who manages that service.",
  },
  {
    question: "What can I learn about my business's public services?",
    answer:
      "Securelyze covers internet-facing security analysis and Asset Discovery. The pages explain website and domain settings, plus publicly visible domains, subdomains, hosts, and available service information.",
  },
  {
    question: "What does email authentication tell me?",
    answer:
      "SPF, DKIM, and DMARC help receiving systems check messages that use your domain. The Email Security page explains these settings and what to discuss with your email provider.",
  },
  {
    question: "Is a public asset always a security problem?",
    answer:
      "No. Websites and many business services need to be public. Review whether an asset is expected, still needed, and managed by the right team. Public visibility alone does not confirm a vulnerability.",
  },
  {
    question: "Will these pages fix settings or run a live check?",
    answer:
      "No. These pages explain the capabilities and link to further guidance. Capability examples use sample data. They do not run live checks or change your business's settings.",
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
              FOR SMALL BUSINESSES
            </p>

            <h1
              id="small-businesses-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Know What&apos;s Visible Across Your Business
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Understand your public-facing domains, services, and security
              settings without unnecessary complexity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="btn-primary group w-full sm:w-auto"
              >
                Review Security Settings
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
              title="Website, email, and public assets"
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
              title="Questions small teams face"
              description="When providers manage different services, it can be hard to know which settings matter or who is responsible for them. Start with the areas below."
            />

            <p className="mt-6 max-w-[34rem] border-l-2 border-emerald/30 pl-4 text-[12.5px] leading-[1.75] text-text-muted">
              Start with the question you need answered, then involve your
              provider when a setting needs review.
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
              title="Understand your business settings"
              description="Learn what domain records, certificates, browser security settings, and email authentication mean for your business."
            />

            <p className="mt-5 max-w-[38rem] text-[11.5px] leading-[1.65] text-text-muted">
              Choose the guide that matches your website, domain, or email question.
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
              title="Know which services are public"
              description="Your online presence may include more than the main website. Explore associated domains, subdomains, and hosts, plus available information about publicly reachable services."
            />

            <p className="mt-5 max-w-[42rem] text-[13px] leading-[1.75] text-text-secondary">
              Public information can help with an inventory, but it does not
              verify ownership or show every asset.
            </p>

            <p className="mt-4 max-w-[42rem] text-[11.5px] leading-[1.65] text-text-muted">
              Use these categories to understand the names, hosts, and services
              associated with your business.
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
          title="Start with one business question"
          description="Choose the service you want to understand, learn about its settings, and identify who can help with any follow-up."
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
          title="When a review is useful"
          description="A new website, provider change, or unused service is a reason to revisit what your business makes public."
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
          title="Make sense of the details"
          description="Get enough understanding to ask useful questions without having to become a security specialist."
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
          description="What you can learn and when to involve a service provider."
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
        title="Understand your business's online presence"
        description="Explore the platform to learn about your domains, public services, and security settings."
        primary={{
          label: "Explore Securelyze",
          href: "/platform",
        }}
      />
    </main>
  );
}
