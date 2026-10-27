function IconBase({ className = "", children, strokeWidth = 1.5 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }) {
  return (
    <IconBase className={className} strokeWidth={1.7}>
      <path d="M4.5 12h14" />
      <path d="m13.5 7 5 5-5 5" />
    </IconBase>
  );
}

export function ArrowDownIcon({ className = "" }) {
  return (
    <IconBase className={className} strokeWidth={1.7}>
      <path d="M12 4.5v14" />
      <path d="m7 13.5 5 5 5-5" />
    </IconBase>
  );
}

export function CheckIcon({ className = "" }) {
  return (
    <IconBase className={className} strokeWidth={2.2}>
      <path d="m5.2 12.4 4.2 4.2L18.8 7.2" />
    </IconBase>
  );
}

export function ChevronDownIcon({ className = "" }) {
  return (
    <IconBase className={className} strokeWidth={1.7}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function ShieldIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M12 3.25 5.5 5.75v5.1c0 4.08 2.76 7.7 6.5 8.9 3.74-1.2 6.5-4.82 6.5-8.9v-5.1L12 3.25Z" />
      <path d="M9.25 11.8h5.5M9.25 14.3h3.4" />
    </IconBase>
  );
}

export function ShieldScanIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M4 8V5.8A1.8 1.8 0 0 1 5.8 4H8M16 4h2.2A1.8 1.8 0 0 1 20 5.8V8M20 16v2.2a1.8 1.8 0 0 1-1.8 1.8H16M8 20H5.8A1.8 1.8 0 0 1 4 18.2V16" />
      <path d="M12 7.2 8.7 8.5v3c0 2.3 1.48 4.35 3.3 5.1 1.82-.75 3.3-2.8 3.3-5.1v-3L12 7.2Z" />
    </IconBase>
  );
}

export function CertificateIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M5.5 4.75h8.4l4.6 4.6v9.9H5.5v-14.5Z" />
      <path d="M13.65 4.95v4.5h4.65" opacity="0.55" />
      <circle cx="10.4" cy="13.05" r="2.15" />
      <path d="m9.1 14.8-.6 2.75 1.9-1.05 1.9 1.05-.6-2.75" />
    </IconBase>
  );
}

export function NetworkIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="6" cy="12" r="2.1" />
      <circle cx="18" cy="6" r="2.1" />
      <circle cx="18" cy="18" r="2.1" />
      <path d="m7.85 10.95 8.25-3.9M7.85 13.05l8.25 3.9" />
    </IconBase>
  );
}

export function CodeIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.4 5.2 10.6 18.8" />
    </IconBase>
  );
}

export function LockIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="5.25" y="10.25" width="13.5" height="9.5" rx="2.1" />
      <path d="M8.4 10.2V7.85a3.6 3.6 0 0 1 7.2 0V10.2M12 14v2.2" />
    </IconBase>
  );
}

export function MailIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="2.2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </IconBase>
  );
}

export function RecordIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M5.5 4.75h8.4l4.6 4.6v9.9H5.5v-14.5Z" />
      <path d="M13.65 4.95v4.5h4.65" opacity="0.55" />
      <path d="M8.4 12.1h4.4M8.4 14.5h3.2" />
      <path d="m14.6 15.4.85.85 1.75-1.9" />
    </IconBase>
  );
}

export function RadarIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.3" opacity="0.55" />
      <path d="M12 12 17.3 6.7" />
      <circle cx="12" cy="12" r="1.1" />
      <circle cx="16.35" cy="8.8" r="0.9" />
    </IconBase>
  );
}

export function SparkIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="m12 3.5 1.45 5.05L18.5 10l-5.05 1.45L12 16.5l-1.45-5.05L5.5 10l5.05-1.45L12 3.5Z" />
      <path d="m18.5 15.5.65 2.35 2.35.65-2.35.65-.65 2.35-.65-2.35-2.35-.65 2.35-.65.65-2.35Z" opacity="0.55" />
    </IconBase>
  );
}

export function WalletOffIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M4.2 4.2 19.8 19.8" />
      <path d="M6.6 6.6H18a2 2 0 0 1 2 2v6.8a2 2 0 0 1-2 2H7.1" />
      <path d="M4 8.2v8.6a2 2 0 0 0 2 2h1.5M15.7 11.1h.01" strokeWidth={2.1} />
      <path d="M4 8.2V7a2 2 0 0 1 2-2h.6" opacity="0.45" />
    </IconBase>
  );
}

export function LayersIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="m12 3.75 8 4.1-8 4.1-8-4.1 8-4.1Z" />
      <path d="m4 12 8 4.1 8-4.1M4 15.9l8 4.1 8-4.1" opacity="0.6" />
    </IconBase>
  );
}

export function EyeIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M3.4 12s3.05-5.25 8.6-5.25S20.6 12 20.6 12s-3.05 5.25-8.6 5.25S3.4 12 3.4 12Z" />
      <circle cx="12" cy="12" r="2.45" />
    </IconBase>
  );
}
