import { useId } from "react";

import OfficeRobot from "./OfficeRobots";

const TEAM = [
  { type: "radi", name: "Radi", role: "Assets", accent: "var(--office-green)", monitor: "radar", desktop: [110, 150], mobile: [83, 390] },
  { type: "dee", name: "Dee", role: "DNS", accent: "var(--office-green-light)", monitor: "network", desktop: [570, 150], mobile: [257, 390] },
  { type: "certi", name: "Certi", role: "SSL/TLS", accent: "var(--office-teal)", monitor: "scan", desktop: [110, 338], mobile: [83, 590] },
  { type: "hedy", name: "Hedy", role: "Headers", accent: "var(--emerald)", monitor: "headers", desktop: [570, 338], mobile: [257, 590] },
  { type: "mailo", name: "Mailo", role: "Email", accent: "var(--office-mint)", monitor: "mail", desktop: [340, 356], mobile: [170, 770] },
];

const DESKTOP_PIPES = [
  ["M168 160 H300 V214", "var(--office-green)", 3.6, 0],
  ["M512 160 H380 V214", "var(--office-green-light)", 3.6, 0.6],
  ["M150 336 V304 H240 V235 H272", "var(--office-teal)", 4, 1.2],
  ["M530 336 V304 H440 V235 H408", "var(--emerald)", 4, 1.8],
  ["M392 352 V252", "var(--office-mint)", 2.6, 0.3],
  ["M70 184 V336", "var(--office-green)", 4.5, 0.9],
  ["M610 184 V336", "var(--office-green-light)", 4.5, 1.5],
  ["M168 146 V34 H512 V146", "var(--office-green)", 7, 0],
  ["M168 358 H224 V380 H278", "var(--office-teal)", 3.4, 0.4],
  ["M512 358 H456 V380 H402", "var(--emerald)", 3.4, 1],
];

const MOBILE_PIPES = [
  ["M145 400 H158 V270 H100 V204", "var(--office-green)", 3.6, 0],
  ["M195 400 H182 V270 H240 V204", "var(--office-green-light)", 3.6, 0.6],
  ["M145 600 H152 V470 H158 V270 H100 V204", "var(--office-teal)", 4, 1.2],
  ["M195 600 H188 V470 H182 V270 H240 V204", "var(--emerald)", 4, 1.8],
  ["M222 770 V690 H170 V270 H240 V204", "var(--office-mint)", 5.6, 0.3],
  ["M25 422 V590", "var(--office-green)", 4.5, 0.9],
  ["M315 422 V590", "var(--office-green-light)", 4.5, 1.5],
  ["M145 386 V272 H195 V386", "var(--office-green)", 5, 0],
  ["M145 610 H158 V718 H112 V770", "var(--office-teal)", 3.4, 0.4],
  ["M195 610 H182 V718 H228 V770", "var(--emerald)", 3.4, 1],
];

function Pipeline({ path, accent, duration, phase }) {
  return (
    <g data-office-pipeline="">
      <path d={path} fill="none" stroke="var(--office-panel)" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
      <path className="office-pipe-flow" d={path} fill="none" stroke={accent} strokeWidth="2" strokeDasharray="5 9" opacity="0.8" />
      <circle className="office-pipe-packet" r="4.5" fill={accent}>
        <animateMotion dur={`${duration}s`} begin={`${-phase}s`} repeatCount="indefinite" path={path} />
      </circle>
    </g>
  );
}

function Desk({ x, y }) {
  return (
    <g data-office-desk="">
      <rect x={x - 62} y={y} width="124" height="9" rx="4.5" fill="var(--office-desk-top)" />
      <rect x={x - 58} y={y + 9} width="116" height="24" rx="6" fill="var(--office-panel)" stroke="var(--office-desk-edge)" />
      <rect x={x - 56} y={y + 33} width="6" height="9" fill="var(--office-desk-edge)" />
      <rect x={x + 50} y={y + 33} width="6" height="9" fill="var(--office-desk-edge)" />
    </g>
  );
}

function Monitor({ type, x, y, accent }) {
  return (
    <g transform={`translate(${x},${y})`} data-office-monitor={type}>
      <rect width="36" height="24" rx="5" fill="var(--charcoal)" stroke={accent} />
      <rect x="14" y="24" width="8" height="4" fill="var(--office-desk-edge)" />
      {type === "scan" && (
        <>
          <rect x="6" y="5" width="24" height="3" rx="1.5" fill={accent} opacity="0.7" />
          <rect x="6" y="11" width="18" height="2.5" rx="1.2" fill="var(--office-text)" opacity="0.4" />
          <rect className="office-scan" x="3" y="3" width="30" height="1.6" fill={accent} />
        </>
      )}
      {type === "network" && (
        <>
          <path d="M8 8 H28 L18 18 Z" fill="none" stroke={accent} strokeOpacity="0.7" />
          {[[8, 8, 0], [28, 8, 0.8], [18, 18, 1.6]].map(([cx, cy, delay]) => (
            <circle key={cx} className="office-pulse" cx={cx} cy={cy} r="2.5" fill={accent} style={{ animationDelay: `${delay}s` }} />
          ))}
        </>
      )}
      {type === "headers" && (
        <>
          <g fill="var(--office-text)" opacity="0.4">
            <rect x="6" y="5" width="16" height="3" rx="1.5" />
            <rect x="6" y="11" width="12" height="3" rx="1.5" />
            <rect x="6" y="17" width="14" height="3" rx="1.5" />
          </g>
          {[6, 12, 18].map((cy, index) => (
            <circle key={cy} className="office-pulse" cx="28" cy={cy} r="2" fill={index === 2 ? "var(--office-amber)" : accent} style={{ animationDelay: `${index * 0.7}s` }} />
          ))}
        </>
      )}
      {type === "mail" && (
        <g className="office-slide">
          <rect x="6" y="7" width="14" height="10" rx="2" fill="none" stroke={accent} />
          <path d="M6 8 L13 13 L20 8" fill="none" stroke={accent} />
        </g>
      )}
      {type === "radar" && (
        <>
          <circle cx="18" cy="12" r="9" fill="none" stroke={accent} strokeOpacity="0.5" />
          <g className="office-rotate">
            <circle cx="18" cy="12" r="9" fill="none" />
            <path d="M18 12 L27 12 A9 9 0 0 0 24 5 Z" fill={accent} fillOpacity="0.55" />
          </g>
        </>
      )}
    </g>
  );
}

