# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview


Personal portfolio website: a single-page Next.js (App Router) site with four sections — About, Projects, Skills, Contact — plus an auth-gated `/admin` area for editing career/project data. Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

## Commands

- `npm run dev` — start the local dev server (http://localhost:3000)
- `npm run build` — production build (`/` is server-rendered per request, not statically prerendered — see Architecture)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
- `npm run db:generate` — generate a Drizzle migration from `src/db/schema.ts`
- `npm run db:push` — push the schema directly to the Supabase database (dev)
- `npm run db:migrate` — apply generated migrations
- `npm run db:studio` — open Drizzle Studio
- `npm run db:seed` — run `src/db/seed.ts`

There is no test suite yet.

## Architecture

- `src/app/layout.tsx` — root layout, fonts (Geist via `next/font/google`), page `<metadata>` (title/description/OG tags)
- `src/app/page.tsx` — assembles the page from the section components, in order
- `src/app/globals.css` — Tailwind v4 entrypoint (`@import "tailwindcss"` + `@theme inline`, not a `tailwind.config.js`), CSS custom-property theme, smooth-scroll behavior
- `src/components/` — one component per section (`Header`, `Hero`, `Projects`, `Skills`, `Contact`, `Footer`); each section has an `id` (`#about`, `#projects`, `#skills`, `#contact`) that the fixed header nav links to via anchor links, offset with `scroll-mt-16` to clear the fixed header
- `src/data/portfolio.ts` — editable content that isn't DB-backed (name, bio, skills, contact links). To change what's displayed on the site, edit this file; components render directly from its exports
- Career history (`Hero.tsx`) and the project list (`Projects.tsx`) are **not** in `portfolio.ts` — they're fetched from the Supabase `careers`/`projects` tables via `getCareers()`/`getProjects()` in `src/db/queries.ts`, since both are async Server Components. Edit rows in the DB (or `src/db/seed.ts` + `npm run db:seed`), or via `/admin` once logged in. See `## Database` and `## Admin / Auth` below.
- `public/` — `profile.svg` (placeholder avatar) and the real photo referenced by `profile.avatar` in `portfolio.ts`; `next/image` is used with `unoptimized` since these are local static files not needing on-demand resizing
- `Hero.tsx`/`Projects.tsx` also call `getCurrentUser()` (calls Next's `cookies()`) to conditionally show a "+ 추가" link to logged-in visitors. Because that reads a dynamic API, `/` is opted out of static rendering — it's server-rendered on every request instead. If that cost ever matters, replace the check with a client-side fetch/cookie check instead of removing it from the Server Component.

## Database

The site uses Supabase (Postgres) via Drizzle ORM. **Before doing any DB work (schema changes, migrations, new tables), read the docs in `docs/db/` first** — they hold the ERD and the reasoning behind the current schema, and should be kept up to date whenever the schema changes.

- `docs/db/erd.md` — Mermaid ERD and notes on the schema
- `src/db/schema.ts` — Drizzle table definitions (source of truth for the actual schema)
- `src/db/index.ts` — Drizzle client (`postgres-js`, `prepare: false` since the connection uses Supabase's transaction-mode pooler)
- `src/db/queries.ts` — read helpers used by Server Components (e.g. `getCareers()`)
- `src/db/seed.ts` — one-off seed script
- `drizzle.config.ts` — drizzle-kit config, reads `DATABASE_URL` from `.env.local`

## Admin / Auth

`/admin/**` is a CRUD UI for `careers` and `projects`, gated behind Supabase Auth (email/password).

- `src/proxy.ts` / `src/utils/supabase/proxy.ts` — redirects unauthenticated requests to `/admin/*` to `/login`
- `src/app/login/` — login page + `login`/`logout` Server Actions
- `src/app/admin/layout.tsx` — also checks auth server-side (defense in depth — Server Actions are their own POST endpoints, so proxy coverage alone isn't enough if the route/matcher ever changes)
- `src/app/admin/careers/`, `src/app/admin/projects/` — list/new/`[id]/edit` pages, each backed by an `actions.ts` with `create*`/`update*`/`delete*` Server Actions. Every action calls `requireUser()` (`src/lib/auth.ts`) itself, not just the page — don't remove that check even though the proxy also gates the route.
- There's no signup flow. Create the one admin account directly in the Supabase dashboard (Authentication → Users → Add user, with "Auto Confirm User" checked), then log in at `/login`.

## Deployment

Either platform auto-detects Next.js with zero config:
- **Vercel**: connect the GitHub repo, it builds and deploys automatically on push
- **Netlify**: connect the repo; it applies `@netlify/plugin-nextjs` automatically, build command `npm run build`
