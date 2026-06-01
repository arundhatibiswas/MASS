'use client'

import Link from 'next/link'
import { ArrowRight, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function WordmarkFill() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current
      const text = textRef.current
      if (!container || !text) return
      // Reset to measure natural width
      text.style.fontSize = '100px'
      const natural = text.scrollWidth
      const available = container.clientWidth
      if (natural === 0) return
      text.style.fontSize = `${(available / natural) * 100}px`
    }

    fit()
    const ro = new ResizeObserver(fit)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <span
        ref={textRef}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '9vw',
          fontWeight: 300,
          letterSpacing: '0.02em',
          color: 'var(--color-text)',
          lineHeight: 0.85,
          display: 'block',
          width: '100%',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          textAlign: 'center',
          textJustify: 'inter-word'
        }}
      >
        MA Software Solution
      </span>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Approach', href: '/approach' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span suppressHydrationWarning style={{ fontVariantNumeric: 'tabular-nums' }}>
      {time}
    </span>
  )
}

function FooterLink({ label, href, external = false }: { label: string; href: string; external?: boolean }) {
  const Tag = external ? 'a' : Link
  const props = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <li>
      <motion.div
        className="group"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
        whileHover="hovered"
      >
        <motion.span
          variants={{
            hovered: { opacity: 1, x: 0, scale: 1 },
          }}
          initial={{ opacity: 0, x: -8, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.7, 0, 0.3, 1] }}
          style={{ color: 'var(--color-accent)', fontSize: '10px', lineHeight: 1 }}
        >
          ✦
        </motion.span>
        {/* @ts-ignore — Tag is Link or 'a', both accept className */}
        <Tag
          {...props}
          className="hover:text-[var(--color-accent)] transition-colors duration-200"
          style={{ fontSize: '0.9375rem', color: 'var(--color-text)', opacity: 0.75 }}
        >
          {label}
        </Tag>
      </motion.div>
    </li>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      data-theme="dark"
      data-cursor-invert
      style={{
        background: 'var(--color-bg)',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
      }}
    >
      {/* Upper: CTA + nav columns */}
      <div className="container-mass" style={{ paddingTop: '80px', paddingBottom: '72px' }}>
        <div className="footer-upper-grid">
          {/* CTA column */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 700,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '36px',
              }}
            >
              Ready to build something real?
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 hover:opacity-70 transition-opacity duration-200"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                borderBottom: '1px solid var(--color-text)',
                paddingBottom: '3px',
              }}
            >
              Get in touch
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* 3 nav columns */}
          <div className="footer-nav-grid">
            <div>
              <p className="label" style={{ marginBottom: '20px', color: 'var(--color-muted)' }}>
                Navigation
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {NAV_LINKS.map(({ label, href }) => (
                  <FooterLink key={href} label={label} href={href} />
                ))}
              </ul>
            </div>

            <div>
              <p className="label" style={{ marginBottom: '20px', color: 'var(--color-muted)' }}>
                Let&apos;s Connect
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <FooterLink key={label} label={label} href={href} external />
                ))}
              </ul>
            </div>

            <div>
              <p className="label" style={{ marginBottom: '20px', color: 'var(--color-muted)' }}>
                Get in Touch
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="mailto:work.ratananmol@gmail.com"
                  className="hover:text-[var(--color-accent)] transition-colors duration-200"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-text)', opacity: 0.75 }}
                >
                  work.ratananmol@gmail.com
                </a>
                <Link
                  href="/book-a-call"
                  className="hover:underline"
                  style={{ fontSize: '0.9375rem', color: 'var(--color-accent)', fontWeight: 500 }}
                >
                  Book a free call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container-mass footer-bottom-bar"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Globe size={14} style={{ color: 'var(--color-muted)', flexShrink: 0 }} />
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
          © {year} MASS LLC ✦ <LiveClock /> UTC
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', opacity: 0.5 }}>
          · Designed &amp; built by MASS
        </p>
        <div className="footer-legal-links" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '24px' }}>
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[var(--color-text)] transition-colors duration-200"
              style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Giant MA Software Solution wordmark — scales to fill full viewport width */}
      <WordmarkFill />
    </footer>
  )
}
