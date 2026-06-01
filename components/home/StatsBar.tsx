'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/data/services'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

const TICKER_TAGS = [
  'AI Automation', 'SaaS Platforms', 'Web Applications', 'Mobile Apps',
  'Workflow Automation', 'CRM Integrations', 'E-Commerce', 'Data Pipelines',
  'Chatbots & Agents', 'MVP Development', 'API Design', 'Cloud Infrastructure',
  'AI Automation', 'SaaS Platforms', 'Web Applications', 'Mobile Apps',
  'Workflow Automation', 'CRM Integrations', 'E-Commerce', 'Data Pipelines',
  'Chatbots & Agents', 'MVP Development', 'API Design', 'Cloud Infrastructure',
]

function useCountUp(target: number, duration = 1600, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatItem({
  value, suffix, label, index, isMobile,
}: { value: number; suffix: string; label: string; index: number; isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)
  const count = useCountUp(value, 1600, seen)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setSeen(true) },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        padding: isMobile ? '0 16px' : '0 40px',
        borderLeft: isMobile ? 'none' : (index === 0 ? 'none' : '1px solid var(--color-border)'),
        textAlign: 'center',
      }}
    >
      <span className="counter-num">{count}{suffix}</span>
      <span className="label" style={{ opacity: 0.8 }}>{label}</span>
    </div>
  )
}

export function StatsBar() {
  const isMobile = useIsMobile()

  return (
    <section
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
      aria-label="Stats"
    >
      {/* Count-up stats row */}
      <div className="container-mass" style={{ padding: '56px 0' }}>
        <div style={{
          display: isMobile ? 'grid' : 'flex',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : undefined,
          gap: isMobile ? '24px 0' : '0 0',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap' as const,
        }}>
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>

      {/* Ticker divider */}
      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          padding: '18px 0',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Fade edges */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 8%, transparent 92%, var(--color-bg) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div
          className="marquee-left"
          style={{
            display: 'flex',
            gap: '48px',
            whiteSpace: 'nowrap',
            width: 'max-content',
          }}
        >
          {TICKER_TAGS.map((tag, i) => (
            <span
              key={i}
              className="label"
              style={{
                color: 'var(--color-muted)',
                opacity: 0.5,
                flexShrink: 0,
              }}
            >
              ✦ {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
