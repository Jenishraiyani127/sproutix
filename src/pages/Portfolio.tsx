import { Seo } from '../components/Seo'
import { Button } from '../components/ui'
import { CtaBand } from '../components/page/CtaBand'
import { PageHero } from '../components/page/PageHero'
import { ProjectGrid } from '../components/page/ProjectGrid'
import { Section } from '../components/page/Section'
import { projects } from '../data/projects'
import { SITE_URL } from '../data/site'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'Portfolio' }]

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio & Case Studies — Web Apps, Mobile Apps & Platforms"
        description="Explore Spherotix case studies: a QR food-ordering and POS platform, an EMI calculator, a clinic management system, a society management app and an AI-powered real estate platform."
        keywords={[
          'software development portfolio',
          'web application case studies',
          'Flutter app development',
          'React TypeScript projects',
          'restaurant POS software',
          'clinic management software',
          'real estate platform development',
          'Spherotix',
        ]}
        path={routes.portfolio}
        breadcrumbs={crumbs}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Spherotix case studies',
            itemListElement: projects.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.title,
              url: `${SITE_URL}${routes.project(p.slug)}`,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Our work"
        align="center"
        title={
          <>
            Platforms we've <span className="text-gradient">designed and built</span>
          </>
        }
        description="Real products for real businesses — food-service, finance, healthcare, residential communities and real estate. Open any project to see the problem, the solution and the modules we delivered."
        breadcrumbs={crumbs}
        actions={<Button href={routes.contact}>Start your project</Button>}
      />

      <Section>
        <ProjectGrid projects={projects} />
      </Section>

      <CtaBand
        title="Your project could be next"
        text="Tell us what you're building and we'll show you how we'd approach it — with timeline, team and transparent pricing."
        secondary={{ label: 'Our services', href: routes.services }}
      />
    </>
  )
}
