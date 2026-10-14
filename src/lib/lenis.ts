import type Lenis from 'lenis'

let instance: Lenis | null = null

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis
}

/** Jump to the top instantly (used on route change) — works with or without Lenis. */
export const scrollToTop = () => {
  if (instance) instance.scrollTo(0, { immediate: true, force: true })
  else window.scrollTo(0, 0)
}
