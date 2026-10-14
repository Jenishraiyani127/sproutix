import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { LuTrendingUp } from 'react-icons/lu'
import { avatar, photos, unsplash } from '../lib/img'
import { ease } from '../lib/motion'
import { Counter } from './Counter'
import { LogoMark } from './Logo'
import { Eyebrow, Reveal } from './ui'

/** Pastel gradient bento card with a staggered reveal. */
function Card({
  children,
  className = '',
  tone = 'azure',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  tone?: 'azure' | 'teal' | 'leaf' | 'mix'
  delay?: number
}) {
  const tones = {
    azure: 'from-azure-50 via-white to-azure-50/40 border-azure-100',
    teal: 'from-teal-50 via-white to-teal-50/40 border-teal-100',
    leaf: 'from-leaf-50 via-white to-leaf-50/40 border-leaf-100',
    mix: 'from-azure-50 via-teal-50/70 to-leaf-50 border-teal-100',
  }[tone]
  return (
    <Reveal
      delay={delay}
      className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${tones} transition-shadow duration-500 hover:shadow-lift ${className}`}
    >
      {children}
    </Reveal>
  )
}

function Photo({ id, alt, className = '', delay = 0, label }: { id: string; alt: string; className?: string; delay?: number; label?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: 'inset(12% 8% 12% 8% round 2rem)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 1.5rem)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, delay, ease }}
      className={`group relative overflow-hidden rounded-3xl bg-navy-100 ${className}`}
    >
      <img
        src={unsplash(id, 1100)}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-azure-600/10" />
      {label && (
        <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-navy-800 backdrop-blur-md">
          {label}
        </span>
      )}
    </motion.div>
  )
}

/** Faux landing page preview used in the first card. */
function PagePreview() {
  const bars = ['w-full', 'w-11/12', 'w-4/5', 'w-full', 'w-3/5']
  return (
    <div className="relative flex-1 overflow-hidden rounded-2xl bg-white p-4 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-azure-50">
          <LogoMark className="h-6" />
        </span>
        <div className="flex-1 space-y-1.5">
          <div className="h-2 w-2/3 rounded-full bg-navy-200" />
          <div className="h-2 w-1/3 rounded-full bg-navy-100" />
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease }}
        style={{ transformOrigin: 'left' }}
        className="mt-4 h-14 rounded-xl bg-brand-gradient"
      />

      <div className="mt-4 space-y-2">
        {bars.map((w, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease }}
            style={{ transformOrigin: 'left' }}
            className={`h-2 rounded-full bg-navy-100 ${w}`}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {['bg-azure-100', 'bg-teal-100', 'bg-leaf-100'].map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 + i * 0.12 }}
            className={`h-9 rounded-lg ${c}`}
          />
        ))}
      </div>

      {/* lighthouse score */}
      <div className="absolute right-3 bottom-3 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lift">
        <svg viewBox="0 0 44 44" className="absolute inset-0 -rotate-90" aria-hidden="true">
          <circle cx="22" cy="22" r="18" fill="none" stroke="#d9f7d2" strokeWidth="4" />
          <motion.circle
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke="#46b937"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.8, ease }}
          />
        </svg>
        <span className="font-display text-sm font-bold text-leaf-600">98</span>
      </div>
    </div>
  )
}

function Sparkline() {
  return (
    <svg viewBox="0 0 110 34" className="h-9 w-16 shrink-0" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="about-spark" x1="0" x2="1">
          <stop stopColor="#1d5fc6" />
          <stop offset="1" stopColor="#46b937" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 28 C12 26 16 18 30 20 S48 26 60 14 S86 10 110 3"
        stroke="url(#about-spark)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
      />
    </svg>
  )
}

const floaters: Array<{ k: Parameters<typeof avatar>[0]; cls: string; bg: string; d: string }> = [
  { k: 'p2', cls: 'right-[44%] top-3 h-14 w-14', bg: 'bg-azure-100', d: '0s' },
  { k: 'p3', cls: 'right-[27%] top-2 h-16 w-16', bg: 'bg-teal-100', d: '-2s' },
  { k: 'p5', cls: 'right-[9%] top-4 h-14 w-14', bg: 'bg-leaf-100', d: '-4s' },
  { k: 'p1', cls: 'right-[52%] bottom-3 h-12 w-12', bg: 'bg-leaf-100', d: '-1s' },
  { k: 'p7', cls: 'right-[34%] bottom-2 h-14 w-14', bg: 'bg-azure-100', d: '-3s' },
  { k: 'p6', cls: 'right-[17%] bottom-3 h-14 w-14', bg: 'bg-teal-100', d: '-5s' },
  { k: 'p8', cls: '-right-3 bottom-1 h-14 w-14', bg: 'bg-leaf-100', d: '-2.5s' },
]

export function About() {
  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal className="max-w-xl">
            <Eyebrow>Our Results</Eyebrow>
            <h2 className="mt-4 text-3xl leading-[1.15] font-bold text-balance sm:text-4xl lg:text-5xl">
              Proven Success In <span className="text-gradient">Digital Growth</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md text-base leading-relaxed text-navy-500 lg:text-right">
            With deep expertise and genuine dedication, Sproutix has helped brands launch, rank and scale — from the first pixel to the first page-one result.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(24,minmax(0,1fr))]">
          {/* row 1 */}
          <Card tone="azure" className="flex min-h-[28rem] flex-col p-4 lg:col-span-7">
            <PagePreview />
            <div className="px-2 pt-5 pb-1">
              <p className="text-sm font-semibold text-navy-800">Websites &amp; Apps Launched</p>
              <p className="mt-2 font-display text-4xl font-bold text-navy-900">
                <Counter value={120} suffix="+" />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                Fast, responsive websites, apps and CMS platforms — delivered on time and built to scale.
              </p>
            </div>
          </Card>

          <div className="grid gap-4 lg:col-span-5">
            <Card tone="teal" delay={0.1} className="p-6">
              <p className="text-sm font-semibold text-navy-800">Client Growth &amp; Retention</p>
              <p className="mt-4 font-display text-4xl font-bold text-navy-900">
                <Counter value={60} suffix="+" />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-500">
                brands launched and scaled across e-commerce, healthcare, education and SaaS.
              </p>
            </Card>
            <Card tone="leaf" delay={0.2} className="p-6">
              <p className="text-sm font-semibold text-navy-800">Brand Identity Excellence</p>
              <div className="mt-4 flex">
                {(['p1', 'p2', 'p3', 'p4', 'p5', 'p6'] as const).map((k, i) => (
                  <img
                    key={k}
                    src={avatar(k, 80)}
                    alt=""
                    loading="lazy"
                    className={`h-10 w-10 rounded-full border-2 border-white object-cover ${i ? '-ml-3' : ''}`}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm text-navy-500">Worked with 40+ businesses worldwide</p>
            </Card>
          </div>

          <Photo
            id={photos.meeting}
            alt="Sproutix team planning a project with sticky notes on a whiteboard"
            label="Strategy workshops"
            delay={0.15}
            className="min-h-[18rem] sm:col-span-2 lg:col-span-12"
          />

          {/* row 2 */}
          <Card tone="azure" delay={0.1} className="flex flex-col justify-between gap-5 p-5 lg:col-span-5">
            <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-soft">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                  <LuTrendingUp size={16} />
                </span>
                <div className="whitespace-nowrap">
                  <p className="text-xs font-bold text-navy-900">3.2x campaign ROI</p>
                  <p className="text-[10px] text-navy-400">Last 6 months</p>
                </div>
              </div>
              <Sparkline />
            </div>
            <p className="font-display text-lg leading-snug font-bold text-navy-900">
              <Counter value={90} suffix="%" /> client retention rate.
            </p>
          </Card>

          <Photo
            id={photos.laughing}
            alt="Happy collaborative team working together around a table"
            delay={0.2}
            className="min-h-[14rem] lg:col-span-7"
          />

          <Card tone="mix" delay={0.25} className="min-h-[11rem] p-6 sm:col-span-2 lg:col-span-12">
            <div className="relative z-10 max-w-[16rem]">
              <p className="font-display text-3xl font-bold text-navy-900">
                <Counter value={300} suffix="+" /> designs
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-600 italic">
                Logos, social creatives and UI kits shipped to help brands stand out.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-3/5 sm:block" aria-hidden="true">
              {floaters.map(({ k, cls, bg, d }) => (
                <span
                  key={k}
                  className={`absolute animate-float-slow overflow-hidden rounded-full ${bg} shadow-soft ring-2 ring-white ${cls}`}
                  style={{ animationDelay: d }}
                >
                  <img src={avatar(k, 120)} alt="" loading="lazy" className="h-full w-full object-cover" />
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
