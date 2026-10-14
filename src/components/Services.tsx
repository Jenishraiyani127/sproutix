import { LuArrowUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { routes } from '../lib/routes'
import { ServiceCard } from './page/ServiceCard'
import { Reveal } from './ui'

/** Home-page services overview. Full details live at /services. */
export function Services() {
  return (
    <section id="services" className="relative py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex items-center justify-between border-b border-navy-100 pb-3">
          <span className="text-xs font-medium tracking-[0.3em] text-navy-600 uppercase">Our Services</span>
          <Link to={routes.services} className="group inline-flex items-center gap-1 text-sm font-semibold text-azure-600">
            View all
            <LuArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="mt-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl lg:text-[2.6rem]">
              What can you <span className="text-gradient">build</span> with Sproutix?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-md text-base leading-relaxed text-navy-600">
            We offer end-to-end digital solutions designed to help your business stand out online and scale with
            confidence.
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.1}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
