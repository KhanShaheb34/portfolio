## Shakirul Hasan Khan — Portfolio

Modern personal portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and MDX. Includes a blog, projects, work experience, SEO, and analytics.

- **Live site**: [`https://shakirul.dev/`](https://shakirul.dev/)
- **License**: MIT (see `LICENSE`)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 4, `@tailwindcss/typography`
- **Content**: MDX via `@next/mdx`, `@mdx-js/react`
- **Code quality**: TypeScript 5, Ultracite + Biome formatter/linter
- **SEO & PWA**: Open Graph image route, `sitemap.ts`, `robots.ts`, `manifest.ts`
- **Analytics**: `@vercel/analytics`

## Features

- **Portfolio sections**: Intro, links, projects, work experience, academic, interests, hobbies
- **Blog**: MDX posts under `src/app/posts/*/page.mdx` with per-post metadata
- **Projects**: JSON-driven content (`src/data/projects.json`) with dynamic `[slug]` pages
- **Work**: JSON-driven experiences (`src/data/experiences.json`) with dynamic `[slug]` pages
- **SEO**: Dynamic Open Graph image (`src/app/opengraph-image.tsx`), sitemap and robots routes
- **Design**: Monospace-first aesthetic with Tailwind 4 and custom CSS variables

## Getting Started

### Prerequisites

- Node.js 18.18+ (recommended 20+)
- npm (or pnpm/yarn/bun)

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
# open http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

### Lint and format

```bash
npm run lint                # Next.js ESLint checks
npx ultracite lint          # Biome lint (no fixes)
npx ultracite format        # Format & autofix with Biome
```

## Project Structure

```text
src/
  app/
    about/page.tsx
    manifest.ts
    opengraph-image.tsx
    page.tsx                 # Home
    posts/
      layout.tsx            # Blog post layout
      page.tsx              # Posts index
      <slug>/page.mdx       # Individual posts
    projects/
      page.tsx              # Projects index
      [slug]/page.tsx       # Project details
    robots.ts
    sitemap.ts
    work/
      page.tsx              # Work index
      [slug]/page.tsx       # Work details
  components/               # UI components (cards, layout, code highlight)
  data/
    experiences.json        # Work experiences
    portfolio.json          # Intro, links, academic, interests, hobbies
    projects.json           # Projects catalog
  lib/
    blog.ts                 # Blog metadata utilities
    projects.ts             # Project utilities

next.config.ts              # MDX + Next config
tailwind.config.ts          # Tailwind 4 config
tsconfig.json               # TS config with path alias @/* -> src/*
```

## Content Model

- **Blog posts (MDX)**
  - Create a directory under `src/app/posts/<your-slug>/page.mdx`
  - Export `metadata` in the MDX file for SEO (title, description, tags, etc.)
  - React components can be imported and used directly in MDX

- **Projects**
  - Add/update items in `src/data/projects.json`
  - Each key is the project `slug`; fields include title, description, technologies, features, links, status, etc.

- **Work experience**
  - Add/update items in `src/data/experiences.json`

- **Portfolio info**
  - Update `src/data/portfolio.json` for intro text, links, academic info, and interests

## Routes

- `/` — Home (portfolio)
- `/about` — About
- `/posts` — Blog index
- `/posts/[slug]` — Blog post (MDX)
- `/projects` — Projects index
- `/projects/[slug]` — Project detail
- `/work` — Work index
- `/work/[slug]` — Work detail
- `/sitemap.xml` — Generated via `src/app/sitemap.ts`
- `/robots.txt` — Generated via `src/app/robots.ts`

## SEO, PWA & Analytics

- Open Graph image generated at runtime (`src/app/opengraph-image.tsx`)
- Web App Manifest via `src/app/manifest.ts`
- Structured metadata configured in `src/app/layout.tsx`
- Vercel Analytics enabled via `@vercel/analytics/next`

## Environment Variables

No environment variables are required for local development or production by default.

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Install and run locally (see Getting Started)
4. Run linters/formatters: `npx ultracite lint` and `npx ultracite format`
5. Commit your changes and open a pull request

Please keep changes accessible, type-safe, and consistent with the existing patterns.

## License

MIT © 2025 Shakirul Hasan Khan — see `LICENSE` for details.

