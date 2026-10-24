import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef, useState } from 'react'
import { whyCards } from '../data/content'
import { unsplash } from '../lib/img'
import { Reveal } from './ui'

const sentence =
  'We are a full-service digital agency that designs, builds and grows websites, mobile apps, CMS platforms and brands for startups and ambitious businesses.'

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const color = useTransform(progress, range, ['#9fb0cc', '#0b0a24'])
  return <motion.span style={{ color }}>{word}</motion.span>
}

/** Words darken one by one as the paragraph scrolls into view. */
function ScrollSentence() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.35'] })
  const words = sentence.split(' ')
  return (
    <p
      ref={ref}
      aria-label={sentence}
      className="mt-5 flex max-w-3xl flex-wrap gap-x-2 text-lg leading-snug font-semibold sm:text-xl md:text-2xl"
    >
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  )
}

export function WhyUs() {
  const [active, setActive] = useState(0)

  return (
    <section id="why" className="overflow-hidden bg-navy-50/60 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-8">
          <h2 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            Why <span className="text-gradient">Choose Spherotix?</span>
          </h2>
          <ScrollSentence />
        </Reveal>

        <div className="mb-4 hidden justify-center lg:flex" aria-hidden="true">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="-rotate-[8deg] text-3xl text-navy-700"
            style={{ fontFamily: '"Nanum Pen Script", cursive' }}
          >
            Hover it ↷
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          {whyCards.map((c, i) => {
            const isActive = active === i
            return (
              <div
                key={c.title}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
                style={{ flexGrow: isActive ? 1.5 : 1 }}
                className="relative h-[420px] cursor-pointer basis-0 overflow-hidden rounded-[18px] bg-navy-950 transition-[flex-grow] duration-500 ease-out md:min-w-0"
              >
                <img
                  src={unsplash(c.image, 1200)}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                  style={{ filter: `grayscale(${isActive ? 0 : 85}%)`, transform: `scale(${isActive ? 1.08 : 1.14})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950/10 via-navy-950/30 to-navy-950" />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-azure-600/30 via-transparent to-leaf-400/20 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-8">
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.8, scale: isActive ? 1 : 0.9 }}
                    className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-2xl text-white backdrop-blur"
                  >
                    <c.icon />
                  </motion.div>
                  <h3 className="text-2xl font-black whitespace-pre-line text-white uppercase">{c.title}</h3>
                  <div
                    className={`grid transition-all duration-500 ${
                      isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-sm text-base leading-relaxed text-white/75">{c.text}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute inset-0 rounded-[18px] border-2 transition-all duration-500 ${
                    isActive ? 'border-teal-400/70' : 'border-white/10'
                  }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
