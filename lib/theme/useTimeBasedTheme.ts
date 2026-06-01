'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'mass-theme'

/**
 * Determines the initial theme:
 *   - If the user has manually chosen a theme, use that.
 *   - Otherwise, derive from local time:
 *       8pm (20:00) – 7am (07:00) → dark
 *       7am (07:00) – 8pm (20:00) → light
 */
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
  if (saved === 'light' || saved === 'dark') return saved

  const hour = new Date().getHours()
  return hour >= 20 || hour < 7 ? 'dark' : 'light'
}

export function useTimeBasedTheme() {
  const [theme, setTheme] = useState<Theme>('dark') // SSR-safe default

  // On mount, read saved preference or derive from time
  useEffect(() => {
    setTheme(getInitialTheme())
  }, [])

  // Apply theme to <html data-theme="..."> and persist
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}
