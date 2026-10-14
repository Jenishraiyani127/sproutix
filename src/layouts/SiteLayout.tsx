import { MotionConfig, motion } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { scrollToTop, setLenis } from '../lib/lenis'

/** Shared chrome for every page: skip link, nav, smooth scroll, page transition, footer. */
export function SiteLayout() {
  const { pathname, hash } = useLocation()

  // Inertia ("buttery") scrolling + smooth anchor jumps, skipped for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -80 } })
    setLenis(lenis)
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    })
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  // New page → start at the top (unless the URL points at an on-page anchor).
  useEffect(() => {
    if (!hash) scrollToTop()
  }, [pathname, hash])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </MotionConfig>
  )
}
