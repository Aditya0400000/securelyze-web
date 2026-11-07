import HomeSectionBadge from "@/components/home/HomeSectionBadge";

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
      <HomeSectionBadge>{eyebrow}</HomeSectionBadge>

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
