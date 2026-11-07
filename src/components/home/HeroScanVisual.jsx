function SecurityIcon({ type = "shield", className = "h-5 w-5" }) {
  const paths = {
    shield: <><path d="m12 3 7 3v5c0 4.5-3 7.6-7 10-4-2.4-7-5.5-7-10V6l7-3Z" /><path d="m8.5 11.5 2.5 2.5 4.5-5" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    dns: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6h14M5 18h14" /></>,
    headers: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18m-12 4-2 2 2 2m6-4 2 2-2 2" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[type]}</svg>;
}

const CHECKS = [
  { label: "SSL/TLS", type: "lock", detail: "Certificate & HTTPS" },
  { label: "DNS Security", type: "dns", detail: "DNS records" },
  { label: "Security Headers", type: "headers", detail: "HTTP response headers" },
  { label: "Email Security", type: "email", detail: "SPF / DKIM / DMARC" },
];

export default function HeroScanVisual() {
  return (
    <figure aria-labelledby="home-hero-visual-caption" className="hero-card-scene relative mx-auto w-full max-w-[38rem]">
      <figcaption id="home-hero-visual-caption" className="sr-only">
        Sample data: a Security Overview dashboard with SSL/TLS, DNS Security,
        Security Headers, and Email Security cards. Decorative progress indicators
        illustrate the interface, not live scan results or security scores.
      </figcaption>

      <div aria-hidden="true" className="hero-card-scene__stage">
        <div className="hero-card-scene__backdrop">
          <div className="hero-card-scene__browser flex items-center gap-1.5 px-4">
            {[0, 1, 2].map(dot => <span key={dot} className="h-1.5 w-1.5 rounded-full bg-text-muted/25" />)}
            <span className="ml-auto h-2 w-2/5 rounded-full bg-border-subtle" />
          </div>
          <div className="hero-card-scene__ghost-lines"><span /><span /><span /></div>
        </div>

        <div className="hero-card-scene__overview">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-[17px] font-semibold tracking-[-0.035em] sm:text-[19px]">Security Overview</h2>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-light px-2 py-1 text-[10px] font-medium text-text-muted">
                <span className="h-1 w-1 rounded-full bg-emerald-hover" />Sample data
              </span>
            </div>
            <span className="text-text-muted/60"><SecurityIcon className="h-4 w-4" /></span>
          </div>

          <div className="hero-card-scene__overview-body">
            <span className="hero-card-scene__shield"><SecurityIcon className="h-10 w-10" /></span>
            <p className="mt-3 text-[12px] font-medium leading-5">Website Security Check</p>
            <p className="mt-1 font-mono text-[10px] text-text-muted">example.com</p>
          </div>
          <div className="hero-card-scene__overview-lines"><span /><span /><span /></div>
        </div>

        {CHECKS.map(check => (
          <div key={check.type} className={`hero-card-scene__card hero-card-scene__card--${check.type}`}>
            <span className="hero-card-scene__icon"><SecurityIcon type={check.type} className="h-4 w-4" /></span>
            <div className="min-w-0 flex-1">
              <h3 className="text-[12px] font-semibold leading-5 tracking-[-0.015em] sm:text-[13px]">{check.label}</h3>
              <p className="mt-0.5 text-[10px] leading-4 text-text-muted sm:text-[11px]">{check.detail}</p>
              <div className="hero-card-scene__progress"><span /></div>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
