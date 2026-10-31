import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";
import ResourcesSectionHeading from "../resources/ResourcesSectionHeading";
import { DocsIcon } from "./DocsIcons";
import { CATEGORY_TONES } from "./docsStyles";

const CONCEPTS = [
  {
    title: "Assets",
    description:
      "The domains, subdomains, and IP addresses you are protecting. They can be added by hand or discovered automatically.",
    icon: "assets",
    tone: "sky",
    label: "What you protect",
  },
  {
    title: "Scans",
    description:
      "Background jobs that examine your assets. Asset Discovery finds new assets; Security Scan checks existing ones for security problems.",
    icon: "layers",
    tone: "lime",
    label: "How data arrives",
  },
  {
    title: "Findings",
    description:
      "Individual security issues from scans or manual entry, each with a severity score from 0–10 and an Open, Fixed, or Ignored status.",
    icon: "findings",
    tone: "gold",
    label: "What needs attention",
  },
  {
    title: "Attack Surface",
    description:
      "A per-domain deep dive across WHOIS, DNS, subdomains, certificates, infrastructure, services, web, and email security.",
    icon: "attackSurface",
    tone: "periwinkle",
    label: "Where context lives",
  },
];

export default function DocsConcepts() {
  return (
    <section
      id="core-concepts"
      aria-labelledby="core-concepts-heading"
      className="relative overflow-hidden bg-[#101A18] py-16 font-sans selection:bg-[#10B981] selection:text-[#101A18] sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-14rem] h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[#10B981]/[0.08] blur-[130px]" />
        <div className="absolute bottom-[-16rem] left-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#10B981]/[0.06] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_20%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ResourcesSectionHeading
            id="core-concepts-heading"
            eyebrow="Core concepts"
            title="Four ideas explain almost everything."
            description="Once these terms are clear, the rest of the product is easier to navigate. They are the model behind the Dashboard, Findings, and Attack Surface views."
            tone="dark"
          />

          <Link
            href="/docs/overview"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-[12px] font-semibold text-white/80 transition-colors duration-150 hover:border-[#10B981]/35 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18] motion-reduce:transition-none"
          >
            Read the overview
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {CONCEPTS.map((concept, index) => {
            const tone = CATEGORY_TONES[concept.tone];

            return (
              <div
                key={concept.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-[border-color,background-color] duration-200 hover:border-white/20 hover:bg-white/[0.05] motion-reduce:transition-none"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${tone.darkIcon}`}
                  >
                    <DocsIcon
                      type={concept.icon}
                      className="h-[18px] w-[18px]"
                    />
                  </span>
                  <span className="text-[10px] font-semibold tabular-nums text-white/30">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {concept.label}
                </p>
                <h3 className="mt-1.5 text-[1.05rem] font-semibold tracking-[-0.025em] text-white">
                  {concept.title}
                </h3>
                <p className="mt-2.5 text-[12px] leading-[1.7] text-white/55">
                  {concept.description}
                </p>

                <span
                  aria-hidden="true"
                  className={`mt-auto block h-px w-full ${tone.rule} opacity-60`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
