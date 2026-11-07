import { useId } from "react";

import "./AboutInfrastructureVisual.css";

const NODES = [
  { type: "domain", x: 190, y: 150 },
  { type: "server", x: 570, y: 150 },
  { type: "network", x: 95, y: 310 },
  { type: "website", x: 665, y: 310 },
  { type: "database", x: 210, y: 470 },
  { type: "cloud", x: 550, y: 470 },
];

function Globe() {
  return <><circle r="27" /><ellipse rx="11" ry="27" /><path d="M-27 0h54M-23-14h46M-23 14h46" /></>;
}

function NodeIcon({ type, fill }) {
  return (
    <g transform="translate(0 -15)" fill="none" stroke="var(--emerald-hover)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
      {type === "domain" && <Globe />}
      {type === "server" && <>{[-20, 5].map(y => <g key={y}><rect x="-29" y={y} width="58" height="19" rx="5" fill={fill} /><path d={`M-20 ${y + 9.5}h.1M-10 ${y + 9.5}h12M18 ${y + 9.5}h.1`} stroke="var(--soft-green)" strokeWidth="3" /></g>)}</>}
      {type === "network" && <><path d="M0-11v21M-26 24V10h52v14M0 10v14" />{[[-8,-28],[-34,24],[-8,24],[18,24]].map(([x,y]) => <rect key={`${x}-${y}`} x={x} y={y} width="16" height="16" rx="4" fill={fill} strokeWidth="2" />)}</>}
      {type === "website" && <><rect x="-34" y="-27" width="68" height="54" rx="6" fill="var(--white)" /><path d="M-34-12h68" /><path d="M-25-20h.1M-17-20h.1M-9-20h.1" strokeWidth="3" /><g transform="translate(0 7) scale(.5)"><Globe /></g></>}
      {type === "database" && <><path d="M-24-22v46c0 16 48 16 48 0v-46" fill={fill} /><ellipse cy="-22" rx="24" ry="10" fill="var(--emerald-light)" stroke="var(--soft-green)" strokeWidth="2" /><path d="M-24-8c0 15 48 15 48 0M-24 9c0 15 48 15 48 0" stroke="var(--soft-green)" strokeWidth="2" /></>}
      {type === "cloud" && <path d="M-23 22h46c27 0 30-38 5-42C19-49-17-42-23-20C-52-24-53 22-23 22Z" fill="var(--white)" />}
    </g>
  );
}

function Tile({ x, y, children, top, side, shadow }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="about-infrastructure__node" filter={shadow}>
        <path d="M-70-14 0-57 70-14Q88-3 70 12L14 48Q0 57-14 48L-70 12Q-88 1-70-14Z" transform="translate(0 18)" fill={side} />
        <path d="M-70-14 0-57 70-14Q88-3 70 12L14 48Q0 57-14 48L-70 12Q-88 1-70-14Z" transform="translate(0 12)" fill="var(--soft-green)" />
        <path className="about-infrastructure__tile" d="M-70-14-14-50Q0-59 14-50L70-14Q88-3 70 12L14 48Q0 57-14 48L-70 12Q-88 1-70-14Z" fill={top} stroke="var(--white)" strokeWidth="2" />
        {children}
      </g>
    </g>
  );
}

