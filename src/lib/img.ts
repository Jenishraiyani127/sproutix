/** Unsplash photo helper — swap these IDs for real brand photography later. */
export const unsplash = (id: string, w = 800, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ''}`

export const photos = {
  // workspaces & teams
  dashboard: '1460925895917-afdab827c52f',
  meeting: '1552664730-d307ca884978',
  laughing: '1522202176988-66273c2fd55f',
  teamLaptop: '1531482615713-2afd69097998',
  code: '1542831371-29b0f74f9713',
  codeLaptop: '1555066931-4365d14bab8c',
  palette: '1561070791-2526d30994b5',
  strategy: '1533750349088-cd871a92f312',
  wireframe: '1432888498266-38ffec3eaf0a',
  analytics: '1551288049-bebda4e38f71',
  webLaptop: '1556155092-490a1ba16284',
  app: '1551650975-87deedd944c3',
  cms: '1547658719-da2b51169166',
  marketing: '1557804506-669a67965ba0',
  pointing: '1516321318423-f06f85e504b3',
  codeDesk: '1498050108023-c5249f4df085',
  // portraits
  p1: '1507003211169-0a1dd7228f2d',
  p2: '1494790108377-be9c29b29330',
  p3: '1500648767791-00dcc994a43e',
  p4: '1438761681033-6461ffad8d80',
  p5: '1580489944761-15a19d654956',
  p6: '1535713875002-d1d0cf377fde',
  p7: '1544005313-94ddf0286df2',
  p8: '1531746020798-e6953c6e8e04',
} as const

/** Square avatar from a raw Unsplash photo id (used by data files). */
export const avatarUrl = (id: string, size = 96) => unsplash(id, size, size)

export const avatar =(key: keyof typeof photos, size = 120) => unsplash(photos[key], size, size)
