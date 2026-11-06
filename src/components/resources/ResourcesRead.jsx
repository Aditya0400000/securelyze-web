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
    icon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
  amber: {
    icon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
  periwinkle: {
    icon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
  teal: {
    icon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
};

const READ_CATEGORIES = [
  {
    title: "Website Security",
    description:
      "Domain records, HTTPS settings, and HTTP policies that help explain how a website is configured.",
    icon: GlobeIcon,
    accent: "lime",
  },
  {
    title: "Cybersecurity Basics",
    description:
      "Plain-language explanations of domains, encrypted connections, and public assets.",
    icon: BookOpenIcon,
    accent: "amber",
  },
  {
    title: "Developer Security",
    description:
      "DNS, certificates, and HTTP policies relevant to deployments and application maintenance.",
    icon: DeveloperIcon,
    accent: "periwinkle",
  },
  {
    title: "Email Security",
    description:
      "SPF, DKIM, and DMARC: how they support authentication for email sent using a domain.",
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
      className="relative scroll-mt-32 overflow-hidden bg-[#101A18] py-16 font-sans sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#10B981]/[0.08] blur-[110px]" />
        <div className="absolute bottom-[-14rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#10B981]/[0.07] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="read-heading"
          tone="dark"
          eyebrow="READ"
          title="Practical Guides to Internet-Facing Security"
          description="Read clear explanations and practical guidance on website security configurations, asset discovery, and publicly visible infrastructure."
        />

        <div className="mt-9 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div
            id="securelyze-blog"
            className="relative scroll-mt-[22rem] overflow-hidden rounded-[1.75rem] border border-[#D1FAE5] bg-[linear-gradient(145deg,#F7FCEB_0%,#FFFFFF_62%,#FBF4E5_100%)] p-6 text-[#101A18] shadow-[0_34px_90px_-56px_rgba(0,0,0,0.75),inset_0_1px_0_#FFFFFF] sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#10B981]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 left-[-4rem] h-48 w-48 rounded-full bg-[#10B981]/15 blur-3xl"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D1FAE5] bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#047857]">
                  <ArticleIcon className="h-3.5 w-3.5" />
                  The journal
                </span>
              </div>

              <h3 className="mt-6 max-w-[34rem] text-balance text-[1.7rem] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-[2.05rem]">
                The Securelyze journal.
              </h3>
              <p className="mt-4 max-w-[34rem] text-[13px] leading-[1.7] text-[#475569] sm:text-[13.5px]">
                No journal articles are published here. You can read the
                existing concept guides in Learn and the walkthroughs in
                Explore. The categories below outline the journal topics.
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-3">
                {EXPECTATIONS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-[#E2E8F0] bg-white/80 px-3 py-2.5 text-[10.5px] font-medium leading-[1.5] text-[#475569]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#34D399]"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-[#E2E8F0] pt-4 text-[10px] leading-[1.6] text-[#64748B]">
                No publication dates have been announced.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div
              id="security-insights"
              className="scroll-mt-28 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]">
                <RadarIcon className="h-[18px] w-[18px]" />
              </span>
              <div className="mt-4 flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-semibold tracking-[-0.015em] text-white">
                  Security Insights
                </h4>
                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                  In preparation
                </span>
              </div>
              <p className="mt-2 text-[11.5px] leading-[1.65] text-white/60">
                Public configuration and asset information, and how to
                interpret observations that need further review.
              </p>
            </div>

            <div
              id="case-studies"
              className="scroll-mt-28 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]">
                <LayersIcon className="h-[18px] w-[18px]" />
              </span>
              <div className="mt-4 flex items-center justify-between gap-2">
                <h4 className="text-[13.5px] font-semibold tracking-[-0.015em] text-white">
                  Case Studies
                </h4>
                <span className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                  In preparation
                </span>
              </div>
              <p className="mt-2 text-[11.5px] leading-[1.65] text-white/60">
                Intended for examples of asset and configuration reviews. No
                case studies are published here.
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
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <SmoothAnchor
            href="#explore"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold text-[#D1FAE5] transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18] motion-reduce:transition-none"
          >
            Read the walkthroughs
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
