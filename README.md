# pmnafshari.it

Personal portfolio for Peyman Afshari — Computer Engineer, Artificial Intelligence.
React + Vite, no UI framework, deployed to GitHub Pages on a custom domain.

- **Live:** https://pmnafshari.it
- **Thesis results page:** https://pmnafshari.it/thesis/index.html (static, served from `public/thesis/`)

---

## 1. Install

Requires Node 20 or newer.

```bash
npm install
```

## 2. Run locally

```bash
npm run dev      # dev server on http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built dist/ on http://localhost:4173
```

Always check `npm run preview` before pushing — it serves the real build, including
the `/thesis` files and the `404.html` fallback that `npm run dev` does not exercise.

## 3. Change personal information

Everything personal lives in [`src/data/profile.js`](src/data/profile.js). Edit it once
and the change propagates to the navbar, hero, contact section, footer, and structured data.

```js
export const profile = {
  name: 'Peyman Afshari',
  initials: 'PA',              // the navbar mark and the favicon letters
  email: 'pmn.afshari@outlook.com',   // primary mailto everywhere
  emailAlt: 'pmnafshari@gmail.com',   // listed as an alternate in Contact
  github: '...',
  linkedin: '...',
  scholar: '...',
  cv: '',                      // see section 6
  availability: 'Open to research collaboration & AI roles',
  headline: ['Building intelligent', 'systems through', 'machine learning.'],
  intro: '...',
};
```

`headline` is an array because each entry is rendered as its own line. Keep each
line under about 22 characters or it will wrap and push the hero below the fold.

The About copy, focus tags, and the three stat tiles are in the `about` export in
the same file.

Other content files:

| File | Controls |
|---|---|
| `src/data/projects.js` | Every project card and the `/projects` page |
| `src/data/skills.js` | The six skill category cards |
| `src/data/research.js` | Research interests and the publications list |
| `src/data/experience.js` | Education, experience, languages |

The `<title>`, meta description, and Open Graph tags live in `index.html`, with
per-route overrides in `src/pages/Home.jsx` and `src/pages/ProjectsPage.jsx`.

## 4. Add a project

Append an object to the `projects` array in `src/data/projects.js`. The UI renders
from that array, so no component changes are needed.

```js
{
  id: 'unique-slug',
  title: 'Project title',
  category: 'Computer Vision',       // also becomes a filter chip on /projects
  period: 'Jan 2026 — present',
  description: 'Two sentences for the card.',

  // Optional. Shown on the featured card and on /projects.
  problem: '...',
  approach: '...',
  results: '...',

  technologies: ['Python', 'PyTorch'],
  image: '/images/projects/my-project.svg',
  imageAlt: 'Describe what the image shows, for screen readers.',
  figure: false,     // true only for white-background research figures

  github: 'https://github.com/pmnafshari/repo',   // omit if there is no public repo
  demo: '',                                       // omit if there is no reachable demo
  demoLabel: 'Live Demo',                         // optional button text

  featured: false,   // exactly one project may be featured
  onHome: true,      // show in the landing page grid
}
```

Rules the layout depends on:

- Exactly **one** project has `featured: true`. It renders as the large card with the
  image on top and Problem / Approach / Results in three columns.
- Keep `onHome: true` to about **five** projects besides the featured one. Everything
  else still appears on `/projects`.
- Leave `github` or `demo` as `''` when the link does not exist — the button is hidden
  rather than pointing somewhere broken.

## 5. Replace project images

Images live in `public/images/projects/`. Reference them from `projects.js` by their
path from the site root (`/images/projects/name.png`).

- Target **16:9**. Cards use `object-fit: cover`, so anything else gets cropped.
- Ship a screenshot of the real thing where you have one — a detection output,
  a dashboard, an architecture diagram, a UI.
- The current SVGs are designed placeholders that represent each project. Drop a real
  screenshot in and update the path; nothing else changes.
- Set `figure: true` for matplotlib-style figures on a white background. That mounts
  the image on a light plate with `object-fit: contain` so nothing is cropped and the
  colormap is not altered. Leave it `false` for dark images so they fill the frame.

## 6. Add your CV

1. Put the PDF at `public/cv.pdf`.
2. Set `cv: '/cv.pdf'` in `src/data/profile.js`.

The "Download CV" button in the hero stays hidden while `cv` is `''`, so there is
never a link to a missing file.

## 7. GitHub configuration

Repository settings → **Pages** → *Source*: **GitHub Actions** (not "Deploy from a
branch"). The workflow in `.github/workflows/static.yml` builds the site and uploads
`dist/` on every push to `main`.

Project links in `projects.js` point at repositories under
`https://github.com/pmnafshari`. Projects without a public repo simply have no
GitHub button.

## 8. Deploy

Push to `main`. The workflow runs `npm ci && npm run build` on Node 22 and publishes
`dist/`. Watch it under the repository's **Actions** tab; the deploy job prints the
live URL when it finishes.

To deploy without pushing code, use **Actions → Deploy to Pages → Run workflow**.

## 9. Custom domain

`public/CNAME` contains `pmnafshari.it` and Vite copies it into `dist/` on every
build, so the domain survives each deploy. **Do not delete it** — GitHub Pages resets
the custom domain when the file goes missing.

DNS for the apex domain should point at GitHub's Pages IPs:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
```

Add `CNAME  www  pmnafshari.github.io.` if you want `www` to work too, then enable
**Enforce HTTPS** in the Pages settings once the certificate is issued.

---

## Project structure

```
public/
├── CNAME                  custom domain, copied to dist/ verbatim
├── favicon.svg            "PA" mark
├── og.png                 1200×630 social preview card
├── images/projects/       project visuals
└── thesis/                the pre-existing static thesis page, untouched
src/
├── components/            Navbar, Hero, About, Skills, Projects, Research,
│                          Background, Contact, Footer, UI/
├── data/                  all content — profile, projects, skills, research, experience
├── hooks/                 useReveal, useScrollSpy, useScrolled, useDocumentMeta
├── pages/                 Home, ProjectsPage, NotFound
├── styles/global.css      design tokens, reset, focus, reduced-motion
├── App.jsx                routes, scroll management, skip link
└── main.jsx
```

## Notes on a few decisions

- **Routing.** `/projects` uses a real path, not a hash. GitHub Pages has no SPA
  rewrite, so `vite.config.js` copies the built `index.html` to `404.html`, which
  makes a cold load of `/projects` resolve client-side. Files that physically exist
  (`/thesis/index.html`) are served directly and are unaffected.
- **Fonts.** Inter is bundled through `@fontsource-variable/inter` instead of a
  Google Fonts `<link>`, so there is no render-blocking third-party request.
- **Motion.** Reveal animations run through one `IntersectionObserver` for the whole
  page and are disabled entirely under `prefers-reduced-motion: reduce`.
