'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SplitHeading } from '@/components/ui/SplitHeading'

interface CtaBannerProps {
  headline?: string
  subtext?:  string
  cta?:      string
  ctaHref?:  string
}

export function CtaBanner({
  headline = "Let's scope your project — no fluff, just results.",
  subtext  = "Tell us what you're building. We'll tell you exactly how we'd build it, how long it takes, and what it costs.",
  cta      = "Let's Build",
  ctaHref  = '/contact',
}: CtaBannerProps = {}) {
  return (
    <section
      data-cursor-invert
      style={{
        background:   'var(--color-accent)',
        padding:      'clamp(64px, 10vh, 120px) 0',
        overflow:     'hidden',
        position:     'relative',
      }}
      aria-label="Call to Action"
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        style={{
          position:   'absolute',
          inset:      0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize:  '40px 40px',
          pointerEvents:   'none',
        }}
      />

      <div className="container-mass relative z-10">
        <motion.p
          className="label"
          style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ✦ Ready to Build?
        </motion.p>

        <SplitHeading
          as="h2"
          scrollTrigger
          delay={0.05}
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.2rem, 4.5vw, 4rem)',
            fontWeight:    300,
            letterSpacing: '-0.05em',
            lineHeight:    1.05,
            color:         '#ffffff',
            maxWidth:      '780px',
            marginBottom:  '28px',
          }}
        >
          {headline}
        </SplitHeading>

        <motion.p
          style={{
            fontSize:     '1rem',
            color:        'rgba(255,255,255,0.7)',
            maxWidth:     '480px',
            lineHeight:   1.7,
            marginBottom: '44px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtext}
        </motion.p>

        <motion.div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Link
              href={ctaHref}
              style={{
                display:       'inline-flex',
                alignItems:    'center',
                gap:           '8px',
                fontFamily:    'var(--font-display)',
                fontSize:      '1rem',
                fontWeight:    600,
                color:         'var(--color-accent)',
                background:    '#ffffff',
                padding:       '14px 28px',
                borderRadius:  '8px',
                transition:    'background 0.2s',
              }}
            >
              {cta}
              <ArrowRight size={17} />
            </Link>
          </motion.div>

          <Link
            href="/book-a-call"
            className="group inline-flex items-center gap-2 transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize:   '1rem',
              fontWeight: 500,
              color:      'rgba(255,255,255,0.75)',
            }}
          >
            Book a Free Call
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </motion.div>

        <motion.p
          className="label"
          style={{ color: 'rgba(255,255,255,0.45)', marginTop: '28px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          Typical response within 4 hours · No spam, ever
        </motion.p>
      </div>
    </section>
  )
}
