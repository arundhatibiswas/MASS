import Link from 'next/link'
import { ArrowRight, Users, CheckCircle, Clock } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'
import { WaitlistForm } from '@/components/ui/WaitlistForm'

export const metadata = {
  title:       'Recruiting Automation — MASS AI Services (Waitlist)',
  description: 'AI-powered recruiting automation: CV screening, candidate scoring, automated outreach, and interview scheduling. Join the waitlist for Q4 2026.',
}

const plannedFeatures = [
  'AI CV screening & scoring against your rubric',
  'Candidate ranking dashboard',
  'Automated personalised outreach',
  'Interview scheduling (no back-and-forth)',
  'ATS integration (Greenhouse, Lever, Workday)',
  'Offer letter automation',
  'Candidate status update notifications',
  'Rejection handling & pipeline analytics',
]

export default function RecruitingWaitlistPage() {
  return (
    <>
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Recruiting Automation Waitlist"
      >
        <div className="container-mass">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <Link href="/services/ai-automation" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>AI Automation</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-muted)' }}>Recruiting</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div
                style={{
                  display:      'inline-flex',
                  alignItems:   'center',
                  gap:          '8px',
                  padding:      '6px 14px',
                  borderRadius: '8px',
                  background:   'var(--color-elevated)',
                  border:       '1px solid var(--color-border)',
                  marginBottom: '20px',
                }}
              >
                <Clock size={14} style={{ color: 'var(--color-muted)' }} />
                <span className="label" style={{ color: 'var(--color-muted)' }}>Building Q4 2026 · Waitlist Open</span>
              </div>

              <h1
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(2rem, 4vw, 3rem)',
                  fontWeight:    300,
                  letterSpacing: '-0.06em',
                  lineHeight:    1.1,
                  color:         'var(--color-text)',
                  marginBottom:  '20px',
                }}
              >
                Hire faster.<br />Screen smarter.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
                AI screens every CV against your rubric, ranks candidates, handles outreach,
                and schedules interviews — without a single manual email.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                Built for recruiting agencies, HR teams, and startups who hire at scale.
                Join the waitlist — we&apos;re taking early input to shape the feature set.
              </p>

              <div
                style={{
                  padding:      '20px 24px',
                  borderRadius: '12px',
                  background:   'var(--color-elevated)',
                  border:       '1px solid var(--color-border)',
                  marginBottom: '32px',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users size={18} style={{ color: 'var(--color-accent)' }} />
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)' }}>
                    Planned features
                  </p>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {plannedFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                      <CheckCircle size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="label" style={{ color: 'var(--color-muted)' }}>
                Already using us for recruiting? &nbsp;
                <Link href="/contact" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                  Talk to us about a custom build →
                </Link>
              </p>
            </div>

            {/* Waitlist form */}
            <div className="card">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '6px' }}>
                Join the waitlist
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                One email when we open. Priority access and pre-launch pricing for waitlist members.
              </p>
              <WaitlistForm serviceSlug="recruiting" serviceName="Recruiting Automation" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial — Sai M (US Staffing) */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div
            className="card"
            style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', padding: '48px 40px' }}
          >
            <p
              style={{
                fontFamily:   'var(--font-display)',
                fontSize:     '1.2rem',
                fontWeight:   500,
                color:        'var(--color-text)',
                lineHeight:   1.7,
                marginBottom: '24px',
                fontStyle:    'italic',
              }}
            >
              &ldquo;We brought them on as our AI development agency mainly to clean up our internal
              processes. The business process automation with AI they implemented actually made a
              noticeable difference within weeks. Less manual work, fewer mistakes.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9rem' }}>
              Sai M
            </p>
            <p className="label" style={{ color: 'var(--color-muted)' }}>CEO · Staffing & Recruiting · Florida 🇺🇸</p>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="Need automation today?"
        subtext="Our social media and teacher automation tools are live and ready to build."
        cta="See Live Automations"
        ctaHref="/services/ai-automation"
      />
    </>
  )
}
