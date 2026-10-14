import { motion } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import type { ServiceDetail } from '../../data/services'
import { photos, unsplash } from '../../lib/img'
import { routes } from '../../lib/routes'
import { tintColors } from '../../lib/tints'
import { ServiceIllustration } from '../ServiceArt'

const MotionLink = motion.create(Link)

/** Illustrated service card (first/featured card is dark). */
export function ServiceCard({ service: s }: { service: ServiceDetail }) {
  return (
    <MotionLink
      to={routes.service(s.slug)}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] ring-1 transition-shadow duration-300 hover:shadow-lift ${
        s.featured ? 'bg-navy-950 ring-navy-900' : 'bg-white ring-navy-100'
      }`}
    >
      <div
        className="relative h-64 overflow-hidden sm:h-72"
        style={s.featured ? undefined : { backgroundImage: tintColors[s.tint].bg }}
      >
        {s.featured && (
          <>
            <img
              src={unsplash(photos.codeLaptop, 900, 700)}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgb(15_159_174/0.35),transparent_65%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-transparent to-navy-950" />
          </>
        )}
        <ServiceIllustration art={s.art} tint={s.tint} />
        <span className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-800 opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <LuArrowUpRight size={18} />
        </span>
      </div>

      <div className="flex flex-1 flex-col items-center px-7 py-7 text-center">
        <h3 className={`text-xl font-extrabold ${s.featured ? '!text-white' : ''}`}>{s.title}</h3>
        <p className={`mt-2 max-w-[17rem] text-[0.95rem] leading-relaxed ${s.featured ? 'text-navy-100' : 'text-navy-600'}`}>
          {s.description}
        </p>
      </div>
    </MotionLink>
  )
}
