# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 16 (App Router, React 19, TypeScript) personal portfolio site. All content is static/local (JSON in `src/data/`, MDX blog posts under `src/app/posts/`); there is no backend, database, or auth, and no environment variables are required to run it.

- Package manager/runtime is **Bun** (`bun.lock` is the source of truth). The update script installs Bun and runs `bun install`. Bun lives at `~/.bun/bin`; if `bun` is not on `PATH` in a fresh shell, add it with `export PATH="$HOME/.bun/bin:$PATH"` (the installer also appends this to `~/.bashrc`).
- Standard commands are defined in `package.json` scripts and `README.md`: `bun dev` (dev server on port 3000, uses Turbopack), `bun run build`, `bun start`, `bun run lint` (Biome/Ultracite), `bun run format`.
- The only service is the Next.js server (`bun dev`). Run it in a background/tmux terminal, not in the update script.
- Instant-navigation e2e tests live in `e2e/` (`bun run test:e2e`). They build a production server on port 3001 and use Next's `instant()` helper. Browser checks of pages are still useful for visual work.
- `bun run lint` currently reports pre-existing Biome formatting findings in generated/config files (e.g. `tsconfig.json`, which Next.js rewrites). These are not caused by setup; do not "fix" them as part of environment work. Lint runs correctly regardless.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
