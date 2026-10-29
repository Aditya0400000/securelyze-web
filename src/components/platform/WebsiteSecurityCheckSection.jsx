import {
  CertificateIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { MailIcon } from "../pricing/PricingIcons";
import WebsiteCheckForm from "../WebsiteCheckForm";

const CHECKS = [
  {
    title: "SSL/TLS",
    description: "Review certificate presence and TLS connection context.",
    icon: CertificateIcon,
    status: "Preview",
    statusTone: "lime",
    iconTone: "border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]",
  },
  {
    title: "DNS Analysis",
    description: "Explore DNS records and identify configuration details.",
    icon: NetworkIcon,
    status: "Preview",
    statusTone: "sky",
    iconTone: "border-[#BFDDF6] bg-[#EAF4FD] text-[#286B96]",
  },
  {
    title: "Security Headers",
    description: "Check important HTTP security headers and browser policy.",
    icon: CodeIcon,
    status: "Preview",
    statusTone: "periwinkle",
    iconTone: "border-[#C9D4F5] bg-[#F0F3FF] text-[#4B5AA8]",
  },
  {
    title: "HTTPS Status",
    description: "Verify whether a website uses a secure HTTPS connection.",
    icon: GlobeIcon,
    status: "Preview",
    statusTone: "cyan",
    iconTone: "border-[#BFE8EB] bg-[#ECFAFB] text-[#24747B]",
  },
  {
    title: "Email Authentication",
    description:
      "Review SPF, DKIM, and DMARC records that help verify senders and reduce spoofing risk.",
    icon: MailIcon,
    status: "Planned",
    statusTone: "slate",
    iconTone: "border-[#DCE4EB] bg-[#F5F8FA] text-[#526B7F]",
    wide: true,
    tags: ["SPF", "DKIM", "DMARC"],
  },
];

const STATUS_TONES = {
  lime: {
    badge: "border-[#D7E9B0] bg-[#F4FBE5] text-[#4F7410]",
    dot: "bg-[#8ED13C]",
  },
  sky: {
    badge: "border-[#C9DDF0] bg-[#EEF7FE] text-[#286B96]",
    dot: "bg-[#8FCCFF]",
  },
  periwinkle: {
    badge: "border-[#D5D9F5] bg-[#F3F4FF] text-[#4B5AA8]",
    dot: "bg-[#B9C3FF]",
  },
  cyan: {
    badge: "border-[#BFE8EB] bg-[#ECFAFB] text-[#24747B]",
    dot: "bg-[#8DE0E8]",
  },
  slate: {
    badge: "border-[#DCE4EB] bg-[#F5F8FA] text-[#5D7487]",
    dot: "bg-[#A9B9C6]",
  },
};

function CheckCard({ check }) {
  const Icon = check.icon;
  const statusTone = STATUS_TONES[check.statusTone];
  const isWide = Boolean(check.wide);

  return (
    <article
      className={`group flex h-full min-w-0 flex-col rounded-[1.25rem] border border-[#DDE8F1] bg-white/85 p-4 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:border-[#C6D8E6] hover:shadow-[0_18px_40px_-34px_rgba(7,29,52,0.4)] focus-within:border-[#B8C5D0] motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none sm:p-5 ${
        isWide ? "sm:col-span-2 lg:col-span-2 xl:col-span-1" : ""
      }`}
    >
      <div
        className={
          isWide
            ? "flex h-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 xl:flex-col xl:items-stretch xl:gap-0"
            : "contents"
        }
      >
        <div
          className={
            isWide
              ? "flex shrink-0 items-start justify-between gap-2 sm:flex-col sm:gap-3 xl:flex-row xl:items-start xl:justify-between"
              : "flex items-start justify-between gap-2"
          }
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${check.iconTone}`}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] ${statusTone.badge}`}
          >
            <span
              aria-hidden="true"
              className={`h-1 w-1 rounded-full ${statusTone.dot}`}
            />
            {check.status}
          </span>
        </div>

        <div className={isWide ? "min-w-0 flex-1" : "contents"}>
          <h3
            className={`${
              isWide ? "mt-4 sm:mt-0 xl:mt-4" : "mt-4"
            } text-pretty text-[14px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#071D34]`}
          >
            {check.title}
          </h3>
          <p className="mt-2 text-pretty text-[12px] leading-[1.6] text-[#526B7F]">
            {check.description}
          </p>
          {isWide && check.tags ? (
            <div className="mt-3 hidden flex-wrap gap-1.5 sm:flex xl:hidden">
              {check.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[#DCE4EB] bg-[#F8FAFC] px-2 py-1 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-[#5D7487]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function WebsiteSecurityCheckSection() {
  return (
    <section
      id="website-security-check"
      aria-labelledby="website-security-check-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#FCFDFE_0%,#F1F5F9_48%,#F8FAFC_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[#DCE8F2]/55 blur-[110px]" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full border border-[#DCE7F1]" />
        <div className="absolute -right-28 bottom-16 h-64 w-64 rounded-full border border-dashed border-[#DCE7F1]/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.022)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_18%,black,transparent_68%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[46rem]">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F7410]">
            <span aria-hidden="true" className="h-px w-8 bg-[#4F7410]/45" />
            Website Security Check
          </p>

          <h2
            id="website-security-check-heading"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#071D34] sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            Review the signals that shape your public security posture.
          </h2>

          <p className="mt-5 max-w-[41rem] text-pretty text-[15px] leading-[1.75] text-[#526B7F] sm:mt-6 sm:text-base">
            Inspect supported website security signals and configuration, from
            SSL/TLS certificate context and DNS records to HTTPS setup and
            browser-facing headers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E9B0] bg-[#F4FBE5] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#4F7410]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#8ED13C]"
              />
              Preview only
            </span>
            <span className="text-[11.5px] leading-[1.6] text-[#5D7487]">
              Live checks are not available yet.
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-5">
          {CHECKS.map((check) => (
            <CheckCard key={check.title} check={check} />
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#D7E4EF] bg-white p-5 shadow-[0_28px_70px_-50px_rgba(7,29,52,0.45)] sm:p-6 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="min-w-0 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]">
                  <ShieldIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#5D7487]">
                    Interactive preview
                  </p>
                  <h3 className="mt-0.5 text-[15px] font-semibold tracking-[-0.02em] text-[#071D34]">
                    Check a website
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-[28rem] text-pretty text-[12.5px] leading-[1.7] text-[#526B7F]">
                Enter a domain to preview the check experience. The form
                validates the URL format and explains what the checks are
                designed to review. It does not run a live scan or return
                results.
              </p>

              <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#E3EDF4] bg-[#F8FBFD] px-3 py-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ED13C]"
                />
                <p className="text-[10.5px] leading-[1.6] text-[#5D7487]">
                  Preview only. Live checks and email-authentication analysis
                  are not yet available.
                </p>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <WebsiteCheckForm
                tone="light"
                buttonLabel="Preview Check"
                helperText="URL validation only. Live checks are not available yet."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
