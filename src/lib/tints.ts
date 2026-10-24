import type { Tint } from '../data/services'

export const tintColors: Record<Tint, { solid: string; bg: string }> = {
  azure: { solid: '#e2deff', bg: 'linear-gradient(160deg, #efecff 0%, #c8c0ff 100%)' },
  teal: { solid: '#ffdcd5', bg: 'linear-gradient(160deg, #fff1ee 0%, #ffbaad 100%)' },
  leaf: { solid: '#f1dcff', bg: 'linear-gradient(160deg, #faf0ff 0%, #e3bcff 100%)' },
}
