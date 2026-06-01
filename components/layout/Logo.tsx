'use client'

import Link from 'next/link'
import { useTheme } from '@/lib/theme/ThemeProvider'
import { cn } from '@/lib/utils/cn'

interface LogoProps {
  /** Show icon + wordmark (default) or icon only */
  variant?: 'full' | 'icon'
  /** Override size of the chevron icon in px */
  iconSize?: number
  /** Override font size of the wordmark in px */
  fontSize?: number
  /** Wrap in a Next.js Link to "/" */
  asLink?: boolean
  className?: string
}

/**
 * MASS brand logo — Concept 3: Double Chevron
 *
 * Renders inline SVG (theme-aware blue chevrons) + Space Grotesk wordmark.
 * Works on both light and dark backgrounds automatically.
 * Can be used as a standalone icon or full horizontal lockup.
 */
export function Logo({
  variant = 'full',
  iconSize = 36,
  fontSize = 22,
  asLink = true,
  className,
}: LogoProps) {
  const { theme } = useTheme()

  // Blue shifts slightly between themes — darker blue on light BG, lighter on dark BG
  const chevronColor = theme === 'dark' ? '#3B82F6' : '#2563EB'
  const textColor    = theme === 'dark' ? '#F1F5F9' : '#0F172A'

  // Icon-only: just the two chevrons as an SVG
  const ChevronMark = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Upper chevron */}
      <path
        d="M 3 24 L 20 9 L 37 24"
        stroke={chevronColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower chevron */}
      <path
        d="M 3 35 L 20 20 L 37 35"
        stroke={chevronColor}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const content = (
    <span
      className={cn('flex items-center gap-2 select-none', className)}
      aria-label="MASS"
    >
      {ChevronMark}
      {variant === 'full' && (
        <span
          style={{
            fontFamily:    'var(--font-display)',
            fontWeight:    700,
            fontSize:      `${fontSize}px`,
            letterSpacing: '-0.04em',
            lineHeight:    1,
            color:         textColor,
            transition:    'color 0.3s ease',
          }}
        >
          MASS
        </span>
      )}
    </span>
  )

  if (!asLink) return content

  return (
    <Link
      href="/"
      aria-label="MASS — Home"
      className="hover:opacity-80 transition-opacity duration-200"
    >
      {content}
    </Link>
  )
}
