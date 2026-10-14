import { LuQuote, LuStar } from 'react-icons/lu'
import { testimonials } from '../data/content'
import { unsplash } from '../lib/img'
import { Reveal, SectionHeading } from './ui'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client love"
          title={
            <>
              Trusted by brands that <span className="text-gradient">care about growth</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-navy-100/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <LuQuote size={36} className="text-azure-100" />
                <div className="mt-4 flex gap-0.5 text-[#f5b301]">
                  {Array.from({ length: 5 }).map((_, n) => (
                    <LuStar key={n} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-navy-600">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-100/80 pt-5">
                  <img
                    src={unsplash(t.avatar, 112, 112)}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-azure-100"
                  />
                  <span>
                    <span className="block text-sm font-bold text-navy-900">{t.name}</span>
                    <span className="block text-xs text-navy-400">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
