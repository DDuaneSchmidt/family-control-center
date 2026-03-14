// Central content store for the entire static site.
// This app is a compact launcher into the real Google Drive folder structure.
// Replace only the `drive_link` values when real Google Drive URLs are available.
window.familyControlData = {
  site: {
    brandTitle: "Family Control Center",
    brandSubtitle: "Google Drive launcher",
    navigation: [
      { id: "dashboard", label: "Dashboard", href: "index.html" },
      { id: "accounts", label: "Financial Map", href: "accounts.html" },
      { id: "insurance", label: "Insurance", href: "insurance.html" },
      { id: "contacts", label: "Contacts", href: "contacts.html" },
      { id: "documents", label: "All Folders", href: "documents.html" },
      { id: "emergency", label: "Emergency", href: "emergency.html" }
    ],
    folders: [
      {
        id: "00_START_HERE",
        title: "00_START_HERE",
        category: "Core",
        description: "Where someone should begin",
        detail_page: "section-start-here.html",
        // Google Drive folder link for 00_START_HERE
        drive_link: "https://drive.google.com/drive/folders/1mIgo0a6Z-R2wLOff15PzSkcYUM8rPAXM",
        what_this_is_for: "This is the starting point for the whole Family Control Center system.",
        what_to_do_first: "Read this section before opening other folders so you understand how the system is organized.",
        important_notes: [
          "Use this page first when you are orienting yourself or helping someone else.",
          "Move to other sections only after you understand where to find the most important materials.",
          "If something urgent has happened, use this section to get grounded before acting."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "01_If_David_Dies",
        title: "01_If_David_Dies",
        category: "Emergency",
        description: "Immediate steps, first 30 days, and first 90 days",
        detail_page: "section-if-david-dies.html",
        // Google Drive folder link for 01_If_David_Dies
        drive_link: "https://drive.google.com/drive/folders/1lvHJ0BhXY63YuQZ9XGEybKVJIx2QUZF_",
        what_this_is_for: "This section covers immediate and short-term steps if David dies.",
        what_to_do_first: "Review the immediate steps and contact the right people before making other decisions.",
        important_notes: [
          "Start with urgent tasks and communications before moving into longer-term administration.",
          "Use the contact guidance so legal, financial, and family notifications happen in the right order.",
          "Return here during the first 30 and 90 days as priorities change."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "02_Household_Financial_Map",
        title: "02_Household_Financial_Map",
        category: "Financial",
        description: "How the household financial system works",
        detail_page: "section-household-financial-map.html",
        // Google Drive folder link for 02_Household_Financial_Map
        drive_link: "https://drive.google.com/drive/folders/1WYlQseFcwUYElB0zVvYjIZhlG18IFt2I",
        what_this_is_for: "This section explains how household money, responsibilities, and account relationships are organized.",
        what_to_do_first: "Review how bills, accounts, and income flow work before changing anything.",
        important_notes: [
          "Use this section to understand the system before taking actions in account-specific folders.",
          "It is the best place to see how different financial tasks connect to each other.",
          "Check this map first if something seems missing or unclear."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "03_Important_Contacts",
        title: "03_Important_Contacts",
        category: "Contacts",
        description: "Key people to call for help",
        detail_page: "section-important-contacts.html",
        // Google Drive folder link for 03_Important_Contacts
        drive_link: "https://drive.google.com/drive/folders/1_EtA0X3SDD-KwDkTefCDuA3aXg7DYhzz",
        what_this_is_for: "This section lists the key people to contact for legal, financial, and technical help.",
        what_to_do_first: "Contact the most relevant person before making major decisions or trying to solve everything alone.",
        important_notes: [
          "Use the right contact for the issue instead of guessing who should handle it.",
          "Early outreach can prevent delays, mistakes, and duplicated work.",
          "Pair this section with If_David_Dies when urgent coordination is needed."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "04_Accounts_and_Assets",
        title: "04_Accounts_and_Assets",
        category: "Financial",
        description: "Banking, assets, and account records",
        detail_page: "section-accounts-and-assets.html",
        // Google Drive folder link for 04_Accounts_and_Assets
        drive_link: "https://drive.google.com/drive/folders/1nvinZqyucxM10h1ifxF0TqwBWXoRNQAM",
        what_this_is_for: "This section contains records and references for financial accounts and assets.",
        what_to_do_first: "Identify the most important accounts first so urgent access and visibility are established.",
        important_notes: [
          "Start with accounts tied to liquidity, income, or essential household obligations.",
          "Use this folder together with the Household Financial Map for context.",
          "Do not make transfer or closure decisions until the overall picture is clear."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "05_Bills_and_Payments",
        title: "05_Bills_and_Payments",
        category: "Financial",
        description: "Recurring bills, payment instructions, and autopay",
        detail_page: "section-bills-and-payments.html",
        // Google Drive folder link for 05_Bills_and_Payments
        drive_link: "https://drive.google.com/drive/folders/1BIADF74Ilrh3ti6YCZ_j7jijRfkHqq09",
        what_this_is_for: "This section holds recurring payment instructions and bill references.",
        what_to_do_first: "Check which bills are urgent, which are automated, and which can wait.",
        important_notes: [
          "Focus first on housing, utilities, insurance, taxes, and other continuity-critical payments.",
          "Confirm whether an autopay is active before making a manual payment.",
          "Use this with the financial map so payment responsibilities stay coordinated."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "06_Insurance",
        title: "06_Insurance",
        category: "Insurance",
        description: "Policies, coverage, and claim contacts",
        detail_page: "section-insurance.html",
        // Google Drive folder link for 06_Insurance
        drive_link: "https://drive.google.com/drive/folders/1z9HP47niSgy5xOx8myQ1FntXwtX4moBs",
        what_this_is_for: "This section holds policy records, claim information, and coverage references.",
        what_to_do_first: "Identify which policy applies before opening supporting documents or contacting a carrier.",
        important_notes: [
          "Coverage types and claim steps differ, so verify the policy before acting.",
          "Use this section before filing claims or requesting policy changes.",
          "If an urgent event occurred, cross-check this with the emergency guidance."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "07_Documents_and_Locations",
        title: "07_Documents_and_Locations",
        category: "Documents",
        description: "Important records and where they are stored",
        detail_page: "section-documents-and-locations.html",
        // Google Drive folder link for 07_Documents_and_Locations
        drive_link: "https://drive.google.com/drive/folders/1xXAzlcLhILbct8TKDcVE8dsAVLj6WvVn",
        what_this_is_for: "This section guides you to important records and where they are stored.",
        what_to_do_first: "Use this section to locate documents before searching elsewhere.",
        important_notes: [
          "This is the reference point when you know a document exists but not where it lives.",
          "Check here before assuming something is missing.",
          "Use it to connect physical records, digital files, and storage locations."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "08_Constellation_Continuity",
        title: "08_Constellation_Continuity",
        category: "Constellation",
        description: "Constellation-related continuity materials",
        detail_page: "section-constellation-continuity.html",
        // Google Drive folder link for 08_Constellation_Continuity
        drive_link: "https://drive.google.com/drive/folders/178Ek_RN7kuYFGAaSvHFPlaS1pE7Sr7Q7",
        what_this_is_for: "This section contains continuity information related to Constellation.",
        what_to_do_first: "Open this only if continuity steps are needed and review the operating context first.",
        important_notes: [
          "This material is for continuity needs, not general household administration.",
          "Use it when business continuity or handoff questions must be answered.",
          "If the need is urgent, pair this with the emergency guidance."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "09_Technical_Help",
        title: "09_Technical_Help",
        category: "Support",
        description: "Instructions for technical systems and support",
        detail_page: "section-technical-help.html",
        // Google Drive folder link for 09_Technical_Help
        drive_link: "https://drive.google.com/drive/folders/1ezymFVF2zug5y1meQ1gl9xn9jOpDk2R4",
        what_this_is_for: "This section provides technical access and support instructions.",
        what_to_do_first: "Use it when systems, devices, or account access are blocked or unclear.",
        important_notes: [
          "Start here before resetting accounts or changing technical configurations.",
          "Use the documented recovery steps instead of improvising under pressure.",
          "Pair this with Important Contacts if outside help is needed."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "10_Archive",
        title: "10_Archive",
        category: "Archive",
        description: "Older materials kept for reference",
        detail_page: "section-archive.html",
        // Google Drive folder link for 10_Archive
        drive_link: "https://drive.google.com/drive/folders/1xhyon7P9Gjami1v0pa8B1QB7N9iIPZ26",
        what_this_is_for: "This section stores older materials kept for reference.",
        what_to_do_first: "Use it only if something is not found in the active folders.",
        important_notes: [
          "Treat archived materials as historical reference, not the first source for action.",
          "Check active folders before relying on archived records.",
          "Use this section to recover context when current files do not answer the question."
        ],
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      }
    ]
  },
  dashboard: {
    pageMeta: {
      title: "Family Control Center",
      description: "Compact launcher for the Family Control Center Google Drive structure."
    },
    chrome: {
      sidebarEyebrow: "Drive status",
      heroTitle: "Family Control Center",
      heroCopy: "Organized access to the documents and instructions your family may need."
    },
    readinessScore: "11 folders",
    readinessText: "Top-level structure only. Replace each folder card with its real Google Drive link.",
    folderIds: [
      "00_START_HERE",
      "01_If_David_Dies",
      "02_Household_Financial_Map",
      "03_Important_Contacts",
      "04_Accounts_and_Assets",
      "05_Bills_and_Payments",
      "06_Insurance",
      "07_Documents_and_Locations",
      "08_Constellation_Continuity",
      "09_Technical_Help",
      "10_Archive"
    ]
  },
  accounts: {
    pageMeta: {
      title: "Financial Map | Family Control Center",
      description: "Financial system folders in the Family Control Center drive."
    },
    chrome: {
      sidebarEyebrow: "Financial folders",
      pageEyebrow: "Household Financial Map",
      pageTitle: "Financial systems and account structure.",
      pageCopy: "Use these folders to navigate the household financial model, assets, and recurring payment systems.",
      recordsEyebrow: "Folder launcher",
      recordsTitle: "Financial folders"
    },
    aside: {
      title: "3 folders",
      text: "Focused access to the household financial map, accounts, and bill payment instructions."
    },
    folderIds: [
      "02_Household_Financial_Map",
      "04_Accounts_and_Assets",
      "05_Bills_and_Payments"
    ]
  },
  insurance: {
    pageMeta: {
      title: "Insurance | Family Control Center",
      description: "Insurance folder launcher in the Family Control Center drive."
    },
    chrome: {
      sidebarEyebrow: "Insurance folder",
      pageEyebrow: "Insurance",
      pageTitle: "Policies, coverage, and claim contacts.",
      pageCopy: "Open the insurance folder directly instead of scanning through sample policy cards.",
      recordsEyebrow: "Folder launcher",
      recordsTitle: "Insurance folder"
    },
    aside: {
      title: "1 folder",
      text: "Direct access to the insurance source folder."
    },
    folderIds: ["06_Insurance"]
  },
  contacts: {
    pageMeta: {
      title: "Contacts | Family Control Center",
      description: "Important contacts and technical help folders in the Family Control Center drive."
    },
    chrome: {
      sidebarEyebrow: "Support folders",
      pageEyebrow: "Important Contacts",
      pageTitle: "People and technical support references.",
      pageCopy: "Use these folders for the key contacts list and technical system instructions.",
      recordsEyebrow: "Folder launcher",
      recordsTitle: "Support folders"
    },
    aside: {
      title: "2 folders",
      text: "Contacts and technical help are grouped here for faster access."
    },
    folderIds: [
      "03_Important_Contacts",
      "09_Technical_Help"
    ]
  },
  documents: {
    pageMeta: {
      title: "All Folders | Family Control Center",
      description: "Top-level folder launcher for the Family Control Center drive."
    },
    chrome: {
      sidebarEyebrow: "All folders",
      pageEyebrow: "Google Drive Structure",
      pageTitle: "Real top-level folder map.",
      pageCopy: "Each card represents one real top-level folder and should point to its Google Drive location.",
      recordsEyebrow: "Folder launcher",
      recordsTitle: "Top-level folders"
    },
    aside: {
      title: "11 folders",
      text: "One card per top-level folder, with a placeholder drive link until the real URL is inserted."
    },
    folderIds: [
      "00_START_HERE",
      "01_If_David_Dies",
      "02_Household_Financial_Map",
      "03_Important_Contacts",
      "04_Accounts_and_Assets",
      "05_Bills_and_Payments",
      "06_Insurance",
      "07_Documents_and_Locations",
      "08_Constellation_Continuity",
      "09_Technical_Help",
      "10_Archive"
    ]
  },
  emergency: {
    pageMeta: {
      title: "Emergency | Family Control Center",
      description: "Emergency and continuity folders in the Family Control Center drive."
    },
    chrome: {
      sidebarEyebrow: "Emergency folders",
      pageEyebrow: "Emergency Access",
      pageTitle: "Start here first when speed matters.",
      pageCopy: "These folders cover immediate steps, continuity materials, and technical recovery help.",
      recordsEyebrow: "Folder launcher",
      recordsTitle: "Emergency and continuity"
    },
    aside: {
      title: "4 folders",
      text: "Start Here, If David Dies, Constellation continuity, and technical help."
    },
    folderIds: [
      "00_START_HERE",
      "01_If_David_Dies",
      "08_Constellation_Continuity",
      "09_Technical_Help"
    ]
  }
};
