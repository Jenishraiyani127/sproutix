import type { IconType } from 'react-icons'
import { Reveal } from '../ui'

interface FeatureGridProps {
  items: Array<{ icon: IconType; title: string; text: string }>
  columns?: 2 | 3 | 4
}

const cols = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
}

export function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid gap-5 ${cols[columns]}`}>
      {items.map((f, i) => (
        <Reveal key={f.title} delay={(i % columns) * 0.08} className="h-full">
          <div className="group h-full rounded-3xl border border-navy-100/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <f.icon size={22} />
            </span>
            <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-500">{f.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
