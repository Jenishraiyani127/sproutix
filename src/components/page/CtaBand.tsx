import type { ReactNode } from 'react'
import { Button, Reveal } from '../ui'
import { Section } from './Section'

interface CtaBandProps {
  title: ReactNode
  text: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}

/** Closing call-to-action used at the bottom of inner pages. */
export function CtaBand({
  title,
  text,
  primary = { label: 'Start your project', href: '/contact' },
  secondary,
}: CtaBandProps) {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-12 text-center shadow-lift sm:px-12 lg:py-16">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-azure-600/40 blur-3xl" />
        <div className="absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-leaf-500/25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl leading-tight font-bold !text-white text-balance sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-200">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant="light">
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                variant="secondary"
                className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/20"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
