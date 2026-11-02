import {
  AssetsIcon,
  CertificateIcon,
  CodeIcon,
  CompassIcon,
  DeveloperIcon,
  GlobeIcon,
  NetworkIcon,
  RadarIcon,
  ShieldIcon,
} from "../about/AboutIcons";
import {
  EyeIcon,
  LayersIcon,
  MailIcon,
} from "../pricing/PricingIcons";

const INFORMATIONAL_NOTE =
  "The current pages are informational and use clearly labelled illustrative examples. They do not run a live scan or display real scan results.";

const HERO_CARD_FOOTER =
  "Informational pages with clearly labelled sample data.";

export const SOLUTION_AUDIENCE_CONTENT = {
  developers: {
    id: "developers",
    current: "Developers",
    title: "Technical context for the configuration you ship.",
    description:
      "Review the public details behind TLS, DNS, HTTPS, and HTTP security headers during development, debugging, and review. Securelyze brings the context together without adding noise to your workflow.",
    note: INFORMATIONAL_NOTE,
    primary: {
      label: "Explore Website Security Check",
      href: "/platform#website-security-check",
    },
    secondary: {
      label: "Explore Asset Discovery",
      href: "/platform/asset-discovery",
    },
    heroCard: {
      eyebrow: "Developer view",
      title: "The layers worth checking",
      icon: DeveloperIcon,
      items: [
        {
          icon: CertificateIcon,
          title: "TLS & HTTPS",
          detail: "Certificate and connection context.",
        },
        {
          icon: NetworkIcon,
          title: "DNS records",
          detail: "Routing and resolution details.",
        },
        {
          icon: CodeIcon,
          title: "HTTP headers",
          detail: "Browser-facing security policy.",
        },
        {
          icon: RadarIcon,
          title: "Asset context",
          detail: "Public hosts and services.",
        },
      ],
      footer: HERO_CARD_FOOTER,
    },
    review: {
      title: "What you can review",
      description:
        "Move from a domain to the configuration details that shape how your site is delivered and protected.",
      cards: [
        {
          title: "SSL/TLS Analysis",
          description:
            "Certificate, HTTPS, and TLS configuration context.",
          href: "/platform/website-security-check/ssl-tls",
          icon: CertificateIcon,
        },
        {
          title: "DNS Security",
          description:
            "DNS records, resolution context, and related signals.",
          href: "/platform/website-security-check/dns-security",
          icon: NetworkIcon,
        },
        {
          title: "Security Headers",
          description:
            "Browser-facing headers and the context around them.",
          href: "/platform/website-security-check/security-headers",
          icon: CodeIcon,
        },
        {
          title: "Asset Discovery",
          description:
            "Public domains, subdomains, hosts, and services.",
          href: "/platform/asset-discovery",
          icon: RadarIcon,
        },
      ],
    },
    process: {
      title: "How it helps",
      description:
        "Use a consistent review path during development, debugging, and pre-release checks.",
      steps: [
        {
          title: "Start with the domain you ship.",
          description:
            "Use the domain or hostname that represents the environment you are reviewing.",
        },
        {
          title: "Review configuration context.",
          description:
            "Look at the certificate, DNS, header, and asset details that shape the public surface.",
        },
        {
          title: "Carry the context into your workflow.",
          description:
            "Use what you find to guide fixes, reviews, or questions for the team that manages the environment.",
        },
      ],
    },
    useCases: {
      title: "Where it fits",
      description: "A technical view that supports the work you already do.",
      items: [
        {
          title: "During feature work.",
          description:
            "Keep public configuration details close when shipping changes that affect delivery.",
          icon: CodeIcon,
        },
        {
          title: "Before a release.",
          description:
            "Review the security context of the environment you are about to publish.",
          icon: ShieldIcon,
        },
        {
          title: "When debugging.",
          description:
            "Use a structured view of TLS, DNS, headers, and assets to narrow down what changed.",
          icon: CompassIcon,
        },
      ],
    },
    closing: {
      title: "Keep technical context close to the work.",
      description:
        "Start with the Website Security Check overview, then explore the asset context that supports your review.",
      primary: {
        label: "Explore Website Security Check",
        href: "/platform#website-security-check",
      },
      secondary: {
        label: "Explore Asset Discovery",
        href: "/platform/asset-discovery",
      },
    },
  },

  smallBusinesses: {
    id: "small-businesses",
    current: "Small Businesses",
    title: "A practical starting point for a safer website.",
    description:
      "Build a clear view of the security basics without adding complexity. Securelyze brings SSL/TLS, DNS, security headers, and email context into a practical starting point for small teams.",
    note: INFORMATIONAL_NOTE,
    primary: {
      label: "Explore Website Security Check",
      href: "/platform#website-security-check",
    },
    secondary: {
      label: "Explore Asset Discovery",
      href: "/platform/asset-discovery",
    },
    heroCard: {
      eyebrow: "Small team view",
      title: "Start with the basics",
      icon: CompassIcon,
      items: [
        {
          icon: CertificateIcon,
          title: "SSL/TLS",
          detail: "Certificate and HTTPS context.",
        },
        {
          icon: NetworkIcon,
          title: "DNS",
          detail: "The records that route your domain.",
        },
        {
          icon: CodeIcon,
          title: "Security headers",
          detail: "Browser settings that shape protection.",
        },
        {
          icon: MailIcon,
          title: "Email security",
          detail: "SPF, DKIM, and DMARC context.",
        },
      ],
      footer: HERO_CARD_FOOTER,
    },
    review: {
      title: "What you can review",
      description:
        "Start with the checks that shape a safer website, then use the context to decide what may need attention.",
      cards: [
        {
          title: "SSL/TLS Analysis",
          description:
            "Certificate, HTTPS, and TLS configuration context.",
          href: "/platform/website-security-check/ssl-tls",
          icon: CertificateIcon,
        },
        {
          title: "DNS Security",
          description:
            "DNS records and the context that supports a healthy domain.",
          href: "/platform/website-security-check/dns-security",
          icon: NetworkIcon,
        },
        {
          title: "Security Headers",
          description:
            "Browser-facing headers that help protect a site.",
          href: "/platform/website-security-check/security-headers",
          icon: CodeIcon,
        },
        {
          title: "Email Security",
          description:
            "SPF, DKIM, and DMARC context for the domain used to send email.",
          href: "/platform/website-security-check/email-security",
          icon: MailIcon,
        },
      ],
    },
    process: {
      title: "How it helps",
      description:
        "A simple structure helps you move from a domain to a clearer view of the security basics.",
      steps: [
        {
          title: "Start with the basics.",
          description:
            "Choose the domain you want to understand and begin with the checks that matter most.",
        },
        {
          title: "Understand the context.",
          description:
            "See how each signal fits into the bigger picture without sorting through unnecessary detail.",
        },
        {
          title: "Decide what comes next.",
          description:
            "Use plain-language explanations to decide what to review, change, or ask your provider about.",
        },
      ],
    },
    useCases: {
      title: "Where it fits",
      description:
        "Use Securelyze at the moments when a clearer view of the basics is most useful.",
      items: [
        {
          title: "Before launching a website.",
          description:
            "Review the public security signals you plan to launch with.",
          icon: GlobeIcon,
        },
        {
          title: "During a regular review.",
          description:
            "Revisit the basics periodically or after a significant change.",
          icon: ShieldIcon,
        },
        {
          title: "After a provider change.",
          description:
            "Check whether a DNS or hosting change has altered the context you expect.",
          icon: NetworkIcon,
        },
      ],
    },
    closing: {
      title: "Build a practical starting point for your website.",
      description:
        "Explore the checks and asset context that help small teams see what may need attention.",
      primary: {
        label: "Explore Website Security Check",
        href: "/platform#website-security-check",
      },
      secondary: {
        label: "Explore Asset Discovery",
        href: "/platform/asset-discovery",
      },
    },
  },

  securityTeams: {
    id: "security-teams",
    current: "Security Teams",
    title: "A clearer view of your external footprint.",
    description:
      "Bring asset visibility and security context together to support scoping, review, and prioritization. Securelyze helps security teams see how public domains, hosts, and services connect.",
    note: INFORMATIONAL_NOTE,
    primary: {
      label: "Explore Asset Discovery",
      href: "/platform/asset-discovery",
    },
    secondary: {
      label: "Explore Website Security Check",
      href: "/platform#website-security-check",
    },
    heroCard: {
      eyebrow: "Security team view",
      title: "Map the public surface",
      icon: ShieldIcon,
      items: [
        {
          icon: GlobeIcon,
          title: "Domains",
          detail: "Primary web properties.",
        },
        {
          icon: NetworkIcon,
          title: "Subdomains",
          detail: "Public hostnames and hierarchy.",
        },
        {
          icon: AssetsIcon,
          title: "Hosts & services",
          detail: "Internet-facing endpoints.",
        },
        {
          icon: RadarIcon,
          title: "Security context",
          detail: "Checks connected to the footprint.",
        },
      ],
      footer: HERO_CARD_FOOTER,
    },
    review: {
      title: "What you can review",
      description:
        "Explore the discovery views that make the public footprint easier to scope and review.",
      cards: [
        {
          title: "Asset Discovery Overview",
          description:
            "The connected view of domains, hosts, and services.",
          href: "/platform/asset-discovery",
          icon: RadarIcon,
        },
        {
          title: "Domain Discovery",
          description:
            "Domains and related DNS context.",
          href: "/platform/asset-discovery/domain-discovery",
          icon: GlobeIcon,
        },
        {
          title: "Subdomain Discovery",
          description:
            "Publicly discoverable hostnames and hierarchy.",
          href: "/platform/asset-discovery/subdomain-discovery",
          icon: NetworkIcon,
        },
        {
          title: "Port & Service Discovery",
          description:
            "Internet-facing services and port context.",
          href: "/platform/asset-discovery/port-service-discovery",
          icon: LayersIcon,
        },
      ],
    },
    process: {
      title: "How it helps",
      description:
        "A connected view supports the scoping, review, and prioritization work that comes next.",
      steps: [
        {
          title: "Map the public footprint.",
          description:
            "Start with the domains and hostnames that belong to your organization.",
        },
        {
          title: "Connect assets with security context.",
          description:
            "Review the checks and discovery views that explain how the public surface is configured.",
        },
        {
          title: "Focus review and prioritization.",
          description:
            "Use the connected context to decide where to look next and what to validate with the team.",
        },
      ],
    },
    useCases: {
      title: "Where it fits",
      description:
        "Use Securelyze as a starting point for the moments when asset context matters most.",
      items: [
        {
          title: "Scoping a review.",
          description:
            "Bring domains, subdomains, hosts, and services into one starting view.",
          icon: EyeIcon,
        },
        {
          title: "Organizing asset context.",
          description:
            "Connect public discovery details with the security checks that matter.",
          icon: LayersIcon,
        },
        {
          title: "Prioritizing follow-up.",
          description:
            "Use the available context to focus attention on areas that may need validation.",
          icon: ShieldIcon,
        },
      ],
    },
    closing: {
      title: "Bring your external footprint into focus.",
      description:
        "Start with Asset Discovery, then connect the security context that supports your review.",
      primary: {
        label: "Explore Asset Discovery",
        href: "/platform/asset-discovery",
      },
      secondary: {
        label: "Explore Website Security Check",
        href: "/platform#website-security-check",
      },
    },
  },
};
