import Link from "next/link";

import { ArrowRightIcon } from "../about/AboutIcons";

const TONES = {
  primary:
    "bg-[#C6F36A] text-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_14px_30px_-18px_rgba(96,133,28,0.9)] hover:bg-[#D2F77F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_36px_-18px_rgba(96,133,28,0.95)]",
  secondary:
    "border border-[#0B2B45]/15 bg-white/70 text-[#0B2B45] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm hover:border-[#0B2B45]/25 hover:bg-white",
  dark:
    "bg-[#071D34] text-white shadow-[0_14px_30px_-18px_rgba(7,29,52,0.85)] hover:bg-[#0B2B45]",
};

const FOCUS_LIGHT =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071D34] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const FOCUS_DARK =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07152B]";

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
