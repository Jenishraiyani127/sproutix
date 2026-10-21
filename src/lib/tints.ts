import type { Tint } from '../data/services'

export const tintColors: Record<Tint, { solid: string; bg: string }> = {
  azure: { solid: '#d4e5ff', bg: 'linear-gradient(160deg, #e3eeff 0%, #bfd7ff 100%)' },
  teal: { solid: '#c2f0f2', bg: 'linear-gradient(160deg, #daf7f8 0%, #9fe4e8 100%)' },
  leaf: { solid: '#e4d3ff', bg: 'linear-gradient(160deg, #f3ebff 0%, #cdb0ff 100%)' },
}
