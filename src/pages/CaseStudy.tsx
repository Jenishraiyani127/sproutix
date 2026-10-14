import { LuArrowLeft, LuArrowRight, LuCheck, LuQuote } from 'react-icons/lu'
import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Button, Eyebrow, Reveal, SectionHeading } from '../components/ui'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { Section } from '../components/page/Section'
import { StatsBand } from '../components/page/StatsBand'
import { TechChips } from '../components/page/TechChips'
import { getProject, projects } from '../data/projects'
import { getService } from '../data/services'
import { avatarUrl, unsplash } from '../lib/img'
import { routes } from '../lib/routes'
import NotFound from './NotFound'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound message="We couldn't find that case study. See all of our projects instead." />

  const p = project
  const index = projects.findIndex((x) => x.slug === p.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const usedServices = p.services.map(getService).filter((s) => s !== undefined)
  const crumbs = [{ label: 'Portfolio', to: routes.portfolio }, { label: p.title }]

  const facts = [
    { label: 'Client', value: p.client },
    { label: 'Industry', value: p.industry },
    { label: 'Year', value: p.year },
    { label: 'Duration', value: p.duration },
  ]

  return (
    <>
      <Seo
        title={`${p.title} — Case Study`}
        description={p.summary}
        path={routes.project(p.slug)}
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: p.title,
            description: p.summary,
            creator: { '@type': 'Organization', name: 'Sproutix Infotech' },
            dateCreated: p.year,
          },
        ]}
      />

      <PageHero
        eyebrow={`${p.category} · Case study`}
        title={p.title}
        description={p.summary}
        breadcrumbs={crumbs}
        actions={
          <>
            <Button href={routes.contact}>Start a similar project</Button>
            <Button href={routes.portfolio} variant="secondary" arrow={false}>
              <LuArrowLeft /> All projects
            </Button>
          </>
        }
        image={p.image}
        imageAlt={`${p.title} project preview`}
      />

      {/* facts + overview */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">The project</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-500">
              {p.overview.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-3xl border border-navy-100/80 bg-navy-50/60 p-7">
              <dl className="grid grid-cols-2 gap-5">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs font-semibold tracking-wider text-navy-400 uppercase">{f.label}</dt>
                    <dd className="mt-1 font-bold text-navy-900">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 border-t border-navy-100 pt-5">
                <p className="text-xs font-semibold tracking-wider text-navy-400 uppercase">Services</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {usedServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={routes.service(s.slug)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-semibold text-navy-700 transition-colors hover:border-azure-200 hover:text-azure-700"
                      >
                        <s.icon size={13} /> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {/* challenge + solution */}
      <Section tone="tint">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            { label: 'The challenge', tone: 'from-azure-50 to-white', items: p.challenge },
            { label: 'Our solution', tone: 'from-leaf-50 to-white', items: p.solution },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <div className={`h-full rounded-3xl border border-navy-100/80 bg-gradient-to-br ${b.tone} p-8 shadow-soft`}>
                <span className="inline-block rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <h2 className="mt-4 text-2xl font-bold">{b.label}</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-navy-600">
                  {b.items.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* results */}
      <Section>
        <SectionHeading
          eyebrow="The results"
          title={
            <>
              Impact you can <span className="text-gradient">measure</span>
            </>
          }
        />
        <div className="mt-10">
          <StatsBand items={p.results} />
        </div>
        <ul className="mx-auto mt-8 grid max-w-3xl gap-3">
          {p.results.map((r) => (
            <li key={r.label} className="flex items-center gap-3 text-sm font-medium text-navy-600">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-leaf-50 text-leaf-600">
                <LuCheck size={14} />
              </span>
              {r.label}: {r.value}
              {r.suffix}
            </li>
          ))}
        </ul>
      </Section>

      {/* gallery */}
      <Section tone="tint">
        <SectionHeading eyebrow="Gallery" title={<>A closer <span className="text-gradient">look</span></>} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {p.gallery.map((g, i) => (
            <Reveal key={g + i} delay={i * 0.1} className={i === 0 ? 'md:col-span-2 md:row-span-2' : ''}>
              <div className="group h-full overflow-hidden rounded-3xl border-4 border-white bg-navy-100 shadow-soft">
                <img
                  src={unsplash(g, i === 0 ? 1200 : 700, i === 0 ? 900 : 440)}
                  alt={`${p.title} — screen ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 ${
                    i === 0 ? 'h-72 md:h-full' : 'h-52'
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold tracking-wider text-navy-400 uppercase">Technology used</p>
          <TechChips items={p.tech} />
        </div>
      </Section>

      {/* testimonial */}
      <Section width="narrow">
        <Reveal className="relative rounded-[2rem] border border-navy-100/80 bg-white p-8 text-center shadow-lift sm:p-12">
          <LuQuote size={40} className="mx-auto text-azure-100" />
          <blockquote className="mt-4 text-xl leading-relaxed font-semibold text-navy-800 sm:text-2xl">
            “{p.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3">
            <img
              src={avatarUrl(p.testimonial.avatar, 112)}
              alt={p.testimonial.name}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-azure-100"
            />
            <span className="text-left">
              <span className="block text-sm font-bold text-navy-900">{p.testimonial.name}</span>
              <span className="block text-xs text-navy-400">{p.testimonial.role}</span>
            </span>
          </figcaption>
        </Reveal>
      </Section>

      {/* prev / next */}
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { to: prev, label: 'Previous project', Icon: LuArrowLeft, align: 'items-start text-left' },
            { to: next, label: 'Next project', Icon: LuArrowRight, align: 'items-end text-right' },
          ].map(({ to, label, Icon, align }, i) => (
            <Link
              key={label}
              to={routes.project(to.slug)}
              className={`group flex flex-col gap-1 rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${align}`}
            >
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-navy-400 uppercase">
                {i === 0 && <Icon className="transition-transform group-hover:-translate-x-1" />}
                {label}
                {i === 1 && <Icon className="transition-transform group-hover:translate-x-1" />}
              </span>
              <span className="text-lg font-bold text-navy-900 transition-colors group-hover:text-azure-700">{to.title}</span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want results like these?"
        text="Let's talk about your goals. We'll share ideas, a timeline and a transparent quote within one business day."
        secondary={{ label: 'More case studies', href: routes.portfolio }}
      />
    </>
  )
}
