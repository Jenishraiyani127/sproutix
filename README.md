# Spherotix — Company Website

Premium light-themed marketing site for **Spherotix** — web & app development, CMS, graphic design, UI/UX and digital marketing.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router 7 · Framer Motion · React Icons · Lenis (smooth scroll)
**Font:** Montserrat · **Images:** Unsplash (IDs in `src/lib/img.ts` — swap for real photography)

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # sitemap + type-check + production build -> dist/
npm run preview   # serve the production build
npm run lint
```

## Pages

| Route                      | Page                              | Data source                |
| -------------------------- | --------------------------------- | -------------------------- |
| `/`                        | Home                              | `data/content.ts`          |
| `/about`                   | About (story, values, team)       | `data/company.ts`          |
| `/services`                | Services overview                 | `data/services.ts`         |
| `/services/:slug`          | Service detail (6 services)       | `data/services.ts`         |
| `/portfolio`               | Portfolio with filters            | `data/projects.ts`         |
| `/portfolio/:slug`         | Case study (6 projects)           | `data/projects.ts`         |
| `/blog`                    | Blog list with category filter    | `data/posts.ts`            |
| `/blog/:slug`              | Article with TOC & share          | `data/posts.ts`            |
| `/contact`                 | Contact (`?service=<slug>` preset)| `data/content.ts`          |
| `/careers`                 | Careers & open roles              | `data/company.ts`          |
| `/privacy-policy`, `/terms-of-service` | Legal                 | `data/legal.ts`            |
| `*`                        | 404                               | —                          |

Detail pages are **data-driven**: add an object to `services.ts`, `projects.ts` or `posts.ts` and the page, card,
nav dropdown, footer link and sitemap entry appear automatically.

## Reusable building blocks (`src/components/page/`)

`PageHero` (breadcrumbs, eyebrow, title, actions, aside visual or banner photo) · `Section` · `CtaBand` ·
`FeatureGrid` · `StatsBand` · `Accordion` · `TechChips` · `ServiceCard` · `ProjectCard` / `ProjectGrid` ·
`PostCard` · `TeamCard` · `Breadcrumbs`. Page-level `Seo` sets the title, meta, canonical, Open Graph and JSON-LD.

## Where to edit

| What                                       | File                       |
| ------------------------------------------ | -------------------------- |
| Domain used for canonical URLs & sitemap   | `src/data/site.ts`         |
| Company email / phone / address / hours    | `src/data/content.ts`      |
| Brand colours (navy / azure / teal / leaf) | `src/index.css` (`@theme`) |
| Home-page `<head>` defaults, JSON-LD       | `index.html`               |

## Before going live

- All company details, stats, team, case studies, testimonials, blog posts and openings are **sample content**.
- Set the real domain in `src/data/site.ts` (and `index.html` canonical/OG tags).
- Have a lawyer review `src/data/legal.ts` — it is a starter template only.
- The contact form has no backend: it opens the visitor's mail client with the message pre-filled
  (`src/components/ContactForm.tsx`). Swap `handleSubmit` for an API call (Formspree, EmailJS, your own API).
- Social links in `src/components/Footer.tsx` are placeholders.

## Deploying

It is a single-page app, so the host must serve `index.html` for unknown paths. Included:
`public/_redirects` (Netlify / Cloudflare Pages) and `vercel.json` (Vercel). `public/sitemap.xml` and
`public/robots.txt` are regenerated on every build by `scripts/generate-sitemap.mjs`.

## Case studies & project images

Real case studies live in `src/data/projects.ts` (including per-project `seo.title`, `seo.description`, `seo.keywords`).
To add a poster, drop a WebP in `public/projects/`, set `cover` (and `ogImage`, a 1200×675 JPG) on the project —
projects without a `cover` show a branded gradient placeholder.

## Apache / cPanel hosting

`public/.htaccess` is copied into `dist/` on build. It forces HTTPS and the `www` host, rewrites unknown paths to
`index.html` (SPA routing), blocks dotfiles, and sets compression, caching and security headers.
Change `spherotix.com` inside it if your domain differs.
