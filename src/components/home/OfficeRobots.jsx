const INK = "var(--office-ink)";
const SHELL = "var(--office-shell)";
const SHADE = "var(--office-shell-shade)";
const LINE = "var(--office-line)";
const METAL = "var(--office-metal)";

function Secu({ accent }) {
  return (
    <g className="office-bot-float">
      <path d="M62 124 Q62 116 72 116 H128 Q138 116 138 124 L124 178 Q122 188 112 188 H88 Q78 188 76 178 Z" fill={SHELL} stroke={LINE} strokeWidth="1.5" />
      <rect x="78" y="132" width="44" height="34" rx="8" fill={SHADE} stroke={LINE} />
      <path d="M100 138 L90 142 V150 C90 156 95 160 100 162 C105 160 110 156 110 150 V142 Z" fill="none" stroke={accent} strokeWidth="2.2" />
      <circle cx="100" cy="200" r="11" fill={METAL} />
      <path d="M30 32 Q26 14 44 12 M170 32 Q174 14 156 12" fill="none" stroke={METAL} strokeWidth="5" strokeLinecap="round" />
      <rect x="14" y="54" width="18" height="34" rx="9" fill={SHADE} stroke={LINE} />
      <rect x="168" y="54" width="18" height="34" rx="9" fill={SHADE} stroke={LINE} />
      <path d="M34 30 Q34 20 46 20 H154 Q166 20 166 30 L158 92 Q156 104 144 104 H56 Q44 104 42 92 Z" fill={SHELL} stroke={LINE} strokeWidth="1.5" />
      <path d="M52 36 H148 L142 90 H58 Z" fill={INK} stroke={accent} strokeWidth="10" strokeLinejoin="round" />
      <path d="M52 36 H148 L142 90 H58 Z" fill={INK} stroke={INK} strokeWidth="5" strokeLinejoin="round" />
      <rect className="office-blink" x="78" y="48" width="12" height="22" rx="2" fill={accent} />
      <rect className="office-blink" x="110" y="48" width="12" height="22" rx="2" fill={accent} />
      <path d="M90 80 Q100 86 110 80" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="round" />
      <g className="office-arm-left">
        <rect x="42" y="120" width="13" height="52" rx="6.5" fill={INK} />
        <circle cx="48.5" cy="178" r="8" fill={SHELL} stroke={LINE} />
      </g>
      <g className="office-arm-right">
        <rect x="145" y="120" width="13" height="52" rx="6.5" fill={INK} />
        <circle cx="151.5" cy="178" r="8" fill={SHELL} stroke={LINE} />
      </g>
    </g>
  );
}

function Certi({ accent }) {
  return (
    <g className="office-bot-float-alt">
      <path d="M38 24 V14 a12 12 0 0 1 24 0 V24" fill="none" stroke={METAL} strokeWidth="5" />
      <rect x="24" y="24" width="52" height="34" rx="10" fill="var(--office-shell-neutral)" stroke={LINE} />
      <rect x="30" y="33" width="40" height="16" rx="8" fill={INK} />
      <rect className="office-eye-scan" x="34" y="37" width="12" height="8" rx="4" fill={accent} />
      <rect x="28" y="60" width="44" height="38" rx="10" fill="var(--office-shell-neutral)" stroke={LINE} />
      <circle cx="50" cy="76" r="5" fill={accent} />
      <rect x="48" y="79" width="4" height="9" rx="2" fill={accent} />
      <rect x="16" y="64" width="9" height="28" rx="4.5" fill={INK} />
      <rect x="75" y="64" width="9" height="28" rx="4.5" fill={INK} />
      <circle cx="38" cy="110" r="9" fill={METAL} />
      <circle cx="62" cy="110" r="9" fill={METAL} />
    </g>
  );
}

function Dee({ accent }) {
  return (
    <g className="office-bot-float-alt">
      <g stroke={accent} strokeWidth="2" fill="none">
        <path d="M50 30 V8 M40 32 L24 14 M60 32 L76 14" />
      </g>
      <circle className="office-pulse" cx="50" cy="6" r="4" fill={accent} />
      <circle className="office-pulse" cx="22" cy="12" r="4" fill={accent} style={{ animationDelay: "0.6s" }} />
      <circle className="office-pulse" cx="78" cy="12" r="4" fill={accent} style={{ animationDelay: "1.2s" }} />
      <path d="M24 54 A26 26 0 0 1 76 54 Z" fill={SHELL} stroke={LINE} />
      <circle cx="42" cy="46" r="4.5" fill={INK} />
      <circle cx="58" cy="46" r="4.5" fill={INK} />
      <circle cx="42" cy="46" r="2" fill={accent} />
      <circle cx="58" cy="46" r="2" fill={accent} />
      <circle cx="50" cy="76" r="22" fill={SHELL} stroke={LINE} />
      <circle cx="50" cy="76" r="9" fill="none" stroke={accent} strokeWidth="2.5" />
      <g stroke={INK} strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M30 84 L14 100 L10 117 M70 84 L86 100 L90 117 M40 94 L34 117 M60 94 L66 117" />
      </g>
    </g>
  );
}

