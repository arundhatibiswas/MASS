'use client'

import { useEffect, useRef } from 'react'

interface CalendlyEmbedProps {
  /** Calendly URL, e.g. https://calendly.com/your-name/30min */
  url?: string
  /** Minimum height in px — defaults to 700 */
  minHeight?: number
}

export function CalendlyEmbed({
  url,
  minHeight = 700,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  const calendlyUrl =
    url ?? process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/mass-agency'

  useEffect(() => {
    // Load Calendly widget script once
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Don't remove script on unmount — Calendly needs it globally
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{
          minWidth:  '320px',
          height:    `${minHeight}px`,
          border:    '1px solid var(--color-border)',
          borderRadius: '16px',
          overflow:  'hidden',
        }}
      />

      {/* Calendly widget CSS */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
    </div>
  )
}
