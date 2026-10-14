import { useEffect } from 'react'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../data/site'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  /** Extra JSON-LD objects (Article, Service, ...). A BreadcrumbList is added from `breadcrumbs`. */
  jsonLd?: object[]
  breadcrumbs?: Array<{ label: string; to?: string }>
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Per-page title, meta tags, canonical URL and JSON-LD (no extra dependency needed). */
export function Seo({ title, description, path = '/', image = DEFAULT_OG_IMAGE, type = 'website', noindex, jsonLd = [], breadcrumbs }: SeoProps) {
  const serialized = JSON.stringify(jsonLd)
  const crumbs = JSON.stringify(breadcrumbs ?? null)

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    const img = image.startsWith('http') ? image : `${SITE_URL}${image}`

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertLink('canonical', url)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', img)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', img)

    const items: object[] = [...(JSON.parse(serialized) as object[])]
    const trail = JSON.parse(crumbs) as SeoProps['breadcrumbs'] | null
    if (trail?.length) {
      items.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ label: 'Home', to: '/' }, ...trail].map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.label,
          ...(c.to ? { item: `${SITE_URL}${c.to}` } : {}),
        })),
      })
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seo = 'page'
    script.textContent = JSON.stringify(items.length === 1 ? items[0] : items)
    if (items.length) document.head.appendChild(script)
    return () => script.remove()
  }, [title, description, path, image, type, noindex, serialized, crumbs])

  return null
}
