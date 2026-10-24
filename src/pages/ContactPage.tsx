import { LuClock, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { useSearchParams } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { Seo } from '../components/Seo'
import { Eyebrow, Reveal, SectionHeading } from '../components/ui'
import { Accordion } from '../components/page/Accordion'
import { PageHero } from '../components/page/PageHero'
import { Section } from '../components/page/Section'
import { company, faqs } from '../data/content'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'Contact' }]

/** Service slug (?service=…) → option shown in the form. */
const interestBySlug: Record<string, string> = {
  'web-development': 'Website / Web App',
  'mobile-app-development': 'Mobile App',
  'cms-development': 'CMS',
  'graphic-design': 'Graphic Design',
  'ui-ux-design': 'UI / UX',
  'digital-marketing': 'Digital Marketing',
}

const steps = [
  { title: 'We review your message', text: 'A senior team member reads every enquiry — no auto-responders.' },
  { title: 'Discovery call', text: 'Within one business day we schedule a free 30-minute call to understand your goals.' },
  { title: 'Proposal & quote', text: 'You receive a clear scope, timeline and transparent pricing within a few days.' },
]

export default function ContactPage() {
  const [params] = useSearchParams()
  const defaultService = interestBySlug[params.get('service') ?? '']

  const cards = [
    { icon: LuMail, label: 'Email us', value: company.email, href: `mailto:${company.email}` },
    { icon: LuPhone, label: 'Call us', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
    {
      icon: LuMapPin,
      label: 'Visit our office',
      value: company.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
    },
    { icon: LuClock, label: 'Working hours', value: company.hours },
  ]

  return (
    <>
      <Seo
        title="Contact Us — Start Your Project"
        description="Get in touch with Spherotix. Tell us about your website, app, design or marketing project and receive a free consultation and quote within one business day."
        keywords={["contact Spherotix","get a quote web development","hire app developers","free consultation software development"]}
        path={routes.contact}
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Spherotix',
            mainEntity: { '@type': 'Organization', name: 'Spherotix', email: company.email, telephone: company.phone },
          },
        ]}
      />

      <PageHero
        eyebrow="Contact"
        align="center"
        title={
          <>
            Let's build something <span className="text-gradient">great together</span>
          </>
        }
        description="Tell us about your project. We'll reply within one business day with ideas, a timeline and a transparent quote."
        breadcrumbs={crumbs}
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Inner = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <c.icon size={22} />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-wider text-navy-400 uppercase">{c.label}</p>
                <p className="mt-1 text-sm font-bold break-words text-navy-900">{c.value}</p>
              </>
            )
            return (
              <Reveal key={c.label} delay={i * 0.07}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="group block h-full rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div className="group h-full rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft">{Inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Send an enquiry</Eyebrow>
            <h2 className="mt-4 mb-6 text-3xl font-bold sm:text-4xl">Tell us about your project</h2>
            <ContactForm key={defaultService} defaultService={defaultService} />
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A simple, friendly start</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-gradient font-display text-sm font-bold text-white shadow-glow">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 overflow-hidden rounded-3xl border border-navy-100/80 bg-white shadow-soft">
              <div className="relative grid h-40 place-items-center bg-gradient-to-br from-azure-100 via-teal-100 to-leaf-100">
                <div className="bg-grid absolute inset-0 [mask-image:none] opacity-60" />
                <span className="relative grid h-14 w-14 animate-float place-items-center rounded-full bg-white text-azure-600 shadow-lift">
                  <LuMapPin size={26} />
                </span>
              </div>
              <div className="p-5">
                <p className="font-bold">Spherotix</p>
                <p className="mt-1 text-sm text-navy-500">{company.address}</p>
                <p className="mt-1 text-sm text-navy-500">{company.hours}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section width="narrow">
        <SectionHeading
          eyebrow="Before you write"
          title={
            <>
              Quick <span className="text-gradient">answers</span>
            </>
          }
        />
        <div className="mt-10">
          <Accordion items={faqs} defaultOpen={null} />
        </div>
      </Section>
    </>
  )
}
