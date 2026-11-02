import Link from "next/link";

import { ArrowRightIcon, SparkIcon } from "../pricing/PricingIcons";

export default function SolutionClosingCta({
  id,
  title,
  description,
  primary,
  secondary,
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="bg-dark-green py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[52rem] rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-soft-green">
            <SparkIcon className="h-3.5 w-3.5" />
            Next step
          </p>

          <h2
            id={`${id}-heading`}
            className="mt-6 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[2.6rem] lg:text-[3rem]"
          >
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-[36rem] text-pretty text-[14px] leading-[1.7] text-white/65 sm:text-[15px]">
            {description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 text-[13px] font-semibold text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-dark-green motion-reduce:transition-none sm:w-auto"
              >
                {secondary.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
