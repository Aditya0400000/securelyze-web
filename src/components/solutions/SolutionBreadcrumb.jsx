import Link from "next/link";

export default function SolutionBreadcrumb({ current }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-[10px] font-semibold"
    >
      <Link
        href="/solutions"
        className="rounded-md text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
      >
        Solutions
      </Link>
      <span aria-hidden="true" className="text-text-muted/60">
        /
      </span>
      <span
        aria-current="page"
        className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-dark-green"
      >
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-emerald"
        />
        {current}
      </span>
    </nav>
  );
}
