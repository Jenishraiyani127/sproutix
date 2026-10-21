import { photos } from '../lib/img'
import type { Metric } from './services'

/* Sample case studies — replace with real client work before launch. */

export type WorkCategory = 'Web' | 'App' | 'CMS' | 'Design' | 'UI/UX' | 'Marketing'

export interface Project {
  slug: string
  title: string
  client: string
  industry: string
  category: WorkCategory
  year: string
  duration: string
  /** Short result shown on cards. */
  result: string
  tags: string[]
  /** Service slugs used (see services.ts). */
  services: string[]
  tech: string[]
  image: string
  summary: string
  overview: string[]
  challenge: string[]
  solution: string[]
  results: Metric[]
  gallery: string[]
  testimonial: { quote: string; name: string; role: string; avatar: string }
}

export const projects: Project[] = [
  {
    slug: 'fresh-cart-marketplace',
    title: 'Fresh Cart Marketplace',
    client: 'Fresh Cart',
    industry: 'E-commerce',
    category: 'Web',
    year: '2026',
    duration: '14 weeks',
    result: '+62% checkout conversions',
    tags: ['React', 'Node', 'Payments'],
    services: ['web-development', 'ui-ux-design'],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: photos.webLaptop,
    summary: 'A multi-vendor grocery marketplace rebuilt for speed, trust and effortless checkout.',
    overview: [
      'Fresh Cart connects local farms and grocers with households. Their original storefront was slow on mobile, confusing at checkout and difficult for vendors to manage.',
      'We rebuilt the platform as a fast, mobile-first marketplace with a streamlined checkout, vendor dashboards and real-time inventory.',
    ],
    challenge: [
      'Over 70% of shoppers browsed on phones, yet pages took more than six seconds to load and nearly 8 in 10 carts were abandoned.',
      'Vendors updated stock manually through spreadsheets, causing frequent out-of-stock orders and refunds.',
    ],
    solution: [
      'We designed a lightweight catalogue with instant search, saved baskets and a three-step checkout supporting cards, UPI and wallets.',
      'A vendor portal with live inventory sync, order management and payout reports removed manual work, while server-side rendering and image optimisation brought load times under two seconds.',
    ],
    results: [
      { value: 62, suffix: '%', label: 'Higher checkout conversion' },
      { value: 1.8, suffix: 's', decimals: 1, label: 'Average page load' },
      { value: 41, suffix: '%', label: 'Fewer stock-out refunds' },
    ],
    gallery: [photos.codeLaptop, photos.analytics, photos.dashboard],
    testimonial: {
      quote: 'Spherotix rebuilt our entire marketplace and our checkout conversion jumped within the first month. They felt like part of our team.',
      name: 'Meera Joshi',
      role: 'Co-founder, Fresh Cart',
      avatar: photos.p2,
    },
  },
  {
    slug: 'logitrack-fleet-app',
    title: 'LogiTrack Fleet App',
    client: 'LogiTrack',
    industry: 'Logistics',
    category: 'App',
    year: '2025',
    duration: '12 weeks',
    result: 'iOS & Android, 4.8★ rating',
    tags: ['React Native', 'Maps', 'API'],
    services: ['mobile-app-development', 'ui-ux-design'],
    tech: ['React Native', 'TypeScript', 'Node.js', 'Google Maps', 'Firebase'],
    image: photos.app,
    summary: 'A driver and dispatcher app giving logistics teams live visibility across their fleet.',
    overview: [
      'LogiTrack is a regional logistics start-up managing more than 200 drivers. Dispatch relied on phone calls and WhatsApp groups to coordinate deliveries.',
      'We built a driver app and dispatcher console that centralise routes, proof-of-delivery and live tracking.',
    ],
    challenge: [
      'Drivers often worked in low-connectivity areas, so the app had to remain reliable offline.',
      'Dispatchers needed a clear real-time picture of every vehicle without drowning in notifications.',
    ],
    solution: [
      'We built an offline-first React Native app that queues updates and syncs automatically, with one-tap status changes, photo proof of delivery and turn-by-turn navigation.',
      'The dispatcher dashboard shows live locations, delays and exceptions, with smart alerts only when action is required.',
    ],
    results: [
      { value: 4.8, suffix: '★', decimals: 1, label: 'Average store rating' },
      { value: 35, suffix: '%', label: 'Fewer delivery delays' },
      { value: 200, suffix: '+', label: 'Daily active drivers' },
    ],
    gallery: [photos.codeDesk, photos.code, photos.wireframe],
    testimonial: {
      quote: 'The app just works — even in areas with poor signal. Our drivers adopted it in days and dispatch is finally calm.',
      name: 'Arjun Nair',
      role: 'Operations Head, LogiTrack',
      avatar: photos.p1,
    },
  },
  {
    slug: 'nexora-corporate-site',
    title: 'Nexora Corporate Site',
    client: 'Nexora Group',
    industry: 'Enterprise services',
    category: 'CMS',
    year: '2026',
    duration: '10 weeks',
    result: 'Team publishes without developers',
    tags: ['Headless CMS', 'Next.js', 'Multi-language'],
    services: ['cms-development', 'web-development'],
    tech: ['Next.js', 'Strapi', 'GraphQL', 'Tailwind CSS', 'Vercel'],
    image: photos.cms,
    summary: 'A multi-language corporate website powered by a headless CMS and reusable page blocks.',
    overview: [
      'Nexora Group operates in five countries and needed one website that regional marketing teams could manage themselves.',
      'We delivered a headless CMS with a block-based page builder and a lightning-fast Next.js front-end.',
    ],
    challenge: [
      'Every change previously required a developer, so campaigns waited weeks to go live.',
      'Brand consistency suffered because each region built pages differently.',
    ],
    solution: [
      'A library of approved blocks — heroes, feature grids, case studies, forms — lets editors compose pages quickly while staying on brand.',
      'Role-based workflows, scheduled publishing and built-in translations support every regional team from a single dashboard.',
    ],
    results: [
      { value: 80, suffix: '%', label: 'Faster page publishing' },
      { value: 5, suffix: ' regions', label: 'Managed from one CMS' },
      { value: 95, suffix: '/100', label: 'Lighthouse performance' },
    ],
    gallery: [photos.webLaptop, photos.dashboard, photos.codeLaptop],
    testimonial: {
      quote: 'Our marketing team now launches pages in an afternoon. The structure Spherotix created saved us weeks every month.',
      name: 'Priya Sharma',
      role: 'Head of Marketing, Nexora',
      avatar: photos.p4,
    },
  },
  {
    slug: 'aurum-interiors-rebrand',
    title: 'Aurum Interiors Rebrand',
    client: 'Aurum Interiors',
    industry: 'Interior design',
    category: 'Design',
    year: '2025',
    duration: '8 weeks',
    result: 'Full brand identity & collateral',
    tags: ['Logo', 'Brand guide', 'Print'],
    services: ['graphic-design'],
    tech: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    image: photos.palette,
    summary: 'A refined new identity for a boutique interior studio moving into premium residential projects.',
    overview: [
      'Aurum Interiors was winning bigger projects, but its brand still looked like a small local studio.',
      'We created a warm, premium identity spanning logo, colour, typography, stationery and a project portfolio system.',
    ],
    challenge: [
      'The studio needed to feel luxurious without becoming cold or generic.',
      'Collateral was inconsistent across proposals, social media and site visits.',
    ],
    solution: [
      'We drew inspiration from architectural lines and brass details to craft a monogram, a muted palette and an elegant serif/sans pairing.',
      'A complete brand guide, proposal template and social kit now keep every touchpoint consistent.',
    ],
    results: [
      { value: 2, suffix: 'x', label: 'Increase in enquiries' },
      { value: 30, suffix: '+', label: 'Brand assets delivered' },
      { value: 100, suffix: '%', label: 'Team adoption of guidelines' },
    ],
    gallery: [photos.wireframe, photos.strategy, photos.pointing],
    testimonial: {
      quote: 'Our new identity finally matches the quality of our work. Clients comment on it in almost every first meeting.',
      name: 'Ananya Mehta',
      role: 'Founder, Aurum Interiors',
      avatar: photos.p2,
    },
  },
  {
    slug: 'edupath-learning-portal',
    title: 'EduPath Learning Portal',
    client: 'EduPath Academy',
    industry: 'Education',
    category: 'UI/UX',
    year: '2026',
    duration: '9 weeks',
    result: '+38% course sign-ups',
    tags: ['Research', 'Prototype', 'Design system'],
    services: ['ui-ux-design', 'web-development'],
    tech: ['Figma', 'React', 'Storybook', 'Maze'],
    image: photos.wireframe,
    summary: 'A research-led redesign of an online academy to help learners find, start and finish courses.',
    overview: [
      'EduPath offers hundreds of courses, but learners struggled to find the right one and many dropped off before enrolling.',
      'Through interviews, analytics and usability testing we redesigned discovery, course pages and the learner dashboard.',
    ],
    challenge: [
      'Navigation grew organically and no longer matched how learners think about goals and careers.',
      'Course pages buried the key information needed to make a decision.',
    ],
    solution: [
      'We introduced goal-based discovery, comparison tools and a simplified enrolment flow, all backed by a documented design system.',
      'Validated prototypes were tested with real learners before development, reducing rework and speeding delivery.',
    ],
    results: [
      { value: 38, suffix: '%', label: 'Increase in sign-ups' },
      { value: 27, suffix: '%', label: 'Lower drop-off at checkout' },
      { value: 120, suffix: '+', label: 'Reusable UI components' },
    ],
    gallery: [photos.palette, photos.dashboard, photos.analytics],
    testimonial: {
      quote: 'Spherotix listened to our learners first, then designed. The results spoke for themselves within weeks of launch.',
      name: 'Dr. Kavita Rao',
      role: 'Director, EduPath Academy',
      avatar: photos.p5,
    },
  },
  {
    slug: 'medcare-clinic-growth',
    title: 'MedCare Clinic Growth',
    client: 'MedCare Clinics',
    industry: 'Healthcare',
    category: 'Marketing',
    year: '2025',
    duration: '6 months',
    result: '#1 for 40+ local keywords',
    tags: ['SEO', 'Google Ads', 'Content'],
    services: ['digital-marketing', 'web-development'],
    tech: ['Search Console', 'Google Ads', 'Analytics', 'SEMrush'],
    image: photos.marketing,
    summary: 'A local SEO and paid media programme that filled appointment calendars across a clinic network.',
    overview: [
      'MedCare runs several clinics in competitive urban areas and relied almost entirely on word-of-mouth.',
      'We built a local search and paid advertising engine to bring patients directly to each clinic.',
    ],
    challenge: [
      'The clinics barely appeared in local search results and Google Business profiles were incomplete.',
      'Previous ad campaigns generated clicks but few booked appointments.',
    ],
    solution: [
      'We rebuilt location pages, optimised Google Business profiles, produced trustworthy health content and earned local citations.',
      'In parallel, tightly targeted ad campaigns drove to dedicated landing pages with simple online booking.',
    ],
    results: [
      { value: 40, suffix: '+', label: 'Keywords ranking #1 locally' },
      { value: 3.4, suffix: 'x', decimals: 1, label: 'Online appointment bookings' },
      { value: 52, suffix: '%', label: 'Lower cost per booking' },
    ],
    gallery: [photos.analytics, photos.strategy, photos.dashboard],
    testimonial: {
      quote: 'We went from being invisible online to fully booked. The monthly reporting made it easy to see exactly what was working.',
      name: 'Rohan Kapoor',
      role: 'Marketing Head, MedCare',
      avatar: photos.p1,
    },
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)
