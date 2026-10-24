import { motion } from 'framer-motion'
import { LuArrowUpRight, LuCheck } from 'react-icons/lu'
import { Link, useParams } from 'react-router-dom'
import { Process } from '../components/Process'
import { Seo } from '../components/Seo'
import { ServiceIllustration } from '../components/ServiceArt'
import { Button, Eyebrow, Reveal, SectionHeading } from '../components/ui'
import { Accordion } from '../components/page/Accordion'
import { CtaBand } from '../components/page/CtaBand'
import { FeatureGrid } from '../components/page/FeatureGrid'
import { PageHero } from '../components/page/PageHero'
import { ProjectGrid } from '../components/page/ProjectGrid'
import { Section } from '../components/page/Section'
import { StatsBand } from '../components/page/StatsBand'
import { TechChips } from '../components/page/TechChips'
import { projects } from '../data/projects'
import { getService, services } from '../data/services'
import { unsplash } from '../lib/img'
import { ease } from '../lib/motion'
import { routes } from '../lib/routes'
import { tintColors } from '../lib/tints'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)
  if (!service) return <NotFound message="We couldn't find that service. Browse everything we offer below." />

  const s = service
  const related = projects.filter((p) => p.services.includes(s.slug))
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 3)
  const crumbs = [{ label: 'Services', to: routes.services }, { label: s.title }]
  const quote = `${routes.contact}?service=${s.slug}`

  return (
    <>
      <Seo
        title={`${s.title} Services`}
        description={`${s.tagline} ${s.intro[0]}`.slice(0, 158)}
        keywords={[s.title, ...s.tools.slice(0, 6), `${s.title} company`, `${s.title} services`, "Spherotix"]}
        path={routes.service(s.slug)}
        image={`/logo.png`}
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.title,
            description: s.tagline,
            provider: { '@type': 'Organization', name: 'Spherotix', url: 'https://www.spherotix.com' },
            areaServed: 'Worldwide',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: s.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <PageHero
        eyebrow={s.title}
        title={s.tagline}
        description={s.intro[0]}
        breadcrumbs={crumbs}
        actions={
          <>
            <Button href={quote}>Get a free quote</Button>
            <Button href={routes.portfolio} variant="secondary">
              See related work
            </Button>
          </>
        }
        meta={
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {s.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-semibold text-navy-700">
                <LuCheck className="text-leaf-500" /> {h}
              </li>
            ))}
          </ul>
        }
        aside={
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-azure-100 via-teal-100 to-leaf-100 opacity-70 blur-2xl" />
            <div
              className="relative h-80 overflow-hidden rounded-[2rem] border-8 border-white shadow-lift sm:h-96"
              style={{ backgroundImage: tintColors[s.tint].bg }}
            >
              <ServiceIllustration art={s.art} tint={s.tint} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7, ease }}
              className="absolute -right-3 -bottom-5 sm:-right-6"
            >
              <div className="animate-float flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-lift">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient text-white">
                  <s.icon size={20} />
                </span>
                <div>
                  <p className="font-display text-lg font-extrabold text-gradient">
                    {s.metrics[0].value}
                    {s.metrics[0].suffix}
                  </p>
                  <p className="text-[11px] text-navy-400">{s.metrics[0].label}</p>
                </div>
              </div>
            </motion.div>
          </div>
        }
      />

      {/* overview */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight font-bold text-balance sm:text-4xl">
              What our {s.title.toLowerCase()} service <span className="text-gradient">delivers</span>
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-500">
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {s.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 font-semibold text-navy-700">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                    <LuCheck size={14} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-lift ring-1 ring-navy-100">
              <img
                src={unsplash(s.image, 1000, 760)}
                alt={`${s.title} at Spherotix`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <StatsBand items={s.metrics} />
      </Section>

      <Section tone="tint">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Key features of our <span className="text-gradient">{s.title.toLowerCase()}</span>
            </>
          }
          description="Everything is built around speed, quality and long-term maintainability."
        />
        <div className="mt-12">
          <FeatureGrid items={s.features} />
        </div>
      </Section>

      {/* included + tools */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Deliverables you can count on</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-navy-100/80 bg-white p-4 text-sm font-medium text-navy-700 shadow-soft"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                    <LuCheck size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-navy-100/80 bg-navy-50/60 p-7">
              <Eyebrow>Tools & technology</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold">What we work with</h2>
              <div className="mt-6">
                <TechChips items={s.tools} />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Process
        id="service-process"
        eyebrow="How we deliver"
        title={
          <>
            Our {s.title.toLowerCase()} <span className="text-gradient">process</span>
          </>
        }
        description="A clear, collaborative workflow from first call to final delivery."
        steps={s.steps}
      />

      {related.length > 0 && (
        <Section tone="tint">
          <SectionHeading
            eyebrow="Related work"
            title={
              <>
                {s.title} in <span className="text-gradient">action</span>
              </>
            }
          />
          <div className={`mt-10 ${related.length === 1 ? "mx-auto max-w-md" : ""}`}>
            <ProjectGrid projects={related} filterable={false} columns={related.length === 2 ? 2 : 3} />
          </div>
        </Section>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
              {s.title} <span className="text-gradient">questions</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-500">
              Can't find what you're looking for? Our team is happy to talk it through.
            </p>
            <Button href={quote} className="mt-6">
              Ask us anything
            </Button>
          </Reveal>
          <Accordion items={s.faqs} />
        </div>
      </Section>

      {/* other services */}
      <Section tone="tint">
        <SectionHeading eyebrow="Explore more" title={<>Other services you may <span className="text-gradient">need</span></>} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.08}>
              <Link
                to={routes.service(o.slug)}
                className="group flex h-full items-start gap-4 rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <o.icon size={22} />
                </span>
                <span className="flex-1">
                  <span className="flex items-center justify-between gap-2 text-lg font-bold text-navy-900">
                    {o.title}
                    <LuArrowUpRight className="text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-azure-600" />
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-navy-500">{o.description}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Ready to start your ${s.title.toLowerCase()} project?`}
        text="Share your goals and we will respond within one business day with ideas, a timeline and a transparent quote."
        primary={{ label: 'Get a free quote', href: quote }}
        secondary={{ label: 'All services', href: routes.services }}
      />
    </>
  )
}
