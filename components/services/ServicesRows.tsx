'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SERVICES } from '@/lib/data/services'

const PRICE = ['From $499', 'From $500', 'From $12,000']
const TIME = ['1–2 weeks', '1–12 weeks', '8–24 weeks']
const PANEL_BG = [
  'linear-gradient(140deg, #0B1622 0%, #0D2235 100%)',
  'linear-gradient(140deg, #0F1A10 0%, #182B18 100%)',
  'linear-gradient(140deg, #15100F 0%, #2B1A17 100%)',
]
const PANEL_LABEL = ['AI', 'Web', 'App']

export function ServicesRows() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActive] = useState(0)
  const [isMobile, setMobile] = useState(false)

  /* Responsive breakpoint */
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* Scroll-driven service switching — same logic as ServicePillars */
  useEffect(() => {
    if (isMobile) return
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      const segH = rect.height / SERVICES.length
      const idx = Math.min(Math.max(0, Math.floor(scrolled / segH)), SERVICES.length - 1)
      setActive(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  const active = SERVICES[activeIndex]

  /* ── Desktop: 300 vh sticky scroll ── */
  if (!isMobile) return (
    <section aria-label="Services">
      <div
        ref={sectionRef}
        style={{ height: `${SERVICES.length * 100}vh` }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderTop: '1px solid var(--color-border)',
            overflow: 'hidden',
          }}
        >

          {/* ── Left: text content ── */}
          <div
            style={{
              paddingLeft: 'clamp(24px, 5vw, 80px)',
              paddingRight: '64px',
              paddingTop: '80px',
              paddingBottom: '64px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRight: '1px solid var(--color-border)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
                  {active.tagline.toUpperCase()}
                </p>

                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.0,
                    marginBottom: '28px',
                  }}
                >
                  {active.title}
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.75,
                    maxWidth: '440px',
                    marginBottom: '32px',
                  }}
                >
                  {active.description}
                </p>

                {/* 2-column bullet list — matches brandium */}
                <ul
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px 24px',
                    marginBottom: '40px',
                    listStyle: 'none',
                  }}
                >
                  {active.bullets.map((b) => (
                    <li key={b} style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-accent)' }}>
                    {PRICE[activeIndex]} · {TIME[activeIndex]}
                  </span>
                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: 'var(--color-text)',
                      borderBottom: '1px solid var(--color-border)',
                      paddingBottom: '2px',
                    }}
                  >
                    Explore {active.title}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '32px' }}>
              {SERVICES.map((s, i) => (
                <div
                  key={s.slug}
                  style={{
                    height: '3px',
                    width: i === activeIndex ? '40px' : '12px',
                    borderRadius: '2px',
                    background: i === activeIndex ? 'var(--color-accent)' : 'var(--color-border)',
                    transition: 'width 0.35s ease, background 0.35s ease',
                  }}
                />
              ))}
              <span className="label" style={{ marginLeft: '8px', color: 'var(--color-muted)', opacity: 0.6 }}>
                {String(activeIndex + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* ── Right: dark visual panel, full-bleed ── */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.7) 100%), url(${activeIndex === 0 ? '/ai_ser.webp' : activeIndex === 1 ? '/web_ser.webp' : '/mob_ser.webp'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Ghost display text */}
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(120px, 18vw, 260px)',
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.06,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {PANEL_LABEL[activeIndex]}
                </span>

                {/* Centred icon */}
                <div
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '20px',
                      background: 'rgba(59,130,246,0.15)',
                      border: '1px solid rgba(59,130,246,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {(() => {
                      const Icon = active.icon
                      return <Icon size={32} style={{ color: '#3B82F6' }} />
                    })()}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {active.title}
                  </span>
                </div>

                {/* Ghost service number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '48px',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(100px, 14vw, 180px)',
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.04,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    userSelect: 'none',
                  }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>

                {/* Pricing bottom-left */}
                <div style={{ position: 'absolute', bottom: '36px', left: '40px' }}>
                  <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Starting from</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.03em' }}>
                    {PRICE[activeIndex]}
                  </p>
                </div>

                {/* Delivery bottom-right */}
                <div style={{ position: 'absolute', bottom: '36px', right: '40px', textAlign: 'right' }}>
                  <p className="label" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>Delivered in</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '-0.03em' }}>
                    {TIME[activeIndex]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )

  /* ── Mobile: stacked cards ── */
  return (
    <section aria-label="Services" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container-mass" style={{ paddingBottom: '80px' }}>
        {SERVICES.map((s, i) => (
          <div
            key={s.slug}
            style={{
              borderBottom: '1px solid var(--color-border)',
              paddingTop: '40px',
              paddingBottom: '40px',
            }}
          >
            <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '12px' }}>
              {s.tagline.toUpperCase()}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 9vw, 3rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '16px',
              }}
            >
              {s.title}
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
              {s.description}
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', listStyle: 'none' }}>
              {s.bullets.map((b) => (
                <li key={b} style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>{b}</li>
              ))}
            </ul>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '16px' }}>
              {PRICE[i]} · {TIME[i]}
            </p>
            <Link
              href={s.href}
              className="group inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text)' }}
            >
              Explore {s.title}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
