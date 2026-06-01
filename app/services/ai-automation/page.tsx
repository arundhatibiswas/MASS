import Link from 'next/link'
import { ArrowRight, Bot, Share2, GraduationCap, ShoppingCart, Users, Clock, CheckCircle } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'

export const metadata = {
  title:       'AI Automation Services — MASS',
  description: 'Custom AI workflow automation for businesses. Social media, document processing, chatbots, and more. Starting from $499.',
}

const automations = [
  {
    icon:        Share2,
    slug:        'social-media',
    status:      'live' as const,
    title:       'Social Media Automation',
    tagline:     'Publish on autopilot.',
    description: 'AI scans trending topics, generates brand-aligned content, routes it through your approval queue, and publishes on schedule. One command — done.',
    bullets:     ['Trend scanning & content generation', 'Multi-platform publishing', 'Approval queue (Google Sheets)', 'Hashtag & caption optimisation'],
    deliveryWks: '1–2',
    price:       '$499–$1,500',
  },
  {
    icon:        GraduationCap,
    slug:        'teacher-tools',
    status:      'live' as const,
    title:       'Teacher & Educator Tools',
    tagline:     'Lesson plans in seconds.',
    description: 'Teachers type a command; the AI generates structured lesson plans, presentations, and worksheets — then delivers them to Telegram and backs up to Google Drive.',
    bullets:     ['Lesson plan generation (AI + curriculum)', 'PPTX / PDF output', 'Telegram delivery', 'Google Drive backup'],
    deliveryWks: '1–2',
    price:       '$499–$1,500',
  },
  {
    icon:        ShoppingCart,
    slug:        'ecommerce',
    status:      'waitlist' as const,
    title:       'E-Commerce Automation',
    tagline:     'Inventory, pricing, fulfilment.',
    description: 'Automated product listings, dynamic pricing rules, inventory sync, and order routing. Join the waitlist — building Q3 2026.',
    bullets:     ['Dynamic pricing engine', 'Product listing automation', 'Inventory sync', 'Order routing & fulfilment'],
    deliveryWks: 'Q3 2026',
    price:       'Waitlist',
  },
  {
    icon:        Users,
    slug:        'recruiting',
    status:      'waitlist' as const,
    title:       'Recruiting Automation',
    tagline:     'Hire faster, screen smarter.',
    description: 'AI screens CVs, scores candidates against your rubric, and schedules interviews without a single manual email. Join the waitlist — building Q4 2026.',
    bullets:     ['CV screening & scoring', 'Candidate ranking', 'Automated outreach', 'Interview scheduling'],
    deliveryWks: 'Q4 2026',
    price:       'Waitlist',
  },
]

const processSteps = [
  { n: 1, title: 'Map your process',      desc: 'We document the exact workflow you want automated — every step, every decision point.' },
  { n: 2, title: 'Design the AI layer',   desc: 'We choose models, tools, and triggers. You see a blueprint before we write a line of code.' },
  { n: 3, title: 'Build & test',          desc: '1–2 week sprint. You get a demo halfway through — no surprises at the end.' },
  { n: 4, title: 'Hand over & train',     desc: 'Full documentation. We train your team. You own the code, the data, and the workflow.' },
]

