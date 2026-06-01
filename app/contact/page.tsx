'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ui/ContactForm'
import { SplitHeading } from '@/components/ui/SplitHeading'
import { Mail, MessageSquare, Clock } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon:  Mail,
    label: 'Email us directly',
    value: 'work.ratananmol@gmail.com',
    href:  'mailto:work.ratananmol@gmail.com',
  },
  {
    icon:  MessageSquare,
    label: 'Book a call instead',
    value: 'Schedule a free 30-min scoping call',
    href:  '/book-a-call',
  },
  {
    icon:  Clock,
    label: 'Response time',
    value: 'Typically within 4 business hours',
    href:  null,
  },
]

export default function ContactPage() {
  return (
    <section
      className="section-py"
      style={{ paddingTop: 'calc(var(--section-py, 96px) + 80px)' }}
      aria-label="Contact Us"
    >
      <div className="container-mass">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="label mb-4" style={{ color: 'var(--color-accent)' }}>
            Get In Touch
          </p>
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
              marginBottom:  '16px',
            }}
          >
            Let&apos;s talk about what you&apos;re building.
          </SplitHeading>
          <p
            style={{
              fontSize:  '1rem',
              color:     'var(--color-muted)',
              maxWidth:  '480px',
              lineHeight: 1.75,
            }}
          >
            Fill in the form and we&apos;ll send you a scoping proposal within
            24 hours — scope, timeline, and a fixed price. No vague estimates.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form — takes 2/3 */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar — 1/3 */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Contact info cards */}
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="card flex gap-4"
                  style={{ padding: '20px 24px' }}
                >
                  <div
                    style={{
                      width:          '40px',
                      height:         '40px',
                      borderRadius:   '10px',
                      background:     'var(--color-glow)',
                      border:         '1px solid var(--color-border)',
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      flexShrink:     0,
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <p className="label mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize:       '0.875rem',
                          color:          'var(--color-accent)',
                          fontWeight:     500,
                          textDecoration: 'none',
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}

            {/* What to expect */}
            <div className="card" style={{ padding: '24px' }}>
              <h3
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '1rem',
                  fontWeight:   700,
                  color:        'var(--color-text)',
                  marginBottom: '16px',
                }}
              >
                What happens next
              </h3>
              <ol
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '12px',
                  paddingLeft:   0,
                  listStyle:     'none',
                }}
              >
                {[
                  'We read your message and review your requirements',
                  'We scope the project and prepare a fixed-price proposal',
                  'We send it within 24 hours — scope, timeline, cost',
                  'You review, approve, and we start the Decode phase',
                ].map((step, i) => (
                  <li
                    key={i}
                    style={{
                      display:    'flex',
                      gap:        '12px',
                      fontSize:   '0.85rem',
                      color:      'var(--color-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        width:          '22px',
                        height:         '22px',
                        borderRadius:   '50%',
                        background:     'var(--color-glow)',
                        border:         '1px solid var(--color-border)',
                        display:        'flex',
                        alignItems:     'center',
                        justifyContent: 'center',
                        fontFamily:     'var(--font-display)',
                        fontWeight:     700,
                        fontSize:       '0.72rem',
                        color:          'var(--color-accent)',
                        flexShrink:     0,
                        marginTop:      '1px',
                      }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
