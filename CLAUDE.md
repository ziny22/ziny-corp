@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It's a single-page site with four sections: About, Projects, Skills, and Contact.

## Commands

- `npm run dev` — start the local dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

There is no test suite yet.

## Architecture

- `src/app/layout.tsx` — root layout, fonts, page `<metadata>` (title/description/OG tags)
- `src/app/page.tsx` — assembles the page from the section components in order
- `src/app/globals.css` — Tailwind entrypoint, CSS theme variables, smooth-scroll behavior
- `src/components/` — one component per section (`Header`, `Hero`, `Projects`, `Skills`, `Contact`, `Footer`); each section has a matching `id` (`#about`, `#projects`, `#skills`, `#contact`) that the header nav links to
- `src/data/portfolio.ts` — **all editable content** (name, bio, project list, skills, contact links) lives here. To update the site's content, edit this file rather than the components
- `public/profile.svg` — placeholder avatar; replace with a real photo (e.g. `profile.jpg`) and update `profile.avatar` in `portfolio.ts` accordingly

## Editing content

To change what's displayed on the site (name, bio, projects, skills, contact info), edit `src/data/portfolio.ts` only — the components render directly from its exports and shouldn't need changes for content updates.

## Deployment

Either platform auto-detects Next.js with zero config:
- **Vercel**: connect the GitHub repo, it builds and deploys automatically on push
- **Netlify**: connect the repo; it applies `@netlify/plugin-nextjs` automatically, build command `npm run build`
