const HEADERS = [
  { label: "Content-Security-Policy", state: "present", tone: "ok" },
  { label: "Strict-Transport-Security", state: "present", tone: "ok" },
  { label: "X-Frame-Options", state: "present", tone: "ok" },
  { label: "Permissions-Policy", state: "review", tone: "warning" },
];

const ASSETS = [
  { label: "www.example.com", meta: "HTTPS · 443", className: "hero-radar__asset--one" },
  { label: "api.example.com", meta: "A · 203.0.113.24", className: "hero-radar__asset--two" },
  { label: "edge.example.com", meta: "CNAME · CDN", className: "hero-radar__asset--three" },
];

function CheckIcon({ warning = false }) {
  if (warning) {
    return (
      <svg viewBox="0 0 12 12" fill="none">
        <path d="M6 1.6 11 10H1L6 1.6Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
        <path d="M6 4.5v2.4M6 8.7v.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 12 12" fill="none">
      <path d="m2.1 6.2 2.3 2.3 5.5-5.6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SecuTask() {
  return (
    <div className="hero-task hero-task--secu">
      <div className="hero-secu__code">
        <p><span className="hero-secu__prompt">secu@securelyze</span><span className="hero-secu__muted">:~$</span> scan --surface public</p>
        <p className="hero-secu__muted">→ resolving domain profile...</p>
        <p><span className="hero-secu__key">certificate</span> <span className="hero-secu__value">observed</span></p>
        <p><span className="hero-secu__key">dns</span> <span className="hero-secu__value">mapped</span></p>
        <p><span className="hero-secu__key">headers</span> <span className="hero-secu__value">reviewing</span></p>
        <p className="hero-secu__cursor-line"><span className="hero-secu__cursor" /></p>
      </div>

      <svg viewBox="0 0 260 190" fill="none" className="hero-secu__network">
        <path className="hero-network__line" d="M37 127 89 72l59 24 67-48" />
        <path className="hero-network__line hero-network__line--soft" d="m89 72 7 74 52-50 67 44" />
        <path className="hero-network__line hero-network__line--soft" d="M37 127 96 146l52-50" />
        <g className="hero-network__node hero-network__node--one">
          <circle cx="37" cy="127" r="7" />
          <circle cx="37" cy="127" r="2.2" />
        </g>
        <g className="hero-network__node hero-network__node--two">
          <circle cx="89" cy="72" r="5.5" />
          <circle cx="89" cy="72" r="1.8" />
        </g>
        <g className="hero-network__node hero-network__node--three">
          <circle cx="148" cy="96" r="5" />
          <circle cx="148" cy="96" r="1.6" />
        </g>
        <g className="hero-network__node hero-network__node--four">
          <circle cx="215" cy="48" r="6.5" />
          <circle cx="215" cy="48" r="2" />
        </g>
        <g className="hero-network__node hero-network__node--five">
          <circle cx="148" cy="140" r="5" />
          <circle cx="148" cy="140" r="1.5" />
        </g>
        <text x="24" y="147" className="hero-network__label">surface</text>
        <text x="176" y="38" className="hero-network__label">public</text>
      </svg>
    </div>
  );
}

function CertiTask() {
  return (
    <div className="hero-task hero-task--certi">
      <div className="hero-certi__certificate">
        <div className="hero-certi__header">
          <span>TLS / X.509</span>
          <span className="hero-certi__status"><i />VALID</span>
        </div>
        <div className="hero-certi__lock">
          <svg viewBox="0 0 48 58" fill="none">
            <rect x="8" y="24" width="32" height="26" rx="8" stroke="currentColor" strokeWidth="1.6" />
            <path d="M15.5 24v-6.5a8.5 8.5 0 1 1 17 0V24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="24" cy="36" r="3.2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M24 39v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="hero-certi__lines">
          <span />
          <span />
          <span />
        </div>
        <span className="hero-certi__scan" />
      </div>
      <div className="hero-certi__meta">
        <span>TLS 1.3</span>
        <span>AES-256-GCM</span>
        <span>SNI matched</span>
      </div>
    </div>
  );
}

function DeeTask() {
  return (
    <div className="hero-task hero-task--dee">
      <span className="hero-dns__query">dig +trace example.com</span>
      <svg viewBox="0 0 280 200" fill="none" className="hero-dns__map">
        <path className="hero-dns__link" d="M140 34 63 89l77 55 77-55-77-55Z" />
        <path className="hero-dns__link hero-dns__link--soft" d="M63 89v58l77 25 77-25V89" />
        <path className="hero-dns__packet hero-dns__packet--one" d="M140 34 63 89" />
        <path className="hero-dns__packet hero-dns__packet--two" d="m140 144 77-55" />
        <path className="hero-dns__packet hero-dns__packet--three" d="M63 147v-58" />
        <g className="hero-dns__node hero-dns__node--root">
          <circle cx="140" cy="34" r="10" />
          <circle cx="140" cy="34" r="3" />
          <text x="140" y="17" textAnchor="middle">example.com</text>
        </g>
        <g className="hero-dns__node hero-dns__node--a">
          <circle cx="63" cy="89" r="7" />
          <circle cx="63" cy="89" r="2.2" />
          <text x="43" y="78" textAnchor="end">A</text>
        </g>
        <g className="hero-dns__node hero-dns__node--cname">
          <circle cx="217" cy="89" r="7" />
          <circle cx="217" cy="89" r="2.2" />
          <text x="237" y="78">CNAME</text>
        </g>
        <g className="hero-dns__node hero-dns__node--txt">
          <circle cx="63" cy="147" r="6" />
          <circle cx="63" cy="147" r="1.8" />
          <text x="43" y="161" textAnchor="end">TXT</text>
        </g>
        <g className="hero-dns__node hero-dns__node--ns">
          <circle cx="217" cy="147" r="6" />
          <circle cx="217" cy="147" r="1.8" />
          <text x="237" y="161">NS</text>
        </g>
        <g className="hero-dns__node hero-dns__node--leaf">
          <circle cx="140" cy="172" r="4.5" />
        </g>
      </svg>
      <div className="hero-dns__records">
        <span>203.0.113.24</span>
        <span>TTL 300</span>
      </div>
    </div>
  );
}

function HedyTask() {
  return (
    <div className="hero-task hero-task--hedy">
      <div className="hero-headers__heading">
        <span>RESPONSE HEADERS</span>
        <span>4 / 6</span>
      </div>
      <ul className="hero-headers__list">
        {HEADERS.map((header, index) => (
          <li
            key={header.label}
            className={`hero-headers__row hero-headers__row--${header.tone}`}
            style={{ "--header-index": index }}
          >
            <span className="hero-headers__mark">
              <CheckIcon warning={header.tone === "warning"} />
            </span>
            <span className="hero-headers__label">{header.label}</span>
            <span className="hero-headers__state">{header.state}</span>
          </li>
        ))}
      </ul>
      <span className="hero-headers__note">One policy needs another look</span>
    </div>
  );
}

function MailoTask() {
  return (
    <div className="hero-task hero-task--mailo">
      <div className="hero-mailo__envelope">
        <svg viewBox="0 0 240 150" fill="none">
          <rect x="35" y="25" width="170" height="108" rx="12" stroke="currentColor" strokeWidth="1.4" />
          <path d="m41 33 79 62 79-62" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path className="hero-mailo__scan" d="M35 100h170" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 8" />
          <path d="M35 118 93 76M205 118l-58-42" stroke="currentColor" strokeOpacity="0.32" strokeWidth="1" />
        </svg>
      </div>
      <div className="hero-mailo__auth">
        {["SPF", "DKIM", "DMARC"].map((record) => (
          <span key={record} className="hero-mailo__record">
            <i />
            {record}
          </span>
        ))}
      </div>
      <div className="hero-mailo__meta">
        <span>mail.example.com</span>
        <span>policy aligned</span>
      </div>
    </div>
  );
}

function RadiTask() {
  return (
    <div className="hero-task hero-task--radi">
      <div className="hero-radar__scope">
        <span className="hero-radar__ring hero-radar__ring--one" />
        <span className="hero-radar__ring hero-radar__ring--two" />
        <span className="hero-radar__ring hero-radar__ring--three" />
        <span className="hero-radar__axis hero-radar__axis--x" />
        <span className="hero-radar__axis hero-radar__axis--y" />
        <span className="hero-radar__sweep" />
        <span className="hero-radar__blip hero-radar__blip--one" />
        <span className="hero-radar__blip hero-radar__blip--two" />
        <span className="hero-radar__blip hero-radar__blip--three" />
      </div>

      <div className="hero-radar__assets">
        {ASSETS.map((asset, index) => (
          <span
            key={asset.label}
            className={`hero-radar__asset ${asset.className}`}
            style={{ "--asset-index": index }}
          >
            <i />
            <span>
              <strong>{asset.label}</strong>
              <small>{asset.meta}</small>
            </span>
          </span>
        ))}
      </div>

      <span className="hero-radar__terminal" aria-hidden="true">
        &gt; discovering hostnames &middot; 3 assets live
      </span>
      <span className="hero-radar__meta">DISCOVERY / ASN 13335 / 443 OPEN</span>
    </div>
  );
}

const TASKS = {
  secu: SecuTask,
  certi: CertiTask,
  dee: DeeTask,
  hedy: HedyTask,
  mailo: MailoTask,
  radi: RadiTask,
};

export default function BotTasks({ variant }) {
  const Task = TASKS[variant] ?? SecuTask;

  return (
    <div className="hero-task-scene" aria-hidden="true">
      <Task />
    </div>
  );
}
