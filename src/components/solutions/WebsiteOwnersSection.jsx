import {
  CertificateIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { CheckIcon } from "../pricing/PricingIcons";
import SolutionsCta from "./SolutionsCta";

const CHECKS = [
  {
    label: "SSL certificate",
    detail: "Connection context, explained simply.",
    icon: CertificateIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    label: "HTTPS",
    detail: "A clear view of secure browsing.",
    icon: GlobeIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    label: "DNS",
    detail: "The records that route your domain.",
    icon: NetworkIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    label: "Security headers",
    detail: "Browser settings that shape protection.",
    icon: CodeIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
  },
];

const BENEFITS = [
  "Plain-language context",
  "A clear starting point",
  "Practical next steps",
];

function WebsiteOwnersVisual() {
  return (
    <figure
      aria-labelledby="website-owners-visual-caption"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_60%_35%,rgba(16,185,129,0.18),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E2E8F0] bg-white p-1.5 shadow-[0_35px_90px_-55px_rgba(16,26,24,0.35)]">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-[#ECFDF5] bg-[linear-gradient(180deg,#FBFDF8_0%,#F7FBF0_100%)]">
          <div className="flex items-center gap-2.5 border-b border-[#ECFDF5] px-4 py-3 sm:px-5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]">
              <ShieldIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] font-semibold tracking-[-0.01em] text-[#101A18]">
              Website security, made clear
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D1FAE5] bg-[#ECFDF5] text-[#047857] shadow-[0_14px_28px_-20px_rgba(5,150,105,0.55)]">
                <ShieldIcon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#047857]">
                  A clearer view
                </p>
                <p className="mt-1 text-[13px] font-semibold tracking-[-0.02em] text-[#101A18]">
                  Security that makes sense.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {CHECKS.map((check) => {
                const Icon = check.icon;

                return (
                  <div
                    key={check.label}
                    className="group rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-[#D1FAE5] hover:bg-white hover:shadow-[0_18px_40px_-30px_rgba(5,150,105,0.35)]"
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg border ${check.iconTone}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <p className="mt-2 text-[10.5px] font-semibold text-[#101A18]">
                      {check.label}
                    </p>
                    <p className="mt-0.5 text-[8.5px] leading-[1.5] text-[#64748B]">
                      {check.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#ECFDF5] px-4 py-2.5 text-[8.5px] font-medium tracking-[0.02em] text-[#64748B] sm:px-5">
            <span>Website Owners</span>
            <span>Plain-language context</span>
          </div>
        </div>
      </div>

      <figcaption id="website-owners-visual-caption" className="sr-only">
        Abstract illustration of a clear website security view with four
        plain-language check categories: SSL certificate, HTTPS, DNS, and
        security headers.
      </figcaption>
    </figure>
  );
}

export default function WebsiteOwnersSection() {
  return (
    <section
      id="website-owners"
      aria-labelledby="website-owners-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFDF8_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#10B981]/10 blur-[100px]" />
        <div className="absolute -left-28 bottom-0 h-64 w-64 rounded-full border border-[#E2E8F0]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.02)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_35%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#047857]">
            <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
            Website Owners
          </p>

          <h2
            id="website-owners-heading"
            className="mt-4 max-w-[36rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            Understand your website&rsquo;s security without the jargon.
          </h2>

          <p className="mt-5 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15px]">
            See the signals that shape a safer website, explained in language
            you can act on.
          </p>

          <p className="mt-4 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15px]">
            From certificates to headers, Securelyze brings the basics into one
            clear view.
          </p>

          <ul className="mt-6 space-y-2">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white/75 px-3 py-2.5 text-[11.5px] font-medium text-[#183B32]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <SolutionsCta href="/platform#website-security-check">
              Check Your Website
            </SolutionsCta>
          </div>
        </div>

        <div className="min-w-0">
          <WebsiteOwnersVisual />
        </div>
      </div>
    </section>
  );
}
