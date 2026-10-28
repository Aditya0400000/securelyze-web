import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Services",
    items: [
      {
        label: "Website Security Checker",
        href: "/#security-checker",
      },
      {
        label: "Asset Discovery",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        label: "For Business Owners",
      },
      {
        label: "For Developers",
      },
      {
        label: "For Security Teams",
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
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        label: "Documentation",
      },
      {
        label: "FAQs",
        href: "/#faq",
      },
    ],
  },
];

const FOOTER_LINK_CLASSES =
  "inline-flex min-h-9 items-center text-[15px] font-medium leading-[1.5] text-[#172554] transition-colors duration-200 hover:text-[#2A7AB8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7AB8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F5F9] motion-reduce:transition-none";

const FOOTER_STATIC_CLASSES =
  "inline-flex min-h-9 items-center text-[15px] leading-[1.5] text-[#6B7F92]";

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
      className="bg-[linear-gradient(180deg,#F1F5F9_0%,#E2E8F0_30%,#CBD5E1_52%,#D6DFE8_70%,#E9EEF4_86%,#F8FAFC_100%)] font-sans"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 pb-8 pt-16 sm:px-8 sm:pb-10 sm:pt-20 lg:px-12 lg:pb-12 lg:pt-24">
        <div className="grid gap-14 sm:gap-16 lg:grid-cols-[2fr_2.5fr] lg:gap-x-24 xl:gap-x-32">
          <div className="min-w-0">
            <Link
              id="footer-brand"
              href="/"
              className="inline-flex text-[3.5rem] font-bold leading-[0.9] tracking-[-0.06em] text-[#071D34] transition-colors duration-200 hover:text-[#183B72] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A7AB8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFDFE] motion-reduce:transition-none sm:text-[4.5rem] lg:text-[4rem] xl:text-[5.25rem] 2xl:text-[6rem]"
            >
              Securelyze
            </Link>

            <p className="mt-6 max-w-[26rem] text-pretty text-[15px] leading-[1.75] text-[#526B7F] sm:mt-7 sm:text-base">
              Making website security easier to understand through clear
              insights and practical security checks.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0">
            <div className="grid grid-cols-1 gap-x-3 gap-y-10 min-[390px]:grid-cols-[1.1fr_0.9fr] sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:gap-x-12 lg:gap-y-16 xl:gap-x-16 xl:gap-y-20">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title} className="min-w-0">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2E526F]">
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

        <div className="mt-14 border-t border-[#D5E0E9] pt-6 sm:mt-16 sm:pt-7 lg:mt-20">
          <p className="text-[12px] leading-[1.6] text-[#6B7F92]">
            © {currentYear} Securelyze. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
