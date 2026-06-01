'use client'

import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children:   React.ReactNode
  delay?:     number
  className?: string
  style?:     React.CSSProperties
  /** 'up' (default) | 'left' | 'right' | 'fade' */
  direction?: 'up' | 'left' | 'right' | 'fade'
}

const VARIANTS = {
  up:    { hidden: { opacity: 0, y: 40 },   show: { opacity: 1, y: 0   } },
  left:  { hidden: { opacity: 0, x: -32 },  show: { opacity: 1, x: 0   } },
  right: { hidden: { opacity: 0, x: 32 },   show: { opacity: 1, x: 0   } },
  fade:  { hidden: { opacity: 0 },           show: { opacity: 1         } },
}

export function AnimatedCard({
  children,
  delay     = 0,
  className,
  style,
  direction = 'up',
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={VARIANTS[direction]}
      transition={{ duration: 0.65, delay, ease: [0.7, 0, 0.3, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
