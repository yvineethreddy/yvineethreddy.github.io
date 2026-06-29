import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Search, ArrowRight, Keyboard } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const paletteItems = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Resume', target: 'resume' },
  { label: 'Contact', target: 'recruiter' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { theme, toggleTheme } = useTheme()

  const filteredItems = useMemo(
    () => paletteItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  )

  const openPalette = useCallback((event: KeyboardEvent) => {
    const isShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k'
    if (isShortcut) {
      event.preventDefault()
      setIsOpen((value) => !value)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', openPalette)
    return () => window.removeEventListener('keydown', openPalette)
  }, [openPalette])

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
    }
  }, [isOpen])

  const handleSelect = (target: string) => {
    setIsOpen(false)
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed right-5 bottom-5 z-40 inline-flex items-center rounded-full bg-slate-900/90 p-3 text-slate-100 shadow-2xl shadow-slate-950/40 backdrop-blur transition hover:bg-slate-800"
        aria-label="Open quick navigation"
      >
        <Keyboard size={16} />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/60">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick navigation</p>
                <h2 className="text-2xl font-semibold text-white">Quick navigation</h2>
              </div>
              <button
                type="button"
                onClick={() => toggleTheme()}
                className="rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-700"
              >
                Toggle theme
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 py-4 pl-12 pr-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                aria-label="Search command palette"
              />
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {filteredItems.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-800/70 p-6 text-slate-400">
                  No matches found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => handleSelect(item.target)}
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/90 px-5 py-4 text-left transition hover:border-cyan-400/40 hover:bg-slate-900"
                  >
                    <span className="text-white">{item.label}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </button>
                ))
              )}
            </div>

            <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-500">
              <span>Shortcut: Ctrl + K</span>
              <span>Theme: {theme}</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
