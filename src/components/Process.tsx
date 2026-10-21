import type { IconType } from 'react-icons'
import { processSteps } from '../data/content'
import { Reveal, SectionHeading } from './ui'

interface ProcessProps {
  id?: string
  eyebrow?: string
  title?: React.ReactNode
  description?: string
  steps?: Array<{ title: string; text: string; icon?: IconType }>
}

/** Numbered process timeline. Defaults to Spherotix's four-step approach. */
export function Process({
  id = 'process',
  eyebrow = 'Our process',
  title = (
    <>
      From first idea to <span className="text-gradient">full launch</span> in four steps
    </>
  ),
  description = 'A simple, transparent workflow that keeps you in the loop and projects on schedule.',
  steps = processSteps,
}: ProcessProps) {
  return (
    <section id={id} className="py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-azure-300 via-teal-300 to-leaf-300 lg:block" />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} delay={i * 0.12} className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-white shadow-glow">
                  {Icon ? <Icon size={28} /> : i + 1}
                  <span className="absolute -top-2.5 -right-2.5 grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-navy-900 font-display text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[17rem] text-[0.95rem] leading-relaxed text-navy-500">{step.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
