'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { SERVICES } from '@/lib/data/services'

export function ServicePillars() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const activeRef = useRef(0)           // tracks index without causing re-renders
  const [activeIndex, setActive] = useState(0)
  const [prevIndex, setPrev] = useState(0)
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = -rect.top
      const segH = sectionRef.current.offsetHeight / SERVICES.length
      const idx = Math.min(Math.max(0, Math.floor(scrolled / segH)), SERVICES.length - 1)
      if (idx !== activeRef.current) {
        setPrev(activeRef.current)
        activeRef.current = idx
        setActive(idx)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const active = SERVICES[activeIndex]
  const direction = activeIndex > prevIndex ? 1 : -1

  return (
    <div aria-label="Services">

      {/* Section label + heading */}
      <div className="container-mass" style={{ paddingTop: '128px', paddingBottom: '64px' }}>
        <motion.p
          className="label"
          style={{ color: 'var(--color-accent)', marginBottom: '16px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ✦ What we build
        </motion.p>
        <SplitHeading
          as="h2"
          scrollTrigger
          delay={0}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            color: 'var(--color-text)',
            maxWidth: '560px',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Three ways we help your business grow.
        </SplitHeading>
      </div>

      {/* Desktop: sticky scroll */}
      {!isMobile ? (
        <div
          ref={sectionRef}
          style={{ height: `${SERVICES.length * 100}vh` }}
        >
          <div
            style={{
              position: 'sticky',
              top: '80px',
              height: 'calc(100vh - 80px)',
              display: 'grid',
              gridTemplateColumns: '5fr 7fr',
              borderTop: '1px solid var(--color-border)',
              overflow: 'hidden',
            }}
          >
            {/* Left: service text */}
            <div
              style={{
                borderRight: '1px solid var(--color-border)',
                padding: '56px 48px 48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, y: direction * 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction * -48 }}
                  transition={{ duration: 0.55, ease: [0.7, 0, 0.3, 1] }}
                  style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
                    {active.tagline.toUpperCase()}
                  </p>

                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(3.5rem, 5.5vw, 5.5rem)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      letterSpacing: '-0.04em',
                      lineHeight: 0.95,
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
                      maxWidth: '420px',
                      marginBottom: '32px',
                    }}
                  >
                    {active.description}
                  </p>

                  <ul
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px 24px',
                      marginBottom: '44px',
                      listStyle: 'none',
                    }}
                  >
                    {active.bullets.map((b) => (
                      <li key={b} style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                        <span style={{ color: 'var(--color-accent)', marginRight: '6px' }}>✦</span>{b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors duration-200"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      alignSelf: 'flex-start',
                      borderBottom: '1px solid var(--color-border)',
                      paddingBottom: '2px',
                    }}
                  >
                    Explore {active.title}
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '32px' }}>
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    animate={{
                      width: i === activeIndex ? 40 : 12,
                      background: i === activeIndex ? 'var(--color-accent)' : 'var(--color-border)',
                    }}
                    transition={{ duration: 0.35, ease: [0.7, 0, 0.3, 1] }}
                    style={{ height: '3px', borderRadius: '2px' }}
                  />
                ))}
                <span className="label" style={{ marginLeft: '8px', color: 'var(--color-muted)', opacity: 0.6 }}>
                  {String(activeIndex + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Right: visual panel */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                  exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
                  transition={{ duration: 0.65, ease: [0.7, 0, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${activeIndex === 0 ? '/ai.webp' : activeIndex === 1 ? '/web.webp' : '/mob.webp'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      bottom: '40px',
                      right: '48px',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(140px, 18vw, 240px)',
                      fontWeight: 800,
                      color: 'var(--color-text)',
                      opacity: 0.04,
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      userSelect: 'none',
                    }}
                  >
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : (

        /* Mobile: stacked */
        <div
          className="container-mass"
          style={{ paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '0' }}
        >
          {SERVICES.map((service) => {
            return (
              <div
                key={service.slug}
                style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '14px' }}>
                  {service.tagline.toUpperCase()}
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 10vw, 3.5rem)',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginBottom: '20px',
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.75,
                    marginBottom: '24px',
                  }}
                >
                  {service.description}
                </p>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    marginBottom: '28px',
                    listStyle: 'none',
                  }}
                >
                  {service.bullets.map((b) => (
                    <li key={b} style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                      <span style={{ color: 'var(--color-accent)', marginRight: '6px' }}>✦</span>{b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="group inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                  }}
                >
                  Explore {service.title}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
