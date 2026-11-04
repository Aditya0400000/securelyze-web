import { CodeIcon, GlobeIcon, NetworkIcon } from "@/components/about/AboutIcons";

export function ProductIcon({ name, className = "" }) {
  const paths = {
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 4 6v6c0 4 4 7 8 9 4-2 8-5 8-9V6l-8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

const SECURITY_CHECKS = [
  { label: "SSL/TLS", icon: "lock", status: "Pass", tone: "pass" },
  { label: "DNS", icon: NetworkIcon, status: "Pass", tone: "pass" },
  { label: "Headers", icon: CodeIcon, status: "3 missing", tone: "warning" },
  { label: "Email", icon: "mail", status: "Pass", tone: "pass" },
  { label: "HTTPS", icon: GlobeIcon, status: "Pass", tone: "pass" },
];

export function SecurityCheckPreview() {
  return (
    <ul className="product-check-preview" aria-label="Example website security check results">
      {SECURITY_CHECKS.map(({ label, icon: Icon, status, tone }, index) => (
        <li key={label} className="product-check-row" style={{ "--product-check-index": index }}>
          <span className="product-check-row__label">
            {typeof Icon === "string" ? <ProductIcon name={Icon} /> : <Icon />}
            {label}
          </span>
          <span aria-hidden="true" className="product-check-row__bar"><span /></span>
          <span className={`product-check-status product-check-status--animated product-check-status--${tone}`}>
            {status}
          </span>
        </li>
      ))}
    </ul>
  );
}

const DISCOVERY_NODES = [
  { label: "www", x: 124, y: 20, width: 42, delay: 0 },
  { label: "api", x: 124, y: 70, width: 42, delay: 0.9 },
  { label: "dev", x: 124, y: 120, width: 42, delay: 1.8, warning: true },
  { label: "443 open", x: 214, y: 20, width: 76, delay: 2.6, endpoint: true },
  { label: "host found", x: 214, y: 70, width: 76, delay: 3.4, endpoint: true },
  { label: "8080 open", x: 214, y: 120, width: 76, delay: 4.2, endpoint: true, warning: true },
];

export function AssetDiscoveryPreview() {
  return (
    <svg viewBox="0 0 300 168" role="img" aria-label="Example asset discovery: example.com branches into www, api and dev subdomains, with an open port 443, a discovered host and an open port 8080." className="block h-auto w-full rounded-xl font-sans">
      <title>A domain branching into subdomains, hosts and open ports</title>
      <rect width="300" height="168" rx="14" fill="var(--charcoal)" />
      <g fill="none" stroke="var(--emerald-light)" strokeOpacity="0.55" strokeDasharray="4 5">
        {["M82 84 C104 84 104 34 124 34", "M82 84 C104 84 104 84 124 84", "M82 84 C104 84 104 134 124 134", "M166 34 H214", "M166 84 H214", "M166 134 H214"].map((path) => (
          <path key={path} className="product-map__path" d={path} />
        ))}
      </g>
      <rect x="12" y="70" width="70" height="28" rx="14" fill="var(--emerald)" />
      <text x="47" y="88" textAnchor="middle" fontSize="12" fontWeight="500" textLength="60" lengthAdjust="spacingAndGlyphs" fill="var(--charcoal)">
        example.com
      </text>
      {DISCOVERY_NODES.map(({ label, x, y, width, delay, endpoint, warning }) => (
        <g key={label} className="product-map__node" style={{ animationDelay: `${delay}s` }}>
          <rect x={x} y={y} width={width} height="28" rx="14" fill={endpoint ? "var(--charcoal)" : "var(--dark-green)"} stroke={warning ? "var(--office-amber)" : "var(--emerald-light)"} strokeOpacity={endpoint && !warning ? 0.6 : 1} />
          <text x={x + width / 2} y={y + 18} textAnchor="middle" fontSize="12" fill="var(--soft-green)">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
