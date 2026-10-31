import {
  AssetsIcon,
  CodeIcon,
  GlobeIcon,
  NetworkIcon,
} from "../about/AboutIcons";
import { LayersIcon } from "../pricing/PricingIcons";

export const ASSET_DISCOVERY_TOOLS = [
  {
    slug: "asset-discovery",
    title: "Asset Discovery",
    shortTitle: "Asset Discovery Overview",
    description:
      "The connected overview of public subdomains, domains, hosts, and services.",
    href: "/platform/asset-discovery",
    icon: AssetsIcon,
  },
  {
    slug: "subdomain-discovery",
    title: "Subdomain Discovery",
    description:
      "Publicly discoverable hostnames and their relationship to a parent domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: NetworkIcon,
  },
  {
    slug: "domain-discovery",
    title: "Domain Discovery",
    description:
      "Domains, DNS records, nameservers, and related domain context.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    slug: "ip-host-discovery",
    title: "IP & Host Discovery",
    description:
      "Internet-facing hosts, IP addresses, and shared infrastructure context.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: LayersIcon,
  },
  {
    slug: "port-service-discovery",
    title: "Port & Service Discovery",
    description:
      "Internet-facing ports, service labels, and exposure context.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: CodeIcon,
  },
];

export const ASSET_DISCOVERY_OVERVIEW_CONTENT = {
  slug: "asset-discovery",
  title: "Asset Discovery",
  icon: AssetsIcon,
  overview: true,
  heroDescription:
    "Build a clearer picture of the subdomains, domains, hosts, and internet-facing services that make up your public footprint.",
  heroNote:
    "This overview explains the discovery capabilities and uses clearly labelled illustrative examples. It does not run a live scan.",
  heroChecklist: [
    "Public subdomains and hostnames",
    "Domains, DNS records, and IP context",
    "Internet-facing ports and services",
    "Relationships across the external footprint",
  ],
  heroCta: "Explore the capabilities",
  why: {
    paragraphs: [
      "An external footprint grows as teams add subdomains, move services, and connect new infrastructure. The result can include assets that are public but not part of the inventory you review day to day.",
      "Asset Discovery is designed to bring those public relationships into one view, so you can see what is exposed and how the pieces connect before you investigate a specific asset.",
    ],
    bullets: [
      "Find public hostnames and related domains in one place.",
      "Understand how domains, hosts, and IP addresses connect.",
      "Review internet-facing services and the context around them.",
      "Give security checks and investigations a clearer starting point.",
    ],
    callout: {
      title: "Visibility is a starting point",
      body: "Discovery helps you find and organize public assets. It does not replace authorization, vulnerability testing, or a full security assessment.",
    },
  },
  review: {
    heading: "Discovery capabilities",
    navLabel: "Discovery capabilities",
    intro:
      "The overview connects four capability areas. Each dedicated page explains what the capability is designed to show and includes an illustrative example.",
    items: [
      {
        title: "Subdomain Discovery",
        description:
          "Review public hostnames beneath a domain and how they relate to the parent domain.",
        href: "/platform/asset-discovery/subdomain-discovery",
        icon: NetworkIcon,
        cta: "Open capability",
      },
      {
        title: "Domain Discovery",
        description:
          "Review domains, DNS records, nameservers, and related domain context.",
        href: "/platform/asset-discovery/domain-discovery",
        icon: GlobeIcon,
        cta: "Open capability",
      },
      {
        title: "IP & Host Discovery",
        description:
          "Map public hostnames to IPv4 and IPv6 addresses and see where infrastructure is shared.",
        href: "/platform/asset-discovery/ip-host-discovery",
        icon: LayersIcon,
        cta: "Open capability",
      },
      {
        title: "Port & Service Discovery",
        description:
          "Review internet-facing ports, service labels, and exposure context for public hosts.",
        href: "/platform/asset-discovery/port-service-discovery",
        icon: CodeIcon,
        cta: "Open capability",
      },
    ],
    note: "The capability pages are explanatory overviews. They use sample data and do not run live discovery scans.",
  },
  how: {
    intro:
      "The intended flow moves from a starting domain to a connected view of the public footprint.",
    steps: [
      {
        title: "Start with a domain",
        description:
          "Choose the public domain whose external footprint you want to understand.",
      },
      {
        title: "Collect public context",
        description:
          "Review subdomains, domains, hostnames, IP addresses, and service context where available.",
      },
      {
        title: "Connect the relationships",
        description:
          "Group assets by their parent domain, shared infrastructure, and exposed services.",
      },
      {
        title: "Review and prioritize",
        description:
          "Use the connected view to decide which assets need a closer security review.",
      },
    ],
    callout:
      "This page illustrates the discovery model. It does not accept a domain or run a live scan.",
  },
  example: {
    intro:
      "The panel below shows the kind of connected asset view the discovery experience is designed to present. Every value is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live asset discovery scan?",
      answer:
        "No. The asset relationships and service values on this page are illustrative sample data. The page explains the capability rather than acting as a working scanner.",
    },
    {
      question: "What counts as an external asset?",
      answer:
        "Publicly reachable domains, subdomains, hostnames, IP addresses, and internet-facing services can all be part of an external footprint. The exact scope depends on what is publicly discoverable.",
    },
    {
      question: "Why is asset discovery useful?",
      answer:
        "It gives you a starting point for understanding what is public and how assets connect. That context can help you find forgotten hostnames, review shared infrastructure, and prioritize follow-up work.",
    },
    {
      question: "Does discovery prove that an asset is vulnerable?",
      answer:
        "No. Discovery identifies public assets and relationships. A finding or vulnerability requires separate authorized testing and review.",
    },
    {
      question: "Where should I start?",
      answer:
        "Start with the capability that matches your question: subdomains for hostname coverage, domains for DNS context, IP and host discovery for infrastructure relationships, or ports and services for exposure review.",
    },
  ],
  relatedIntro: "Continue into a specific Asset Discovery capability.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Start with the capability that matches your question.",
    description:
      "Open a dedicated page for subdomains, domains, hosts, or services.",
    label: "Open Subdomain Discovery",
    href: "/platform/asset-discovery/subdomain-discovery",
  },
};

