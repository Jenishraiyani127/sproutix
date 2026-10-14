import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo'
import { Seo } from '../components/Seo'
import { Button } from '../components/ui'
import { Section } from '../components/page/Section'
import { services } from '../data/services'
import { ease } from '../lib/motion'
import { routes } from '../lib/routes'

interface NotFoundProps {
  /** Shown instead of the generic message, e.g. "We couldn't find that service." */
  message?: string
}

export default function NotFound({ message = "The page you're looking for has moved, been renamed or never existed." }: NotFoundProps) {
  return (
    <>
      <Seo title="Page not found" description="The page you requested could not be found." path="/404" noindex />
      <Section className="pt-32 sm:pt-40">
        <div className="relative mx-auto max-w-2xl text-center">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-azure-200/60 via-teal-100/60 to-leaf-200/60 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease }}
            className="animate-float mx-auto w-fit"
          >
            <LogoMark className="h-28" />
          </motion.div>
          <p className="mt-6 font-display text-7xl font-extrabold text-gradient sm:text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Oops — this page didn't sprout</h1>
          <p className="mt-4 text-base leading-relaxed text-navy-500">{message}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={routes.home}>Back to home</Button>
            <Button href={routes.contact} variant="secondary">
              Contact us
            </Button>
          </div>

          <div className="mt-12 border-t border-navy-100 pt-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-navy-400 uppercase">Popular pages</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {[
                { label: 'About', to: routes.about },
                { label: 'Portfolio', to: routes.portfolio },
                { label: 'Blog', to: routes.blog },
                ...services.slice(0, 3).map((s) => ({ label: s.title, to: routes.service(s.slug) })),
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-medium text-navy-600 shadow-soft transition-colors hover:border-azure-200 hover:text-azure-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
