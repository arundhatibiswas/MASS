'use client'

/**
 * Portable Text renderer for Sanity body content.
 * Maps Sanity block types to styled HTML elements.
 *
 * Install @portabletext/react if not already present:
 * npm install @portabletext/react
 */

import { PortableText as SanityPortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'

const components = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2
        style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(1.4rem, 3vw, 1.9rem)',
          fontWeight:    700,
          letterSpacing: '-0.02em',
          color:         'var(--color-text)',
          marginTop:     '48px',
          marginBottom:  '16px',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3
        style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '1.2rem',
          fontWeight:    700,
          color:         'var(--color-text)',
          marginTop:     '36px',
          marginBottom:  '12px',
        }}
      >
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p
        style={{
          fontSize:     '1rem',
          color:        'var(--color-muted)',
          lineHeight:   1.8,
          marginBottom: '20px',
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote
        style={{
          borderLeft:  '3px solid var(--color-accent)',
          paddingLeft: '20px',
          margin:      '32px 0',
          fontStyle:   'italic',
          color:       'var(--color-muted)',
          fontSize:    '1.05rem',
          lineHeight:  1.75,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul
        style={{
          paddingLeft:  '0',
          marginBottom: '20px',
          listStyle:    'none',
          display:      'flex',
          flexDirection: 'column',
          gap:          '8px',
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol
        style={{
          paddingLeft:  '24px',
          marginBottom: '20px',
          display:      'flex',
          flexDirection: 'column',
          gap:          '8px',
          color:        'var(--color-muted)',
          lineHeight:   1.7,
        }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li
        style={{
          display:    'flex',
          alignItems: 'flex-start',
          gap:        '10px',
          color:      'var(--color-muted)',
          fontSize:   '0.975rem',
          lineHeight: 1.7,
        }}
      >
        <span
          style={{
            width:        '6px',
            height:       '6px',
            borderRadius: '50%',
            background:   'var(--color-accent)',
            flexShrink:   0,
            marginTop:    '10px',
          }}
        />
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong style={{ fontWeight: 700, color: 'var(--color-text)' }}>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em style={{ fontStyle: 'italic' }}>{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code
        style={{
          background:   'var(--color-elevated)',
          border:       '1px solid var(--color-border)',
          borderRadius: '4px',
          padding:      '2px 6px',
          fontSize:     '0.875em',
          fontFamily:   'monospace',
          color:        'var(--color-accent)',
        }}
      >
        {children}
      </code>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: { asset?: object; alt?: string; caption?: string } }) => {
      if (!value?.asset) return null
      return (
        <figure style={{ margin: '40px 0' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', height: '400px' }}>
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt ?? ''}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {value.caption && (
            <figcaption
              style={{
                textAlign:  'center',
                fontSize:   '0.8rem',
                color:      'var(--color-muted)',
                marginTop:  '8px',
              }}
            >
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    codeBlock: ({ value }: { value: { language?: string; code?: string } }) => (
      <pre
        style={{
          background:   'var(--color-elevated)',
          border:       '1px solid var(--color-border)',
          borderRadius: '12px',
          padding:      '24px',
          overflowX:    'auto',
          margin:       '32px 0',
          fontSize:     '0.875rem',
          lineHeight:   1.7,
        }}
      >
        <code style={{ fontFamily: 'monospace', color: 'var(--color-text)' }}>
          {value.code}
        </code>
      </pre>
    ),
  },
}

interface PortableTextProps {
  value: PortableTextBlock[]
}

export function PortableText({ value }: PortableTextProps) {
  return <SanityPortableText value={value} components={components} />
}
