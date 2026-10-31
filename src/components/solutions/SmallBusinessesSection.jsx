import {
  CompassIcon,
  ShieldIcon,
  SparkIcon,
} from "../about/AboutIcons";
import { CheckIcon } from "../pricing/PricingIcons";
import SolutionsCta from "./SolutionsCta";

const STEPS = [
  {
    number: "01",
    title: "Review the basics",
    description: "Start with the checks that shape a safer website.",
    icon: ShieldIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    number: "02",
    title: "Understand the context",
    description: "See how each signal fits into the bigger picture.",
    icon: CompassIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  },
  {
    number: "03",
    title: "Decide what comes next",
    description: "Turn context into a practical next step.",
    icon: SparkIcon,
    iconTone: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
  },
];

const CHECKS = ["SSL/TLS", "DNS", "HTTPS", "SPF / DKIM / DMARC"];

function SmallBusinessesVisual() {
  return (
    <figure
      aria-labelledby="small-businesses-visual-caption"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.24),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#D1FAE5] bg-white p-1.5 shadow-[0_35px_90px_-55px_rgba(5,150,105,0.35)]">
        <div className="relative overflow-hidden rounded-[1.35rem] border border-[#ECFDF5] bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-[#ECFDF5] bg-[#ECFDF5] px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D1FAE5] bg-white text-[#047857]">
                <CompassIcon className="h-3.5 w-3.5" />
              </span>
              <span className="truncate text-[10px] font-semibold tracking-[-0.01em] text-[#101A18]">
                Your security starting point
              </span>
            </div>

            <span className="shrink-0 rounded-full border border-[#D1FAE5] bg-white px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#047857]">
              For small teams
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <ol className="space-y-2">
              {STEPS.map((step) => {
                const Icon = step.icon;

                return (
                  <li
                    key={step.number}
                    className="group flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white px-3 py-3 transition duration-300 motion-safe:hover:-translate-y-0.5 hover:border-[#D1FAE5] hover:shadow-[0_18px_40px_-32px_rgba(5,150,105,0.35)]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D1FAE5] bg-[#ECFDF5] font-mono text-[8px] font-semibold text-[#047857]">
                      {step.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${step.iconTone}`}
                        >
                          <Icon className="h-3 w-3" />
                        </span>
                        <p className="text-[10.5px] font-semibold text-[#101A18]">
                          {step.title}
                        </p>
                      </div>
                      <p className="mt-1 text-[9.5px] leading-[1.55] text-[#475569]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-4 rounded-xl border border-[#D1FAE5] bg-[#ECFDF5] p-3.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#047857]">
                Checks in scope
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {CHECKS.map((check) => (
                  <span
                    key={check}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D1FAE5] bg-white px-2.5 py-1 text-[8.5px] font-semibold text-[#047857]"
                  >
                    <CheckIcon className="h-2.5 w-2.5" />
                    {check}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#ECFDF5] px-4 py-2.5 text-[8.5px] font-medium tracking-[0.02em] text-[#64748B] sm:px-5">
            <span>Small Businesses</span>
            <span>Practical by design</span>
          </div>
        </div>
      </div>

      <figcaption id="small-businesses-visual-caption" className="sr-only">
        Abstract illustration of a practical three-step security starting point
        with checks for SSL/TLS, DNS, HTTPS, and email authentication.
      </figcaption>
    </figure>
  );
}

export default function SmallBusinessesSection() {
  return (
    <section
      id="small-businesses"
      aria-labelledby="small-businesses-heading"
      className="relative scroll-mt-24 overflow-hidden border-y border-[#ECFDF5] bg-[linear-gradient(180deg,#FBFDF7_0%,#F4FAE8_48%,#FBFDF7_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#10B981]/20 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#10B981]/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(5,150,105,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(5,150,105,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_30%,black,transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="order-2 min-w-0 lg:order-1">
          <SmallBusinessesVisual />
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#047857]">
            <span aria-hidden="true" className="h-px w-8 bg-[#047857]/45" />
            Small Businesses
          </p>

          <h2
            id="small-businesses-heading"
            className="mt-4 max-w-[36rem] text-balance text-[2rem] font-bold leading-[1.06] tracking-[-0.045em] text-[#101A18] sm:text-[2.35rem] lg:text-[2.75rem]"
          >
            A practical starting point for a safer website.
          </h2>

          <p className="mt-5 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15px]">
            Build a clear view of the security basics without adding
            complexity.
          </p>

          <p className="mt-4 max-w-[35rem] text-pretty text-[14.5px] leading-[1.75] text-[#475569] sm:text-[15px]">
            SSL/TLS, DNS, HTTPS, and email-authentication context come together
            in one practical starting point.
          </p>

          <p className="mt-5 max-w-[35rem] text-[12.5px] leading-[1.7] text-[#64748B]">
            Designed for teams that need clarity, not more noise.
          </p>

          <div className="mt-7">
            <SolutionsCta
              href="/platform#website-security-check"
              tone="dark"
            >
              Improve Website Security
            </SolutionsCta>
          </div>
        </div>
      </div>
    </section>
  );
}
