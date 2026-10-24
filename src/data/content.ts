import type { IconType } from 'react-icons'
import {
  LuCode,
  LuGem,
  LuHeartHandshake,
  LuLayers,
  LuMegaphone,
  LuMousePointerClick,
  LuPalette,
  LuPenTool,
  LuSearch,
  LuSmartphone,
  LuSparkles,
  LuRocket,
} from 'react-icons/lu'
import { photos } from '../lib/img'
import { projects } from './projects'

/* NOTE: Contact details, clients and testimonials below are sample content.
   Replace them with real company information before going live. */

export const company = {
  name: 'Spherotix',
  email: 'hello@spherotix.com',
  phone: '+91 95129 31212',
  address:
    '212, Shlok Infinity, Near Gota Railway Bridge, Opposite Vishwakarma Mandir, Chandlodiya Road, Gota, Ahmedabad - 382481, Gujarat, India',
  city: 'Ahmedabad, Gujarat',
  hours: 'Mon – Sat, 10:00 – 19:00 IST',
}

/** Logo strip under the hero: our real projects. */
export const clients: Array<{ name: string; icon: IconType }> = projects.map((p) => ({ name: p.title, icon: p.icon }))

/** Interactive hero: "Ideas that scale into {word}" — one entry per core service. */
export interface HeroService {
  key: string
  chip: string
  word: string
  blurb: string
  icon: IconType
  image: string
  stat: { label: string; value: string }
  badge: { title: string; sub: string }
}

export const heroServices: HeroService[] = [
  {
    key: 'web',
    chip: 'Web Development',
    word: 'Websites',
    blurb: 'Custom sites & web apps',
    icon: LuCode,
    image: photos.dashboard,
    stat: { label: 'Page speed score', value: '98/100' },
    badge: { title: 'Live in 3 weeks', sub: 'Fast, responsive & secure' },
  },
  {
    key: 'app',
    chip: 'App Development',
    word: 'Mobile Apps',
    blurb: 'iOS & Android products',
    icon: LuSmartphone,
    image: photos.app,
    stat: { label: 'Average app rating', value: '4.9 ★' },
    badge: { title: 'One codebase', sub: 'Native feel on every device' },
  },
  {
    key: 'cms',
    chip: 'CMS',
    word: 'CMS Platforms',
    blurb: 'Content you control',
    icon: LuLayers,
    image: photos.cms,
    stat: { label: 'Faster publishing', value: '-70%' },
    badge: { title: 'You stay in control', sub: 'WordPress, headless & custom' },
  },
  {
    key: 'graphic',
    chip: 'Graphic Design',
    word: 'Brand Identities',
    blurb: 'Logos to launch kits',
    icon: LuPalette,
    image: photos.palette,
    stat: { label: 'Brand recall', value: '+45%' },
    badge: { title: 'Logo to launch kit', sub: 'Print, social & packaging' },
  },
  {
    key: 'uiux',
    chip: 'UI / UX',
    word: 'Delightful UX',
    blurb: 'Research-led interfaces',
    icon: LuMousePointerClick,
    image: photos.wireframe,
    stat: { label: 'Conversion uplift', value: '+38%' },
    badge: { title: 'Wireframe to prototype', sub: 'Tested with real users' },
  },
  {
    key: 'marketing',
    chip: 'Marketing',
    word: 'Growth Campaigns',
    blurb: 'SEO, ads & social',
    icon: LuMegaphone,
    image: photos.marketing,
    stat: { label: 'Average campaign ROI', value: '3.2x' },
    badge: { title: 'Measured monthly', sub: 'SEO, ads & social media' },
  },
]

export const whyCards = [
  {
    icon: LuSparkles,
    title: 'END-TO-END\nDIGITAL DELIVERY',
    text: 'Design, development, content and marketing under one roof — one team, one plan, no hand-off gaps.',
    image: photos.codeDesk,
  },
  {
    icon: LuHeartHandshake,
    title: 'LONG TERM\nPARTNERSHIPS',
    text: 'We work alongside brands and startups as a technology partner focused on growth and real business impact.',
    image: photos.laughing,
  },
  {
    icon: LuGem,
    title: 'PIXEL PERFECT\nEXPERIENCE',
    text: 'From smooth animations to responsive layouts, every detail is crafted to deliver a premium experience.',
    image: photos.pointing,
  },
]

export const processSteps = [
  { icon: LuSearch, title: 'Discover', text: 'We learn your business, audience and goals, then audit what already exists.' },
  { icon: LuPenTool, title: 'Design', text: 'Strategy, wireframes and a polished visual identity you approve before we build.' },
  { icon: LuCode, title: 'Develop', text: 'Clean, tested, production-ready code shipped in clear milestones you can follow.' },
  { icon: LuRocket, title: 'Grow', text: 'Launch, measure and optimise — we keep improving performance and conversions.' },
]

export const testimonials = [
  {
    quote:
      'Spherotix rebuilt our website and our enquiries doubled within a quarter. They felt like an extension of our own team.',
    name: 'Ananya Mehta',
    role: 'Founder, Aurum Interiors',
    avatar: photos.p2,
  },
  {
    quote:
      'From the app to the marketing campaigns, everything was clear, measurable and honest. Our leads grew every single month.',
    name: 'Rohan Kapoor',
    role: 'Marketing Head, MedCare',
    avatar: photos.p1,
  },
  {
    quote:
      'Our new brand identity looks world-class. Fast turnaround, thoughtful design and zero hand-holding needed.',
    name: 'Sara Williams',
    role: 'CEO, Bloom Organics',
    avatar: photos.p4,
  },
]

export const faqs = [
  {
    q: 'What services does Spherotix offer?',
    a: 'We cover web development, mobile app development, CMS builds, graphic design, UI/UX design and digital marketing — so one team can take you from idea to launch and growth.',
  },
  {
    q: 'How long does a typical website take to build?',
    a: 'A business website usually takes 3–5 weeks, while custom web and mobile apps are scoped in milestones — commonly 8–16 weeks. You get a clear timeline after our discovery call.',
  },
  {
    q: 'Can my team update the website content ourselves?',
    a: 'Yes. We build on WordPress, headless CMS or a custom admin panel and train your team, so you can edit pages, blogs and products without a developer.',
  },
  {
    q: 'Will I own the website, app and design files?',
    a: 'Yes. Once the project is paid for, you own the code, designs and brand assets — no lock-in.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Absolutely. We offer maintenance plans covering hosting, security updates, backups, monitoring and ongoing improvements.',
  },
]

export const contactInterests = [
  'Website / Web App',
  'Mobile App',
  'CMS',
  'Graphic Design',
  'UI / UX',
  'Digital Marketing',
  'Other',
]
