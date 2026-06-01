'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ── Validation schema ──────────────────────────────────────────────────────────
const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.enum(['ai-automation', 'web-development', 'mobile-apps', 'unsure'], {
    error: 'Please select a service',
  }),
  budget: z.enum(['under-2k', '2k-10k', '10k-25k', '25k-plus', 'unsure'], {
    error: 'Please select a budget range',
  }),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

// ── Field styling helper ───────────────────────────────────────────────────────
const fieldStyle: React.CSSProperties = {
  width:           '100%',
  padding:         '12px 16px',
  borderRadius:    '10px',
  border:          '1px solid var(--color-border)',
  background:      'var(--color-surface)',
  color:           'var(--color-text)',
  fontSize:        '0.9rem',
  fontFamily:      'inherit',
  outline:         'none',
  transition:      'border-color 0.2s',
}

const labelStyle: React.CSSProperties = {
  display:      'block',
  fontFamily:   'var(--font-display)',
  fontWeight:   500,
  fontSize:     '0.85rem',
  color:        'var(--color-text)',
  marginBottom: '6px',
}

const errorStyle: React.CSSProperties = {
  fontSize:   '0.78rem',
  color:      '#EF4444',
  marginTop:  '4px',
}

// ── Component ──────────────────────────────────────────────────────────────────
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setStatus('loading')

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

    try {
      if (!scriptUrl) {
        // Development fallback — log and succeed
        console.log('Contact form submission (no script URL configured):', data)
        await new Promise((r) => setTimeout(r, 800))
        setStatus('success')
        reset()
        return
      }

      // POST to Google Apps Script (no-cors — response will be opaque, but it works)
      await fetch(scriptUrl, {
        method:  'POST',
        mode:    'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          timestamp: new Date().toISOString(),
          ...data,
        }),
      })

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  // ── Success state ────────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div
        className="card flex flex-col items-center text-center gap-4"
        style={{ padding: '48px 32px' }}
      >
        <CheckCircle size={48} style={{ color: '#22C55E' }} />
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
          Message sent!
        </h3>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', maxWidth: '340px', lineHeight: 1.7 }}>
          We typically respond within 4 hours during business hours. We&apos;ll
          be in touch at the email you provided.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-ghost text-sm px-5 py-2"
        >
          Send another message
        </button>
      </div>
    )
  }

  // ── Form ─────────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card flex flex-col gap-5"
      noValidate
    >
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Your Name <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Alex Johnson"
            style={fieldStyle}
            {...register('name')}
          />
          {errors.name && (
            <p style={errorStyle}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" style={labelStyle}>
            Email Address <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="alex@company.com"
            style={fieldStyle}
            {...register('email')}
          />
          {errors.email && (
            <p style={errorStyle}>{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" style={labelStyle}>
          Company <span style={{ color: 'var(--color-muted)', fontWeight: 400 }}>(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          placeholder="Acme Inc."
          style={fieldStyle}
          {...register('company')}
        />
      </div>

      {/* Service + Budget row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" style={labelStyle}>
            I need help with <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <select
            id="service"
            style={fieldStyle}
            {...register('service')}
            defaultValue=""
          >
            <option value="" disabled>Select a service</option>
            <option value="ai-automation">AI Automation</option>
            <option value="web-development">Web Development</option>
            <option value="mobile-apps">Mobile App</option>
            <option value="unsure">Not sure yet</option>
          </select>
          {errors.service && (
            <p style={errorStyle}>{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" style={labelStyle}>
            Budget range <span style={{ color: 'var(--color-accent)' }}>*</span>
          </label>
          <select
            id="budget"
            style={fieldStyle}
            {...register('budget')}
            defaultValue=""
          >
            <option value="" disabled>Select a range</option>
            <option value="under-2k">Under $2,000</option>
            <option value="2k-10k">$2,000 – $10,000</option>
            <option value="10k-25k">$10,000 – $25,000</option>
            <option value="25k-plus">$25,000+</option>
            <option value="unsure">Not sure</option>
          </select>
          {errors.budget && (
            <p style={errorStyle}>{errors.budget.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          Tell us about your project <span style={{ color: 'var(--color-accent)' }}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you trying to build or automate? What's the biggest pain point right now?"
          style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.6 }}
          {...register('message')}
        />
        {errors.message && (
          <p style={errorStyle}>{errors.message.message}</p>
        )}
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div
          className="flex items-center gap-3"
          style={{
            padding:      '12px 16px',
            borderRadius: '10px',
            background:   'rgba(239,68,68,0.08)',
            border:       '1px solid rgba(239,68,68,0.2)',
            color:        '#EF4444',
            fontSize:     '0.875rem',
          }}
        >
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:work.ratananmol@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
            work.ratananmol@gmail.com
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary text-base px-7 py-3.5 self-start"
        style={{ opacity: status === 'loading' ? 0.7 : 1 }}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        select option {
          background: var(--color-surface);
          color: var(--color-text);
        }
      `}</style>
    </form>
  )
}
