import Link from "next/link";

import { ArrowRightIcon, SparkIcon } from "./PricingIcons";

export default function PricingCta() {
  return (
    <section
      aria-labelledby="pricing-cta-heading"
      className="relative overflow-hidden bg-[#050B18] py-16 font-sans selection:bg-[#C6F36A] selection:text-[#071D34] sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5D4BC8]/[0.12] blur-[130px]" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[24rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#C6F36A]/[0.045] blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_50%_50%,black,transparent_72%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#08192D_0%,#101335_52%,#0A1730_100%)] px-6 py-12 shadow-[0_45px_120px_-65px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-32 h-80 w-80 rounded-full bg-[#2A7AB8]/[0.16] blur-[100px]" />
            <div className="absolute -bottom-32 right-[-6rem] h-80 w-80 rounded-full bg-[#7567E8]/[0.14] blur-[100px]" />
            <div className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] sm:h-[35rem] sm:w-[35rem]" />
            <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05] sm:h-[28rem] sm:w-[28rem]" />
            <div className="absolute left-[16%] top-[24%] hidden h-1.5 w-1.5 rounded-full bg-[#C6F36A]/70 shadow-[0_0_16px_rgba(198,243,106,0.55)] sm:block" />
            <div className="absolute bottom-[28%] right-[18%] hidden h-1 w-1 rounded-full bg-[#8FCCFF]/60 shadow-[0_0_14px_rgba(143,204,255,0.55)] sm:block" />
          </div>

          <div className="relative mx-auto max-w-[47rem] text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#C6F36A]/20 bg-[#C6F36A]/[0.06] px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.19em] text-[#D8FA93] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <SparkIcon className="h-3.5 w-3.5" />
              Start with visibility
            </p>

            <h2
              id="pricing-cta-heading"
              className="mt-6 text-balance text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[2.8rem] lg:text-[3.4rem]"
            >
              Better Security Starts with Better Visibility.
            </h2>

            <p className="mx-auto mt-5 max-w-[36rem] text-pretty text-[14px] leading-[1.72] text-white/60 sm:text-[15px]">
              Explore your website&rsquo;s security signals and discover your
              public-facing digital assets.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/platform#website-security-check"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#C6F36A] px-5 text-[12.5px] font-semibold tracking-[-0.005em] text-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(96,133,28,0.9)] transition-[background-color,transform] duration-200 ease-out hover:bg-[#D2F77F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101335] motion-safe:hover:-translate-y-px motion-reduce:transition-none"
              >
                Check Website Security
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              <Link
                href="/platform#assets-discovery"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 text-[12.5px] font-semibold tracking-[-0.005em] text-white/80 transition-[border-color,background-color,color] duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101335] motion-reduce:transition-none"
              >
                Discover Assets
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <p className="mt-6 text-[9.5px] font-medium uppercase tracking-[0.16em] text-white/55">
              Silver is free. No subscription required for the basic plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
