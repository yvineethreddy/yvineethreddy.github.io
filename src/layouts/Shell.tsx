import React, { useEffect, useState } from 'react'
import { useScrollPosition } from '../hooks/useScroll'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CommandPalette from '../components/CommandPalette'
import AnimatedCursor from '../components/AnimatedCursor'

export default function Shell({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight
    setProgress(totalHeight > 0 ? Math.min(100, Math.round((window.scrollY / totalHeight) * 100)) : 0)
  }, [scrollPosition])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnimatedCursor />
      <CommandPalette />
      <Navigation />

      <div className="fixed inset-x-0 top-0 h-1 z-50 bg-slate-900/70">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}
