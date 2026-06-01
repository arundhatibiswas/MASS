'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initialises Lenis smooth scroll globally.
 * Mounted once in the root layout — no UI rendered.
 */
export function LenisProvider() {
  useEffect(() => {
    // Respect reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
