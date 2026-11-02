export default function SolutionSectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`${
        isCentered ? "mx-auto max-w-[46rem] text-center" : "max-w-[46rem]"
      } ${className}`}
    >
      <p
        className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${
          isCentered ? "relative mx-auto w-fit justify-center" : ""
        } ${isDark ? "text-soft-green" : "text-dark-green"}`}
      >
        <span
          aria-hidden="true"
          className={`h-px w-8 bg-emerald ${
            isCentered
              ? "absolute right-full top-1/2 mr-3 -translate-y-1/2 sm:static sm:mr-0 sm:translate-y-0"
              : ""
          }`}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[2.35rem] lg:text-[2.6rem] ${
          isDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-[44rem] text-pretty text-[14.5px] leading-[1.75] sm:text-[15px] ${
            isCentered ? "mx-auto" : ""
          } ${isDark ? "text-white/65" : "text-text-secondary"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
