"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const HOMEPAGE_LINKS = {
  platform: "/#platform",
  checker: "/#security-checker",
  assets: "/#assets-discovery",
  docs: "/#docs",
  mission: "/about#mission",
  pricing: "/pricing",
  pricingIncluded: "/pricing#included",
  pricingFaq: "/pricing#faq",
};

const NAV_ITEMS = [
  {
    id: "platforms",
    label: "Platforms",
    summary:
      "A connected view of website exposure, discovered assets, and the next steps that matter.",
    icon: "platforms",
    align: "left",
    width: "w-[38rem]",
    groups: [
      {
        title: "Core platform",
        links: [
          {
            label: "Website Security Checker",
            description: "SSL/TLS, DNS, and security-header checks.",
            href: HOMEPAGE_LINKS.checker,
            icon: "security",
          },
          {
            label: "Asset Discovery",
            description: "Domains, subdomains, IPs, and exposed assets.",
            href: HOMEPAGE_LINKS.assets,
            icon: "assets",
          },
          {
            label: "Security Overview",
            description: "Findings and recommendations in one summary.",
            href: HOMEPAGE_LINKS.platform,
            icon: "overview",
          },
        ],
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    summary:
      "Security clarity shaped for the way your team works and the risks you manage.",
    icon: "solutions",
    align: "center",
    width: "w-[38rem]",
    linkColumns: "grid-cols-2",
    groups: [
      {
        title: "Built for your team",
        links: [
          {
            label: "Website Owners",
            description: "See exposure clearly before it reaches customers.",
            href: HOMEPAGE_LINKS.platform,
          },
          {
            label: "Developers",
            description: "Keep security checks close to your delivery workflow.",
            href: HOMEPAGE_LINKS.platform,
          },
          {
            label: "Small Businesses",
            description: "Build a practical starting point without a large team.",
            href: HOMEPAGE_LINKS.platform,
          },
          {
            label: "Security Teams",
            description: "Keep assets, checks, and findings organized.",
            href: HOMEPAGE_LINKS.platform,
          },
        ],
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    summary:
      "One free plan with every core Securelyze tool included.",
    icon: "pricing",
    align: "center",
    width: "w-[22rem]",
    groups: [
      {
        title: "Plan & questions",
        links: [
          {
            label: "Free Plan",
            description: "Start with the core checks at no cost.",
            href: HOMEPAGE_LINKS.pricing,
          },
          {
            label: "What's Included",
            description: "Review the core security and discovery tools in one place.",
            href: HOMEPAGE_LINKS.pricingIncluded,
          },
          {
            label: "Frequently Asked Questions",
            description: "Answers about access, coverage, and plans.",
            href: HOMEPAGE_LINKS.pricingFaq,
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    summary:
      "Practical guidance, product context, and security ideas in one place.",
    icon: "resources",
    align: "center",
    width: "w-[50rem]",
    groupColumns: true,
    groups: [
      {
        title: "Learn",
        icon: "learn",
        links: [
          {
            label: "Security Guides",
            description: "Practical guidance for common security work.",
            href: HOMEPAGE_LINKS.docs,
          },
          {
            label: "Beginner's Security Basics",
            description: "Plain-language explanations of core concepts.",
            href: HOMEPAGE_LINKS.docs,
          },
          {
            label: "Best Practices",
            description: "Habits that reduce avoidable exposure.",
            href: HOMEPAGE_LINKS.docs,
          },
        ],
      },
      {
        title: "Read",
        icon: "read",
        links: [
          {
            label: "Securelyze Blog",
            description: "Product notes and perspectives from the team.",
            href: HOMEPAGE_LINKS.platform,
          },
          {
            label: "Security Insights",
            description: "Short reads on relevant security topics.",
            href: HOMEPAGE_LINKS.platform,
          },
          {
            label: "Case Studies",
            description: "How teams put visibility into practice.",
            href: HOMEPAGE_LINKS.platform,
          },
        ],
      },
      {
        title: "Explore",
        icon: "explore",
        links: [
          {
            label: "FAQs",
            description: "Quick answers to common Securelyze questions.",
            href: HOMEPAGE_LINKS.platform,
          },
          {
            label: "Tutorials",
            description: "Guided walkthroughs for checks and workflows.",
            href: HOMEPAGE_LINKS.docs,
          },
          {
            label: "Product Updates",
            description: "Notable changes and improvements.",
            href: HOMEPAGE_LINKS.platform,
          },
        ],
      },
    ],
  },
  {
    id: "docs",
    label: "Docs",
    summary:
      "Setup guidance, product walkthroughs, and technical references in one place.",
    icon: "docs",
    align: "right",
    width: "w-[38rem]",
    groupColumns: 2,
    scrollable: false,
    groups: [
      {
        title: "Start here",
        icon: "learn",
        links: [
          {
            label: "Getting Started",
            description: "Learn the basics and find the right starting point.",
            href: HOMEPAGE_LINKS.docs,
          },
        ],
      },
      {
        title: "Guides & reference",
        links: [
          {
            label: "Security Checker Guide",
            description: "Understand checks, signals, and findings.",
            href: HOMEPAGE_LINKS.docs,
          },
          {
            label: "Asset Discovery Guide",
            description: "Understand domains, assets, and exposure.",
            href: HOMEPAGE_LINKS.docs,
          },
          {
            label: "API Reference",
            description: "Reference material for integrations and automation.",
            href: HOMEPAGE_LINKS.docs,
          },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "About",
    summary:
      "The people, purpose, and principles behind the Securelyze platform.",
    icon: "about",
    align: "right",
    width: "w-[22rem]",
    groups: [
      {
        title: "Company",
        links: [
          {
            label: "About Securelyze",
            description: "Who we are and what we are building.",
            href: "/about",
          },
          {
            label: "Our Mission",
            description: "Make security visibility clearer and more actionable.",
            href: HOMEPAGE_LINKS.mission,
          },
          {
            label: "Contact Us",
            description: "Reach the team with questions or feedback.",
            href: HOMEPAGE_LINKS.platform,
          },
        ],
      },
    ],
  },
];

const ALIGNMENT_CLASSES = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
};

const MENU_ICON_CONTENT = {
  platforms: (
    <>
      <path d="m12 3.8 8 4.2-8 4.2-8-4.2 8-4.2Z" />
      <path d="m4 12 8 4.2 8-4.2M4 16.1l8 4.1 8-4.1" />
    </>
  ),
  solutions: (
    <>
      <circle cx="9" cy="8" r="2.5" />
      <path d="M4.5 19a4.5 4.5 0 0 1 9 0M15.2 5.7a2.4 2.4 0 0 1 0 4.6M16.8 14.7a4.3 4.3 0 0 1 2.7 4.3" />
    </>
  ),
  pricing: (
    <>
      <path d="M4.5 5.5v5.1c0 .5.2 1 .6 1.4l7.3 7.3a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8l-7.3-7.3a2 2 0 0 0-1.4-.6H5.5a1 1 0 0 0-1 1Z" />
      <circle cx="8.4" cy="8.4" r="1.2" />
    </>
  ),
  resources: (
    <>
      <path d="M12 6.4C10.2 5.1 8.1 4.4 4.5 4.4v13.1c3.6 0 5.7.7 7.5 2 1.8-1.3 3.9-2 7.5-2V4.4c-3.6 0-5.7.7-7.5 2Z" />
      <path d="M12 6.4v13.1" />
    </>
  ),
  security: (
    <>
      <path d="M12 3.5 5.5 6v5.1c0 4.05 2.72 7.65 6.5 8.9 3.78-1.25 6.5-4.85 6.5-8.9V6L12 3.5Z" />
      <path d="m9.25 11.8 1.85 1.85 3.75-4.1" />
    </>
  ),
  assets: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4M8.5 11h5M11 8.5v5" />
    </>
  ),
  docs: (
    <>
      <path d="M5.5 4.5H15a2.5 2.5 0 0 1 2.5 2.5v12.5h-9A3 3 0 0 1 5.5 16.5v-12Z" />
      <path d="M5.5 16.5a3 3 0 0 1 3-3h9M9 8.5h4" />
    </>
  ),
  about: (
    <>
      <path d="M5 20V6.5L12 3l7 3.5V20" />
      <path d="M3.5 20h17M9 20v-4.2h6V20M9.2 9h.01M12 9h.01M14.8 9h.01M9.2 12.4h.01M12 12.4h.01M14.8 12.4h.01" />
    </>
  ),
  overview: (
    <path d="M4.5 19.5V14m5 5.5V9.5m5 10V5.5m5 14V12" />
  ),
  learn: (
    <path d="M9.2 18h5.6M10 21h4M8.3 14.3a6 6 0 1 1 7.4 0c-.8.6-1.2 1.3-1.2 2.2H9.5c0-.9-.4-1.6-1.2-2.2Z" />
  ),
  read: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
      <path d="M8 9h5M8 12h8M8 15h6" />
    </>
  ),
  explore: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="m15 9-1.7 4.3L9 15l1.7-4.3L15 9Z" />
    </>
  ),
};

function getMenuLinks(menu) {
  return Array.from(menu?.querySelectorAll("a[href]") ?? []);
}

function MenuIcon({ type, className = "h-[18px] w-[18px]" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {MENU_ICON_CONTENT[type] ?? MENU_ICON_CONTENT.docs}
    </svg>
  );
}

function ChevronDown({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 8 4 4 4-4" />
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 10h11m-4.5-4.5 4.5 4.5-4.5 4.5" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 13.5 13.5 6.5M7.5 6.5h6v6" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_5px_16px_-9px_rgba(7,29,52,0.8)]">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-[19px] w-[19px]"
        stroke="#FFFFFF"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.5 5.5 6v5.1c0 4.05 2.72 7.65 6.5 8.9 3.78-1.25 6.5-4.85 6.5-8.9V6L12 3.5Z" />
        <path d="m9.2 11.8 1.9 1.9 3.8-4.2" stroke="#C6F36A" />
      </svg>
    </span>
  );
}

function Logo({ onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Securelyze home"
      className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
    >
      <BrandMark />
      <span className="text-[18px] font-semibold tracking-[-0.045em] text-[#071D34] sm:text-[19px]">
        Securelyze
      </span>
    </Link>
  );
}

function ExploreCta({ className = "", onClick }) {
  return (
    <Link
      href="/#platform"
      onClick={onClick}
      className={`group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#C6F36A] px-4 text-[13px] font-semibold tracking-[-0.005em] text-[#071D34] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_7px_20px_-14px_rgba(96,133,28,0.85)] transition-[transform,translate,background-color,box-shadow] duration-200 ease-out hover:bg-[#D2F77F] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_24px_-15px_rgba(96,133,28,0.9)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2138] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-px motion-reduce:transition-none ${className}`}
    >
      <span>Explore Full Platform</span>
      <span
        aria-hidden="true"
        className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0A2138] text-[#C6F36A] transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none"
      >
        <ArrowUpRight className="h-3 w-3" />
      </span>
    </Link>
  );
}

function DropdownLink({ link, onClick }) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className="group/link flex items-start gap-3 rounded-xl px-2.5 py-2.5 transition-colors duration-150 hover:bg-[#F5F9FC] focus-visible:bg-[#F5F9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none"
    >
      {link.icon ? (
        <span
          aria-hidden="true"
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E1EAF2] bg-[#FAFCFE] text-[#36536C] transition-colors duration-150 group-hover/link:border-[#D8E8C4] group-hover/link:bg-[#F5FAEA] group-hover/link:text-[#5E8425] group-focus-visible/link:border-[#D8E8C4] group-focus-visible/link:bg-[#F5FAEA] motion-reduce:transition-none"
        >
          <MenuIcon type={link.icon} className="h-4 w-4" />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#BAC8D5] transition-colors duration-150 group-hover/link:bg-[#7BA92E] group-focus-visible/link:bg-[#7BA92E] motion-reduce:transition-none"
        />
      )}

      <span className="min-w-0 flex-1">
        <span className="block text-[13.5px] font-semibold leading-5 tracking-[-0.01em] text-[#10283E]">
          {link.label}
        </span>
        <span className="mt-0.5 block text-[12px] leading-[1.55] text-[#607386]">
          {link.description}
        </span>
      </span>

      <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 -translate-x-0.5 text-[#8A9BAA] opacity-0 transition-[opacity,translate] duration-150 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:translate-x-0 group-focus-visible/link:opacity-100 motion-reduce:transition-none" />
    </Link>
  );
}

function DropdownGroup({ group, linkColumns = "grid-cols-1", onLinkClick, className = "" }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 px-3 pb-2 pt-1">
        {group.icon ? (
          <span aria-hidden="true" className="text-[#7C91A3]">
            <MenuIcon type={group.icon} className="h-3.5 w-3.5" />
          </span>
        ) : null}
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5F7284]">
          {group.title}
        </p>
      </div>

      <div className={`grid ${linkColumns} gap-1`}>
        {group.links.map((link) => (
          <DropdownLink key={link.label} link={link} onClick={onLinkClick} />
        ))}
      </div>
    </div>
  );
}

function DropdownContent({ item, onLinkClick }) {
  return (
    <div className={`${item.scrollable === false ? "overflow-hidden " : "max-h-[calc(100dvh-10rem)] overflow-y-auto overscroll-contain "}rounded-[22px] border border-[#E1EAF2] bg-white shadow-[0_28px_80px_-40px_rgba(7,29,52,0.5),0_4px_14px_-8px_rgba(7,29,52,0.14)] ring-1 ring-[#0B2239]/[0.02]`}>
      <div className="flex items-start gap-3.5 rounded-t-[22px] border-b border-[#EDF2F7] bg-[linear-gradient(180deg,#FBFDFF_0%,#FFFFFF_100%)] px-5 py-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E1EAF2] bg-white text-[#1C3A54] shadow-[inset_0_1px_0_#FFFFFF]">
          <MenuIcon type={item.icon} />
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5F7284]">
            {item.label}
          </p>
          <p className="mt-1.5 max-w-[36rem] text-[12.5px] leading-[1.6] text-[#5F7284]">
            {item.summary}
          </p>
        </div>
      </div>

      {item.groupColumns ? (
        <div className={`grid ${item.groupColumns === 2 ? "grid-cols-2" : "grid-cols-3"} divide-x divide-[#EDF2F7] px-2 py-2`}>
          {item.groups.map((group) => (
            <DropdownGroup
              key={group.title}
              group={group}
              onLinkClick={onLinkClick}
              className="px-2 py-1.5"
            />
          ))}
        </div>
      ) : (
        <div className="divide-y divide-[#EDF2F7] px-2 py-1.5">
          {item.groups.map((group) => (
            <DropdownGroup
              key={group.title}
              group={group}
              linkColumns={item.linkColumns}
              onLinkClick={onLinkClick}
              className="py-2.5 first:pt-1.5 last:pb-1.5"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const headerRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const triggerRefs = useRef({});
  const menuRefs = useRef({});
  const hoverOpenedMenuRef = useRef(null);

  const closeNavigation = useCallback(() => {
    hoverOpenedMenuRef.current = null;
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");

    desktopQuery.addEventListener("change", closeNavigation);
    return () => {
      desktopQuery.removeEventListener("change", closeNavigation);
    };
  }, [closeNavigation]);

  useEffect(() => {
    if (!openMenu && !mobileOpen) return undefined;

    const handleOutsidePointer = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeNavigation();
      }
    };

    const handleEscape = (event) => {
      if (event.key !== "Escape") return;

      if (mobileOpen) {
        const restoreFocus = mobileMenuRef.current?.contains(
          document.activeElement,
        );
        closeNavigation();
        if (restoreFocus) {
          requestAnimationFrame(() => mobileToggleRef.current?.focus());
        }
        return;
      }

      if (openMenu) {
        const menuId = openMenu;
        const restoreFocus = menuRefs.current[menuId]?.contains(
          document.activeElement,
        );
        closeNavigation();
        if (restoreFocus) {
          requestAnimationFrame(() => triggerRefs.current[menuId]?.focus());
        }
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeNavigation, mobileOpen, openMenu]);

  const focusMenuItem = (menuId, position = "first") => {
    requestAnimationFrame(() => {
      const items = getMenuLinks(menuRefs.current[menuId]);
      if (!items.length) return;
      const target = position === "last" ? items[items.length - 1] : items[0];
      target.focus();
    });
  };

  const handleTriggerKeyDown = (event, menuId) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

    event.preventDefault();
    hoverOpenedMenuRef.current = null;
    setOpenMenu(menuId);
    focusMenuItem(menuId, event.key === "ArrowUp" ? "last" : "first");
  };

  const handleMenuKeyDown = (event, menuId) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

    const items = getMenuLinks(menuRefs.current[menuId]);
    if (!items.length) return;

    event.preventDefault();
    const currentIndex = items.indexOf(document.activeElement);
    let nextIndex;

    if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = items.length - 1;
    } else if (event.key === "ArrowDown") {
      nextIndex = (currentIndex + 1) % items.length;
    } else {
      nextIndex = (currentIndex - 1 + items.length) % items.length;
    }

    items[nextIndex].focus();
  };

  const handleMobileToggle = () => {
    hoverOpenedMenuRef.current = null;
    setOpenMenu(null);
    setMobileSection(null);
    setMobileOpen((isOpen) => !isOpen);
  };

  const handleDesktopTriggerClick = (menuId) => {
    if (openMenu === menuId && hoverOpenedMenuRef.current === menuId) {
      hoverOpenedMenuRef.current = null;
      return;
    }

    hoverOpenedMenuRef.current = null;
    setOpenMenu((current) => (current === menuId ? null : menuId));
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-[#DCE5EF] bg-white/95 font-sans shadow-[inset_0_1px_0_rgba(255,255,255,0.96),inset_0_-1px_0_rgba(17,48,78,0.035),0_16px_38px_-34px_rgba(7,27,48,0.55)] backdrop-blur-md"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(244,249,253,0.72)_0%,rgba(255,255,255,0)_46%,rgba(246,250,253,0.3)_100%)]"
      />

      <nav
        aria-label="Primary"
        className="relative z-10 mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 xl:h-[82px] xl:px-8"
      >
        <Logo onClick={closeNavigation} />

        <div className="hidden h-full items-center gap-0.5 xl:flex">
            {NAV_ITEMS.map((item) => {
              const isOpen = openMenu === item.id;

              return (
                <div
                  key={item.id}
                  className="relative flex h-full items-center"
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "mouse") return;
                    if (
                      openMenu &&
                      menuRefs.current[openMenu]?.contains(document.activeElement)
                    ) {
                      return;
                    }
                    if (openMenu === item.id) return;

                    hoverOpenedMenuRef.current = item.id;
                    setOpenMenu(item.id);
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType !== "mouse") return;
                    if (event.currentTarget.contains(document.activeElement)) return;
                    if (openMenu !== item.id) return;

                    hoverOpenedMenuRef.current = null;
                    setOpenMenu(null);
                  }}
                  onBlur={(event) => {
                    if (event.currentTarget.contains(event.relatedTarget)) return;
                    if (openMenu !== item.id) return;

                    hoverOpenedMenuRef.current = null;
                    setOpenMenu(null);
                  }}
                >
                  <button
                    ref={(node) => {
                      triggerRefs.current[item.id] = node;
                    }}
                    id={`nav-trigger-${item.id}`}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`desktop-menu-${item.id}`}
                    onClick={() => handleDesktopTriggerClick(item.id)}
                    onKeyDown={(event) => handleTriggerKeyDown(event, item.id)}
                    className={`group/nav relative flex h-11 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium tracking-[-0.01em] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none ${
                      isOpen
                        ? "bg-[#F5F8FB] text-[#071D34]"
                        : "text-[#2B4053] hover:bg-[#F8FAFC] hover:text-[#071D34]"
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-1 left-0 h-[1.5px] w-full origin-left rounded-full bg-[#86B435] transition-transform duration-300 ease-out motion-reduce:transition-none ${
                          isOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover/nav:scale-x-100 group-focus-visible/nav:scale-x-100"
                        }`}
                      />
                    </span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-180 text-[#071D34]" : "text-[#7B8C9D]"
                      }`}
                    />
                  </button>

                  <div
                    ref={(node) => {
                      menuRefs.current[item.id] = node;
                    }}
                    id={`desktop-menu-${item.id}`}
                    role="group"
                    aria-labelledby={`nav-trigger-${item.id}`}
                    aria-hidden={!isOpen}
                    inert={isOpen ? undefined : true}
                    onKeyDown={(event) => handleMenuKeyDown(event, item.id)}
                    className={`absolute top-full z-40 max-w-[calc(100vw-2rem)] pt-3 transition-[opacity,translate] duration-200 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none ${item.width} ${
                      ALIGNMENT_CLASSES[item.align]
                    } ${
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <DropdownContent item={item} onLinkClick={closeNavigation} />
                  </div>
                </div>
              );
            })}
          </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <div className="hidden sm:block">
            <ExploreCta onClick={closeNavigation} />
          </div>

          <button
            ref={mobileToggleRef}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={handleMobileToggle}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-[#DFE8F0] bg-white text-[#0A2138] shadow-[inset_0_1px_0_#FFFFFF,0_2px_8px_-6px_rgba(7,27,48,0.5)] transition-colors duration-200 hover:border-[#CCD9E5] hover:bg-[#F7FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17344E] focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none xl:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-[3px] h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${
                  mobileOpen ? "translate-y-[4.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-[3px] left-0 h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${
                  mobileOpen ? "-translate-y-[4.25px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        inert={mobileOpen ? undefined : true}
        className={`relative z-10 grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none xl:hidden ${
          mobileOpen
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="max-h-[calc(100dvh-8.5rem)] overflow-y-auto overscroll-contain border-t border-[#E9EFF5] bg-white px-4 pb-6 pt-2 sm:px-6">
            <div className="mx-auto w-full max-w-7xl">
              <div className="divide-y divide-[#EEF3F7]">
                {NAV_ITEMS.map((item) => {
                  const isActive = mobileSection === item.id;

                  return (
                    <div key={item.id}>
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-controls={`mobile-menu-${item.id}`}
                        onClick={() => {
                          setMobileSection((current) =>
                            current === item.id ? null : item.id,
                          );
                        }}
                        className={`my-0.5 flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-3.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none ${
                          isActive
                            ? "bg-[#F4F8FB] text-[#071D34]"
                            : "text-[#22394D] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span
                            aria-hidden="true"
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-150 motion-reduce:transition-none ${
                              isActive
                                ? "border-[#DCE8C9] bg-white text-[#5E8425]"
                                : "border-[#E1EAF2] bg-[#FBFDFF] text-[#476176]"
                            }`}
                          >
                            <MenuIcon type={item.icon} className="h-4 w-4" />
                          </span>
                          <span className="truncate text-[14px] font-semibold tracking-[-0.005em]">
                            {item.label}
                          </span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-[#7E90A1] transition-transform duration-200 motion-reduce:transition-none ${
                            isActive ? "rotate-180 text-[#17344E]" : ""
                          }`}
                        />
                      </button>

                      <div
                        id={`mobile-menu-${item.id}`}
                        aria-hidden={!isActive}
                        inert={isActive ? undefined : true}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
                          isActive
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="pb-3 pl-1 pr-1">
                            <p className="px-3 pb-1 pt-1 text-[12px] leading-[1.6] text-[#607386]">
                              {item.summary}
                            </p>

                            <div className="ml-4 mt-1 border-l border-[#E3EBF2] pl-2.5">
                              {item.groups.map((group) => (
                                <div key={group.title} className="mt-2 first:mt-1">
                                  <div className="flex items-center gap-1.5 px-3 pb-1 pt-1">
                                    {group.icon ? (
                                      <span aria-hidden="true" className="text-[#7C91A3]">
                                        <MenuIcon
                                          type={group.icon}
                                          className="h-3.5 w-3.5"
                                        />
                                      </span>
                                    ) : null}
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5F7284]">
                                      {group.title}
                                    </p>
                                  </div>

                                  {group.links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      onClick={closeNavigation}
                                      className="group/mobile-link flex items-start gap-2.5 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-[#F6F9FC] focus-visible:bg-[#F6F9FC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none"
                                    >
                                      <span
                                        aria-hidden="true"
                                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#BAC8D5] transition-colors duration-150 group-hover/mobile-link:bg-[#7BA92E] group-focus-visible/mobile-link:bg-[#7BA92E] motion-reduce:transition-none"
                                      />
                                      <span className="min-w-0 flex-1">
                                        <span className="flex items-center gap-2 text-[13.5px] font-semibold leading-5 text-[#183044]">
                                          {link.label}
                                          <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-0.5 text-[#8A9BAA] opacity-0 transition-[opacity,translate] duration-150 group-hover/mobile-link:translate-x-0 group-hover/mobile-link:opacity-100 group-focus-visible/mobile-link:translate-x-0 group-focus-visible/mobile-link:opacity-100 motion-reduce:transition-none" />
                                        </span>
                                        <span className="mt-0.5 block text-[12px] leading-[1.55] text-[#607386]">
                                          {link.description}
                                        </span>
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="my-4 h-px bg-[#EBF1F6]" />

              <ExploreCta
                onClick={closeNavigation}
                className="w-full"
              />

              <p className="mt-3 text-center text-[11px] leading-5 text-[#617487]">
                Clear visibility. Confident security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

