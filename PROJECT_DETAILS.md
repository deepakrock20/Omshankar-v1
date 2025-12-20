# Portfolio-Canvas — Project Details 🎯

## Project Overview

**Portfolio-Canvas** is a single-repo portfolio site for Omshankar Passi built with a modern TypeScript React stack. It contains a client (Vite + React + Tailwind + Three.js), a lightweight Express server and shared types/schemas. The site highlights work, skills, certifications, a 3D model section, and provides contact links and a downloadable CV.

---

## Quick Start 🔧

Prerequisites: Node 18+ and npm

1. Install dependencies:

```bash
npm install
```

2. Run the client dev server (port 5000):

```bash
npm run dev:client
# open http://localhost:5000
```

3. Run the backend dev server (in a second terminal):

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

---

## Important Scripts

- `npm run dev:client` — Start Vite dev server (client) on port 5000
- `npm run dev` — Start the Express server (using `tsx server/index.ts`)
- `npm run build` — Run the build script (`tsx script/build.ts`)
- `npm run start` — Start production build (`node dist/index.cjs`)
- `npm run check` — TypeScript type check
- `npm run db:push` — Push DB schema via `drizzle-kit`

---

## Tech Stack & Languages 🧰

- Languages: **TypeScript**, **JavaScript**, **SQL** (via Drizzle)
- Client: **React** + **Vite**
- Styling: **Tailwind CSS**, custom utility classes (e.g., `glass-panel`), gradients
- 3D & Visuals: **three.js**, **Vanta.js** (NET effect), **glb** model support
- Animations: **Framer Motion**
- Server: **Express**, **tsx**, **Node.js**
- DB / ORM: **Postgres** (pg) + **drizzle-orm**, optional drizzle-kit
- Other notable libs: **Framer Motion**, **Lucide**, **Embla**, **React Query**, **Recharts**

---

## Structure & Key Files 📁

Top-level (important folders/files):

- `client/` — Frontend source
  - `src/components/` — App components (About, Hero, Projects, Skills, Experience, Contact, etc.)
  - `src/components/ui/` — UI primitives and shared components
  - `public/` — Static assets served by Vite (includes `Omshankar CV.docx` and 3D model `.glb`)
- `server/` — Express server and routes
- `shared/` — Shared types and schema
- `script/` — Build script(s)
- `package.json` — Project scripts and deps

---

## Colors, Style & Visual Identity 🎨

The app uses Tailwind utilities and a custom theme with a neon/tech aesthetic. Patterns observed:

- Gradients: `bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500` (used for headings)
- Accent token: `text-accent` (project-specific color variable)
- Background token: `bg-background` (used to maintain consistent page background)
- Utility patterns: `glass-panel`, rounded cards, subtle borders `border-white/10`, and `text-white/70` for muted copy
- Animations: subtle motion with **Framer Motion** and particle-like Vanta NET effect for sections

If you want, I can extract the exact Tailwind config values into this document.

---

## UI & Components ✨

Major visible components:
- `Navbar`, `Hero`, `About` (Who is Omshankar?), `Model3D`, `Skills`, `Experience`, `Projects`, `Certifications`, `Contact`, `Marquee`
- `client/src/components/ui/*` contains shared primitives (buttons, dialogs, cards, tables, toasts, etc.) used across the site

Notable behaviors:
- CV download link (served from `client/public/Omshankar CV.docx`) — the anchor was updated to use the `download` attribute
- Contact buttons: `mailto:`, `tel:`, and LinkedIn external link
- 3D model support via `.glb` + `Model3D` component
- Animated backgrounds and entrance motion on many components

---

## Features (A → Z) ✅

- Responsive layout with accessible navigation
- Downloadable CV (file: `client/public/Omshankar CV.docx`)
- 3D model viewer (GLB) and Vanta animated background
- SEO tags in `client/index.html` (OpenGraph, twitter metadata)
- Interactive contact links (`mailto:`, `tel:`, LinkedIn)
- Certifications & Projects showcase (images and carousel components)
- Drizzle ORM and db scripts available (`drizzle-kit` + `db:push`)
- TypeScript typed codebase with `npm run check`

---

## Assets & Public Files 📦

- `client/public/Omshankar CV.docx` — resume (downloadable)
- `client/public/stylized student 3d model.glb` — 3D model used in About
- `client/public/*` — images, favicon, opengraph images
- `attached_assets/generated_images/` — generated images referenced in the UI

---

## Notes, Known Changes & Next Steps 🔁

- **Change made:** The About CV anchor was updated to point to `/Omshankar%20CV.docx` and includes the `download` attribute to force download.
- Suggested improvements:
  - Add tests and CI (lint, typecheck, build)
  - Add explicit Tailwind config dump to document exact hex tokens used
  - Add a contact form and server-side mail handling if desired

---

## License & Author

- License: **MIT** (as listed in `package.json`)
- Author: **Omshankar Passi**

---

If you'd like, I can:
- Add a `CONTRIBUTING.md` and PR checklist ✅
- Extract and document exact color hex values from Tailwind config 💡
- Add live demo / deployment instructions (Netlify/Vercel) 🔧

---

## Vercel Deployment ✅

I added a Vercel configuration and a dedicated build script to make deploying the **frontend** straightforward and robust.

What I changed:
- Added `vercel.json` (project root) to use `@vercel/static-build` and serve `dist/public` as the output directory.
- Added a `vercel-build` script in `package.json` that runs `vite build` (Vercel will use `vercel-build` if present).
- Renamed `client/public/Omshankar CV.docx` → `client/public/Omshankar-CV.docx` and updated the download link in `About.tsx` to avoid spaces in filenames.

How to deploy to Vercel (quick steps):
1. Connect this Git repository to Vercel.
2. In the project settings, ensure the Root Directory is the repository root (default).
3. Vercel will run `npm run vercel-build` (or `npm run build` if no `vercel-build` exists). The build will output static files to `dist/public` (as configured in `vite.config.ts`).
4. Files are served as a SPA: `vercel.json` routes any non-file request to `/index.html`.

Potential pitfalls I fixed:
- Filenames with spaces (CV file) — renamed to avoid encoding issues and make HTTP serving more reliable.
- Ensured Vite's `root` and `build.outDir` are consistent with a static build in `dist/public`.

If you want, I can also:
- Add a `vercel.ignore` or `.vercelignore` to skip server-only folders during frontend-only deploys.
- Add GitHub Action to automatically deploy on push to `main`.

Tell me which follow-ups you'd like and I can implement them.