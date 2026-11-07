import { ProductIcon } from "./ProductPreviews";

function PreviewWindow({ children }) {
  return (
    <div className="audience-preview flex h-40 min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-light">
      <div className="flex h-6 shrink-0 items-center gap-1 border-b border-border bg-white px-2.5">
        {[0, 1, 2].map(dot => <span key={dot} className="size-1 rounded-full bg-text-muted/30" />)}
        <span className="ml-auto text-[8px] font-medium text-text-muted">Sample data</span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col justify-center p-2.5">{children}</div>
    </div>
  );
}

function WebsiteOverview() {
  return (
    <div className="rounded-lg border border-border bg-white p-2.5 shadow-sm">
      <div className="mb-2.5 flex items-center gap-2">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-soft-green/40 text-emerald-hover"><ProductIcon name="shield" className="size-4" /></span>
        <span className="font-mono text-[10px] font-medium text-charcoal">example.com</span>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
        {["SSL/TLS", "DNS", "Headers", "Email"].map(label => <span key={label} className="inline-flex items-center gap-1.5 text-[9px] font-medium text-text-secondary"><span className="size-1 rounded-full bg-emerald" />{label}</span>)}
      </div>
    </div>
  );
}

function ConfigurationPreview() {
  return (
    <div className="rounded-lg border border-border bg-white p-2.5 shadow-sm">
      <p className="mb-2 border-b border-border-subtle pb-1.5 font-mono text-[9px] text-text-muted">response.headers</p>
      <div className="space-y-1 font-mono text-[9px] leading-3.5">
        <p className="text-emerald-hover">Strict-Transport-Security</p>
        <p className="text-text-secondary">max-age=31536000</p>
        <p className="text-emerald-hover">Content-Security-Policy</p>
        <p className="text-text-secondary">default-src &apos;self&apos;</p>
      </div>
    </div>
  );
}

function ConnectedAssets() {
  return (
    <svg viewBox="0 0 240 104" className="mx-auto block h-auto w-full max-w-60" fill="none">
      <path d="M120 34V54M40 68V54H200V68M120 54V68" stroke="var(--border)" strokeWidth="1.5" />
      <rect x="64" y="4" width="112" height="30" rx="9" fill="var(--white)" stroke="var(--emerald)" strokeOpacity=".25" />
      <text x="120" y="23" textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" fill="var(--dark-green)">example.com</text>
      {[{ x: 8, label: "www" }, { x: 88, label: "api" }, { x: 168, label: "hosts" }].map(({ x, label }) => (
        <g key={label}>
          <circle cx={x + 32} cy="58" r="2" fill="var(--emerald-hover)" />
          <rect x={x} y="68" width="64" height="26" rx="8" fill="var(--white)" stroke="var(--border)" />
          <text x={x + 32} y="85" textAnchor="middle" fontSize="11" fill="var(--text-secondary)">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function FindingsPreview() {
  return (
    <div className="rounded-lg border border-border bg-white px-2.5 py-1 shadow-sm">
      {[{ label: "SSL/TLS", status: "Pass" }, { label: "DNS", status: "Pass" }, { label: "Headers", status: "3 missing", warning: true }].map(row => (
        <div key={row.label} className="flex items-center justify-between gap-2 border-b border-border-subtle py-2 last:border-b-0">
          <span className="text-[10px] font-medium text-charcoal">{row.label}</span>
          <span className={`rounded-md px-1.5 py-1 text-[8px] font-medium leading-none ${row.warning ? "bg-[var(--status-warning-bg)] text-[var(--status-warning-text)]" : "bg-[var(--status-pass-bg)] text-[var(--status-pass-text)]"}`}>{row.status}</span>
        </div>
      ))}
    </div>
  );
}

const PREVIEWS = { world: WebsiteOverview, code: ConfigurationPreview, "building-store": ConnectedAssets, "shield-lock": FindingsPreview };

export default function AudiencePreview({ type }) {
  const Preview = PREVIEWS[type];
  return <div aria-hidden="true"><PreviewWindow><Preview /></PreviewWindow></div>;
}
