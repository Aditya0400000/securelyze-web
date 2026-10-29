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

export function BookOpenIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M12 6.5C10.4 5.1 8.2 4.4 5.5 4.4H4v13.2h1.5c2.7 0 4.9.7 6.5 2.1 1.6-1.4 3.8-2.1 6.5-2.1H20V4.4h-1.5c-2.7 0-4.9.7-6.5 2.1Z" />
      <path d="M12 6.5v13.2" />
    </IconBase>
  );
}

export function ArticleIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M5.5 4.5h9.25L19 8.75v10.75H5.5V4.5Z" />
      <path d="M14.5 4.75V9h4.25" />
      <path d="M8.5 12h7M8.5 15h7M8.5 18h4.5" />
    </IconBase>
  );
}

export function HelpCircleIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M9.6 9.3a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.7-.9 1.3v.5" />
      <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function PlayCircleIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="m10 8.75 5 3.25-5 3.25v-6.5Z" />
    </IconBase>
  );
}

export function RefreshIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M19.25 8.75V5.5h-3.25" />
      <path d="M19.1 5.65a8.25 8.25 0 1 0 .9 7.1" />
    </IconBase>
  );
}

export function ChecklistIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M6 4.5h12v15H6v-15Z" />
      <path d="m8.5 8.5 1.5 1.5 2.5-2.5M8.5 13l1.5 1.5 2.5-2.5M14.5 8.5H17M14.5 13H17" />
    </IconBase>
  );
}

export function KeyIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="8.5" cy="12" r="3.5" />
      <path d="M12 12h8M17 12v3M20 12v2" />
    </IconBase>
  );
}

export function DatabaseIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.5" />
      <path d="M5.5 6.5v11c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-11M5.5 12c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" />
    </IconBase>
  );
}

export function ActivityIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <path d="M3.5 12h4l2.5-6 4 12 2.5-6h4" />
    </IconBase>
  );
}

export function ClockIcon({ className = "" }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </IconBase>
  );
}
