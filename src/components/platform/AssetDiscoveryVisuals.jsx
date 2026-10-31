import {
  AssetsIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { LayersIcon, RecordIcon } from "../pricing/PricingIcons";

function AssetVisualShell({
  label,
  badge = "Illustrative",
  footer,
  srDescription,
  children,
}) {
  return (
    <figure className="mx-auto w-full min-w-0">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-green/80 p-4 shadow-[var(--shadow-card-dark)] sm:p-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-emerald/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-emerald/5 blur-3xl"
        />

        <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-white/60">
            {label}
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/10 px-2 py-1 text-[7.5px] font-semibold uppercase tracking-[0.12em] text-soft-green">
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-emerald"
            />
            {badge}
          </span>
        </div>

        <div className="relative mt-3">{children}</div>

        {footer ? (
          <p className="relative mt-3 border-t border-white/10 pt-3 text-[9px] leading-[1.6] text-white/60">
            {footer}
          </p>
        ) : null}
      </div>

      {srDescription ? (
        <figcaption className="sr-only">{srDescription}</figcaption>
      ) : null}
    </figure>
  );
}

function SamplePill({ children, tone = "emerald" }) {
  const tones = {
    emerald: "border-emerald/25 bg-emerald/10 text-soft-green",
    neutral: "border-white/10 bg-white/5 text-white/70",
    muted: "border-white/10 bg-white/5 text-white/55",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[7.5px] font-semibold uppercase tracking-[0.1em] ${tones[tone]}`}
    >
      <span
        aria-hidden="true"
        className={`h-1 w-1 rounded-full ${
          tone === "emerald" ? "bg-emerald" : "bg-white/35"
        }`}
      />
      {children}
    </span>
  );
}

function SampleRowHeader({ icon: Icon, title, badge }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-soft-green">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
          Sample domain
        </p>
        <p className="mt-0.5 text-[12.5px] font-semibold text-white">
          {title}
        </p>
      </div>
      <span className="ml-auto">
        <SamplePill>{badge}</SamplePill>
      </span>
    </div>
  );
}

const OVERVIEW_ASSETS = [
  {
    host: "www",
    detail: "CNAME · example.com",
    type: "Public host",
  },
  {
    host: "api",
    detail: "A · 203.0.113.20",
    type: "Public host",
  },
  {
    host: "cdn",
    detail: "CNAME · edge.example.net",
    type: "Public host",
  },
  {
    host: "mail",
    detail: "A · 203.0.113.40",
    type: "Mail host",
  },
];

export function AssetDiscoveryHeroVisual() {
  return (
    <AssetVisualShell
      label="Public footprint map"
      footer="Sample relationships only. No live discovery scan is run."
      srDescription="Illustrative asset map for example.com showing sample public hosts www, api, cdn, and mail."
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <AssetsIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Sample apex domain
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>Connected view</SamplePill>
          </span>
        </div>

        <div className="mt-3 ml-3 space-y-1.5 border-l border-emerald/25 pl-3">
          {OVERVIEW_ASSETS.map((asset) => (
            <div
              key={asset.host}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-mono text-[9.5px] text-white/90">
                  {asset.host}.example.com
                </span>
                <span className="mt-0.5 block truncate text-[8px] text-white/55">
                  {asset.detail}
                </span>
              </span>
              <span className="shrink-0 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-soft-green/80">
                {asset.type}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <SamplePill tone="neutral">1 domain</SamplePill>
          <SamplePill tone="neutral">4 hosts</SamplePill>
          <SamplePill tone="neutral">3 IPs</SamplePill>
          <SamplePill tone="neutral">2 services</SamplePill>
        </div>
      </div>
    </AssetVisualShell>
  );
}

const SUBDOMAIN_HOSTS = [
  { host: "www", record: "CNAME", state: "Public" },
  { host: "api", record: "A", state: "Public" },
  { host: "app", record: "CNAME", state: "Public" },
  { host: "cdn", record: "CNAME", state: "Public" },
  { host: "mail", record: "A", state: "Mail" },
];

export function SubdomainDiscoveryHeroVisual() {
  return (
    <AssetVisualShell
      label="Subdomain hierarchy"
      footer="Sample hostnames only. No live enumeration is run."
      srDescription="Illustrative subdomain tree for example.com showing sample hosts www, api, app, cdn, and mail."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <GlobeIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Parent domain
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>5 sample hosts</SamplePill>
          </span>
        </div>

        <div className="mt-3 ml-3 space-y-1.5 border-l border-emerald/25 pl-3">
          {SUBDOMAIN_HOSTS.map((host) => (
            <div
              key={host.host}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald"
              />
              <span className="min-w-0 flex-1 truncate font-mono text-[9.5px] text-white/90">
                {host.host}.example.com
              </span>
              <span className="w-12 shrink-0 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-emerald/80">
                {host.record}
              </span>
              <span className="shrink-0 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-white/55">
                {host.state}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AssetVisualShell>
  );
}

const DOMAIN_RELATIONSHIPS = [
  { name: "www", record: "CNAME", target: "example.com" },
  { name: "api", record: "A", target: "203.0.113.20" },
  { name: "mail", record: "MX", target: "mail.example.net" },
  { name: "example.net", record: "Related", target: "ns1.example.net" },
];

export function DomainDiscoveryHeroVisual() {
  return (
    <AssetVisualShell
      label="Domain relationship view"
      footer="Sample domains and DNS values only. No live lookup is run."
      srDescription="Illustrative domain relationships for example.com showing sample records and related names."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <RecordIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Sample apex domain
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>DNS context</SamplePill>
          </span>
        </div>

        <div className="mt-3 space-y-1.5">
          {DOMAIN_RELATIONSHIPS.map((item) => (
            <div
              key={item.name}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
            >
              <span className="min-w-0 flex-1 truncate font-mono text-[9.5px] text-white/90">
                {item.name}
              </span>
              <span className="w-12 shrink-0 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-emerald/80">
                {item.record}
              </span>
              <span className="min-w-0 truncate text-right font-mono text-[8.5px] text-white/60">
                {item.target}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2">
          <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-white/55">
            Nameservers
          </span>
          <span className="ml-auto truncate font-mono text-[8.5px] text-white/75">
            ns1.example.net · ns2.example.net
          </span>
        </div>
      </div>
    </AssetVisualShell>
  );
}

const HOST_ADDRESSES = [
  { host: "www", ipv4: "203.0.113.10", ipv6: "2001:db8::10" },
  { host: "api", ipv4: "203.0.113.20", ipv6: "2001:db8::20" },
  { host: "cdn", ipv4: "203.0.113.30", ipv6: "2001:db8::30" },
  { host: "mail", ipv4: "203.0.113.40", ipv6: "No sample IPv6" },
];

export function IpHostDiscoveryHeroVisual() {
  return (
    <AssetVisualShell
      label="Host-to-IP relationship"
      footer="Sample addresses only. No live host or IP lookup is run."
      srDescription="Illustrative host-to-IP map for example.com showing sample IPv4 and IPv6 addresses."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <LayersIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Sample host group
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>4 sample hosts</SamplePill>
          </span>
        </div>

        <div className="mt-3 space-y-1.5">
          {HOST_ADDRESSES.map((host) => (
            <div
              key={host.host}
              className="group grid gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-center"
            >
              <span className="truncate font-mono text-[9.5px] text-white/90">
                {host.host}.example.com
              </span>
              <div className="flex min-w-0 flex-wrap gap-1.5">
                <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[8px] text-white/75">
                  {host.ipv4}
                </span>
                <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[8px] text-white/55">
                  {host.ipv6}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald/20 bg-emerald/5 px-2.5 py-2">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-emerald"
          />
          <p className="text-[8.5px] leading-[1.5] text-white/70">
            www and the apex share the same sample address.
          </p>
        </div>
      </div>
    </AssetVisualShell>
  );
}

const PORT_SERVICES = [
  { port: "443", service: "HTTPS", state: "Public", tone: "emerald" },
  { port: "80", service: "HTTP", state: "Redirect", tone: "emerald" },
  { port: "22", service: "SSH", state: "Restricted", tone: "neutral" },
  { port: "8080", service: "HTTP-alt", state: "Not observed", tone: "muted" },
];

export function PortServiceDiscoveryHeroVisual() {
  return (
    <AssetVisualShell
      label="Port and service view"
      footer="Sample ports only. No live port scan is run."
      srDescription="Illustrative port and service snapshot for api.example.com showing sample ports 443, 80, 22, and 8080."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <CodeIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Sample public host
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              api.example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>4 sample ports</SamplePill>
          </span>
        </div>

        <div className="mt-3 space-y-1.5">
          {PORT_SERVICES.map((item) => (
            <div
              key={item.port}
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
            >
              <span className="flex h-6 w-11 shrink-0 items-center justify-center rounded-md border border-emerald/20 bg-emerald/10 font-mono text-[8.5px] font-semibold text-soft-green">
                {item.port}
              </span>
              <span className="min-w-0 flex-1 truncate font-mono text-[9.5px] text-white/90">
                {item.service}
              </span>
              <SamplePill tone={item.tone}>{item.state}</SamplePill>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between gap-3 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-white/60">
            <span>Sample service coverage</span>
            <span className="text-soft-green">3 observed</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[75%] rounded-full bg-emerald" />
          </div>
        </div>
      </div>
    </AssetVisualShell>
  );
}

const OVERVIEW_SAMPLE_ASSETS = [
  {
    name: "example.com",
    type: "Domain",
    address: "203.0.113.10",
    note: "Sample apex domain",
  },
  {
    name: "www.example.com",
    type: "Subdomain",
    address: "203.0.113.10",
    note: "Sample CNAME to apex",
  },
  {
    name: "api.example.com",
    type: "Subdomain",
    address: "203.0.113.20",
    note: "Sample A record",
  },
  {
    name: "cdn.example.com",
    type: "Subdomain",
    address: "203.0.113.30",
    note: "Sample CNAME to edge",
  },
  {
    name: "mail.example.com",
    type: "Host",
    address: "203.0.113.40",
    note: "Sample MX target",
  },
  {
    name: "api.example.com:443",
    type: "Service",
    address: "HTTPS",
    note: "Sample public service",
  },
];

export function AssetDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Illustrative asset inventory"
      badge="Sample data only"
      footer="Sample asset values only. No live discovery scan is run."
      srDescription="Illustrative asset inventory for example.com with sample domains, subdomains, hosts, and a service."
    >
      <SampleRowHeader
        icon={AssetsIcon}
        title="example.com"
        badge="6 sample assets"
      />

      <div
        role="group"
        aria-label="Illustrative asset inventory for example.com"
        className="mt-2 space-y-2"
      >
        {OVERVIEW_SAMPLE_ASSETS.map((asset) => (
          <div
            key={asset.name}
            className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 break-words font-mono text-[10px] leading-[1.5] text-white/90">
                {asset.name}
              </p>
              <span className="shrink-0 rounded-full border border-emerald/20 bg-emerald/10 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-soft-green">
                {asset.type}
              </span>
            </div>
            <p className="mt-1 break-words font-mono text-[9px] text-white/70">
              {asset.address}
            </p>
            <p className="mt-0.5 text-[9px] leading-[1.5] text-white/55">
              {asset.note}
            </p>
          </div>
        ))}
      </div>
    </AssetVisualShell>
  );
}

const SUBDOMAIN_SAMPLE_HOSTS = [
  {
    host: "www.example.com",
    record: "CNAME",
    target: "example.com",
    note: "Sample web alias",
  },
  {
    host: "api.example.com",
    record: "A",
    target: "203.0.113.20",
    note: "Sample API host",
  },
  {
    host: "app.example.com",
    record: "CNAME",
    target: "app.example.net",
    note: "Sample application host",
  },
  {
    host: "cdn.example.com",
    record: "CNAME",
    target: "edge.example.net",
    note: "Sample CDN edge",
  },
  {
    host: "mail.example.com",
    record: "A",
    target: "203.0.113.40",
    note: "Sample mail host",
  },
  {
    host: "staging.example.com",
    record: "CNAME",
    target: "staging.example.net",
    note: "No sample response",
  },
];

export function SubdomainDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Illustrative subdomain snapshot"
      badge="Sample data only"
      footer="Sample hostnames only. No live subdomain enumeration is run."
      srDescription="Illustrative subdomain list for example.com with sample hostnames, record types, and targets."
    >
      <SampleRowHeader
        icon={NetworkIcon}
        title="example.com"
        badge="6 sample hostnames"
      />

      <div
        role="group"
        aria-label="Illustrative subdomains for example.com"
        className="mt-2 space-y-2"
      >
        {SUBDOMAIN_SAMPLE_HOSTS.map((host) => (
          <div
            key={host.host}
            className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="min-w-0 flex-1 break-words font-mono text-[10px] leading-[1.5] text-white/90">
                {host.host}
              </p>
              <span className="shrink-0 rounded-md border border-emerald/20 bg-emerald/10 px-1.5 py-0.5 font-mono text-[7.5px] font-semibold uppercase tracking-[0.08em] text-soft-green">
                {host.record}
              </span>
            </div>
            <p className="mt-1 break-words font-mono text-[9px] text-white/70">
              {host.target}
            </p>
            <p className="mt-0.5 text-[9px] leading-[1.5] text-white/55">
              {host.note}
            </p>
          </div>
        ))}
      </div>
    </AssetVisualShell>
  );
}

const DOMAIN_SAMPLE_RECORDS = [
  {
    name: "example.com",
    type: "Apex",
    value: "A · 203.0.113.10",
    note: "Sample primary domain",
  },
  {
    name: "www.example.com",
    type: "Hostname",
    value: "CNAME · example.com",
    note: "Sample web alias",
  },
  {
    name: "api.example.com",
    type: "Hostname",
    value: "A · 203.0.113.20",
    note: "Sample API host",
  },
  {
    name: "mail.example.com",
    type: "Hostname",
    value: "MX · mail.example.net",
    note: "Sample mail exchanger",
  },
  {
    name: "example.net",
    type: "Related",
    value: "NS · ns1.example.net",
    note: "Sample related domain",
  },
];

export function DomainDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Illustrative domain snapshot"
      badge="Sample data only"
      footer="Sample domains and DNS values only. No live lookup is run."
      srDescription="Illustrative domain and DNS snapshot with sample apex, hostname, mail, and related domain values."
    >
      <SampleRowHeader
        icon={GlobeIcon}
        title="example.com"
        badge="5 sample domains"
      />

      <div
        role="group"
        aria-label="Illustrative domain context for example.com"
        className="mt-2 space-y-2"
      >
        {DOMAIN_SAMPLE_RECORDS.map((record) => (
          <div
            key={record.name}
            className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="min-w-0 flex-1 break-words font-mono text-[10px] leading-[1.5] text-white/90">
                {record.name}
              </p>
              <span className="shrink-0 rounded-full border border-emerald/20 bg-emerald/10 px-2 py-0.5 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-soft-green">
                {record.type}
              </span>
            </div>
            <p className="mt-1 break-words font-mono text-[9px] text-white/70">
              {record.value}
            </p>
            <p className="mt-0.5 text-[9px] leading-[1.5] text-white/55">
              {record.note}
            </p>
          </div>
        ))}
      </div>
    </AssetVisualShell>
  );
}

const IP_SAMPLE_HOSTS = [
  {
    host: "www.example.com",
    ipv4: "203.0.113.10",
    ipv6: "2001:db8::10",
    note: "Shared edge sample",
  },
  {
    host: "api.example.com",
    ipv4: "203.0.113.20",
    ipv6: "2001:db8::20",
    note: "Application host sample",
  },
  {
    host: "cdn.example.com",
    ipv4: "203.0.113.30",
    ipv6: "2001:db8::30",
    note: "CDN edge sample",
  },
  {
    host: "mail.example.com",
    ipv4: "203.0.113.40",
    ipv6: "Not observed",
    note: "Mail host sample",
  },
];

export function IpHostDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Illustrative host and IP snapshot"
      badge="Sample data only"
      footer="Sample addresses only. No live host or IP lookup is run."
      srDescription="Illustrative host and IP inventory with sample IPv4 and IPv6 addresses."
    >
      <SampleRowHeader
        icon={LayersIcon}
        title="example.com"
        badge="4 sample hosts"
      />

      <div
        role="group"
        aria-label="Illustrative host and IP relationships for example.com"
        className="mt-2 space-y-2"
      >
        {IP_SAMPLE_HOSTS.map((host) => (
          <div
            key={host.host}
            className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="min-w-0 flex-1 break-words font-mono text-[10px] leading-[1.5] text-white/90">
                {host.host}
              </p>
              <SamplePill tone="neutral">Sample host</SamplePill>
            </div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[8.5px] text-white/75">
                {host.ipv4}
              </span>
              <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[8.5px] text-white/55">
                {host.ipv6}
              </span>
            </div>
            <p className="mt-1 text-[9px] leading-[1.5] text-white/55">
              {host.note}
            </p>
          </div>
        ))}
      </div>
    </AssetVisualShell>
  );
}

const PORT_SAMPLE_SERVICES = [
  {
    port: "443",
    service: "HTTPS",
    protocol: "TCP",
    state: "Public",
    note: "Sample web service",
  },
  {
    port: "80",
    service: "HTTP",
    protocol: "TCP",
    state: "Redirect",
    note: "Sample redirect to HTTPS",
  },
  {
    port: "22",
    service: "SSH",
    protocol: "TCP",
    state: "Restricted",
    note: "Sample administrative service",
  },
  {
    port: "8080",
    service: "HTTP-alt",
    protocol: "TCP",
    state: "Not observed",
    note: "No sample response",
  },
];

export function PortServiceDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Illustrative port and service snapshot"
      badge="Sample data only"
      footer="Sample ports only. No live port scan is run."
      srDescription="Illustrative port and service snapshot for api.example.com with sample ports, services, and states."
    >
      <SampleRowHeader
        icon={CodeIcon}
        title="api.example.com"
        badge="4 sample ports"
      />

      <div
        role="group"
        aria-label="Illustrative ports and services for api.example.com"
        className="mt-2 space-y-2"
      >
        {PORT_SAMPLE_SERVICES.map((item) => (
          <div
            key={item.port}
            className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-emerald/30 hover:bg-white/10"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex h-7 w-12 shrink-0 items-center justify-center rounded-md border border-emerald/20 bg-emerald/10 font-mono text-[9px] font-semibold text-soft-green">
                {item.port}
              </span>
              <p className="min-w-0 flex-1 break-words font-mono text-[10px] text-white/90">
                {item.service}
              </p>
              <span className="shrink-0 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-white/55">
                {item.protocol}
              </span>
              <SamplePill
                tone={
                  item.state === "Public" || item.state === "Redirect"
                    ? "emerald"
                    : item.state === "Restricted"
                      ? "neutral"
                      : "muted"
                }
              >
                {item.state}
              </SamplePill>
            </div>
            <p className="mt-1 text-[9px] leading-[1.5] text-white/55">
              {item.note}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald/20 bg-emerald/5 px-3 py-2">
        <ShieldIcon className="h-3.5 w-3.5 shrink-0 text-soft-green" />
        <p className="text-[8.5px] leading-[1.5] text-white/70">
          Exposure context should be reviewed with the service owner.
        </p>
      </div>
    </AssetVisualShell>
  );
}
