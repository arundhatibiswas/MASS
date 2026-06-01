'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Word({
  word,
  progress,
  start,
  end,
}: {
  word:     string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  start:    number
  end:      number
}) {
  const opacity = useTransform(progress, [start, end], [0.15, 1])
  return (
    <motion.span style={{ opacity }}>
      {word}{' '}
    </motion.span>
  )
}

interface ScrollRevealTextProps {
  children:   string
  className?: string
  style?:     React.CSSProperties
  /** offset[0] = when animation starts (e.g. 'start 0.85'), offset[1] = when complete */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?:    any
}

export function ScrollRevealText({
  children,
  className,
  style,
  offset = ['start 0.85', 'end 0.35'],
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const words = children.split(' ')

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length
        const end   = Math.min((i + 2) / words.length, 1)
        return (
          <Word key={i} word={word} progress={scrollYProgress} start={start} end={end} />
        )
      })}
    </p>
  )
}
