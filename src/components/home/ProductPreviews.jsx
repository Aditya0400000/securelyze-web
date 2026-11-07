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
  { label: "Security Headers", icon: CodeIcon, status: "3 missing", tone: "warning" },
  { label: "Email Security", icon: "mail", status: "Pass", tone: "pass" },
];

function PreviewFrame({ children }) {
  return (
    <figure className="flex min-h-72 w-full flex-1 flex-col rounded-xl border border-border bg-light p-3 sm:p-4">
      <figcaption className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-text-secondary">example.com</span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-2 py-1 text-[10px] font-medium text-text-muted">
          <span aria-hidden="true" className="size-1 rounded-full bg-emerald-hover" />
          Sample data
        </span>
      </figcaption>
      {children}
    </figure>
  );
}

function ResultBadge({ status, tone = "pass" }) {
  return (
    <span className={`shrink-0 rounded-md px-1.5 py-1 text-[10px] font-medium leading-3 ${tone === "warning" ? "bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]" : "bg-[var(--status-pass-bg)] text-[var(--status-pass-text)]"}`}>
      {status}
    </span>
  );
}

export function SecurityCheckPreview() {
  return (
    <PreviewFrame>
      <div className="grid flex-1 gap-3 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)]">
        <ul aria-label="Sample website security check results" className="flex flex-col justify-center divide-y divide-border-subtle rounded-xl border border-border bg-white px-3">
          {SECURITY_CHECKS.map(({ label, icon: Icon, status, tone }) => (
            <li key={label} className="flex min-h-12 items-center justify-between gap-2 py-2.5">
              <span className="flex min-w-0 items-center gap-2 text-[12px] font-medium leading-4 text-charcoal">
                <span className="shrink-0 text-emerald-hover">
                  {typeof Icon === "string" ? <ProductIcon name={Icon} className="size-4" /> : <Icon className="size-4" />}
                </span>
                {label}
              </span>
              <ResultBadge status={status} tone={tone} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 sm:flex-col sm:justify-center sm:text-center">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-light text-emerald-hover sm:size-12">
            <ProductIcon name="shield" className="size-6" />
          </span>
          <div>
            <p className="text-[12px] font-semibold leading-5 text-charcoal">Security report</p>
            <div className="mt-2 flex items-center gap-2 sm:justify-center">
              <span className="text-[11px] text-text-secondary">HTTPS</span>
              <ResultBadge status="Pass" />
            </div>
            <div aria-hidden="true" className="mt-4 hidden space-y-1.5 sm:block">
              <span className="block h-1 w-20 rounded-full bg-border" />
              <span className="block h-1 w-14 rounded-full bg-border-subtle" />
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

const DISCOVERY_NODES = [
  { label: "Subdomains", example: "www / api / dev", icon: GlobeIcon },
  { label: "IP addresses and hosts", example: "host found", icon: NetworkIcon },
  { label: "Ports and services", example: "443 open / 8080 open", icon: CodeIcon },
];

export function AssetDiscoveryPreview() {
  return (
    <PreviewFrame>
      <div className="grid flex-1 sm:grid-cols-[minmax(0,.8fr)_2rem_minmax(0,1.2fr)] sm:items-center">
        <div className="flex items-center justify-center gap-2 rounded-xl border border-emerald/15 bg-white px-3 py-3 sm:flex-col sm:gap-2.5 sm:py-4">
          <GlobeIcon className="size-5 shrink-0 text-emerald-hover" />
          <span className="whitespace-nowrap font-mono text-[11px] font-medium text-charcoal">example.com</span>
        </div>
        <svg aria-hidden="true" viewBox="0 0 32 216" preserveAspectRatio="none" fill="none" className="hidden h-[216px] w-full sm:block">
          <path d="M0 108H12V32H32M12 108H32M12 108V184H32" stroke="var(--border)" strokeWidth="1.5" />
          {[32, 108, 184].map(y => <circle key={y} cx="28" cy={y} r="2" fill="var(--emerald-hover)" fillOpacity=".65" />)}
        </svg>
        <ul aria-label="Sample assets related to example.com" className="product-discovery-nodes grid gap-3">
          {DISCOVERY_NODES.map(({ label, example, icon: Icon }) => (
            <li key={label} className="flex min-h-16 items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2">
              <span className="shrink-0 text-emerald-hover"><Icon className="size-4" /></span>
              <div className="min-w-0">
                <p className="text-[12px] font-medium leading-4 text-charcoal">{label}</p>
                <p className="mt-1 text-[10px] leading-4 text-text-muted">{example}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PreviewFrame>
  );
}
