'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface UseSplitTextOptions {
  /** Once = only fire the first time it enters view (default: true) */
  once?: boolean
  /** Viewport margin — default "0px 0px -10% 0px" */
  margin?: string
}

/**
 * Returns a ref to attach to a heading element and whether it's in view.
 * Pair with the SplitHeading component which handles the actual DOM splitting.
 */
export function useSplitText(options: UseSplitTextOptions = {}) {
  const { once = true, margin = '0px 0px -10% 0px' } = options
  const ref     = useRef<HTMLHeadingElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, margin: margin as any })
  return { ref, isInView }
}
