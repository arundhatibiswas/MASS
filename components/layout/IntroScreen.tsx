'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function IntroScreen() {
  const [show, setShow] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Only play once per browser session
    if (typeof sessionStorage === 'undefined') return
    if (sessionStorage.getItem('mass-intro-played')) {
      setDone(true)
      return
    }
    sessionStorage.setItem('mass-intro-played', '1')
    setShow(true)
  }, [])

  if (done || !show) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          style={{
            position:        'fixed',
            inset:           0,
            zIndex:          9999,
            background:      '#060A12',
            display:         'flex',
            flexDirection:   'column',
            alignItems:      'center',
            justifyContent:  'center',
            overflow:        'hidden',
          }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
          onAnimationComplete={(def) => {
            if (def === 'exit') setDone(true)
          }}
        >
          {/* Wordmark */}
          <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
            <motion.span
              style={{
                display:       'block',
                fontFamily:    'var(--font-dm-sans), DM Sans, sans-serif',
                fontSize:      'clamp(3rem, 10vw, 7rem)',
                fontWeight:    300,
                letterSpacing: '-0.06em',
                color:         '#F1F5F9',
                lineHeight:    1,
              }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
            >
              MASS
            </motion.span>
          </div>

          {/* Tagline */}
          <div style={{ overflow: 'hidden', marginBottom: '3rem' }}>
            <motion.span
              style={{
                display:       'block',
                fontFamily:    'var(--font-inter), Inter, sans-serif',
                fontSize:      '0.75rem',
                fontWeight:    500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color:         'rgba(241,245,249,0.35)',
              }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.3 }}
            >
              AI Automation &amp; Software Agency
            </motion.span>
          </div>

          {/* Progress bar */}
          <div
            style={{
              position: 'absolute',
              bottom:   0,
              left:     0,
              right:    0,
              height:   '2px',
              background: 'rgba(255,255,255,0.06)',
            }}
          >
            <motion.div
              style={{
                height:     '100%',
                background: '#2563EB',
                transformOrigin: 'left',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
              onAnimationComplete={() => {
                // Trigger exit after bar completes
                setTimeout(() => setShow(false), 150)
              }}
            />
          </div>

          {/* Wordmark exit — slides up as overlay exits */}
          <motion.div
            aria-hidden
            style={{
              position:      'absolute',
              inset:         0,
              background:    '#060A12',
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
