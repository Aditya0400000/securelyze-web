import "./ContactIllustration.css";

export default function ContactIllustration() {
  return (
    <div aria-hidden="true" className="contact-illustration-scene relative mx-auto w-full max-w-[32rem]">
      <div className="absolute inset-10 rounded-full bg-emerald/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-border bg-white/80 p-3 shadow-card sm:p-5">
        <div className="flex items-center gap-1.5 border-b border-border-subtle px-2 pb-3">
          <span className="size-1.5 rounded-full bg-emerald" />
          <span className="size-1.5 rounded-full bg-emerald/40" />
          <span className="size-1.5 rounded-full bg-border" />
          <span className="ml-auto text-[9px] font-semibold uppercase tracking-[0.16em] text-text-muted">Securelyze / Connect</span>
        </div>
        <svg viewBox="0 0 480 340" fill="none" className="h-auto w-full">
          <defs>
            <pattern id="contact-hub-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="var(--border)" />
            </pattern>
            <linearGradient id="contact-shield" x1="208" y1="133" x2="270" y2="216" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--emerald-light)" />
              <stop offset="1" stopColor="var(--emerald)" />
            </linearGradient>
          </defs>
          <rect width="480" height="340" fill="url(#contact-hub-grid)" opacity="0.55" />
          <circle cx="240" cy="174" r="113" stroke="var(--border)" />
          <circle cx="240" cy="174" r="85" stroke="var(--emerald)" strokeOpacity="0.15" />
          <g stroke="var(--emerald)" strokeWidth="1.5" strokeOpacity="0.5" className="contact-illustration-connection">
            <path d="M124 94C190 94 155 171 195 171" />
            <path d="M356 112C302 112 328 174 285 174" />
            <path d="M128 266C185 266 175 212 211 203" />
            <path d="M356 263C305 263 305 213 270 203" />
          </g>
          <circle cx="240" cy="174" r="61" fill="var(--soft-green)" className="contact-illustration-pulse" />
          <rect x="194" y="128" width="92" height="92" rx="26" fill="var(--charcoal)" />
          <path d="M240 145L263 154V173C263 190 252 201 240 205C228 201 217 190 217 173V154L240 145Z" fill="url(#contact-shield)" />
          <path d="M230 174L237 181L251 166" stroke="var(--charcoal)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <g className="contact-illustration-message">
            <rect x="37" y="57" width="128" height="77" rx="16" fill="var(--white)" stroke="var(--border)" />
            <rect x="51" y="72" width="37" height="28" rx="8" fill="var(--soft-green)" />
            <path d="M59 79H80V93H59V79ZM59 80L69.5 87L80 80" stroke="var(--dark-green)" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M99 79H148M99 88H133M53 113H144" stroke="var(--border)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g className="contact-illustration-message contact-illustration-message-alternate">
            <rect x="322" y="78" width="122" height="78" rx="16" fill="var(--white)" stroke="var(--border)" />
            <path d="M340 95H369V115H350L340 122V95Z" fill="var(--soft-green)" stroke="var(--emerald)" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M382 99H426M382 108H413M341 137H426" stroke="var(--border)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g className="contact-illustration-message contact-illustration-message-alternate">
            <rect x="50" y="240" width="126" height="60" rx="15" fill="var(--white)" stroke="var(--border)" />
            <circle cx="73" cy="262" r="8" fill="var(--soft-green)" />
            <path d="M92 259H155M92 268H134M67 285H151" stroke="var(--border)" strokeWidth="4" strokeLinecap="round" />
          </g>
          <g className="contact-illustration-message">
            <rect x="312" y="242" width="123" height="59" rx="15" fill="var(--dark-green)" />
            <path d="M330 259H415M330 269H393" stroke="var(--soft-green)" strokeOpacity="0.65" strokeWidth="4" strokeLinecap="round" />
            <circle cx="415" cy="285" r="3" fill="var(--emerald-light)" />
          </g>
          <g fill="var(--emerald)">
            <circle cx="239" cy="61" r="3" />
            <circle cx="351" cy="185" r="3" />
            <circle cx="230" cy="287" r="3" />
            <circle cx="128" cy="183" r="3" />
          </g>
        </svg>
        <div className="flex items-center justify-between gap-3 border-t border-border-subtle px-2 pt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-text-muted">
          <span>Questions. Ideas. Conversations.</span>
          <span className="size-1.5 shrink-0 rounded-full bg-emerald/60" />
        </div>
      </div>
    </div>
  );
}
