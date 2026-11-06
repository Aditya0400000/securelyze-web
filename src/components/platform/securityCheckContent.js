import {
  CertificateIcon,
  CodeIcon,
  NetworkIcon,
} from "../about/AboutIcons";
import { MailIcon } from "../pricing/PricingIcons";

export const SECURITY_CHECK_TOOLS = [
  {
    slug: "ssl-tls",
    title: "SSL/TLS Analysis",
    description:
      "Review certificate details and available HTTPS connection settings.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    slug: "dns-security",
    title: "DNS Security",
    description:
      "Review DNS records that connect your domain to websites, email, and other services.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    slug: "security-headers",
    title: "Security Headers",
    description:
      "Review HTTP response headers that help browsers apply security protections.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    slug: "email-security",
    title: "Email Security",
    description:
      "Review SPF, DKIM, and DMARC records used to help verify email senders.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

export const DNS_SECURITY_CONTENT = {
  slug: "dns-security",
  title: "DNS Security",
  eyebrow: "DNS & Domain Checks",
  heroTitle: "Understand Your Domain's DNS Settings",
  icon: NetworkIcon,
  heroDescription:
    "Review DNS records to understand how your domain connects to websites, email services, and other internet resources.",
  heroChecklist: [
    "A, AAAA, CNAME, MX, TXT, and NS records",
    "Name server and resolution context",
    "Mail-routing and sender-policy records",
    "Record values and configuration context",
  ],
  why: {
    heading: "Why DNS settings matter",
    paragraphs: [
      "DNS records help direct internet traffic and connect your domain to websites, email services, and other resources. They also carry information used for domain verification and email authentication.",
      "Reviewing these records helps you confirm that your domain points to the services you expect and makes it easier to spot settings that may need attention.",
    ],
    bullets: [
      "Understand where the domain points.",
      "Review how email is routed for the domain.",
      "Check which name servers manage the DNS zone.",
      "Inspect records used for verification and email authentication.",
    ],
    callout: {
      title: "DNS records serve different purposes",
      body: "A, AAAA, CNAME, MX, NS, and TXT records each provide different information. Reviewing them together gives a clearer picture of how a domain is configured.",
    },
  },
  review: {
    intro:
      "DNS records help direct internet traffic and connect your domain to different services. This page explains the record types and resolution details the check is designed to present.",
    items: [
      {
        title: "A & AAAA records",
        description:
          "Show the IPv4 and IPv6 addresses associated with a domain.",
      },
      {
        title: "CNAME records",
        description:
          "Point one hostname to another, such as a www hostname to the main domain.",
      },
      {
        title: "MX records",
        description:
          "Identify the mail servers responsible for receiving email for a domain.",
      },
      {
        title: "TXT records",
        description:
          "Store text-based information used for domain verification, email authentication, and other purposes.",
      },
      {
        title: "NS records",
        description:
          "Identify the name servers responsible for the domain's DNS configuration.",
      },
      {
        title: "Resolution path",
        description:
          "Shows how a DNS query moves from a resolver to the domain's authoritative name servers.",
      },
    ],
    note: "Record types and values shown depend on what is published for a domain.",
  },
  how: {
    intro:
      "The intended flow is simple: start with a domain, review the available records, and read the results in one summary.",
    steps: [
      {
        title: "Enter a domain",
        description:
          "Start with the domain whose DNS records and resolution context you want to review.",
      },
      {
        title: "Review the records",
        description:
          "Review the record types, values, and name server context available for the domain.",
      },
      {
        title: "Read the results",
        description:
          "Use the summary to understand how the domain is configured and what may need a closer look.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of DNS record context the analysis is designed to present.",
  },
  faqs: [
    {
      question: "Does this page run a live DNS lookup?",
      answer:
        "No. This page explains the capability, and the example panel uses sample data. It does not run a live lookup.",
    },
    {
      question: "What does this check examine?",
      answer:
        "It reviews public DNS records and resolution context for a domain, including A, AAAA, CNAME, MX, NS, and TXT records when they are available.",
    },
    {
      question: "What are DNS records?",
      answer:
        "DNS records help direct internet traffic and connect a domain to websites, email services, and other resources. Different record types serve different purposes.",
    },
    {
      question: "Why do MX and TXT records matter?",
      answer:
        "MX records identify the mail servers that receive email for a domain. TXT records can hold verification values, email-authentication policies, and other text-based information. Reviewing them helps confirm that mail and domain settings point where you expect.",
    },
    {
      question: "Does this check replace a full DNS audit?",
      answer:
        "No. It focuses on the public records and resolution context available to the check. Use it alongside a broader review of DNS, email, and infrastructure configuration.",
    },
  ],
  relatedIntro:
    "Continue with the other dedicated Website Security Check pages.",
};

export const SECURITY_HEADERS_CONTENT = {
  slug: "security-headers",
  title: "Security Headers",
  eyebrow: "HTTP Security Headers",
  heroTitle: "Review Your Website's Security Headers",
  icon: CodeIcon,
  heroDescription:
    "Check HTTP response headers that help browsers apply important security protections.",
  heroChecklist: [
    "Content-Security-Policy and framing controls",
    "HTTPS enforcement with HSTS",
    "Referrer and browser-feature controls",
    "Header values and configuration context",
  ],
  why: {
    heading: "Why security headers matter",
    paragraphs: [
      "HTTP security headers are instructions a server sends with each response. They help the browser decide which content can load, whether a page can be framed, and which browser features are available.",
      "Reviewing these headers helps you understand the browser-facing policy for a site. A missing or overly permissive header does not always mean there is an immediate problem, but it can widen the impact of some issues.",
    ],
    bullets: [
      "See how the site controls content sources and framing.",
      "Check whether HSTS tells browsers to use HTTPS.",
      "Review referrer and browser-feature restrictions.",
      "Understand the policy values a browser receives.",
    ],
    callout: {
      title: "Headers are one layer",
      body: "Security headers complement other controls. They do not replace secure application code, authentication, or server configuration.",
    },
  },
  review: {
    intro:
      "HTTP security headers are part of the response a web server sends to a browser. This page explains the headers the check is designed to review.",
    items: [
      {
        title: "Content-Security-Policy (CSP)",
        description:
          "Helps control which content sources a browser is allowed to load.",
      },
      {
        title: "Strict-Transport-Security (HSTS)",
        description:
          "Tells compatible browsers to use HTTPS for future connections to a website.",
      },
      {
        title: "X-Content-Type-Options",
        description:
          "Helps prevent browsers from interpreting certain resources as a different content type.",
      },
      {
        title: "Referrer-Policy",
        description:
          "Controls how much referrer information a browser shares when navigating between pages.",
      },
      {
        title: "Permissions-Policy",
        description:
          "Controls access to certain browser features and APIs.",
      },
      {
        title: "X-Frame-Options",
        description:
          "Helps control whether a page can be displayed inside a frame.",
      },
    ],
    note: "Header presence and values depend on the response returned for a domain.",
  },
  how: {
    intro:
      "The intended flow is simple: start with a domain, review the response headers, and read the browser policy context in one summary.",
    steps: [
      {
        title: "Enter a domain",
        description:
          "Start with the domain whose HTTP response headers you want to review.",
      },
      {
        title: "Review the headers",
        description:
          "Review the browser-facing headers and values returned for the domain.",
      },
      {
        title: "Read the results",
        description:
          "Use the summary to understand the site's browser-facing policy and what may need a closer look.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of response-header context the analysis is designed to present.",
  },
  faqs: [
    {
      question: "Does this page run a live header check?",
      answer:
        "No. This page explains the capability, and the example panel uses sample data. It does not run a live check.",
    },
    {
      question: "What does this check examine?",
      answer:
        "It reviews HTTP response headers that affect how browsers load content, handle connections, and allow browser features.",
    },
    {
      question: "Why are HTTP security headers important?",
      answer:
        "They help browsers apply protections such as restricting content sources, requiring HTTPS, and limiting framing or feature access. They are one part of a broader security configuration.",
    },
    {
      question: "Does a present header guarantee protection?",
      answer:
        "No. The header's value and the rest of the application configuration matter. A header being present is a starting point, not a complete assessment.",
    },
    {
      question: "Does this check replace a full security assessment?",
      answer:
        "No. It focuses on browser-facing response headers. Use it alongside the other Website Security Check pages and a broader review.",
    },
  ],
  relatedIntro:
    "Continue with the other dedicated Website Security Check pages.",
};

export const EMAIL_SECURITY_CONTENT = {
  slug: "email-security",
  title: "Email Security",
  eyebrow: "Email Security",
  heroTitle: "Check Your Domain's Email Security Settings",
  icon: MailIcon,
  heroDescription:
    "Review email authentication records that help receiving mail systems verify messages sent using your domain.",
  heroChecklist: [
    "SPF sender policy",
    "DKIM signing context",
    "DMARC policy and alignment",
    "Sender verification flow",
  ],
  why: {
    heading: "Why email authentication matters",
    paragraphs: [
      "Email authentication gives receiving mail systems a way to check whether a message that claims to come from your domain was authorized to do so.",
      "SPF, DKIM, and DMARC work together. SPF describes which mail servers are authorized to send email for a domain. DKIM uses a digital signature to help verify that a message was authorized and has not been altered. DMARC tells receivers how to handle messages that fail authentication and alignment checks.",
    ],
    bullets: [
      "See which sources are authorized to send email for the domain.",
      "Review the DKIM selector and public-key record.",
      "Check the DMARC policy and reporting destinations.",
      "Understand how alignment affects DMARC evaluation.",
    ],
    callout: {
      title: "SPF, DKIM, and DMARC work together",
      body: "A passing SPF result alone is not a complete email-authentication picture. DKIM, DMARC alignment, and the published policy all contribute.",
    },
  },
  review: {
    intro:
      "Email authentication records are published in DNS. This page explains the records and sender context the check is designed to review.",
    items: [
      {
        title: "SPF record",
        description:
          "Specifies which mail servers are authorized to send email for a domain.",
      },
      {
        title: "DKIM selector",
        description:
          "Identifies the public-key record used to verify a DKIM signature.",
      },
      {
        title: "DKIM signature",
        description:
          "Uses a digital signature to help verify that an email message was authorized and has not been altered in transit.",
      },
      {
        title: "DMARC policy",
        description:
          "Defines how receiving mail systems should handle messages that fail authentication and alignment checks.",
      },
      {
        title: "DMARC alignment",
        description:
          "Checks whether the domain used in SPF or DKIM matches the visible From domain.",
      },
      {
        title: "DMARC reporting",
        description:
          "Shows where DMARC reports are sent, when reporting addresses are configured.",
      },
    ],
    note: "Records and fields shown depend on the authentication records published for a domain.",
  },
  how: {
    intro:
      "The intended flow is simple: start with a domain, review the authentication records, and read the sender policy context in one summary.",
    steps: [
      {
        title: "Enter a domain",
        description:
          "Start with the domain whose email-authentication records you want to review.",
      },
      {
        title: "Review the records",
        description:
          "Review the SPF, DKIM, and DMARC records and related alignment information available for the domain.",
      },
      {
        title: "Read the results",
        description:
          "Use the summary to understand the domain's email-authentication configuration and what may need a closer look.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of authentication context the analysis is designed to present.",
  },
  faqs: [
    {
      question: "Does this page run a live email authentication check?",
      answer:
        "No. This page explains the capability, and the example panel uses sample data. It does not run a live check.",
    },
    {
      question: "What are SPF, DKIM, and DMARC?",
      answer:
        "They are email-authentication mechanisms. SPF lists authorized sending servers. DKIM uses a digital signature to help verify a message. DMARC ties authentication and alignment to a published policy and reporting destination.",
    },
    {
      question: "Why is email authentication important?",
      answer:
        "It gives receiving mail systems more information for evaluating whether a message sent using your domain was authorized. It does not, by itself, stop all phishing or spoofing.",
    },
    {
      question: "What does DMARC alignment mean?",
      answer:
        "Alignment checks whether the domain used in SPF or DKIM matches the visible From domain. DMARC uses those results when applying the published policy.",
    },
    {
      question: "Does this check replace a full email-security review?",
      answer:
        "No. It focuses on public authentication records. Use it alongside a review of mail flow, sending practices, and domain configuration.",
    },
  ],
  relatedIntro:
    "Continue with the other dedicated Website Security Check pages.",
};
