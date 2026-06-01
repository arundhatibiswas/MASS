import Link from 'next/link'
import { ArrowRight, ShoppingCart, CheckCircle, Clock } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'
import { WaitlistForm } from '@/components/ui/WaitlistForm'

export const metadata = {
  title:       'E-Commerce Automation — MASS AI Services (Waitlist)',
  description: 'AI-powered e-commerce automation: dynamic pricing, product listing, inventory sync, and order routing. Join the waitlist for Q3 2026.',
}

const plannedFeatures = [
  'Dynamic pricing engine (competitor-aware)',
  'Automated product listing (AI descriptions + images)',
  'Inventory sync across platforms',
  'Order routing & fulfilment automation',
  'Return & refund workflow automation',
  'Customer segment-based promotion triggers',
  'Weekly performance reporting',
  'Shopify / WooCommerce / Amazon integration',
]

export default function EcommerceWaitlistPage() {
  return (
    <>
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="E-Commerce Automation Waitlist"
      >
        <div className="container-mass">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <Link href="/services/ai-automation" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>AI Automation</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-muted)' }}>E-Commerce</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Status badge */}
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
                <span className="label" style={{ color: 'var(--color-muted)' }}>Building Q3 2026 · Waitlist Open</span>
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
                E-Commerce Automation.<br />Coming Q3 2026.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
                We&apos;re building a full AI automation suite for e-commerce businesses — dynamic pricing,
                automated listings, inventory sync, and order routing across all your platforms.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                Join the waitlist to get early access, shape the feature set, and lock in a
                pre-launch price. Waitlist members get priority onboarding.
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
                  <ShoppingCart size={18} style={{ color: 'var(--color-accent)' }} />
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
                Need automation now? &nbsp;
                <Link href="/services/ai-automation" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                  See our live automations →
                </Link>
              </p>
            </div>

            {/* Waitlist form */}
            <div className="card">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '1.1rem', marginBottom: '6px' }}>
                Join the waitlist
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                We&apos;ll email you when we start onboarding. No spam — one email when it&apos;s ready.
              </p>
              <WaitlistForm serviceSlug="ecommerce" serviceName="E-Commerce Automation" />
            </div>
          </div>
        </div>
      </section>

      {/* What you get on the waitlist */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-10">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Waitlist Benefits</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Why join the waitlist?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Priority onboarding',   desc: 'Skip the queue. Waitlist members get onboarded first when we open.' },
              { title: 'Pre-launch pricing',     desc: 'Lock in a lower price before public launch. The rate stays yours.' },
              { title: 'Shape the features',     desc: 'Tell us which integrations matter most. We build what the waitlist asks for first.' },
            ].map((b) => (
              <div key={b.title} className="card">
                <CheckCircle size={20} style={{ color: 'var(--color-accent)', marginBottom: '12px' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px', fontSize: '1rem' }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
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
