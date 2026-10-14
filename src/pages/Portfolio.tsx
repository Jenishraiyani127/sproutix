import { Seo } from '../components/Seo'
import { Testimonials } from '../components/Testimonials'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { ProjectGrid } from '../components/page/ProjectGrid'
import { Section } from '../components/page/Section'
import { StatsBand } from '../components/page/StatsBand'
import { Button } from '../components/ui'
import { projects } from '../data/projects'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'Portfolio' }]

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio & Case Studies"
        description="Explore Sproutix case studies — websites, mobile apps, CMS platforms, brand identities, UI/UX redesigns and marketing campaigns that delivered measurable results."
        path={routes.portfolio}
        breadcrumbs={crumbs}
      />

      <PageHero
        eyebrow="Our work"
        align="center"
        title={
          <>
            Projects that <span className="text-gradient">moved the needle</span>
          </>
        }
        description="A selection of websites, apps, brands and campaigns we've built with ambitious clients. Open any project to see the challenge, solution and results."
        breadcrumbs={crumbs}
        actions={<Button href={routes.contact}>Start your project</Button>}
      />

      <Section>
        <ProjectGrid projects={projects} />
      </Section>

      <Section>
        <StatsBand
          items={[
            { value: 120, suffix: '+', label: 'Projects delivered' },
            { value: 60, suffix: '+', label: 'Brands served' },
            { value: 3.2, suffix: 'x', decimals: 1, label: 'Average campaign ROI' },
            { value: 98, suffix: '%', label: 'Client satisfaction' },
          ]}
        />
      </Section>

      <Testimonials />
      <CtaBand
        title="Your project could be next"
        text="Tell us what you're building and we'll show you how we'd approach it — with timeline, team and transparent pricing."
        secondary={{ label: 'Our services', href: routes.services }}
      />
    </>
  )
}
