'use client'

import { motion } from 'framer-motion'
import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed'
import { CheckCircle } from 'lucide-react'

const WHAT_TO_EXPECT = [
  {
    title: 'We scope your project together',
    body:  "You walk us through what you're trying to build. We ask the right questions — about your users, your constraints, your success metric. 30 minutes is enough.",
  },
  {
    title: 'You get a fixed price on the call',
    body:  "No \"we'll send you a quote in a week.\" We scope it live and give you a ballpark before the call ends. A formal proposal follows within 24 hours.",
  },
  {
    title: 'Zero obligation',
    body:  "This is a scoping call, not a sales pitch. If we're not the right fit, we'll tell you — and point you in the right direction.",
  },
]

export default function BookACallPage() {
  return (
    <section
      className="section-py"
      style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
      aria-label="Book a Call"
    >
      <div className="container-mass">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>
            Free 30-Min Call
          </p>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight:    300,
              letterSpacing: '-0.06em',
              lineHeight:    1.1,
              color:         'var(--color-text)',
              marginBottom:  '16px',
            }}
          >
            Book a free scoping call.
          </h1>
          <p
            style={{
              fontSize:   '1rem',
              color:      'var(--color-muted)',
              maxWidth:   '460px',
              margin:     '0 auto',
              lineHeight: 1.75,
            }}
          >
            30 minutes. No pressure. Walk us through your project and we&apos;ll tell
            you exactly how we&apos;d build it.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Calendly — takes 2/3 */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CalendlyEmbed minHeight={700} />
          </motion.div>

          {/* Sidebar — 1/3 */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card" style={{ padding: '28px' }}>
              <h3
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '1rem',
                  fontWeight:   700,
                  color:        'var(--color-text)',
                  marginBottom: '20px',
                }}
              >
                What happens on the call
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {WHAT_TO_EXPECT.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle
                      size={18}
                      style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily:   'var(--font-display)',
                          fontWeight:   600,
                          fontSize:     '0.875rem',
                          color:        'var(--color-text)',
                          marginBottom: '4px',
                        }}
                      >
                        {item.title}
                      </p>
                      <p style={{ fontSize: '0.825rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust note */}
            <div
              style={{
                padding:      '16px 20px',
                borderRadius: '10px',
                background:   'var(--color-glow)',
                border:       '1px solid var(--color-border)',
                fontSize:     '0.825rem',
                color:        'var(--color-muted)',
                lineHeight:   1.65,
              }}
            >
              <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>
                Prefer email?
              </strong>
              Drop us a line at{' '}
              <a
                href="mailto:work.ratananmol@gmail.com"
                style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
              >
                work.ratananmol@gmail.com
              </a>{' '}
              and we&apos;ll respond within 4 hours.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
