'use client'

import { useState } from 'react'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'

interface WaitlistFormProps {
  serviceSlug: string
  serviceName: string
}

export function WaitlistForm({ serviceSlug, serviceName }: WaitlistFormProps) {
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [company, setCompany] = useState('')
  const [status,  setStatus]  = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error,   setError]   = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email) return

    setStatus('loading')
    setError('')

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL

      if (!scriptUrl) {
        // Dev fallback
        await new Promise((r) => setTimeout(r, 600))
        console.log('Waitlist submission (dev):', { name, email, company, service: serviceSlug })
        setStatus('success')
        return
      }

      await fetch(scriptUrl, {
        method: 'POST',
        mode:   'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          type:    'waitlist',
          service: `${serviceName} (${serviceSlug})`,
          name,
          email,
          company,
          timestamp: new Date().toISOString(),
        }),
      })

      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please email us at work.ratananmol@gmail.com')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center" style={{ padding: '32px 16px' }}>
        <CheckCircle size={40} style={{ color: 'var(--color-accent)', margin: '0 auto 16px' }} />
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '8px' }}>
          You&apos;re on the list!
        </p>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
          We&apos;ll email you at <strong style={{ color: 'var(--color-text)' }}>{email}</strong> when{' '}
          {serviceName} opens. No spam.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Name */}
      <div>
        <label
          htmlFor="wl-name"
          className="label"
          style={{ color: 'var(--color-muted)', display: 'block', marginBottom: '6px' }}
        >
          Your name *
        </label>
        <input
          id="wl-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Jane Smith"
          style={{
            width:        '100%',
            padding:      '10px 14px',
            borderRadius: '8px',
            border:       '1px solid var(--color-border)',
            background:   'var(--color-bg)',
            color:        'var(--color-text)',
            fontSize:     '0.9rem',
            outline:      'none',
          }}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="wl-email"
          className="label"
          style={{ color: 'var(--color-muted)', display: 'block', marginBottom: '6px' }}
        >
          Work email *
        </label>
        <input
          id="wl-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jane@company.com"
          style={{
            width:        '100%',
            padding:      '10px 14px',
            borderRadius: '8px',
            border:       '1px solid var(--color-border)',
            background:   'var(--color-bg)',
            color:        'var(--color-text)',
            fontSize:     '0.9rem',
            outline:      'none',
          }}
        />
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="wl-company"
          className="label"
          style={{ color: 'var(--color-muted)', display: 'block', marginBottom: '6px' }}
        >
          Company
        </label>
        <input
          id="wl-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Acme Inc."
          style={{
            width:        '100%',
            padding:      '10px 14px',
            borderRadius: '8px',
            border:       '1px solid var(--color-border)',
            background:   'var(--color-bg)',
            color:        'var(--color-text)',
            fontSize:     '0.9rem',
            outline:      'none',
          }}
        />
      </div>

      {error && (
        <div className="flex items-center gap-2" style={{ color: '#ef4444', fontSize: '0.875rem' }}>
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
            Joining...
          </>
        ) : (
          'Join Waitlist'
        )}
      </button>

      <p className="label" style={{ color: 'var(--color-muted)', textAlign: 'center' }}>
        No spam · One email when it launches
      </p>
    </form>
  )
}
