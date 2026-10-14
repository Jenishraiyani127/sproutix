import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  tone?: 'white' | 'tint'
  width?: 'wide' | 'narrow'
  className?: string
  children: ReactNode
}

/** Standard page section: consistent vertical rhythm (py-12) and container. */
export function Section({ id, tone = 'white', width = 'wide', className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-12 ${tone === 'tint' ? 'bg-navy-50/60' : ''} ${className}`}>
      <div className={`mx-auto px-5 sm:px-8 ${width === 'narrow' ? 'max-w-4xl' : 'max-w-7xl'}`}>{children}</div>
    </section>
  )
}
