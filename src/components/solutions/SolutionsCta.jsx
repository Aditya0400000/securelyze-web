import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";

const TONES = {
  primary:
    "bg-[#10B981] text-[#101A18] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(5,150,105,0.9)] hover:bg-[#059669] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(5,150,105,0.95)]",
  secondary:
    "border border-[#183B32]/15 bg-white/70 text-[#183B32] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm hover:border-[#183B32]/25 hover:bg-white",
  dark:
    "bg-[#101A18] text-white shadow-[0_14px_30px_-18px_rgba(16,26,24,0.85)] hover:bg-[#183B32]",
};

const FOCUS_LIGHT =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101A18] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const FOCUS_DARK =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101A18]";

export default function SolutionsCta({
  href,
  children,
  tone = "primary",
  onDark = false,
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl px-5 text-[13.5px] font-semibold tracking-[-0.005em] transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out motion-safe:hover:-translate-y-px motion-reduce:transition-none ${TONES[tone]} ${onDark ? FOCUS_DARK : FOCUS_LIGHT} ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}
