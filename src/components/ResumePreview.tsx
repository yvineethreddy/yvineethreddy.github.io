import React, { useEffect, useState } from 'react'
import { Download, FileText, Eye } from 'lucide-react'

interface WindowWithDataLayer extends Window {
  dataLayer?: Array<Record<string, unknown>>
}

export default function ResumePreview() {
  const [downloadCount, setDownloadCount] = useState(0)

  useEffect(() => {
    const stored = window.localStorage.getItem('resumeDownloadCount')
    setDownloadCount(stored ? Number(stored) : 0)
  }, [])

  const handleDownload = () => {
    const next = downloadCount + 1
    setDownloadCount(next)
    window.localStorage.setItem('resumeDownloadCount', String(next))
    ;(window as WindowWithDataLayer).dataLayer?.push?.({ event: 'resume_download', count: next })
  }

  return (
    <section id="resume" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cyan-500/10 to-transparent pointer-events-none" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-500 font-semibold mb-3">Resume</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">ATS-ready resume</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl leading-relaxed mb-8">
              Quick access to a polished PDF summary of engineering leadership, backend architecture, and production delivery across healthcare, banking, and trading platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/vineeth_resume.pdf"
                download="Vineeth_Reddy_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
              >
                <Download size={18} />
                Download resume
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-300">
                <Eye size={16} /> Viewed {downloadCount} times locally
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-4 shadow-2xl shadow-slate-950/30">
            <div className="overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/90">
              <iframe
                src="/vineeth_resume.pdf"
                title="Resume preview"
                className="h-[520px] w-full min-h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
