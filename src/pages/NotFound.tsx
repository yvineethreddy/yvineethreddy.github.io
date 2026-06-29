import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 bg-slate-950 text-slate-100">
      <div className="max-w-2xl text-center rounded-3xl border border-slate-700 bg-slate-900/90 p-12 shadow-2xl shadow-slate-950/40">
        <AlertTriangle className="mx-auto mb-6 h-16 w-16 text-primary-400" />
        <p className="text-sm uppercase tracking-[0.3em] text-primary-400 mb-4">Page not found</p>
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">404 — This page does not exist.</h1>
        <p className="text-slate-400 mb-8 leading-relaxed">You may have followed an outdated link or mistyped the address. Return to the portfolio home page to continue.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  )
}
