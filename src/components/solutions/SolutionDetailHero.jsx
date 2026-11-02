import Link from "next/link";

import { ArrowRightIcon } from "../pricing/PricingIcons";
import SolutionBreadcrumb from "./SolutionBreadcrumb";

export default function SolutionDetailHero({
  id,
  current,
  title,
  description,
  note,
  primary,
  secondary,
  heroCard,
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-light via-background to-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-16">
          <div className="min-w-0 max-w-[52rem]">
            <SolutionBreadcrumb current={current} />

            <h1
              id={`${id}-heading`}
              className="mt-8 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              {title}
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              {description}
            </p>

            {note ? (
              <p className="mt-4 max-w-[44rem] text-pretty text-[12.5px] leading-[1.7] text-text-muted">
                {note}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={primary.href}
                className="btn-primary group w-full sm:w-auto"
              >
                {primary.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="btn-outline group w-full sm:w-auto"
                >
                  {secondary.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>

          {heroCard ? <div className="min-w-0">{heroCard}</div> : null}
        </div>
      </div>
    </section>
  );
}
