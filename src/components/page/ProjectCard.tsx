import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { unsplash } from '../../lib/img'
import { routes } from '../../lib/routes'

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link
      to={routes.project(p.slug)}
      className="group block overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <article>
        <div className="relative h-56 overflow-hidden bg-navy-100">
          <img
            src={unsplash(p.image, 900, 560)}
            alt={`${p.title} — ${p.client}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/5 to-azure-600/10 transition-opacity duration-500 group-hover:opacity-80" />
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur">
            {p.category}
          </span>
          <span className="absolute right-4 bottom-4 left-4 text-sm font-semibold text-white drop-shadow">{p.result}</span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-0.5 text-sm text-navy-400">
                {p.industry} · {p.year}
              </p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-azure-50 text-azure-600 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-gradient group-hover:text-white">
              <LuArrowUpRight size={18} />
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-medium text-navy-500">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
