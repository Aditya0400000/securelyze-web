import {
  CertificateIcon,
  ChevronDownIcon,
  CodeIcon,
  LockIcon,
  MailIcon,
  NetworkIcon,
} from "../pricing/PricingIcons";
import { ClockIcon } from "./ResourcesIcons";
import ResourcesSectionHeading from "./ResourcesSectionHeading";
import SmoothAnchor from "./SmoothAnchor";

const ACCENTS = {
  lime: {
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    number: "border-[#D1FAE5] bg-white text-[#047857]",
  },
  teal: {
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    number: "border-[#D1FAE5] bg-white text-[#047857]",
  },
  amber: {
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
    number: "border-[#D1FAE5] bg-white text-[#047857]",
  },
  periwinkle: {
    icon: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
    number: "border-[#D1FAE5] bg-white text-[#059669]",
  },
};

const DIFFICULTY_CLASSES = {
  Beginner: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
  Intermediate: "border-[#D1FAE5] bg-[#ECFDF5] text-[#047857]",
};

const TUTORIALS = [
  {
    id: "tutorial-check-https",
    number: "01",
    title: "How to check whether a website uses HTTPS",
    description:
      "A quick way to confirm the connection is encrypted and spot mixed-content warnings.",
    difficulty: "Beginner",
    time: "4 min",
    icon: LockIcon,
    accent: "lime",
    steps: [
      "Open the site in a browser and look at the address bar. An https:// address and a lock indicator mean the page is using a TLS connection. The exact icon varies by browser.",
      "Try the http:// version of the URL. A well-configured site should redirect to HTTPS rather than serve the page over an unencrypted connection.",
      "Open developer tools and review the Network or Security panel. Confirm that the main document and important resources load over HTTPS.",
      "Watch for mixed-content warnings. A page can be served over HTTPS while still loading some insecure resources.",
    ],
    takeaway:
      "HTTPS protects data in transit, but it does not guarantee that a site is trustworthy or free of vulnerabilities.",
  },
  {
    id: "tutorial-ssl-tls-certificates",
    number: "02",
    title: "Understanding SSL/TLS certificates",
    description:
      "Learn what a certificate proves and which details are worth checking.",
    difficulty: "Beginner",
    time: "6 min",
    icon: CertificateIcon,
    accent: "teal",
    steps: [
      "Open the site's certificate details from the browser's address bar or security panel.",
      "Confirm the certificate is valid, not expired, and issued for the hostname you are visiting.",
      "Check the issuer and certificate chain. Browsers usually flag problems automatically, but the details help you understand what is being presented.",
      "Remember that certificates can be renewed or replaced without changing the website's content, so a valid certificate is a point-in-time signal.",
    ],
    takeaway:
      "A certificate secures the connection to a domain; it does not by itself prove that the site is safe.",
  },
  {
    id: "tutorial-check-dns-records",
    number: "03",
    title: "How to check DNS records",
    description:
      "Use public DNS lookups to see which records route traffic and support email.",
    difficulty: "Intermediate",
    time: "7 min",
    icon: NetworkIcon,
    accent: "amber",
    steps: [
      "Use a public DNS lookup tool or a command-line tool such as dig or nslookup.",
      "Review A and AAAA records for web hosting, CNAME records for aliases, and MX records for email routing.",
      "Check TXT records for SPF, DKIM, DMARC, and domain-verification entries.",
      "Compare the records with the services you expect. Remove stale entries you no longer use, and protect the account that controls the records.",
    ],
    takeaway:
      "DNS changes can redirect traffic or affect email, so treat DNS access as part of your security perimeter.",
  },
  {
    id: "tutorial-http-security-headers",
    number: "04",
    title: "Understanding HTTP security headers",
    description:
      "Read the response headers that influence browser behavior and reduce some classes of attack.",
    difficulty: "Intermediate",
    time: "8 min",
    icon: CodeIcon,
    accent: "periwinkle",
    steps: [
      "Open developer tools, go to the Network panel, and select the main document request.",
      "Inspect response headers such as Strict-Transport-Security, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, and frame protections.",
      "A missing header is not automatically a vulnerability. Context, application behavior, and the threat model matter.",
      "Where possible, test policy changes in report-only mode before enforcing them, especially for Content-Security-Policy.",
    ],
    takeaway:
      "Headers are a layer of defense, not a replacement for secure application code.",
  },
  {
    id: "tutorial-spf-dkim-dmarc",
    number: "05",
    title: "Understanding SPF, DKIM, and DMARC",
    description:
      "See how the three email authentication records work together.",
    difficulty: "Intermediate",
    time: "9 min",
    icon: MailIcon,
    accent: "lime",
    steps: [
      "Look up the domain's TXT records and find the SPF record that begins with v=spf1. It lists the senders authorized to send mail for the domain.",
      "Find the DKIM selector and public key published in DNS. The selector is usually provided by your email provider.",
      "Find the DMARC record at _dmarc.yourdomain.com. It tells receiving servers what to do when authentication fails and where to send reports.",
      "Start DMARC with a monitoring policy before moving to quarantine or reject. Use the reports to find legitimate senders you may have missed.",
    ],
    takeaway:
      "SPF and DKIM provide evidence; DMARC turns that evidence into a policy and a reporting loop.",
  },
];

