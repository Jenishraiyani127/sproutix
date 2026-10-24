import type { Project } from '../../data/projects'

interface ProjectCoverProps {
  project: Project
  className?: string
  /** Show the project title on placeholder covers. */
  showTitle?: boolean
  eager?: boolean
}

/** Project poster if one exists, otherwise a branded gradient placeholder. */
export function ProjectCover({ project: p, className = '', showTitle = false, eager }: ProjectCoverProps) {
  if (p.cover) {
    return (
      <img
        src={p.cover}
        alt={`${p.title} — ${p.summary}`}
        width={1672}
        height={941}
        loading={eager ? 'eager' : 'lazy'}
        className={`h-full w-full object-cover object-top ${className}`}
      />
    )
  }
  const Icon = p.icon
  return (
    <div
      role="img"
      aria-label={`${p.title} project`}
      className={`relative grid h-full w-full place-items-center overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})` }}
    >
      <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-white/10" />
      <div className="absolute -right-10 -bottom-16 h-56 w-56 rounded-full bg-white/10" />
      <div className="bg-grid absolute inset-0 opacity-30 [mask-image:none]" />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-white/20 shadow-lift backdrop-blur-md">
          <Icon size={38} />
        </span>
        {showTitle && <span className="px-6 text-center font-display text-xl font-extrabold">{p.title}</span>}
      </div>
    </div>
  )
}
