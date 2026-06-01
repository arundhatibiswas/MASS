'use client'

import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { Project, TEASER_PROJECTS } from '@/lib/data/projects'
import { useIsMobile } from '@/lib/hooks/useIsMobile'

const CARD_BG = [
  'url("/ser_healthcare.png")',
  'url("/ser_staffing.png")',
  'url("/ser_logistics.webp")',
  'url("/ser_retail.webp")',
  'url("/ser_uschatbot.webp")',
  'url("/ser_finance.webp")',
  'url("/ser_education.webp")',
  'url("/ser_retail.webp")',
  'url("/ser_itservices.webp")',
  'url("/ser_saas.webp")',
]

type TeaserProject = (typeof TEASER_PROJECTS)[0]

interface WorkGridProps {
  projects: Project[]
  teasers: TeaserProject[]
}

export function WorkGrid({ projects, teasers }: WorkGridProps) {
  const isMobile = useIsMobile()

  const allCards = [
    ...projects.map((p) => ({ ...p, isFeatured: true as const })),
    ...teasers.map((p) => ({ ...p, isFeatured: false as const, challenge: '', results: [], liveUrl: undefined, featured: false })),
  ]

  return (
    <section style={{ paddingBottom: '128px' }} aria-label="Projects">
      <div className="container-mass">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '12px',
          }}
        >
          {allCards.map((project, i) => {
            const { isFeatured } = project
            const cardHeight = isMobile
              ? (isFeatured ? '320px' : '280px')
              : (isFeatured ? '460px' : '360px')

            const card = (
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
                style={{
                  position: 'relative',
                  height: cardHeight,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundImage: CARD_BG[i % CARD_BG.length],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                className={isFeatured ? 'group' : undefined}
              >
                {/* Industry badge */}
                <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
                  <span className="label" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {project.industry}
                  </span>
                </div>

                {/* Top-right chip */}
                <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                  {isFeatured && (project as Project).results.length > 0 ? (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        color: '#3B82F6',
                        background: 'rgba(59,130,246,0.12)',
                        borderRadius: '6px',
                        padding: '4px 10px',
                      }}
                    >
                      {(project as Project).results[0].value} {(project as Project).results[0].metric}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-body)',
                        color: 'rgba(255,255,255,0.35)',
                        background: 'rgba(255,255,255,0.06)',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <Lock size={11} />
                      {project.location}
                    </span>
                  )}
                </div>

                {/* Ghost number */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-16px',
                    right: '16px',
                    fontFamily: 'var(--font-display)',
                    fontSize: isMobile ? '90px' : '140px',
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.04,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    userSelect: 'none',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Hover overlay — featured only */}
                {isFeatured && (
                  <div
                    className="group-hover:opacity-100"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(37,99,235,0.08)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                )}

                {/* Bottom content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '28px 24px 24px',
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: isFeatured ? '1.35rem' : '1.1rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: '8px',
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </h2>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {project.services.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {isFeatured && (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.6)',
                          flexShrink: 0,
                          transition: 'color 0.2s ease',
                        }}
                        className="group-hover:!text-white"
                      >
                        Case study <ArrowRight size={13} />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )

            return isFeatured ? (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                style={{ display: 'block' }}
              >
                {card}
              </Link>
            ) : (
              <div key={project.slug}>{card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
