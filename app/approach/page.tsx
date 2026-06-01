'use client'

import { motion } from 'framer-motion'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { useIsMobile } from '@/lib/hooks/useIsMobile'
import {
  Search,
  FileText,
  Hammer,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from 'lucide-react'

const PHASES = [
  {
    number: 1,
    name: 'Decode',
    duration: 'Days 1–3',
    icon: Search,
    color: '#3B82F6',
    description:
      'Requirements, target audience, and success metrics. We ask questions your last agency never did — about workflows, constraints, and what "done" actually looks like for your business.',
    deliverables: [
      'Project scope document',
      'Success metrics defined',
      'Risk log created',
      'Tech stack shortlist',
    ],
  },
  {
    number: 2,
    name: 'Blueprint',
    duration: 'Days 3–5',
    icon: FileText,
    color: '#2563EB',
    description:
      'Architecture and tech decisions documented with full reasoning. Every choice is explained — what we chose, what we rejected, and why. You own this document.',
    deliverables: [
      'Architecture diagram',
      'Tech stack decision doc',
      'Page/feature map',
      'Delivery timeline',
    ],
  },
  {
    number: 3,
    name: 'Sprint',
    duration: 'Weeks 2–4',
    icon: Hammer,
    color: '#1D4ED8',
    description:
      'Build in public. Weekly demos. No surprises. You see the product evolve in real time and can redirect at any weekly checkpoint — not after 3 months of silence.',
    deliverables: [
      'Weekly demo link',
      'Progress update every Friday',
      'Feedback loop at each checkpoint',
      'Versioned code in your repository',
    ],
  },
  {
    number: 4,
    name: 'Harden',
    duration: 'Week 5',
    icon: ShieldCheck,
    color: '#1E40AF',
    description:
      'QA, security review, performance audit, and mobile testing. We run 40+ checks across devices and browsers before calling anything done.',
    deliverables: [
      'Cross-browser test report',
      'Mobile QA (iOS + Android)',
      'Performance audit (Lighthouse)',
      'Security checklist',
    ],
  },
  {
    number: 5,
    name: 'Launch',
    duration: 'Week 6',
    icon: Rocket,
    color: '#1D4ED8',
    description:
      'Deployment, DNS, SSL, environment configuration. We handle everything — you just watch it go live. Monitoring is set up before we hand over the keys.',
    deliverables: [
      'Production deployment',
      'DNS + SSL configured',
      'Monitoring set up',
      'Handoff documentation',
    ],
  },
  {
    number: 6,
    name: 'Guard',
    duration: '30 Days',
    icon: LifeBuoy,
    color: '#3B82F6',
    description:
      "Post-launch support included at no extra charge. Bug fixes, performance tweaks, minor adjustments — we're still on the project until you're confident it's solid.",
    deliverables: [
      '30-day bug fix guarantee',
      'On-call support channel',
      'Performance monitoring',
      'Knowledge transfer session',
    ],
  },
]

export default function ApproachPage() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: isMobile ? '110px' : '120px',
          paddingBottom: isMobile ? '32px' : '40px',
          position: 'relative',
          zIndex: 10,
        }}
        aria-label="Our Approach"
      >
        <div className="container-mass">
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <motion.div
              style={{ flex: 1, maxWidth: isMobile ? '100%' : '52%' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>
                How We Work
              </p>
              <SplitHeading
                as="h1"
                scrollTrigger
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.06em',
                  lineHeight: 1.1,
                  color: 'var(--color-text)',
                  marginBottom: '24px',
                }}
              >
                The MASS Rapid Build Protocol.
              </SplitHeading>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                  color: 'var(--color-muted)',
                  lineHeight: 1.8,
                  maxWidth: '580px',
                }}
              >
                Six phases. Six weeks. One delivered product. Not a methodology
                document — a guarantee that you know exactly what happens on every
                day of the engagement.
              </p>
            </motion.div>

            {isMobile && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                style={{
                  width: '100%',
                  height: '240px',
                  overflow: 'hidden',
                  backgroundImage: 'url("/approach.webp")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  border: '1px solid var(--color-border)',
                  marginTop: '32px',
                }}
              />
            )}
          </div>
        </div>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: '-48px',
              width: '44vw',
              backgroundImage: 'url("/approach.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderLeft: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              zIndex: 12,
            }}
          />
        )}
      </section>

      {/* ── Phase timeline ────────────────────────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--color-elevated)' }}
        aria-label="Build Protocol Phases"
      >
        <div className="container-mass">
          {/*
           * TODO Sub-Project 8: Replace this section with Remotion
           * <ProjectProcessPlayer /> embedded via @remotion/player.
           * The player will animate each phase sequentially with a character
           * walking through the phases, controlled by scroll position.
           */}

          <div className="flex flex-col gap-0">
            {PHASES.map((phase, i) => {
              const Icon = phase.icon
              const isLast = i === PHASES.length - 1

              return (
                <motion.div
                  key={phase.number}
                  className="flex gap-6 md:gap-10"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  {/* Timeline column */}
                  <div className="flex flex-col items-center" style={{ width: '48px', flexShrink: 0 }}>
                    {/* Icon circle */}
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'var(--color-glow)',
                        border: `2px solid ${phase.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} style={{ color: phase.color }} />
                    </div>

                    {/* Connector line */}
                    {!isLast && (
                      <div
                        style={{
                          width: '2px',
                          flex: 1,
                          minHeight: '40px',
                          background: `linear-gradient(to bottom, ${phase.color}40, transparent)`,
                          margin: '4px 0',
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: isLast ? 0 : '40px', flex: 1 }}>
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <span
                        className="label"
                        style={{
                          background: `${phase.color}18`,
                          color: phase.color,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          fontSize: '11px',
                        }}
                      >
                        Phase {phase.number}
                      </span>
                      <h2
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: 'var(--color-text)',
                        }}
                      >
                        {phase.name}
                      </h2>
                      <span className="label" style={{ opacity: 0.5 }}>{phase.duration}</span>
                    </div>

                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--color-muted)',
                        lineHeight: 1.75,
                        maxWidth: '580px',
                        marginBottom: '16px',
                      }}
                    >
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((d) => (
                        <span
                          key={d}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '8px',
                            padding: '5px 12px',
                            fontSize: '0.78rem',
                            color: 'var(--color-muted)',
                          }}
                        >
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: phase.color,
                              flexShrink: 0,
                            }}
                          />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why this works ────────────────────────────────────────────────────── */}
      <section className="section-py" aria-label="Why This Works">
        <div className="container-mass">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>
                Why It Works
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-text)',
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                Certainty kills the biggest risk in software projects.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '16px' }}>
                Most software projects fail not from bad code — but from bad communication. A
                client doesn't know what's happening, a team doesn't know what matters, and
                by week 12 everyone is surprised by what was built.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                The MASS Rapid Build Protocol eliminates that risk by making every phase,
                every decision, and every deliverable explicit before work starts. No
                surprises. No scope creep. Just delivery.
              </p>
            </motion.div>

            {/* Quote card */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ padding: '40px' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.5,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                  marginBottom: '24px',
                }}
              >
                &ldquo;What I liked was that they didn&apos;t just build and disappear.
                During our SaaS MVP development, they kept suggesting better ways to use
                automation.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-glow)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                >
                  CR
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>
                    Ch Raj 🇬🇧
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    Founder, Retail Brand — London, UK
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
