import type { IconType } from 'react-icons'
import {
  LuBell,
  LuBrush,
  LuCloud,
  LuCode,
  LuDatabase,
  LuFileText,
  LuGauge,
  LuGlobe,
  LuImage,
  LuLayers,
  LuLayoutDashboard,
  LuLock,
  LuMail,
  LuMegaphone,
  LuMousePointerClick,
  LuPalette,
  LuPenTool,
  LuRefreshCw,
  LuSearch,
  LuShare2,
  LuShieldCheck,
  LuShoppingCart,
  LuSmartphone,
  LuTarget,
  LuTrendingUp,
  LuType,
  LuUsers,
  LuZap,
} from 'react-icons/lu'
import { photos } from '../lib/img'
import type { WorkCategory } from './projects'

export type ServiceArt = 'web' | 'app' | 'cms' | 'graphic' | 'uiux' | 'marketing'
export type Tint = 'azure' | 'teal' | 'leaf'

export interface Metric {
  value: number
  suffix?: string
  decimals?: number
  label: string
}

export interface Feature {
  icon: IconType
  title: string
  text: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ServiceDetail {
  slug: string
  art: ServiceArt
  tint: Tint
  featured?: boolean
  icon: IconType
  title: string
  /** One-line card description. */
  description: string
  tagline: string
  intro: string[]
  image: string
  highlights: string[]
  features: Feature[]
  includes: string[]
  tools: string[]
  steps: Array<{ title: string; text: string }>
  faqs: FaqItem[]
  metrics: Metric[]
  /** Related portfolio category. */
  category: WorkCategory
}

export const services: ServiceDetail[] = [
  {
    slug: 'web-development',
    art: 'web',
    tint: 'azure',
    featured: true,
    icon: LuCode,
    title: 'Web Development',
    description: 'Fast, secure websites, e-commerce stores and custom web apps built to scale.',
    tagline: 'High-performance websites and web apps that turn visitors into customers.',
    intro: [
      'Your website is your hardest-working salesperson. We design and engineer business websites, e-commerce stores, portals and SaaS platforms that load instantly, look exceptional on every screen and are structured to rank.',
      'From a five-page company site to a multi-role web application with dashboards, payments and integrations, we build on modern, maintainable stacks so your product stays fast and easy to extend as you grow.',
    ],
    image: photos.dashboard,
    highlights: ['Custom design & clean code', 'Core Web Vitals–optimised', 'Secure, scalable architecture'],
    features: [
      { icon: LuZap, title: 'Blazing performance', text: 'Optimised assets, caching and code-splitting for sub-second loads and top Lighthouse scores.' },
      { icon: LuSmartphone, title: 'Mobile-first & responsive', text: 'Pixel-perfect layouts that adapt beautifully from phones to ultra-wide displays.' },
      { icon: LuSearch, title: 'SEO-ready foundation', text: 'Semantic markup, structured data, clean URLs and metadata baked in from day one.' },
      { icon: LuShoppingCart, title: 'E-commerce & payments', text: 'Product catalogues, carts, secure checkout and gateway integrations that convert.' },
      { icon: LuShieldCheck, title: 'Secure by default', text: 'HTTPS, input validation, role-based access and regular dependency updates.' },
      { icon: LuLayoutDashboard, title: 'Dashboards & portals', text: 'Admin panels, client portals and analytics views tailored to your workflow.' },
    ],
    includes: [
      'Discovery workshop & sitemap',
      'UI design & interactive prototype',
      'Responsive front-end development',
      'Back-end & API development',
      'CMS or admin panel integration',
      'Analytics, tracking & SEO setup',
      'Cross-browser & device testing',
      'Deployment, training & handover',
    ],
    tools: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Stripe', 'AWS / Vercel'],
    steps: [
      { title: 'Plan', text: 'Goals, audience, sitemap and technical scope agreed up front.' },
      { title: 'Design', text: 'Wireframes and high-fidelity screens you review before any code.' },
      { title: 'Build', text: 'Agile sprints with a live staging link so you see progress weekly.' },
      { title: 'Launch', text: 'QA, performance tuning, go-live and post-launch support.' },
    ],
    faqs: [
      { q: 'How long does a website take to build?', a: 'A typical business website takes 3–5 weeks. E-commerce stores and custom web apps are scoped in milestones, usually 8–16 weeks.' },
      { q: 'Which technologies do you use?', a: 'We mostly build with React, Next.js, TypeScript and Node.js, and choose the right database and hosting for your needs. WordPress and headless CMS options are available too.' },
      { q: 'Will my website be optimised for search engines?', a: 'Yes. Every build includes technical SEO: semantic HTML, fast load times, schema markup, sitemaps and clean metadata.' },
    ],
    metrics: [
      { value: 98, suffix: '/100', label: 'Average Lighthouse score' },
      { value: 3, suffix: ' wks', label: 'Typical launch time' },
      { value: 120, suffix: '+', label: 'Projects delivered' },
    ],
    category: 'Web',
  },
  {
    slug: 'mobile-app-development',
    art: 'app',
    tint: 'azure',
    icon: LuSmartphone,
    title: 'Mobile App Development',
    description: 'Native & cross-platform iOS and Android apps built for real users.',
    tagline: 'Mobile apps people love to open — on iOS, Android, or both.',
    intro: [
      'We turn ideas into polished mobile products. Whether you need a customer-facing app, an internal field-service tool or the first version of a startup MVP, we handle strategy, design, engineering and store launch.',
      'Using cross-platform technology where it makes sense and native code where it matters, we ship apps that feel fast, behave consistently and are easy to evolve release after release.',
    ],
    image: photos.app,
    highlights: ['iOS & Android from one codebase', 'Offline-first & push notifications', 'App Store & Play Store launch'],
    features: [
      { icon: LuSmartphone, title: 'Cross-platform apps', text: 'React Native builds that share logic across iOS and Android without feeling generic.' },
      { icon: LuBell, title: 'Push notifications', text: 'Targeted, timely messaging that brings users back without being intrusive.' },
      { icon: LuRefreshCw, title: 'Offline & sync', text: 'Apps that keep working on poor connections and sync safely when back online.' },
      { icon: LuLock, title: 'Secure authentication', text: 'Biometric login, token handling and encrypted storage for sensitive data.' },
      { icon: LuCloud, title: 'Cloud back-end', text: 'Scalable APIs, databases and file storage designed for growing user bases.' },
      { icon: LuGauge, title: 'Smooth performance', text: '60fps animations, small bundle sizes and careful memory usage.' },
    ],
    includes: [
      'Product discovery & user flows',
      'UI/UX design for iOS & Android',
      'App development & API integration',
      'Payments, maps & third-party SDKs',
      'Admin dashboard for your team',
      'Device & OS compatibility testing',
      'App Store / Play Store submission',
      'Post-launch monitoring & updates',
    ],
    tools: ['React Native', 'Expo', 'Swift', 'Kotlin', 'TypeScript', 'Firebase', 'Node.js', 'GraphQL'],
    steps: [
      { title: 'Define', text: 'Validate the idea, map user journeys and prioritise an MVP scope.' },
      { title: 'Design', text: 'Native-feeling interfaces and clickable prototypes tested with real users.' },
      { title: 'Develop', text: 'Iterative builds delivered through TestFlight and internal tracks.' },
      { title: 'Release', text: 'Store submission, analytics set-up and a roadmap for version two.' },
    ],
    faqs: [
      { q: 'Should I build native or cross-platform?', a: 'For most products, cross-platform (React Native) offers the best balance of speed, cost and quality. We recommend native only when you need deep platform-specific features.' },
      { q: 'How long does it take to build an app?', a: 'An MVP typically takes 8–12 weeks. Larger apps with complex back-ends are planned in phases so you can launch early and iterate.' },
      { q: 'Do you handle publishing to the app stores?', a: 'Yes. We prepare store listings, screenshots and compliance requirements, and manage the submission and review process for you.' },
    ],
    metrics: [
      { value: 4.8, suffix: '★', decimals: 1, label: 'Average store rating' },
      { value: 10, suffix: ' wks', label: 'Typical MVP timeline' },
      { value: 25, suffix: '+', label: 'Apps shipped' },
    ],
    category: 'App',
  },
  {
    slug: 'cms-development',
    art: 'cms',
    tint: 'teal',
    icon: LuLayers,
    title: 'CMS Development',
    description: 'WordPress, headless and custom CMS so your team can update content easily.',
    tagline: 'Take control of your content — no developer needed for everyday updates.',
    intro: [
      'A great website should be easy to run. We set up content management systems that let your marketing team publish pages, blogs, products and landing pages in minutes — without breaking the design.',
      'Whether you prefer the familiarity of WordPress, the flexibility of a headless CMS such as Strapi or Sanity, or a fully custom admin panel, we architect the content model around the way your team actually works.',
    ],
    image: photos.cms,
    highlights: ['WordPress, headless & custom CMS', 'Reusable page-builder blocks', 'Roles, workflows & multi-language'],
    features: [
      { icon: LuFileText, title: 'Flexible content models', text: 'Pages, posts, products and custom types structured to match your business.' },
      { icon: LuLayers, title: 'Reusable blocks', text: 'A library of design-approved sections editors can mix and match safely.' },
      { icon: LuUsers, title: 'Roles & permissions', text: 'Writers, editors and admins with the right access and approval workflows.' },
      { icon: LuGlobe, title: 'Multi-language ready', text: 'Publish in several languages and regions from a single dashboard.' },
      { icon: LuZap, title: 'Headless performance', text: 'Decoupled front-ends that load fast and scale on global CDNs.' },
      { icon: LuDatabase, title: 'Migrations & integrations', text: 'Move legacy content safely and connect CRM, email and analytics tools.' },
    ],
    includes: [
      'Content audit & information architecture',
      'CMS selection & content modelling',
      'Custom theme or front-end build',
      'Page-builder / block library',
      'Content migration from old site',
      'Editor training & documentation',
      'Backups, security & updates',
      'Ongoing maintenance plans',
    ],
    tools: ['WordPress', 'Strapi', 'Sanity', 'Contentful', 'Next.js', 'PHP', 'MySQL', 'GraphQL'],
    steps: [
      { title: 'Audit', text: 'Review existing content, workflows and pain points.' },
      { title: 'Model', text: 'Design the content structure and editor experience.' },
      { title: 'Build', text: 'Develop the CMS, front-end and integrations.' },
      { title: 'Train', text: 'Migrate content, train your team and support go-live.' },
    ],
    faqs: [
      { q: 'WordPress or headless CMS — which is better?', a: 'WordPress suits content-led sites that need a rich plugin ecosystem. A headless CMS is ideal when you want maximum speed, custom front-ends or to publish to multiple channels.' },
      { q: 'Can you migrate content from my existing site?', a: 'Yes. We map and import pages, posts, media and redirects so you keep your SEO equity during the move.' },
      { q: 'Will my team be trained?', a: 'Every CMS project includes training sessions and written guides, so your team feels confident publishing from day one.' },
    ],
    metrics: [
      { value: 70, suffix: '%', label: 'Faster content publishing' },
      { value: 40, suffix: '+', label: 'CMS sites delivered' },
      { value: 100, suffix: '%', label: 'Editor-friendly handovers' },
    ],
    category: 'CMS',
  },
  {
    slug: 'graphic-design',
    art: 'graphic',
    tint: 'leaf',
    icon: LuPalette,
    title: 'Graphic Design',
    description: 'Logos, brand identities and creatives that make your business memorable.',
    tagline: 'Brand identities and creatives that make people remember you.',
    intro: [
      'Design is how your business is recognised before a single word is read. We craft logos, brand systems and marketing creatives that express who you are and stay consistent across every touchpoint.',
      'From a fresh start-up identity to a full rebrand with guidelines, packaging and social templates, our designers combine strategy and craft to give your brand a confident, distinctive look.',
    ],
    image: photos.palette,
    highlights: ['Logo & complete brand identity', 'Print, packaging & social creatives', 'Brand guidelines you can reuse'],
    features: [
      { icon: LuPenTool, title: 'Logo design', text: 'Distinctive, scalable marks developed through research and sketching.' },
      { icon: LuPalette, title: 'Brand identity systems', text: 'Colour, typography, iconography and tone of voice that work together.' },
      { icon: LuImage, title: 'Social & ad creatives', text: 'Scroll-stopping posts, banners and campaign visuals in your brand style.' },
      { icon: LuType, title: 'Typography & layout', text: 'Editorial-quality brochures, decks and catalogues with clear hierarchy.' },
      { icon: LuBrush, title: 'Packaging & print', text: 'Labels, boxes, stationery and signage ready for professional printing.' },
      { icon: LuFileText, title: 'Brand guidelines', text: 'A clear playbook so every team and vendor uses your brand correctly.' },
    ],
    includes: [
      'Brand discovery & moodboards',
      'Logo concepts & refinements',
      'Colour palette & typography',
      'Business cards & stationery',
      'Social media templates',
      'Brochure, deck & catalogue design',
      'Packaging & label design',
      'Full source files & brand guide',
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'After Effects', 'Procreate'],
    steps: [
      { title: 'Discover', text: 'Understand your audience, competitors and personality.' },
      { title: 'Concept', text: 'Explore directions and present the strongest ideas.' },
      { title: 'Refine', text: 'Iterate with your feedback until it feels exactly right.' },
      { title: 'Deliver', text: 'Hand over final files, guidelines and ready-to-use assets.' },
    ],
    faqs: [
      { q: 'How many logo concepts will I receive?', a: 'We typically present 2–3 well-researched concepts, then refine your chosen direction through up to three revision rounds.' },
      { q: 'Do I get the source files?', a: 'Yes. You receive all final files — vector, print-ready and web formats — along with the brand guidelines.' },
      { q: 'Can you redesign an existing brand?', a: 'Absolutely. We run a brand audit first, then evolve or fully reinvent the identity depending on your goals.' },
    ],
    metrics: [
      { value: 300, suffix: '+', label: 'Designs delivered' },
      { value: 45, suffix: '%', label: 'Average brand-recall lift' },
      { value: 40, suffix: '+', label: 'Brands created' },
    ],
    category: 'Design',
  },
  {
    slug: 'ui-ux-design',
    art: 'uiux',
    tint: 'azure',
    icon: LuMousePointerClick,
    title: 'UI / UX Design',
    description: 'Research-led interfaces and prototypes that feel effortless and convert.',
    tagline: 'Interfaces people understand instantly — and products they keep using.',
    intro: [
      'Good UX removes friction; great UI makes it a pleasure. We combine user research, information architecture and visual design to create web and mobile interfaces that are clear, accessible and on-brand.',
      'We work in Figma with interactive prototypes and design systems, so stakeholders can experience the product before development starts and developers receive pixel-perfect, well-documented specs.',
    ],
    image: photos.wireframe,
    highlights: ['User research & usability testing', 'Design systems in Figma', 'Accessible, conversion-focused UI'],
    features: [
      { icon: LuUsers, title: 'User research', text: 'Interviews, surveys and competitor analysis to ground every decision in evidence.' },
      { icon: LuLayoutDashboard, title: 'Wireframes & flows', text: 'Clear user journeys and low-fidelity layouts to validate structure early.' },
      { icon: LuMousePointerClick, title: 'Interactive prototypes', text: 'Clickable prototypes that feel real, ready for stakeholder and user testing.' },
      { icon: LuLayers, title: 'Design systems', text: 'Reusable components and tokens that keep products consistent as they scale.' },
      { icon: LuTarget, title: 'Conversion optimisation', text: 'Layouts and microcopy refined with heatmaps and A/B test insights.' },
      { icon: LuShieldCheck, title: 'Accessibility', text: 'WCAG-aware colour, contrast, focus states and semantic structure.' },
    ],
    includes: [
      'Stakeholder & user interviews',
      'Personas & journey maps',
      'Information architecture',
      'Wireframes & user flows',
      'High-fidelity UI design',
      'Clickable prototype',
      'Design system & component library',
      'Developer handoff & QA support',
    ],
    tools: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Lottie', 'Storybook', 'Notion'],
    steps: [
      { title: 'Research', text: 'Learn how users think, behave and what blocks them.' },
      { title: 'Structure', text: 'Map flows and wireframe the experience.' },
      { title: 'Design', text: 'Craft polished UI and an interactive prototype.' },
      { title: 'Validate', text: 'Test with users, refine and hand off to development.' },
    ],
    faqs: [
      { q: 'What is the difference between UI and UX?', a: 'UX is how a product works — the flows, structure and usability. UI is how it looks — colour, typography and visual details. Great products need both.' },
      { q: 'Can you redesign my existing app or website?', a: 'Yes. We audit the current experience, find where users drop off and redesign the highest-impact areas first.' },
      { q: 'Will developers receive design specs?', a: 'Every project ends with a structured Figma file, component library and spacing/typography guidelines, and we support your developers during implementation.' },
    ],
    metrics: [
      { value: 38, suffix: '%', label: 'Average conversion uplift' },
      { value: 60, suffix: '+', label: 'Products designed' },
      { value: 95, suffix: '%', label: 'Usability test pass rate' },
    ],
    category: 'UI/UX',
  },
  {
    slug: 'digital-marketing',
    art: 'marketing',
    tint: 'teal',
    icon: LuMegaphone,
    title: 'Digital Marketing',
    description: 'SEO, performance ads and social campaigns that bring customers to you.',
    tagline: 'Measurable campaigns that bring the right customers to your door.',
    intro: [
      'A beautiful product still needs an audience. Our marketing team plans and runs SEO, paid advertising, social media and email campaigns that attract qualified traffic and turn it into leads and sales.',
      'Everything is tracked against clear goals — cost per lead, revenue, rankings — and reported monthly in plain language, so you always know what is working and where the next opportunity lies.',
    ],
    image: photos.marketing,
    highlights: ['SEO, ads & social media', 'Transparent monthly reporting', 'Strategy built around your goals'],
    features: [
      { icon: LuSearch, title: 'Search engine optimisation', text: 'Technical fixes, content strategy and link building that grow organic rankings.' },
      { icon: LuTarget, title: 'Performance advertising', text: 'Google and Meta ad campaigns optimised for leads and return on spend.' },
      { icon: LuShare2, title: 'Social media management', text: 'Content calendars, creatives and community management that build an audience.' },
      { icon: LuMail, title: 'Email marketing', text: 'Automations and newsletters that nurture leads and bring customers back.' },
      { icon: LuFileText, title: 'Content marketing', text: 'Blogs, case studies and landing pages that answer buyer questions.' },
      { icon: LuTrendingUp, title: 'Analytics & reporting', text: 'Dashboards and monthly insights that connect marketing to revenue.' },
    ],
    includes: [
      'Marketing audit & goal setting',
      'Keyword & competitor research',
      'On-page & technical SEO',
      'Google Ads & Meta Ads management',
      'Social media content & posting',
      'Email campaigns & automations',
      'Landing-page optimisation',
      'Monthly performance reports',
    ],
    tools: ['Google Analytics', 'Search Console', 'Google Ads', 'Meta Ads', 'SEMrush', 'Mailchimp', 'HubSpot', 'Looker Studio'],
    steps: [
      { title: 'Audit', text: 'Benchmark your current channels, competitors and opportunities.' },
      { title: 'Strategise', text: 'Set goals, pick channels and plan a content calendar.' },
      { title: 'Execute', text: 'Launch campaigns, publish content and optimise weekly.' },
      { title: 'Report', text: 'Share clear results and double down on what works.' },
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Technical fixes can lift performance within weeks, while competitive keywords typically take 3–6 months of consistent effort.' },
      { q: 'Do you manage ad budgets?', a: 'Yes. You set the budget and we manage targeting, creatives, bidding and optimisation, with full transparency on where every rupee goes.' },
      { q: 'How will I know the campaigns are working?', a: 'You receive a monthly report covering traffic, leads, cost per lead and revenue, plus a call to discuss next steps.' },
    ],
    metrics: [
      { value: 3.2, suffix: 'x', decimals: 1, label: 'Average campaign ROI' },
      { value: 248, suffix: '%', label: 'Peak organic traffic growth' },
      { value: 50, suffix: '+', label: 'Campaigns run' },
    ],
    category: 'Marketing',
  },
]

export const getService = (slug: string | undefined) => services.find((s) => s.slug === slug)
