export const DOCS_CATEGORIES = [
  {
    id: "start-here",
    title: "Start here",
    eyebrow: "01 / Start here",
    description:
      "The product model, account access, and the first-run path into Securelyze.",
    short: "Product model & setup",
    icon: "compass",
    tone: "lime",
  },
  {
    id: "using-securelyze",
    title: "Using Securelyze",
    eyebrow: "02 / Using Securelyze",
    description:
      "The day-to-day views for assets, findings, exposure, and analysis.",
    short: "Daily workflows",
    icon: "layers",
    tone: "sky",
  },
  {
    id: "manage",
    title: "Manage",
    eyebrow: "03 / Manage",
    description:
      "Scan configuration, notifications, and the people who work alongside you.",
    short: "Scan & team settings",
    icon: "settings",
    tone: "periwinkle",
  },
  {
    id: "help",
    title: "Help",
    eyebrow: "04 / Help",
    description:
      "Quick answers for common questions, empty states, and recovery paths.",
    short: "Common questions",
    icon: "help",
    tone: "gold",
  },
];

export const DOCS_TOPICS = [
  {
    slug: "overview",
    title: "Documentation Overview",
    navLabel: "Overview",
    description:
      "What Securelyze is and the four concepts behind everything in it.",
    summary:
      "Start with the product model: assets, scans, findings, and attack surface.",
    category: "start-here",
    icon: "overview",
    sections: [
      {
        id: "what-securelyze-does",
        title: "What Securelyze does",
        blocks: [
          {
            type: "paragraph",
            text: "Securelyze is an External Attack Surface Management (EASM) platform. It discovers the domains, subdomains, and IP addresses that make up your organisation's internet-facing footprint, scans them for security problems, and turns the results into findings you can prioritise and fix.",
          },
          {
            type: "paragraph",
            text: "An AI security analyst is available to explain findings and answer questions in plain language.",
          },
        ],
      },
      {
        id: "core-concepts",
        title: "Core concepts",
        blocks: [
          {
            type: "paragraph",
            text: "Four terms cover almost everything in Securelyze:",
          },
          {
            type: "list",
            items: [
              {
                label: "Assets",
                text: "The things you are protecting: domains, subdomains, and IP addresses. Assets are either added by hand or discovered automatically.",
              },
              {
                label: "Scans",
                text: "Background jobs that examine your assets. Asset Discovery finds new assets such as subdomains, related domains, resolved IPs, and certificates. Security Scan checks existing assets for DNS health, HTTP reachability, SSL/TLS issues, open ports, missing security headers, and more.",
              },
              {
                label: "Findings",
                text: "Individual security issues produced by scans or entered manually. Each finding has a severity score from 0 to 10 and a status of Open, Fixed, or Ignored.",
              },
              {
                label: "Attack Surface",
                text: "A per-domain deep-dive view of everything Securelyze knows about a domain: WHOIS, DNS, subdomains, certificates, infrastructure, services, web, and email security.",
              },
            ],
          },
        ],
      },
      {
        id: "how-the-pieces-connect",
        title: "How the pieces connect",
        blocks: [
          {
            type: "paragraph",
            text: "Asset Discovery expands your inventory. Security Scans examine the assets you are tracking. Findings surface the issues that need attention, and the Attack Surface view gives each domain's signals a place to live together.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Start with the workflow you need",
            text: "New to the product? Begin with Getting Started. Looking for a specific screen? Use the documentation map to jump to the relevant guide.",
          },
        ],
      },
    ],
    related: [
      "getting-started",
      "assets-and-discovery",
      "findings",
      "attack-surface",
    ],
  },
  {
    slug: "getting-started",
    title: "Getting Started",
    navLabel: "Getting Started",
    description:
      "Accounts, signing in, the interface, and the first-run checklist.",
    summary:
      "Sign in for the first time and follow the shortest path to your first scan results.",
    category: "start-here",
    icon: "gettingStarted",
    sections: [
      {
        id: "accounts-are-invite-only",
        title: "Accounts are invite-only",
        blocks: [
          {
            type: "paragraph",
            text: "There is no self-service signup. An Owner or Admin of your organisation invites you from Users & Roles and hands you one-time credentials: your email and a one-time password shown only once at invite time.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Access starts with your team",
            text: "If you do not have credentials yet, ask an Owner or Admin in your organisation to invite you from Users & Roles.",
          },
        ],
      },
      {
        id: "signing-in",
        title: "Signing in",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the app",
                description: "You land on the Sign in page.",
              },
              {
                title: "Enter your email address",
                description: "Click Send login code.",
              },
              {
                title: "Check your inbox",
                description: "Look for a 6-digit one-time code.",
              },
              {
                title: "Verify the code",
                description:
                  "Type the digits and click Verify & sign in. The button enables once all 6 digits are entered.",
              },
              {
                title: "Continue to the Dashboard",
                description:
                  "After verification, you are taken to the Dashboard.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Clicked the wrong email? Use Use a different email to go back. If the code fails, you will see an inline error; request a new one by returning to the email step.",
          },
        ],
      },
      {
        id: "find-your-way-around",
        title: "Find your way around the interface",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Sidebar",
                text: "The left navigation includes Dashboard, Assets, Assets Discovery, Findings, AI Security Analyst, a collapsible Attack Surface group with eight sections, and a Manage area for Scan Settings, Notifications, and Users & Roles. Collapse it to an icon rail with the panel button in its header.",
              },
              {
                label: "Profile menu",
                text: "At the bottom of the sidebar, the profile menu shows your name, email, and role. It contains Sign out.",
              },
              {
                label: "Light and dark theme",
                text: "Every page has a sun/moon button in the top-right of the header. Your choice is remembered; on a first visit, the app follows your system preference.",
              },
              {
                label: "Mobile navigation",
                text: "On mobile, the sidebar becomes a slide-in menu opened from the top bar.",
              },
            ],
          },
        ],
      },
      {
        id: "first-run-checklist",
        title: "First-run checklist",
        blocks: [
          {
            type: "paragraph",
            text: "A brand-new organisation has no data yet. To get value quickly:",
          },
          {
            type: "steps",
            items: [
              {
                title: "Add your first domain",
                description:
                  "Go to Assets → Add Asset, choose type Domain, and enter your root domain, such as example.com.",
              },
              {
                title: "Turn on data collection",
                description:
                  "Go to Scan Settings → Settings and enable the checks you want. Click Save Settings.",
              },
              {
                title: "Run your first scans",
                description:
                  "Click Run Scan Now. Run an Asset Discovery first to find subdomains and IPs, then a Security Scan to check them.",
              },
              {
                title: "Review the results",
                description:
                  "Watch progress in Scan Settings → Scan Runs, then explore the Dashboard, Findings, and Attack Surface pages.",
              },
              {
                title: "Schedule recurring scans",
                description:
                  "Optionally, set up recurring scans in Scan Settings → Schedules so this happens automatically.",
              },
            ],
          },
        ],
      },
    ],
    related: ["dashboard", "assets-and-discovery", "scan-settings"],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    navLabel: "Dashboard",
    description: "Your security posture at a glance.",
    summary:
      "Read the scan-run summary, posture cards, recent activity, and severity breakdown.",
    category: "using-securelyze",
    icon: "dashboard",
    sections: [
      {
        id: "what-the-dashboard-shows",
        title: "What the Dashboard shows",
        blocks: [
          {
            type: "paragraph",
            text: "The Dashboard summarises your security posture for a chosen scan run. It is the fastest way to see what changed, what needs attention, and where to go next.",
          },
        ],
      },
      {
        id: "controls",
        title: "Controls",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Scan-run selector",
                text: "At the top right, choose which scan run the dashboard reports on. It defaults to your most recent run and remembers your selection.",
              },
              {
                label: "Run Scan",
                text: "Jumps to Scan Settings to launch a scan.",
              },
            ],
          },
        ],
      },
      {
        id: "stat-cards",
        title: "Stat cards",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Total Assets",
                text: "The number of assets in the selected run's view.",
              },
              {
                label: "New Assets This Week",
                text: "Assets first seen during the current week.",
              },
              {
                label: "High-Risk Findings",
                text: "Findings that need attention first.",
              },
              {
                label: "Security Score",
                text: "A score out of 100 for the selected run.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "The cards include week-over-week trends so you can see whether the picture is improving or changing.",
          },
        ],
      },
      {
        id: "scan-status-and-recent-activity",
        title: "Scan status and recent activity",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Last Scan Completed",
                text: "Confirms the most recent successful scan and shows the next scheduled scan time if you have a schedule.",
              },
              {
                label: "Recent Findings",
                text: "The latest findings with severity and status. View All Findings opens the full list.",
              },
              {
                label: "Recently Discovered Assets",
                text: "The newest assets with relative timestamps. View All Assets opens the inventory.",
              },
              {
                label: "Findings by Severity",
                text: "A bar breakdown across Critical, High, Medium, Low, and Info.",
              },
            ],
          },
        ],
      },
      {
        id: "empty-state",
        title: "Empty state",
        blocks: [
          {
            type: "callout",
            tone: "info",
            title: "No scan data yet",
            text: "If there is no data for the selected run, the dashboard shows a No scan data yet state with a Run Scan shortcut. Run a scan, or pick a different run from the selector.",
          },
        ],
      },
    ],
    related: ["findings", "assets-and-discovery", "scan-settings"],
  },
  {
    slug: "assets-and-discovery",
    title: "Assets & Asset Discovery",
    navLabel: "Assets & Discovery",
    description:
      "Your asset inventory, plus the discovery workflow for finding assets you did not know you had.",
    summary:
      "Browse and manage your inventory, then discover, review, and import new assets.",
    category: "using-securelyze",
    icon: "assets",
    sections: [
      {
        id: "asset-inventory",
        title: "Asset inventory",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Search",
                text: "Filters the visible page by asset value.",
              },
              {
                label: "Status filter",
                text: "All, Discovered, Active, or Ignored.",
              },
              {
                label: "Type filter",
                text: "All, Domain, Subdomain, or IP Address.",
              },
              {
                label: "Table",
                text: "Shows the asset value, its type, status, and when it was first seen. Results are paginated at 20 per page.",
              },
            ],
          },
        ],
      },
      {
        id: "asset-statuses",
        title: "Asset statuses",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Discovered",
                text: "Found by a scan or newly added; not yet confirmed as in-scope.",
              },
              {
                label: "Active",
                text: "Confirmed and monitored.",
              },
              {
                label: "Ignored",
                text: "Deliberately excluded from attention.",
              },
            ],
          },
        ],
      },
      {
        id: "working-with-assets",
        title: "Working with assets",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Details drawer",
                text: "Click a row to open full metadata, including status, active flag, first seen, and IDs, plus Edit and Delete buttons.",
              },
              {
                label: "Row menu",
                text: "Use the ⋯ menu for View Details, Edit, and Delete.",
              },
              {
                label: "Editing",
                text: "Change the type, value, status, and active flag.",
              },
              {
                label: "Bulk delete",
                text: "Tick the checkboxes or select all, then use Delete Selected in the bar that appears. You will see the full list of what is being deleted before confirming.",
              },
            ],
          },
          {
            type: "callout",
            tone: "danger",
            title: "Deletions cannot be undone",
            text: "Review the selected assets carefully before confirming a bulk delete.",
          },
        ],
      },
      {
        id: "adding-an-asset",
        title: "Adding an asset",
        blocks: [
          {
            type: "paragraph",
            text: "Assets → Add Asset opens a short form:",
          },
          {
            type: "list",
            items: [
              {
                label: "Asset Type",
                text: "Domain, Subdomain, or IP Address.",
              },
              {
                label: "Value",
                text: "For example, example.com or 192.168.1.1.",
              },
              {
                label: "Status",
                text: "Defaults to Discovered.",
              },
              {
                label: "First Seen At",
                text: "Pre-filled with now.",
              },
              {
                label: "Active",
                text: "Checked by default.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "You can add one asset at a time. For bulk intake, use Assets Discovery instead; it finds and imports many assets in one run.",
          },
        ],
      },
      {
        id: "running-an-asset-discovery",
        title: "Running an asset discovery",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Trigger Discovery",
                description:
                  "Click Trigger Discovery to start a new discovery run.",
              },
              {
                title: "Enter a root domain",
                description:
                  "For example, example.com. Securelyze will look for similar domains, subdomains, and resolved IPs.",
              },
              {
                title: "Let the run finish",
                description:
                  "The run starts in the background. You get a toast immediately and another when it finishes. While a run is in progress, the page polls automatically and the Refresh button reads Scanning….",
              },
            ],
          },
        ],
      },
      {
        id: "reviewing-discovery-results",
        title: "Reviewing discovery results",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Run selector",
                text: "Lists past discovery runs with their domain, asset count, date, and status: Running, Completed, or Failed.",
              },
              {
                label: "Results table",
                text: "Shows each discovered asset's value, type, status (Pending, Imported, or Ignored), and discovery time, with the same search and filters as the Assets page.",
              },
            ],
          },
        ],
      },
      {
        id: "importing-or-ignoring",
        title: "Importing or ignoring",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Per row",
                text: "Hover a row and use the green ✓ (Approve / Import) or red ✕ (Reject / Ignore).",
              },
              {
                label: "In bulk",
                text: "Tick multiple rows, then choose Import or Ignore from the selection bar.",
              },
              {
                label: "Ignoring",
                text: "Ignoring prompts for an optional reason, which is useful for audit trails, such as belongs to marketing agency or decommissioned.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Imported assets appear in your Assets inventory and are included in future Security Scans.",
          },
        ],
      },
    ],
    related: ["scan-settings", "dashboard", "attack-surface"],
  },
  {
    slug: "findings",
    title: "Security Findings",
    navLabel: "Security Findings",
    description: "Every security issue in one place.",
    summary:
      "Understand severity, filter the list, review details, and use AI analysis to plan remediation.",
    category: "using-securelyze",
    icon: "findings",
    sections: [
      {
        id: "severity-model",
        title: "Severity model",
        blocks: [
          {
            type: "paragraph",
            text: "Each finding has a score from 0 to 10, mapped to severity bands:",
          },
          {
            type: "table",
            headers: ["Severity", "Score"],
            rows: [
              ["Critical", "9–10"],
              ["High", "7–8"],
              ["Medium", "4–6"],
              ["Low", "1–3"],
              ["Info", "0"],
            ],
          },
        ],
      },
      {
        id: "browsing-findings",
        title: "Browsing findings",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Scan-run selector",
                text: "View findings from All Scans (the default) or a single run. Your choice is remembered.",
              },
              {
                label: "Stat cards",
                text: "Total findings, Open, and Resolved rate.",
              },
              {
                label: "Severity chips",
                text: "All, Critical, High, Medium, Low, and Info, each with a live count. Click a chip to filter.",
              },
              {
                label: "Status filter",
                text: "All, Open, Fixed, or Ignored.",
              },
              {
                label: "Table",
                text: "Shows severity, title with a description preview, affected asset, status, and first-seen time. Click any row for details.",
              },
            ],
          },
        ],
      },
      {
        id: "finding-details",
        title: "The finding details drawer",
        blocks: [
          {
            type: "paragraph",
            text: "The drawer opens on the right and contains:",
          },
          {
            type: "list",
            items: [
              "Title, severity, and status.",
              {
                label: "Change status",
                text: "Set Open, Fixed, or Ignored, then click Save.",
              },
              {
                label: "AI Analysis",
                text: "Click Analyze with AI for a plain-language breakdown. Results are cached for your session; use Re-analyze to refresh.",
              },
              {
                label: "Full metadata",
                text: "Description, exact severity score, affected asset, scan run, detection time, and finding ID.",
              },
              {
                label: "Actions",
                text: "Edit and Delete buttons are available in the drawer.",
              },
            ],
          },
        ],
      },
      {
        id: "ai-analysis",
        title: "AI Analysis",
        blocks: [
          {
            type: "paragraph",
            text: "An AI analysis usually takes about 3–15 seconds and can include:",
          },
          {
            type: "list",
            items: [
              "Risk level and estimated effort (Minutes, Hours, or Days).",
              "A summary, Impact, and Exploitability.",
              "Step-by-step Remediation Steps and Verify the Fix.",
              "Prevention Tips and References.",
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Verify before acting",
            text: "AI answers can be wrong. Use the analysis as a starting point and verify remediation advice before changing production systems.",
          },
        ],
      },
      {
        id: "manual-findings",
        title: "Manual findings",
        blocks: [
          {
            type: "paragraph",
            text: "Use New Finding to record issues found outside Securelyze, such as pen-test results or bug-bounty reports. Add a title, description, severity score, and status. You can optionally attach the affected asset and scan run.",
          },
        ],
      },
    ],
    related: ["ai-security-analyst", "attack-surface", "assets-and-discovery"],
  },
  {
    slug: "attack-surface",
    title: "Attack Surface",
    navLabel: "Attack Surface",
    description: "A per-domain deep dive across eight sections.",
    summary:
      "Inspect WHOIS, DNS, subdomains, certificates, infrastructure, services, web, and email from one domain view.",
    category: "using-securelyze",
    icon: "attackSurface",
    sections: [
      {
        id: "how-the-section-works",
        title: "How the section works",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Domain picker",
                text: "At the top right, choose which of your domains to inspect. Your selection is remembered as you move between sections.",
              },
              {
                label: "Refresh",
                text: "Re-fetches the section's data.",
              },
              {
                label: "Data source",
                text: "Data comes from your Security Scans. Each section is populated only when its matching collection toggle is enabled in Scan Settings → Settings. The empty state names the toggle to turn on and provides a shortcut.",
              },
            ],
          },
        ],
      },
      {
        id: "the-eight-sections",
        title: "The eight sections",
        blocks: [
          {
            type: "table",
            headers: ["Section", "What it covers"],
            rows: [
              [
                "WHOIS",
                "Registrar, creation/update/expiry dates with an expiry countdown, EPP status codes, registrant contact, abuse contact, name servers, DNSSEC, and the raw WHOIS record. Many registrars redact registrant details.",
              ],
              [
                "DNS",
                "Published records grouped by type (A, AAAA, MX, NS, TXT, CNAME, CAA, SOA) with TTLs and MX priorities, plus a per-type count summary.",
              ],
              [
                "Subdomains",
                "Every hostname discovered under the domain, with status, source, and first-seen date. Filterable by name.",
              ],
              [
                "Certificates",
                "The TLS certificate or certificates currently served, including issuer, common name, SANs, validity window, serial, and algorithms, plus Certificate Transparency history.",
              ],
              [
                "Infrastructure",
                "Where the domain is hosted: IPs with ASN, ISP, cloud provider/region, and geography.",
              ],
              [
                "Services",
                "Open ports and what is listening on them: protocol, service, product, version, and banner. Ports that should not normally face the internet, such as SSH, RDP, and databases, are flagged as sensitive.",
              ],
              [
                "Web",
                "Every HTTP/HTTPS endpoint with status code, server, redirects, detected technologies, response headers, missing security headers, and cookie security flags.",
              ],
              [
                "Email",
                "MX records and the mail security posture: SPF, DKIM, DMARC, and MTA-STS records, each with a Valid, Weak, Invalid, or Missing verdict, plus specific issues.",
              ],
            ],
          },
        ],
      },
      {
        id: "copying-values",
        title: "Copying values",
        blocks: [
          {
            type: "paragraph",
            text: "Values throughout the Attack Surface view have one-click copy buttons that appear on hover.",
          },
          {
            type: "callout",
            tone: "info",
            title: "A section says No data yet?",
            text: "Check the matching collection toggle in Scan Settings, run a Security Scan after enabling it, then refresh the section.",
          },
        ],
      },
    ],
    related: ["scan-settings", "findings", "assets-and-discovery"],
  },
  {
    slug: "ai-security-analyst",
    title: "AI Security Analyst",
    navLabel: "AI Security Analyst",
    description:
      "Ask questions in plain language and get answers grounded in your actual data.",
    summary:
      "Use the chat, scope it to a domain, and review answers with cited sources.",
    category: "using-securelyze",
    icon: "ai",
    sections: [
      {
        id: "using-the-chat",
        title: "Using the chat",
        blocks: [
          {
            type: "paragraph",
            text: "Open AI Security Analyst from the sidebar. Type a question and press Enter, or press Shift+Enter for a new line. You can also pick one of the suggestion cards:",
          },
          {
            type: "list",
            items: [
              {
                label: "What should I fix first?",
                text: "Risk-ranked remediation priorities.",
              },
              {
                label: "Explain my exposure",
                text: "A summary of your external attack surface.",
              },
              {
                label: "Check email spoofing risk",
                text: "An SPF, DKIM, DMARC, and MTA-STS review.",
              },
              {
                label: "Review exposed services",
                text: "Internet-facing services that should not be exposed.",
              },
            ],
          },
        ],
      },
      {
        id: "scoping-the-conversation",
        title: "Scoping the conversation",
        blocks: [
          {
            type: "paragraph",
            text: "Use the dropdown in the header to choose All assets (the default) or a single domain. Scoping focuses every answer on that domain. Answers can cite sources as chips under the reply, pointing at the data they drew from.",
          },
        ],
      },
      {
        id: "conversation-behaviour",
        title: "Conversation behaviour",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Saved locally",
                text: "Your current conversation is saved locally. Reload the page or navigate away and it is still there when you come back.",
              },
              {
                label: "New chat",
                text: "The pencil icon clears the thread and starts fresh.",
              },
              {
                label: "Temporary notices",
                text: "If the analyst is temporarily unavailable or you send messages too quickly, you will see a notice. Your question stays in the thread so you can retry.",
              },
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "AI answers can be wrong",
            text: "Verify the answer before acting on remediation advice, especially when changing production systems.",
          },
        ],
      },
    ],
    related: ["findings", "attack-surface", "troubleshooting"],
  },
  {
    slug: "scan-settings",
    title: "Scan Settings",
    navLabel: "Scan Settings",
    description:
      "The control centre for scanning: runs, schedules, and collection toggles.",
    summary:
      "Launch scans, monitor runs, automate schedules, and choose what each scan collects.",
    category: "manage",
    icon: "settings",
    sections: [
      {
        id: "run-scan-now",
        title: "Run Scan Now",
        blocks: [
          {
            type: "paragraph",
            text: "Choose a scan type and launch it immediately:",
          },
          {
            type: "list",
            items: [
              {
                label: "Asset Discovery",
                text: "Discover subdomains, IPs, and certificates.",
              },
              {
                label: "Security Scan",
                text: "Check DNS, HTTP availability, SSL/TLS, ports, and everything else enabled in Settings.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "The run appears in the Scan Runs tab straight away.",
          },
        ],
      },
      {
        id: "scan-runs",
        title: "Scan Runs",
        blocks: [
          {
            type: "paragraph",
            text: "Monitor every scan with summary cards for Running, Queued, Completed, and Failed. Click a card to filter the list.",
          },
          {
            type: "list",
            items: [
              "The refreshable list shows scan type, status, start time, live duration for in-progress runs, and source (manual or scheduled).",
              "Click a run to open its details.",
            ],
          },
        ],
      },
      {
        id: "schedules",
        title: "Schedules",
        blocks: [
          {
            type: "paragraph",
            text: "Automate scanning by creating a schedule with:",
          },
          {
            type: "list",
            items: [
              {
                label: "Scan Type",
                text: "Asset Discovery or Security Scan.",
              },
              {
                label: "Frequency",
                text: "Daily, Weekly with a chosen day, or Monthly.",
              },
              {
                label: "Time of Day",
                text: "Scheduled in IST.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Schedules can be edited, disabled, or deleted at any time. The next scheduled run also shows on the Dashboard.",
          },
        ],
      },
      {
        id: "settings",
        title: "Settings",
        blocks: [
          {
            type: "paragraph",
            text: "Settings provide fine-grained control over what each scan does. Enable a group with its master switch, pick individual checks, and click Save Settings.",
          },
          {
            type: "list",
            items: [
              {
                label: "Discovery Options",
                text: "For Asset Discovery scans: Similar Domain Discovery, Subdomain Enumeration, DNS Resolution, IP Resolution, and more.",
              },
              {
                label: "Scan Types",
                text: "For Security Scans: DNS Resolves, HTTP Alive, Ping Alive, Port Scanning, SSL/TLS Checks, HTTP Security Headers, Technology Fingerprint, and the Attack Surface collectors below. Vulnerability Scanning is a Pro feature.",
              },
            ],
          },
        ],
      },
      {
        id: "how-settings-feed-attack-surface",
        title: "How settings feed Attack Surface",
        blocks: [
          {
            type: "paragraph",
            text: "Several toggles directly power the Attack Surface pages:",
          },
          {
            type: "table",
            headers: ["Toggle", "Feeds"],
            rows: [
              ["WHOIS Lookup", "Attack Surface → WHOIS"],
              ["DNS Records", "Attack Surface → DNS"],
              [
                "SSL/TLS Checks",
                "Attack Surface → Certificates (served certificate)",
              ],
              [
                "Certificate Transparency",
                "Attack Surface → Certificates (CT history)",
              ],
              ["Infrastructure", "Attack Surface → Infrastructure"],
              ["Port Scanning", "Attack Surface → Services"],
              [
                "HTTP Alive / Security Headers / Technology Fingerprint",
                "Attack Surface → Web",
              ],
              ["Email Security", "Attack Surface → Email"],
            ],
          },
          {
            type: "paragraph",
            text: "Subdomains come from the Asset Discovery scan rather than a toggle.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Settings apply to future scans",
            text: "After changing toggles, run a Security Scan. Settings control what future scans collect; they do not backfill existing results.",
          },
        ],
      },
    ],
    related: ["attack-surface", "getting-started", "notifications"],
  },
  {
    slug: "notifications",
    title: "Notifications",
    navLabel: "Notifications",
    description:
      "New findings, completed scans, discovered assets, and team activity.",
    summary:
      "Use the notification inbox to follow changes, mark items as read, and filter unread activity.",
    category: "manage",
    icon: "notifications",
    sections: [
      {
        id: "what-appears-in-notifications",
        title: "What appears in Notifications",
        blocks: [
          {
            type: "paragraph",
            text: "Notifications are your inbox for everything that happens in the product: new findings, completed scans, discovered assets, and team activity.",
          },
        ],
      },
      {
        id: "reading-and-managing",
        title: "Reading and managing",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Grouping",
                text: "Notifications are grouped by time: Today, Yesterday, This week, and Earlier. Icons are color-coded by type (alert, warning, info, or success).",
              },
              {
                label: "Unread items",
                text: "Unread notifications are tinted and bolded with a dot. The page title shows an N new badge.",
              },
              {
                label: "Mark as read",
                text: "Click an unread notification, or hover it and use the ✓ button. Mark all as read is in the header.",
              },
              {
                label: "Dismiss",
                text: "Hover a notification and click ✕ to remove it permanently.",
              },
            ],
          },
        ],
      },
      {
        id: "filtering",
        title: "Filtering",
        blocks: [
          {
            type: "paragraph",
            text: "Use the All and Unread tabs to filter the inbox. Unread shows a live count. Long lists are paginated.",
          },
        ],
      },
    ],
    related: ["findings", "scan-settings", "users-roles"],
  },
  {
    slug: "users-roles",
    title: "Users & Roles",
    navLabel: "Users & Roles",
    description:
      "Team management: inviting, managing, and understanding roles.",
    summary:
      "Invite teammates, manage access, and review the four product roles.",
    category: "manage",
    icon: "users",
    sections: [
      {
        id: "users-tab",
        title: "Users tab",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Stat cards",
                text: "Total Users, Active Users, and Pending Invites.",
              },
              {
                label: "Search",
                text: "Find team members by name or email.",
              },
              {
                label: "Table",
                text: "Shows each member's name, email, role, status (Active, Pending, or Suspended), and last login.",
              },
            ],
          },
        ],
      },
      {
        id: "inviting-someone",
        title: "Inviting someone",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the invite form",
                description: "Click Invite User.",
              },
              {
                title: "Enter their details",
                description: "Add their name, email, and role.",
              },
              {
                title: "Share the credentials securely",
                description:
                  "A User Created dialog shows their one-time credentials. Copy the password now; it will not be shown again.",
              },
            ],
          },
        ],
      },
      {
        id: "managing-members",
        title: "Managing members",
        blocks: [
          {
            type: "paragraph",
            text: "From the row menu, you can:",
          },
          {
            type: "list",
            items: [
              {
                label: "Edit Role",
                text: "Change their role.",
              },
              {
                label: "Deactivate / Restore Access",
                text: "Suspend or reinstate a member without removing them.",
              },
              {
                label: "Remove from Org",
                text: "Permanently remove them. Confirmation is required.",
              },
            ],
          },
        ],
      },
      {
        id: "danger-zone",
        title: "Danger Zone (Owner only)",
        blocks: [
          {
            type: "paragraph",
            text: "Delete Organisation permanently removes the organisation, every user account, and all scans, assets, and findings. You must type DELETE to confirm.",
          },
          {
            type: "callout",
            tone: "danger",
            title: "This cannot be undone",
            text: "Deleting the organisation removes the workspace and its security data permanently.",
          },
        ],
      },
      {
        id: "roles",
        title: "Roles",
        blocks: [
          {
            type: "table",
            headers: ["Role", "Intended for"],
            rows: [
              [
                "Owner",
                "Full control, including deleting the organisation.",
              ],
              [
                "Admin",
                "Managing users, settings, and all security data.",
              ],
              [
                "Security Analyst",
                "Day-to-day security work: scans, assets, and findings.",
              ],
              ["Viewer", "Read-only access."],
            ],
          },
          {
            type: "paragraph",
            text: "The exact permission chips shown per role are defined by your organisation's configuration.",
          },
        ],
      },
    ],
    related: ["getting-started", "notifications", "troubleshooting"],
  },
  {
    slug: "troubleshooting",
    title: "Tips & Troubleshooting",
    navLabel: "Tips & Troubleshooting",
    description: "Quick answers to common questions and problems.",
    summary:
      "Work through empty states, access questions, AI notices, and everyday product questions.",
    category: "help",
    icon: "help",
    sections: [
      {
        id: "empty-states-and-missing-data",
        title: "Empty states and missing data",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "An Attack Surface page says No data yet",
                answer:
                  "Two possibilities: the collection toggle for that section is off, or no Security Scan has run since you enabled it. Enable the toggle in Scan Settings, run a Security Scan, then refresh.",
              },
              {
                question: "The Dashboard is empty",
                answer:
                  "No scan has completed yet for the selected run. Run a scan, or pick a different run from the selector.",
              },
            ],
          },
        ],
      },
      {
        id: "access-and-sessions",
        title: "Access and sessions",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "I was suddenly signed out",
                answer:
                  "Your session expired. Sign in again with a fresh email code.",
              },
              {
                question: "Who can see what?",
                answer:
                  "Access is role-based. If a page or action is missing for you, ask an Owner or Admin to review your role in Users & Roles.",
              },
            ],
          },
        ],
      },
      {
        id: "ai-and-findings",
        title: "AI and findings",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "The AI Security Analyst says it is unavailable",
                answer:
                  "The service is temporarily unreachable. Your question is kept in the thread; retry in a moment. If you see a sending too quickly notice, wait a few seconds between messages.",
              },
              {
                question: "A finding is fixed. What now?",
                answer:
                  "Open it, set the status to Fixed, and save. Your Resolved rate on the Findings page updates immediately. Use the AI Analysis Verify the Fix section to confirm the remediation actually worked.",
              },
            ],
          },
        ],
      },
      {
        id: "discovery-and-preferences",
        title: "Discovery and preferences",
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "A discovered asset is not ours",
                answer:
                  "In Assets Discovery, select it and choose Ignore. Add a reason for your future self. Ignored assets stop appearing in your pending review queue.",
              },
              {
                question: "How do I switch to dark mode?",
                answer:
                  "Click the sun/moon icon in any page's top-right corner. Your preference is saved per browser.",
              },
            ],
          },
        ],
      },
    ],
    related: ["scan-settings", "attack-surface", "users-roles"],
  },
];

export function getDocsTopic(slug) {
  return DOCS_TOPICS.find((topic) => topic.slug === slug);
}

export function getDocsTopicsByCategory(categoryId) {
  return DOCS_TOPICS.filter((topic) => topic.category === categoryId);
}

export function getDocsCategory(categoryId) {
  return DOCS_CATEGORIES.find((category) => category.id === categoryId);
}

export function getRelatedTopics(topic) {
  return (topic.related ?? [])
    .map((slug) => getDocsTopic(slug))
    .filter(Boolean);
}

export function getAdjacentTopics(slug) {
  const index = DOCS_TOPICS.findIndex((topic) => topic.slug === slug);

  return {
    previous: index > 0 ? DOCS_TOPICS[index - 1] : null,
    next:
      index >= 0 && index < DOCS_TOPICS.length - 1
        ? DOCS_TOPICS[index + 1]
        : null,
  };
}
