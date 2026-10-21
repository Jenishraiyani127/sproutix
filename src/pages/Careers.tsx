import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { LuBriefcase, LuClock, LuMapPin, LuPlus } from 'react-icons/lu'
import { Seo } from '../components/Seo'
import { Button, Reveal, SectionHeading } from '../components/ui'
import { CtaBand } from '../components/page/CtaBand'
import { FeatureGrid } from '../components/page/FeatureGrid'
import { PageHero } from '../components/page/PageHero'
import { Section } from '../components/page/Section'
import { openings, perks, type Opening } from '../data/company'
import { company } from '../data/content'
import { photos } from '../lib/img'
import { ease } from '../lib/motion'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'Careers' }]

function OpeningCard({ job, defaultOpen }: { job: Opening; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen)
  const apply = `mailto:${company.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`

  return (
    <div
      className={`overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
        open ? 'border-azure-200 shadow-lift' : 'border-navy-100/80 shadow-soft hover:border-azure-200'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span>
          <span className="block text-lg font-bold text-navy-900">{job.title}</span>
          <span className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-medium text-navy-500">
            <span className="inline-flex items-center gap-1.5">
              <LuBriefcase size={13} /> {job.team}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LuMapPin size={13} /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LuClock size={13} /> {job.type} · {job.experience}
            </span>
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ duration: 0.35, ease }}
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${open ? 'bg-brand-gradient text-white' : 'bg-azure-50 text-azure-600'}`}
        >
          <LuPlus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="border-t border-navy-100/80 px-6 pt-5 pb-6">
              <p className="leading-relaxed text-navy-600">{job.summary}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold">Responsibilities</h3>
                  <ul className="mt-3 space-y-2 text-sm text-navy-500">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold">Requirements</h3>
                  <ul className="mt-3 space-y-2 text-sm text-navy-500">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button href={apply} className="mt-6">
                Apply for this role
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers — Join the Spherotix Team"
        description="Join Spherotix. We're hiring developers, designers and marketers who care about craft, honesty and helping clients grow."
        path={routes.careers}
        breadcrumbs={crumbs}
        jsonLd={openings.map((o) => ({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: o.title,
          description: o.summary,
          employmentType: o.type.includes('Intern') ? 'INTERN' : 'FULL_TIME',
          hiringOrganization: { '@type': 'Organization', name: 'Spherotix', sameAs: 'https://www.spherotix.com' },
          jobLocationType: o.location.includes('Remote') ? 'TELECOMMUTE' : undefined,
        }))}
      />

      <PageHero
        eyebrow="Careers"
        title={
          <>
            Grow your career with a team that <span className="text-gradient">grows ideas</span>
          </>
        }
        description="We're a friendly, ambitious team building websites, apps and brands for clients around the world. If you love craft, curiosity and real ownership, you'll feel at home."
        breadcrumbs={crumbs}
        actions={
          <>
            <Button href="#openings">See open roles</Button>
            <Button href={routes.about} variant="secondary">
              Meet the team
            </Button>
          </>
        }
        image={photos.laughing}
        imageAlt="Spherotix team members laughing together"
      />

      <Section>
        <SectionHeading
          eyebrow="Why Spherotix"
          title={
            <>
              Perks that make <span className="text-gradient">work better</span>
            </>
          }
        />
        <div className="mt-12">
          <FeatureGrid items={perks} />
        </div>
      </Section>

      <Section id="openings" tone="tint">
        <SectionHeading
          eyebrow="Open positions"
          title={
            <>
              Find your <span className="text-gradient">next role</span>
            </>
          }
          description={`${openings.length} open roles right now. Click a role to see the details.`}
        />
        <div className="mx-auto mt-10 max-w-4xl space-y-4">
          {openings.map((job, i) => (
            <Reveal key={job.slug} delay={i * 0.05}>
              <OpeningCard job={job} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-4xl rounded-3xl border border-dashed border-azure-200 bg-white p-8 text-center">
          <h3 className="text-xl font-bold">Don't see the right role?</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-navy-500">
            We're always happy to meet talented people. Send your portfolio or CV and tell us how you'd like to contribute.
          </p>
          <Button
            href={`mailto:${company.email}?subject=${encodeURIComponent('Open application')}`}
            variant="secondary"
            className="mt-5"
          >
            Send an open application
          </Button>
        </Reveal>
      </Section>

      <CtaBand
        title="Not hiring? Hire us."
        text="If you're here as a client, we'd love to hear about your project instead."
        primary={{ label: 'Start a project', href: routes.contact }}
        secondary={{ label: 'View portfolio', href: routes.portfolio }}
      />
    </>
  )
}
