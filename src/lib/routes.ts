export const routes = {
  home: '/',
  about: '/about',
  services: '/services',
  service: (slug: string) => `/services/${slug}`,
  portfolio: '/portfolio',
  project: (slug: string) => `/portfolio/${slug}`,
  blog: '/blog',
  post: (slug: string) => `/blog/${slug}`,
  careers: '/careers',
  contact: '/contact',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
} as const
