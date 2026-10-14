import { Link } from 'react-router-dom'

/** The Sproutix leaf-S mark (cropped from the brand logo, transparent background). */
export function LogoMark({ className = 'h-10' }: { className?: string }) {
  return <img src="/logo-mark.png" alt="" aria-hidden="true" draggable={false} className={`w-auto select-none ${className}`} />
}

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Sproutix Infotech home">
      <LogoMark className="h-10 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.45rem] font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}
        >
          SPROUTIX
        </span>
        <span className="mt-1 flex items-center gap-1.5">
          <span className="h-px w-3 bg-leaf-500" />
          <span className="font-display text-[0.58rem] font-semibold tracking-[0.42em] text-teal-500">INFOTECH</span>
          <span className="h-px w-3 bg-teal-500" />
        </span>
      </span>
    </Link>
  )
}
