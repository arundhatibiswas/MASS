'use client'

import { createContext, useContext } from 'react'
import { useTimeBasedTheme, type Theme } from './useTimeBasedTheme'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

/**
 * Wrap the app with this provider (inside layout.tsx).
 * Any component can call useTheme() to read or toggle the theme.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTimeBasedTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
