'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'
import { isEuVisitor } from '@/lib/utils/geoDetect'

const STORAGE_KEY = 'mass-cookie-consent'

type ConsentState = 'accepted' | 'declined' | null

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [consent, setConsent] = useState<ConsentState>(null)

  useEffect(() => {
    // Only show for EU visitors
    if (!isEuVisitor()) return

    // Check if already decided
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState
    if (stored === 'accepted' || stored === 'declined') return

    // Small delay so it doesn't flash on first paint
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
    // GA4 is already loaded — nothing extra needed; consent recorded
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setConsent('declined')
    setVisible(false)
    // Attempt to disable GA4 if loaded
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
      // @ts-expect-error GA4 disable flag
      window[`ga-disable-${process.env.NEXT_PUBLIC_GA_ID}`] = true
    }
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position:     'fixed',
        bottom:       '24px',
        left:         '50%',
        transform:    'translateX(-50%)',
        zIndex:       9999,
        width:        'min(560px, calc(100vw - 32px))',
        background:   'var(--color-surface)',
        border:       '1px solid var(--color-border)',
        borderRadius: '16px',
        boxShadow:    '0 8px 40px rgba(0,0,0,0.25)',
        padding:      '20px 24px',
        display:      'flex',
        flexDirection: 'column',
        gap:          '14px',
        animation:    'slideUp 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Cookie size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
            Cookie preferences
          </p>
        </div>
        <button
          onClick={decline}
          aria-label="Dismiss"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-muted)', padding: '2px', flexShrink: 0 }}
        >
          <X size={16} />
        </button>
      </div>

      {/* Body */}
      <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
        We use one analytics cookie (Google Analytics) to understand how visitors use our site.
        No advertising or tracking cookies. You can{' '}
        <Link href="/privacy-policy" style={{ color: 'var(--color-accent)' }}>
          read our full policy
        </Link>{' '}
        before deciding.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={accept}
          style={{
            padding:      '9px 20px',
            borderRadius: '8px',
            background:   'var(--color-accent)',
            color:        '#fff',
            border:       'none',
            cursor:       'pointer',
            fontFamily:   'var(--font-display)',
            fontWeight:   600,
            fontSize:     '0.875rem',
            letterSpacing: '0.01em',
          }}
        >
          Accept analytics
        </button>
        <button
          onClick={decline}
          style={{
            padding:      '9px 20px',
            borderRadius: '8px',
            background:   'none',
            color:        'var(--color-muted)',
            border:       '1px solid var(--color-border)',
            cursor:       'pointer',
            fontFamily:   'var(--font-display)',
            fontWeight:   600,
            fontSize:     '0.875rem',
          }}
        >
          Decline
        </button>
        <span className="label" style={{ color: 'var(--color-muted)', fontSize: '11px', marginLeft: 'auto' }}>
          EU visitors only · GDPR
        </span>
      </div>
    </div>
  )
}
