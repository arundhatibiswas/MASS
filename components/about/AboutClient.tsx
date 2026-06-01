'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { ScrollRevealText } from '@/components/ui/ScrollRevealText'
import { PROJECTS, TEASER_PROJECTS } from '@/lib/data/projects'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

/* ── Char-by-char scroll-tied reveal — same pattern as ScrollRevealText, per character ── */
function ScrollRevealChars({
  text,
  style,
}: {
  text: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.4'],
  })
  const chars = Array.from(text)
  return (
    <p ref={ref} style={style}>
      {chars.map((c, i) => {
        const start = i / chars.length
        const end = Math.min((i + 1.5) / chars.length, 1)
        return <Char key={i} char={c} progress={scrollYProgress} start={start} end={end} />
      })}
    </p>
  )
}

function Char({
  char,
  progress,
  start,
  end,
}: {
  char: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  return <motion.span style={{ opacity, display: 'inline-block' }}>{char}</motion.span>
}

/* ── Values — 6 items in 3×2 grid ── */
const VALUES = [
  { n: '01', title: 'Speed without shortcuts', desc: 'We deliver in weeks by being deliberate about scope. Speed comes from clarity, not cutting corners.' },
  { n: '02', title: 'Transparency on every decision', desc: 'Every tech choice and trade-off is documented and explained. You always know why we built it this way.' },
  { n: '03', title: 'Built for outcome', desc: "We don't sell hours. We scope for outcomes. Before writing code, we agree on what success looks like." },
  { n: '04', title: 'No ghost ships', desc: 'Every project includes 30 days of post-launch support at no charge. Your success is our reputation.' },
  { n: '05', title: 'Fixed scope, fixed price', desc: 'We agree on what we build before we build it. No scope creep, no silent overruns — ever.' },
  { n: '06', title: 'Senior builders only', desc: 'No juniors, no handoffs. The same people who scoped the project are the ones who ship it.' },
]

/* ── All projects for the carousel ── */
const ALL_PROJECTS = [
  ...PROJECTS.map((p) => ({ ...p, isFeatured: true })),
  ...TEASER_PROJECTS.map((p) => ({ ...p, isFeatured: false, results: [] as { metric: string; value: string }[] })),
]

const CARD_BG = [
  'url("/ser_healthcare.webp")',
  'url("/ser_staffing.webp")',
  'url("/ser_logistics.webp")',
  'url("/ser_retail.webp")',
  'url("/ser_uschatbot.webp")',
  'url("/ser_finance.webp")',
  'url("/ser_education.webp")',
  'url("/ser_retail.webp")',
  'url("/ser_itservices.webp")',
  'url("/ser_saas.webp")',
]

/* ── Reusable dark panel (replaces brandium photography) ── */
function DarkPanel({
  bg, height = '400px', label, stat, children,
}: {
  bg: string; height?: string; label?: string; stat?: string; children?: React.ReactNode
}) {
  return (
    <div
      data-cursor-invert
      style={{
        position: 'relative',
        height,
        borderRadius: '12px',
        overflow: 'hidden',
        background: bg,
        flexShrink: 0,
      }}
    >
      {label && (
        <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</span>
        </div>
      )}
      {stat && (
        <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.04em', lineHeight: 1 }}>
            {stat}
          </p>
        </div>
      )}
      {children}
    </div>
  )
}

export function AboutClient() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* ── 1. Hero — centered, full-width headline, subtitle below (matches brandium exactly) ── */}
      <section
        style={{
          paddingTop: 'calc(var(--section-py, 128px) + 80px)',
          paddingBottom: 'var(--section-py, 128px)',
          textAlign: 'center',
        }}
        aria-label="About MASS"
      >
        <div className="container-mass">
          {/* H1 — matches brandium: ~5rem, weight 400, ~70% viewport width */}
          <SplitHeading
            as="h1"
            scrollTrigger={false}
            delay={0.3}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 5.8vw, 5.8rem)',
              fontWeight: 300,
              letterSpacing: '-0.06em',
              lineHeight: 1.05,
              color: 'var(--color-text)',
              marginBottom: '24px',
            }}
          >
            Shaping ideas with precision and impact
          </SplitHeading>

          {/* Subtitle — bold, centered, 2 lines */}
          <motion.p
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-text)',
              lineHeight: 1.65,
              maxWidth: '420px',
              margin: '0 auto',
              letterSpacing: '0',
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            We are a focused AI automation and software agency,
            building systems that make businesses run faster —
            delivered in weeks, not months.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Large visual panel ── */}
      <section style={{ paddingBottom: '128px' }}>
        <div className="container-mass">
          <DarkPanel
            bg="linear-gradient(140deg, #060A12 0%, #0D1421 60%, #0B1622 100%)"
            height="420px"
          >
            {/* Ghost headline */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '40px',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(120px, 18vw, 260px)',
                fontWeight: 800,
                color: 'white',
                opacity: 0.04,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              MASS
            </span>
            {/* Centre statement */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: 'clamp(32px, 5vw, 80px)',
              }}
            >
              <p className="label" style={{ color: 'rgba(59,130,246,0.8)', marginBottom: '20px' }}>
                ✦ Our mission
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  maxWidth: '600px',
                }}
              >
                Most businesses are sitting on enormous efficiency gains that technology can unlock —
                but can't access them because traditional agencies are too slow, too expensive, or too generic.
              </p>
            </div>
          </DarkPanel>
        </div>
      </section>

      {/* ── 3. Story text — 2 col: label left, paragraphs right ── */}
      <section
        style={{
          paddingTop: '0',
          paddingBottom: '128px',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="container-mass" style={{ paddingTop: '80px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '80px',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: sticky label */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <motion.p
                className="label"
                style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                ✦ Our Story
              </motion.p>
              <SplitHeading
                as="h2"
                scrollTrigger
                delay={0.05}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                }}
              >
                Built to deliver,<br /> not to pitch.
              </SplitHeading>
            </div>

            {/* Right: body text — word-by-word scroll reveal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <ScrollRevealText
                style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.8 }}
                offset={['start 0.85', 'end 0.45']}
              >
                MASS started with a simple observation: most businesses are sitting on enormous efficiency gains that technology can unlock — but they can't access them because traditional agencies are too slow, too expensive, or too generic.
              </ScrollRevealText>
              <ScrollRevealText
                style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.8 }}
                offset={['start 0.85', 'end 0.45']}
              >
                We built MASS to be the opposite. Tight scope. Fast execution. Real outcomes measured in time saved and revenue grown — not slides and buzzwords.
              </ScrollRevealText>
              <ScrollRevealText
                style={{ fontSize: '1.0625rem', color: 'var(--color-text)', lineHeight: 1.8 }}
                offset={['start 0.85', 'end 0.45']}
              >
                Today we work with companies across logistics, healthcare, finance, education, SaaS, and retail — helping them automate the repetitive, build the tools they actually need, and ship products faster than they thought possible.
              </ScrollRevealText>

              <div style={{ paddingTop: '8px' }}>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    color: 'var(--color-text)',
                    borderBottom: '1px solid var(--color-border)',
                    paddingBottom: '2px',
                  }}
                >
                  Our Work
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Team panels — 2 dark cards ── */}
      <section style={{ paddingBottom: '128px' }}>
        <div className="container-mass">
          <motion.p
            className="label"
            style={{ color: 'var(--color-accent)', marginBottom: '48px' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ✦ The Team
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '3fr 2fr', gap: '12px' }}>
            <DarkPanel
              bg="linear-gradient(140deg, #0B1622 0%, #0D2235 100%)"
              height="480px"
              label="Founder"
            >
              {/* Large initials */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '160px',
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.04,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  AR
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '28px',
                  left: '28px',
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '4px' }}>
                  Anmol Ratan
                </p>
                <p className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Founder · AI Automation Head
                </p>
              </div>
            </DarkPanel>

            <DarkPanel
              bg="linear-gradient(140deg, #0F1A10 0%, #182B18 100%)"
              height="480px"
              label="Engineering"
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '120px',
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.04,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: '28px', left: '28px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '4px' }}>
                  Arundhati Biswas
                </p>
                <p className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Senior Developer
                </p>
              </div>
            </DarkPanel>
          </div>
        </div>
      </section>

      {/* ── 5. Values — numbered 3×2 grid (matches brandium exactly) ── */}
      <section
        style={{
          paddingTop: '128px',
          paddingBottom: '128px',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="container-mass">
          {/* Header — two-line label like brandium "What Defines Us / Brandium Principles" */}
          <div style={{ marginBottom: '80px' }}>
            <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '6px' }}>
              ✦ What Defines Us
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                letterSpacing: '-0.01em',
              }}
            >
              MASS Principles
            </p>
          </div>

          {/* 3×2 grid — no borders, huge numbers, open layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              rowGap: isMobile ? '48px' : '80px',
              columnGap: isMobile ? '0' : '40px',
            }}
          >
            {VALUES.map((v, i) => (
              <div key={v.n}>
                {/* Number — scroll-tied per-char reveal, matching body text motion */}
                <ScrollRevealChars
                  text={`${v.n}.`}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(5.5rem, 10vw, 10rem)',
                    fontWeight: 400,          /* thin strokes like brandium */
                    color: 'var(--color-text)',
                    letterSpacing: '0',          /* no negative tracking */
                    lineHeight: 1,
                    marginBottom: '24px',
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.12 + 0.18, ease: 'easeOut' }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      letterSpacing: '-0.02em',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                    {v.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Credibility — "From ambitious startups" ── */}
      <section
        style={{
          paddingTop: '128px',
          paddingBottom: '128px',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        <div className="container-mass">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
            }}
          >
            <div>
              <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
                ✦ Our Clients
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  maxWidth: '640px',
                }}
              >
                From ambitious startups<br />to growing global brands.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '480px', marginTop: '20px' }}>
                The problems we solve span healthcare, logistics, finance, SaaS, retail, education, and staffing — across three countries.
              </p>
            </div>

            {/* Client name strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0',
                borderTop: '1px solid var(--color-border)',
                borderLeft: '1px solid var(--color-border)',
                width: '100%',
              }}
            >
              {[
                "Dr. Vijay's Surgery",
                'Inventrics Technologies',
                'US Staffing Co.',
                'Chicago Finance App',
                'London Retail Brand',
                'Hyderabad Logistics',
              ].map((name) => (
                <div
                  key={name}
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                    borderRight: '1px solid var(--color-border)',
                    padding: '20px 28px',
                    flex: '1 1 200px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-muted)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Horizontal scrolling project carousel ── */}
      <section
        style={{
          paddingTop: '0',
          paddingBottom: '128px',
          overflow: 'hidden',
        }}
        aria-label="Project carousel"
      >
        <div
          className="marquee-left"
          style={{
            display: 'flex',
            gap: '12px',
            width: 'max-content',
          }}
        >
          {/* Double the cards for seamless loop */}
          {[...ALL_PROJECTS, ...ALL_PROJECTS].map((p, i) => (
            <div
              key={`${p.slug}-${i}`}
              style={{
                width: isMobile ? 'clamp(260px, 80vw, 320px)' : '320px',
                height: isMobile ? '200px' : '220px',
                flexShrink: 0,
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundImage: CARD_BG[i % CARD_BG.length],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <span className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {p.industry}
                </span>
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '4px',
                  }}
                >
                  {p.name}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                  {p.location}
                </p>
              </div>
              {/* Ghost number */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '12px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  fontWeight: 800,
                  color: 'white',
                  opacity: 0.04,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  userSelect: 'none',
                }}
              >
                {String((i % ALL_PROJECTS.length) + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <CtaBanner />
    </>
  )
}
