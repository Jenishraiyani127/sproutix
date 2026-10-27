import type { Project } from '../../data/projects'
import { unsplash } from '../../lib/img'

interface ProjectCoverProps {
  project: Project
  className?: string
  /** Show the project title on placeholder covers. */
  showTitle?: boolean
  eager?: boolean
}

const sizes = '(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw'

/** Poster image if one exists, then an Unsplash photo, then a branded gradient placeholder. */
export function ProjectCover({ project: p, className = '', showTitle = false, eager }: ProjectCoverProps) {
  const loading = eager ? 'eager' : 'lazy'
  const Icon = p.icon

  if (p.cover) {
    return (
      <img
        src={p.cover}
        alt={`${p.title} — ${p.summary}`}
        width={1672}
        height={941}
        sizes={sizes}
        loading={loading}
        decoding="async"
        className={`h-full w-full object-cover object-top ${className}`}
      />
    )
  }

  if (p.photo) {
    return (
      <div className={`relative h-full w-full overflow-hidden bg-navy-100 ${className}`}>
        <img
          src={unsplash(p.photo, 800, 500)}
          srcSet={`${unsplash(p.photo, 480, 300)} 480w, ${unsplash(p.photo, 800, 500)} 800w, ${unsplash(p.photo, 1200, 750)} 1200w`}
          sizes={sizes}
          alt={`${p.title} — ${p.industry} project`}
          width={800}
          height={500}
          loading={loading}
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 opacity-60 mix-blend-multiply"
          style={{ backgroundImage: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/20 text-white shadow-lift backdrop-blur-md sm:h-12 sm:w-12">
            <Icon size={22} />
          </span>
          {showTitle && <span className="font-display text-sm font-extrabold text-white drop-shadow sm:text-lg">{p.title}</span>}
        </div>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${p.title} project`}
      className={`relative grid h-full w-full place-items-center overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${p.accent[0]}, ${p.accent[1]})` }}
    >
      <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-white/10" />
      <div className="absolute -right-10 -bottom-16 h-56 w-56 rounded-full bg-white/10" />
      <div className="relative flex flex-col items-center gap-3 text-white">
        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-white/20 shadow-lift backdrop-blur-md">
          <Icon size={38} />
        </span>
        {showTitle && <span className="px-6 text-center font-display text-xl font-extrabold">{p.title}</span>}
      </div>
    </div>
  )
}
