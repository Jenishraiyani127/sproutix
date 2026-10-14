import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { company } from '../data/content'
import { ContactForm } from './ContactForm'
import { Reveal } from './ui'

/** Home-page contact band. The full page lives at /contact. */
export function Contact() {
  return (
    <section id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-6 shadow-lift sm:p-12 lg:p-16">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-azure-600/40 blur-3xl" />
          <div className="absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-leaf-500/25 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-teal-200 uppercase">
                Let's talk
              </span>
              <h2 className="mt-5 text-3xl leading-tight font-bold !text-white sm:text-4xl lg:text-5xl">
                Ready to grow your brand online?
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-navy-200">
                Tell us about your project. We'll get back within one business day with ideas, a timeline and a
                transparent quote.
              </p>

              <ul className="mt-10 space-y-5 text-sm">
                {[
                  { icon: LuMail, text: company.email, href: `mailto:${company.email}` },
                  { icon: LuPhone, text: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
                  { icon: LuMapPin, text: company.address },
                ].map(({ icon: Icon, text, href }) => (
                  <li key={text}>
                    {href ? (
                      <a href={href} className="group flex items-center gap-4 text-white/90 transition-colors hover:text-white">
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-teal-200 transition-colors group-hover:bg-white/20">
                          <Icon size={18} />
                        </span>
                        {text}
                      </a>
                    ) : (
                      <span className="flex items-center gap-4 text-white/90">
                        <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-teal-200">
                          <Icon size={18} />
                        </span>
                        {text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
