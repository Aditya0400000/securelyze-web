export default function HomeSectionBadge({ children }) {
  return (
    <p className="inline-flex h-7 max-w-full items-center gap-2 rounded-full border border-emerald/25 bg-[color-mix(in_srgb,var(--soft-green)_65%,var(--light))] px-3.5 text-[9px] font-semibold uppercase leading-[14px] tracking-[0.02em] text-dark-green sm:text-[10px] sm:tracking-[0.1em]">
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-emerald-hover" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
