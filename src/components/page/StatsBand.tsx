import type { Metric } from '../../data/services'
import { Counter } from '../Counter'
import { Reveal } from '../ui'

export function StatsBand({ items }: { items: Metric[] }) {
  const cols = items.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
  const odd = items.length % 2 === 1
  return (
    <Reveal
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy-100/80 bg-navy-100/80 shadow-soft ${cols}`}
    >
      {items.map((s, i) => (
        <div
          key={s.label}
          className={`bg-white px-6 py-8 text-center ${odd && i === items.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
        >
          <p className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
          </p>
          <p className="mt-2 text-sm font-medium text-navy-500">{s.label}</p>
        </div>
      ))}
    </Reveal>
  )
}
