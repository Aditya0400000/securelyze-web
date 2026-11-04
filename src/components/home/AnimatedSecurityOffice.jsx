import OfficeScene from "./OfficeScene";

export default function AnimatedSecurityOffice() {
  return (
    <section id="security-office" aria-labelledby="security-office-heading" className="overflow-hidden bg-charcoal py-12 font-sans text-white sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-emerald/35 bg-emerald/10 px-3 py-1.5 text-xs font-medium text-emerald-light">
          Inside Securelyze
        </p>
        <h2 id="security-office-heading" className="mt-3 max-w-3xl text-balance text-[28px] font-medium leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:text-[40px]">
          Meet the team behind every scan
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--office-text-secondary)] sm:text-base">
          Every check has its own specialist. Watch how results travel through the office to the report desk.
        </p>
        <figure className="mt-6">
          <OfficeScene />
          <OfficeScene mobile />
          <figcaption className="mt-3 text-xs leading-relaxed text-[var(--office-text-muted)]">
            Illustration of how the work is organised. Results shown are examples.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
