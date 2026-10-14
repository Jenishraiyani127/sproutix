import { LuChevronRight, LuHouse } from 'react-icons/lu'
import { Link } from 'react-router-dom'

export interface Crumb {
  label: string
  to?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-medium text-navy-500 shadow-soft backdrop-blur">
        <li>
          <Link to="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-azure-600">
            <LuHouse size={13} /> Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={c.label} className="inline-flex items-center gap-1.5">
            <LuChevronRight size={13} className="text-navy-300" />
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="transition-colors hover:text-azure-600">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="max-w-[16rem] truncate font-semibold text-navy-800">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
