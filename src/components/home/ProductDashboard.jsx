"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";
import { ArrowRightIcon, RadarIcon } from "@/components/about/AboutIcons";
import { AssetDiscoveryPreview, ProductIcon, SecurityCheckPreview } from "./ProductPreviews";

const SERVICES = [
  {
    id: "security",
    title: "Website Security Check",
    description: "Review DNS records, SSL/TLS certificates, email authentication, HTTP security headers, and other supported security configurations.",
    learnMoreHref: "/platform#website-security-check",
    preview: SecurityCheckPreview,
  },
  {
    id: "assets",
    title: "Asset Discovery",
    description: "Discover subdomains, IP addresses, open ports, and exposed services to better understand your internet-facing assets.",
    learnMoreHref: "/platform/asset-discovery",
    preview: AssetDiscoveryPreview,
  },
];

function ServiceIcon({ service, className }) {
  return service === "security"
    ? <ProductIcon name="shield" className={className} />
    : <RadarIcon className={className} />;
}

export default function ProductDashboard() {
  const [selected, setSelected] = useState("security");
  const tabRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    let next;
    if (event.key === "ArrowDown") next = (index + 1) % SERVICES.length;
    else if (event.key === "ArrowUp") next = (index - 1 + SERVICES.length) % SERVICES.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = SERVICES.length - 1;
    else return;

    event.preventDefault();
    setSelected(SERVICES[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="product-dashboard-shell mt-9 overflow-hidden rounded-3xl border border-border bg-white shadow-card lg:mt-10 lg:grid lg:grid-cols-[minmax(0,.32fr)_minmax(0,.68fr)]">
      <div className="product-service-sidebar min-w-0 border-b border-border bg-white p-4 sm:p-6 lg:border-b-0 lg:border-r">
        <div role="tablist" aria-label="Securelyze services" aria-orientation="vertical" className="space-y-3">
          {SERVICES.map((service, index) => {
            const active = selected === service.id;
            return (
              <button
                key={service.id}
                ref={node => { tabRefs.current[index] = node; }}
                id={`product-tab-${service.id}`}
                type="button"
                role="tab"
                aria-labelledby={`product-name-${service.id}`}
                aria-describedby={`product-description-${service.id}`}
                aria-selected={active}
                aria-controls={`product-panel-${service.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setSelected(service.id)}
                onKeyDown={event => handleKeyDown(event, index)}
                className="product-service-option relative w-full cursor-pointer rounded-xl border px-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring"
              >
                <span className="flex items-center gap-2.5">
                  <span className={`product-service-icon flex size-9 shrink-0 items-center justify-center rounded-lg border bg-white ${active ? "border-emerald/20 text-emerald-hover" : "border-border text-text-muted"}`}>
                    <ServiceIcon service={service.id} className="size-4" />
                  </span>
                  <span id={`product-name-${service.id}`} className="min-w-0 flex-1 text-[15px] font-semibold leading-5 tracking-[-0.025em] text-charcoal">{service.title}</span>
                  <ArrowRightIcon className={`size-4 shrink-0 ${active ? "text-emerald-hover" : "text-text-muted/60"}`} />
                </span>
                <span id={`product-description-${service.id}`} className="mt-3 block text-[13px] leading-[1.7] text-text-secondary">{service.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="product-dashboard-panels min-w-0 bg-light/80 p-4 sm:p-6 lg:p-7">
        {SERVICES.map(service => {
          const active = selected === service.id;
          const Preview = service.preview;
          return (
            <div
              key={service.id}
              id={`product-panel-${service.id}`}
              role="tabpanel"
              aria-labelledby={`product-tab-${service.id}`}
              aria-hidden={!active}
              inert={!active}
              tabIndex={active ? 0 : -1}
              data-active={active}
              className="product-dashboard-panel rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-4 focus-visible:ring-offset-light"
            >
              <div className="mb-4 flex items-center gap-2.5 text-charcoal">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-emerald/15 bg-white shadow-sm"><ServiceIcon service={service.id} className="size-[18px] text-emerald-hover" /></span>
                <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.03em] sm:text-xl">{service.title}</h3>
              </div>
              <Preview />
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
                <Link href={PLATFORM_LOGIN_URL} className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-btn bg-emerald px-5 text-[13px] font-semibold tracking-[-0.01em] text-charcoal shadow-btn transition-[transform,background-color,box-shadow] duration-200 hover:bg-emerald-hover hover:shadow-[var(--shadow-btn-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none">
                  Open {service.title}
                </Link>
                <Link href={service.learnMoreHref} aria-label={`Learn more about ${service.title}`} className="inline-flex h-12 items-center justify-center rounded-btn border border-dark-green/20 bg-white px-5 text-[13px] font-semibold text-dark-green shadow-sm transition-[transform,border-color,background-color] duration-200 hover:border-emerald/55 hover:bg-soft-green/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-safe:hover:-translate-y-px motion-reduce:transition-none">
                  Learn more
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
