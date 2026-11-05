import Link from "next/link";

import { CONTACT_URL } from "@/lib/siteLinks";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
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
];

const FOOTER_LINK_CLASSES =
  "inline-flex min-h-11 items-center rounded-lg font-sans text-[15px] font-medium leading-[1.5] tracking-normal text-white/70 transition-colors duration-200 hover:text-emerald-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:min-h-10";

const FOOTER_STATIC_CLASSES =
  "inline-flex min-h-11 items-center font-sans text-[15px] font-medium leading-[1.5] tracking-normal text-white/50 sm:min-h-10";

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

function FooterMountains() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 240"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none relative block h-28 w-full text-emerald sm:h-36 lg:h-44"
    >
      <g className="text-dark-green">
        <path
          d="M0 176 L120 136 L240 164 L360 108 L480 152 L600 124 L720 168 L840 116 L960 156 L1080 128 L1200 170 L1320 120 L1440 158 L1440 240 L0 240 Z"
          fill="currentColor"
          fillOpacity="0.55"
        />
      </g>

      <g fill="currentColor">
        <path
          d="M0 202 L96 174 L192 196 L288 150 L384 190 L480 160 L576 200 L672 146 L768 192 L864 158 L960 202 L1056 164 L1152 196 L1248 152 L1344 194 L1440 174 L1440 240 L0 240 Z"
          fillOpacity="0.035"
        />
        <path
          d="M0 226 L120 198 L240 218 L360 180 L480 216 L600 188 L720 222 L840 182 L960 218 L1080 190 L1200 224 L1320 186 L1440 212 L1440 240 L0 240 Z"
          fillOpacity="0.055"
        />
      </g>

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M0 176 L120 136 L240 164 L360 108 L480 152 L600 124 L720 168 L840 116 L960 156 L1080 128 L1200 170 L1320 120 L1440 158"
          strokeOpacity="0.42"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 202 L96 174 L192 196 L288 150 L384 190 L480 160 L576 200 L672 146 L768 192 L864 158 L960 202 L1056 164 L1152 196 L1248 152 L1344 194 L1440 174"
          strokeOpacity="0.3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 226 L120 198 L240 218 L360 180 L480 216 L600 188 L720 222 L840 182 L960 218 L1080 190 L1200 224 L1320 186 L1440 212"
          strokeOpacity="0.24"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 214 L120 190 L240 208 L360 168 L480 204 L600 178 L720 212 L840 172 L960 208 L1080 180 L1200 214 L1320 176 L1440 204"
          strokeOpacity="0.12"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0 234 L120 218 L240 230 L360 204 L480 228 L600 210 L720 232 L840 206 L960 230 L1080 212 L1200 232 L1320 208 L1440 226"
          strokeOpacity="0.1"
          vectorEffect="non-scaling-stroke"
        />
      </g>

      <g
        className="text-emerald-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M360 108 L480 152 L600 124 L720 168"
          strokeOpacity="0.34"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M840 116 L960 156 L1080 128 L1200 170"
          strokeOpacity="0.24"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-labelledby="footer-brand"
      className="relative isolate overflow-hidden border-t border-emerald/15 bg-charcoal font-sans text-white"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] lg:gap-14 xl:gap-20">
          <div className="min-w-0">
            <Link
              id="footer-brand"
              href="/"
              className="inline-flex rounded-xl font-sans text-[2.25rem] font-bold leading-none tracking-[-0.055em] text-white transition-colors duration-200 hover:text-emerald-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal motion-reduce:transition-none sm:text-[2.5rem]"
            >
              Securelyze
            </Link>

            <p className="mt-5 max-w-[24rem] text-pretty text-[14.5px] leading-[1.75] text-white/65 sm:text-[15px]">
              Making website security easier to understand through clear
              insights and practical security checks.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="min-w-0 lg:border-l lg:border-emerald/10 lg:pl-10 xl:pl-14"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-y-12 xl:grid-cols-[1.3fr_1fr_1fr_1fr] xl:gap-x-10">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title} className="min-w-0">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {column.title}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-px w-7 bg-emerald/60"
                  />
                  <ul className="mt-5 space-y-2.5">
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
      </div>

      <div className="mt-14 border-t border-emerald/15 sm:mt-16 lg:mt-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-7 lg:px-8">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-light/80">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-emerald"
            />
            Security for Everyone
          </p>
          <p className="text-[12px] leading-[1.6] text-white/50">
            © {currentYear} Securelyze. All rights reserved.
          </p>
        </div>
      </div>

      <FooterMountains />
    </footer>
  );
}
