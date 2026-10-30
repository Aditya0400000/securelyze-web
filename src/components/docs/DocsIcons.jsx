const ICON_CONTENT = {
  overview: (
    <>
      <path d="M12 6.5C10.4 5.1 8.2 4.4 5.5 4.4H4v13.2h1.5c2.7 0 4.9.7 6.5 2.1 1.6-1.4 3.8-2.1 6.5-2.1H20V4.4h-1.5c-2.7 0-4.9.7-6.5 2.1Z" />
      <path d="M12 6.5v13.2" />
    </>
  ),
  gettingStarted: (
    <>
      <path d="M14.5 4.5c2.2-.7 4.4-.5 4.4-.5s.2 2.2-.5 4.4c-.5 1.5-1.4 2.9-2.7 4.2l-2.2 2.2-5.4-5.4 2.2-2.2c1.3-1.3 2.7-2.2 4.2-2.7Z" />
      <path d="m8.1 9.4-3.3.8 2.4 2.4M14.6 15.9l-.8 3.3-2.4-2.4" />
      <circle cx="15.2" cy="8.8" r="1.2" />
    </>
  ),
  dashboard: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.3" />
      <rect x="13" y="4" width="7" height="7" rx="1.3" />
      <rect x="4" y="13" width="7" height="7" rx="1.3" />
      <rect x="13" y="13" width="7" height="7" rx="1.3" />
    </>
  ),
  assets: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4M8.5 11h5M11 8.5v5" />
    </>
  ),
  findings: (
    <>
      <path d="M12 3.5 5.5 6v5.1c0 4.05 2.72 7.65 6.5 8.9 3.78-1.25 6.5-4.85 6.5-8.9V6L12 3.5Z" />
      <path d="M12 8v4.2M12 15.5h.01" />
    </>
  ),
  attackSurface: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.3" opacity="0.55" />
      <path d="M12 12 17.3 6.7" />
      <circle cx="12" cy="12" r="1.1" />
    </>
  ),
  ai: (
    <>
      <path d="m12 3.5 1.45 5.05L18.5 10l-5.05 1.45L12 16.5l-1.45-5.05L5.5 10l5.05-1.45L12 3.5Z" />
      <path
        d="m18.5 15.5.65 2.35 2.35.65-2.35.65-.65 2.35-.65-2.35-2.35-.65 2.35-.65.65-2.35Z"
        opacity="0.55"
      />
    </>
  ),
  settings: (
    <>
      <path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h7M15 17h5" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="13" cy="17" r="2" />
    </>
  ),
  notifications: (
    <>
      <path d="M6.5 9.5a5.5 5.5 0 0 1 11 0c0 5 2 6 2 6h-15s2-1 2-6Z" />
      <path d="M9.5 19a2.5 2.5 0 0 0 5 0" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="2.7" />
      <path d="M3.8 19a5.2 5.2 0 0 1 10.4 0" />
      <path d="M15.5 5.8a2.6 2.6 0 0 1 0 4.8M17.5 14.7a4.5 4.5 0 0 1 3 4.3" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="m6.2 6.2 3.8 3.8M17.8 6.2l-3.8 3.8M6.2 17.8l3.8-3.8M17.8 17.8l-3.8-3.8" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="m14.9 9.1-1.8 4-4 1.8 1.8-4 4-1.8Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.8 8 4.2-8 4.2-8-4.2 8-4.2Z" />
      <path d="m4 12 8 4.2 8-4.2M4 16.1l8 4.1 8-4.1" />
    </>
  ),
};

export function DocsIcon({ type = "overview", className = "h-5 w-5" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICON_CONTENT[type] ?? ICON_CONTENT.overview}
    </svg>
  );
}
