// Generates public/sitemap.xml from the static routes and the slugs in src/data/*.ts.
// Runs automatically before `npm run build` (see the "prebuild" script).
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(resolve(root, p), 'utf8')

const siteUrl = /SITE_URL\s*=\s*'([^']+)'/.exec(read('src/data/site.ts'))[1].replace(/\/$/, '')
const slugs = (file) => [...read(file).matchAll(/^\s{4}slug:\s*'([^']+)'/gm)].map((m) => m[1])

const today = new Date().toISOString().slice(0, 10)
const entries = [
  ['/', '1.0', 'weekly'],
  ['/about', '0.8', 'monthly'],
  ['/services', '0.9', 'monthly'],
  ...slugs('src/data/services.ts').map((s) => [`/services/${s}`, '0.8', 'monthly']),
  ['/portfolio', '0.9', 'weekly'],
  ...slugs('src/data/projects.ts').map((s) => [`/portfolio/${s}`, '0.7', 'monthly']),
  ['/blog', '0.8', 'weekly'],
  ...slugs('src/data/posts.ts').map((s) => [`/blog/${s}`, '0.6', 'monthly']),
  ['/careers', '0.5', 'monthly'],
  ['/contact', '0.8', 'yearly'],
  ['/privacy-policy', '0.3', 'yearly'],
  ['/terms-of-service', '0.3', 'yearly'],
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ([path, priority, changefreq]) =>
      `  <url>\n    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml)
writeFileSync(
  resolve(root, 'public/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
console.log(`sitemap.xml: ${entries.length} URLs (${siteUrl})`)
