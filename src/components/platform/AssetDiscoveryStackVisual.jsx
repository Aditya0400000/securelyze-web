import { useId } from "react";

const LAYERS = [
  { label: "Subdomains", icon: "domain" },
  { label: "IP Addresses", icon: "hosts" },
  { label: "Open Ports", icon: "ports" },
  { label: "Services", icon: "services" },
];

function AssetIcon({ type }) {
  return (
    <g fill="none" stroke="var(--emerald-hover)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {type === "domain" && <><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" /><path d="M2 12h20M4 6h16M4 18h16" /></>}
      {type === "hosts" && <><rect x="9" y="1" width="6" height="6" rx="1" /><path d="M12 7v7M3 18v-4h18v4M12 14v4" /><rect x="0" y="18" width="6" height="5" rx="1" /><rect x="9" y="18" width="6" height="5" rx="1" /><rect x="18" y="18" width="6" height="5" rx="1" /></>}
      {type === "ports" && <><rect x="1" y="1" width="22" height="9" rx="2" /><rect x="1" y="14" width="22" height="9" rx="2" /><path d="M6 5.5h.01M6 18.5h.01M12 5.5h6M12 18.5h6" /></>}
      {type === "services" && <><path d="m12 1 11 6v12l-11 6-11-6V7Z M1 7l11 6 11-6M12 13v12M6 4l11 6" /></>}
    </g>
  );
}

export default function AssetDiscoveryStackVisual() {
  const id = useId();
  const ref = (name) => `url(#${id}-${name})`;

  return (
    <figure className="mx-auto w-[78%] min-w-0 max-w-[29.625rem]">
      <svg viewBox="0 0 600 610" role="img" aria-labelledby={`${id}-title ${id}-description`} className="block h-auto w-full overflow-visible font-sans">
        <title id={`${id}-title`}>Connected asset discovery layers</title>
        <desc id={`${id}-description`}>A security shield above four connected layers representing subdomains, IP addresses, open ports, and services. This is a capability illustration, not scan results.</desc>
        <defs>
          <radialGradient id={`${id}-halo`}>
            <stop stopColor="var(--emerald)" stopOpacity=".25" />
            <stop offset="1" stopColor="var(--emerald)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-top`} x2="1" y2="1">
            <stop stopColor="var(--white)" /><stop offset="1" stopColor="var(--soft-green)" />
          </linearGradient>
          <linearGradient id={`${id}-face`}>
            <stop stopColor="var(--white)" /><stop offset=".5" stopColor="var(--light)" /><stop offset="1" stopColor="var(--soft-green)" />
          </linearGradient>
          <linearGradient id={`${id}-shield`} x2=".8" y2="1">
            <stop stopColor="var(--soft-green)" /><stop offset=".45" stopColor="var(--emerald-light)" /><stop offset="1" stopColor="var(--emerald-hover)" />
          </linearGradient>
          <linearGradient id={`${id}-shield-core`} x2="1" y2="1">
            <stop stopColor="var(--emerald)" /><stop offset="1" stopColor="var(--dark-green)" />
          </linearGradient>
          <filter id={`${id}-shadow`} x="-20%" y="-40%" width="140%" height="200%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="var(--charcoal)" floodOpacity=".4" />
          </filter>
        </defs>

        <circle cx="300" cy="300" r="280" fill={ref("halo")} />
        <g fill="none" stroke="var(--emerald)" strokeWidth="1.2">
          <circle cx="300" cy="264" r="222" opacity=".25" />
          <circle cx="300" cy="264" r="168" opacity=".12" />
          <ellipse cx="300" cy="387" rx="285" ry="91" opacity=".7" />
        </g>
        <g fill="var(--emerald-light)">
          {[[15, 387], [56, 340], [544, 340], [585, 387], [555, 427], [45, 427]].map(([cx, cy]) => <g key={cx}><circle cx={cx} cy={cy} r="8" opacity=".1" /><circle cx={cx} cy={cy} r="3.5" /></g>)}
        </g>
        <path d="M44 506 286 429Q300 424 314 429L556 506Q576 513 556 520L314 596Q300 601 286 596L44 520Q24 513 44 506Z" fill="var(--emerald)" fillOpacity=".09" stroke="var(--emerald)" strokeOpacity=".2" />

        {/* Back-to-front painting keeps the gaps and the slab edges distinct. */}
        {[...LAYERS].reverse().map(({ label, icon }, index) => {
          const y = 183 + (3 - index) * 83;
          return (
            <g key={label} transform={`translate(0 ${y})`} filter={ref("shadow")}>
              <path d="M84 38 290 104Q300 108 310 104L516 38V77Q516 89 503 93L314 154Q300 159 286 154L97 93Q84 89 84 77Z" fill={ref("face")} stroke="var(--soft-green)" strokeWidth="1" />
              <path d="M96 22 286-40Q300-45 314-40L504 22Q528 30 512 41L314 105Q300 110 286 105L88 41Q72 30 96 22Z" fill={ref("top")} stroke="var(--white)" strokeWidth="1.5" />
              <path d="M119 25 292-31Q300-34 308-31L481 25Q493 30 481 35L308 90Q300 93 292 90L119 35Q107 30 119 25Z" fill="var(--emerald-light)" fillOpacity=".15" />
              {index === 3 && <g fill="var(--emerald)"><ellipse cx="118" cy="29" rx="5" ry="2.5" opacity=".4" /><ellipse cx="132" cy="34" rx="5" ry="2.5" opacity=".6" /><ellipse cx="146" cy="39" rx="5" ry="2.5" opacity=".8" /></g>}
              <g transform="translate(126 66) skewY(18)">
                <AssetIcon type={icon} />
                <text x="43" y="19" fill="var(--text-primary)" fontSize="19" fontWeight="600" letterSpacing="-.5">{label}</text>
              </g>
              <g transform="translate(473 73) skewY(-18)">
                <circle r="14" fill="var(--emerald-hover)" />
                <path d="m-6 0 4 4 8-9" fill="none" stroke="var(--white)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>
          );
        })}

        <ellipse cx="300" cy="218" rx="58" ry="15" fill="var(--emerald-hover)" opacity=".18" />
        <g filter={ref("shadow")}>
          <path d="M300 91C278 106 264 109 248 111Q238 112 238 125V160C238 196 261 222 300 240C339 222 362 196 362 160V125Q362 112 352 111C336 109 322 106 300 91Z" fill={ref("shield")} stroke="var(--soft-green)" strokeWidth="2" />
          <path d="M300 111C284 121 271 125 253 129V160C253 188 270 209 300 224C330 209 347 188 347 160V129C329 125 316 121 300 111Z" fill={ref("shield-core")} stroke="var(--emerald-hover)" strokeWidth="2" />
          <path d="m280 163 15 15 29-33" fill="none" stroke="var(--soft-green)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </figure>
  );
}
