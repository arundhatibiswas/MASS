'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseScrollRevealOptions {
  once?:   boolean
  margin?: string
}

/** Standard Brandium-pattern scroll reveal — returns ref + isInView. */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { once = true, margin = '0px 0px -8% 0px' } = options
  const ref      = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, margin: margin as any })
  return { ref, isInView }
}

/** Shared Framer Motion transition for reveals */
export const REVEAL_TRANSITION = {
  duration: 0.9,
  ease:     [0.7, 0, 0.3, 1] as [number, number, number, number],
}

/** Stagger children config */
export const STAGGER_CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren:   0.05,
    },
  },
}

export const REVEAL_ITEM = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: REVEAL_TRANSITION },
}

export const REVEAL_ITEM_FAST = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] } },
}
