import {
  ArrowRightIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import { LockIcon } from "../pricing/PricingIcons";
import { BookOpenIcon, KeyIcon } from "./ResourcesIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import SmoothAnchor from "./SmoothAnchor";

const ACCENTS = {
  lime: {
    icon: "border-[#D7E9B0] bg-[#F2FADF] text-[#5C8414]",
    number: "border-[#DDE8C7] bg-[#F7FCEB] text-[#5C8414]",
    line: "bg-[#8ED13C]",
  },
  teal: {
    icon: "border-[#BFE9EC] bg-[#E9F8F9] text-[#2A7B83]",
    number: "border-[#CBEFF1] bg-[#F2FBFC] text-[#2A7B83]",
    line: "bg-[#7DD3D8]",
  },
  amber: {
    icon: "border-[#E3D1A1] bg-[#FBF3E0] text-[#8A6A1F]",
    number: "border-[#EADCB8] bg-[#FDF8EC] text-[#8A6A1F]",
    line: "bg-[#F2C94C]",
  },
  periwinkle: {
    icon: "border-[#D8DCF7] bg-[#F0F1FD] text-[#5B5BB0]",
    number: "border-[#DEE2FA] bg-[#F7F7FE] text-[#5B5BB0]",
    line: "bg-[#B9C3FF]",
  },
};

const BASICS = [
  {
    id: "what-website-security-means",
    number: "01",
    title: "What website security means",
    icon: ShieldIcon,
    accent: "lime",
    paragraphs: [
      "Website security is about protecting a website and the people who use it. That includes keeping the site available, preventing unauthorized changes, protecting data, and making sure visitors can connect safely.",
      "It is not a single product or setting. It is a set of decisions across hosting, software, accounts, configuration, and monitoring.",
    ],
    why: "A site can look fine to visitors while still having configuration or access-control gaps.",
  },
  {
    id: "common-website-security-risks",
    number: "02",
    title: "Common website security risks",
    icon: RadarIcon,
    accent: "amber",
    paragraphs: [
      "Common risks include outdated software, weak or reused passwords, misconfigured servers, exposed administrative pages, insecure forms, and phishing that targets account access.",
      "Many incidents start with a preventable gap rather than a sophisticated attack.",
    ],
    why: "Knowing the common failure points helps you prioritize basic protections.",
  },
  {
    id: "what-https-and-ssl-tls-do",
    number: "03",
    title: "What HTTPS and SSL/TLS do",
    icon: LockIcon,
    accent: "teal",
    paragraphs: [
      "HTTPS is the secure version of HTTP. It uses TLS, often still called SSL, to encrypt traffic between a visitor's browser and your website.",
      "A certificate helps the browser verify that it is connecting to the domain it requested and that the connection is encrypted.",
    ],
    why: "HTTPS protects data in transit, but it does not automatically make a website trustworthy or secure.",
  },
  {
    id: "what-dns-does",
    number: "04",
    title: "What DNS does",
    icon: NetworkIcon,
    accent: "periwinkle",
    paragraphs: [
      "DNS is the system that maps a domain name to the servers and services that handle it. Records can point web traffic, route email, verify domain ownership, and more.",
      "If DNS is changed incorrectly or an account is compromised, visitors and email can be redirected without a visible change to the website.",
    ],
    why: "DNS is part of your security perimeter, not just a technical setting.",
  },
  {
    id: "why-updates-and-authentication-matter",
    number: "05",
    title: "Why updates and strong authentication matter",
    icon: KeyIcon,
    accent: "lime",
    paragraphs: [
      "Updates fix known bugs and security flaws. Strong, unique passwords and multi-factor authentication make it harder for someone to take over an account even if a password is exposed.",
      "Administrative accounts, email, and DNS access deserve the strongest protections because they can affect the whole site.",
    ],
    why: "Updates and authentication close two of the most common paths to a serious incident.",
  },
];

function BasicArticle({ basic }) {
  const accent = ACCENTS[basic.accent];
  const Icon = basic.icon;

  return (
    <article
      id={basic.id}
      className="scroll-mt-28 rounded-[1.5rem] border border-[#DCE7F1] bg-white p-5 shadow-[inset_0_1px_0_#FFFFFF,0_14px_34px_-32px_rgba(7,29,52,0.32)] sm:p-6"
    >
      <div className="flex items-start gap-3.5">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.icon}`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <div className="min-w-0">
          <span
            className={`inline-flex h-5 items-center rounded-full border px-2 font-mono text-[9px] font-semibold tracking-[0.1em] ${accent.number}`}
          >
            {basic.number}
          </span>
          <h4 className="mt-2 text-[1.02rem] font-semibold leading-[1.3] tracking-[-0.025em] text-[#071D34]">
            {basic.title}
          </h4>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {basic.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[12.5px] leading-[1.72] text-[#526B7F]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#E8EFF5] bg-[#F8FAFC] px-3.5 py-3">
        <span
          aria-hidden="true"
          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.line}`}
        />
        <p className="text-[11.5px] leading-[1.65] text-[#405A6E]">
          <span className="font-semibold text-[#183044]">Why it matters: </span>
          {basic.why}
        </p>
      </div>
    </article>
  );
}

export default function SecurityBasicsContent() {
  return (
    <section
      id="beginners-security-basics"
      aria-labelledby="beginners-security-basics-heading"
      className="relative scroll-mt-28 overflow-hidden border-y border-[#E7EEF5] bg-[#F7FAFC] py-14 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(7,29,52,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(7,29,52,0.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ResourcesSectionHeading
          id="beginners-security-basics-heading"
          as="h3"
          size="md"
          eyebrow="Beginner's Security Basics"
          title="New to security? Start here."
          description="A plain-language introduction to the ideas behind the checks. No prior security background is required, and you can read the sections in order or jump to the question you have."
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-[#DDE8C7] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FCEB_100%)] p-5 shadow-[inset_0_1px_0_#FFFFFF,0_18px_44px_-38px_rgba(7,29,52,0.4)] sm:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D7E9B0] bg-white text-[#5C8414]">
                <BookOpenIcon className="h-[18px] w-[18px]" />
              </span>
              <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#6F9E13]">
                A beginner-friendly path
              </p>
              <h4 className="mt-2 text-[1.1rem] font-semibold leading-[1.3] tracking-[-0.025em] text-[#071D34]">
                No prior security background needed.
              </h4>
              <p className="mt-2 text-[12px] leading-[1.65] text-[#607386]">
                Read the five sections in order, or jump straight to the
                question you have.
              </p>

              <nav aria-label="Beginner security basics topics" className="mt-5">
                <ul className="space-y-1.5">
                  {BASICS.map((basic) => (
                    <li key={basic.id}>
                      <SmoothAnchor
                        href={`#${basic.id}`}
                        className="group flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors duration-150 hover:bg-white focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#36536C] motion-reduce:transition-none"
                      >
                        <span className="w-5 shrink-0 font-mono text-[9px] font-semibold text-[#7A8FA0]">
                          {basic.number}
                        </span>
                        <span className="min-w-0 flex-1 text-[11.5px] font-medium leading-[1.45] text-[#405A6E]">
                          {basic.title}
                        </span>
                        <ArrowRightIcon className="h-3 w-3 shrink-0 text-[#9AAAB7] transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                      </SmoothAnchor>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          <div className="space-y-3">
            {BASICS.map((basic) => (
              <BasicArticle key={basic.id} basic={basic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
