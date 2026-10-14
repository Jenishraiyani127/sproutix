import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { unsplash } from '../../lib/img'
import { ease } from '../../lib/motion'
import { Eyebrow } from '../ui'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  breadcrumbs?: Crumb[]
  /** Buttons / links shown under the description. */
  actions?: ReactNode
  /** Extra content under the actions (meta row, badges …). */
  meta?: ReactNode
  /** Right-hand visual; switches the hero to a two-column layout. */
  aside?: ReactNode
  /** Wide banner photo shown under the text (Unsplash photo id). */
  image?: string
  imageAlt?: string
  align?: 'left' | 'center'
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, delay, ease },
})

/** Reusable hero for every inner page. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  meta,
  aside,
  image,
  imageAlt = '',
  align = 'left',
}: PageHeroProps) {
  const centered = align === 'center' && !aside
  const bannerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.08, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <header className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
      <div className="bg-grid absolute inset-0 -z-10" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 50, 0], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 left-[6%] -z-10 h-[380px] w-[380px] rounded-full bg-azure-200/50 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -60, 0], y: [0, 30, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 right-[4%] -z-10 h-[400px] w-[400px] rounded-full bg-leaf-200/50 blur-3xl"
      />
      <div className="absolute top-28 left-1/2 -z-10 h-[260px] w-[560px] -translate-x-1/2 rounded-full bg-teal-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={aside ? 'grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]' : ''}>
          <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
            {breadcrumbs && (
              <motion.div {...rise(0)}>
                <Breadcrumbs items={breadcrumbs} />
              </motion.div>
            )}
            {eyebrow && (
              <motion.div {...rise(0.08)} className="mt-6">
                <Eyebrow>{eyebrow}</Eyebrow>
              </motion.div>
            )}
            <motion.h1
              {...rise(0.14)}
              className="mt-4 text-4xl leading-[1.1] font-bold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.5rem]"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                {...rise(0.22)}
                className={`mt-5 max-w-2xl text-base leading-relaxed text-navy-500 sm:text-lg ${centered ? 'mx-auto' : ''}`}
              >
                {description}
              </motion.p>
            )}
            {actions && (
              <motion.div
                {...rise(0.3)}
                className={`mt-8 flex flex-col gap-3 sm:flex-row ${centered ? 'justify-center' : ''}`}
              >
                {actions}
              </motion.div>
            )}
            {meta && (
              <motion.div {...rise(0.38)} className="mt-8">
                {meta}
              </motion.div>
            )}
          </div>

          {aside && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
            >
              {aside}
            </motion.div>
          )}
        </div>

        {image && !aside && (
          <motion.div
            ref={bannerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-navy-100 shadow-lift ring-1 ring-navy-100 sm:rounded-[2rem] sm:border-8 lg:aspect-[21/8]"
          >
            <motion.img
              src={unsplash(image, 1800, 800)}
              alt={imageAlt}
              style={{ scale: imgScale, y: imgY }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-azure-600/25 via-transparent to-leaf-400/20" />
          </motion.div>
        )}
      </div>
    </header>
  )
}
