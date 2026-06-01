import Link from 'next/link'
import { ArrowRight, GraduationCap, CheckCircle, MessageSquare, FileText, Cloud } from 'lucide-react'
import { CtaBanner } from '@/components/home/CtaBanner'

export const metadata = {
  title:       'Teacher & Educator Automation Tools — MASS AI Services',
  description: 'AI-powered lesson plan generation, presentation creation, and worksheet automation for teachers and educators. Delivered to Telegram, backed up to Google Drive.',
}

const flowNodes = [
  { n: 1, icon: MessageSquare, title: 'Teacher Types a Command', desc: 'A single message in Telegram: "Grade 8 Fractions worksheet, 20 questions, mixed difficulty."' },
  { n: 2, icon: GraduationCap,  title: 'AI Retrieves Curriculum',  desc: 'RAG pulls the relevant curriculum standard (NCERT, CBSE, or custom). Context is always accurate.' },
  { n: 3, icon: FileText,       title: 'Content Generated',        desc: 'AI generates a structured lesson plan, worksheet, or presentation — formatted for your template.' },
  { n: 4, icon: Cloud,          title: 'Delivered & Backed Up',    desc: 'PPTX / PDF sent to Telegram instantly. Automatically saved to Google Drive for every session.' },
]

const useCases = [
  { title: 'Lesson Plans',    desc: 'Full lesson plan with objectives, activities, assessment, and differentiation — in under 60 seconds.' },
  { title: 'Worksheets',      desc: 'Graded question sets with answer keys. Adjustable difficulty, topic, and number of questions.' },
  { title: 'Presentations',   desc: 'PPTX slides with structured content, speaker notes, and your school branding.' },
  { title: 'Quiz Generation', desc: 'Multiple choice, short answer, or essay prompts tied to your curriculum unit.' },
  { title: 'Report Comments', desc: 'Student report card comments generated from your notes — personalised for each student.' },
  { title: 'Parent Comms',    desc: 'Newsletters, permission slips, and meeting summaries drafted in your voice.' },
]

const included = [
  'Telegram bot integration (or WhatsApp)',
  'Custom curriculum upload (PDF, Word)',
  'Lesson plan generation',
  'Worksheet + quiz generation',
  'PPTX / PDF output',
  'Google Drive auto-backup',
  'School branding template',
  'Handover documentation + training session',
]

export default function TeacherToolsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
        aria-label="Teacher Tools Automation"
      >
        <div className="container-mass">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/services" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <Link href="/services/ai-automation" className="label" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>AI Automation</Link>
            <span className="label" style={{ color: 'var(--color-border)' }}>/</span>
            <span className="label" style={{ color: 'var(--color-accent)' }}>Teacher Tools</span>
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
                <GraduationCap size={16} style={{ color: 'var(--color-accent)' }} />
                <span className="label" style={{ color: 'var(--color-accent)' }}>Teacher Automation Tools</span>
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
                Lesson plans in seconds.<br />Not hours.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '20px' }}>
                Type a command in Telegram. Get a complete, curriculum-aligned lesson plan,
                worksheet, or presentation — delivered to your phone in under 60 seconds.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                Built for individual teachers, schools, and education businesses. Fully
                customised to your curriculum. You own the system — no subscriptions, no lock-in.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/book-a-call" className="btn-primary">
                  Book a Free Demo <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-ghost">Ask a Question</Link>
              </div>
            </div>

            {/* Included card */}
            <div className="card">
              <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Everything included</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-2" style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                    <CheckCircle size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  padding:      '16px',
                  borderRadius: '10px',
                  background:   'var(--color-bg)',
                  border:       '1px solid var(--color-border)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)' }}>
                    Starting from
                  </span>
                  <span
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '1.6rem',
                      fontWeight:    700,
                      color:         'var(--color-accent)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    $499
                  </span>
                </div>
                <p className="label" style={{ color: 'var(--color-muted)' }}>Delivered in 1–2 weeks · One-time build · You own it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation flow */}
      <section className="section-py" style={{ background: 'var(--color-elevated)' }}>
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>The Automation Flow</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              One message. Complete lesson plan.<br />No extra steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flowNodes.map((node) => {
              const Icon = node.icon
              return (
                <div key={node.n} className="card">
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

      {/* Use cases */}
      <section className="section-py">
        <div className="container-mass">
          <div className="text-center mb-12">
            <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>Use Cases</p>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              What can the AI generate for you?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <div key={uc.title} className="card">
                <h3
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontWeight:   700,
                    fontSize:     '1rem',
                    color:        'var(--color-text)',
                    marginBottom: '8px',
                  }}
                >
                  {uc.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
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
              &ldquo;I wasn&apos;t sure what to expect from AI automation services, but it&apos;s been
              surprisingly practical. They helped us automate a lot of small but time-consuming tasks.
              It&apos;s not flashy, just really useful.&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9rem' }}>
              Deepak Kumar
            </p>
            <p className="label" style={{ color: 'var(--color-muted)' }}>Director · Education · Andhra Pradesh 🇮🇳</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
