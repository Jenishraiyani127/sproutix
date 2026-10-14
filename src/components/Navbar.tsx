import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { LuArrowRight, LuChevronDown, LuMenu, LuX } from 'react-icons/lu'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { services } from '../data/services'
import { ease } from '../lib/motion'
import { routes } from '../lib/routes'
import { Logo } from './Logo'
import { Button } from './ui'

const links = [
  { label: 'Home', to: routes.home, end: true },
  { label: 'About', to: routes.about },
  { label: 'Services', to: routes.services, menu: true },
  { label: 'Portfolio', to: routes.portfolio },
  { label: 'Blog', to: routes.blog },
  { label: 'Contact', to: routes.contact },
]

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-azure-50 text-azure-700' : 'text-navy-600 hover:bg-azure-50 hover:text-azure-700'
  }`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  // Menus are tied to the page they were opened on, so they close automatically on navigation.
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState<string | null>(null)
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const [mobileServicesPath, setMobileServicesPath] = useState<string | null>(null)
  const open = openPath === pathname
  const menu = menuPath === pathname
  const mobileServices = mobileServicesPath === pathname
  const setOpen = (v: boolean | ((x: boolean) => boolean)) => setOpenPath((cur) => ((typeof v === 'function' ? v(cur === pathname) : v) ? pathname : null))
  const setMenu = (v: boolean) => setMenuPath(v ? pathname : null)
  const setMobileServices = (v: boolean | ((x: boolean) => boolean)) => setMobileServicesPath((cur) => ((typeof v === 'function' ? v(cur === pathname) : v) ? pathname : null))
  const closeTimer = useRef<number>(0)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (setMenuPath(null), setOpenPath(null))
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openMenu = () => {
    window.clearTimeout(closeTimer.current)
    setMenu(true)
  }
  const closeMenu = () => {
    closeTimer.current = window.setTimeout(() => setMenu(false), 120)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-navy-100/70 bg-white/85 shadow-soft backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-brand-gradient"
      />
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            l.menu ? (
              <li
                key={l.to}
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={closeMenu}
                onFocus={openMenu}
                onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && closeMenu()}
              >
                <NavLink to={l.to} className={(s) => `${desktopLink(s)} inline-flex items-center gap-1`}>
                  {l.label}
                  <LuChevronDown size={14} className={`transition-transform duration-300 ${menu ? 'rotate-180' : ''}`} />
                </NavLink>

                <AnimatePresence>
                  {menu && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.25, ease }}
                      className="absolute top-full left-1/2 w-[40rem] -translate-x-1/2 pt-3"
                    >
                      <div className="overflow-hidden rounded-3xl border border-navy-100/80 bg-white p-3 shadow-lift">
                        <ul className="grid grid-cols-2 gap-1">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to={routes.service(s.slug)}
                                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-azure-50"
                              >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white transition-transform group-hover:-rotate-6 group-hover:scale-110">
                                  <s.icon size={18} />
                                </span>
                                <span>
                                  <span className="block text-sm font-bold text-navy-900">{s.title}</span>
                                  <span className="mt-0.5 block text-xs leading-snug text-navy-500">{s.description}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={routes.services}
                          className="group mt-2 flex items-center justify-between rounded-2xl bg-navy-50/80 px-4 py-3 text-sm font-semibold text-azure-700 transition-colors hover:bg-azure-50"
                        >
                          View all services
                          <LuArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} className={desktopLink}>
                  {l.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="hidden lg:block">
          <Button href={routes.contact} className="!px-5 !py-2.5">
            Get a free quote
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 bg-white text-navy-800 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[calc(100vh-72px)] overflow-y-auto lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-2 pb-6 sm:px-8">
              {links.map((l) => (
                <li key={l.to}>
                  {l.menu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileServices((v) => !v)}
                        aria-expanded={mobileServices}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-navy-700 hover:bg-azure-50"
                      >
                        {l.label}
                        <LuChevronDown className={`transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServices && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3"
                          >
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to={routes.service(s.slug)}
                                  className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-navy-600 hover:bg-azure-50"
                                >
                                  <s.icon className="text-azure-600" /> {s.title}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link to={routes.services} className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-azure-700">
                                View all services →
                              </Link>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={l.to}
                      end={l.end}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 font-medium hover:bg-azure-50 ${isActive ? 'bg-azure-50 text-azure-700' : 'text-navy-700'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="pt-3">
                <Button href={routes.contact} className="w-full">
                  Get a free quote
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