export const SUBDOMAIN_DISCOVERY_CONTENT = {
  slug: "subdomain-discovery",
  title: "Subdomain Discovery",
  icon: NetworkIcon,
  heroDescription:
    "Find publicly discoverable hostnames that sit beneath a domain and see how they relate to the parent domain.",
  heroNote:
    "This page explains the capability with illustrative sample data. It does not run a live subdomain enumeration.",
  heroChecklist: [
    "Parent domain and public hostnames",
    "DNS record types and values",
    "Hostname-to-domain relationships",
    "Response context where available",
  ],
  heroCta: "See what it discovers",
  why: {
    paragraphs: [
      "Subdomains multiply as teams add customer portals, APIs, campaign pages, vendor tools, and temporary environments. Some are linked from the main site; many are not.",
      "A hostname does not need a homepage or a navigation link to be part of the public footprint. Reviewing subdomains together makes forgotten or unexpected hostnames easier to spot.",
    ],
    bullets: [
      "Surface public hostnames that are easy to miss in a manual inventory.",
      "Review staging, legacy, and vendor-managed hostnames.",
      "See how hostnames point to parent domains and other targets.",
      "Give certificate, DNS, and service reviews a more complete starting point.",
    ],
    callout: {
      title: "A hostname can be public without being linked",
      body: "Search engines, certificate records, DNS data, and other public sources can reveal hostnames that are not part of the main website navigation.",
    },
  },
  review: {
    heading: "What it discovers",
    navLabel: "What it discovers",
    intro:
      "Subdomain Discovery is designed to organize public hostnames and the context that explains how they relate to a parent domain.",
    items: [
      {
        title: "Public hostnames",
        description:
          "Hostnames beneath the parent domain that appear in public DNS or related public sources.",
      },
      {
        title: "DNS record context",
        description:
          "A, AAAA, and CNAME values that show where a hostname points.",
      },
      {
        title: "Parent-domain relationships",
        description:
          "The domain each hostname belongs to, including nested or service-specific naming patterns.",
      },
      {
        title: "Response context",
        description:
          "Whether a sample hostname responds, redirects, or has no observed response.",
      },
      {
        title: "Shared targets",
        description:
          "Hostnames that point to the same domain, IP address, or third-party service.",
      },
      {
        title: "Review cues",
        description:
          "Patterns such as staging, legacy, admin, or vendor names that may deserve a closer look.",
      },
    ],
    note: "Fields shown depend on the public DNS and response data available for a domain.",
  },
  how: {
    intro:
      "The intended flow starts with a parent domain, gathers public hostname context, and groups the results into a readable hierarchy.",
    steps: [
      {
        title: "Start with a domain",
        description:
          "Choose the parent domain whose public hostnames you want to understand.",
      },
      {
        title: "Collect public context",
        description:
          "Review candidate hostnames and DNS values from public sources.",
      },
      {
        title: "Resolve and group",
        description:
          "Organize hostnames by their parent domain and shared targets.",
      },
      {
        title: "Review the hierarchy",
        description:
          "Look for forgotten, unexpected, or service-specific hostnames that need follow-up.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a domain or run a live enumeration.",
  },
  example: {
    intro:
      "The panel below shows the kind of subdomain hierarchy the discovery experience is designed to present. Every hostname and response is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live subdomain enumeration?",
      answer:
        "No. The hostnames and response values on this page are illustrative sample data. The page explains the capability rather than acting as a working scanner.",
    },
    {
      question: "What is a subdomain?",
      answer:
        "A subdomain is a hostname beneath a parent domain, such as api.example.com beneath example.com. It can point to a different service, server, or third-party provider.",
    },
    {
      question: "Why do unlinked subdomains matter?",
      answer:
        "A hostname can be public even if it is not linked from the main site. Forgotten staging, legacy, or vendor-managed hostnames can expand the public footprint and are easy to miss in a manual inventory.",
    },
    {
      question: "Does a resolving subdomain mean it is vulnerable?",
      answer:
        "No. A resolving hostname only shows that a public DNS record exists. Vulnerability and risk require separate authorized review.",
    },
    {
      question: "Does Subdomain Discovery replace DNS or certificate review?",
      answer:
        "No. It provides a hostname-focused view. Use it alongside DNS Security, SSL/TLS Analysis, and a broader review of the assets that matter to you.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Follow hostnames into the next layer.",
    description:
      "Review the domains and DNS context behind the hostnames you discover.",
    label: "Open Domain Discovery",
    href: "/platform/asset-discovery/domain-discovery",
  },
};

export const DOMAIN_DISCOVERY_CONTENT = {
  slug: "domain-discovery",
  title: "Domain Discovery",
  icon: GlobeIcon,
  heroDescription:
    "Review the domains and related DNS context that shape how your public footprint is organized.",
  heroNote:
    "This page explains the capability with illustrative sample data. It does not run a live domain lookup.",
  heroChecklist: [
    "Apex domains and related hostnames",
    "A, AAAA, CNAME, MX, and NS context",
    "Nameserver and delegation details",
    "Relationships between domains and services",
  ],
  heroCta: "See what it discovers",
  why: {
    paragraphs: [
      "Domains are the anchors for websites, mail, certificates, redirects, and service configuration. When a team manages more than one domain, the relationships between them can become difficult to see.",
      "Domain Discovery is designed to organize the public domain context around a starting point, so related names and DNS details are easier to review together.",
    ],
    bullets: [
      "Keep related domains and hostnames in one view.",
      "Review the DNS records that connect a domain to its services.",
      "See nameserver and delegation context in one place.",
      "Make domain migrations, redirects, and legacy names easier to spot.",
    ],
    callout: {
      title: "A domain is a starting point",
      body: "A single domain can connect to hostnames, mail exchangers, third-party services, and other domains. Reviewing those relationships together gives a clearer picture of the footprint.",
    },
  },
  review: {
    heading: "What it discovers",
    navLabel: "What it discovers",
    intro:
      "Domain Discovery is designed to present domains and the public DNS context that explains how they connect to the services you review.",
    items: [
      {
        title: "Apex domains",
        description:
          "The primary domain names that anchor a public footprint.",
      },
      {
        title: "Related hostnames",
        description:
          "Hostnames that belong to a domain or point to another domain or service.",
      },
      {
        title: "DNS records",
        description:
          "Common A, AAAA, CNAME, MX, TXT, and NS values where available.",
      },
      {
        title: "Nameservers",
        description:
          "The authoritative nameservers and delegation context for a domain.",
      },
      {
        title: "Redirect context",
        description:
          "Domain-level redirects and destination patterns that affect where visitors land.",
      },
      {
        title: "Relationship cues",
        description:
          "Shared nameservers, targets, or naming patterns that connect domains together.",
      },
    ],
    note: "Fields shown depend on the public DNS and registration context available for a domain.",
  },
  how: {
    intro:
      "The intended flow starts with a known domain, gathers public DNS context, and organizes related names into a readable view.",
    steps: [
      {
        title: "Start with a domain",
        description:
          "Choose the domain whose public context and relationships you want to review.",
      },
      {
        title: "Collect DNS context",
        description:
          "Review the records, nameservers, and delegation details available for the domain.",
      },
      {
        title: "Group related names",
        description:
          "Connect hostnames and related domains through shared targets and naming patterns.",
      },
      {
        title: "Review the footprint",
        description:
          "Look for legacy names, unexpected redirects, and relationships that need follow-up.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a domain or run a live lookup.",
  },
  example: {
    intro:
      "The panel below shows the kind of domain and DNS context the discovery experience is designed to present. Every value is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live domain lookup?",
      answer:
        "No. The domain and DNS values on this page are illustrative sample data. The page explains the capability rather than acting as a working scanner.",
    },
    {
      question: "What is an apex domain?",
      answer:
        "An apex domain is the root name of a domain, such as example.com. Hostnames such as www.example.com and api.example.com sit beneath it.",
    },
    {
      question: "Why review related domains together?",
      answer:
        "Related domains can share nameservers, redirects, certificates, or service providers. Seeing them together can make legacy names and unexpected relationships easier to spot.",
    },
    {
      question: "Does Domain Discovery replace a DNS audit?",
      answer:
        "No. It provides a domain-focused view of public context. Use it alongside DNS Security and a broader review of your DNS and infrastructure configuration.",
    },
    {
      question: "How often should domain context be reviewed?",
      answer:
        "Review it after migrations, acquisitions, redirect changes, nameserver changes, and at regular intervals to catch stale or unexpected relationships.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Connect domains to the infrastructure behind them.",
    description:
      "See how public hostnames map to IP addresses and shared hosting context.",
    label: "Open IP & Host Discovery",
    href: "/platform/asset-discovery/ip-host-discovery",
  },
};

export const IP_HOST_DISCOVERY_CONTENT = {
  slug: "ip-host-discovery",
  title: "IP & Host Discovery",
  icon: LayersIcon,
  heroDescription:
    "Map public hostnames to IP addresses and see where infrastructure is shared across your external footprint.",
  heroNote:
    "This page explains the capability with illustrative sample data. It does not run a live host or IP lookup.",
  heroChecklist: [
    "Public hostnames and address records",
    "IPv4 and IPv6 relationships",
    "Shared IP and hosting context",
    "Changes across host infrastructure",
  ],
  heroCta: "See what it discovers",
  why: {
    paragraphs: [
      "Hostnames are only part of the story. The IP addresses behind them reveal shared hosting, content-delivery edges, mail infrastructure, and other relationships that are not obvious from a list of names.",
      "IP & Host Discovery is designed to organize those connections so you can see which public hosts share infrastructure and where a change may affect more than one asset.",
    ],
    bullets: [
      "Connect public hostnames to their IPv4 and IPv6 addresses.",
      "See where multiple hosts share the same infrastructure.",
      "Spot hosting changes and unexpected address relationships.",
      "Give certificate, DNS, and service reviews more context.",
    ],
    callout: {
      title: "Shared infrastructure changes the picture",
      body: "When several hostnames point to the same address or provider, a change to that infrastructure can affect more than one public asset. The relationship is often more useful than the address alone.",
    },
  },
  review: {
    heading: "What it discovers",
    navLabel: "What it discovers",
    intro:
      "IP & Host Discovery is designed to present the public host-to-address relationships that sit behind the domains and subdomains you review.",
    items: [
      {
        title: "Public hostnames",
        description:
          "Hostnames that resolve to a public IPv4 or IPv6 address.",
      },
      {
        title: "IPv4 addresses",
        description:
          "The address records published for a hostname and the hosts that share them.",
      },
      {
        title: "IPv6 addresses",
        description:
          "IPv6 records and the hostnames that use them, where available.",
      },
      {
        title: "Shared IP groups",
        description:
          "Hostnames that point to the same address, suggesting shared infrastructure or a common provider.",
      },
      {
        title: "Hosting context",
        description:
          "Public network and provider context that helps explain where an address is hosted.",
      },
      {
        title: "Change cues",
        description:
          "Address changes that may indicate a migration, failover, or new service.",
      },
    ],
    note: "Fields shown depend on the public DNS and network context available for a hostname.",
  },
  how: {
    intro:
      "The intended flow starts with public hostnames, resolves their addresses, and groups the results by shared infrastructure.",
    steps: [
      {
        title: "Start with hostnames",
        description:
          "Choose the public hostnames or domains whose address relationships you want to review.",
      },
      {
        title: "Resolve addresses",
        description:
          "Review the IPv4 and IPv6 records published for each hostname.",
      },
      {
        title: "Group shared infrastructure",
        description:
          "Connect hostnames that point to the same address, provider, or hosting pattern.",
      },
      {
        title: "Review the relationships",
        description:
          "Use the grouped view to spot shared infrastructure and changes that need follow-up.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a hostname or run a live lookup.",
  },
  example: {
    intro:
      "The panel below shows the kind of host-to-IP view the discovery experience is designed to present. Every address and hostname is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live host or IP lookup?",
      answer:
        "No. The hostnames, IP addresses, and hosting values on this page are illustrative sample data. The page explains the capability rather than acting as a working scanner.",
    },
    {
      question: "What is the difference between a host and an IP address?",
      answer:
        "A host is a named endpoint, such as api.example.com. An IP address is the numeric address the host resolves to. Multiple hostnames can point to the same IP address.",
    },
    {
      question: "Why does shared infrastructure matter?",
      answer:
        "If several hostnames share an address or provider, a change to that infrastructure can affect more than one public asset. Grouping hosts by address makes those relationships easier to see.",
    },
    {
      question: "Does an IP address reveal the full hosting setup?",
      answer:
        "No. An address is one part of the picture. Provider, network, and service context can add useful detail, but they do not replace a full infrastructure review.",
    },
    {
      question: "Does IP & Host Discovery replace a network assessment?",
      answer:
        "No. It focuses on public host-to-address relationships. Use it alongside DNS, certificate, and service reviews for a broader view.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Move from infrastructure to exposed services.",
    description:
      "Review the ports and service context associated with public hosts.",
    label: "Open Port & Service Discovery",
    href: "/platform/asset-discovery/port-service-discovery",
  },
};

export const PORT_SERVICE_DISCOVERY_CONTENT = {
  slug: "port-service-discovery",
  title: "Port & Service Discovery",
  icon: CodeIcon,
  heroDescription:
    "Review the internet-facing ports and services associated with public hosts and understand where exposure needs a closer look.",
  heroNote:
    "This page explains the capability with illustrative sample data. It does not run a live port scan.",
  heroChecklist: [
    "Common internet-facing ports",
    "Service labels and protocol context",
    "TLS and redirect context where available",
    "Exposure patterns across public hosts",
  ],
  heroCta: "See what it discovers",
  why: {
    paragraphs: [
      "A public host can expose more than a website. Administrative interfaces, alternate web ports, mail services, and other protocols can expand the surface that needs review.",
      "Port & Service Discovery is designed to organize the services associated with public hosts, so it is easier to see which exposure is expected and which deserves a closer look.",
    ],
    bullets: [
      "Identify internet-facing ports and the services they represent.",
      "Spot administrative or alternate services that may be easy to overlook.",
      "Review protocol and TLS context alongside the port.",
      "Prioritize exposed services for authorized follow-up.",
    ],
    callout: {
      title: "An open port is not automatically a finding",
      body: "A service can be intentionally public and still be well managed. The useful question is whether the exposure is expected, necessary, and protected.",
    },
  },
  review: {
    heading: "What it discovers",
    navLabel: "What it discovers",
    intro:
      "Port & Service Discovery is designed to present the service context associated with public hosts and the ports that carry it.",
    items: [
      {
        title: "Common web ports",
        description:
          "HTTPS and HTTP endpoints, including alternate web ports where observed.",
      },
      {
        title: "Service labels",
        description:
          "The service or protocol associated with a port, such as HTTPS, SSH, or SMTP.",
      },
      {
        title: "Protocol context",
        description:
          "Whether a service is presented over TCP or another protocol, where available.",
      },
      {
        title: "TLS context",
        description:
          "Whether a service presents TLS and how the connection is handled.",
      },
      {
        title: "Exposure state",
        description:
          "Whether a sample service appears public, restricted, or unobserved.",
      },
      {
        title: "Change cues",
        description:
          "New, removed, or changed services that may deserve a review.",
      },
    ],
    note: "Fields shown depend on the public service and response context available for a host.",
  },
  how: {
    intro:
      "The intended flow starts with a public host, reviews the ports and service context associated with it, and groups the results for prioritization.",
    steps: [
      {
        title: "Start with a host",
        description:
          "Choose the public host whose internet-facing services you want to understand.",
      },
      {
        title: "Review ports",
        description:
          "Look at the common ports and service context available for the host.",
      },
      {
        title: "Map the services",
        description:
          "Connect each port to its likely service, protocol, and TLS context.",
      },
      {
        title: "Prioritize exposure",
        description:
          "Decide which services are expected and which need authorized follow-up.",
      },
    ],
    callout:
      "This page illustrates the flow. It does not accept a hostname or run a live port scan.",
  },
  example: {
    intro:
      "The panel below shows the kind of port and service view the discovery experience is designed to present. Every value is sample data.",
  },
  faqs: [
    {
      question: "Does this page run a live port scan?",
      answer:
        "No. The ports, services, and states on this page are illustrative sample data. The page explains the capability rather than acting as a working scanner.",
    },
    {
      question: "What is a port?",
      answer:
        "A port is a numbered endpoint that identifies a service on a host. Common examples include 443 for HTTPS and 25 for SMTP.",
    },
    {
      question: "Are open ports always a security problem?",
      answer:
        "No. A public service can be intentional and well managed. The important questions are whether the exposure is expected, necessary, and protected.",
    },
    {
      question: "Can service versions be identified?",
      answer:
        "The intended view focuses on port and service context. Any version or banner information depends on what is publicly observable and should be validated separately.",
    },
    {
      question: "Does Port & Service Discovery replace a full assessment?",
      answer:
        "No. It provides a service-focused view of public exposure. Use it alongside DNS, host, and certificate reviews, plus authorized testing where needed.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Return to the connected footprint.",
    description:
      "See how subdomains, domains, hosts, and services fit together.",
    label: "Open Asset Discovery Overview",
    href: "/platform/asset-discovery",
  },
};
