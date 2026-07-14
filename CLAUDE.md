# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

Personal portfolio website: a single-page Next.js (App Router) site with four sections — About, Projects, Skills, Contact. Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

## Commands

- `npm run dev` — start the local dev server (http://localhost:3000)
- `npm run build` — production build (statically prerendered)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

There is no test suite yet.

## Architecture

- `src/app/layout.tsx` — root layout, fonts (Geist via `next/font/google`), page `<metadata>` (title/description/OG tags)
- `src/app/page.tsx` — assembles the page from the section components, in order
- `src/app/globals.css` — Tailwind v4 entrypoint (`@import "tailwindcss"` + `@theme inline`, not a `tailwind.config.js`), CSS custom-property theme, smooth-scroll behavior
- `src/components/` — one component per section (`Header`, `Hero`, `Projects`, `Skills`, `Contact`, `Footer`); each section has an `id` (`#about`, `#projects`, `#skills`, `#contact`) that the fixed header nav links to via anchor links, offset with `scroll-mt-16` to clear the fixed header
- `src/data/portfolio.ts` — **all editable content** (name, bio, project list, skills, contact links). To change what's displayed on the site, edit this file only; components render directly from its exports
- `public/` — `profile.svg` (placeholder avatar) and the real photo referenced by `profile.avatar` in `portfolio.ts`; `next/image` is used with `unoptimized` since these are local static files not needing on-demand resizing

## Deployment

Either platform auto-detects Next.js with zero config:
- **Vercel**: connect the GitHub repo, it builds and deploys automatically on push
- **Netlify**: connect the repo; it applies `@netlify/plugin-nextjs` automatically, build command `npm run build`
