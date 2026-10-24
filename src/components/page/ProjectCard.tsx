import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { routes } from '../../lib/routes'
import { ProjectCover } from './ProjectCover'

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link
      to={routes.project(p.slug)}
      className="group block h-full overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-100">
          <div className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-105">
            <ProjectCover project={p} />
          </div>
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur">
            {p.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-0.5 text-sm text-navy-400">{p.industry}</p>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-azure-50 text-azure-600 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-gradient group-hover:text-white">
              <LuArrowUpRight size={18} />
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-500">{p.result}</p>
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
