"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import HeroBotStage from "@/components/home/hero/HeroBotStage";

const HERO_SLIDES = [
  {
    titleLines: [
      [{ text: "Free " }, { text: "Website Security", highlight: true }],
      [{ text: "Checker & " }, { text: "Asset", highlight: true }],
      [{ text: "Discovery", highlight: true }, { text: " Tools" }],
    ],
    description:
      "Check your website’s security configuration, review SSL/TLS certificates and DNS records, identify missing security headers, and discover internet-facing digital assets—all from one simple platform.",
  },
  {
    titleLines: [
      [{ text: "Inspect " }, { text: "SSL / TLS.", highlight: true }],
      [{ text: "Trust every " }, { text: "connection.", highlight: true }],
    ],
    description:
      "Review certificate validity, protocol versions, and TLS configuration so encryption gaps are easier to spot.",
  },
  {
    titleLines: [
      [{ text: "Follow " }, { text: "DNS records.", highlight: true }],
      [{ text: "See the full " }, { text: "resolution path.", highlight: true }],
    ],
    description:
      "Trace DNS records and resolution paths to understand how your domain is configured—and where records may be missing or misaligned.",
  },
  {
    titleLines: [
      [{ text: "Security " }, { text: "headers,", highlight: true }],
      [{ text: "line by line.", highlight: true }],
    ],
    description:
      "Review browser-facing security headers and see which policies are present, missing, or need another look.",
  },
  {
    titleLines: [
      [{ text: "Email " }, { text: "authentication,", highlight: true }],
      [{ text: "aligned end to end.", highlight: true }],
    ],
    description:
      "Check SPF, DKIM, and DMARC configuration to understand how your domain protects outbound email.",
  },
  {
    titleLines: [
      [{ text: "Discover the " }, { text: "assets", highlight: true }],
      [{ text: "behind your " }, { text: "public surface.", highlight: true }],
    ],
    description:
      "Map domains, subdomains, hosts, ports, and services to reveal the internet-facing assets connected to your organization.",
  },
];

const COPY_EXIT_MS = 190;
const HEADING_DELAY_MS = 80;
const HEADING_SPEED_MS = 22;
const DESCRIPTION_SPEED_MS = 12;
const DESCRIPTION_GAP_MS = 240;

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function useTypewriter(text, { delay = 0, speed = 22, disabled = false }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (disabled) return undefined;

    let interval;

    const timeout = window.setTimeout(() => {
      setVisibleCharacters(1);
      interval = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= text.length) {
            window.clearInterval(interval);
            return current;
          }

          return current + 1;
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [delay, disabled, speed, text]);

  return disabled ? text : text.slice(0, visibleCharacters);
}

function getHeadingText(slide) {
  return slide.titleLines.flatMap((line) => line.map((segment) => segment.text)).join("");
}

function TypedHeroTitle({ slide, visibleCharacters }) {
  let remainingCharacters = visibleCharacters;

  return slide.titleLines.map((line, lineIndex) => {
    const lineLength = line.reduce((total, segment) => total + segment.text.length, 0);
    let remainingLineCharacters = Math.min(remainingCharacters, lineLength);
    const visibleSegments = line.map((segment, segmentIndex) => {
      if (remainingLineCharacters <= 0) return null;

      const visibleText = segment.text.slice(0, remainingLineCharacters);
      remainingLineCharacters -= segment.text.length;

      return segment.highlight ? (
        <span
          key={segmentIndex}
          className="text-emerald drop-shadow-[0_0_20px_var(--glow-emerald)]"
        >
          {visibleText}
        </span>
      ) : (
        <Fragment key={segmentIndex}>{visibleText}</Fragment>
      );
    });

    remainingCharacters -= lineLength;

    return (
      <Fragment key={lineIndex}>
        <span className="sm:block">{visibleSegments}</span>
        {lineIndex < slide.titleLines.length - 1 ? " " : null}
      </Fragment>
    );
  });
}

const HEADING_CLASSES =
  "w-full max-w-[43rem] text-balance text-[2.5rem] font-semibold leading-[1.01] tracking-[-0.055em] text-white sm:text-[3.25rem] lg:text-[2.85rem] xl:text-[3.65rem]";

const DESCRIPTION_CLASSES =
  "max-w-[36rem] text-pretty text-[15px] leading-[1.7] text-white/85 sm:text-base";

