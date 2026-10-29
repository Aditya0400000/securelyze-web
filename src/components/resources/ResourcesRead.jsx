import {
  DeveloperIcon,
  GlobeIcon,
  RadarIcon,
} from "../about/AboutIcons";
import { LayersIcon, MailIcon } from "../pricing/PricingIcons";
import {
  ArticleIcon,
  BookOpenIcon,
} from "./ResourcesIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import SmoothAnchor from "./SmoothAnchor";

const CATEGORY_ACCENTS = {
  lime: {
    icon: "border-[#C6F36A]/20 bg-[#C6F36A]/10 text-[#D8FA93]",
    dot: "bg-[#C6F36A]",
  },
  amber: {
    icon: "border-[#F2C94C]/20 bg-[#F2C94C]/10 text-[#F7E3B4]",
    dot: "bg-[#F2C94C]",
  },
  periwinkle: {
    icon: "border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]",
    dot: "bg-[#B9C3FF]",
  },
  teal: {
    icon: "border-[#7DD3D8]/20 bg-[#7DD3D8]/10 text-[#C4F4F6]",
    dot: "bg-[#7DD3D8]",
  },
};

const READ_CATEGORIES = [
  {
    title: "Website Security",
    description:
      "HTTPS, headers, DNS, and the configuration details that shape a site's public posture.",
    icon: GlobeIcon,
    accent: "lime",
  },
  {
    title: "Cybersecurity Basics",
    description:
      "Approachable explanations for people building their first security foundation.",
    icon: BookOpenIcon,
    accent: "amber",
  },
  {
    title: "Developer Security",
    description:
      "Practical notes for teams shipping, maintaining, and reviewing web applications.",
    icon: DeveloperIcon,
    accent: "periwinkle",
  },
  {
    title: "Email Security",
    description:
      "SPF, DKIM, DMARC, and the records that protect a domain's email identity.",
    icon: MailIcon,
    accent: "teal",
  },
];

const EXPECTATIONS = [
  "Plain-language explainers",
  "Practical configuration notes",
  "Context for the signals you see",
];

export default function ResourcesRead() {
  return (
    <section
      id="read"
      aria-labelledby="read-heading"
      className="relative scroll-mt-32 overflow-hidden bg-[#071D34] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#7DD3D8]/[0.08] blur-[110px]" />
        <div className="absolute bottom-[-14rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#F2C94C]/[0.07] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="read-heading"
          tone="dark"
          eyebrow="02 / Read"
          title="Perspectives for the questions behind the checks."
          description="Articles, insights, and case studies are being prepared. This is where we will share practical context for the people who own, build, and defend websites."
        />

        <div className="mt-9 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div
            id="securelyze-blog"
            className="relative scroll-mt-[22rem] overflow-hidden rounded-[1.75rem] border border-[#DDE8C7] bg-[linear-gradient(145deg,#F7FCEB_0%,#FFFFFF_62%,#FBF4E5_100%)] p-6 text-[#071D34] shadow-[0_34px_90px_-56px_rgba(0,0,0,0.75),inset_0_1px_0_#FFFFFF] sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C6F36A]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 left-[-4rem] h-48 w-48 rounded-full bg-[#F2C94C]/15 blur-3xl"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DDE8C7] bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#5C8414]">
                  <ArticleIcon className="h-3.5 w-3.5" />
                  The journal
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EADCB8] bg-[#FDF8EC] px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.15em] text-[#8A6A1F]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#F2C94C]"
                  />
                  Coming soon
                </span>
              </div>

              <h3 className="mt-6 max-w-[34rem] text-balance text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-[2.05rem]">
                The Securelyze journal is taking shape.
              </h3>
              <p className="mt-4 max-w-[34rem] text-[13px] leading-[1.7] text-[#526B7F] sm:text-[13.5px]">
                We are preparing articles and insights that explain the
                reasoning behind the signals, not just the checklist. There are
                no published posts yet. When the first pieces are ready, they
                will appear here.
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {EXPECTATIONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-[#E1EAF2] bg-white/80 px-3 py-2.5 text-[10.5px] font-medium leading-[1.5] text-[#405A6E]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ED13C]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-[#E1EAF2] pt-4 text-[10px] leading-[1.6] text-[#7A8FA0]">
                No publication dates have been announced. This area will stay
                honest about what is actually available.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div
              id="security-insights"
              className="scroll-mt-28 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7DD3D8]/20 bg-[#7DD3D8]/10 text-[#C4F4F6]">
                <RadarIcon className="h-[18px] w-[18px]" />
              </span>
              <div className="mt-4 flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-semibold tracking-[-0.015em] text-white">
                  Security Insights
                </h4>
                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#C6F36A]">
                  In preparation
                </span>
              </div>
              <p className="mt-2 text-[11.5px] leading-[1.65] text-white/60">
                Short reads that connect public security signals to the
                decisions they inform.
              </p>
            </div>

            <div
              id="case-studies"
              className="scroll-mt-28 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]">
                <LayersIcon className="h-[18px] w-[18px]" />
              </span>
              <div className="mt-4 flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-semibold tracking-[-0.015em] text-white">
                  Case Studies
                </h4>
                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#C6F36A]">
                  In preparation
                </span>
              </div>
              <p className="mt-2 text-[11.5px] leading-[1.65] text-white/60">
                How teams use visibility to organize follow-up work and make
                security decisions with more context.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {READ_CATEGORIES.map((category) => {
            const accent = CATEGORY_ACCENTS[category.accent];
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05] motion-reduce:transition-none"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${accent.icon}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h4 className="mt-4 text-[12.5px] font-semibold tracking-[-0.01em] text-white">
                  {category.title}
                </h4>
                <p className="mt-1.5 text-[11px] leading-[1.6] text-white/60">
                  {category.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                  />
                  Articles in preparation
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-[1.6] text-white/55">
            No articles have been published yet. This section will expand when
            the first pieces are ready.
          </p>
          <SmoothAnchor
            href="#explore"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#D8FA93] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6F36A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071D34] motion-reduce:transition-none"
          >
            Explore the tutorials while you wait
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              &rarr;
            </span>
          </SmoothAnchor>
        </div>
      </div>
    </section>
  );
}