function Hedy({ accent }) {
  return (
    <g className="office-bot-float-alt">
      <rect x="26" y="8" width="48" height="40" rx="9" fill={SHELL} stroke={LINE} />
      <circle cx="40" cy="28" r="9" fill={INK} stroke={accent} strokeWidth="2.5" />
      <circle cx="60" cy="28" r="9" fill={INK} stroke={accent} strokeWidth="2.5" />
      <path d="M49 28 H51" stroke={accent} strokeWidth="2.5" />
      <circle className="office-blink" cx="40" cy="28" r="3" fill={accent} />
      <circle className="office-blink" cx="60" cy="28" r="3" fill={accent} />
      <rect x="30" y="52" width="40" height="46" rx="8" fill={SHELL} stroke={LINE} />
      <rect x="38" y="62" width="24" height="5" rx="2.5" fill={accent} opacity="0.8" />
      <rect x="38" y="72" width="18" height="5" rx="2.5" fill={METAL} />
      <rect x="38" y="82" width="22" height="5" rx="2.5" fill={METAL} />
      <rect x="18" y="58" width="8" height="30" rx="4" fill={INK} />
      <g className="office-clipboard">
        <rect x="72" y="60" width="22" height="30" rx="4" fill="var(--white)" stroke={METAL} />
        <rect x="79" y="57" width="8" height="5" rx="2" fill={METAL} />
        <path d="M77 71 l3 3 l6 -6" fill="none" stroke={accent} strokeWidth="2" />
        <rect x="77" y="79" width="12" height="3" rx="1.5" fill={LINE} />
      </g>
      <rect x="36" y="98" width="9" height="20" rx="4" fill={INK} />
      <rect x="55" y="98" width="9" height="20" rx="4" fill={INK} />
    </g>
  );
}

function Mailo({ accent }) {
  return (
    <g className="office-bot-float-alt">
      <path d="M22 12 H78 L72 2 H28 Z" fill={accent} />
      <rect x="20" y="12" width="60" height="36" rx="7" fill="var(--office-white)" stroke={LINE} />
      <path d="M22 16 L50 34 L78 16" fill="none" stroke={METAL} strokeWidth="2" />
      <circle cx="38" cy="40" r="3.5" fill={INK} />
      <circle cx="62" cy="40" r="3.5" fill={INK} />
      <path d="M28 52 H72 L76 96 H24 Z" fill={accent} opacity="0.9" />
      <rect x="40" y="62" width="20" height="14" rx="3" fill="var(--office-white)" />
      <path d="M42 64 L50 71 L58 64" fill="none" stroke={METAL} />
      <path d="M30 52 L70 96" stroke={INK} strokeWidth="3" />
      <rect x="12" y="56" width="9" height="28" rx="4.5" fill={INK} />
      <rect x="79" y="56" width="9" height="28" rx="4.5" fill={INK} />
      <g className="office-rotate">
        <circle cx="50" cy="107" r="12" fill={INK} />
        <path d="M50 97 V117 M40 107 H60" stroke={METAL} strokeWidth="2" />
      </g>
    </g>
  );
}

function Radi({ accent }) {
  return (
    <g className="office-bot-float-alt">
      <g className="office-dish">
        <path d="M12 30 Q50 -8 88 30 Z" fill={SHELL} stroke={LINE} />
        <path d="M50 11 V-4" stroke={accent} strokeWidth="2.5" />
        <circle cx="50" cy="-7" r="4" fill={accent} />
      </g>
      <rect x="35" y="34" width="30" height="17" rx="6" fill={INK} />
      <circle className="office-blink" cx="44" cy="42" r="3" fill={accent} />
      <circle className="office-blink" cx="56" cy="42" r="3" fill={accent} />
      <path d="M32 54 H68 L62 96 H38 Z" fill={SHELL} stroke={LINE} />
      <rect x="42" y="62" width="16" height="10" rx="3" fill={INK} />
      <circle className="office-pulse" cx="46" cy="67" r="2" fill={accent} />
      <circle className="office-pulse" cx="54" cy="67" r="2" fill="var(--office-amber)" style={{ animationDelay: "0.8s" }} />
      <rect x="20" y="58" width="9" height="28" rx="4.5" fill={INK} />
      <rect x="71" y="58" width="9" height="28" rx="4.5" fill={INK} />
      <path d="M44 96 L30 118 M56 96 L70 118 M50 96 V118" stroke={METAL} strokeWidth="4" strokeLinecap="round" />
    </g>
  );
}

const ROBOTS = { secu: Secu, radi: Radi, dee: Dee, certi: Certi, hedy: Hedy, mailo: Mailo };

export default function OfficeRobot({ type, accent }) {
  const Robot = ROBOTS[type];
  return <Robot accent={accent} />;
}
