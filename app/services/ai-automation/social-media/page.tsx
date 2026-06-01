import Link from 'next/link'
import { ArrowRight, Share2, CheckCircle, Zap, BarChart2, Clock } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'

export const metadata = {
  title:       'Social Media Automation — MASS AI Services',
  description: 'AI-powered social media automation: trend scanning, content generation, approval queue, and multi-platform publishing. Starting from $499.',
}

const flowNodes = [
  { n: 1, icon: BarChart2, title: 'Trend Scan',    desc: 'AI monitors Twitter, Reddit, Google Trends, and your niche keywords — continuously.' },
  { n: 2, icon: Zap,       title: 'AI Drafting',   desc: 'Gemini/GPT generates brand-aligned captions, hashtags, and hooks for each platform.' },
  { n: 3, icon: CheckCircle, title: 'You Approve', desc: 'Posts land in a Google Sheets queue. One click approves, one click edits, one click rejects.' },
  { n: 4, icon: Clock,     title: 'Auto Publish',  desc: 'Approved posts publish on your schedule across all connected platforms. Zero manual effort.' },
]

const platforms = ['Instagram', 'Facebook', 'Twitter / X', 'LinkedIn', 'TikTok', 'Threads']

const whatsIncluded = [
  'Trend monitoring (up to 10 keywords)',
  'AI content generation (Gemini Pro)',
  'Multi-platform post formatting',
  'Google Sheets approval queue',
  'Scheduled publishing (Zapier / Make)',
  'Hashtag optimisation',
  'Performance reporting (monthly)',
  'Handover documentation + training',
]

const tiers = [
  {
    name:     'Starter',
    price:    '$499',
    delivery: '1 week',
    features: ['1 platform', 'Up to 30 posts/month', 'AI caption generation', 'Google Sheets queue', 'Basic training'],
  },
  {
    name:     'Growth',
    price:    '$1,500',
    delivery: '2 weeks',
    featured: true,
    features: ['3 platforms', 'Up to 90 posts/month', 'Trend scanning', 'Full approval workflow', 'Hashtag optimisation', 'Monthly report', 'Extended support'],
  },
]

export default function SocialMediaAutomationPage() {
  return (
    <>
      {/* Breadcrumb + Hero */}
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Social Media Automation"
      >
        <div className="container-mass">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <Link href="/services/ai-automation" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>AI Automation</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-accent)' }}>Social Media</span>
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
                  background:   'var(--color-glow)',
                  border:       '1px solid var(--color-border)',
                  marginBottom: '20px',
                }}
              >
                <Share2 size={16} style={{ color: 'var(--color-accent)' }} />
                <span className="label" style={{ color: 'var(--color-accent)' }}>Social Media Automation</span>
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
                Publish on autopilot.<br />Stay on brand.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
                Our AI scans trending topics, generates captions in your voice, routes posts through
                your approval queue, and publishes on schedule — across every platform you need.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                You stay in control. You approve every post. You own the system. We just remove
                the 3–4 hours per week you currently spend doing this manually.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-a-call" className="btn-primary">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-ghost">Ask a Question</Link>
              </div>
            </div>

            {/* Platforms */}
            <div className="card">
              <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Platforms Supported</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="label"
                    style={{
                      padding:      '6px 12px',
                      borderRadius: '8px',
                      background:   'var(--color-elevated)',
                      border:       '1px solid var(--color-border)',
                      color:        'var(--color-muted)',
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                <p className="label mb-3" style={{ color: 'var(--color-muted)' }}>What&apos;s included</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {whatsIncluded.map((item) => (
                    <li key={item} className="flex items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — automation flow */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>The Automation Flow</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              From trending topic to published post<br />without touching your keyboard.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flowNodes.map((node, i) => {
              const Icon = node.icon
              return (
                <div key={node.n} className="card" style={{ position: 'relative' }}>
                  {/* Connector arrow (desktop only) */}
                  {i < flowNodes.length - 1 && (
                    <div
                      aria-hidden
                      style={{
                        position:  'absolute',
                        right:     '-18px',
                        top:       '28px',
                        color:     'var(--color-accent)',
                        fontSize:  '18px',
                        zIndex:    1,
                        display:   'none', // shown via md: in a real implementation
                      }}
                    >
                      →
                    </div>
                  )}
                  <div
                    style={{
                      width:        '44px',
                      height:       '44px',
                      borderRadius: '12px',
                      background:   'var(--color-glow)',
                      border:       '1px solid var(--color-border)',
                      display:      'flex',
                      alignItems:   'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div
                    className="label"
                    style={{
                      background:   'var(--color-accent)',
                      color:        '#fff',
                      borderRadius: '6px',
                      padding:      '2px 8px',
                      display:      'inline-block',
                      marginBottom: '8px',
                      fontSize:     '10px',
                    }}
                  >
                    Step {node.n}
                  </div>
                  <h3
                    style={{
                      fontFamily:   'var(--font-display)',
                      fontWeight:   700,
                      fontSize:     '1rem',
                      color:        'var(--color-text)',
                      marginBottom: '8px',
                    }}
                  >
                    {node.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                    {node.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section-py">
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Pricing</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Simple, transparent pricing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '720px', margin: '0 auto' }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="card flex flex-col gap-5"
                style={{
                  borderColor: tier.featured ? 'var(--color-accent)' : undefined,
                  position:    'relative',
                  overflow:    'hidden',
                }}
              >
                {tier.featured && (
                  <>
                    <div
                      aria-hidden
                      style={{
                        position:   'absolute',
                        top:        0,
                        left:       0,
                        right:      0,
                        height:     '3px',
                        background: 'var(--color-accent)',
                      }}
                    />
                    <span
                      className="label"
                      style={{
                        position:     'absolute',
                        top:          '16px',
                        right:        '16px',
                        padding:      '3px 8px',
                        borderRadius: '6px',
                        background:   'var(--color-accent)',
                        color:        '#fff',
                        fontSize:     '10px',
                      }}
                    >
                      Popular
                    </span>
                  </>
                )}

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px' }}>
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '2.2rem',
                      fontWeight:    700,
                      color:         'var(--color-accent)',
                      letterSpacing: '-0.03em',
                      lineHeight:    1,
                      marginBottom:  '4px',
                    }}
                  >
                    {tier.price}
                  </p>
                  <p className="label" style={{ color: 'var(--color-muted)' }}>Delivered in {tier.delivery}</p>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/book-a-call" className="btn-primary" style={{ textAlign: 'center' }}>
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
