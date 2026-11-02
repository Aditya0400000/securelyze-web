export default function SolutionHeroCard({
  eyebrow,
  title,
  icon: Icon,
  items,
  footer,
  className = "",
}) {
  return (
    <aside
      aria-label={title}
      className={`mx-auto w-full max-w-[34rem] rounded-3xl border border-border bg-white/85 p-5 shadow-card backdrop-blur-sm sm:p-6 lg:max-w-none ${className}`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-text-muted">
            {eyebrow}
          </p>
          <p className="mt-1.5 text-[14px] font-semibold leading-[1.4] tracking-[-0.02em] text-charcoal">
            {title}
          </p>
        </div>
        {Icon ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
      </div>

      <ul className="mt-4 space-y-3.5">
        {items.map(({ icon: ItemIcon, title: itemTitle, detail }) => (
          <li key={itemTitle} className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-light text-text-secondary">
              <ItemIcon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[12.5px] font-semibold leading-[1.4] text-charcoal">
                {itemTitle}
              </p>
              <p className="mt-0.5 text-[11.5px] leading-[1.55] text-text-muted">
                {detail}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {footer ? (
        <p className="mt-5 border-t border-border pt-4 text-[10.5px] leading-[1.6] text-text-muted">
          {footer}
        </p>
      ) : null}
    </aside>
  );
}
