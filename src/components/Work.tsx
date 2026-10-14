import { projects } from '../data/projects'
import { routes } from '../lib/routes'
import { ProjectGrid } from './page/ProjectGrid'
import { Button, Reveal, SectionHeading } from './ui'

/** Home-page selection of recent projects. */
export function Work() {
  return (
    <section id="work" className="bg-navy-50/50 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects that <span className="text-gradient">moved the needle</span>
            </>
          }
          description="A glimpse of the websites, apps, brands and campaigns we've grown with our clients."
        />

        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href={routes.portfolio} variant="secondary">
            View all projects
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