export default function AboutInfrastructureVisual() {
  const id = useId();
  const ref = name => `url(#${id}-${name})`;

  return (
    <figure className="about-infrastructure mx-auto w-full min-w-0 max-w-[36rem]">
      <svg viewBox="0 0 760 600" className="block h-auto w-full overflow-visible" role="img" aria-labelledby={`${id}-title ${id}-description`}>
        <title id={`${id}-title`}>Connected security infrastructure</title>
        <desc id={`${id}-description`}>A shield above a central server stack, connected to domain, server, network, website, database, and cloud infrastructure nodes.</desc>
        <defs>
          <linearGradient id={`${id}-surface`} x2="1" y2="1"><stop stopColor="var(--white)" /><stop offset="1" stopColor="var(--light)" /></linearGradient>
          <linearGradient id={`${id}-mint`}><stop stopColor="var(--soft-green)" /><stop offset=".5" stopColor="var(--emerald-light)" /><stop offset="1" stopColor="var(--emerald-hover)" /></linearGradient>
          <linearGradient id={`${id}-green`}><stop stopColor="var(--emerald-hover)" /><stop offset=".55" stopColor="var(--dark-green)" /><stop offset="1" stopColor="var(--emerald-hover)" /></linearGradient>
          <linearGradient id={`${id}-shield`} x2=".8" y2="1"><stop stopColor="var(--emerald-light)" /><stop offset=".45" stopColor="var(--emerald)" /><stop offset="1" stopColor="var(--emerald-hover)" /></linearGradient>
          <radialGradient id={`${id}-halo`}><stop stopColor="var(--emerald-light)" stopOpacity=".19" /><stop offset="1" stopColor="var(--soft-green)" stopOpacity="0" /></radialGradient>
          <filter id={`${id}-shadow`} x="-50%" y="-50%" width="200%" height="220%"><feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="var(--emerald-hover)" floodOpacity=".14" /></filter>
        </defs>

        <g className="about-infrastructure__scene">
          <ellipse cx="380" cy="320" rx="335" ry="250" fill={ref("halo")} />
          <ellipse cx="380" cy="315" rx="334" ry="235" fill="none" stroke="var(--emerald-light)" strokeWidth="1.2" strokeDasharray="5 9" opacity=".55" />
          <g fill="none" stroke="var(--emerald)" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M190 150 380 260 570 150M95 310h165M500 310h165M210 470 380 370 550 470" />
            <path d="m380 185 161 93q15 9 15 27v55q0 18-15 27l-145 84q-16 9-32 0l-145-84q-15-9-15-27v-55q0-18 15-27Z" opacity=".5" />
          </g>
          <g fill="var(--white)" stroke="var(--emerald-light)" strokeWidth="2.5">
            {[[236,177],[524,177],[204,310],[556,310],[277,431],[483,431]].map(([cx,cy]) => <circle key={cx} cx={cx} cy={cy} r="5" />)}
          </g>

          {/* The surrounding tiles share the same isometric geometry. */}
          {NODES.map(({type,x,y}) => <Tile key={type} x={x} y={y} top={ref("surface")} side={ref("mint")} shadow={ref("shadow")}><NodeIcon type={type} fill={ref("shield")} /></Tile>)}

          <g filter={ref("shadow")}>
            <path d="m242 356 122-71q16-9 32 0l122 71q20 12 0 24l-122 71q-16 9-32 0l-122-71q-20-12 0-24Z" transform="translate(0 16)" fill={ref("mint")} />
            <path d="m242 356 122-71q16-9 32 0l122 71q20 12 0 24l-122 71q-16 9-32 0l-122-71q-20-12 0-24Z" fill={ref("surface")} stroke="var(--white)" strokeWidth="2" />
            {[327, 270].map(y => <g key={y} transform={`translate(0 ${y})`}>
              <path d="M275-13 380 47 485-13v38q0 10-12 17l-81 47q-12 7-24 0l-81-47q-12-7-12-17Z" fill={ref("green")} stroke="var(--emerald-hover)" strokeWidth="1" />
              <path d="m275-13 93-54q12-7 24 0l93 54-93 54q-12 7-24 0Z" fill="var(--soft-green)" stroke="var(--white)" strokeWidth="2" />
              {[0,1,2].map(i => <g key={i} fill="var(--emerald-light)"><ellipse cx={295+i*13} cy={27+i*7.5} rx="3" ry="4" transform={`rotate(-25 ${295+i*13} ${27+i*7.5})`} /><ellipse cx={434+i*11} cy={41-i*6.5} rx="3" ry="4" transform={`rotate(25 ${434+i*11} ${41-i*6.5})`} /></g>)}
              <path d="m401 57 20-12" stroke="var(--emerald)" strokeWidth="4" strokeLinecap="round" opacity=".45" />
            </g>)}
            <path d="M275 247 380 307 485 247v20q0 10-12 17l-81 47q-12 7-24 0l-81-47q-12-7-12-17Z" fill={ref("mint")} />
            <path d="m275 235 93-54q12-7 24 0l93 54q16 10 0 20l-93 54q-12 7-24 0l-93-54q-16-10 0-20Z" fill={ref("surface")} stroke="var(--white)" strokeWidth="2" />
            <ellipse cx="380" cy="245" rx="61" ry="28" fill="var(--soft-green)" fillOpacity=".65" stroke="var(--white)" strokeWidth="1.5" />
            <ellipse cx="380" cy="245" rx="40" ry="18" fill="none" stroke="var(--emerald-light)" strokeOpacity=".45" />

            <path d="M380 100c-22 17-39 23-59 27q-9 2-9 13v35c0 37 25 69 68 91 43-22 68-54 68-91v-35q0-11-9-13c-20-4-37-10-59-27Z" fill={ref("mint")} stroke="var(--soft-green)" strokeWidth="2" />
            <path d="M380 113c-18 14-34 20-56 25v37c0 30 20 57 56 77 36-20 56-47 56-77v-37c-22-5-38-11-56-25Z" fill={ref("shield")} />
            <path d="m355 178 18 18 36-40" fill="none" stroke="var(--white)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </figure>
  );
}
