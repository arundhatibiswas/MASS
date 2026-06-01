'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitHeadingProps {
  as?:           'h1' | 'h2' | 'h3'
  children:      React.ReactNode
  className?:    string
  style?:        React.CSSProperties
  delay?:        number
  /** If true, animates once it scrolls into view. If false, fires immediately on mount. */
  scrollTrigger?: boolean
}

/**
 * Splits a heading string/ReactNode word-by-word and reveals each word
 * with a translateY animation — matching Brandium's SplitText effect.
 */
export function SplitHeading({
  as = 'h2',
  children,
  className,
  style,
  delay = 0,
  scrollTrigger = true,
}: SplitHeadingProps) {
  const ref      = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, {
    once:   true,
    margin: '0px 0px -10% 0px',
  })

  const shouldAnimate = scrollTrigger ? isInView : true
  const childArray = React.Children.toArray(children)
  const Tag = as as React.ElementType

  let globalWordIndex = 0

  return (
    <Tag ref={ref} className={className} style={style}>
      {childArray.map((child, index) => {
        if (typeof child === 'string' || typeof child === 'number') {
          const text = String(child)
          const htmlLines = text.split(/<br\s*\/?>/i)
          return (
            <React.Fragment key={index}>
              {htmlLines.map((htmlLine, htmlLineIndex) => {
                const lines = htmlLine.split('\n')
                return (
                  <React.Fragment key={htmlLineIndex}>
                    {htmlLineIndex > 0 && <br />}
                    {lines.map((line, lineIndex) => {
                      const words = line.trim().split(/\s+/).filter(Boolean)
                      return (
                        <React.Fragment key={lineIndex}>
                          {lineIndex > 0 && <br />}
                          {words.map((word, i) => {
                            const currentDelay = delay + globalWordIndex * 0.04
                            globalWordIndex++
                            return (
                              <span
                                key={i}
                                style={{
                                  overflow: 'hidden',
                                  display: 'inline-block',
                                  marginRight: '0.28em',
                                  verticalAlign: 'bottom',
                                }}
                              >
                                <motion.span
                                  style={{ display: 'inline-block' }}
                                  initial={{ y: '105%' }}
                                  animate={shouldAnimate ? { y: 0 } : { y: '105%' }}
                                  transition={{
                                    duration: 0.85,
                                    ease:     [0.7, 0, 0.3, 1],
                                    delay:    currentDelay,
                                  }}
                                >
                                  {word}
                                </motion.span>
                              </span>
                            )
                          })}
                        </React.Fragment>
                      )
                    })}
                  </React.Fragment>
                )
              })}
            </React.Fragment>
          )
        }

        // If it's a React element (like <br /> or other HTML tags)
        return <React.Fragment key={index}>{child}</React.Fragment>
      })}
    </Tag>
  )
}
