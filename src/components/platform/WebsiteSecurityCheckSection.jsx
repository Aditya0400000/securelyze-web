import Link from "next/link";

import {
  ArrowRightIcon,
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
} from "../about/AboutIcons";
import { MailIcon } from "../pricing/PricingIcons";

const CHECKS = [
  {
    title: "SSL/TLS Analysis",
    description:
      "Review certificate information, HTTPS status, and TLS configuration context.",
    icon: CertificateIcon,
    href: "/platform/website-security-check/ssl-tls",
  },
  {
    title: "DNS Security",
    description:
      "Explore DNS records, nameserver context, and resolution details.",
    icon: NetworkIcon,
    href: "/platform/website-security-check/dns-security",
  },
  {
    title: "Security Headers",
    description:
      "Check important HTTP security headers and browser-facing policy.",
    icon: CodeIcon,
    href: "/platform/website-security-check/security-headers",
  },
  {
    title: "Email Security",
    description:
      "Review SPF, DKIM, and DMARC records that help verify senders and reduce spoofing risk.",
    icon: MailIcon,
    href: "/platform/website-security-check/email-security",
  },
];

function CheckCard({ check }) {
  const Icon = check.icon;

  return (
    <Link
      href={check.href}
      className="group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-200 ease-out hover:border-emerald/30 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald transition-colors duration-200 group-hover:border-emerald/30 group-hover:bg-soft-green/30 motion-reduce:transition-none">
          <Icon className="h-5 w-5" />
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-dark-green">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald" />
          Preview
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mt-5 text-pretty text-[15px] font-semibold leading-[1.35] tracking-[-0.02em] text-charcoal">
          {check.title}
        </h3>
        <p className="mt-2 text-pretty text-[12.5px] leading-[1.65] text-text-secondary">
          {check.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 group-hover:text-emerald motion-reduce:transition-none">
          Open analysis
        </span>
        <ArrowRightIcon className="h-3.5 w-3.5 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-emerald motion-reduce:transition-none" />
      </div>
    </Link>
  );
}

export default function WebsiteSecurityCheckSection() {
  return (
    <section
      id="website-security-check"
      aria-labelledby="website-security-check-heading"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-border/55 blur-[110px]" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full border border-border" />
        <div className="absolute -right-28 bottom-16 h-64 w-64 rounded-full border border-dashed border-border/80" />
        <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-emerald/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[46rem]">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
            <span aria-hidden="true" className="h-px w-8 bg-emerald/45" />
            Website Security Check
          </p>

          <h2
            id="website-security-check-heading"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-charcoal sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            Review the signals that shape your public security posture.
          </h2>

          <p className="mt-5 max-w-[41rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:mt-6 sm:text-base">
            Inspect SSL/TLS certificate context, DNS security, browser-facing
            headers, and email-security signals in one place. HTTPS checks sit
            within SSL/TLS Analysis.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-dark-green">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-emerald-light"
              />
              Preview only
            </span>
            <span className="text-[11.5px] leading-[1.6] text-text-muted">
              Live checks are not available yet.
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
          {CHECKS.map((check) => (
            <CheckCard key={check.title} check={check} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-[11.5px] leading-[1.65] text-text-muted">
          <span
            aria-hidden="true"
            className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
          />
          Each tool opens a dedicated page with clearly labelled illustrative
          examples.
        </p>
      </div>
    </section>
  );
}
