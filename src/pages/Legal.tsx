import { useEffect, useState } from 'react'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/page/PageHero'
import { Section } from '../components/page/Section'
import { Reveal } from '../components/ui'
import { privacyPolicy, termsOfService } from '../data/legal'
import { formatDate } from '../lib/format'
import { routes } from '../lib/routes'

const docs = {
  privacy: { data: privacyPolicy, path: routes.privacy },
  terms: { data: termsOfService, path: routes.terms },
}

/** Shared layout for Privacy Policy and Terms of Service. */
export default function Legal({ doc }: { doc: keyof typeof docs }) {
  const { data, path } = docs[doc]
  const [active, setActive] = useState(data.sections[0].id)
  const crumbs = [{ label: data.title }]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' },
    )
    data.sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [data])

  return (
    <>
      <Seo title={data.title} description={data.description} path={path} breadcrumbs={crumbs} />

      <PageHero
        eyebrow="Legal"
        title={data.title}
        description={data.intro}
        breadcrumbs={crumbs}
        meta={<p className="text-sm font-medium text-navy-400">Last updated: {formatDate(data.updated)}</p>}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold tracking-wider text-navy-400 uppercase">On this page</p>
            <ul className="mt-4 space-y-1">
              {data.sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block rounded-xl border-l-2 px-3 py-2 text-sm font-medium transition-colors ${
                      active === s.id
                        ? 'border-azure-500 bg-azure-50 text-azure-700'
                        : 'border-transparent text-navy-500 hover:text-azure-700'
                    }`}
                  >
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl space-y-10">
            {data.sections.map((s, i) => (
              <Reveal key={s.id} y={16}>
                <section id={s.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold">
                    {i + 1}. {s.title}
                  </h2>
                  {s.paragraphs?.map((p) => (
                    <p key={p} className="mt-4 leading-[1.8] text-navy-600">
                      {p}
                    </p>
                  ))}
                  {s.items && (
                    <ul className="mt-4 space-y-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3 leading-[1.8] text-navy-600">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