function SpecialistStation({ member, mobile }) {
  const [x, y] = mobile ? member.mobile : member.desktop;
  const scale = mobile ? 0.85 : 0.62;

  return (
    <g data-office-member={member.type}>
      <g transform={`translate(${x - 50 * scale},${y + 6 - 120 * scale}) scale(${scale})`} data-office-robot={member.type}>
        <OfficeRobot type={member.type} accent={member.accent} />
      </g>
      <Desk x={x} y={y} />
      <Monitor type={member.monitor} x={member.type === "mailo" ? x - 58 : x + 20} y={y - 28} accent={member.accent} />
      <text x={x} y={y + 60} textAnchor="middle" className="office-station-label" fill="var(--office-text)" data-office-label="">
        {member.name} · {member.role}
      </text>
    </g>
  );
}

function ReportStation({ mobile }) {
  const x = mobile ? 170 : 340;
  const tableY = mobile ? 200 : 236;
  const scale = mobile ? 0.44 : 0.34;
  const monitorY = mobile ? 32 : 84;
  const monitorWidth = mobile ? 116 : 96;
  const monitorHeight = mobile ? 70 : 56;
  const monitorCenterY = mobile ? 33 : 28;

  return (
    <g data-office-member="secu">
      <g transform={`translate(${x - 100 * scale},${tableY - 224 * scale}) scale(${scale})`} data-office-robot="secu">
        <OfficeRobot type="secu" accent="var(--emerald-light)" />
      </g>
      <g data-office-desk="report">
        <ellipse cx={x} cy={tableY + 4} rx="70" ry="22" fill="var(--office-panel)" stroke="var(--office-desk-top)" />
        <ellipse cx={x} cy={tableY} rx="62" ry="17" fill="var(--office-report-top)" />
      </g>
      <text x={x} y={tableY + (mobile ? 48 : 44)} textAnchor="middle" className="office-station-label" fill="var(--office-text)" data-office-label="">Secu · Lead</text>
      <g transform={`translate(${x - monitorWidth / 2},${monitorY})`} data-office-monitor="report">
        <rect width={monitorWidth} height={monitorHeight} rx="12" fill="var(--office-bg)" stroke="var(--emerald-light)" strokeOpacity="0.7" />
        <circle cx="28" cy={monitorCenterY} r="14" fill="none" stroke="var(--office-panel)" strokeWidth="5" />
        <circle className="office-report-ring" cx="28" cy={monitorCenterY} r="14" fill="none" stroke="var(--emerald)" strokeWidth="5" strokeLinecap="round" strokeDasharray="88" strokeDashoffset="88" transform={`rotate(-90 28 ${monitorCenterY})`} />
        <text x={mobile ? 50 : 70} y={mobile ? 26 : monitorCenterY} dy={mobile ? undefined : "-0.3em"} textAnchor={mobile ? undefined : "middle"} className="office-report-label" fontWeight="500" fill="var(--office-text)">Report</text>
        <text x={mobile ? 50 : 70} y={mobile ? 52 : monitorCenterY} dy={mobile ? undefined : "1.1em"} textAnchor={mobile ? undefined : "middle"} className="office-report-label" fill="var(--office-text-muted)">desk</text>
      </g>
    </g>
  );
}

export default function OfficeScene({ mobile = false }) {
  const id = useId();
  const width = mobile ? 340 : 680;
  const height = mobile ? 860 : 440;
  const pipelines = mobile ? MOBILE_PIPES : DESKTOP_PIPES;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-labelledby={`${id}-title ${id}-description`}
      className={mobile ? "mx-auto block h-auto w-full max-w-[26rem] md:hidden" : "hidden h-auto w-full md:block"}
      data-office-layout={mobile ? "mobile" : "desktop"}
    >
      <title id={`${id}-title`}>Six different bots working at desks connected by pipelines</title>
      <desc id={`${id}-description`}>Radi, Dee, Certi, Hedy and Mailo work at desks around the floor. Pipes carry results between them and into the central report table where Secu, the lead bot, collects everything.</desc>
      <defs>
        <pattern id={`${id}-floor`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="var(--office-grid)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="1" y="1" width={width - 2} height={height - 2} rx="22" fill="var(--office-bg)" stroke="var(--office-desk-edge)" />
      <rect x="1" y="1" width={width - 2} height={height - 2} rx="22" fill={`url(#${id}-floor)`} />
      <g aria-hidden="true">
        {pipelines.map(([path, accent, duration, phase]) => (
          <Pipeline key={path} path={path} accent={accent} duration={duration} phase={phase} />
        ))}
      </g>
      {TEAM.map((member) => <SpecialistStation key={member.type} member={member} mobile={mobile} />)}
      <ReportStation mobile={mobile} />
    </svg>
  );
}
