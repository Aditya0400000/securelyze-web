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
      "Publicly visible hostnames beneath a domain and how they relate to the parent domain.",
    href: "/platform/asset-discovery/subdomain-discovery",
    icon: NetworkIcon,
  },
  {
    slug: "domain-discovery",
    title: "Domain Discovery",
    description:
      "Available domain information, DNS records, nameservers, and related domains where supported.",
    href: "/platform/asset-discovery/domain-discovery",
    icon: GlobeIcon,
  },
  {
    slug: "ip-host-discovery",
    title: "IP & Host Discovery",
    description:
      "Public hostnames, IPv4 and IPv6 addresses, and shared infrastructure context.",
    href: "/platform/asset-discovery/ip-host-discovery",
    icon: LayersIcon,
  },
  {
    slug: "port-service-discovery",
    title: "Port & Service Discovery",
    description:
      "Publicly accessible ports, service labels, and exposure context.",
    href: "/platform/asset-discovery/port-service-discovery",
    icon: CodeIcon,
  },
];

export const ASSET_DISCOVERY_OVERVIEW_CONTENT = {
  slug: "asset-discovery",
  title: "Asset Discovery",
  heroTitle: "Understand What's Exposed on the Internet",
  icon: AssetsIcon,
  overview: true,
  heroDescription:
    "Discover publicly visible domains, subdomains, IP addresses, and network services associated with your targets. Get a clearer picture of your internet-facing assets and the information available about them.",
  heroChecklist: [
    "Public subdomains and hostnames",
    "Domains and DNS context",
    "Public IP addresses and hosts",
    "Internet-facing ports and services",
  ],
  heroCta: "Explore the capabilities",
  why: {
    paragraphs: [
      "Internet-facing assets can include websites, servers, and services that are accessible from the public internet. As teams add subdomains, move services, and connect new infrastructure, some of those assets may not be part of the inventory you review day to day.",
      "Asset Discovery is designed to bring publicly visible domains, subdomains, IP addresses, hosts, and services into one view. That can help you see how the pieces connect before you investigate a specific asset.",
    ],
    bullets: [
      "Find publicly visible subdomains and related domains in one place.",
      "See how domains, hosts, and IP addresses connect.",
      "Review internet-facing ports and the services behind them.",
      "Give security checks and investigations a clearer starting point.",
    ],
    callout: {
      title: "Visibility is a starting point",
      body: "Discovery helps you find and organize public assets. It does not confirm that an asset is vulnerable or replace authorized testing or a full security assessment.",
    },
  },
  review: {
    heading: "Discovery capabilities",
    navLabel: "Discovery capabilities",
    intro:
      "The overview connects four capability areas. Each dedicated page explains what the capability can show and where its limits are.",
    items: [
      {
        title: "Subdomain Discovery",
        description:
          "Review publicly visible hostnames beneath a domain and how they relate to the parent domain.",
        href: "/platform/asset-discovery/subdomain-discovery",
        icon: NetworkIcon,
        cta: "Open capability",
      },
      {
        title: "Domain Discovery",
        description:
          "Review available domain information, DNS records, nameservers, and related domains where supported.",
        href: "/platform/asset-discovery/domain-discovery",
        icon: GlobeIcon,
        cta: "Open capability",
      },
      {
        title: "IP & Host Discovery",
        description:
          "See how public hostnames map to IPv4 and IPv6 addresses and where infrastructure is shared.",
        href: "/platform/asset-discovery/ip-host-discovery",
        icon: LayersIcon,
        cta: "Open capability",
      },
      {
        title: "Port & Service Discovery",
        description:
          "Review publicly accessible ports and services, including the context available for each host.",
        href: "/platform/asset-discovery/port-service-discovery",
        icon: CodeIcon,
        cta: "Open capability",
      },
    ],
  },
  how: {
    intro:
      "The review path starts with a domain and moves toward a connected view of the public footprint. The example panels use sample data.",
    steps: [
      {
        title: "Start with a domain",
        description:
          "Choose the public domain whose internet-facing assets you want to understand.",
      },
      {
        title: "Review public information",
        description:
          "Look at available subdomains, domains, hostnames, IP addresses, and service context.",
      },
      {
        title: "Connect the relationships",
        description:
          "Group assets by parent domain, shared infrastructure, and exposed services.",
      },
      {
        title: "Review and prioritize",
        description:
          "Use the connected view to decide which assets need a closer, authorized review.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of connected asset view these pages describe. It is an illustrative preview, not a live scan.",
  },
  faqs: [
    {
      question: "Does this page run a live asset discovery scan?",
      answer:
        "No. The Asset Discovery pages explain the capability and use sample data in their example panels.",
    },
    {
      question: "What counts as an internet-facing asset?",
      answer:
        "Websites, servers, subdomains, IP addresses, and services that are accessible from the public internet can all be part of an external footprint. The exact scope depends on what is publicly visible.",
    },
    {
      question: "Why is asset discovery useful?",
      answer:
        "It gives you a starting point for understanding what is public and how assets connect. That context can help you find forgotten hostnames, review shared infrastructure, and prioritize follow-up work.",
    },
    {
      question: "Does discovery prove that an asset is vulnerable?",
      answer:
        "No. Discovering an asset only shows that it is publicly visible or referenced. It does not confirm a vulnerability. Risk requires separate authorized testing and review.",
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
    label: "Explore Subdomain Discovery",
    href: "/platform/asset-discovery/subdomain-discovery",
  },
};

export const SUBDOMAIN_DISCOVERY_CONTENT = {
  slug: "subdomain-discovery",
  title: "Subdomain Discovery",
  heroTitle: "Find Subdomains Associated with Your Domain",
  icon: NetworkIcon,
  heroDescription:
    "Discover publicly visible subdomains to better understand the websites, applications, and services connected to your domain.",
  heroChecklist: [
    "Parent domain and public hostnames",
    "DNS record types and values",
    "Hostname-to-domain relationships",
    "Response context where available",
  ],
  heroCta: "See what can be reviewed",
  why: {
    paragraphs: [
      "A subdomain is a hostname beneath a parent domain, such as api.example.com beneath example.com. Organizations use subdomains to separate websites, applications, APIs, mail, and vendor-managed services.",
      "Publicly visible subdomains can reveal services that are not linked from the main website. Reviewing unknown or unused hostnames can help you spot assets that are no longer needed or that deserve a closer look.",
    ],
    bullets: [
      "Surface publicly visible hostnames that are easy to miss in a manual inventory.",
      "Review staging, legacy, and vendor-managed hostnames.",
      "See how hostnames relate to the parent domain and other targets.",
      "Give DNS, certificate, and service reviews a clearer starting point.",
    ],
    callout: {
      title: "Not every subdomain is linked",
      body: "A hostname can be publicly visible without appearing in the main website navigation. Public sources may not reveal every subdomain, so treat the results as a starting point.",
    },
  },
  review: {
    heading: "What can be reviewed",
    navLabel: "What can be reviewed",
    intro:
      "Subdomain Discovery is designed to organize publicly visible hostnames and the context that explains how they relate to a parent domain.",
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
          "Whether a hostname responds, redirects, or has no observed response.",
      },
      {
        title: "Shared targets",
        description:
          "Hostnames that point to the same domain, IP address, or third-party service.",
      },
      {
        title: "Review cues",
        description:
          "Names such as staging, legacy, admin, or vendor labels that may deserve a closer look.",
      },
    ],
    note: "Fields shown depend on the public DNS and response data available for a domain. Public sources may not reveal every subdomain.",
  },
  how: {
    intro:
      "The process starts with a parent domain, reviews available public hostname context, and groups the results into a readable hierarchy.",
    steps: [
      {
        title: "Start with a domain",
        description:
          "Choose the parent domain whose publicly visible hostnames you want to understand.",
      },
      {
        title: "Review public context",
        description:
          "Look at candidate hostnames and DNS values from public sources.",
      },
      {
        title: "Group the results",
        description:
          "Organize hostnames by parent domain and shared targets.",
      },
      {
        title: "Review the hierarchy",
        description:
          "Look for forgotten, unexpected, or service-specific hostnames that need follow-up.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of subdomain hierarchy this page describes. It is an illustrative preview, not a live scan.",
  },
  faqs: [
    {
      question: "Does this page run a live subdomain lookup?",
      answer:
        "No. This page explains the capability and uses sample data in the example panel.",
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
      question: "Does every existing subdomain appear?",
      answer:
        "No. Results depend on what is publicly visible. A subdomain that is not listed may still exist, and a listed hostname may no longer be in use.",
    },
    {
      question: "Does a resolving subdomain mean it is vulnerable?",
      answer:
        "No. A resolving hostname only shows that a public DNS record exists. Vulnerability and risk require separate authorized review.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Follow hostnames into the next layer.",
    description:
      "Review the domains and DNS context behind the hostnames you discover.",
    label: "Explore Domain Discovery",
    href: "/platform/asset-discovery/domain-discovery",
  },
};

export const DOMAIN_DISCOVERY_CONTENT = {
  slug: "domain-discovery",
  title: "Domain Discovery",
  heroTitle: "Explore Domain Information and Related Assets",
  icon: GlobeIcon,
  heroDescription:
    "Review available domain information and discover related domains where supported, helping you understand how your internet-facing assets are organized.",
  heroChecklist: [
    "Apex domains and related hostnames",
    "A, AAAA, CNAME, MX, TXT, and NS context",
    "Nameserver and delegation details",
    "Related domains where supported",
  ],
  heroCta: "See what can be reviewed",
  why: {
    paragraphs: [
      "Domains anchor websites, email, certificates, and service configuration. When an organization manages more than one domain, the relationships between those names can be difficult to see.",
      "Domain Discovery is designed to bring available domain information and related domains into one view, so you can understand how your internet-facing assets are organized.",
    ],
    bullets: [
      "Review apex domains and related hostnames together.",
      "See the DNS records that connect a domain to its services.",
      "Review nameserver and delegation context.",
      "Identify related domains where supported.",
    ],
    callout: {
      title: "Related does not mean verified",
      body: "A shared nameserver or naming pattern may suggest a relationship, but it does not confirm ownership. Treat related-domain information as context, not proof.",
    },
  },
  review: {
    heading: "What can be reviewed",
    navLabel: "What can be reviewed",
    intro:
      "Domain Discovery presents available domain information and the public DNS context that explains how a domain connects to the services you review.",
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
          "The servers that answer DNS queries for the domain and the delegation context that points to them.",
      },
      {
        title: "Related domain context",
        description:
          "Public context that may connect domains through shared nameservers or naming patterns, where supported.",
      },
      {
        title: "Mail context",
        description:
          "MX records and mail-related hostnames that show where incoming email for a domain is delivered.",
      },
    ],
    note: "Fields shown depend on the public DNS and registration context available for a domain. Related domains are not ownership verification.",
  },
  how: {
    intro:
      "The process starts with a known domain, reviews available public DNS context, and organizes related names into a readable view.",
    steps: [
      {
        title: "Start with a domain",
        description:
          "Choose the domain whose public information and related assets you want to review.",
      },
      {
        title: "Review DNS context",
        description:
          "Look at the records, nameservers, and delegation details available for the domain.",
      },
      {
        title: "Group related names",
        description:
          "Organize hostnames and related domains using the available public context.",
      },
      {
        title: "Review the footprint",
        description:
          "Look for legacy names, unexpected records, and relationships that need follow-up.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of domain and DNS context this page describes. It is an illustrative preview, not a live lookup.",
  },
  faqs: [
    {
      question: "Does this page run a live domain lookup?",
      answer:
        "No. This page explains the capability and uses sample data in the example panel.",
    },
    {
      question: "What is an apex domain?",
      answer:
        "An apex domain is the root name of a domain, such as example.com. Hostnames such as www.example.com and api.example.com sit beneath it.",
    },
    {
      question: "What information can I review?",
      answer:
        "Available domain information can include apex domains, hostnames, DNS records, nameservers, mail context, and related domains where supported.",
    },
    {
      question: "Does a related domain confirm the same owner?",
      answer:
        "No. Shared nameservers or naming patterns can suggest a connection, but they do not verify ownership or control.",
    },
    {
      question: "Does Domain Discovery replace a DNS audit?",
      answer:
        "No. It provides a domain-focused view of public context. Use it alongside DNS Security and a broader review of your DNS and infrastructure configuration.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Connect domains to the infrastructure behind them.",
    description:
      "See how public hostnames map to IP addresses and shared hosting context.",
    label: "Explore IP & Host Discovery",
    href: "/platform/asset-discovery/ip-host-discovery",
  },
};

export const IP_HOST_DISCOVERY_CONTENT = {
  slug: "ip-host-discovery",
  title: "IP & Host Discovery",
  heroTitle: "Identify Public-Facing IP Addresses and Hosts",
  icon: LayersIcon,
  heroDescription:
    "Explore publicly visible IP addresses and host information associated with your targets to understand which systems may be reachable from the internet.",
  heroChecklist: [
    "Public hostnames and address records",
    "IPv4 and IPv6 addresses",
    "Shared IP address relationships",
    "Which hosts may be reachable from the internet",
  ],
  heroCta: "See what can be reviewed",
  why: {
    paragraphs: [
      "A host is a device or system on a network. An IP address is a numeric address used to reach it. A hostname, such as api.example.com, is a name that can resolve to one or more IP addresses.",
      "Domains and hostnames point to IP addresses, and multiple hostnames can share the same address. Reviewing those relationships can show where infrastructure is shared and which systems may be reachable from the internet.",
    ],
    bullets: [
      "Connect public hostnames to their IPv4 and IPv6 addresses.",
      "See where multiple hosts share the same address.",
      "Review unexpected address relationships and shared hosting patterns.",
      "Give DNS, certificate, and service reviews more context.",
    ],
    callout: {
      title: "Public addresses are not the whole picture",
      body: "An IP address shows where a host points, not everything behind it. Shared hosting, proxies, and content-delivery networks can make one address serve many systems. Discovery does not identify internal infrastructure.",
    },
  },
  review: {
    heading: "What can be reviewed",
    navLabel: "What can be reviewed",
    intro:
      "IP & Host Discovery presents the public host-to-address relationships that sit behind the domains and subdomains you review.",
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
          "Hostnames that point to the same address, which may indicate shared infrastructure or a common provider.",
      },
      {
        title: "Host grouping",
        description:
          "Hostnames grouped by the addresses they share, so common infrastructure is easier to review.",
      },
      {
        title: "Coverage gaps",
        description:
          "Where an address or response was not observed, so you know the view may be incomplete.",
      },
    ],
    note: "Fields shown depend on the public DNS and network context available for a hostname. Discovery does not identify internal systems or every host on a network.",
  },
  how: {
    intro:
      "The process starts with public hostnames, reviews their addresses, and groups the results by shared infrastructure.",
    steps: [
      {
        title: "Start with hostnames",
        description:
          "Choose the public hostnames or domains whose address relationships you want to review.",
      },
      {
        title: "Review addresses",
        description:
          "Look at the IPv4 and IPv6 records published for each hostname.",
      },
      {
        title: "Group shared infrastructure",
        description:
          "Connect hostnames that point to the same address or follow the same hosting pattern.",
      },
      {
        title: "Review the relationships",
        description:
          "Use the grouped view to spot shared infrastructure and gaps that need follow-up.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of host-to-IP view this page describes. It is an illustrative preview, not a live lookup.",
  },
  faqs: [
    {
      question: "Does this page run a live host or IP lookup?",
      answer:
        "No. This page explains the capability and uses sample data in the example panel.",
    },
    {
      question: "What is the difference between a host and an IP address?",
      answer:
        "A host is a device or system on a network, while an IP address is an address used to reach it. A hostname is a name that can resolve to one or more IP addresses. Multiple hostnames can point to the same IP address.",
    },
    {
      question: "Why does shared infrastructure matter?",
      answer:
        "If several hostnames share an address, a change to that infrastructure can affect more than one public asset. Grouping hosts by address makes those relationships easier to see.",
    },
    {
      question: "Does an IP address reveal the full hosting setup?",
      answer:
        "No. An address is one part of the picture. Shared hosting, proxies, and content-delivery networks can make one address serve many systems.",
    },
    {
      question: "Can this find internal systems?",
      answer:
        "No. The view focuses on publicly visible hostnames and IP addresses. It does not identify internal systems or every host on a network.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Move from infrastructure to exposed services.",
    description:
      "Review the ports and service context associated with public hosts.",
    label: "Explore Port & Service Discovery",
    href: "/platform/asset-discovery/port-service-discovery",
  },
};

export const PORT_SERVICE_DISCOVERY_CONTENT = {
  slug: "port-service-discovery",
  title: "Port & Service Discovery",
  heroTitle: "See Which Ports and Services Are Exposed",
  icon: CodeIcon,
  heroDescription:
    "Review available information about open ports and publicly accessible network services to understand what may be reachable from the internet.",
  heroChecklist: [
    "Common internet-facing ports",
    "Service labels and exposure state",
    "Redirect and response context where available",
    "Exposure patterns across public hosts",
  ],
  heroCta: "See what can be reviewed",
  why: {
    paragraphs: [
      "A network port is a numbered endpoint that identifies a service on a host. A service is the application or protocol listening on that port, such as a website on port 443 or mail on port 25.",
      "Some services are intentionally public so customers, employees, or other systems can reach them. Others may be exposed by mistake or left running after they are no longer needed.",
    ],
    bullets: [
      "Review internet-facing ports and the services they represent.",
      "Spot administrative or alternate services that may be easy to overlook.",
      "Review service labels and redirect context alongside the port.",
      "Prioritize exposed services for authorized follow-up.",
    ],
    callout: {
      title: "An open port is not a finding",
      body: "A public service can be intentional and well managed. The useful question is whether the exposure is expected, necessary, and protected. This page does not test for vulnerabilities or run an active port scan.",
    },
  },
  review: {
    heading: "What can be reviewed",
    navLabel: "What can be reviewed",
    intro:
      "Port & Service Discovery presents the service context associated with public hosts and the ports that carry it.",
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
        title: "Alternate ports",
        description:
          "Additional web ports beyond 443 and 80, where observed.",
      },
      {
        title: "Connection context",
        description:
          "Whether a web service redirects, responds, or was not observed.",
      },
      {
        title: "Exposure state",
        description:
          "Whether a service appears public, restricted, or unobserved.",
      },
      {
        title: "Service grouping",
        description:
          "Ports and services grouped by host so exposure patterns are easier to review.",
      },
    ],
    note: "Fields shown depend on the public service and response context available for a host. The view does not confirm a vulnerability.",
  },
  how: {
    intro:
      "The process starts with a public host, reviews the ports and service context associated with it, and groups the results for prioritization.",
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
          "Connect each port to its likely service and available response context.",
      },
      {
        title: "Prioritize exposure",
        description:
          "Decide which services are expected and which need authorized follow-up.",
      },
    ],
  },
  example: {
    intro:
      "The panel below uses sample data to show the kind of port and service view this page describes. It is an illustrative preview, not a live scan.",
  },
  faqs: [
    {
      question: "Does this page run a live port scan?",
      answer:
        "No. This page explains the capability and uses sample data in the example panel.",
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
        "This view focuses on port and service context. Version or banner details are not confirmed here and should be validated separately.",
    },
    {
      question: "Does this identify vulnerabilities?",
      answer:
        "No. It shows available port and service context. It does not test for vulnerabilities or confirm that an exposed service is unsafe.",
    },
  ],
  relatedIntro: "Continue with another Asset Discovery page.",
  bottomCta: {
    eyebrow: "Asset Discovery",
    title: "Return to the connected footprint.",
    description:
      "See how subdomains, domains, hosts, and services fit together.",
    label: "Return to Asset Discovery Overview",
    href: "/platform/asset-discovery",
  },
};
