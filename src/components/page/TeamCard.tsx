import type { TeamMember } from '../../data/company'
import { unsplash } from '../../lib/img'

export function TeamCard({ member: m }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/4.4] overflow-hidden bg-navy-100">
        <img
          src={unsplash(m.avatar, 600, 660)}
          alt={`${m.name}, ${m.role}`}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-azure-600/10" />
        <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-gradient transition-transform duration-500 group-hover:scale-x-100" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold">{m.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-gradient">{m.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-navy-500">{m.bio}</p>
      </div>
    </article>
  )
}
