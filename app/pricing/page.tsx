import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { FaqAccordion } from '@/components/ui/FaqAccordion'

export const metadata = {
  title:       'Pricing — MASS',
  description: 'Transparent pricing for AI automation, web development, and mobile app development. Fixed prices, no hourly surprises. Starting from $499.',
}

const categories = [
  {
    slug:    'ai-automation',
    title:   'AI Automation',
    tagline: 'Starting from $499',
    tiers: [
      {
        name:     'Starter',
        price:    '$499–$1,500',
        delivery: '1–2 weeks',
        desc:     'One automation. One integration. Fully documented.',
        popular:  false,
        ctaHref:  '/contact',
        features: [
          '1 workflow automation',
          '1 platform integration',
          'Documentation & training',
          'Google Sheets approval queue',
          '2 weeks post-build support',
        ],
      },
      {
        name:     'Growth',
        price:    '$1,500–$5,000',
        delivery: '3–4 weeks',
        desc:     'Multiple workflows, multi-platform, with a dashboard and team training.',
        popular:  true,
        ctaHref:  '/contact',
        features: [
          '3–5 workflow automations',
          'Multi-platform integration',
          'Dashboard & reporting',
          'Team training session',
          '30-day post-build support',
          'Monthly performance report',
        ],
      },
      {
        name:     'Scale',
        price:    '$5,000–$15,000',
        delivery: '6–8 weeks',
        desc:     'Custom AI agents, full automation suite, and ongoing support.',
        popular:  false,
        ctaHref:  '/book-a-call',
        features: [
          'Custom AI agents (unlimited)',
          'Full automation suite',
          'Admin dashboard',
          'Priority support (48h SLA)',
          '60-day post-build support',
          'Quarterly review call',
          'Source code ownership',
        ],
      },
    ],
  },
  {
    slug:    'web-development',
    title:   'Web Development',
    tagline: 'Starting from $500',
    tiers: [
      {
        name:     'Landing Page',
        price:    '$500–$2,000',
        delivery: '1 week',
        desc:     'A single, conversion-focused page. SEO-ready, mobile-first.',
        popular:  false,
        ctaHref:  '/contact',
        features: [
          'Single page, fully responsive',
          'Contact / lead capture form',
          'SEO foundations (meta, OG)',
          'Google Analytics',
          'Deployment included',
        ],
      },
      {
        name:     'Business Website',
        price:    '$2,000–$8,000',
        delivery: '2–3 weeks',
        desc:     'Full website with CMS — update content without code.',
        popular:  true,
        ctaHref:  '/contact',
        features: [
          '5–10 pages',
          'Sanity CMS (no-code editing)',
          'Blog / insights section',
          'Contact form → email / Sheets',
          'SEO-optimised structure',
          'Analytics + monitoring',
          '30-day post-launch support',
        ],
      },
      {
        name:     'Web App / MVP',
        price:    '$8,000–$25,000',
        delivery: '6–12 weeks',
        desc:     'Full-stack app with auth, database, and business logic.',
        popular:  false,
        ctaHref:  '/book-a-call',
        features: [
          'Full-stack Next.js app',
          'Authentication',
          'Database design & API',
          'Admin dashboard',
          'Stripe payments (optional)',
          'CI/CD pipeline',
          '30-day post-launch support',
        ],
      },
    ],
  },
  {
    slug:    'mobile-apps',
    title:   'Mobile Apps',
    tagline: 'Starting from $12,000',
    tiers: [
      {
        name:     'MVP App',
        price:    '$12,000–$25,000',
        delivery: '8–12 weeks',
        desc:     'Core product on iOS and Android. Submitted to both stores.',
        popular:  false,
        ctaHref:  '/book-a-call',
        features: [
          'Cross-platform iOS + Android',
          'Core feature set',
          'Backend API + database',
          'Authentication',
          'Push notifications',
          'Both store submissions',
          '30-day post-launch support',
        ],
      },
      {
        name:     'Full App',
        price:    '$25,000–$50,000',
        delivery: '16–24 weeks',
        desc:     'Full-featured native-feel app with analytics and payments.',
        popular:  true,
        ctaHref:  '/book-a-call',
        features: [
          'Everything in MVP',
          'Native-feel UI animations',
          'In-app payments',
          'Analytics dashboard',
          'Admin web panel',
          'CI/CD pipeline',
          '60-day post-launch support',
        ],
      },
    ],
  },
]

