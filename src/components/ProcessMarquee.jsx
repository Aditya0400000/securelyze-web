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
    className: "h-[17px] w-[17px]",
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

function MarqueeGroup({ clone = false }) {
  return (
    <div
      aria-hidden={clone ? "true" : undefined}
      className={`process-marquee__group ${clone ? "process-marquee__clone" : ""}`.trim()}
    >
      {PROCESS_ITEMS.map((item) => (
        <div key={item.label} className="process-marquee__item">
          <span className="process-marquee__icon">
            <ProcessIcon name={item.icon} />
          </span>
          <span className="process-marquee__label">{item.label}</span>
          <span aria-hidden="true" className="process-marquee__separator" />
        </div>
      ))}
    </div>
  );
}

export default function ProcessMarquee() {
  return (
    <section
      aria-labelledby="process-marquee-heading"
      className="process-marquee relative overflow-hidden border-y border-white/10 bg-dark-green py-4 font-sans text-soft-green sm:py-5"
    >
      <h2 id="process-marquee-heading" className="sr-only">
        Security checks and asset discovery in the Securelyze process
      </h2>

      <div className="process-marquee__viewport relative overflow-hidden">
        <div className="process-marquee__track flex w-max items-center">
          {Array.from({ length: 8 }, (_, index) => (
            <MarqueeGroup key={index} clone={index > 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
