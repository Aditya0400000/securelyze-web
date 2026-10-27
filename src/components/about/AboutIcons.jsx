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

export function GlobeIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.9 12h16.2M12 3.75c2.15 2.2 3.3 5 3.3 8.25s-1.15 6.05-3.3 8.25c-2.15-2.2-3.3-5-3.3-8.25S9.85 5.95 12 3.75Z" />
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

export function AssetsIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="4.25" y="4.25" width="6.1" height="6.1" rx="1.2" />
      <rect x="13.65" y="4.25" width="6.1" height="6.1" rx="1.2" />
      <rect x="4.25" y="13.65" width="6.1" height="6.1" rx="1.2" />
      <path d="M16.7 13.65v6.1M13.65 16.7h6.1" />
    </IconBase>
  );
}

export function WebsiteIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <rect x="3.75" y="4.75" width="16.5" height="14.5" rx="2.1" />
      <path d="M3.75 8.75h16.5" opacity="0.55" />
      <path d="M6.6 6.8h.01M9 6.8h.01" strokeWidth={2.2} />
      <path d="M7.15 12.2h5.4M7.15 15.25h7.7" opacity="0.55" />
    </IconBase>
  );
}

export function UserIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="8.2" r="3.15" />
      <path d="M5.6 19.2c.55-3.2 2.8-5 6.4-5s5.85 1.8 6.4 5" />
    </IconBase>
  );
}

export function DeveloperIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="m8.4 8-4 4 4 4M15.6 8l4 4-4 4M13.5 5.2 10.5 18.8" />
      <path d="M3.5 4.75h17" opacity="0.35" />
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

export function CompassIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="m14.9 9.1-1.8 4-4 1.8 1.8-4 4-1.8Z" />
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
