import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { company } from '../data/content'
import { services } from '../data/services'
import { routes } from '../lib/routes'
import { Logo } from './Logo'

const socials = [
  { icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaFacebookF, label: 'Facebook', href: '#' },
  { icon: FaBehance, label: 'Behance', href: '#' },
]

const companyLinks = [
  { label: 'About us', to: routes.about },
  { label: 'Portfolio', to: routes.portfolio },
  { label: 'Blog', to: routes.blog },
  { label: 'Careers', to: routes.careers },
  { label: 'Contact', to: routes.contact },
]

const year = new Date().getFullYear()
const linkClass = 'transition-colors hover:text-azure-600'

export function Footer() {
  return (
    <footer className="border-t border-navy-100/80 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-500">
              Web &amp; app development, CMS, graphic design, UI/UX and marketing — ideas that sprout into real digital
              growth.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 text-navy-500 transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-brand-gradient hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold">Company</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-500">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-500">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={routes.service(s.slug)} className={linkClass}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-navy-500">
              <li>
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className={linkClass}>
                  {company.phone}
                </a>
              </li>
              <li>{company.address}</li>
              <li>{company.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy-100/80 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link to={routes.privacy} className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={routes.terms} className={linkClass}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
