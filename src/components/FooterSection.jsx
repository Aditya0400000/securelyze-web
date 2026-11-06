import Link from "next/link";

import FooterNightCity from "./FooterNightCity";

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
        label: "For Website Owners",
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

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      aria-labelledby="footer-brand"
      className="relative isolate overflow-hidden border-t border-emerald/15 bg-charcoal font-sans text-white"
    >
      <div className="relative isolate overflow-hidden pb-14 sm:pb-16 lg:pb-20">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
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
                Securelyze helps you explore internet-facing assets, review
                security configurations, and understand security-related findings
                across your digital infrastructure.
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

        <FooterNightCity />
      </div>

      <div className="relative z-10 border-t border-emerald/15 bg-charcoal">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 sm:py-7 lg:px-8">
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
    </footer>
  );
}
