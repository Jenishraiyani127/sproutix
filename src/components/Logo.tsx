import { Link } from 'react-router-dom'

/** The Spherotix globe mark (transparent PNG cropped from the brand logo sheet). */
export function LogoMark({ className = 'h-10' }: { className?: string }) {
  return <img src="/logo-mark.png" alt="" aria-hidden="true" draggable={false} className={`w-auto select-none ${className}`} />
}

/** Full lockup: mark + SPHEROTIX wordmark + "Technology without limits". */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center ${className}`} aria-label="Spherotix — Technology without limits, home">
      <img
        src="/logo-full.png"
        alt="Spherotix — Technology without limits"
        width={1200}
        height={286}
        draggable={false}
        className="h-12 w-auto select-none transition-transform duration-500 group-hover:scale-[1.03] sm:h-14"
      />
    </Link>
  )
}
