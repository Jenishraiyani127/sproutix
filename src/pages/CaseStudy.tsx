import { LuArrowLeft, LuArrowRight, LuCheck, LuCircleAlert } from 'react-icons/lu'
import { Link, useParams } from 'react-router-dom'
import { Process } from '../components/Process'
import { Seo } from '../components/Seo'
import { Button, Eyebrow, Reveal, SectionHeading } from '../components/ui'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { ProjectCover } from '../components/page/ProjectCover'
import { Section } from '../components/page/Section'
import { TechChips } from '../components/page/TechChips'
import { SITE_URL } from '../data/site'
import { getProject, projects } from '../data/projects'
import { getService } from '../data/services'
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
  const url = `${SITE_URL}${routes.project(p.slug)}`

  return (
    <>
      <Seo
        title={p.seo.title}
        description={p.seo.description}
        keywords={p.seo.keywords}
        path={routes.project(p.slug)}
        image={p.ogImage}
        type="article"
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: p.title,
            headline: p.seo.title,
            description: p.seo.description,
            url,
            keywords: p.seo.keywords.join(', '),
            genre: p.industry,
            image: p.ogImage ? `${SITE_URL}${p.ogImage}` : undefined,
            creator: { '@type': 'Organization', name: 'Spherotix', url: SITE_URL },
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
            <Button href={`${routes.contact}?service=${p.services[0]}`}>Start a similar project</Button>
            <Button href={routes.portfolio} variant="secondary" arrow={false}>
              <LuArrowLeft /> All projects
            </Button>
          </>
        }
        meta={
          <ul className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className="rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-semibold text-navy-600 shadow-soft">
                {t}
              </li>
            ))}
          </ul>
        }
        aside={
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-azure-100 via-teal-100 to-leaf-100 opacity-70 blur-2xl" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-navy-100 shadow-lift ring-1 ring-navy-100 sm:rounded-[2rem] sm:border-8">
              <ProjectCover project={p} eager showTitle />
            </div>
          </div>
        }
      />

      {/* overview + facts */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-balance sm:text-4xl">What we built</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-500">
              {p.overview.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="rounded-3xl border border-navy-100/80 bg-navy-50/60 p-7">
              <dl className="space-y-5">
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-navy-400 uppercase">Industry</dt>
                  <dd className="mt-1 font-bold text-navy-900">{p.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wider text-navy-400 uppercase">Platform</dt>
                  <dd className="mt-1 font-bold text-navy-900">{p.platform}</dd>
                </div>
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

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {p.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-navy-100/80 bg-white p-6 shadow-soft">
                <p className="text-xs font-bold tracking-wider text-gradient uppercase">{f.label}</p>
                <p className="mt-2 text-sm leading-relaxed font-medium text-navy-700">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* challenges + solution */}
      <Section tone="tint">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-navy-100/80 bg-white p-8 shadow-soft">
              <Eyebrow>The problem</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Challenges we set out to solve</h2>
              <ul className="mt-6 space-y-3">
                {p.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-navy-600">
                    <LuCircleAlert className="mt-0.5 shrink-0 text-azure-500" size={18} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-navy-100/80 bg-gradient-to-br from-azure-50 via-white to-leaf-50 p-8 shadow-soft">
              <Eyebrow>The solution</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">How the platform solves it</h2>
              <ol className="mt-6 space-y-5">
                {p.solution.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-gradient font-display text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy-500">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* modules */}
      <Section>
        <SectionHeading
          eyebrow="Key features"
          title={
            <>
              Modules we <span className="text-gradient">developed</span>
            </>
          }
          description="Everything that ships inside the platform, grouped by module."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.modules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-3xl border border-navy-100/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <h3 className="text-lg font-bold">{m.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-navy-600">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                        <LuCheck size={12} />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* spotlight */}
      {p.spotlight && (
        <Section>
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-8 shadow-lift sm:p-12">
            <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-azure-600/40 blur-3xl" />
            <div className="absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-leaf-500/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-teal-200 uppercase">
                  {p.spotlight.eyebrow}
                </span>
                <h2 className="mt-4 text-2xl leading-tight font-bold !text-white sm:text-3xl">{p.spotlight.title}</h2>
                <p className="mt-4 leading-relaxed text-navy-200">{p.spotlight.text}</p>
              </div>
              <ul className="space-y-3">
                {p.spotlight.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-medium text-white backdrop-blur">
                    <LuCheck className="mt-0.5 shrink-0 text-teal-300" size={18} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Section>
      )}

      {/* roles */}
      {p.roles && (
        <Section tone="tint">
          <SectionHeading
            eyebrow="User roles"
            title={
              <>
                The right access for <span className="text-gradient">every user</span>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {p.roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-navy-100/80 bg-white p-7 shadow-soft">
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-1 text-sm text-navy-500">{r.text}</p>
                  <ul className="mt-4 space-y-2.5 border-t border-navy-100/80 pt-4">
                    {r.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-navy-600">
                        <LuCheck className="mt-0.5 shrink-0 text-azure-600" size={16} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* journey */}
      {p.journey && (
        <Process
          id="journey"
          eyebrow="User journey"
          title={p.journey.title}
          description="A simple flow that keeps every step clear for the people using it."
          steps={p.journey.steps}
        />
      )}

      {/* outcomes + tech */}
      <Section tone={p.journey ? 'tint' : 'white'}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <Eyebrow>Outcomes</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What the platform delivers</h2>
            <ul className="mt-6 space-y-3">
              {p.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-2xl border border-navy-100/80 bg-white p-4 text-sm font-medium text-navy-700 shadow-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
                    <LuCheck size={12} />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Technology & integrations</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Built with</h2>
            <div className="mt-6">
              <TechChips items={p.tech} />
            </div>
          </Reveal>
        </div>
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
        title="Planning something similar?"
        text="Tell us about your idea. We'll share ideas, a timeline and a transparent quote within one business day."
        primary={{ label: 'Get a free quote', href: `${routes.contact}?service=${p.services[0]}` }}
        secondary={{ label: 'More case studies', href: routes.portfolio }}
      />
    </>
  )
}
