# Leylines

A fast static Next.js directory for Destiny 2 tools, official Bungie update
links, and Monument of Triumph resources.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Links

Most edits should be data-only. Add a new object to `src/content/tools.ts`:

```ts
{
  title: "D2 Foundry",
  href: "https://d2foundry.gg/",
  category: "weapons",
  description: "Advanced weapon roll explorer and buildcrafting tool.",
  tags: ["rolls", "perks", "crafting"],
  featured: true,
  monumentRelevant: true,
}
```

Allowed categories are defined in `src/content/categories.ts`:

- `official`
- `inventory`
- `builds`
- `weapons`
- `activities`
- `stats`
- `cosmetics`
- `social`

Use `featured: true` for high-priority links and `monumentRelevant: true` for
links that should count toward the Monument of Triumph resource set.

## Checks

```bash
npm run lint
npm run build
```

This project is static and does not require Bungie auth, API keys, a database,
or live scraping.
