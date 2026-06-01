'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: -200, y: -200 })
  const lerped  = useRef({ x: -200, y: -200 })
  const rafId   = useRef<number>(0)

  const [hovered,  setHovered]  = useState(false)
  const [clicked,  setClicked]  = useState(false)
  const [inverted, setInverted] = useState(false)
  const [visible,  setVisible]  = useState(false)
  const [ready,    setReady]    = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    setReady(true)

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
      // Move dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      // Check if over a dark/inverted section
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setInverted(!!el?.closest('[data-cursor-invert]'))
    }

    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], [data-cursor-hover]')) {
        setHovered(true)
      }
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], [data-cursor-hover]')) {
        setHovered(false)
      }
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    document.addEventListener('mouseover',  onOver,  { passive: true })
    document.addEventListener('mouseout',   onOut,   { passive: true })
    document.addEventListener('mouseleave', () => setVisible(false))
    document.addEventListener('mouseenter', () => setVisible(true))

    // Lerp ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const tick = () => {
      lerped.current.x = lerp(lerped.current.x, mouse.current.x, 0.12)
      lerped.current.y = lerp(lerped.current.y, mouse.current.y, 0.12)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${lerped.current.x}px, ${lerped.current.y}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!ready) return null

  // Color scheme: dark cursor on light, white/accent on dark sections
  const color      = inverted ? '#ffffff' : 'var(--color-text)'
  const accentCol  = inverted ? '#ffffff' : 'var(--color-accent)'

  // Dot: small solid circle — shrinks on click, stays dot on hover
  const dotSize    = clicked ? 4 : hovered ? 6 : 8
  // Ring: outline circle — expands on hover
  const ringSize   = hovered ? 52 : 36
  const ringOpacity = visible ? (hovered ? 0.8 : 0.45) : 0

  return (
    <>
      {/* Inner dot — snaps to cursor position */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         `${dotSize}px`,
          height:        `${dotSize}px`,
          borderRadius:  '50%',
          background:    color,
          pointerEvents: 'none',
          zIndex:        99999,
          marginLeft:    `-${dotSize / 2}px`,
          marginTop:     `-${dotSize / 2}px`,
          transition:    'width 0.2s cubic-bezier(0.7,0,0.3,1), height 0.2s cubic-bezier(0.7,0,0.3,1), background 0.25s, margin 0.2s cubic-bezier(0.7,0,0.3,1), opacity 0.3s',
          opacity:       visible ? 1 : 0,
          willChange:    'transform',
        }}
      />

      {/* Outer ring — lerps behind cursor */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         `${ringSize}px`,
          height:        `${ringSize}px`,
          borderRadius:  '50%',
          border:        `1.5px solid ${hovered ? accentCol : color}`,
          background:    'transparent',
          pointerEvents: 'none',
          zIndex:        99998,
          marginLeft:    `-${ringSize / 2}px`,
          marginTop:     `-${ringSize / 2}px`,
          transition:    'width 0.4s cubic-bezier(0.7,0,0.3,1), height 0.4s cubic-bezier(0.7,0,0.3,1), border-color 0.25s, margin 0.4s cubic-bezier(0.7,0,0.3,1), opacity 0.3s',
          opacity:       ringOpacity,
          willChange:    'transform',
        }}
      />
    </>
  )
}
