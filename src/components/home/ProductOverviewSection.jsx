import Link from "next/link";

import { PLATFORM_LOGIN_URL } from "@/lib/siteLinks";
import { RadarIcon } from "@/components/about/AboutIcons";
import {
  AssetDiscoveryPreview,
  ProductIcon,
  SecurityCheckPreview,
} from "./ProductPreviews";

function ProductCard({ title, description, icon, learnMoreHref, previewClassName = "flex-1", children }) {
  return (
    <article className="flex min-w-0 flex-col rounded-card border border-border bg-surface p-[18px] transition-[transform,border-color,box-shadow] duration-250 hover:border-emerald hover:shadow-[var(--shadow-card-ring)] motion-safe:hover:-translate-y-1.5 motion-reduce:transition-none sm:p-6">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="flex size-[38px] shrink-0 items-center justify-center rounded-lg border border-soft-green bg-soft-green/30 text-emerald-hover">
          {icon}
        </span>
        <h3 className="text-[19px] font-medium leading-tight tracking-[-0.02em] text-charcoal">
          {title}
        </h3>
      </div>
      <p className="mb-4 text-[13px] leading-[1.6] text-text-secondary">
        {description}
      </p>
      <div className={previewClassName}>{children}</div>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 md:flex-col md:items-start lg:flex-row lg:items-center">
        <Link
          href={PLATFORM_LOGIN_URL}
          className="btn-dark rounded-full! px-4! text-[13px]!"
        >
          Open {title}
        </Link>
        <Link
          href={learnMoreHref}
          aria-label={`Learn more about ${title}`}
          className="inline-flex min-h-11 items-center rounded-md text-[13px] font-medium text-emerald-hover underline-offset-4 transition-colors duration-200 hover:text-dark-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}

export default function ProductOverviewSection() {
  return (
    <section
      id="platform"
      aria-labelledby="product-overview-heading"
      className="scroll-mt-24 bg-white py-10 font-sans sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-soft-green bg-soft-green/30 px-3 py-1.5 text-xs font-medium text-emerald-hover">
          What Securelyze does
        </p>
        <h2
          id="product-overview-heading"
          className="mt-3 max-w-4xl text-balance text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-charcoal sm:text-[36px] lg:text-[44px]"
        >
          Two tools. One clear picture of your exposure.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-10">
          <ProductCard
            title="Website Security Check"
            description="Review the settings that protect every visitor to your site."
            icon={<ProductIcon name="shield" className="size-[19px]" />}
            learnMoreHref="/platform#website-security-check"
            previewClassName="flex flex-1"
          >
            <SecurityCheckPreview />
          </ProductCard>
          <ProductCard
            title="Asset Discovery"
            description="Find what is exposed before someone else does."
            icon={<RadarIcon className="size-[19px]" />}
            learnMoreHref="/platform/asset-discovery"
          >
            <AssetDiscoveryPreview />
          </ProductCard>
        </div>
      </div>
    </section>
  );
}
