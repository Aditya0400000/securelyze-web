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
  badge = "Sample data",
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
          Domain
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
      srDescription="Asset map for example.com showing public hosts www, api, cdn, and mail."
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <AssetsIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Apex domain
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
      srDescription="Subdomain tree for example.com showing hosts www, api, app, cdn, and mail."
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
            <SamplePill>5 hosts</SamplePill>
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
      srDescription="Domain relationships for example.com showing records and related names."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <RecordIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Apex domain
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
      srDescription="Host-to-IP map for example.com showing IPv4 and IPv6 addresses."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <LayersIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Host group
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>4 hosts</SamplePill>
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
            www and the apex share the same address.
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
      srDescription="Port and service snapshot for api.example.com showing ports 443, 80, 22, and 8080."
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 text-soft-green">
            <CodeIcon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-white/55">
              Public host
            </p>
            <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white/90">
              api.example.com
            </p>
          </div>
          <span className="ml-auto">
            <SamplePill>4 ports</SamplePill>
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
            <span>Service coverage</span>
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
    note: "Apex domain",
  },
  {
    name: "www.example.com",
    type: "Subdomain",
    address: "203.0.113.10",
    note: "CNAME to apex",
  },
  {
    name: "api.example.com",
    type: "Subdomain",
    address: "203.0.113.20",
    note: "A record",
  },
  {
    name: "cdn.example.com",
    type: "Subdomain",
    address: "203.0.113.30",
    note: "CNAME to edge",
  },
  {
    name: "mail.example.com",
    type: "Host",
    address: "203.0.113.40",
    note: "MX target",
  },
  {
    name: "api.example.com:443",
    type: "Service",
    address: "HTTPS",
    note: "Public service",
  },
];

export function AssetDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Asset inventory"
      srDescription="Asset inventory for example.com with domains, subdomains, hosts, and a service."
    >
      <SampleRowHeader
        icon={AssetsIcon}
        title="example.com"
        badge="6 assets"
      />

      <div
        role="group"
        aria-label="Asset inventory for example.com"
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
    note: "Web alias",
  },
  {
    host: "api.example.com",
    record: "A",
    target: "203.0.113.20",
    note: "API host",
  },
  {
    host: "app.example.com",
    record: "CNAME",
    target: "app.example.net",
    note: "Application host",
  },
  {
    host: "cdn.example.com",
    record: "CNAME",
    target: "edge.example.net",
    note: "CDN edge",
  },
  {
    host: "mail.example.com",
    record: "A",
    target: "203.0.113.40",
    note: "Mail host",
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
      label="Subdomain snapshot"
      srDescription="Subdomain list for example.com with hostnames, record types, and targets."
    >
      <SampleRowHeader
        icon={NetworkIcon}
        title="example.com"
        badge="6 hostnames"
      />

      <div
        role="group"
        aria-label="Subdomains for example.com"
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
    note: "Primary domain",
  },
  {
    name: "www.example.com",
    type: "Hostname",
    value: "CNAME · example.com",
    note: "Web alias",
  },
  {
    name: "api.example.com",
    type: "Hostname",
    value: "A · 203.0.113.20",
    note: "API host",
  },
  {
    name: "mail.example.com",
    type: "Hostname",
    value: "MX · mail.example.net",
    note: "Mail exchanger",
  },
  {
    name: "example.net",
    type: "Related",
    value: "NS · ns1.example.net",
    note: "Related domain",
  },
];

export function DomainDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Domain snapshot"
      srDescription="Domain and DNS snapshot with apex, hostname, mail, and related domain values."
    >
      <SampleRowHeader
        icon={GlobeIcon}
        title="example.com"
        badge="5 domains"
      />

      <div
        role="group"
        aria-label="Domain context for example.com"
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
    note: "Shared edge",
  },
  {
    host: "api.example.com",
    ipv4: "203.0.113.20",
    ipv6: "2001:db8::20",
    note: "Application host",
  },
  {
    host: "cdn.example.com",
    ipv4: "203.0.113.30",
    ipv6: "2001:db8::30",
    note: "CDN edge",
  },
  {
    host: "mail.example.com",
    ipv4: "203.0.113.40",
    ipv6: "Not observed",
    note: "Mail host",
  },
];

export function IpHostDiscoveryExamplePanel() {
  return (
    <AssetVisualShell
      label="Host and IP snapshot"
      srDescription="Host and IP inventory with IPv4 and IPv6 addresses."
    >
      <SampleRowHeader
        icon={LayersIcon}
        title="example.com"
        badge="4 hosts"
      />

      <div
        role="group"
        aria-label="Host and IP relationships for example.com"
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
              <SamplePill tone="neutral">Host</SamplePill>
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
    note: "Web service",
  },
  {
    port: "80",
    service: "HTTP",
    protocol: "TCP",
    state: "Redirect",
    note: "Redirect to HTTPS",
  },
  {
    port: "22",
    service: "SSH",
    protocol: "TCP",
    state: "Restricted",
    note: "Administrative service",
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
      label="Port and service snapshot"
      srDescription="Port and service snapshot for api.example.com with ports, services, and states."
    >
      <SampleRowHeader
        icon={CodeIcon}
        title="api.example.com"
        badge="4 ports"
      />

      <div
        role="group"
        aria-label="Ports and services for api.example.com"
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