export default function AiAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="AI Automation"
      >
        <div className="container-mass">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-accent)' }}>AI Automation</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <Bot size={16} style={{ color: 'var(--color-accent)' }} />
                <span className="label" style={{ color: 'var(--color-accent)' }}>AI Automation</span>
              </div>

              <h1
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(2.2rem, 4.5vw, 3.4rem)',
                  fontWeight:    300,
                  letterSpacing: '-0.06em',
                  lineHeight:    1.1,
                  color:         'var(--color-text)',
                  marginBottom:  '20px',
                }}
              >
                Stop doing it manually.<br />We automate it.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '32px', maxWidth: '480px' }}>
                Custom AI workflows that replace repetitive tasks. You describe the process;
                we build the automation. Starting from $499.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-a-call" className="btn-primary">
                  Book a Free Call <ArrowRight size={16} />
                </Link>
                <Link href="/pricing" className="btn-ghost">View Pricing</Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '$499', label: 'Starting price',       sub: 'Starter automation' },
                { value: '1–2',  label: 'Weeks to delivery',    sub: 'Most automations' },
                { value: '80%',  label: 'Avg time saved',       sub: 'Per automated process' },
                { value: '100%', label: 'You own the code',     sub: 'No vendor lock-in' },
              ].map((stat) => (
                <div key={stat.label} className="card text-center">
                  <p
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '2rem',
                      fontWeight:    700,
                      color:         'var(--color-accent)',
                      letterSpacing: '-0.03em',
                      lineHeight:    1,
                      marginBottom:  '4px',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-text)', fontSize: '0.8rem' }}>
                    {stat.label}
                  </p>
                  <p className="label" style={{ color: 'var(--color-muted)', marginTop: '2px' }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation cards */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Available Automations</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Pick your automation.<br />We build it in weeks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automations.map((auto) => {
              const Icon = auto.icon
              const isLive = auto.status === 'live'

              return (
                <div
                  key={auto.slug}
                  className="card flex flex-col gap-5"
                  style={{
                    opacity:     isLive ? 1 : 0.75,
                    position:    'relative',
                    overflow:    'hidden',
                  }}
                >
                  {/* Status bar */}
                  <div
                    aria-hidden
                    style={{
                      position:   'absolute',
                      top:        0,
                      left:       0,
                      right:      0,
                      height:     '3px',
                      background: isLive ? 'var(--color-accent)' : 'var(--color-muted)',
                    }}
                  />

                  {/* Icon + badge */}
                  <div className="flex items-start justify-between">
                    <div
                      style={{
                        width:        '48px',
                        height:       '48px',
                        borderRadius: '12px',
                        background:   'var(--color-glow)',
                        border:       '1px solid var(--color-border)',
                        display:      'flex',
                        alignItems:   'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={22} style={{ color: isLive ? 'var(--color-accent)' : 'var(--color-muted)' }} />
                    </div>
                    <span
                      className="label"
                      style={{
                        padding:      '4px 10px',
                        borderRadius: '6px',
                        background:   isLive ? 'rgba(59,130,246,0.12)' : 'var(--color-elevated)',
                        color:        isLive ? 'var(--color-accent)' : 'var(--color-muted)',
                        border:       '1px solid var(--color-border)',
                        fontSize:     '10px',
                      }}
                    >
                      {isLive ? '● Live' : '○ Waitlist'}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <p className="label mb-1" style={{ color: isLive ? 'var(--color-accent)' : 'var(--color-muted)', fontSize: '11px' }}>
                      {auto.tagline}
                    </p>
                    <h3
                      style={{
                        fontFamily:    'var(--font-display)',
                        fontSize:      '1.2rem',
                        fontWeight:    700,
                        color:         'var(--color-text)',
                        marginBottom:  '10px',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {auto.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                      {auto.description}
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                      {auto.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                          <CheckCircle size={13} style={{ color: isLive ? 'var(--color-accent)' : 'var(--color-muted)', flexShrink: 0 }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Price + delivery */}
                    <div
                      className="flex items-center gap-4"
                      style={{
                        padding:      '12px 16px',
                        borderRadius: '10px',
                        background:   'var(--color-bg)',
                        border:       '1px solid var(--color-border)',
                      }}
                    >
                      <div>
                        <p className="label" style={{ color: 'var(--color-muted)', marginBottom: '1px' }}>Price</p>
                        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
                          {auto.price}
                        </p>
                      </div>
                      <div style={{ width: '1px', height: '32px', background: 'var(--color-border)' }} />
                      <div>
                        <p className="label" style={{ color: 'var(--color-muted)', marginBottom: '1px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={10} /> Delivery
                        </p>
                        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
                          {isLive ? `${auto.deliveryWks} wks` : auto.deliveryWks}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  {isLive ? (
                    <Link
                      href={`/services/ai-automation/${auto.slug}`}
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize:   '0.875rem',
                        color:      'var(--color-accent)',
                      }}
                    >
                      See full details <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      href={`/services/ai-automation/${auto.slug}`}
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize:   '0.875rem',
                        color:      'var(--color-muted)',
                      }}
                    >
                      Join waitlist <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py">
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>How It Works</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              From process map to live automation<br />in 1–2 weeks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step) => (
              <div key={step.n} className="card">
                <div
                  style={{
                    width:        '40px',
                    height:       '40px',
                    borderRadius: '10px',
                    background:   'var(--color-glow)',
                    border:       '1px solid var(--color-border)',
                    display:      'flex',
                    alignItems:   'center',
                    justifyContent: 'center',
                    fontFamily:   'var(--font-display)',
                    fontWeight:   600,
                    fontSize:     '1rem',
                    color:        'var(--color-accent)',
                    marginBottom: '16px',
                  }}
                >
                  {step.n}
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
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
