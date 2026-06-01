'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useTheme } from '@/lib/theme/ThemeProvider'
import { Logo } from '@/components/layout/Logo'
import { cn } from '@/lib/utils/cn'

const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Approach', href: '/approach' },
  { label: 'Insights', href: '/insights' },
]

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const MOBILE_SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [hoveredHref, setHover] = useState<string | null>(null)
  const lastScrollY = useMotionValue(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const prev = lastScrollY.get()
      setScrolled(y > 20)
      setHidden(y > 80 && y > prev + 10)
      if (y < prev - 5) setHidden(false)
      lastScrollY.set(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          scrolled
            ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-transparent'
        )}
        style={{ transition: 'background-color 0.3s ease, border-color 0.3s ease' }}
      >
        <div className="container-mass">
          <nav className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Logo iconSize={32} fontSize={20} />

            {/* Desktop nav */}
            <ul
              className="hidden md:flex items-center justify-center"
              style={{ gap: 'clamp(4px, 2vw, 8px)' }}
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href + '/')
                const highlight = active || hoveredHref === href

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onMouseEnter={() => setHover(href)}
                      onMouseLeave={() => setHover(null)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: highlight ? 600 : 400,
                        fontSize: highlight ? '1rem' : '0.9375rem',
                        color: highlight ? 'var(--color-text)' : 'var(--color-muted)',
                        transition: 'font-size 0.2s ease, font-weight 0.15s ease, color 0.2s ease',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {/* ✦ appears on hover or active */}
                      <AnimatePresence initial={false}>
                        {highlight && (
                          <motion.span
                            key="sparkle"
                            initial={{ opacity: 0, x: -6, scale: 0.5 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -6, scale: 0.5 }}
                            transition={{ duration: 0.18, ease: [0.7, 0, 0.3, 1] }}
                            style={{ fontSize: '9px', lineHeight: 1, flexShrink: 0 }}
                          >
                            ✦
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Right: theme + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggle}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)] transition-colors duration-200"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <Link href="/contact" className="btn-primary text-sm py-2 px-5">
                Let&apos;s Build
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--color-muted)]"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Open menu"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--color-text)]"
              >
                <Menu size={20} />
              </button>
            </div>

          </nav>
        </div>
      </motion.header>

      {/* Full-screen dark mobile menu — slides in from right */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{
              background: '#0A0A0A',
              fontFamily: 'var(--font-display)',
              color: '#ffffff',
            }}
          >
            {/* Close button — top right, circular */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#ffffff',
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>

            {/* Menu content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '80px 32px 48px',
              }}
            >
              {/* "Menu" label + divider */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: '16px',
                }}
              >
                Menu
              </motion.p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.12, ease: [0.7, 0, 0.3, 1] }}
                style={{
                  height: '1px',
                  background: 'rgba(255,255,255,0.12)',
                  marginBottom: '32px',
                  transformOrigin: 'left',
                }}
              />

              {/* Nav links */}
              <nav style={{ flex: 1 }}>
                {MOBILE_NAV_LINKS.map(({ label, href }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1], delay: 0.15 + i * 0.055 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        fontSize: 'clamp(2rem, 9vw, 3rem)',
                        fontWeight: 400,
                        color: pathname === href || pathname.startsWith(href + '/') && href !== '/'
                          ? 'rgba(255,255,255,1)'
                          : 'rgba(255,255,255,0.85)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                        paddingBottom: '4px',
                        marginBottom: '4px',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom divider + social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div
                  style={{
                    height: '1px',
                    background: 'rgba(255,255,255,0.12)',
                    marginBottom: '24px',
                  }}
                />
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                  {MOBILE_SOCIAL_LINKS.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.5)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
