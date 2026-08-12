# Srilakshmi Seshadri — Portfolio

React + TypeScript + Vite + Tailwind CSS.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Before you deploy — 3 things to do

1. **Add your resume PDF.**
   Place your resume file at `public/resume.pdf` (exact filename).
   The "View Resume" and "Download Resume" buttons already point to `/resume.pdf`,
   so once the file is in place they will work with no code changes.

2. **Add your real LinkedIn and GitHub URLs.**
   Open `src/data/resumeData.ts` and replace:
   ```ts
   linkedin: 'https://linkedin.com/in/your-profile',
   github: 'https://github.com/your-username',
   ```
   with your actual profile links.

3. **(Optional) Add GitHub repo links per project.**
   In `src/data/resumeData.ts`, each project has a `github: ''` field —
   fill it in to show a "GitHub" button on that project card.

## Structure

```
src/
  data/resumeData.ts     <- all resume content lives here, edit this to update the site
  components/            <- Navbar, Hero, Skills, Projects, ProjectCard,
                             Achievements, Education, Resume, Contact, Footer,
                             KeypointGraphic (signature hero visual)
  App.tsx
public/
  resume.pdf             <- put your resume PDF here
```

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages). Build with `npm run build`
and deploy the `dist/` folder. Make sure `resume.pdf` is inside `public/` before
building — Vite copies everything in `public/` into `dist/` unchanged.
