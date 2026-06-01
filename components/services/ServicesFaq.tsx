'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

const FAQS = [
  {
    q: 'How do we kickstart a project with you?',
    a: 'Book a free scoping call — we ask about your goals, timeline, and budget. Within 48 hours you receive a fixed proposal. No commitment required until you sign off.',
  },
  {
    q: 'What makes MASS stand out from other agencies?',
    a: 'Fixed scope, fixed price, and weekly demos. You see working software every 7 days and can redirect before it costs you. No black boxes, no jargon.',
  },
  {
    q: 'What do we need to provide to get started?',
    a: 'A clear brief or problem statement. We handle the rest — tech stack, architecture, design, and delivery. The more context you share, the tighter our proposal.',
  },
  {
    q: 'What is MASS\'s core strength?',
    a: 'Speed without cutting corners. We combine AI automation expertise with modern web and mobile engineering to ship measurable results in weeks, not months.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'AI automations: 1–2 weeks. Web projects: average 6 weeks. Mobile apps: 8–24 weeks. Timeline is agreed before any work starts.',
  },
  {
    q: 'Do you offer ongoing support after the project is completed?',
    a: 'All projects include 30 days of free post-launch bug cover. Retainer agreements are available for teams that need continuous development.',
  },
  {
    q: 'Will we have a dedicated project manager?',
    a: 'Yes. One point of contact throughout — no handoffs between account managers and developers. You always know who to call.',
  },
  {
    q: 'Can you work within a fixed budget?',
    a: 'Absolutely. Tell us your budget on the scoping call and we\'ll shape a project that fits. We\'d rather scope something deliverable than over-promise.',
  },
]

export function ServicesFaq() {
  const [open, setOpen] = useState<number | null>(null)
  const isMobile = useIsMobile()

  return (
    <section
      style={{
        paddingTop: '128px',
        paddingBottom: '128px',
        borderTop: '1px solid var(--color-border)',
      }}
      aria-label="FAQ"
    >
      <div className="container-mass">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 3fr',
            gap: isMobile ? '32px' : '80px',
            alignItems: 'flex-start',
          }}
        >
          {/* ── Left: heading only (no sticky, no link) ── */}
          <div>
            <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
              ✦ FAQ
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 4.5vw, 5rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
              }}
            >
              Questions?<br />We&apos;re glad<br />to explain
            </h2>
          </div>

          {/* ── Right: accordion + "Get in touch" at bottom ── */}
          <div>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Dark filled circle + button — matches brandium */}
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--color-text)',
                      color: 'var(--color-bg)',
                      fontSize: '1.25rem',
                      fontWeight: 300,
                      flexShrink: 0,
                      lineHeight: 1,
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontSize: '0.9375rem',
                          color: 'var(--color-muted)',
                          lineHeight: 1.75,
                          paddingBottom: '28px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Bottom border */}
            <div style={{ borderTop: '1px solid var(--color-border)' }} />

            {/* "Get in touch" — bottom right, matching brandium */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '28px' }}>
              <Link
                href="/book-a-call"
                className="group inline-flex items-center gap-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text)',
                }}
              >
                Get in touch
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
