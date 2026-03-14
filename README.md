# Family Control Center

Family Control Center is a static household dashboard built for GitHub Pages. It presents account visibility, insurance coverage, trusted contacts, critical documents, and emergency readiness in a premium mobile-first interface without any backend, database, or build pipeline.

## Architecture

- Static deployment target: GitHub Pages
- Runtime: plain HTML, CSS, and JavaScript
- Content source: `data/site-data.js`
- Shared renderer: `js/app.js`
- Shared styling: `styles/main.css`
- Page shells: `index.html`, `accounts.html`, `insurance.html`, `contacts.html`, `documents.html`, `emergency.html`

The HTML files are intentionally thin. They provide layout structure and placeholder containers only. The actual page chrome, navigation, metrics, records, badges, and emergency lists are populated at runtime from `window.familyControlData`.

## Folder Structure

```text
family-control-center/
├── index.html
├── accounts.html
├── insurance.html
├── contacts.html
├── documents.html
├── emergency.html
├── favicon.ico
├── README.md
├── styles/
│   └── main.css
├── js/
│   └── app.js
└── data/
    └── site-data.js
```

## How The Data Model Works

`data/site-data.js` defines one global object:

```js
window.familyControlData = { ... };
```

That object has three layers of content:

1. `site`
   Shared brand and navigation content used on every page.

2. `dashboard`
   Homepage metadata, hero copy, household summary, and dashboard summary cards.

3. Section objects
   `accounts`, `insurance`, `contacts`, `documents`, and `emergency` each define the content for their dedicated page.

Each page section can include:

- `pageMeta`
  Controls `<title>` and meta description.
- `chrome`
  Controls page headings, sidebar eyebrow labels, and section titles.
- `aside`
  Controls the sidebar summary block.
- `stats`
  Renders the top summary cards on a page.
- `records`
  Renders the data cards for accounts, insurance, contacts, or documents.
- `actions` / `preparedness`
  Renders emergency action lists.

## Data Schema

### Shared Site Chrome

```js
site: {
  brandTitle: string,
  brandSubtitle: string,
  navigation: [
    { id: string, label: string, href: string }
  ]
}
```

### Household Summary

```js
dashboard: {
  pageMeta: { title: string, description: string },
  chrome: { ...text labels... },
  readinessScore: string,
  readinessText: string,
  heroActions: [
    { label: string, href: string, variant: "primary" | "secondary" | "ghost" }
  ],
  heroMetrics: [
    { label: string, value: string, note: string }
  ],
  householdStatus: [
    { label: string, value: string, note: string }
  ],
  sections: [
    {
      eyebrow: string,
      title: string,
      description: string,
      facts: string[],
      actions: [
        { label: string, href: string, variant: "primary" | "secondary" | "ghost" }
      ]
    }
  ]
}
```

### Accounts

```js
accounts: {
  pageMeta: { title: string, description: string },
  chrome: { ...text labels... },
  aside: { title: string, text: string },
  stats: [
    { label: string, value: string, note: string }
  ],
  records: [
    {
      title: string,
      subtitle: string,
      tags: string[],
      fields: Record<string, string>
    }
  ]
}
```

### Insurance

```js
insurance: {
  pageMeta: { title: string, description: string },
  chrome: { ...text labels... },
  aside: { title: string, text: string },
  stats: [
    { label: string, value: string, note: string }
  ],
  records: [
    {
      title: string,
      subtitle: string,
      tags: string[],
      fields: Record<string, string>
    }
  ]
}
```

### Contacts

```js
contacts: {
  pageMeta: { title: string, description: string },
  chrome: { ...text labels... },
  aside: { title: string, text: string },
  stats: [
    { label: string, value: string, note: string }
  ],
  records: [
    {
      title: string,
      subtitle: string,
      tags: string[],
      fields: Record<string, string>
    }
  ]
}
```

### Documents

```js
documents: {
  pageMeta: { title: string, description: string },
  chrome: { ...text labels... },
  aside: { title: string, text: string },
  stats: [
    { label: string, value: string, note: string }
  ],
  records: [
    {
      title: string,
      category: string,
      description: string,
      drive_link: string,
      last_reviewed: string,
      tags: string[],
      fields: Record<string, string>
    }
  ]
}
```

### Emergency Actions

```js
emergency: {
  pageMeta: { title: string, description: string },
  chrome: { ...text labels... },
  aside: { title: string, text: string },
  stats: [
    { label: string, value: string, note: string }
  ],
  actions: [
    { title: string, note: string }
  ],
  preparedness: [
    { title: string, note: string }
  ]
}
```

## Updating Content

Most content updates only require editing `data/site-data.js`.

- Update nav labels or brand copy in `site`
- Update homepage summary cards in `dashboard`
- Update page headings in each section’s `chrome`
- Update sidebar summary blocks in each section’s `aside`
- Add or edit account, insurance, contact, or document entries in `records`
- Add Google Drive URLs later by filling in `drive_link`
- Keep document review dates current via `last_reviewed`
- Update emergency procedures in `emergency.actions` and `emergency.preparedness`

No HTML changes are needed for ordinary content updates unless the page layout itself is changing.

## Dynamic Rendering Flow

1. Each HTML page sets `data-page` on `<body>`.
2. `js/app.js` loads `window.familyControlData`.
3. The renderer injects:
   - shared brand and navigation
   - active nav state
   - page metadata
   - page chrome labels
   - stats, records, badges, and action lists
4. `styles/main.css` provides the shared presentation layer for all pages.

## Deployment

Deployment is intentionally simple:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

GitHub Pages publishes directly from:

- Branch: `main`
- Folder: `/` (root)

The live site is:

`https://dduaneschmidt.github.io/family-control-center/`

## Maintenance Notes

- Keep the architecture static-only.
- Do not add frameworks or a build pipeline unless the project direction changes.
- Prefer editing `data/site-data.js` for content changes.
- Keep page templates as placeholder shells, not content stores.
