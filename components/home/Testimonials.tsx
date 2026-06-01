'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data/testimonials'

const ROW_1 = TESTIMONIALS.slice(0, 5)
const ROW_2 = TESTIMONIALS.slice(5, 10)

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  const initials = t.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

  return (
    <div
      style={{
        width:        'clamp(300px, 85vw, 360px)',
        flexShrink:   0,
        padding:      '28px',
        borderRadius: '12px',
        border:       '1px solid var(--color-border)',
        background:   'var(--color-surface)',
        display:      'flex',
        flexDirection:'column',
        gap:          '16px',
      }}
    >
      <p
        style={{
          fontSize:   '0.875rem',
          color:      'var(--color-muted)',
          lineHeight: 1.75,
          flex:       1,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      <div
        style={{
          height:     '1px',
          background: 'var(--color-border)',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width:          '36px',
            height:         '36px',
            borderRadius:   '50%',
            background:     'var(--color-glow)',
            border:         '1px solid var(--color-border)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            fontFamily:     'var(--font-display)',
            fontWeight:     700,
            fontSize:       '0.75rem',
            color:          'var(--color-accent)',
            flexShrink:     0,
          }}
        >
          {initials}
        </div>
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontFamily:   'var(--font-display)',
              fontWeight:   600,
              fontSize:     '0.875rem',
              color:        'var(--color-text)',
              overflow:     'hidden',
              textOverflow: 'ellipsis',
              whiteSpace:   'nowrap',
            }}
          >
            {t.name} {t.flag}
          </p>
          <p
            style={{
              fontSize:     '0.75rem',
              color:        'var(--color-muted)',
              overflow:     'hidden',
              textOverflow: 'ellipsis',
              whiteSpace:   'nowrap',
            }}
          >
            {t.title}, {t.company}
          </p>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({
  items,
  direction = 'left',
}: {
  items: (typeof TESTIMONIALS)
  direction?: 'left' | 'right'
}) {
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        overflow:          'hidden',
        maskImage:         'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage:   'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        className={direction === 'left' ? 'marquee-left' : 'marquee-right'}
        style={{
          display: 'flex',
          gap:     '16px',
          width:   'max-content',
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      style={{ paddingTop: '128px', paddingBottom: '128px', overflow: 'hidden' }}
      aria-label="Client Testimonials"
    >
      {/* ── Header ── */}
      <div className="container-mass" style={{ marginBottom: '56px' }}>
        <motion.p
          className="label"
          style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ✦ Client Stories
        </motion.p>
        <motion.div
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', maxWidth: '480px' }}>
            What our clients say.
          </h2>
          <p className="label" style={{ opacity: 0.6, marginBottom: '4px' }}>
            10 businesses · 3 countries
          </p>
        </motion.div>
      </div>

      {/* ── Row 1 — scrolls left ── */}
      <MarqueeRow items={ROW_1} direction="left" />

      <div style={{ height: '16px' }} />

      {/* ── Row 2 — scrolls right ── */}
      <MarqueeRow items={ROW_2} direction="right" />
    </section>
  )
}
