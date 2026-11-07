const PROCESS_ITEMS = [
  { label: "Subdomain Discovery", icon: "subdomains" },
  { label: "Asset Discovery", icon: "assets" },
  { label: "SSL/TLS Checks", icon: "certificate" },
  { label: "DNS Analysis", icon: "dns" },
  { label: "Security Headers", icon: "headers" },
  { label: "Email Security", icon: "email" },
];

function ProcessIcon({ name }) {
  const commonProps = {
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-[18px] w-[18px] shrink-0",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "subdomains") {
    return (
      <svg {...commonProps}>
        <circle cx="6" cy="6" r="2.25" />
        <circle cx="18" cy="6" r="2.25" />
        <circle cx="12" cy="18" r="2.25" />
        <path d="M8.2 6h7.6M7.1 8l3.7 7.8M16.9 8l-3.7 7.8" />
      </svg>
    );
  }

  if (name === "assets") {
    return (
      <svg {...commonProps}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4M11 8v6M8 11h6" />
      </svg>
    );
  }

  if (name === "certificate") {
    return (
      <svg {...commonProps}>
        <rect x="5" y="9.5" width="14" height="9.5" rx="2.25" />
        <path d="M8.2 9.5V8a3.8 3.8 0 0 1 7.6 0v1.5M12 13.2v2.2" />
      </svg>
    );
  }

  if (name === "dns") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4.5 9.5h15M4.5 14.5h15M12 4c2.1 2.3 3.2 5 3.2 8s-1.1 5.7-3.2 8c-2.1-2.3-3.2-5-3.2-8S9.9 6.3 12 4Z" />
      </svg>
    );
  }

  if (name === "headers") {
    return (
      <svg {...commonProps}>
        <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 5l-3 14" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5.5 8 6.5 5 6.5-5" />
    </svg>
  );
}

export default function ProcessMarquee() {
  return (
    <section
      aria-labelledby="process-marquee-heading"
      className="home-feature-strip relative z-10 border-y border-border bg-white font-sans text-charcoal shadow-sm"
    >
      <h2 id="process-marquee-heading" className="sr-only">
        Security checks and asset discovery in the Securelyze process
      </h2>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          role="region"
          aria-labelledby="process-marquee-heading"
          tabIndex={0}
          className="overflow-x-auto overscroll-x-contain scroll-smooth rounded-sm [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring motion-reduce:scroll-auto"
        >
          <ul className="flex w-max min-w-full items-center py-5">
            {PROCESS_ITEMS.map((item) => (
              <li
                key={item.label}
                className="flex flex-1 shrink-0 items-center justify-center gap-2.5 whitespace-nowrap border-r border-border px-5 first:pl-0 last:border-r-0 last:pr-0 lg:px-3 xl:px-6"
              >
                <span aria-hidden="true" className="shrink-0 text-emerald-hover">
                  <ProcessIcon name={item.icon} />
                </span>
                <span className="text-[12px] font-medium leading-5 tracking-[-0.01em] sm:text-[13px] lg:text-[12px] xl:text-[13px]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
