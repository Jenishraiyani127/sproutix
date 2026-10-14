import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { projects as allProjects, type Project, type WorkCategory } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

const filters: Array<'All' | WorkCategory> = ['All', 'Web', 'App', 'CMS', 'Design', 'UI/UX', 'Marketing']

interface ProjectGridProps {
  /** Show the category filter tabs. */
  filterable?: boolean
  /** Custom list (e.g. related projects); defaults to every project. */
  projects?: Project[]
  columns?: 2 | 3
}

export function ProjectGrid({ filterable = true, projects = allProjects, columns = 3 }: ProjectGridProps) {
  const [active, setActive] = useState<'All' | WorkCategory>('All')
  const visible = projects.filter((p) => active === 'All' || p.category === active)

  return (
    <div>
      {filterable && (
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                active === f ? 'text-white' : 'bg-white text-navy-600 shadow-soft hover:text-azure-700'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-brand-gradient shadow-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className={`${filterable ? 'mt-10' : ''} grid gap-6 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {visible.length === 0 && <p className="mt-10 text-center text-navy-500">No projects in this category yet.</p>}
    </div>
  )
}
