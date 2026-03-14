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
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "01_If_David_Dies",
        title: "01_If_David_Dies",
        category: "Emergency",
        description: "Immediate steps, first 30 days, and first 90 days",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "02_Household_Financial_Map",
        title: "02_Household_Financial_Map",
        category: "Financial",
        description: "How the household financial system works",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "03_Important_Contacts",
        title: "03_Important_Contacts",
        category: "Contacts",
        description: "Key people to call for help",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "04_Accounts_and_Assets",
        title: "04_Accounts_and_Assets",
        category: "Financial",
        description: "Banking, assets, and account records",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "05_Bills_and_Payments",
        title: "05_Bills_and_Payments",
        category: "Financial",
        description: "Recurring bills, payment instructions, and autopay",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "06_Insurance",
        title: "06_Insurance",
        category: "Insurance",
        description: "Policies, coverage, and claim contacts",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "07_Documents_and_Locations",
        title: "07_Documents_and_Locations",
        category: "Documents",
        description: "Important records and where they are stored",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "08_Constellation_Continuity",
        title: "08_Constellation_Continuity",
        category: "Constellation",
        description: "Constellation-related continuity materials",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "09_Technical_Help",
        title: "09_Technical_Help",
        category: "Support",
        description: "Instructions for technical systems and support",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
        last_reviewed: "REPLACE_WITH_LAST_REVIEWED"
      },
      {
        id: "10_Archive",
        title: "10_Archive",
        category: "Archive",
        description: "Older materials kept for reference",
        drive_link: "REPLACE_WITH_GOOGLE_DRIVE_LINK",
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
      heroEyebrow: "Family Control Center",
      heroTitle: "Compact access to the folders that matter.",
      heroCopy: "Open the real top-level Google Drive structure without demo data, long summaries, or unnecessary scrolling.",
      dashboardEyebrow: "Top-level folders",
      dashboardTitle: "Primary sections",
      dashboardCopy: "Each tile links to a real top-level folder in the Family Control Center drive."
    },
    readinessScore: "11 folders",
    readinessText: "Top-level structure only. Replace each folder card with its real Google Drive link.",
    heroActions: [
      { label: "Open all folders", href: "documents.html", variant: "primary" }
    ],
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
