# Mani Karthik — Portfolio

A responsive single-page developer portfolio built with **Next.js (App Router)**, **React** (functional components and hooks), **TypeScript**, and **Tailwind CSS v4**.

## Folder structure

```
portfolio/
├── public/                 # Static assets (add resume.pdf here)
├── src/
│   ├── app/
│   │   ├── globals.css     # Tailwind import, theme tokens, animations
│   │   ├── layout.tsx      # Root layout, theme script, ThemeProvider, Header
│   │   └── page.tsx        # Home page sections
│   ├── components/
│   │   ├── brand-icons.tsx # LinkedIn SVG (Lucide brand icons removed)
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   └── theme-provider.tsx
│   └── lib/
│       └── site-config.ts  # Name, links, projects, jobs — edit this file
├── package.json
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Customize

- **Copy and links:** Edit `src/lib/site-config.ts` (email, LinkedIn, projects, job history).
- **Resume PDF:** “Download resume” calls `GET /api/resume`, which builds a 2-page PDF with `@react-pdf/renderer` from `site-config` and `resume-pdf.tsx`. The file saves as `{Your-Name}-Full-Stack-Developer.pdf` (see `getResumeDownloadFilename()`). To use a static file instead, set `resumeUrl` to e.g. `/resume.pdf` and add the file under `public/`.
- **Dark mode:** Uses a `dark` class on `<html>` with Tailwind’s `dark:` variant; preference is stored in `localStorage` under `theme`.

## Features

- Hero, About, Skills (categorized), Projects (CES & SES at Hitachi MGRM), Experience timeline, Contact, Footer
- Smooth scrolling and light motion (respects `prefers-reduced-motion`)
- Dark / light toggle with no flash on load (inline script in `<head>`)
- Mobile navigation with a collapsible menu
