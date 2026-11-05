"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

import { CONTACT_URL } from "@/lib/siteLinks";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    items: [
      {
        label: "Website Security Checker",
        href: "/platform#website-security-check",
      },
      {
        label: "Asset Discovery",
        href: "/platform#assets-discovery",
      },
      {
        label: "Platform overview",
        href: "/platform#platform-overview",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        label: "For Business Owners",
        href: "/solutions/website-owners",
      },
      {
        label: "For Developers",
        href: "/solutions/developers",
      },
      {
        label: "For Small Businesses",
        href: "/solutions/small-businesses",
      },
      {
        label: "For Security Teams",
        href: "/solutions/security-teams",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        label: "About Securelyze",
        href: "/about",
      },
      {
        label: "Our Mission",
        href: "/about#mission",
      },
      {
        label: "Contact Us",
        href: CONTACT_URL,
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        label: "Documentation",
        href: "https://docs.securelyze.in/",
      },
      {
        label: "Guides",
        href: "/resources/security-guides",
      },
      {
        label: "FAQs",
        href: "/#faq",
      },
    ],
  },
];

const FOOTER_LINK_CLASSES =
  "inline-flex min-h-9 items-center rounded-lg text-[15px] font-medium leading-[1.5] text-white/85 transition-colors duration-200 hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none";

const FOOTER_STATIC_CLASSES =
  "inline-flex min-h-9 items-center text-[15px] leading-[1.5] text-white/50";

function FooterItem({ item }) {
  if (item.href) {
    return (
      <Link href={item.href} className={FOOTER_LINK_CLASSES}>
        {item.label}
      </Link>
    );
  }

  return <span className={FOOTER_STATIC_CLASSES}>{item.label}</span>;
}

function FooterCodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const characters = "01<>{}/=;:SPFDKIMTLSDNS443HSTS0x";
    const styles = window.getComputedStyle(canvas);
    const color = styles.getPropertyValue("--footer-rain-color").trim();
    const fade = styles.getPropertyValue("--footer-rain-fade").trim();
    const columnWidth = 18;
    let width = 0;
    let height = 0;
    let drops = [];
    let frameId = 0;
    let lastFrame = 0;
    let inView = false;

    function draw() {
      // Fade the glyphs on transparency, preserving the existing footer background.
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = fade;
      context.fillRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";
      context.fillStyle = color;

      drops.forEach((drop, index) => {
        const character = characters[Math.floor(Math.random() * characters.length)];
        context.fillText(character, index * columnWidth, drop * columnWidth);
        drops[index] = drop * columnWidth > height && Math.random() > 0.97
          ? 0
          : drop + 0.55;
      });
    }

    function animate(timestamp) {
      // Match the reference's gentle 70ms cadence without painting every frame.
      if (timestamp - lastFrame >= 70) {
        draw();
        lastFrame = timestamp;
      }
      frameId = window.requestAnimationFrame(animate);
    }

    function updatePlayback() {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      lastFrame = 0;

      if (motion.matches) {
        context.clearRect(0, 0, width, height);
        // Reduced motion retains a stationary version of the reference pattern.
        for (let index = 0; index < 40; index += 1) draw();
      } else if (inView && !document.hidden) {
        frameId = window.requestAnimationFrame(animate);
      }
    }

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.font = `${styles.fontSize} ${styles.fontFamily}`;
      drops = Array.from(
        { length: Math.ceil(width / columnWidth) },
        () => Math.random() * height / columnWidth,
      );
      draw();
      updatePlayback();
    }

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updatePlayback();
    });
    const resizeObserver = new ResizeObserver(resize);
    resize();
    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    motion.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      window.cancelAnimationFrame(frameId);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      motion.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full font-mono text-[13px] opacity-10"
    />
  );
}

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-labelledby="footer-brand"
      className="relative isolate overflow-hidden border-t border-white/10 bg-charcoal font-sans text-white"
    >
      <FooterCodeRain />
      {/* Subtle deep-green gradient and ambient glow near the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-dark-green/40 via-dark-green/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-44 w-3/4 -translate-x-1/2 rounded-full bg-dark-green/25 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[90rem] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12 lg:pb-12 lg:pt-24">
        <div className="grid gap-14 sm:gap-16 lg:grid-cols-[2fr_2.5fr] lg:gap-x-24 xl:gap-x-32">
          <div className="min-w-0">
            <Link
              id="footer-brand"
              href="/"
              className="inline-flex rounded-xl text-[3.5rem] font-bold leading-[0.9] tracking-[-0.06em] text-white transition-colors duration-200 hover:text-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:text-[4.5rem] lg:text-[4rem] xl:text-[5.25rem] 2xl:text-[6rem]"
            >
              Securelyze
            </Link>

            <p className="mt-6 max-w-[26rem] text-pretty text-[15px] leading-[1.75] text-white/70 sm:mt-7 sm:text-base">
              Making website security easier to understand through clear
              insights and practical security checks.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0">
            <div className="grid grid-cols-1 gap-x-3 gap-y-10 min-[390px]:grid-cols-[1.1fr_0.9fr] sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:gap-x-12 lg:gap-y-16 xl:gap-x-16 xl:gap-y-20">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title} className="min-w-0">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    {column.title}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {column.items.map((item) => (
                      <li key={item.label}>
                        <FooterItem item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 sm:mt-16 sm:pt-7 lg:mt-20">
          <p className="text-[12px] leading-[1.6] text-white/50">
            © {currentYear} Securelyze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
