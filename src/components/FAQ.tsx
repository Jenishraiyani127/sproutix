import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { LuClock } from 'react-icons/lu'
import { faqs } from '../data/content'
import { photos, unsplash } from '../lib/img'
import { ease } from '../lib/motion'
import { Accordion, type AccordionItem } from './page/Accordion'
import { Button, Eyebrow, Reveal } from './ui'

interface FAQProps {
  items?: AccordionItem[]
}

/** Image + accordion FAQ block (home page). */
export function FAQ({ items = faqs }: FAQProps) {
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.08, 1])
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="faq" className="relative py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* image */}
        <Reveal y={0} className="relative">
          <div
            ref={imgRef}
            className="relative aspect-[4/4.2] overflow-hidden rounded-[1.75rem] bg-navy-100 shadow-lift lg:aspect-[4/5]"
          >
            <motion.img
              src={unsplash(photos.teamLaptop, 1000, 1250)}
              alt="Two Sproutix team members discussing a project on a laptop"
              loading="lazy"
              style={{ scale, y }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-azure-600/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="absolute -right-3 -bottom-5 sm:-right-6"
          >
            <div className="animate-float flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lift backdrop-blur-xl">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-white">
                <LuClock size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-900">Reply in 24 hours</p>
                <p className="text-[11px] text-navy-400">Free consultation call</p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* content */}
        <div>
          <Reveal>
            <Eyebrow>Got Questions?</Eyebrow>
            <h2 className="mt-4 text-3xl leading-[1.15] font-bold sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-500">
              Get clarity on your digital journey. Here are answers to the most frequently asked questions about our
              services and how we work.
            </p>
            <Button href="/contact" className="mt-7">
              Contact Us
            </Button>
          </Reveal>

          <div className="mt-10">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  )
}
