import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { LuArrowRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { ease } from '../lib/motion'

const MotionLink = motion.create(Link)

interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number
  y?: number
}

/** Fades, lifts and un-blurs content as it scrolls into view. */
export function Reveal({ delay = 0, y = 32, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-sm font-semibold">
      <span className="h-0.5 w-6 rounded-full bg-brand-gradient" />
      <span className="text-gradient">{children}</span>
    </span>
  )
}

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl leading-[1.15] font-bold text-balance sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-navy-500 sm:text-lg">{description}</p>}
    </Reveal>
  )
}

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
  arrow?: boolean
}

export function Button({ href, children, variant = 'primary', className = '', arrow = true }: ButtonProps) {
  const styles = {
    primary: 'bg-brand-gradient text-white shadow-glow hover:shadow-lift',
    secondary: 'border border-navy-100 bg-white text-navy-800 shadow-soft hover:border-azure-200 hover:text-azure-700',
    light: 'bg-white text-navy-900 shadow-soft hover:bg-azure-50',
  }[variant]

  const props = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    className: `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-shadow sm:text-[0.95rem] ${styles} ${className}`,
    children: (
      <>
        {children}
        {arrow && <LuArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
      </>
    ),
  }

  // Internal routes use the router; hash / external links stay plain anchors.
  return href.startsWith('/') ? <MotionLink to={href} {...props} /> : <motion.a href={href} {...props} />
}
