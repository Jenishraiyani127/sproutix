import { LuArrowUpRight, LuClock } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import type { Post } from '../../data/posts'
import { formatDate } from '../../lib/format'
import { avatarUrl, unsplash } from '../../lib/img'
import { routes } from '../../lib/routes'

interface PostCardProps {
  post: Post
  variant?: 'default' | 'featured'
}

export function PostCard({ post: p, variant = 'default' }: PostCardProps) {
  const featured = variant === 'featured'
  return (
    <Link
      to={routes.post(p.slug)}
      className={`group overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift ${
        featured ? 'grid lg:grid-cols-2' : 'flex flex-col'
      }`}
    >
      <div className={`relative overflow-hidden bg-navy-100 ${featured ? 'min-h-[16rem] lg:min-h-[22rem]' : 'h-52'}`}>
        <img
          src={unsplash(p.cover, featured ? 1200 : 800, featured ? 800 : 520)}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur">
          {p.category}
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${featured ? 'justify-center p-8 lg:p-10' : 'p-6'}`}>
        <div className="flex items-center gap-3 text-xs font-medium text-navy-400">
          <span>{formatDate(p.date)}</span>
          <span className="h-1 w-1 rounded-full bg-navy-200" />
          <span className="inline-flex items-center gap-1">
            <LuClock size={12} /> {p.readTime}
          </span>
        </div>
        <h3 className={`mt-3 font-bold transition-colors group-hover:text-azure-700 ${featured ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
          {p.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-navy-500">{p.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-navy-100/80 pt-4">
          <span className="flex items-center gap-2.5">
            <img src={avatarUrl(p.author.avatar)} alt="" loading="lazy" className="h-8 w-8 rounded-full object-cover" />
            <span className="text-sm font-semibold text-navy-700">{p.author.name}</span>
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-azure-50 text-azure-600 transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand-gradient group-hover:text-white">
            <LuArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  )
}
