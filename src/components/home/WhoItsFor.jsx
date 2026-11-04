import Link from "next/link";

const AUDIENCES = [
  {
    title: "Website owners",
    description: "See exposure clearly before it reaches your customers.",
    icon: "world",
    href: "/solutions/website-owners",
  },
  {
    title: "Developers",
    description: "Catch misconfigurations before you ship.",
    icon: "code",
    href: "/solutions/developers",
  },
  {
    title: "Small businesses",
    description: "A practical start without a security team.",
    icon: "building-store",
    href: "/solutions/small-businesses",
  },
  {
    title: "Security teams",
    description: "Keep assets, checks and findings organised.",
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-audience-icon={name}
      className="size-5.5 text-emerald transition-transform duration-250 ease-out motion-safe:group-hover:-translate-y-0.5 motion-reduce:transition-none"
    >
      {ICON_PATHS[name].map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

function AudienceCard({ title, description, icon, href }) {
  return (
    <Link
      href={href}
      className="group block h-full min-w-0 rounded-card border border-border bg-surface p-4 transition-[transform,border-color,box-shadow] duration-250 ease-out hover:border-emerald hover:shadow-[var(--shadow-card-ring)] focus-visible:border-emerald focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-safe:hover:-translate-y-1 motion-reduce:transition-none"
    >
      <AudienceIcon name={icon} />
      <h3 className="mb-1 mt-2.5 text-[15px] font-medium leading-snug text-charcoal">{title}</h3>
      <p className="text-[13px] leading-[1.55] text-text-secondary">{description}</p>
    </Link>
  );
}

export default function WhoItsFor() {
  return (
    <section id="who-its-for" aria-labelledby="who-its-for-heading" className="bg-white pb-8 pt-9 font-sans sm:pb-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-soft-green bg-soft-green/30 px-3 py-1.5 text-xs font-medium text-emerald-hover">
          Who it is for
        </p>
        <h2 id="who-its-for-heading" className="heading-2 mt-3 max-w-3xl text-balance">
          Built for the people who own the website
        </h2>
        <ul className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
