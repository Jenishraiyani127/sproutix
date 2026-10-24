import { useEffect, useState } from 'react'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { LuCheck, LuClock, LuCopy } from 'react-icons/lu'
import { useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Button, Reveal } from '../components/ui'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { PostCard } from '../components/page/PostCard'
import { Section } from '../components/page/Section'
import { SITE_URL } from '../data/site'
import { getPost, posts, type Block } from '../data/posts'
import { formatDate } from '../lib/format'
import { avatarUrl, unsplash } from '../lib/img'
import { routes } from '../lib/routes'
import NotFound from './NotFound'

const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5 text-[1.05rem] leading-[1.85] text-navy-600">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2 key={i} id={slugify(b.text)} className="!mt-10 scroll-mt-28 text-2xl font-bold sm:text-3xl">
                {b.text}
              </h2>
            )
          case 'ul':
            return (
              <ul key={i} className="space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                      <LuCheck size={12} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            )
          case 'quote':
            return (
              <blockquote key={i} className="!my-8 rounded-3xl border-l-4 border-azure-500 bg-azure-50/70 p-6 sm:p-8">
                <p className="text-xl leading-relaxed font-semibold text-navy-800">“{b.text}”</p>
                {b.by && <footer className="mt-3 text-sm font-semibold text-azure-700">— {b.by}</footer>}
              </blockquote>
            )
          default:
            return <p key={i}>{b.text}</p>
        }
      })}
    </div>
  )
}

/** Highlights the table-of-contents entry for the heading currently in view. */
function useActiveHeading(joined: string) {
  const ids = joined ? joined.split("|") : []
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const ids = joined ? joined.split("|") : []
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [joined])
  return active
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  const [copied, setCopied] = useState(false)
  const headings = post
    ? post.body
        .filter((b): b is Extract<Block, { type: 'h2' }> => b.type === 'h2')
        .map((b) => ({ id: slugify(b.text), text: b.text }))
    : []
  const active = useActiveHeading(headings.map((h) => h.id).join("|"))

  if (!post) return <NotFound message="We couldn't find that article. Browse our latest posts instead." />
  const p = post

  const url = `${SITE_URL}${routes.post(p.slug)}`
  const related = posts.filter((x) => x.slug !== p.slug && x.category === p.category).concat(posts.filter((x) => x.slug !== p.slug && x.category !== p.category)).slice(0, 3)
  const crumbs = [{ label: 'Blog', to: routes.blog }, { label: p.title }]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link', url)
    }
  }

  return (
    <>
      <Seo
        title={p.title}
        description={p.excerpt}
        path={routes.post(p.slug)}
        image={unsplash(p.cover, 1200, 630)}
        keywords={[p.title, `${p.category} insights`, `${p.category.toLowerCase()} tips`, "Spherotix blog"]}
        type="article"
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.excerpt,
            image: unsplash(p.cover, 1200, 630),
            datePublished: p.date,
            author: { '@type': 'Person', name: p.author.name },
            publisher: { '@type': 'Organization', name: 'Spherotix' },
            mainEntityOfPage: url,
          },
        ]}
      />

      <PageHero
        eyebrow={p.category}
        title={p.title}
        breadcrumbs={crumbs}
        image={p.cover}
        imageAlt={p.title}
        meta={
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-500">
            <span className="flex items-center gap-2.5">
              <img src={avatarUrl(p.author.avatar)} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
              <span>
                <span className="block font-semibold text-navy-800">{p.author.name}</span>
                <span className="block text-xs">{p.author.role}</span>
              </span>
            </span>
            <span>{formatDate(p.date)}</span>
            <span className="inline-flex items-center gap-1.5">
              <LuClock size={14} /> {p.readTime}
            </span>
          </div>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <article className="min-w-0">
            <Prose blocks={p.body} />

            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-navy-100 pt-6">
              <span className="text-sm font-semibold text-navy-700">Share this article</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 text-navy-500 transition-colors hover:border-transparent hover:bg-brand-gradient hover:text-white"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(p.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 text-navy-500 transition-colors hover:border-transparent hover:bg-brand-gradient hover:text-white"
              >
                <FaXTwitter size={15} />
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-navy-100 px-4 text-sm font-semibold text-navy-600 transition-colors hover:border-azure-200 hover:text-azure-700"
              >
                {copied ? <LuCheck className="text-leaf-500" /> : <LuCopy />} {copied ? 'Copied' : 'Copy link'}
              </button>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {headings.length > 0 && (
              <nav aria-label="Table of contents" className="rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold tracking-wider text-navy-400 uppercase">In this article</p>
                <ul className="mt-4 space-y-1">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className={`block rounded-xl border-l-2 px-3 py-2 text-sm font-medium transition-colors ${
                          active === h.id
                            ? 'border-azure-500 bg-azure-50 text-azure-700'
                            : 'border-transparent text-navy-500 hover:text-azure-700'
                        }`}
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="rounded-3xl bg-navy-900 p-6 text-white shadow-lift">
              <p className="font-display text-lg font-bold">Need help with your project?</p>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">
                Talk to our team about your website, app, brand or marketing goals.
              </p>
              <Button href={routes.contact} variant="light" className="mt-5 w-full">
                Get in touch
              </Button>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Keep <span className="text-gradient">reading</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.08}>
              <PostCard post={r} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Turn these ideas into results"
        text="Our team can help you plan and build the right solution for your business."
        secondary={{ label: 'View services', href: routes.services }}
      />
    </>
  )
}
