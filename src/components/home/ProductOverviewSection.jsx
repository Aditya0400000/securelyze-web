import ProductDashboard from "./ProductDashboard";
import HomeSectionBadge from "./HomeSectionBadge";
import "./ProductOverviewSection.css";

export default function ProductOverviewSection() {
  return (
    <section
      id="platform"
      aria-labelledby="product-overview-heading"
      className="home-product-overview relative isolate scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionBadge>
          What Securelyze does
        </HomeSectionBadge>
        <h2
          id="product-overview-heading"
          className="mt-5 max-w-4xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.045em] text-charcoal sm:text-[36px] lg:text-[44px]"
        >
          Check Security Settings. Discover Exposed Assets.
        </h2>
        <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
          Review important security configurations and explore the assets and
          services visible on the internet.
        </p>
        <ProductDashboard />
      </div>
    </section>
  );
}
