import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { ease } from '../../lib/motion'
import { Reveal } from '../ui'

export interface AccordionItem {
  q: string
  a: string
}

/** Single-open accordion used for every FAQ list. */
export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <Reveal key={f.q} delay={i * 0.06} y={20}>
            <div
              className={`overflow-hidden rounded-lg border transition-all duration-300 ${
                isOpen
                  ? 'border-azure-200 bg-white shadow-lift'
                  : 'border-navy-100 bg-navy-50/60 hover:border-azure-200 hover:bg-white'
              }`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left text-[0.95rem] font-medium text-navy-600 sm:py-[1.1rem]"
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="shrink-0 text-azure-600"
                  >
                    <LuPlus size={20} strokeWidth={2.5} />
                  </motion.span>
                  <span className={isOpen ? 'text-gradient font-semibold' : ''}>{f.q}</span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-navy-500">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
