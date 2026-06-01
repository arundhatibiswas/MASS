import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { ServicesRows } from '@/components/services/ServicesRows'
import { ServicesFaq } from '@/components/services/ServicesFaq'
import { PROJECTS } from '@/lib/data/projects'

export const metadata = {
  title: 'Services — MASS',
  description: 'AI automation, web development, and mobile app development — delivered in weeks, not months.',
}

// Featured project used in the "Growth" showcase section
const FEATURED = PROJECTS[1] // Inventrics Technologies

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          paddingTop: 'calc(var(--section-py, 128px) + 80px)',
          paddingBottom: 'var(--section-py, 128px)',
        }}
        aria-label="Services"
      >
        <div className="container-mass">
          <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>
            ✦ What We Build
          </p>

          <div
            className="hero-split-grid"
          >
            <SplitHeading
              as="h1"
              scrollTrigger
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.06em',
                lineHeight: 1.0,
                color: 'var(--color-text)',
              }}
            >
              We build three things. All of them well.
            </SplitHeading>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-muted)',
                lineHeight: 1.75,
                paddingBottom: '8px',
              }}
            >
              AI automation, web development, and mobile apps —
              built for US and EU businesses that need results in weeks,
              not months. Fixed scope. Fixed price. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services numbered list ── */}
      <ServicesRows />

      {/* ── Featured project ── */}
      <section
        style={{
          paddingTop: '128px',
          paddingBottom: '128px',
          borderTop: '1px solid var(--color-border)',
        }}
        aria-label="Featured Work"
      >
        <div className="container-mass">
          <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '48px' }}>
            ✦ Recent Work
          </p>

          <div
            className="featured-project-grid"
          >
            {/* Left: project info */}
            <div>
              <p className="label" style={{ color: 'var(--color-muted)', marginBottom: '16px' }}>
                {FEATURED.industry}
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}
              >
                Growth
              </h2>

              {/* Results */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {FEATURED.results.slice(0, 3).map((r) => (
                  <div key={r.metric} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: 'var(--color-accent)',
                        letterSpacing: '-0.02em',
                        minWidth: '64px',
                      }}
                    >
                      {r.value}
                    </span>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                      {r.metric}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={`/work/${FEATURED.slug}`}
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
                View case study
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Right: dark project card */}
            <Link
              href={`/work/${FEATURED.slug}`}
              className="group"
              style={{ display: 'block' }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '420px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundImage: 'url("/ser_staffing.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Industry badge */}
                <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
                  <span className="label" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {FEATURED.industry}
                  </span>
                </div>

                {/* Result chip */}
                <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
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
                    {FEATURED.results[0].value} {FEATURED.results[0].metric}
                  </span>
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
                  02
                </span>

                {/* Hover overlay */}
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

                {/* Bottom info */}
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
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: '8px',
                      lineHeight: 1.2,
                    }}
                  >
                    {FEATURED.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {FEATURED.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why MASS — dark section ── */}
      <section
        data-theme="dark"
        style={{
          background: 'var(--color-bg)',
          paddingTop: '128px',
          paddingBottom: '128px',
        }}
        aria-label="Why MASS"
      >
        <div className="container-mass">
          <div
            className="why-mass-grid"
          >
            {/* Left: heading */}
            <div>
              <p className="label" style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>
                ✦ Why MASS
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}
              >
                Built different<br />from day one.
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, maxWidth: '360px' }}>
                We approach every client relationship like a business
                partner, not a vendor. Results are our reputation.
              </p>
            </div>

            {/* Right: differentiators list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                {
                  title: 'Transparent process',
                  desc: 'Every decision explained. No black boxes, no jargon, no "trust us".',
                },
                {
                  title: 'Fixed scope',
                  desc: 'We agree on what we build before we build it. No scope creep surprises.',
                },
                {
                  title: 'Weekly demos',
                  desc: 'See working software every 7 days. Change direction before it costs you.',
                },
                {
                  title: '30-day post-launch cover',
                  desc: 'Bugs after launch are our problem. Free fixes for 30 days.',
                },
              ].map((d, i) => (
                <div
                  key={d.title}
                  className="differentiator-item"
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      color: 'var(--color-text)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {d.title}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                    {d.desc}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--color-border)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <ServicesFaq />

      {/* ── CTA ── */}
      <CtaBanner />
    </>
  )
}
