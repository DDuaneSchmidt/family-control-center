window.familyControlData = {
  dashboard: {
    readinessScore: "92%",
    readinessText: "Core records organized, coverage active, and emergency steps documented.",
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
    accountsSummary: [
      { title: "Operating cash remains above target.", note: "Primary checking plus reserve cash covers 9 months of core household expenses." },
      { title: "Brokerage concentration is manageable.", note: "Taxable account remains diversified across index and municipal bond sleeves." },
      { title: "Retirement accounts are fully mapped.", note: "401(k), Roth IRA, and beneficiary details are recorded." }
    ],
    insuranceSummary: [
      { title: "Umbrella coverage is current.", note: "$3M umbrella policy remains active with annual renewal tracked." },
      { title: "Disability policy requires review.", note: "Benefit level is solid, but elimination period should be reconfirmed." },
      { title: "Home and auto are bundled.", note: "Carrier contact and policy IDs are included for claims access." }
    ],
    contactsSummary: [
      { title: "Professional support network is complete.", note: "Attorney, CPA, wealth advisor, and insurance broker are listed." },
      { title: "Medical contacts are in one place.", note: "Primary care, pediatric, and pharmacy information are readily accessible." },
      { title: "Family escalation chain is clear.", note: "Primary and secondary emergency contacts are documented." }
    ],
    documentsSummary: [
      { title: "Estate documents backed up.", note: "Will, trust, powers of attorney, and healthcare directives have digital copies." },
      { title: "Identity records tracked.", note: "Passports, birth certificates, and social security copies are indexed." },
      { title: "Storage map is documented.", note: "Originals, safe deposit, and encrypted drive locations are listed." }
    ],
    emergencySummary: [
      { title: "First actions are documented by priority.", note: "911, family check-in, home utilities, and temporary housing steps are defined." },
      { title: "Medical and travel kits are current.", note: "Medication list, chargers, IDs, and basic cash reserve are included." },
      { title: "Meeting point and backup plan are set.", note: "Primary meeting point and alternate out-of-area contact are recorded." }
    ]
  },
  accounts: {
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
  insurance: {
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
  contacts: {
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
  documents: {
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
        subtitle: "Will, trust, POA, healthcare directives",
        tags: ["Legal", "Original + digital", "High priority"],
        fields: {
          Location: "Home safe",
          Backup: "Encrypted drive + secure cloud",
          Owner: "Alex & Morgan",
          Status: "Current as of Jan 2026"
        }
      },
      {
        title: "Identity Packet",
        subtitle: "Passports, birth certificates, social security copies",
        tags: ["Identity", "Original + digital", "Family"],
        fields: {
          Location: "Safe deposit box",
          Backup: "Encrypted drive",
          Owner: "Family",
          Status: "Passport copy refresh pending"
        }
      },
      {
        title: "Property and Vehicle Records",
        subtitle: "Deed, mortgage note, titles, registrations",
        tags: ["Property", "Mixed backup", "Needs action"],
        fields: {
          Location: "Fire safe + filing cabinet",
          Backup: "Partial digital archive",
          Owner: "Alex & Morgan",
          Status: "Vehicle title scan outstanding"
        }
      },
      {
        title: "Insurance Archive",
        subtitle: "Declarations pages and claims contacts",
        tags: ["Insurance", "Digital first", "Current"],
        fields: {
          Location: "Secure cloud vault",
          Backup: "Printed summary in binder",
          Owner: "Family",
          Status: "Updated with current renewal cycle"
        }
      },
      {
        title: "Tax Records",
        subtitle: "Returns, K-1s, and supporting PDFs",
        tags: ["Tax", "7-year archive", "CPA shared"],
        fields: {
          Location: "Encrypted cloud folder",
          Backup: "Offline archive disk",
          Owner: "Alex & Morgan",
          Status: "Complete through 2025 filing"
        }
      },
      {
        title: "Medical Information Packet",
        subtitle: "Insurance cards, medication lists, allergies",
        tags: ["Medical", "Travel copy", "Ready"],
        fields: {
          Location: "Kitchen command drawer",
          Backup: "Phone PDFs + cloud vault",
          Owner: "Family",
          Status: "Reviewed during last quarterly check"
        }
      }
    ]
  },
  emergency: {
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
