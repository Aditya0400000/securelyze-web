"use client";

import { useCallback } from "react";

const ANCHOR_SCROLL_OFFSET = 128;

export default function SmoothAnchor({
  href,
  children,
  onClick,
  ...props
}) {
  const handleClick = useCallback(
    (event) => {
      if (typeof href !== "string" || !href.startsWith("#")) return;

      onClick?.(event);
      if (event.defaultPrevented) return;

      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;

      event.preventDefault();

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const top = Math.max(
        0,
        target.getBoundingClientRect().top +
          window.scrollY -
          ANCHOR_SCROLL_OFFSET,
      );

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      window.history.pushState(null, "", href);
    },
    [href, onClick],
  );

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
