"use client";

import { useEffect } from "react";

const TOP_THRESHOLD = 100;
const DIRECTION_THRESHOLD = 12;

export default function useNavbarVisibility(headerRef, enabled) {
  useEffect(() => {
    const header = headerRef.current;
    if (!enabled || !header) return undefined;

    let previousY = Math.max(0, window.scrollY);
    let direction = 0;
    let distance = 0;
    let hidden = false;
    let frame = 0;

    const setHidden = (nextHidden) => {
      if (hidden === nextHidden) return;
      hidden = nextHidden;
      header.dataset.scrollHidden = String(hidden);
    };

    const reveal = () => {
      direction = 0;
      distance = 0;
      setHidden(false);
    };

    const update = () => {
      frame = 0;
      // Clamp touch overscroll so bouncing at either edge is not a direction change.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const y = Math.min(maxY, Math.max(0, window.scrollY));
      const delta = y - previousY;
      previousY = y;

      if (
        y <= TOP_THRESHOLD ||
        header.dataset.navigationOpen === "true" ||
        header.contains(document.activeElement)
      ) {
        reveal();
        return;
      }

      const nextDirection = Math.sign(delta);
      if (!nextDirection) return;
      if (nextDirection !== direction) {
        direction = nextDirection;
        distance = 0;
      }
      distance += Math.abs(delta);

      if (distance >= DIRECTION_THRESHOLD) {
        setHidden(direction > 0);
        distance = 0;
      }
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    // Reveal before a keyboard user interacts with a link in the hidden header.
    header.addEventListener("focusin", reveal);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      header.removeEventListener("focusin", reveal);
      if (frame) window.cancelAnimationFrame(frame);
      delete header.dataset.scrollHidden;
    };
  }, [enabled, headerRef]);
}
