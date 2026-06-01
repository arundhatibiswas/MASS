import Link from 'next/link'
import { ArrowRight, Smartphone, CheckCircle, Layers, Zap, Shield, Star } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'

export const metadata = {
  title:       'Mobile App Development — MASS',
  description: 'Cross-platform iOS and Android app development with React Native and Flutter. Submitted to both app stores. Starting from $12,000.',
}

const tiers = [
  {
    name:     'MVP App',
    price:    '$12,000–$25,000',
    delivery: '8–12 weeks',
    desc:     'Your core product, on iOS and Android, submitted to both stores.',
    features: [
      'Cross-platform iOS + Android',
      'Core feature set (agreed upfront)',
      'Backend API + database',
      'User authentication',
      'Push notifications',
      'App Store + Play Store submission',
      '30-day post-launch support',
    ],
    cta: 'Book a Scoping Call',
  },
  {
    name:     'Full App',
    price:    '$25,000–$50,000',
    delivery: '16–24 weeks',
    featured: true,
    desc:     'Full-featured, native-feel app with analytics, payments, and ongoing support.',
    features: [
      'Everything in MVP',
      'Native-feel UI animations',
      'In-app payments (Stripe / IAP)',
      'Analytics dashboard',
      'Admin web panel',
      'CI/CD pipeline',
      'Performance optimisation',
      '60-day post-launch support',
    ],
    cta: 'Book a Scoping Call',
  },
]

const frameworks = [
  {
    name:  'React Native',
    best:  'Best for',
    desc:  'Teams who want a single JS codebase shared with a web app. Largest ecosystem, easiest to hire for.',
    pros:  ['Shared code with web (Next.js)', 'Large hiring pool', 'Expo managed workflow'],
  },
  {
    name:  'Flutter',
    best:  'Best for',
    desc:  'Teams who need pixel-perfect custom UI on both platforms. Dart compiles to native — fastest render.',
    pros:  ['Pixel-perfect custom UI', 'Excellent performance', 'Growing ecosystem'],
  },
]

const deliveryPhases = [
  { n: 1, title: 'Discovery',    wks: 'Wk 1',    desc: 'User flows, feature list, architecture. Everything agreed in writing.' },
  { n: 2, title: 'Design',       wks: 'Wk 2–3',  desc: 'Hi-fi Figma screens with interactions. You approve before we build.' },
  { n: 3, title: 'Build',        wks: 'Wk 4–10', desc: 'Biweekly demos. You see working software throughout — no big-bang delivery.' },
  { n: 4, title: 'QA & Polish',  wks: 'Wk 11',   desc: 'Device testing (real iPhones + Androids), performance profiling, bug fixes.' },
  { n: 5, title: 'Submission',   wks: 'Wk 12',   desc: 'Both store submissions handled by us. We manage the review process.' },
  { n: 6, title: 'Launch + 30d', wks: 'Post',     desc: 'Post-launch monitoring. Fixes included. Handover docs + training session.' },
]

export default function MobileAppsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Mobile App Development"
      >
        <div className="container-mass">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-accent)' }}>Mobile Apps</span>
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
                <Smartphone size={16} style={{ color: 'var(--color-accent)' }} />
                <span className="label" style={{ color: 'var(--color-accent)' }}>Mobile Apps</span>
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
                One build.<br />iOS + Android.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '20px', maxWidth: '480px' }}>
                Cross-platform apps that feel native. React Native and Flutter for teams who
                need to ship fast without building two separate codebases.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
                We handle everything — design, build, QA, and both store submissions.
                You launch with working software, documentation, and training.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-a-call" className="btn-primary">
                  Book a Scoping Call <ArrowRight size={16} />
                </Link>
                <Link href="/work" className="btn-ghost">See Our Work</Link>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Layers,  title: 'Cross-platform', sub: 'One codebase, iOS & Android' },
                { icon: Zap,     title: '8-week MVP',     sub: 'Typical delivery window' },
                { icon: Shield,  title: 'Store handled',  sub: 'We submit both apps for you' },
                { icon: Star,    title: 'Native feel',    sub: 'No compromise on UX quality' },
              ].map((h) => {
                const Icon = h.icon
                return (
                  <div key={h.title} className="card">
                    <Icon size={20} style={{ color: 'var(--color-accent)', marginBottom: '10px' }} />
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem', marginBottom: '4px' }}>
                      {h.title}
                    </p>
                    <p className="label" style={{ color: 'var(--color-muted)' }}>{h.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Framework choice */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Technology</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              React Native or Flutter?<br />We help you choose.
            </h2>
            <p style={{ color: 'var(--color-muted)', maxWidth: '500px', margin: '12px auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
              Both are excellent. We recommend the one that fits your team and roadmap —
              not the one that&apos;s trendier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '760px', margin: '0 auto' }}>
            {frameworks.map((fw) => (
              <div key={fw.name} className="card">
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-accent)', fontSize: '1.2rem', marginBottom: '8px' }}>
                  {fw.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65, marginBottom: '16px' }}>
                  {fw.desc}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {fw.pros.map((p) => (
                    <li key={p} className="flex items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                      <CheckCircle size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section-py">
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Pricing</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Fixed price. No hourly surprises.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '760px', margin: '0 auto' }}>
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
                      style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--color-accent)' }}
                    />
                    <span
                      className="label"
                      style={{
                        position: 'absolute', top: '16px', right: '16px',
                        padding: '3px 8px', borderRadius: '6px',
                        background: 'var(--color-accent)', color: '#fff', fontSize: '10px',
                      }}
                    >
                      Recommended
                    </span>
                  </>
                )}

                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px' }}>
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700,
                      color: 'var(--color-accent)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '4px',
                    }}
                  >
                    {tier.price}
                  </p>
                  <p className="label" style={{ color: 'var(--color-muted)' }}>Delivered in {tier.delivery}</p>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>{tier.desc}</p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2" style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                      <CheckCircle size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/book-a-call" className="btn-primary" style={{ textAlign: 'center' }}>
                  {tier.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery process */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Delivery Process</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              From brief to App Store<br />in 12 weeks.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliveryPhases.map((phase) => (
              <div key={phase.n} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      width:        '36px',
                      height:       '36px',
                      borderRadius: '8px',
                      background:   'var(--color-glow)',
                      border:       '1px solid var(--color-border)',
                      display:      'flex',
                      alignItems:   'center',
                      justifyContent: 'center',
                      fontFamily:   'var(--font-display)',
                      fontWeight:   600,
                      fontSize:     '0.9rem',
                      color:        'var(--color-accent)',
                      flexShrink:   0,
                    }}
                  >
                    {phase.n}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
                      {phase.title}
                    </p>
                    <p className="label" style={{ color: 'var(--color-accent)' }}>{phase.wks}</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — V Vijay */}
      <section className="section-py">
        <div className="container-mass">
          <div
            className="card"
            style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', padding: '48px 40px' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500,
                color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic',
              }}
            >
              &ldquo;Their mobile app development agency team built our app using cross-platform app development,
              and it turned out really smooth on both Android and iOS. We also added an AI chatbot for website
              support, which our customers are actually using a lot.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9rem' }}>
              V Vijay
            </p>
            <p className="label" style={{ color: 'var(--color-muted)' }}>CEO · Finance · Chicago 🇺🇸</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