function HeroCopy({ slide, slideIndex, isExiting, reducedMotion }) {
  const headingText = getHeadingText(slide);
  const typedHeading = useTypewriter(headingText, {
    delay: HEADING_DELAY_MS,
    speed: HEADING_SPEED_MS,
    disabled: reducedMotion,
  });
  const typedDescription = useTypewriter(slide.description, {
    delay:
      HEADING_DELAY_MS +
      headingText.length * HEADING_SPEED_MS +
      DESCRIPTION_GAP_MS,
    speed: DESCRIPTION_SPEED_MS,
    disabled: reducedMotion,
  });
  const headingComplete = typedHeading.length >= headingText.length;
  const descriptionComplete = typedDescription.length >= slide.description.length;
  const HeadingTag = slideIndex === 0 ? "h1" : "p";

  return (
    <div className={`hero-copy-block ${isExiting ? "is-exiting" : ""}`.trim()}>
      <div className="hero-copy-heading mt-6">
        <HeadingTag id="hero-heading" className={HEADING_CLASSES}>
          <span className="sr-only">{headingText}</span>
          <span aria-hidden="true" className="hero-copy-title">
            <span className="hero-copy-title__sizer" aria-hidden="true">
              <TypedHeroTitle slide={slide} visibleCharacters={headingText.length} />
            </span>
            <span className="hero-copy-title__typed">
              <TypedHeroTitle slide={slide} visibleCharacters={typedHeading.length} />
              {!reducedMotion && !headingComplete ? (
                <span className="hero-copy-caret" />
              ) : null}
            </span>
          </span>
        </HeadingTag>
      </div>

      <div className="hero-copy-description mt-5">
        <p aria-hidden="true" className={DESCRIPTION_CLASSES}>
          {typedDescription}
          {!reducedMotion && !descriptionComplete ? (
            <span className="hero-copy-caret hero-copy-caret--description" />
          ) : null}
        </p>
        <p className="sr-only">{slide.description}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  const visibleSlide = reducedMotion ? activeSlide : displayedSlide;
  const isExiting = !reducedMotion && activeSlide !== displayedSlide;
  const slide = HERO_SLIDES[visibleSlide];

  useEffect(() => {
    if (displayedSlide === activeSlide) return undefined;

    const timer = window.setTimeout(
      () => setDisplayedSlide(activeSlide),
      reducedMotion ? 0 : COPY_EXIT_MS,
    );

    return () => window.clearTimeout(timer);
  }, [activeSlide, displayedSlide, reducedMotion]);

  return (
    <section
      id="security-checker"
      aria-labelledby="hero-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-gradient-hero font-sans text-white selection:bg-emerald selection:text-charcoal"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[12%] top-[4%] h-[34rem] w-[34rem] rounded-full bg-emerald-hover/15 blur-[140px]" />
        <div className="absolute right-[-10%] top-[-6%] h-[42rem] w-[42rem] rounded-full bg-emerald/12 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[34%] h-[26rem] w-[26rem] rounded-full bg-emerald/[0.04] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-[64%] bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-16 pt-8 sm:gap-10 sm:px-6 sm:pb-20 sm:pt-12 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:pb-20 lg:pt-12 xl:gap-14 xl:pt-14">
        <div className="min-w-0 lg:col-span-7">
          <div className="hero-copy-eyebrow inline-flex rounded-full bg-[linear-gradient(120deg,var(--emerald)_0%,var(--soft-green)_50%,var(--emerald-hover)_100%)] p-px shadow-[0_0_34px_-12px_var(--glow-emerald)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-dark-green/95 px-3.5 py-1.5 text-[11.5px] font-semibold tracking-[-0.005em] text-white/90 backdrop-blur-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-soft-green shadow-[0_0_9px_var(--soft-green)]"
              />
              Your Website. Our Priority.
            </span>
          </div>

          <HeroCopy
            key={visibleSlide}
            slide={slide}
            slideIndex={visibleSlide}
            isExiting={isExiting}
            reducedMotion={reducedMotion}
          />

          <div className="hero-copy-actions mt-8 flex max-w-[37rem] flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/platform#website-security-check"
              className="btn-primary group w-full sm:w-auto"
            >
              Security Check
              <span
                aria-hidden="true"
                className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
              >
                →
              </span>
            </Link>

            <Link
              href="/platform#assets-discovery"
              className="group inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-soft-green/25 bg-white/5 px-5 text-sm font-semibold tracking-[-0.01em] text-soft-green transition duration-200 ease-out hover:border-emerald/50 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-safe:hover:-translate-y-px motion-reduce:transition-none sm:w-auto"
            >
              Asset Discovery
              <span
                aria-hidden="true"
                className="text-[14px] text-soft-green transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white motion-reduce:transition-none"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-5">
          <HeroBotStage onBotChange={setActiveSlide} />
        </div>
      </div>
    </section>
  );
}
