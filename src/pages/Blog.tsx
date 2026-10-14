import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Seo } from '../components/Seo'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { PostCard } from '../components/page/PostCard'
import { Section } from '../components/page/Section'
import { Reveal } from '../components/ui'
import { postCategories, posts, type PostCategory } from '../data/posts'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'Blog' }]

export default function Blog() {
  const [category, setCategory] = useState<'All' | PostCategory>('All')
  const filtered = posts.filter((p) => category === 'All' || p.category === category)
  const [featured, ...rest] = filtered

  return (
    <>
      <Seo
        title="Blog — Insights on Web, Design, Apps & Marketing"
        description="Practical articles from the Sproutix team on web development, app development, design, SEO and growing a business online."
        path={routes.blog}
        breadcrumbs={crumbs}
      />

      <PageHero
        eyebrow="Insights"
        align="center"
        title={
          <>
            Ideas, guides and <span className="text-gradient">lessons learned</span>
          </>
        }
        description="Practical advice from our designers, engineers and marketers to help you build and grow better digital products."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter articles">
          {postCategories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                category === c ? 'text-white' : 'bg-white text-navy-600 shadow-soft hover:text-azure-700'
              }`}
            >
              {category === c && (
                <motion.span
                  layoutId="post-filter"
                  className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            {featured ? (
              <>
                <PostCard post={featured} variant="featured" />
                {rest.length > 0 && (
                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((p, i) => (
                      <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                        <PostCard post={p} />
                      </Reveal>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-navy-500">No articles in this category yet — check back soon.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      <CtaBand
        title="Have a project in mind?"
        text="Our team is happy to share ideas and give honest advice — no obligation, no jargon."
        secondary={{ label: 'View services', href: routes.services }}
      />
    </>
  )
}
