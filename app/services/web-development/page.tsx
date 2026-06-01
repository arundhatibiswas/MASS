import Link from 'next/link'
import { ArrowRight, Globe, CheckCircle, Layers, Code, BarChart2, Zap } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'

export const metadata = {
  title:       'Web Development Services — MASS',
  description: 'Custom web development: landing pages, SaaS platforms, MVPs, and web apps. Built with Next.js and React. Starting from $500, delivered in weeks.',
}

const tiers = [
  {
    name:     'Landing Page',
    price:    '$500–$2,000',
    delivery: '1 week',
    desc:     'A single, conversion-focused page that represents your brand and captures leads.',
    features: [
      'Single page, fully responsive',
      'Mobile-first design',
      'Contact / lead capture form',
      'SEO foundations (meta, OG, schema)',
      'Google Analytics integration',
      'Deployment included',
    ],
    cta:      'Get a Quote',
  },
  {
    name:     'Business Website',
    price:    '$2,000–$8,000',
    delivery: '2–3 weeks',
    featured: true,
    desc:     'A full website with CMS so you can update content yourself — no developer needed.',
    features: [
      '5–10 pages (Home, About, Services, Blog, Contact)',
      'Sanity CMS — update content without code',
      'Blog / insights section',
      'SEO-optimised page structure',
      'Analytics + performance monitoring',
      'Contact form → email / Google Sheets',
      '30-day post-launch support',
    ],
    cta:      'Get a Quote',
  },
  {
    name:     'Web App / MVP',
    price:    '$8,000–$25,000',
    delivery: '6–12 weeks',
    desc:     'A full web application with authentication, database, and business logic.',
    features: [
      'Full-stack Next.js application',
      'Authentication (NextAuth / Clerk)',
      'Database design & API',
      'Admin dashboard',
      'Stripe payments (if needed)',
      'CI/CD pipeline',
      'Staging + production environments',
      '30-day post-launch support',
    ],
    cta:      'Book a Scoping Call',
  },
]

const techStack = [
  { name: 'Next.js 15',    desc: 'App Router, Server Components, ISR' },
  { name: 'React 19',      desc: 'Latest stable, concurrent features' },
  { name: 'TypeScript',    desc: 'Fully typed, no implicit any' },
  { name: 'TailwindCSS',   desc: 'Design tokens, dark/light themes' },
  { name: 'Sanity CMS',    desc: 'Non-developer content management' },
  { name: 'PostgreSQL',    desc: 'Production database with Prisma ORM' },
  { name: 'Vercel / Node', desc: 'Edge-ready deployment' },
  { name: 'Stripe',        desc: 'Payments, subscriptions, invoicing' },
]

const caseStudies = [
  {
    client:   'Inventrics Technologies',
    location: 'Hyderabad, India 🇮🇳',
    industry: 'IT Staffing',
    result1:  '+43%',
    label1:   'Conversion rate',
    result2:  '+57%',
    label2:   'Local awareness',
    result3:  '−65%',
    label3:   'Marketing cost',
    delivery: 'Delivered in <10 days',
    href:     '/work/inventrics-technologies',
  },
  {
    client:   "Dr. Vijay's Surgery Center",
    location: 'Vijayawada, India 🇮🇳',
    industry: 'Healthcare',
    result1:  '+45%',
    label1:   'Conversion rate',
    result2:  '+38%',
    label2:   'Brand awareness',
    result3:  '0→#1',
    label3:   'Google Maps rank',
    delivery: 'SEO website from scratch',
    href:     '/work/dr-vijay-plastic-surgery',
  },
]

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Web Development"
      >
        <div className="container-mass">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-accent)' }}>Web Development</span>
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
                <Globe size={16} style={{ color: 'var(--color-accent)' }} />
                <span className="label" style={{ color: 'var(--color-accent)' }}>Web Development</span>
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
                Software that earns<br />its keep.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '20px', maxWidth: '480px' }}>
                Landing pages to full SaaS platforms. We build with Next.js and modern stacks —
                delivered fast, designed to scale, measurably better for your business.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '480px' }}>
                Every project starts with a scoping call. We write down exactly what we&apos;re
                building, agree on the price, and start. No surprises.
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
                { icon: Zap,      title: '6-week avg',        sub: 'Delivery time for most web apps' },
                { icon: Code,     title: 'Modern stack',      sub: 'Next.js 15, TypeScript, Tailwind' },
                { icon: Layers,   title: 'CMS included',      sub: 'Sanity for non-developer updates' },
                { icon: BarChart2, title: 'SEO-first',        sub: 'Built to rank from day one' },
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

      {/* Pricing tiers */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Pricing</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Clear pricing. No hourly surprises.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700,
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

                <Link
                  href={tier.name === 'Web App / MVP' ? '/book-a-call' : '/contact'}
                  className="btn-primary"
                  style={{ textAlign: 'center' }}
                >
                  {tier.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-py">
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Proof of Work</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Real results for real businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link key={cs.client} href={cs.href} style={{ textDecoration: 'none' }}>
                <div className="card group" style={{ cursor: 'pointer' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '2px' }}>
                        {cs.client}
                      </p>
                      <p className="label" style={{ color: 'var(--color-muted)' }}>{cs.industry} · {cs.location}</p>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--color-accent)', marginTop: '4px', flexShrink: 0 }} />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: cs.result1, lbl: cs.label1 },
                      { val: cs.result2, lbl: cs.label2 },
                      { val: cs.result3, lbl: cs.label3 },
                    ].map((r) => (
                      <div key={r.lbl} style={{ textAlign: 'center' }}>
                        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--color-accent)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '2px' }}>
                          {r.val}
                        </p>
                        <p className="label" style={{ color: 'var(--color-muted)' }}>{r.lbl}</p>
                      </div>
                    ))}
                  </div>

                  <p className="label" style={{ color: 'var(--color-muted)', marginTop: '12px' }}>
                    {cs.delivery}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Tech Stack</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Modern stack. Battle-tested.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((t) => (
              <div key={t.name} className="card text-center">
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '4px', fontSize: '0.95rem' }}>
                  {t.name}
                </p>
                <p className="label" style={{ color: 'var(--color-muted)' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
