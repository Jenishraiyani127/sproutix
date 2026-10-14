import { motion } from 'framer-motion'
import { LuCheck, LuEye, LuTarget } from 'react-icons/lu'
import { Process } from '../components/Process'
import { Seo } from '../components/Seo'
import { Testimonials } from '../components/Testimonials'
import { Button, Reveal, SectionHeading } from '../components/ui'
import { CtaBand } from '../components/page/CtaBand'
import { FeatureGrid } from '../components/page/FeatureGrid'
import { PageHero } from '../components/page/PageHero'
import { Section } from '../components/page/Section'
import { StatsBand } from '../components/page/StatsBand'
import { TeamCard } from '../components/page/TeamCard'
import { companyHighlights, milestones, team, values } from '../data/company'
import { photos, unsplash } from '../lib/img'
import { routes } from '../lib/routes'

const crumbs = [{ label: 'About us' }]

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Meet Sproutix Infotech — a team of designers, engineers and marketers helping ambitious brands grow with websites, apps, CMS, design and marketing."
        path={routes.about}
        breadcrumbs={crumbs}
      />

      <PageHero
        eyebrow="About Sproutix"
        title={
          <>
            We help ideas <span className="text-gradient">sprout</span> into digital products
          </>
        }
        description="Sproutix Infotech is a full-service digital agency of designers, engineers and marketers. We build websites, apps and brands that look exceptional, perform brilliantly and keep growing."
        breadcrumbs={crumbs}
        actions={
          <>
            <Button href={routes.contact}>Work with us</Button>
            <Button href={routes.portfolio} variant="secondary">
              See our work
            </Button>
          </>
        }
        image={photos.meeting}
        imageAlt="The Sproutix team planning a project around a whiteboard"
      />

      {/* story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-azure-100 via-teal-100 to-leaf-100 opacity-70 blur-2xl" />
            <div className="relative grid grid-cols-5 gap-4">
              <img
                src={unsplash(photos.laughing, 700, 900)}
                alt="Sproutix team members collaborating"
                loading="lazy"
                className="col-span-3 h-72 w-full rounded-3xl object-cover shadow-lift sm:h-96"
              />
              <img
                src={unsplash(photos.teamLaptop, 500, 700)}
                alt="Designers reviewing a project on a laptop"
                loading="lazy"
                className="col-span-2 mt-10 h-56 w-full rounded-3xl object-cover shadow-lift sm:h-72"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute -bottom-5 left-4 rounded-2xl border border-white bg-white px-5 py-4 shadow-lift"
            >
              <p className="font-display text-3xl font-extrabold text-gradient">5+ yrs</p>
              <p className="text-xs font-medium text-navy-400">of crafting digital growth</p>
            </motion.div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={
                <>
                  Small team. <span className="text-gradient">Big ambition.</span>
                </>
              }
            />
            <Reveal delay={0.1} className="mt-5 space-y-4 text-base leading-relaxed text-navy-500">
              <p>
                Sproutix started in 2020 with a simple belief: great digital work should feel effortless for the people
                who commission it. No jargon, no missed deadlines, no handing your project between five different
                vendors.
              </p>
              <p>
                Today we are a multidisciplinary team delivering websites, mobile apps, CMS platforms, brand identities,
                interfaces and marketing campaigns for start-ups and established businesses across industries.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-6 space-y-3">
                {companyHighlights.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-sm font-semibold text-navy-700">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-azure-50 text-azure-600">
                      <Icon size={18} />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <StatsBand
          items={[
            { value: 120, suffix: '+', label: 'Projects delivered' },
            { value: 60, suffix: '+', label: 'Happy clients' },
            { value: 5, suffix: '+', label: 'Years of experience' },
            { value: 98, suffix: '%', label: 'Client satisfaction' },
          ]}
        />
      </Section>

      {/* mission & vision */}
      <Section tone="tint">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: LuTarget,
              title: 'Our mission',
              text: 'To make high-quality digital products accessible to every ambitious business by combining design, technology and marketing in one transparent, reliable partnership.',
            },
            {
              icon: LuEye,
              title: 'Our vision',
              text: 'To be the first name growing brands think of when they want to build something remarkable online — known for craft, honesty and results that last.',
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-navy-100/80 bg-white p-8 shadow-soft">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white">
                  <c.icon size={26} />
                </span>
                <h2 className="mt-6 text-2xl font-bold">{c.title}</h2>
                <p className="mt-3 leading-relaxed text-navy-500">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* values */}
      <Section>
        <SectionHeading
          eyebrow="What we believe"
          title={
            <>
              Values that shape <span className="text-gradient">every project</span>
            </>
          }
          description="These principles guide how we work with clients, with each other and with the products we build."
        />
        <div className="mt-12">
          <FeatureGrid items={values} columns={4} />
        </div>
      </Section>

      {/* timeline */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Our journey"
          title={
            <>
              From a small seed to a <span className="text-gradient">growing studio</span>
            </>
          }
        />
        <ol className="relative mx-auto mt-12 max-w-3xl border-l-2 border-azure-100 pl-8">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.06} className="relative pb-10 last:pb-0">
              <span className="absolute top-1 -left-[2.65rem] grid h-5 w-5 place-items-center rounded-full border-4 border-white bg-brand-gradient shadow-glow" />
              <span className="inline-block rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">{m.year}</span>
              <h3 className="mt-3 text-xl font-bold">{m.title}</h3>
              <p className="mt-1.5 leading-relaxed text-navy-500">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* team */}
      <Section>
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              People behind <span className="text-gradient">the work</span>
            </>
          }
          description="Designers, engineers and strategists who care about the details — and about you."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.08}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-navy-100/80 bg-navy-50/60 p-6 sm:flex-row sm:px-8">
          <p className="flex items-center gap-3 text-sm font-semibold text-navy-700">
            <LuCheck className="text-leaf-500" size={20} /> Want to join the team? We are hiring across design, engineering and marketing.
          </p>
          <Button href={routes.careers} variant="secondary">
            View open roles
          </Button>
        </Reveal>
      </Section>

      <Process />
      <Testimonials />
      <CtaBand
        title="Let's build something remarkable together"
        text="Tell us about your idea and we will come back within one business day with a plan, timeline and transparent quote."
        secondary={{ label: 'Explore services', href: routes.services }}
      />
    </>
  )
}
