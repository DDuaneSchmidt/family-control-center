// Central content store for the entire static site.
// Update copy, records, labels, and navigation here instead of editing page HTML.
window.familyControlData = {
  // Shared site chrome rendered on every page.
  site: {
    brandTitle: "Family Control Center",
    brandSubtitle: "Household command dashboard",
    navigation: [
      { id: "dashboard", label: "Dashboard", href: "index.html" },
      { id: "accounts", label: "Accounts", href: "accounts.html" },
      { id: "insurance", label: "Insurance", href: "insurance.html" },
      { id: "contacts", label: "Contacts", href: "contacts.html" },
      { id: "documents", label: "Documents", href: "documents.html" },
      { id: "emergency", label: "Emergency", href: "emergency.html" }
    ]
  },
  // Homepage content: shared summary, hero metrics, and dashboard cards.
  dashboard: {
    pageMeta: {
      title: "Family Control Center",
      description: "Premium household dashboard for accounts, insurance, contacts, documents, and emergency readiness."
    },
    chrome: {
      sidebarEyebrow: "Readiness",
      heroEyebrow: "Household Status",
      heroTitle: "Premium oversight for the details that matter.",
      heroCopy: "Track financial readiness, protection gaps, essential contacts, documents, and emergency preparation in one static control center.",
      statusEyebrow: "Snapshot",
      statusTitle: "Household pulse",
      dashboardEyebrow: "Control dashboard",
      dashboardTitle: "Priority sections",
      dashboardCopy: "Each card summarizes the current state, highlights key facts, and provides direct next actions."
    },
    readinessScore: "92%",
    readinessText: "Core records organized, coverage active, and emergency steps documented.",
    heroActions: [
      { label: "Open accounts", href: "accounts.html", variant: "primary" },
      { label: "Emergency page", href: "emergency.html", variant: "secondary" }
    ],
    heroMetrics: [
      { label: "Tracked assets", value: "$2.48M", note: "Across banking, brokerage, retirement, and cash reserve accounts." },
      { label: "Protection renewals", value: "3 upcoming", note: "Home, umbrella, and disability policies renew within 120 days." },
      { label: "Critical contacts", value: "12 verified", note: "Includes legal, medical, wealth, and family support contacts." },
      { label: "Document coverage", value: "87%", note: "Most essential records have both original storage and digital backup." }
    ],
    householdStatus: [
      { label: "Accounts visibility", value: "6 accounts", note: "All major institutions mapped with owners and purpose." },
      { label: "Insurance active", value: "5 policies", note: "Property, life, umbrella, disability, and auto protection tracked." },
      { label: "Emergency readiness", value: "High", note: "Go-bag stocked and primary response steps documented." },
      { label: "Next review", value: "Apr 6", note: "Quarterly household control review scheduled." }
    ],
    sections: [
      {
        eyebrow: "Household Status",
        title: "Readiness across the whole household",
        description: "Use the dashboard as the top-level weekly check for coverage, documentation, and emergency preparedness.",
        facts: ["92% household readiness", "Quarterly review set for Apr 6", "Core records organized"],
        actions: [
          { label: "Refresh dashboard", href: "index.html", variant: "secondary" },
          { label: "Review emergency", href: "emergency.html", variant: "ghost" }
        ]
      },
      {
        eyebrow: "Accounts Summary",
        title: "Liquidity and custody posture",
        description: "Cash reserve, taxable accounts, and retirement assets are visible with owners and access details.",
        facts: ["$148K emergency cash", "$1.31M retirement assets", "6 mapped accounts"],
        actions: [
          { label: "View accounts", href: "accounts.html", variant: "primary" },
          { label: "Check reserve", href: "accounts.html", variant: "ghost" }
        ]
      },
      {
        eyebrow: "Insurance Summary",
        title: "Coverage and renewal visibility",
        description: "Property, liability, life, disability, and auto policies are tracked with carrier and renewal context.",
        facts: ["5 active policies", "$3M umbrella layer", "3 renewals upcoming"],
        actions: [
          { label: "View insurance", href: "insurance.html", variant: "primary" },
          { label: "Open renewals", href: "insurance.html", variant: "ghost" }
        ]
      },
      {
        eyebrow: "Key Contacts",
        title: "Trusted people at a glance",
        description: "Professional and family escalation contacts are grouped so the right person is reachable quickly.",
        facts: ["12 verified contacts", "5 professional advisors", "Out-of-area backup listed"],
        actions: [
          { label: "Open contacts", href: "contacts.html", variant: "primary" },
          { label: "Emergency chain", href: "contacts.html", variant: "ghost" }
        ]
      },
      {
        eyebrow: "Documents",
        title: "Critical records and backups",
        description: "Document entries capture category, storage notes, and a future-ready field for direct Drive access.",
        facts: ["15 tracked records", "13 digital backups", "Drive links supported"],
        actions: [
          { label: "View documents", href: "documents.html", variant: "primary" },
          { label: "Check backups", href: "documents.html", variant: "ghost" }
        ]
      },
      {
        eyebrow: "Emergency Access",
        title: "Fast actions under pressure",
        description: "Immediate steps, supply readiness, and fallback coordination stay accessible from any static page load.",
        facts: ["9-step response checklist", "94% go-bag completion", "2-layer contact redundancy"],
        actions: [
          { label: "Open emergency", href: "emergency.html", variant: "primary" },
          { label: "First actions", href: "emergency.html", variant: "ghost" }
        ]
      }
    ]
  },
  // Accounts page content and record grid.
  accounts: {
    pageMeta: {
      title: "Accounts | Family Control Center",
      description: "Household accounts overview for banking, brokerage, retirement, and cash reserve visibility."
    },
    chrome: {
      sidebarEyebrow: "Accounts focus",
      pageEyebrow: "Accounts",
      pageTitle: "All household accounts in one view.",
      pageCopy: "Review balances, owners, institution contacts, and the purpose of each account.",
      statsEyebrow: "Summary",
      statsTitle: "Account posture",
      recordsEyebrow: "Account directory",
      recordsTitle: "Institutions and balances"
    },
    aside: {
      title: "$2.48M tracked",
      text: "Cash flow, reserve, brokerage, and retirement balances are visible across six accounts."
    },
    stats: [
      { label: "Institutions", value: "4", note: "Banking, brokerage, retirement, and HSA providers." },
      { label: "Emergency cash", value: "$148K", note: "Immediately available across checking and reserve savings." },
      { label: "Retirement", value: "$1.31M", note: "401(k), rollover IRA, and Roth allocations." },
      { label: "Taxable investing", value: "$822K", note: "Brokerage and short-term treasury ladder." }
    ],
    records: [
      {
        title: "Primary Checking",
        subtitle: "First Republic transition via JPMorgan",
        tags: ["Joint", "Cash management", "Online access verified"],
        fields: {
          Balance: "$42,600",
          Owners: "Alex & Morgan",
          Purpose: "Bills and household operating cash",
          Access: "Shared password vault"
        }
      },
      {
        title: "Reserve Savings",
        subtitle: "Ally Bank high-yield reserve",
        tags: ["Joint", "Emergency fund", "ACH enabled"],
        fields: {
          Balance: "$105,500",
          Owners: "Alex & Morgan",
          Purpose: "9-month cash reserve",
          Access: "Two-factor enabled"
        }
      },
      {
        title: "Taxable Brokerage",
        subtitle: "Fidelity family investing account",
        tags: ["Joint", "Brokerage", "Beneficiaries updated"],
        fields: {
          Balance: "$822,400",
          Owners: "Alex & Morgan",
          Purpose: "Long-term taxable investing",
          Access: "Advisor-view access active"
        }
      },
      {
        title: "401(k)",
        subtitle: "Employer retirement plan",
        tags: ["Alex", "Retirement", "Auto-contribution"],
        fields: {
          Balance: "$776,900",
          Owners: "Alex",
          Purpose: "Primary retirement accumulation",
          Access: "Employer portal"
        }
      },
      {
        title: "Roth IRA",
        subtitle: "Backdoor Roth account",
        tags: ["Morgan", "Retirement", "Beneficiary current"],
        fields: {
          Balance: "$188,000",
          Owners: "Morgan",
          Purpose: "Tax-free retirement bucket",
          Access: "Vault and printed note"
        }
      },
      {
        title: "Health Savings Account",
        subtitle: "Medical reserve and investing",
        tags: ["Family", "HSA", "Investment sweep"],
        fields: {
          Balance: "$47,200",
          Owners: "Alex",
          Purpose: "Qualified medical expenses",
          Access: "Portal linked in vault"
        }
      }
    ]
  },
  // Insurance page content and policy records.
  insurance: {
    pageMeta: {
      title: "Insurance | Family Control Center",
      description: "Household insurance dashboard for policy coverage, renewal timing, and carrier contacts."
    },
    chrome: {
      sidebarEyebrow: "Coverage focus",
      pageEyebrow: "Insurance",
      pageTitle: "Policy visibility without chasing paperwork.",
      pageCopy: "Track carriers, premiums, renewals, and household protection gaps with a clean static dashboard.",
      statsEyebrow: "Summary",
      statsTitle: "Coverage profile",
      recordsEyebrow: "Policies",
      recordsTitle: "Carrier and renewal detail"
    },
    aside: {
      title: "5 active policies",
      text: "Coverage details, premiums, and renewals are organized by carrier and policy purpose."
    },
    stats: [
      { label: "Annual premium", value: "$19,840", note: "Combined property, liability, life, auto, and disability premiums." },
      { label: "Renewals upcoming", value: "3", note: "Next policy review cycle begins in 38 days." },
      { label: "Life coverage", value: "$2.5M", note: "Term life coverage across both adults." },
      { label: "Liability layer", value: "$3M", note: "Umbrella coverage extends auto and home liability." }
    ],
    records: [
      {
        title: "Homeowners",
        subtitle: "Chubb master property policy",
        tags: ["Renews Jun 12", "Property", "Claims portal active"],
        fields: {
          Coverage: "$1.8M dwelling",
          Premium: "$6,420 / year",
          Contact: "Broker + carrier claims hotline",
          Notes: "Includes scheduled jewelry rider"
        }
      },
      {
        title: "Auto",
        subtitle: "Chubb bundled family vehicles",
        tags: ["Renews Jun 12", "Auto", "2 vehicles"],
        fields: {
          Coverage: "250/500 liability",
          Premium: "$3,280 / year",
          Contact: "Broker and mobile app",
          Notes: "Roadside and rental reimbursement active"
        }
      },
      {
        title: "Umbrella",
        subtitle: "Personal excess liability",
        tags: ["Renews Jun 12", "Umbrella", "Priority"],
        fields: {
          Coverage: "$3M",
          Premium: "$1,150 / year",
          Contact: "Broker direct line",
          Notes: "Review target increase next renewal"
        }
      },
      {
        title: "Term Life",
        subtitle: "Dual insured term policies",
        tags: ["Review Sep 1", "Life", "Beneficiaries verified"],
        fields: {
          Coverage: "$2.5M combined",
          Premium: "$5,960 / year",
          Contact: "Carrier service center",
          Notes: "Trust listed as contingent beneficiary"
        }
      },
      {
        title: "Disability",
        subtitle: "Own-occupation private policy",
        tags: ["Review Aug 18", "Income protection", "Needs check"],
        fields: {
          Coverage: "$12,000 / month",
          Premium: "$3,030 / year",
          Contact: "Independent agent",
          Notes: "Confirm elimination period and riders"
        }
      }
    ]
  },
  // Contacts page content and directory records.
  contacts: {
    pageMeta: {
      title: "Contacts | Family Control Center",
      description: "Trusted household contacts for legal, medical, financial, and emergency support."
    },
    chrome: {
      sidebarEyebrow: "Contacts focus",
      pageEyebrow: "Contacts",
      pageTitle: "Every critical contact, organized by role.",
      pageCopy: "Keep legal, medical, financial, and household support contacts available from any device.",
      statsEyebrow: "Summary",
      statsTitle: "Support network",
      recordsEyebrow: "Directory",
      recordsTitle: "People and institutions"
    },
    aside: {
      title: "12 verified contacts",
      text: "Primary family, legal, financial, and medical contacts are grouped by role and urgency."
    },
    stats: [
      { label: "Family emergency contacts", value: "4", note: "Primary, secondary, local, and out-of-state check-in contacts." },
      { label: "Professional advisors", value: "5", note: "Attorney, CPA, wealth advisor, insurance broker, and banker." },
      { label: "Medical providers", value: "3", note: "Primary care, pediatric, and pharmacy contacts." },
      { label: "Verification cadence", value: "Quarterly", note: "Contact details reviewed with each household control check." }
    ],
    records: [
      {
        title: "Estate Attorney",
        subtitle: "Henderson Private Counsel",
        tags: ["Legal", "Priority", "Weekday response"],
        fields: {
          Contact: "Jordan Henderson",
          Phone: "(212) 555-0142",
          Email: "jordan@hendersoncounsel.example",
          Role: "Will, trust, POA, healthcare directives"
        }
      },
      {
        title: "Wealth Advisor",
        subtitle: "North Harbor Advisory",
        tags: ["Financial", "Advisor", "Secure portal"],
        fields: {
          Contact: "Riley Chen, CFP",
          Phone: "(617) 555-0128",
          Email: "rchen@northharbor.example",
          Role: "Investment oversight and family planning"
        }
      },
      {
        title: "Insurance Broker",
        subtitle: "Summit Risk Partners",
        tags: ["Insurance", "Claims", "Mobile"],
        fields: {
          Contact: "Taylor Brooks",
          Phone: "(914) 555-0182",
          Email: "tbrooks@summitrisk.example",
          Role: "Property, auto, umbrella, disability"
        }
      },
      {
        title: "Primary Care",
        subtitle: "Hudson Family Medicine",
        tags: ["Medical", "Adults", "Patient portal"],
        fields: {
          Contact: "Dr. Priya Shah",
          Phone: "(646) 555-0190",
          Email: "office@hudsonfm.example",
          Role: "Primary care and medication history"
        }
      },
      {
        title: "Pediatrician",
        subtitle: "West End Pediatrics",
        tags: ["Medical", "Children", "After-hours line"],
        fields: {
          Contact: "Dr. Elena Rivera",
          Phone: "(212) 555-0116",
          Email: "care@westendpeds.example",
          Role: "Child health records and emergency advice"
        }
      },
      {
        title: "Family Emergency Contact",
        subtitle: "Out-of-area coordination",
        tags: ["Family", "Emergency", "Backup"],
        fields: {
          Contact: "Sam Carter",
          Phone: "(704) 555-0177",
          Email: "samcarter@example.com",
          Role: "Out-of-state family coordination"
        }
      }
    ]
  },
  // Documents page content.
  // `drive_link` is optional and can be populated later with a Google Drive URL.
  // `last_reviewed` should stay in YYYY-MM-DD format for consistent display.
  documents: {
    pageMeta: {
      title: "Documents | Family Control Center",
      description: "Household document tracker for legal, financial, insurance, and identity records."
    },
    chrome: {
      sidebarEyebrow: "Records focus",
      pageEyebrow: "Documents",
      pageTitle: "Critical records mapped to where they live.",
      pageCopy: "Track originals, digital backups, and access status for the household documents that matter most.",
      statsEyebrow: "Summary",
      statsTitle: "Document posture",
      recordsEyebrow: "Inventory",
      recordsTitle: "Storage and access details"
    },
    aside: {
      title: "87% documented",
      text: "Most critical records have mapped storage, owners, and digital backup status."
    },
    stats: [
      { label: "Tracked records", value: "15", note: "Estate, identity, property, tax, and insurance records indexed." },
      { label: "Digital backup", value: "13", note: "Encrypted copies stored offline and in secure cloud vault." },
      { label: "Originals located", value: "12", note: "Original paper copies mapped to safe, vault, or deposit box." },
      { label: "Needs action", value: "2 items", note: "Vehicle title scan and updated passport copies still pending." }
    ],
    records: [
      {
        title: "Estate Plan Binder",
        category: "Legal",
        description: "Will, trust, powers of attorney, and healthcare directives with current originals and backup copies.",
        tags: ["Legal", "Original + digital", "High priority"],
        drive_link: "",
        last_reviewed: "2026-01-18",
        fields: {
          Location: "Home safe",
          Backup: "Encrypted drive + secure cloud",
          Owner: "Alex & Morgan",
          Status: "Current as of Jan 2026"
        }
      },
      {
        title: "Identity Packet",
        category: "Identity",
        description: "Passports, birth certificates, and identity copies grouped for household travel and verification needs.",
        tags: ["Identity", "Original + digital", "Family"],
        drive_link: "",
        last_reviewed: "2026-02-04",
        fields: {
          Location: "Safe deposit box",
          Backup: "Encrypted drive",
          Owner: "Family",
          Status: "Passport copy refresh pending"
        }
      },
      {
        title: "Property and Vehicle Records",
        category: "Property",
        description: "Deed, mortgage note, titles, and registrations with one remaining scan still needed.",
        tags: ["Property", "Mixed backup", "Needs action"],
        drive_link: "",
        last_reviewed: "2026-02-11",
        fields: {
          Location: "Fire safe + filing cabinet",
          Backup: "Partial digital archive",
          Owner: "Alex & Morgan",
          Status: "Vehicle title scan outstanding"
        }
      },
      {
        title: "Insurance Archive",
        category: "Insurance",
        description: "Declarations pages, policy schedules, and claims contact information for active coverage.",
        tags: ["Insurance", "Digital first", "Current"],
        drive_link: "",
        last_reviewed: "2026-03-01",
        fields: {
          Location: "Secure cloud vault",
          Backup: "Printed summary in binder",
          Owner: "Family",
          Status: "Updated with current renewal cycle"
        }
      },
      {
        title: "Tax Records",
        category: "Tax",
        description: "Returns, K-1s, and supporting PDFs retained with CPA-accessible storage.",
        tags: ["Tax", "7-year archive", "CPA shared"],
        drive_link: "",
        last_reviewed: "2026-02-21",
        fields: {
          Location: "Encrypted cloud folder",
          Backup: "Offline archive disk",
          Owner: "Alex & Morgan",
          Status: "Complete through 2025 filing"
        }
      },
      {
        title: "Medical Information Packet",
        category: "Medical",
        description: "Insurance cards, medication lists, and allergy information for travel and emergency use.",
        tags: ["Medical", "Travel copy", "Ready"],
        drive_link: "",
        last_reviewed: "2026-03-07",
        fields: {
          Location: "Kitchen command drawer",
          Backup: "Phone PDFs + cloud vault",
          Owner: "Family",
          Status: "Reviewed during last quarterly check"
        }
      }
    ]
  },
  // Emergency page content with immediate actions and preparedness lists.
  emergency: {
    pageMeta: {
      title: "Emergency | Family Control Center",
      description: "Emergency readiness dashboard for first actions, go-bag items, medical needs, and safe meeting details."
    },
    chrome: {
      sidebarEyebrow: "Readiness focus",
      pageEyebrow: "Emergency",
      pageTitle: "Readiness details when speed matters most.",
      pageCopy: "Keep emergency instructions, supplies, key contacts, and critical household actions structured and easy to scan.",
      statsEyebrow: "Summary",
      statsTitle: "Emergency posture",
      actionsEyebrow: "First actions",
      actionsTitle: "Immediate steps",
      preparednessEyebrow: "Preparedness",
      preparednessTitle: "Go-bag and medical essentials"
    },
    aside: {
      title: "Readiness high",
      text: "Core emergency actions, meeting point, supplies, and medical information are clearly documented."
    },
    stats: [
      { label: "Action checklist", value: "9 steps", note: "Immediate actions ordered from emergency response to family check-in." },
      { label: "Go-bag completion", value: "94%", note: "Only backup eyeglass kit remains to be added." },
      { label: "Medical packet", value: "Current", note: "Medication, allergy, and insurance summaries updated last month." },
      { label: "Contact redundancy", value: "2 layers", note: "Primary family plan plus out-of-area backup coordination." }
    ],
    actions: [
      { title: "Call emergency services", note: "Dial 911 first for life-threatening events before starting family notification steps." },
      { title: "Use family group alert", note: "Send predefined text to immediate family and backup contact with location and status." },
      { title: "Secure house utilities if needed", note: "Shut off gas, water, or electricity only when safety guidance requires it." },
      { title: "Move to the primary meeting point", note: "If home is unsafe, regroup at the designated nearby location before reassessing." }
    ],
    preparedness: [
      { title: "Go-bag contents", note: "IDs, chargers, printed contact sheet, medication list, cash, keys, and spare clothing." },
      { title: "Medical essentials", note: "Current prescriptions, pediatric dosing notes, allergies, and insurance card copies." },
      { title: "Temporary housing plan", note: "Preferred hotel area, nearby family option, and insurance claim number are documented." },
      { title: "Backup coordination", note: "Out-of-state contact coordinates if local networks are disrupted." }
    ]
  }
};
