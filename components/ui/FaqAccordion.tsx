'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      {items.map((item) => (
        <FaqRow key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  )
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
        style={{ padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            color:      'var(--color-text)',
            fontSize:   '0.95rem',
          }}
        >
          {q}
        </span>
        <ChevronDown
          size={18}
          style={{
            color:      'var(--color-muted)',
            flexShrink: 0,
            marginLeft: '16px',
            transform:  open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      </button>
      {open && (
        <p
          style={{
            fontSize:      '0.9rem',
            color:         'var(--color-muted)',
            lineHeight:    1.7,
            paddingBottom: '20px',
          }}
        >
          {a}
        </p>
      )}
    </div>
  )
}
