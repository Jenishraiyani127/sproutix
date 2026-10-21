import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { techCategories, totalTechnologies, type Tech } from '../data/technologies'
import { ease } from '../lib/motion'
import { Reveal, SectionHeading } from './ui'

function TechIcon({ tech }: { tech: Tech }) {
  const Icon = tech.icon
  return (
    <span
      className="grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
      style={{ backgroundColor: `${tech.color}14`, color: tech.color }}
    >
      {Icon ? <Icon size={28} /> : <span className="font-display text-lg font-extrabold">{tech.badge}</span>}
    </span>
  )
}

/** Category-wise technology showcase with an auto-scrolling logo strip. */
export function TechStack() {
  const [active, setActive] = useState(techCategories[0].id)
  const category = techCategories.find((c) => c.id === active) ?? techCategories[0]
  const strip = techCategories.flatMap((c) => c.items)

  return (
    <section id="technologies" className="py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Technologies"
          title={
            <>
              The tech stack behind <span className="text-gradient">limitless products</span>
            </>
          }
          description={`${totalTechnologies}+ languages, frameworks and tools — chosen for performance, security and long-term maintainability.`}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[17rem_1fr] lg:gap-8">
          {/* category tabs */}
          <Reveal>
            <div
              role="tablist"
              aria-label="Technology categories"
              aria-orientation="vertical"
              className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {techCategories.map((c) => {
                const isActive = c.id === active
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(c.id)}
                    className={`relative flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      isActive ? 'text-white' : 'bg-white text-navy-600 shadow-soft hover:text-azure-700'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tech-tab"
                        className="absolute inset-0 rounded-2xl bg-brand-gradient shadow-glow"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative flex items-center gap-3">
                      <c.icon size={18} />
                      <span className="whitespace-nowrap">{c.label}</span>
                    </span>
                    <span
                      className={`relative ml-auto hidden rounded-full px-2 py-0.5 text-[11px] font-bold lg:block ${
                        isActive ? 'bg-white/20 text-white' : 'bg-navy-50 text-navy-400'
                      }`}
                    >
                      {c.items.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* technology grid */}
          <Reveal delay={0.1}>
            <div className="min-h-[24rem] rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <div className="flex flex-wrap items-end justify-between gap-2 border-b border-navy-100/80 pb-5">
                    <div>
                      <h3 className="text-xl font-bold">{category.label}</h3>
                      <p className="mt-1 text-sm text-navy-500">{category.blurb}</p>
                    </div>
                    <span className="rounded-full bg-azure-50 px-3 py-1 text-xs font-bold text-azure-700">
                      {category.items.length} technologies
                    </span>
                  </div>

                  <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                    {category.items.map((t, i) => (
                      <motion.li
                        key={t.name}
                        initial={{ opacity: 0, scale: 0.85, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i * 0.03, ease }}
                        className="group flex flex-col items-center gap-3 rounded-2xl border border-navy-100/70 bg-navy-50/40 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-azure-200 hover:bg-white hover:shadow-lift"
                      >
                        <TechIcon tech={t} />
                        <span className="text-sm font-semibold text-navy-800">{t.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* logo strip */}
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-8 pr-8">
            {[...strip, ...strip].map((t, i) => {
              const Icon = t.icon
              return (
                <span key={i} className="flex items-center gap-2 text-navy-300" title={t.name}>
                  {Icon ? <Icon size={26} /> : <span className="font-display text-base font-extrabold">{t.badge}</span>}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
