import Link from "next/link";

import { ArrowRightIcon } from "../pricing/PricingIcons";

export default function SolutionCard({
  href,
  icon: Icon,
  leading,
  title,
  description,
  ctaLabel,
  size = "default",
  className = "",
}) {
  const isLarge = size === "lg";
  const Wrapper = href ? Link : "article";
  const wrapperProps = href ? { href } : {};
  const interactiveClasses = href
    ? "hover:border-emerald/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    : "";

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex h-full min-w-0 flex-col rounded-2xl border border-border bg-white shadow-card transition-colors duration-200 motion-reduce:transition-none ${
        isLarge ? "p-6" : "p-5"
      } ${interactiveClasses} ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        {leading ? (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald/20 bg-emerald/10 text-[10px] font-bold tabular-nums text-dark-green">
            {leading}
          </span>
        ) : Icon ? (
          <span
            className={`flex shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald ${
              isLarge ? "h-11 w-11" : "h-10 w-10"
            }`}
          >
            <Icon className="h-5 w-5" />
          </span>
        ) : null}

        {href ? (
          <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-colors duration-200 group-hover:text-emerald motion-reduce:transition-none" />
        ) : null}
      </div>

      <h3
        className={`mt-4 text-pretty font-semibold leading-[1.45] tracking-[-0.02em] text-charcoal ${
          isLarge ? "text-[17px] sm:text-[18px]" : "text-[14px]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-2 text-pretty leading-[1.7] text-text-secondary ${
          isLarge ? "text-[13px]" : "text-[12.5px]"
        } ${ctaLabel ? "mb-4" : ""}`}
      >
        {description}
      </p>

      {ctaLabel ? (
        <span className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-3.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors duration-200 group-hover:text-emerald motion-reduce:transition-none">
          {ctaLabel}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      ) : null}
    </Wrapper>
  );
}
