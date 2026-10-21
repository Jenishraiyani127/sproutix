import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { FAQ } from '../components/FAQ'
import { Hero } from '../components/Hero'
import { Process } from '../components/Process'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'
import { TechStack } from '../components/TechStack'
import { Testimonials } from '../components/Testimonials'
import { WhyUs } from '../components/WhyUs'
import { Work } from '../components/Work'

export default function Home() {
  return (
    <>
      <Seo
        title="Spherotix | Web, App, CMS, Graphic Design, UI/UX & Digital Marketing"
        description="Spherotix is a full-service digital agency — web development, mobile apps, CMS, graphic design, UI/UX and digital marketing — taking your idea from first sketch to real growth."
        path="/"
      />
      <Hero />
      <Services />
      <WhyUs />
      <TechStack />
      <About />
      <Process />
      <Work />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
