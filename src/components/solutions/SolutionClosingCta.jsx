import Link from "next/link";

import { ArrowRightIcon, SparkIcon } from "../pricing/PricingIcons";

function SplitClosingCta({ id, title, description, primary, secondary }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="bg-white pb-16 font-sans sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-dark-green/20 bg-charcoal p-7 shadow-[var(--shadow-card-dark)] sm:p-10 lg:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 size-80 rounded-full bg-emerald-hover/20 blur-[100px]" />
            <div className="absolute -bottom-24 left-[30%] size-64 rounded-full bg-emerald/[0.06] blur-[90px]" />
            <div className="absolute inset-0 bg-[linear-gradient(var(--white)_1px,transparent_1px),linear-gradient(90deg,var(--white)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.03] [mask-image:radial-gradient(ellipse_at_60%_40%,black,transparent_78%)]" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-1/2 hidden size-52 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
            <div className="min-w-0">
              <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald" />
                Next step
              </p>
              <h2 id={`${id}-heading`} className="mt-4 max-w-[37rem] text-balance text-[1.65rem] font-bold leading-[1.14] tracking-[-0.045em] text-white sm:text-[2.1rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-[34rem] text-pretty text-[13.5px] leading-[1.7] text-white/65">
                {description}
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href={primary.href}
                className="group inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald px-4 text-center text-[12px] font-semibold tracking-[-0.005em] text-charcoal shadow-[var(--shadow-btn-primary)] transition-[background-color,transform] duration-200 ease-out hover:bg-emerald-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-safe:hover:-translate-y-px motion-reduce:transition-none sm:w-auto"
              >
                {primary.label}
                <ArrowRightIcon className="size-3.5 shrink-0 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 text-center text-[12px] font-semibold text-white/75 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:w-auto"
                >
                  {secondary.label}
                  <ArrowRightIcon className="size-3.5 shrink-0" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SolutionClosingCta({
  id,
  title,
  description,
  primary,
  secondary,
  layout = "centered",
}) {
  if (layout === "split") {
    return <SplitClosingCta id={id} title={title} description={description} primary={primary} secondary={secondary} />;
  }

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
