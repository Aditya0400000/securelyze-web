import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";
import ResourcesSectionHeading from "../resources/ResourcesSectionHeading";

const FIRST_RUN_STEPS = [
  {
    title: "Add your first domain",
    description:
      "Go to Assets → Add Asset, choose Domain, and enter your root domain.",
    href: "/docs/assets-and-discovery#adding-an-asset",
  },
  {
    title: "Turn on data collection",
    description:
      "In Scan Settings → Settings, enable the checks you want and save.",
    href: "/docs/scan-settings#settings",
  },
  {
    title: "Run your first scans",
    description:
      "Use Run Scan Now. Run Asset Discovery first, then a Security Scan.",
    href: "/docs/scan-settings#run-scan-now",
  },
  {
    title: "Review the results",
    description:
      "Follow progress in Scan Runs, then explore the Dashboard and Findings.",
    href: "/docs/dashboard",
  },
  {
    title: "Schedule recurring scans",
    description:
      "Set up a daily, weekly, or monthly schedule so the picture stays current.",
    href: "/docs/scan-settings#schedules",
  },
];

export default function DocsFirstRun() {
  return (
    <section
      id="first-run"
      aria-labelledby="first-run-heading"
      className="relative scroll-mt-28 overflow-hidden border-y border-[#DCE7F1] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_55%,#FFFFFF_100%)] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#C6F36A]/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-[#E6F4F2]/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28">
          <ResourcesSectionHeading
            id="first-run-heading"
            eyebrow="First-run checklist"
            title="From first sign-in to first results."
            description="A new organisation starts with no data. This is the shortest path to a useful first view of your external attack surface."
          />

          <Link
            href="/docs/getting-started"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-[#0B2B45]/10 bg-white/80 px-4 py-2.5 text-[12px] font-semibold text-[#183044] shadow-[inset_0_1px_0_#FFFFFF] transition-colors duration-150 hover:border-[#C9DFA4] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Read the full Getting Started guide
            <ArrowRightIcon className="h-3.5 w-3.5 text-[#5C8414] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>

          <p className="mt-4 max-w-[30rem] text-[11px] leading-[1.65] text-[#7A8FA0]">
            The checklist follows the product workflow described in the
            Getting Started guide.
          </p>
        </div>

        <ol className="relative space-y-0">
          {FIRST_RUN_STEPS.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 pb-4 last:pb-0">
              <div className="flex w-9 shrink-0 flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7E9B0] bg-[#F4FBE5] text-[10px] font-bold tabular-nums text-[#4F7410] shadow-[inset_0_1px_0_#FFFFFF]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < FIRST_RUN_STEPS.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-[linear-gradient(180deg,#D7E9B0,transparent)]"
                  />
                ) : null}
              </div>

              <Link
                href={step.href}
                className="group flex min-w-0 flex-1 items-start justify-between gap-4 rounded-[1.1rem] border border-[#DCE7F1] bg-white/90 p-4 shadow-[0_16px_36px_-32px_rgba(7,29,52,0.4),inset_0_1px_0_#FFFFFF] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#C9DFA4] hover:bg-white hover:shadow-[0_20px_44px_-30px_rgba(7,29,52,0.35),inset_0_1px_0_#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                <div className="min-w-0">
                  <h3 className="text-[13.5px] font-semibold tracking-[-0.015em] text-[#10283E]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-[1.65] text-[#5F7284]">
                    {step.description}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#5C8414]">
                    Open guide
                    <ArrowRightIcon className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6F36A] shadow-[0_0_0_4px_rgba(198,243,106,0.18)]"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
