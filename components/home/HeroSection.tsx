'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

const FADE_IN = {
  hidden: { opacity: 0 },
  show:   { opacity: 1 },
}

export function HeroSection() {
  const isMobile = useIsMobile()

  // Mouse parallax for background orbs
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const orb1X = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), { stiffness: 40, damping: 20 })
  const orb1Y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 40, damping: 20 })
  const orb2X = useSpring(useTransform(mouseX, [0, 1], [20, -20]), { stiffness: 30, damping: 20 })
  const orb2Y = useSpring(useTransform(mouseY, [0, 1], [10, -10]), { stiffness: 30, damping: 20 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ paddingBottom: 'clamp(4rem, 10vh, 7rem)' }}
      aria-label="Hero"
    >
      {/* ── Background orbs (parallax) ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{
            position:     'absolute',
            top:          '-10%',
            right:        '-5%',
            width:        '50vw',
            height:       '50vw',
            maxWidth:     '600px',
            maxHeight:    '600px',
            borderRadius: '50%',
            background:   'radial-gradient(circle, var(--color-glow) 0%, transparent 70%)',
            filter:       'blur(80px)',
            opacity:      0.7,
            x:            orb1X,
            y:            orb1Y,
          }}
        />
        <motion.div
          style={{
            position:     'absolute',
            bottom:       '10%',
            left:         '-5%',
            width:        '35vw',
            height:       '35vw',
            maxWidth:     '400px',
            maxHeight:    '400px',
            borderRadius: '50%',
            background:   'radial-gradient(circle, var(--color-glow) 0%, transparent 70%)',
            filter:       'blur(100px)',
            opacity:      0.5,
            x:            orb2X,
            y:            orb2Y,
          }}
        />
      </div>

      {/* ── Left edge animated line ── */}
      <motion.div
        aria-hidden
        style={{
          position:   'absolute',
          left:       'clamp(24px, 5vw, 80px)',
          top:        '25%',
          width:      '1px',
          background: 'var(--color-border)',
          transformOrigin: 'top',
        }}
        initial={{ height: 0 }}
        animate={{ height: '50%' }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1], delay: 0.8 }}
      >
        <motion.div
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            width:      '100%',
            background: 'var(--color-accent)',
            transformOrigin: 'top',
          }}
          initial={{ height: '0%' }}
          animate={{ height: '40%' }}
          transition={{ duration: 1, ease: [0.7, 0, 0.3, 1], delay: 1.2 }}
        />
      </motion.div>

      {/* ── Content ── */}
      <div className="container-mass relative z-10">

        {/* Top row: label (left) + body text (right) */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr',
            gap:                 isMobile ? '20px' : '48px',
            alignItems:          'start',
            marginBottom:        '28px',
          }}
        >
          <motion.p
            className="label"
            style={{ color: 'var(--color-accent)' }}
            variants={FADE_IN}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            ✦ AI Automation &amp; Software Agency
          </motion.p>

          <motion.p
            style={{
              fontSize:   'clamp(0.9375rem, 1.2vw, 1.0625rem)',
              color:      'var(--color-muted)',
              lineHeight: 1.7,
            }}
            variants={FADE_IN}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            Custom AI agents and software for US &amp; EU businesses. Delivered
            in weeks, not months. From $499 workflow automations to full SaaS
            platforms.
          </motion.p>
        </div>

        {/* Headline — word-split reveal */}
        <SplitHeading
          as="h1"
          scrollTrigger={false}
          delay={1.65}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(3rem, 7.5vw, 6.5rem)',
            fontWeight:    300,
            letterSpacing: '-0.06em',
            lineHeight:    1.0,
            color:         'var(--color-text)',
            maxWidth:      '80%',
            marginBottom:  '52px',
          }}
        >
          We Automate the Work. You Run the Business.
        </SplitHeading>

        {/* CTAs */}
        <motion.div
          style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1], delay: 2.0 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 transition-colors duration-200"
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.0625rem',
              fontWeight:    600,
              color:         'var(--color-text)',
              borderBottom:  '1px solid var(--color-text)',
              paddingBottom: '3px',
            }}
          >
            Let&apos;s Build
            <ArrowRight
              size={17}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>

          <Link
            href="/work"
            className="group inline-flex items-center gap-2 hover:text-[var(--color-text)] transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize:   '1.0625rem',
              fontWeight: 500,
              color:      'var(--color-muted)',
            }}
          >
            See Our Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="label"
          style={{ opacity: 0.45, marginTop: '40px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          Trusted by teams in the US · UK · India
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom:   '-40px',
            right:    0,
            display:  'flex',
            alignItems: 'center',
            gap:      '12px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <div
            style={{
              width:      '40px',
              height:     '1px',
              background: 'var(--color-border)',
              position:   'relative',
              overflow:   'hidden',
            }}
          >
            <motion.div
              style={{
                position:   'absolute',
                inset:      0,
                background: 'var(--color-accent)',
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, ease: [0.7, 0, 0.3, 1], repeat: Infinity, repeatDelay: 0.5 }}
            />
          </div>
          <span className="label" style={{ opacity: 0.4 }}>Scroll</span>
        </motion.div>

      </div>
    </section>
  )
}
