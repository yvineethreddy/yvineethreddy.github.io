import React, { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/90 shadow-[0_0_0_6px_rgba(6,182,212,0.12)] transition-transform duration-150"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <div
        className="pointer-events-none fixed top-0 left-0 z-40 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
    </>
  )
}
