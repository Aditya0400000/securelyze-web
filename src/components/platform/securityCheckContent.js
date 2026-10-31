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
    description: "Certificate, HTTPS, and TLS configuration context.",
    href: "/platform/website-security-check/ssl-tls",
    icon: CertificateIcon,
  },
  {
    slug: "dns-security",
    title: "DNS Security",
    description: "DNS records, nameservers, and resolution context.",
    href: "/platform/website-security-check/dns-security",
    icon: NetworkIcon,
  },
  {
    slug: "security-headers",
    title: "Security Headers",
    description: "Browser-facing HTTP security headers and policy.",
    href: "/platform/website-security-check/security-headers",
    icon: CodeIcon,
  },
  {
    slug: "email-security",
    title: "Email Security",
    description: "SPF, DKIM, and DMARC sender authentication signals.",
    href: "/platform/website-security-check/email-security",
    icon: MailIcon,
  },
];

export const DNS_SECURITY_CONTENT = {
  slug: "dns-security",
  title: "DNS Security",
  icon: NetworkIcon,
  heroDescription:
    "Review the DNS records and resolution context that help browsers, mail systems, and other services find and trust your domain.",
  heroNote:
    "This page is an illustrative preview of the DNS Security experience. It does not run a live DNS lookup.",
  heroChecklist: [
    "A, AAAA, CNAME, MX, TXT, and NS records",
    "Resolution path and nameserver context",
    "Mail-routing and sender-policy records",
    "Configuration details that are easy to miss",
  ],
  why: {
    paragraphs: [
      "DNS is the layer that tells browsers and other services where your domain points. It also carries records that influence email delivery, domain verification, and service configuration.",
      "When DNS records drift from the infrastructure you actually use, visitors and mail systems can be sent to the wrong place—or to a service you no longer control.",
    ],
    bullets: [
      "Directs visitors to the correct web infrastructure.",
      "Carries mail-routing and sender-verification records.",
      "Surfaces stale, unexpected, or duplicate records.",
      "Makes domain configuration easier to review and maintain.",
    ],
    callout: {
      title: "DNS is more than an A record",
      body: "A, AAAA, CNAME, MX, TXT, and NS records each serve a different purpose. Reviewing them together gives a clearer picture of how a domain is configured.",
    },
  },
  review: {
    intro:
      "The DNS Security preview is designed to present the records and resolution context available for a domain. The areas below describe the intended review; the sample results later on this page are illustrative.",
    items: [
      {
        title: "A & AAAA records",
        description:
          "IPv4 and IPv6 addresses published for the domain and its hostnames.",
      },
      {
        title: "CNAME records",
        description:
          "Aliases that point one hostname to another, including common www and service hostnames.",
      },
      {
        title: "MX records",
        description:
          "Mail exchangers that receive email for the domain, with their priority values.",
      },
      {
        title: "TXT records",
        description:
          "Verification, policy, and other text records published by the domain.",
      },
      {
        title: "NS records",
        description:
          "The authoritative nameservers responsible for the domain's DNS zone.",
      },
      {
        title: "Resolution path",
        description:
          "How a query moves from a resolver to the authoritative nameserver.",
      },
    ],
    note: "Fields shown depend on the records and resolution data available for a domain.",
  },
  how: {
    intro:
      "The intended flow is simple: start with a domain, review the records, and read the resolution context in one summary.",
    steps: [
      {
        title: "Domain entry",
        description:
          "Start with the domain whose DNS records and resolution context you want to review.",
      },
      {
        title: "Record review",
        description:
          "Review the record types, values, and nameserver context available for the domain.",
      },
      {
        title: "Results",
        description:
          "See record coverage, sample values, and the resolution path in one summary.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a domain or run a live DNS lookup.",
  },
  example: {
    intro:
      "The panel below shows the kind of DNS record context the analysis is designed to present. Every value is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live DNS lookup?",
      answer:
        "No. The records and resolution values on this page are illustrative sample data. The current Website Security Check experience is a preview, and live DNS lookups are not available yet.",
    },
    {
      question: "Which DNS records can be reviewed?",
      answer:
        "The preview is designed to show common record types such as A, AAAA, CNAME, MX, TXT, and NS when those records are available.",
    },
    {
      question: "Why do MX and TXT records matter?",
      answer:
        "MX records tell mail systems where to deliver email. TXT records can carry sender policies, verification values, and other configuration. Reviewing them helps catch misrouting and policy gaps.",
    },
    {
      question: "Does DNS Security replace a full DNS audit?",
      answer:
        "No. It focuses on the public records and resolution context available to the check. Use it alongside a broader DNS and infrastructure review.",
    },
    {
      question: "How often should DNS records be reviewed?",
      answer:
        "Review them after infrastructure changes, mail-provider changes, domain migrations, and at regular intervals to catch stale or unexpected records.",
    },
  ],
  relatedIntro:
    "Continue with the other dedicated Website Security Check pages.",
};

export const SECURITY_HEADERS_CONTENT = {
  slug: "security-headers",
  title: "Security Headers",
  icon: CodeIcon,
  heroDescription:
    "Review the HTTP response headers that tell browsers how to handle content, connections, and sensitive features.",
  heroNote:
    "This page is an illustrative preview of the Security Headers experience. It does not run a live header check.",
  heroChecklist: [
    "Content and framing policy",
    "HTTPS enforcement with HSTS",
    "Referrer and browser-feature controls",
    "Configuration gaps and policy context",
  ],
  why: {
    paragraphs: [
      "Security headers are instructions a server sends with each response. They help the browser decide what content can load, whether the site can be framed, and which features are available.",
      "A missing or overly permissive header does not always create an immediate problem, but it can widen the impact of other issues. Reviewing headers makes browser-facing policy easier to see.",
    ],
    bullets: [
      "Reduce exposure to content injection and framing.",
      "Encourage HTTPS with Strict-Transport-Security.",
      "Control referrer and browser-feature access.",
      "Make browser behavior more predictable.",
    ],
    callout: {
      title: "Headers are one layer",
      body: "Security headers complement other controls. They do not replace secure application code, authentication, or server configuration.",
    },
  },
  review: {
    intro:
      "The Security Headers preview is designed to present the browser-facing headers returned for a domain. The areas below describe the intended review; the sample results later on this page are illustrative.",
    items: [
      {
        title: "Content-Security-Policy",
        description:
          "Controls which sources can load scripts, styles, frames, and other content.",
      },
      {
        title: "Strict-Transport-Security",
        description:
          "Tells browsers to prefer HTTPS for future requests to the site.",
      },
      {
        title: "X-Content-Type-Options",
        description:
          "Prevents browsers from MIME-sniffing responses away from the declared type.",
      },
      {
        title: "Referrer-Policy",
        description:
          "Controls how much referrer information is shared with other sites.",
      },
      {
        title: "Permissions-Policy",
        description:
          "Limits access to browser features such as camera, microphone, and geolocation.",
      },
      {
        title: "Frame protection",
        description:
          "Uses X-Frame-Options or CSP frame-ancestors to control whether the site can be embedded.",
      },
    ],
    note: "Fields shown depend on the response headers available for a domain.",
  },
  how: {
    intro:
      "The intended flow is simple: start with a domain, review the response headers, and read the browser policy context in one summary.",
    steps: [
      {
        title: "Domain entry",
        description:
          "Start with the domain whose HTTP response headers you want to review.",
      },
      {
        title: "Header review",
        description:
          "Review the browser-facing headers and policy values returned for the domain.",
      },
      {
        title: "Results",
        description:
          "See header coverage, sample values, and configuration context in one summary.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a domain or run a live header check.",
  },
  example: {
    intro:
      "The panel below shows the kind of response-header context the analysis is designed to present. Every value is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live header check?",
      answer:
        "No. The header values on this page are illustrative sample data. The current Website Security Check experience is a preview, and live header checks are not available yet.",
    },
    {
      question: "Which security headers can be reviewed?",
      answer:
        "The preview is designed to show common headers such as Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and frame-protection headers.",
    },
    {
      question: "Does a present header guarantee protection?",
      answer:
        "No. A header's value and the rest of the application configuration matter. Presence is a starting point, not a complete assessment.",
    },
    {
      question: "Why is Content-Security-Policy important?",
      answer:
        "It gives the browser a policy for which sources can load content. A well-scoped policy can reduce the impact of some injection issues, but it needs careful testing.",
    },
    {
      question: "Does Security Headers replace a full security assessment?",
      answer:
        "No. It focuses on browser-facing response headers. Use it alongside the other Website Security Check tools and a broader review.",
    },
  ],
  relatedIntro:
    "Continue with the other dedicated Website Security Check pages.",
};

export const EMAIL_SECURITY_CONTENT = {
  slug: "email-security",
  title: "Email Security",
  icon: MailIcon,
  heroDescription:
    "Review the SPF, DKIM, and DMARC records that help receiving mail systems verify senders and reduce spoofing risk.",
  heroNote:
    "This page is an illustrative preview of the Email Security experience. It does not run a live email authentication check.",
  heroChecklist: [
    "SPF sender policy",
    "DKIM signing context",
    "DMARC policy and alignment",
    "Sender verification flow",
  ],
  why: {
    paragraphs: [
      "Email authentication gives receiving mail systems a way to check whether a message that claims to come from your domain was actually authorized to do so.",
      "SPF, DKIM, and DMARC work together. SPF describes authorized sending sources, DKIM signs messages, and DMARC ties those signals to a policy and reporting destination.",
    ],
    bullets: [
      "Reduce phishing and spoofing risk.",
      "Give receivers a clear policy for unauthenticated mail.",
      "Protect brand trust with visible sender configuration.",
      "Surface missing or misaligned authentication records.",
    ],
    callout: {
      title: "SPF, DKIM, and DMARC work together",
      body: "A passing SPF result alone is not a complete email-authentication picture. Alignment, DKIM validation, and a DMARC policy all contribute.",
    },
  },
  review: {
    intro:
      "The Email Security preview is designed to present the public authentication records and sender context available for a domain. The areas below describe the intended review; the sample results later on this page are illustrative.",
    items: [
      {
        title: "SPF record",
        description:
          "The published sender policy and the sources it authorizes.",
      },
      {
        title: "SPF alignment",
        description:
          "Whether the envelope sender aligns with the visible From domain.",
      },
      {
        title: "DKIM selector",
        description:
          "The selector and public-key record used to verify message signatures.",
      },
      {
        title: "DKIM signing context",
        description:
          "Whether messages are signed and the signature validates.",
      },
      {
        title: "DMARC policy",
        description:
          "The published policy for unauthenticated mail, such as none, quarantine, or reject.",
      },
      {
        title: "DMARC reporting",
        description:
          "Aggregate and forensic report destinations, where configured.",
      },
    ],
    note: "Fields shown depend on the authentication records available for a domain.",
  },
  how: {
    intro:
      "The intended flow is simple: start with a domain, review the authentication records, and read the sender policy context in one summary.",
    steps: [
      {
        title: "Domain entry",
        description:
          "Start with the domain whose email-authentication records you want to review.",
      },
      {
        title: "Authentication review",
        description:
          "Review SPF, DKIM, and DMARC records and the context available for the domain.",
      },
      {
        title: "Results",
        description:
          "See sample authentication results, alignment, and policy context in one summary.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a domain or run a live email authentication check.",
  },
  example: {
    intro:
      "The panel below shows the kind of authentication context the analysis is designed to present. Every value is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live email authentication check?",
      answer:
        "No. The SPF, DKIM, and DMARC values on this page are illustrative sample data. The current Website Security Check experience is a preview, and live email authentication checks are not available yet.",
    },
    {
      question: "What is the difference between SPF, DKIM, and DMARC?",
      answer:
        "SPF authorizes sending sources, DKIM signs messages so receivers can verify integrity, and DMARC ties authentication to a policy and reporting destination.",
    },
    {
      question: "What does DMARC alignment mean?",
      answer:
        "Alignment checks whether the domain used in SPF or DKIM matches the visible From domain. Alignment is central to how DMARC evaluates a message.",
    },
    {
      question: "Is a DMARC policy of none enough?",
      answer:
        "A none policy asks receivers to take no action on unauthenticated mail. It can be a starting point for monitoring, but it does not enforce protection.",
    },
    {
      question: "Does Email Security replace a full email-security review?",
      answer:
        "No. It focuses on public authentication records. Use it alongside a broader review of mail flow, sending practices, and domain configuration.",
    },
  ],
  relatedIntro:
    "Continue with the other dedicated Website Security Check pages.",
};
