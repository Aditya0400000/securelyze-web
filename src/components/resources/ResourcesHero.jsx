import { ArrowRightIcon, CompassIcon } from "../about/AboutIcons";
import { ArticleIcon, BookOpenIcon } from "./ResourcesIcons";
import SmoothAnchor from "./SmoothAnchor";

const RESOURCE_PATHS = [
  {
    label: "Learn",
    detail: "Guides & basics",
    href: "#learn",
    icon: BookOpenIcon,
    lightIcon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    darkIcon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
  {
    label: "Read",
    detail: "Articles & insights",
    href: "#read",
    icon: ArticleIcon,
    lightIcon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    darkIcon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
  {
    label: "Explore",
    detail: "Tutorials & updates",
    href: "#explore",
    icon: CompassIcon,
    lightIcon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    darkIcon: "border-[#10B981]/20 bg-[#10B981]/10 text-[#D1FAE5]",
    dot: "bg-[#10B981]",
  },
];

function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:max-w-[36rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(16,185,129,0.15),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#183B32]/20 bg-[#101A18] p-1.5 shadow-[0_45px_110px_-48px_rgba(16,26,24,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#183B32]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_6%,rgba(16,185,129,0.12),transparent_38%),radial-gradient(circle_at_12%_100%,rgba(16,185,129,0.08),transparent_36%)]"
          />

          <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]/55" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Resource library
            </span>
          </div>

          <div className="relative p-3.5 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.035] px-4 py-6 text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#10B981]/[0.045] blur-2xl"
              />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#10B981]/25 bg-[#183B32] text-[#10B981] shadow-[0_0_36px_-10px_rgba(16,185,129,0.4)]">
                <BookOpenIcon className="h-6 w-6" />
              </span>
              <p className="relative mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                A clearer starting point
              </p>
              <p className="relative mt-1.5 text-[17px] font-semibold tracking-[-0.025em] text-white">
                Learn. Read. Explore.
              </p>
              <p className="relative mx-auto mt-2 max-w-[18rem] text-[11.5px] leading-[1.6] text-white/55">
                Guidance, context, and answers for your next security question.
              </p>
            </div>

            <div className="mt-2.5 space-y-1.5">
              {RESOURCE_PATHS.map((category) => {
                const Icon = category.icon;

                return (
                  <div
                    key={category.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${category.darkIcon}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[11px] font-medium text-white/85">
                          {category.label}
                        </p>
                        <p className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-[0.12em] text-white/40">
                          {category.detail}
                        </p>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${category.dot}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/55 sm:px-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
              Practical guidance
            </span>
            <span>Securelyze resources</span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 px-3 text-center text-[11px] leading-[1.6] text-[#64748B]">
        A connected library of guidance, perspectives, and answers for the
        public side of your website.
      </figcaption>
    </figure>
  );
}

export default function ResourcesHero() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-[#E2E8F0] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#10B981] selection:text-[#101A18]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#ECFDF5]/70 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#10B981]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_34%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#183B32]/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#475569] shadow-[0_8px_24px_-18px_rgba(16,26,24,0.35)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#059669]"
            />
            Resources
          </p>

          <h1
            id="resources-hero-heading"
            className="mt-6 max-w-[43rem] text-balance text-[2.65rem] font-semibold leading-[1.01] tracking-[-0.055em] text-[#101A18] sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            Security knowledge,{" "}
            <span className="relative inline-block">
              made practical.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#C6F36A_0%,#8ED13C_60%,#6F9E13_100%)] sm:-bottom-1.5"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-[38rem] text-pretty text-[15.5px] leading-[1.72] text-[#475569] sm:text-[16.5px]">
            A complete resource center for understanding website security, from
            the fundamentals to hands-on checks. Learn at your own pace, read
            what is coming next, and explore the signals that matter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SmoothAnchor
              href="#learn"
              className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#10B981] px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(5,150,105,0.9)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#059669] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(5,150,105,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none"
            >
              Start with Learn
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </SmoothAnchor>

            <SmoothAnchor
              href="#explore"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#183B32]/15 bg-white/70 px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#183B32] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-colors duration-200 hover:border-[#183B32]/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              Jump to Explore
              <CompassIcon className="h-4 w-4" />
            </SmoothAnchor>
          </div>

          <nav
            aria-label="Resources sections"
            className="mt-8 border-t border-[#E2E8F0] pt-5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Browse the page
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {RESOURCE_PATHS.map((category) => {
                const Icon = category.icon;

                return (
                  <SmoothAnchor
                    key={category.label}
                    href={category.href}
                    className="group flex items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white/80 px-3 py-2.5 shadow-[inset_0_1px_0_#FFFFFF] transition-[border-color,background-color] duration-150 hover:border-[#D1FAE5] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B32] focus-visible:ring-offset-2 motion-reduce:transition-none"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${category.lightIcon}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11.5px] font-semibold text-[#183B32]">
                        {category.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[8px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
                        {category.detail}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </SmoothAnchor>
                );
              })}
            </div>
          </nav>
        </div>

        <div className="min-w-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
