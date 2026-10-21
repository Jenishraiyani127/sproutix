import type { IconType } from 'react-icons'
import {
  LuCoffee,
  LuGlobe,
  LuGraduationCap,
  LuHeartHandshake,
  LuHeartPulse,
  LuLightbulb,
  LuRocket,
  LuShieldCheck,
  LuSparkles,
  LuUsers,
  LuWallet,
  LuLaptop,
} from 'react-icons/lu'
import { photos } from '../lib/img'

/* Sample company content — replace names, dates and numbers with real information. */

export const values: Array<{ icon: IconType; title: string; text: string }> = [
  { icon: LuLightbulb, title: 'Curiosity first', text: 'We ask better questions so we can build better answers — for your users and your business.' },
  { icon: LuShieldCheck, title: 'Honest & reliable', text: 'Clear timelines, transparent pricing and no surprises. We say what we will do, then do it.' },
  { icon: LuSparkles, title: 'Craft over shortcuts', text: 'Details matter. We obsess over the small things that make products feel premium.' },
  { icon: LuHeartHandshake, title: 'Partnership mindset', text: 'Your success is our success. We stay involved long after launch day.' },
]

export const milestones = [
  { year: '2020', title: 'Spherotix launches', text: 'Founded by a small team of designers and engineers with a simple idea: digital work should feel effortless.' },
  { year: '2021', title: 'First 25 projects', text: 'Expanded from websites into brand identity and UI/UX design for start-ups and local businesses.' },
  { year: '2023', title: 'Apps & CMS launched', text: 'Added mobile app development and headless CMS expertise to serve larger products.' },
  { year: '2024', title: 'Marketing studio opens', text: 'Introduced SEO, performance marketing and analytics, completing our end-to-end offering.' },
  { year: '2026', title: '120+ projects delivered', text: 'Trusted by 60+ brands across e-commerce, healthcare, education and logistics.' },
]

export interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
}

export const team: TeamMember[] = [
  { name: 'Aarav Desai', role: 'Founder & CEO', bio: 'Product strategist with 12 years of experience building digital businesses.', avatar: photos.p3 },
  { name: 'Meera Iyer', role: 'Head of Design', bio: 'Brand and UX designer obsessed with clarity, craft and accessible design.', avatar: photos.p4 },
  { name: 'Kabir Malhotra', role: 'Lead Engineer', bio: 'Full-stack engineer focused on performance, security and clean architecture.', avatar: photos.p1 },
  { name: 'Nisha Verma', role: 'Marketing Lead', bio: 'SEO and growth specialist who loves turning data into practical decisions.', avatar: photos.p5 },
  { name: 'Rahul Sen', role: 'Mobile Developer', bio: 'React Native and iOS developer shipping delightful, reliable apps.', avatar: photos.p6 },
  { name: 'Ishita Rao', role: 'Project Manager', bio: 'Keeps projects calm, communication clear and deadlines realistic.', avatar: photos.p7 },
]

export const perks: Array<{ icon: IconType; title: string; text: string }> = [
  { icon: LuLaptop, title: 'Flexible & hybrid', text: 'Work from home, the office or a mix — whichever helps you do your best work.' },
  { icon: LuGraduationCap, title: 'Learning budget', text: 'Courses, conferences and books are on us. We invest in your growth.' },
  { icon: LuHeartPulse, title: 'Health cover', text: 'Medical insurance for you and your family, plus wellness days.' },
  { icon: LuWallet, title: 'Fair, transparent pay', text: 'Clear salary bands, performance bonuses and annual reviews.' },
  { icon: LuRocket, title: 'Real ownership', text: 'Small teams, big responsibility and the freedom to shape how we work.' },
  { icon: LuCoffee, title: 'Friendly culture', text: 'Team lunches, game afternoons and a no-blame, learn-fast environment.' },
]

export interface Opening {
  slug: string
  title: string
  team: string
  location: string
  type: string
  experience: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const openings: Opening[] = [
  {
    slug: 'senior-react-developer',
    title: 'Senior React Developer',
    team: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    summary: 'Build fast, accessible web apps for ambitious clients using React, TypeScript and Next.js.',
    responsibilities: ['Lead the front-end of client projects from architecture to launch.', 'Review code and mentor mid-level developers.', 'Collaborate closely with designers on component libraries.', 'Improve performance, accessibility and testing practices.'],
    requirements: ['Strong React, TypeScript and modern CSS skills.', 'Experience with Next.js and REST/GraphQL APIs.', 'An eye for detail and pride in clean code.', 'Clear communication with clients and teammates.'],
  },
  {
    slug: 'ui-ux-designer',
    title: 'UI / UX Designer',
    team: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '2+ years',
    summary: 'Design research-led interfaces and design systems for web and mobile products.',
    responsibilities: ['Run discovery sessions, wireframes and prototypes.', 'Craft polished UI in Figma with consistent design systems.', 'Support developers through implementation and QA.', 'Validate designs through usability testing.'],
    requirements: ['A portfolio showing UX thinking and visual craft.', 'Advanced Figma skills including auto-layout and components.', 'Understanding of accessibility and responsive design.', 'Comfortable presenting ideas to clients.'],
  },
  {
    slug: 'seo-specialist',
    title: 'SEO & Content Specialist',
    team: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    summary: 'Plan and run organic growth programmes that deliver measurable results for our clients.',
    responsibilities: ['Perform technical audits and keyword research.', 'Create content strategies and briefs.', 'Report monthly on rankings, traffic and leads.', 'Collaborate with developers on technical fixes.'],
    requirements: ['Hands-on experience with Search Console, GA4 and SEO tools.', 'Strong writing and analytical skills.', 'Knowledge of local and e-commerce SEO is a plus.', 'Curiosity about search and AI trends.'],
  },
  {
    slug: 'mobile-app-developer',
    title: 'React Native Developer',
    team: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    summary: 'Ship polished, performant iOS and Android apps with React Native and TypeScript.',
    responsibilities: ['Build and maintain cross-platform mobile apps.', 'Integrate APIs, push notifications and payments.', 'Handle App Store and Play Store releases.', 'Optimise performance and offline behaviour.'],
    requirements: ['Production experience with React Native and TypeScript.', 'Familiarity with native modules is a plus.', 'Understanding of mobile UX conventions.', 'A proactive, product-minded approach.'],
  },
  {
    slug: 'design-internship',
    title: 'Graphic Design Intern',
    team: 'Design',
    location: 'On-site',
    type: 'Internship (6 months)',
    experience: 'Freshers welcome',
    summary: 'Learn brand and visual design alongside senior designers on real client projects.',
    responsibilities: ['Create social media and marketing creatives.', 'Assist with logo and brand identity projects.', 'Prepare print-ready files and presentations.', 'Learn from regular design reviews.'],
    requirements: ['Working knowledge of Illustrator or Photoshop.', 'A portfolio of personal or college projects.', 'Eagerness to learn and take feedback.', 'Good eye for typography and colour.'],
  },
]

export const companyHighlights: Array<{ icon: IconType; label: string }> = [
  { icon: LuUsers, label: '20+ passionate people' },
  { icon: LuGlobe, label: 'Clients across 8 countries' },
  { icon: LuRocket, label: '120+ projects shipped' },
]