function TutorialItem({ tutorial, index }) {
  const accent = ACCENTS[tutorial.accent];
  const Icon = tutorial.icon;

  return (
    <details
      id={tutorial.id}
      open={index === 0}
      className="group scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-[#E2E8F0] bg-white shadow-[inset_0_1px_0_#FFFFFF,0_14px_34px_-34px_rgba(16,26,24,0.3)] transition-[border-color,box-shadow] duration-200 open:border-[#D1FAE5] open:shadow-[inset_0_1px_0_#FFFFFF,0_22px_46px_-34px_rgba(16,26,24,0.38)] motion-reduce:transition-none"
    >
      <summary className="flex cursor-pointer list-none flex-col gap-4 p-5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#475569] sm:p-6 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start gap-3.5">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent.icon}`}
          >
            <Icon className="h-[18px] w-[18px]" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#059669]">
                Tutorial {tutorial.number}
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.12em] ${DIFFICULTY_CLASSES[tutorial.difficulty]}`}
              >
                {tutorial.difficulty}
              </span>
              <span className="inline-flex items-center gap-1 text-[9.5px] font-medium text-[#64748B]">
                <ClockIcon className="h-3 w-3" />
                {tutorial.time}
              </span>
            </div>

            <h4 className="mt-2.5 text-[1rem] font-semibold leading-[1.3] tracking-[-0.025em] text-[#101A18]">
              {tutorial.title}
            </h4>
            <p className="mt-1.5 text-[12px] leading-[1.6] text-[#64748B]">
              {tutorial.description}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#FFFFFF] text-[#64748B] transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
          >
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </span>
        </div>
      </summary>

      <div className="border-t border-[#F1F5F9] bg-[#F8FAFC] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        <p className="text-[8.5px] font-semibold uppercase tracking-[0.16em] text-[#059669]">
          What you will learn
        </p>
        <ol className="mt-3 grid gap-2.5">
          {tutorial.steps.map((step, stepIndex) => (
            <li key={step} className="flex gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[8.5px] font-semibold ${accent.number}`}
              >
                {String(stepIndex + 1).padStart(2, "0")}
              </span>
              <p className="text-[12px] leading-[1.65] text-[#475569]">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-4 rounded-xl border border-[#D1FAE5] bg-[#ECFDF5] px-3.5 py-3">
          <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] text-[#047857]">
            Key takeaway
          </p>
          <p className="mt-1.5 text-[11.5px] leading-[1.65] text-[#475569]">
            {tutorial.takeaway}
          </p>
        </div>
      </div>
    </details>
  );
}

export default function ResourcesTutorials() {
  return (
    <section
      id="tutorials"
      aria-labelledby="tutorials-heading"
      className="scroll-mt-32"
    >
      <ResourcesSectionHeading
        id="tutorials-heading"
        as="h3"
        size="md"
        eyebrow="Explore / Tutorials"
        title="Short walkthroughs for checking the signals yourself."
        description="Five practical tutorials with the steps, context, and key takeaways you need to inspect common website security signals using public information."
      />

      <nav
        aria-label="Jump to a tutorial"
        className="mt-6 flex flex-wrap gap-2"
      >
        {TUTORIALS.map((tutorial) => (
          <SmoothAnchor
            key={tutorial.id}
            href={`#${tutorial.id}`}
            className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-[10px] font-semibold text-[#475569] transition-colors duration-150 hover:border-[#D1FAE5] hover:bg-[#ECFDF5] hover:text-[#183B32] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B32] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC] motion-reduce:transition-none"
          >
            <span className="font-mono text-[8.5px] font-semibold text-[#059669]">
              {tutorial.number}
            </span>
            {tutorial.title}
          </SmoothAnchor>
        ))}
      </nav>

      <div className="mt-6 space-y-3">
        {TUTORIALS.map((tutorial, index) => (
          <TutorialItem key={tutorial.id} tutorial={tutorial} index={index} />
        ))}
      </div>

      <p className="mt-5 max-w-[52rem] text-[10.5px] leading-[1.7] text-[#64748B]">
        These walkthroughs use publicly available information and standard
        browser or DNS tools. They are educational and do not change your
        website&apos;s configuration.
      </p>
    </section>
  );
}