const faqs = [
  {
    q: 'Do you charge hourly or fixed price?',
    a: 'Fixed price, always. We scope everything before we start, agree on a price, and that\'s what you pay. No hourly billing, no scope-creep invoices.',
  },
  {
    q: 'What happens if I want to change something mid-project?',
    a: 'Small changes are absorbed. If something materially changes the scope, we\'ll flag it, agree on the impact, and adjust before continuing. You\'ll never get a surprise invoice.',
  },
  {
    q: 'Do I own the code after the project?',
    a: 'Yes. You own 100% of the code, design files, and data. We hand over everything at the end. No vendor lock-in, no ongoing license fees.',
  },
  {
    q: 'Can you start this week?',
    a: 'Depends on current capacity. Book a call — we\'ll tell you exactly when we can start. We typically have 1–2 week lead times.',
  },
  {
    q: 'What is the 30-day post-launch support?',
    a: 'Any bugs or issues that arise within 30 days of launch are fixed at no extra cost. This doesn\'t cover new feature requests — just ensuring what we built works perfectly.',
  },
  {
    q: 'Do you work with non-technical founders?',
    a: 'Yes — in fact most of our clients are non-technical. We explain every decision in plain English, never assume technical knowledge, and handle all the technical work ourselves.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Pricing"
      >
        <div className="container-mass text-center">
          <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Pricing</p>
          <SplitHeading
            as="h1"
            scrollTrigger
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight:    300,
              letterSpacing: '-0.06em',
              lineHeight:    1.1,
              color:         'var(--color-text)',
              marginBottom:  '20px',
            }}
          >
            Clear pricing. No hourly surprises.
          </SplitHeading>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            Fixed-scope, fixed-price engagements. Every project starts with a free
            scoping call — we agree on what we build, and that&apos;s what you pay.
          </p>
          <Link href="/book-a-call" className="btn-primary">
            Book a Free Scoping Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Pricing tables by category */}
      {categories.map((cat, catIdx) => (
        <section
          key={cat.slug}
          className="section-py"
          style={{ background: catIdx % 2 === 0 ? 'var(--color-elevated)' : 'var(--color-bg)' }}
        >
          <div className="container-mass">
            <AnimatedCard className="mb-10" direction="up">
              <p className="label mb-2" style={{ color: 'var(--color-accent)' }}>{cat.tagline}</p>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                {cat.title}
              </h2>
            </AnimatedCard>

            <div
              className={`grid grid-cols-1 gap-6 ${cat.tiers.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}
              style={{ maxWidth: cat.tiers.length === 2 ? '760px' : undefined }}
            >
              {cat.tiers.map((tier, tIdx) => (
                <AnimatedCard key={tier.name} delay={tIdx * 0.1}>
                <div
                  className="card flex flex-col gap-5"
                  style={{
                    borderColor: tier.popular ? 'var(--color-accent)' : undefined,
                    position:    'relative',
                    overflow:    'hidden',
                  }}
                >
                  {tier.popular && (
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
                        fontFamily:    'var(--font-display)',
                        fontSize:      cat.slug === 'mobile-apps' ? '1.3rem' : '1.7rem',
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

                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>{tier.desc}</p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2" style={{ fontSize: '0.825rem', color: 'var(--color-muted)' }}>
                        <CheckCircle size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link href={tier.ctaHref} className="btn-primary" style={{ textAlign: 'center' }}>
                    Get Started <ArrowRight size={14} />
                  </Link>
                </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="section-py">
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Common questions.
            </h2>
          </div>

          <FaqAccordion items={faqs} />

          <div className="text-center" style={{ marginTop: '40px' }}>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Not sure which tier is right for you?
            </p>
            <Link href="/book-a-call" className="btn-ghost">
              Book a Free 30-Min Scoping Call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
