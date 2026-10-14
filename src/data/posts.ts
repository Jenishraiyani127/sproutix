import { photos } from '../lib/img'

/* Sample articles — edit or replace with your own editorial content. */

export type PostCategory = 'Web' | 'Design' | 'Marketing' | 'App' | 'Business'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; by?: string }

export interface Post {
  slug: string
  title: string
  excerpt: string
  category: PostCategory
  date: string
  readTime: string
  author: { name: string; role: string; avatar: string }
  cover: string
  body: Block[]
}

const authors = {
  aarav: { name: 'Aarav Desai', role: 'Founder & CEO', avatar: photos.p3 },
  meera: { name: 'Meera Iyer', role: 'Head of Design', avatar: photos.p4 },
  kabir: { name: 'Kabir Malhotra', role: 'Lead Engineer', avatar: photos.p1 },
  nisha: { name: 'Nisha Verma', role: 'Marketing Lead', avatar: photos.p5 },
}

export const posts: Post[] = [
  {
    slug: 'website-redesign-checklist',
    title: 'The Website Redesign Checklist: 12 Things to Get Right Before You Launch',
    excerpt: 'A redesign can lift conversions — or quietly destroy your search rankings. Use this checklist to avoid the common mistakes.',
    category: 'Web',
    date: '2026-09-18',
    readTime: '7 min read',
    author: authors.kabir,
    cover: photos.webLaptop,
    body: [
      { type: 'p', text: 'A website redesign is one of the highest-leverage projects a business can undertake. It is also one of the easiest to get wrong. Beautiful new pages that lose their search rankings, break old links or confuse returning customers can set growth back by months.' },
      { type: 'h2', text: 'Start with the why' },
      { type: 'p', text: 'Before opening a design tool, write down the measurable outcome you want: more enquiries, higher checkout conversion, faster load times, lower support load. Every later decision becomes easier when it is tied to a number.' },
      { type: 'h2', text: 'Protect what already works' },
      { type: 'ul', items: ['Export your top-performing pages and keywords from Search Console.', 'Map every old URL to its new equivalent with 301 redirects.', 'Keep the content that already earns traffic and conversions.', 'Record baseline speed, traffic and conversion metrics.'] },
      { type: 'h2', text: 'Build for speed and clarity' },
      { type: 'p', text: 'Compress images, lazy-load media below the fold, and keep scripts lean. A page that loads in under two seconds routinely outperforms a visually richer one that takes six. Pair that with a clear value proposition above the fold and one obvious call to action.' },
      { type: 'quote', text: 'A redesign is not a coat of paint. It is a chance to rebuild the way your business is found, understood and chosen.', by: 'Kabir Malhotra' },
      { type: 'h2', text: 'Test before you launch' },
      { type: 'ul', items: ['Test forms, checkout and tracking on real devices.', 'Run an accessibility and Core Web Vitals audit.', 'Check meta titles, descriptions and structured data.', 'Verify analytics and conversion events fire correctly.'] },
      { type: 'p', text: 'Finally, plan the launch for a quieter period, monitor Search Console and analytics daily for the first two weeks, and fix issues quickly. A calm, measured launch protects the growth you have already earned.' },
    ],
  },
  {
    slug: 'brand-identity-for-startups',
    title: 'Brand Identity for Startups: What You Actually Need on Day One',
    excerpt: 'You do not need a 100-page brand book to launch. Here is the lean identity toolkit that keeps early-stage brands consistent.',
    category: 'Design',
    date: '2026-09-04',
    readTime: '6 min read',
    author: authors.meera,
    cover: photos.palette,
    body: [
      { type: 'p', text: 'Early-stage founders often hear that branding is a luxury. In reality, a clear identity is one of the cheapest ways to look credible, build trust and make your marketing work harder. The trick is knowing what to build first.' },
      { type: 'h2', text: 'The essentials' },
      { type: 'ul', items: ['A simple, scalable logo with light and dark versions.', 'A primary and secondary colour palette with accessible contrast.', 'Two typefaces: one for headings, one for body text.', 'A short description of tone of voice — how you sound.'] },
      { type: 'h2', text: 'Consistency beats complexity' },
      { type: 'p', text: 'A modest identity applied consistently is far more memorable than an elaborate one used inconsistently. Create a small set of templates — social posts, a presentation deck, an email signature — so everyone on your team stays on brand without thinking.' },
      { type: 'quote', text: 'People forget logos quickly. They remember how consistently a brand shows up.', by: 'Meera Iyer' },
      { type: 'h2', text: 'When to invest further' },
      { type: 'p', text: 'As you grow into new products, markets or channels, expand the system with illustration styles, motion guidelines and packaging. Treat your identity as a living product that evolves with your business.' },
    ],
  },
  {
    slug: 'seo-basics-for-business-websites',
    title: 'SEO Basics Every Business Website Should Get Right',
    excerpt: 'You do not need a massive budget to rank. Master these fundamentals first and you will already be ahead of most competitors.',
    category: 'Marketing',
    date: '2026-08-22',
    readTime: '8 min read',
    author: authors.nisha,
    cover: photos.analytics,
    body: [
      { type: 'p', text: 'Search engine optimisation sounds complicated, but the fundamentals are surprisingly consistent: be easy to crawl, answer real questions well and earn trust. Get these three things right and the rest is refinement.' },
      { type: 'h2', text: 'Make your site easy to crawl' },
      { type: 'ul', items: ['Use a clean URL structure and an XML sitemap.', 'Ensure every important page is linked from somewhere sensible.', 'Fix broken links, redirect chains and duplicate pages.', 'Serve a fast, mobile-friendly experience.'] },
      { type: 'h2', text: 'Answer search intent' },
      { type: 'p', text: 'Each page should target one clear topic and satisfy the reason someone searched for it. Study what already ranks, then create something more useful, more current or better organised. Use descriptive headings and plain language.' },
      { type: 'h2', text: 'Earn trust' },
      { type: 'p', text: 'Reviews, case studies, author information and links from reputable sites all signal credibility. For local businesses, a complete and active Google Business Profile is often the single biggest win.' },
      { type: 'quote', text: 'SEO is not about tricking a search engine. It is about being the best answer to a real person’s question.', by: 'Nisha Verma' },
      { type: 'p', text: 'Track progress in Search Console and Analytics, review monthly, and keep improving the pages that already show promise. Consistency compounds.' },
    ],
  },
  {
    slug: 'native-vs-cross-platform-apps',
    title: 'Native vs Cross-Platform: Choosing the Right Approach for Your App',
    excerpt: 'React Native, Flutter or fully native? A practical guide to picking the approach that fits your budget, timeline and goals.',
    category: 'App',
    date: '2026-08-08',
    readTime: '6 min read',
    author: authors.kabir,
    cover: photos.app,
    body: [
      { type: 'p', text: 'One of the first decisions in any mobile project is how to build it. The right answer depends less on technology trends and more on your product, team and timeline.' },
      { type: 'h2', text: 'When cross-platform wins' },
      { type: 'ul', items: ['You need iOS and Android quickly and want to share most of the code.', 'Your app is content, commerce or workflow driven.', 'You are validating an MVP and expect to iterate often.', 'Budget is a key constraint.'] },
      { type: 'h2', text: 'When to go native' },
      { type: 'p', text: 'Choose fully native development when your app depends heavily on advanced hardware access, demanding graphics, or platform-specific behaviour that cross-platform tools cannot yet match well.' },
      { type: 'quote', text: 'The best technology is the one that gets a great product into users’ hands sooner — and keeps it maintainable.', by: 'Kabir Malhotra' },
      { type: 'h2', text: 'Our recommendation' },
      { type: 'p', text: 'For most businesses we recommend starting with React Native. It offers excellent performance, a large ecosystem and lower cost, and you can always move specific modules to native code later if needed.' },
    ],
  },
  {
    slug: 'ux-mistakes-that-kill-conversions',
    title: '7 UX Mistakes That Quietly Kill Your Conversion Rate',
    excerpt: 'Small friction points add up. Fix these common usability problems and watch more visitors become customers.',
    category: 'Design',
    date: '2026-07-24',
    readTime: '5 min read',
    author: authors.meera,
    cover: photos.wireframe,
    body: [
      { type: 'p', text: 'Most conversion problems are not caused by a lack of traffic. They are caused by small moments of confusion that make a visitor hesitate and leave. The good news: they are usually easy to fix.' },
      { type: 'h2', text: 'The usual suspects' },
      { type: 'ul', items: ['Unclear value proposition above the fold.', 'Too many competing calls to action.', 'Slow pages, especially on mobile.', 'Long forms asking for unnecessary information.', 'Low-contrast text and tiny tap targets.', 'Hidden pricing or delivery details.', 'No social proof near the decision point.'] },
      { type: 'h2', text: 'Fix with evidence' },
      { type: 'p', text: 'Use heatmaps, session recordings and a handful of quick user tests to see where people actually struggle. Prioritise fixes by impact and effort, then measure the change with an A/B test.' },
      { type: 'quote', text: 'If users have to think about how your interface works, you are already losing them.', by: 'Meera Iyer' },
    ],
  },
  {
    slug: 'how-to-choose-a-web-development-partner',
    title: 'How to Choose a Web Development Partner (Without Regretting It)',
    excerpt: 'Price matters, but it is rarely the deciding factor. Here are the questions that reveal whether an agency is the right fit.',
    category: 'Business',
    date: '2026-07-10',
    readTime: '6 min read',
    author: authors.aarav,
    cover: photos.meeting,
    body: [
      { type: 'p', text: 'Hiring a development partner is a long-term relationship, not a one-off purchase. The cheapest proposal can become the most expensive once delays, rework and missing features appear.' },
      { type: 'h2', text: 'Questions worth asking' },
      { type: 'ul', items: ['Can I see recent work similar to my project, and speak to those clients?', 'Who exactly will work on my project?', 'How do you handle changes in scope and timeline?', 'What happens after launch — support, hosting, updates?', 'Will I own the code and design files?'] },
      { type: 'h2', text: 'Look for communication, not just skill' },
      { type: 'p', text: 'Great agencies are transparent: weekly updates, a shared staging site, honest estimates and clear documentation. If communication is difficult during the sales process, it will not improve during delivery.' },
      { type: 'quote', text: 'You are not buying code. You are buying a partner who understands your business and keeps their promises.', by: 'Aarav Desai' },
      { type: 'p', text: 'Take your time, start with a small paid discovery phase if you are unsure, and choose the team you trust to be honest when things get difficult.' },
    ],
  },
]

export const getPost = (slug: string | undefined) => posts.find((p) => p.slug === slug)
export const postCategories: Array<'All' | PostCategory> = ['All', 'Web', 'App', 'Design', 'Marketing', 'Business']
