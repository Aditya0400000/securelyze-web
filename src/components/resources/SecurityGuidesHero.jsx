import Link from "next/link";

import {
  ArrowRightIcon,
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
} from "../about/AboutIcons";
import { BookOpenIcon } from "./ResourcesIcons";

const GUIDE_TOPICS = ["SSL / TLS", "DNS", "HTTPS", "Headers", "Email"];

const GUIDE_CHAPTERS = [
  {
    topic: "SSL / TLS",
    label: "Connection context",
    icon: CertificateIcon,
    accent: "border-[#C6F36A]/20 bg-[#C6F36A]/10 text-[#D8FA93]",
    dot: "bg-[#C6F36A]",
  },
  {
    topic: "DNS records",
    label: "Routing & email",
    icon: NetworkIcon,
    accent: "border-[#8FCCFF]/20 bg-[#8FCCFF]/10 text-[#C4E7FF]",
    dot: "bg-[#8FCCFF]",
  },
  {
    topic: "Security headers",
    label: "Browser policy",
    icon: CodeIcon,
    accent: "border-[#B9C3FF]/20 bg-[#B9C3FF]/10 text-[#DCE2FF]",
    dot: "bg-[#B9C3FF]",
  },
];

function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[34rem] lg:max-w-[36rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle_at_55%_45%,rgba(92,155,211,0.18),transparent_68%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-[#0A2A46]/20 bg-[#071D34] p-1.5 shadow-[0_45px_110px_-48px_rgba(1,18,38,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#081F36]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_6%,rgba(143,204,255,0.16),transparent_38%),radial-gradient(circle_at_12%_100%,rgba(198,243,106,0.08),transparent_36%)]"
          />

          <div className="relative flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A3D]/80" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FCCFF]/45" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Guide library
            </span>
          </div>

          <div className="relative p-3.5 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full border border-white/[0.06]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-12 h-28 w-28 rounded-full border border-dashed border-white/[0.07]"
              />

              <div className="relative flex items-center gap-3.5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-[#C6F36A]/25 bg-[#0B2E4D] text-[#C6F36A] shadow-[0_0_36px_-10px_rgba(198,243,106,0.4)]">
                  <BookOpenIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                    Security Guides
                  </p>
                  <p className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-white">
                    Start with the signal.
                  </p>
                  <p className="mt-1 text-[11.5px] leading-[1.55] text-white/55">
                    Plain-language context for the public side of your website.
                  </p>
                </div>
              </div>

              <div className="relative mt-5 space-y-2">
                {GUIDE_CHAPTERS.map((chapter) => {
                  const Icon = chapter.icon;

                  return (
                    <div
                      key={chapter.topic}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${chapter.accent}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[10.5px] font-medium text-white/85">
                            {chapter.topic}
                          </p>
                          <p className="mt-0.5 truncate text-[9px] font-medium uppercase tracking-[0.12em] text-white/40">
                            {chapter.label}
                          </p>
                        </div>
                      </div>
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${chapter.dot}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5">
              <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/55">
                <BookOpenIcon className="h-3.5 w-3.5 text-[#C6F36A]" />
                Read at your pace
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-white/40">
                No jargon
              </span>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-white/45 sm:px-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full border border-white/30" />
              Practical guidance
            </span>
            <span>Securelyze / Learn</span>
          </div>
        </div>
      </div>

      <figcaption className="mt-4 px-3 text-center text-[11px] leading-[1.6] text-[#647C8D]">
        A guide library for the signals that shape your website&rsquo;s public
        security picture.
      </figcaption>
    </figure>
  );
}

export default function SecurityGuidesHero() {
  return (
    <section
      id="security-guides"
      aria-labelledby="security-guides-hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-[#DCE7F1] bg-[linear-gradient(180deg,#F7FAFC_0%,#FBFDFF_58%,#FFFFFF_100%)] font-sans selection:bg-[#C6F36A] selection:text-[#071D34]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#DCE8F7]/65 blur-3xl" />
        <div className="absolute right-[-8rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[#C6F36A]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_34%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-[#647C8D]">
            <li>
              <Link
                href="/resources"
                className="rounded-sm transition-colors duration-150 hover:text-[#183044] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                Resources
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#9AACBA]">
              /
            </li>
            <li aria-current="page" className="font-semibold text-[#183044]">
              Security Guides
            </li>
          </ol>
        </nav>

        <div className="grid gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#0B2B45]/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4A6477] shadow-[0_8px_24px_-18px_rgba(7,29,52,0.35)] backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#6F9E13]"
              />
              Learn
            </p>

            <h1
              id="security-guides-hero-heading"
              className="mt-6 max-w-[43rem] text-balance text-[2.65rem] font-semibold leading-[1.01] tracking-[-0.055em] text-[#071D34] sm:text-[3.4rem] lg:text-[3.75rem]"
            >
              Security{" "}
              <span className="relative inline-block">
                Guides
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[linear-gradient(90deg,#C6F36A_0%,#8ED13C_60%,#6F9E13_100%)] sm:-bottom-1.5"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-[38rem] text-pretty text-[15.5px] leading-[1.72] text-[#526B7F] sm:text-[16.5px]">
              Practical, plain-language guides to the public signals that shape
              a website&rsquo;s security picture. Start with the concepts that
              come up most, then follow the question that matters to you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#guide-library"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#C6F36A] px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(96,133,28,0.9)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-[#D2F77F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(96,133,28,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071D34] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none"
              >
                Browse the guide library
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </a>

              <Link
                href="/resources"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#0B2B45]/15 bg-white/70 px-5 text-[13.5px] font-semibold tracking-[-0.005em] text-[#0B2B45] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-colors duration-200 hover:border-[#0B2B45]/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071D34] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                Back to Resources
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-t border-[#DCE7F1] pt-5">
              {GUIDE_TOPICS.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#526B7F]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#6F9E13]/70"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
