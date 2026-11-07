import Link from "next/link";
import HomeSectionBadge from "./HomeSectionBadge";
import AudiencePreview from "./AudiencePreviews";
import "./WhoItsFor.css";

const AUDIENCES = [
  {
    title: "Website Owners",
    description:
      "Review your domain settings and understand what is publicly visible.",
    icon: "world",
    href: "/solutions/website-owners",
  },
  {
    title: "Developers",
    description:
      "Check security configurations across websites, applications, and services.",
    icon: "code",
    href: "/solutions/developers",
  },
  {
    title: "Small Businesses",
    description:
      "Understand your online assets and review important security settings.",
    icon: "building-store",
    href: "/solutions/small-businesses",
  },
  {
    title: "Security Teams",
    description:
      "Explore internet-facing assets, configurations, and findings that may need attention.",
    icon: "shield-lock",
    href: "/solutions/security-teams",
  },
];

// Outline paths from the reference's Tabler Icons v3.42.0.
const ICON_PATHS = {
  world: [
    "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",
    "M3.6 9h16.8",
    "M3.6 15h16.8",
    "M11.5 3a17 17 0 0 0 0 18",
    "M12.5 3a17 17 0 0 1 0 18",
  ],
  code: ["M7 8l-4 4l4 4", "M17 8l4 4l-4 4", "M14 4l-4 16"],
  "building-store": [
    "M3 21l18 0",
    "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4",
    "M5 21l0 -10.15",
    "M19 21l0 -10.15",
    "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4",
  ],
  "shield-lock": [
    "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",
    "M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
    "M12 12l0 2.5",
  ],
};

function AudienceIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-audience-icon={name}
      className="size-5 text-emerald-hover"
    >
      {ICON_PATHS[name].map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

function AudienceCard({ title, description, icon, href }) {
  return (
    <Link
      href={href}
      aria-labelledby={`who-audience-title-${icon}`}
      aria-describedby={`who-audience-description-${icon}`}
      className="audience-feature-card flex h-full min-w-0 flex-col rounded-3xl border border-border bg-white p-5 shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-light"><AudienceIcon name={icon} /></span>
        <h3 id={`who-audience-title-${icon}`} className="text-[18px] font-semibold leading-tight tracking-[-0.03em] text-charcoal">{title}</h3>
      </div>
      <p id={`who-audience-description-${icon}`} className="mt-3 text-[14px] leading-[1.7] text-text-secondary">{description}</p>
      <div className="mt-auto pt-6"><AudiencePreview type={icon} /></div>
    </Link>
  );
}

export default function WhoItsFor() {
  return (
    <section id="who-its-for" aria-labelledby="who-its-for-heading" className="home-audiences relative isolate overflow-hidden bg-white py-16 font-sans sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HomeSectionBadge>
          Who it is for
        </HomeSectionBadge>
        <h2 id="who-its-for-heading" className="mt-5 max-w-4xl text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.045em] text-charcoal sm:text-[36px] lg:text-[44px]">
          Who Can Use Securelyze?
        </h2>
        <p className="mt-5 max-w-3xl text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
          Securelyze helps people responsible for websites, applications, and
          internet-facing infrastructure understand their security
          configurations and publicly visible assets.
        </p>
        <ul className="mt-9 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 xl:grid-cols-4">
          {AUDIENCES.map((audience) => (
            <li key={audience.href} className="min-w-0">
              <AudienceCard {...audience} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
