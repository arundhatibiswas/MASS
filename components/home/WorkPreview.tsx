'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROJECTS, TEASER_PROJECTS } from '@/lib/data/projects'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

const FEATURED = PROJECTS.filter((p) => p.featured).slice(0, 2)
const TEASERS = TEASER_PROJECTS.slice(0, 2)

const CARD_BG = [
  'url("/ser_healthcare.png")',
  'url("/ser_staffing.png")',
  'url("/ser_logistics.webp")',
  'url("/ser_retail.webp")',
]

function ProjectCard({
  href,
  bg,
  industry,
  badge,
  badgeStyle,
  ghostNum,
  name,
  services,
  index,
  isMobile,
}: {
  href: string
  bg: string
  industry: string
  badge: string
  badgeStyle: React.CSSProperties
  ghostNum: string
  name: string
  services: string[]
  index: number
  isMobile: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.7, 0, 0.3, 1], delay: index * 0.1 }}
    >
      <Link
        href={href}
        style={{
          display: 'block',
          position: 'relative',
          height: isMobile ? '300px' : '440px',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundImage: bg,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="group"
      >
        {/* Industry badge */}
        <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
          <span className="label" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {industry}
          </span>
        </div>

        {/* Result / location badge */}
        <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
          <span style={badgeStyle}>{badge}</span>
        </div>

        {/* Ghost number */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-16px',
            right: '16px',
            fontFamily: 'var(--font-display)',
            fontSize: '160px',
            fontWeight: 800,
            color: 'white',
            opacity: 0.04,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          {ghostNum}
        </span>

        {/* Scale container */}
        <div
          className="group-hover:scale-[1.06] transition-transform duration-500"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: bg,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transformOrigin: 'center',
          }}
        />

        {/* Hover overlay */}
        <div
          className="group-hover:opacity-100"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, rgba(37,99,235,0.18) 0%, transparent 60%)',
            opacity: 0,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Bottom info — slides up on hover */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 24px 24px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
          }}
        >
          <motion.div
            initial={false}
            style={{ transform: 'translateY(8px)', transition: 'transform 0.4s cubic-bezier(0.7,0,0.3,1)' }}
            className="group-hover:[transform:translateY(0px)]"
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
                lineHeight: 1.2,
              }}
            >
              {name}
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              {services.slice(0, 3).map((s) => (
                <span key={s} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
                  {s}
                </span>
              ))}
              <ArrowRight
                size={14}
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}
              />
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export function WorkPreview() {
  const isMobile = useIsMobile()

  return (
    <section className="section-py" aria-label="Selected Work">
      <div className="container-mass">

        {/* Header row */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '12px' }}>
              ✦ Selected Work
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Real Results.<br />Real Clients.
            </h2>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: 'var(--color-text)',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: '2px',
            }}
          >
            View more work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* 2×2 grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '12px',
          }}
        >
          {FEATURED.map((project, i) => (
            <ProjectCard
              key={project.slug}
              href={`/work/${project.slug}`}
              bg={CARD_BG[i]}
              industry={project.industry}
              badge={`${project.results[0].value} ${project.results[0].metric}`}
              badgeStyle={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: '#3B82F6',
                background: 'rgba(59,130,246,0.12)',
                borderRadius: '6px',
                padding: '4px 10px',
              }}
              ghostNum={String(i + 1).padStart(2, '0')}
              name={project.name}
              services={project.services}
              index={i}
              isMobile={isMobile}
            />
          ))}

          {TEASERS.map((project, i) => (
            <ProjectCard
              key={project.slug}
              href="/work"
              bg={CARD_BG[i + 2]}
              industry={project.industry}
              badge={project.location}
              badgeStyle={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.4)',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '6px',
                padding: '4px 10px',
              }}
              ghostNum={String(i + 3).padStart(2, '0')}
              name={project.name}
              services={project.services}
              index={i + 2}
              isMobile={isMobile}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
