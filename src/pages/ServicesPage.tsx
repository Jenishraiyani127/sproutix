import { Process } from '../components/Process'
import { Seo } from '../components/Seo'
import { WhyUs } from '../components/WhyUs'
import { Button, Reveal, SectionHeading } from '../components/ui'
import { Accordion } from '../components/page/Accordion'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { Section } from '../components/page/Section'
import { ServiceCard } from '../components/page/ServiceCard'
import { TechChips } from '../components/page/TechChips'
import { faqs } from '../data/content'
import { services } from '../data/services'
import { photos } from '../lib/img'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'Services' }]
const allTools = [...new Set(services.flatMap((s) => s.tools))]

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — Web, App, CMS, Design, UI/UX & Marketing"
        description="Explore Spherotix services: web development, mobile apps, CMS, graphic design, UI/UX design and digital marketing — everything you need to build and grow online."
        keywords={["web development services","mobile app development services","CMS development","graphic design services","UI UX design services","digital marketing services","Spherotix services"]}
        path={routes.services}
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: services.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: s.title,
              url: `https://www.spherotix.com${routes.service(s.slug)}`,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Our services"
        align="center"
        title={
          <>
            Everything you need to <span className="text-gradient">build and grow</span> online
          </>
        }
        description="From the first sketch to the first page-one ranking — web, app, CMS, design and marketing delivered by one collaborative team."
        breadcrumbs={crumbs}
        actions={
          <>
            <Button href={routes.contact}>Get a free quote</Button>
            <Button href={routes.portfolio} variant="secondary">
              See our work
            </Button>
          </>
        }
        image={photos.codeLaptop}
        imageAlt="Developer working on code at a laptop"
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.1}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyUs />

      <Process
        id="how-we-work"
        title={
          <>
            One process for <span className="text-gradient">every service</span>
          </>
        }
        description="Whether it is a website, an app or a campaign, you always know what is happening and what comes next."
      />

      <Section tone="tint">
        <SectionHeading
          eyebrow="Tools & technology"
          title={
            <>
              Modern tools, <span className="text-gradient">proven craft</span>
            </>
          }
          description="We choose the right technology for your goals — not the trendiest one."
        />
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <TechChips items={allTools} />
        </Reveal>
      </Section>

      <Section width="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Common <span className="text-gradient">questions</span>
            </>
          }
        />
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
      </Section>

      <CtaBand
        title="Not sure which service you need?"
        text="Book a free consultation. We will review your goals and recommend the most effective path — no pressure, no jargon."
        secondary={{ label: 'View portfolio', href: routes.portfolio }}
      />
    </>
  )
}
