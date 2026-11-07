"use client";

import { useId, useState } from "react";
import { CodeIcon, NetworkIcon } from "@/components/about/AboutIcons";
import { ProductIcon } from "./ProductPreviews";

function FlowIcon({ type, className = "size-5" }) {
  if (type === "assess") return <ProductIcon name="shield" className={className} />;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {type === "scan" ? <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></> : <><path d="m12 3-9 5 9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>}
    </svg>
  );
}

const WORKFLOW = [
  { id: "scan", title: "Scan", description: "Review domain settings and security configurations." },
  { id: "discover", title: "Discover", description: "Explore internet-facing assets and services." },
  { id: "assess", title: "Assess", description: "Review results and identify what needs attention." },
];

const SECURITY_LAYERS = [
  { id: "tls", label: "SSL/TLS", detail: "Certificate & HTTPS", icon: "lock" },
  { id: "dns", label: "DNS", detail: "DNS records", icon: NetworkIcon },
  { id: "headers", label: "Security Headers", detail: "HTTP response headers", icon: CodeIcon, attention: true },
  { id: "email", label: "Email Security", detail: "SPF / DKIM / DMARC", icon: "mail" },
];

function ExampleIndicator({ attention }) {
  return (
    <span className={`scan-flow-indicator flex size-5 shrink-0 items-center justify-center ${attention ? "text-[var(--status-warning-text)]" : "text-emerald-hover"}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {attention ? <><path d="m12 3 10 17H2L12 3Z" fill="var(--status-warning-bg)" /><path d="M12 9v4m0 3h.01" /></> : <><circle cx="12" cy="12" r="9" fill="var(--soft-green)" /><path d="m8 12 2.5 2.5L16 9" /></>}
      </svg>
      <span className="sr-only">{attention ? "Example attention indicator" : "Example check indicator"}</span>
    </span>
  );
}

export default function SecurityScanFlow() {
  const [activeStep, setActiveStep] = useState("scan");
  // One SSR-safe prefix keeps every accessibility relationship instance-local.
  const instanceId = useId();
  const illustrationId = `${instanceId}-security-flow-illustration`;
  const captionId = `${instanceId}-security-scan-flow-caption`;

  return (
    <div className="scan-flow-composition mt-8 rounded-3xl border border-border bg-white/70 p-4 shadow-card sm:p-6 lg:p-7" data-active-step={activeStep}>
      <div className="grid min-w-0 items-center gap-6 md:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:gap-8">
        <ol aria-label="Security scan workflow" className="scan-flow-workflow">
          {WORKFLOW.map((step, index) => (
            <li key={step.id} className="scan-flow-step">
              <button
                type="button"
                aria-pressed={activeStep === step.id}
                aria-labelledby={`${instanceId}-scan-flow-step-${step.id}`}
                aria-describedby={`${instanceId}-scan-flow-description-${step.id}`}
                aria-controls={illustrationId}
                onClick={() => setActiveStep(step.id)}
                className="scan-flow-step-button"
              >
                <span className="scan-flow-step-icon">
                  <FlowIcon type={step.id} className="size-6" />
                  <span aria-hidden="true" className="scan-flow-step-number">0{index + 1}</span>
                </span>
                <span className="scan-flow-step-copy">
                  <span id={`${instanceId}-scan-flow-step-${step.id}`} className="block text-[17px] font-semibold leading-6 tracking-[-0.025em] text-charcoal">{step.title}</span>
                  <span id={`${instanceId}-scan-flow-description-${step.id}`} className="mt-1.5 block text-[13px] leading-[1.65] text-text-secondary">{step.description}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>

      <figure id={illustrationId} aria-labelledby={captionId} className="min-w-0">
        <div className="mx-auto mb-2 flex w-full max-w-[38rem] justify-end">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white/80 px-2 py-1 text-[10px] font-medium text-text-muted">
            <span aria-hidden="true" className="size-1 rounded-full bg-emerald-hover" />Sample data
          </span>
        </div>
        <div className="scan-flow-scene mx-auto w-full max-w-[38rem]">
          <svg aria-hidden="true" viewBox="0 0 600 360" preserveAspectRatio="none" fill="none" className="scan-flow-connections">
            <path className="scan-flow-path scan-flow-path--scan" d="M230 86C230 123 251 146 277 163" />
            <path className="scan-flow-path scan-flow-path--discover" d="M392 105C371 126 345 149 325 166" />
            <path className="scan-flow-path scan-flow-path--assess" d="M234 273C237 233 259 213 278 196" />
            <path className="scan-flow-path scan-flow-path--assess" d="M402 290C383 250 350 219 326 197" />
          </svg>
          <div aria-hidden="true" className="scan-flow-hub">
            <div className="scan-flow-shield">
              <ProductIcon name="shield" className="size-14 text-emerald-hover" />
            </div>
          </div>
          <ul aria-label="Illustrative security configuration checks" className="scan-flow-layers">
            {SECURITY_LAYERS.map(({ id, label, detail, icon: Icon, attention }) => (
              <li key={id} className={`scan-flow-panel scan-flow-panel--${id}`}>
                <span className="scan-flow-panel-icon">
                  {typeof Icon === "string" ? <ProductIcon name={Icon} className="size-[18px]" /> : <Icon className="size-[18px]" />}
                </span>
                <span className="scan-flow-panel-copy">
                  <span className="block text-[13px] font-semibold leading-[1.35] tracking-[-0.015em] text-charcoal">{label}</span>
                  <span className="mt-1 block text-[10px] leading-[1.5] text-text-muted">{detail}</span>
                </span>
                <ExampleIndicator attention={attention} />
              </li>
            ))}
          </ul>
        </div>
        <figcaption id={captionId} className="mx-auto mt-3 max-w-[38rem] text-center text-[11px] leading-relaxed text-text-muted">
          Illustration of how the work is organized. Results shown are examples.
        </figcaption>
      </figure>
      </div>
    </div>
  );
}
