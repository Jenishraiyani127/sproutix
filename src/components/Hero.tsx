import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { LuTrendingUp } from 'react-icons/lu'
import { clients, heroServices, type HeroService } from '../data/content'
import { avatar, photos, unsplash } from '../lib/img'
import { ease } from '../lib/motion'
import { Button } from './ui'

const GRADIENT = 'linear-gradient(100deg, #1f6bff 0%, #5b4bf2 55%, #9333ea 100%)'
const pillClass =
  'hidden shrink-0 overflow-hidden rounded-full shadow-lift ring-[0.08em] ring-white sm:inline-block'

type Tone = 'dark' | 'muted' | 'gradient'

/** Letter-by-letter blur reveal. */
function Words({ text, delay, tone = 'dark' }: { text: string; delay: number; tone?: Tone }) {
  let count = 0
  return (
    <>
      {text.split(' ').map((word, w) => {
        const letters = [...word]
        return (
          <span key={w} className="inline-block whitespace-nowrap" aria-hidden="true">
            {letters.map((ch, i) => {
              const style =
                tone === 'gradient'
                  ? {
                      backgroundImage: GRADIENT,
                      backgroundSize: `${letters.length * 100}% 100%`,
                      backgroundPosition: `${letters.length > 1 ? (i / (letters.length - 1)) * 100 : 0}% 0`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }
                  : undefined
              return (
                <motion.span
                  key={i}
                  className={`inline-block ${tone === 'muted' ? 'text-navy-400' : 'text-navy-900'}`}
                  style={style}
                  initial={{ opacity: 0, y: '0.45em', filter: 'blur(14px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.75, delay: delay + count++ * 0.024, ease }}
                >
                  {ch}
                </motion.span>
              )
            })}
          </span>
        )
      })}
    </>
  )
}

/** Static rounded photo that sits inline between headline words. */
function Pill({ id, delay, tilt = 0 }: { id: string; delay: number; tilt?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={pillClass}
      style={{ height: '0.78em', rotate: tilt }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '1.7em', opacity: 1 }}
      transition={{ duration: 1, delay, ease }}
    >
      <img src={unsplash(id, 360, 200)} alt="" className="h-full object-cover" style={{ width: '1.7em' }} />
    </motion.span>
  )
}

/** Inline photo pill that cross-fades to the currently selected service. */
function ServicePill({ index, delay }: { index: number; delay: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`${pillClass} relative`}
      style={{ height: '0.78em', rotate: 3 }}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '1.7em', opacity: 1 }}
      transition={{ duration: 1, delay, ease }}
    >
      {heroServices.map((s, i) => (
        <motion.img
          key={s.key}
          src={unsplash(s.image, 360, 200)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.2 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </motion.span>
  )
}

function RotatingWord({ word }: { word: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.95, duration: 0.6 }}
      className="relative inline-flex"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          className="text-gradient inline-block whitespace-nowrap"
          initial={{ opacity: 0, y: '0.4em', filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: '-0.4em', filter: 'blur(12px)' }}
          transition={{ duration: 0.4, ease }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

const Line = ({ children }: { children: ReactNode }) => (
  <span className="flex flex-wrap items-center justify-center gap-x-[0.26em]">{children}</span>
)

function Sparkline({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 120 40" className="h-9 w-24" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="spark" x1="0" x2="1">
          <stop stopColor="#1f6bff" />
          <stop offset=".6" stopColor="#5b4bf2" />
          <stop offset="1" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      <motion.path
        key={id}
        d="M0 34 C14 32 20 24 34 24 S52 30 66 18 S92 12 120 3"
        stroke="url(#spark)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  )
}

const swap = {
  initial: { opacity: 0, y: 10, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -10, filter: 'blur(4px)' },
  transition: { duration: 0.35, ease },
}

function Banner({ active, index }: { active: HeroService; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  const chipY = useTransform(scrollYProgress, [0, 1], [90, 0])
  const chipYAlt = useTransform(scrollYProgress, [0, 1], [-60, 0])

  return (
    <div ref={ref} className="relative mx-auto mt-12 max-w-6xl px-4 sm:px-8" style={{ perspective: 1600 }}>
      <motion.div style={{ rotateX, scale, transformOrigin: '50% 0%' }} className="relative">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-navy-50 shadow-lift ring-1 ring-navy-100 sm:aspect-[2/1] sm:rounded-[2.25rem] sm:border-8">
          <motion.div style={{ scale: imgScale }} className="absolute inset-0">
            {heroServices.map((s, i) => (
              <motion.img
                key={s.key}
                src={unsplash(s.image, 1800, 900)}
                alt={`${s.chip} by Spherotix`}
                aria-hidden={i !== index}
                className="absolute inset-0 h-full w-full object-cover"
                animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.08 }}
                transition={{ duration: 0.9, ease }}
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-tr from-azure-600/25 via-transparent to-leaf-400/20" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-900/35 to-transparent" />
        </div>

        {/* floating glass chips — content follows the selected service */}
        <motion.div style={{ y: chipYAlt }} className="absolute top-[8%] -right-2 hidden md:block lg:-right-10">
          <div className="animate-float min-w-[11.5rem] overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lift backdrop-blur-xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active.key} {...swap}>
                <div className="flex items-center justify-between gap-5">
                  <p className="text-xs font-semibold text-navy-500">{active.stat.label}</p>
                  <span className="inline-flex items-center rounded-full bg-leaf-50 px-1.5 py-0.5 text-leaf-600">
                    <LuTrendingUp size={12} />
                  </span>
                </div>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <p className="font-display text-2xl font-extrabold text-gradient">{active.stat.value}</p>
                  <Sparkline id={active.key} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div style={{ y: chipY }} className="absolute bottom-[10%] -left-2 hidden md:block lg:-left-10">
          <div className="animate-float-slow overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lift backdrop-blur-xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active.key} {...swap} className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white">
                  <active.icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-900">{active.chip}</p>
                  <p className="text-[11px] text-navy-400">{active.blurb}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div style={{ y: chipY }} className="absolute right-[8%] -bottom-6 hidden sm:block">
          <div className="overflow-hidden rounded-2xl border border-white/80 bg-white px-4 py-3 shadow-lift">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={active.key} {...swap}>
                <p className="text-sm font-bold text-navy-900">{active.badge.title}</p>
                <p className="text-[11px] text-navy-400">{active.badge.sub}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ServiceTabs({
  index,
  onSelect,
  onPause,
}: {
  index: number
  onSelect: (i: number) => void
  onPause: (paused: boolean) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.35, ease }}
      className="mt-9"
    >
      <p
        className="text-center text-xl text-navy-500"
        style={{ fontFamily: '"Nanum Pen Script", cursive' }}
        aria-hidden="true"
      >
        Pick what you want to build ↓
      </p>
      <div
        role="tablist"
        aria-label="Spherotix services"
        onMouseEnter={() => onPause(true)}
        onMouseLeave={() => onPause(false)}
        className="mx-auto mt-3 flex max-w-3xl flex-wrap justify-center gap-2"
      >
        {heroServices.map((s, i) => {
          const isActive = i === index
          return (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(i)}
              className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                isActive ? 'text-white' : 'border border-navy-100 bg-white text-navy-600 shadow-soft hover:text-azure-700'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="hero-tab"
                  className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <s.icon size={16} />
                {s.chip}
              </span>
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}

function Clients() {
  const items = [...clients, ...clients]
  return (
    <div className="mt-14">
      <p className="text-center text-xs font-semibold tracking-[0.2em] text-navy-400 uppercase">
        Trusted by growing brands across industries
      </p>
      <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {items.map(({ name, icon: Icon }, i) => (
            <span
              key={i}
              className="flex items-center gap-2.5 text-xl font-bold whitespace-nowrap text-navy-200 transition-colors hover:text-azure-600"
            >
              <Icon size={24} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const resume = useRef<number>(0)
  const active = heroServices[index]

  // Auto-cycle through the services until the visitor takes over.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroServices.length), 3600)
    return () => window.clearInterval(id)
  }, [paused])

  useEffect(() => () => window.clearTimeout(resume.current), [])

  const select = (i: number) => {
    setIndex(i)
    setPaused(true)
    window.clearTimeout(resume.current)
    resume.current = window.setTimeout(() => setPaused(false), 10000) // touch users have no mouse-leave
  }

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
      {/* ambient gradient mesh */}
      <div className="bg-grid absolute inset-0 -z-10" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 left-[8%] -z-10 h-[420px] w-[420px] rounded-full bg-azure-200/50 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -70, 0], y: [0, 40, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 right-[6%] -z-10 h-[460px] w-[460px] rounded-full bg-leaf-200/50 blur-3xl"
      />
      <div className="absolute top-40 left-1/2 -z-10 h-[320px] w-[620px] -translate-x-1/2 rounded-full bg-teal-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-3 rounded-full border border-white bg-white/80 py-1.5 pr-5 pl-2 shadow-soft backdrop-blur"
        >
          <span className="flex">
            {(['p3', 'p5', 'p6'] as const).map((k, i) => (
              <img
                key={k}
                src={avatar(k, 80)}
                alt=""
                className={`h-8 w-8 rounded-full border-2 border-white object-cover ${i ? '-ml-2.5' : ''}`}
              />
            ))}
          </span>
          <span className="text-sm font-medium text-navy-600">Trusted by 60+ founders</span>
        </motion.div>

        <h1
          aria-label={`Ideas that scale into ${active.word}`}
          className="mx-auto mt-7 flex max-w-[80rem] flex-col items-center gap-y-[0.12em] text-[2.35rem] leading-[1.12] font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.7rem]"
        >
          <Line>
            <Words text="Ideas that" delay={0.1} />
            <Pill id={photos.laughing} delay={0.5} tilt={-4} />
            <Words text="Scale" delay={0.35} tone="gradient" />
          </Line>
          <Line>
            <Words text="into" delay={0.6} tone="muted" />
            <ServicePill index={index} delay={0.85} />
            <RotatingWord word={active.word} />
          </Line>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 1.1, ease }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg"
        >
          Spherotix is a full-service digital agency — web &amp; app development, CMS, graphic design, UI/UX
          and marketing — taking your idea from the first sketch to real growth.
        </motion.p>

        <ServiceTabs index={index} onSelect={select} onPause={setPaused} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="/contact">Start your project</Button>
          <Button href="/portfolio" variant="secondary">
            View our work
          </Button>
        </motion.div>
      </div>

      <Banner active={active} index={index} />
      <Clients />
    </section>
  )
}
