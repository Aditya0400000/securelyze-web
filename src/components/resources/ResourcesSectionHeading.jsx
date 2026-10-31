export default function ResourcesSectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  size = "lg",
  as: Heading = "h2",
  className = "",
}) {
  const isDark = tone === "dark";
  const isCentered = align === "center";
  const isLarge = size === "lg";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-[45rem] text-center" : "max-w-[44rem]"} ${className}`}
    >
      <p
        className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] ${
          isCentered ? "justify-center" : ""
        } ${isDark ? "text-[#10B981]" : "text-[#059669]"}`}
      >
        <span
          aria-hidden="true"
          className={`h-px w-8 ${isDark ? "bg-[#10B981]/45" : "bg-[#059669]/45"}`}
        />
        {eyebrow}
        {isCentered ? (
          <span
            aria-hidden="true"
            className={`h-px w-8 ${isDark ? "bg-[#10B981]/45" : "bg-[#059669]/45"}`}
          />
        ) : null}
      </p>

      <Heading
        id={id}
        className={`mt-4 text-balance font-bold leading-[1.08] tracking-[-0.045em] ${
          isLarge
            ? "text-[1.9rem] sm:text-[2.35rem] lg:text-[2.7rem]"
            : "text-[1.5rem] sm:text-[1.75rem]"
        } ${isDark ? "text-white" : "text-[#101A18]"}`}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={`mt-5 text-pretty text-[14.5px] leading-[1.7] sm:text-[15px] ${
            isCentered ? "mx-auto max-w-[39rem]" : "max-w-[39rem]"
          } ${isDark ? "text-white/65" : "text-[#475569]"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
