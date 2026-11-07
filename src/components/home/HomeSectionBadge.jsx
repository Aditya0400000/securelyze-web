export default function HomeSectionBadge({ children }) {
  return (
    <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-dark-green/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase leading-[1.5] tracking-[0.18em] text-text-secondary shadow-sm backdrop-blur-sm">
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-emerald-hover" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
