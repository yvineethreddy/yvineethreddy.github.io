import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projectsData } from '../data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentProject = projectsData[currentIndex]
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])

  const goToProject = (index: number) => {
    const nextIndex = (index + projectsData.length) % projectsData.length
    setCurrentIndex(nextIndex)
    setTimeout(() => {
      cardRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }, 50)
  }

  const scroll = (direction: 'left' | 'right') => {
    const next = direction === 'left' ? currentIndex - 1 : currentIndex + 1
    goToProject(next)
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-medium mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text">Featured projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Selected engineering work with clear architecture, measurable outcomes, and maintainable delivery.
          </p>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/20"
          >
            <h3 className="text-3xl font-semibold text-white mb-4">{currentProject.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{currentProject.longDescription}</p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Architecture</p>
                <p className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 text-slate-300 text-sm">{currentProject.architecture}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Key decisions</p>
                <ul className="space-y-3 text-slate-300 text-sm">
                  {currentProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-3">Technology stack</p>
                <div className="flex flex-wrap gap-2">
                  {currentProject.stack.map((tool) => (
                    <span key={tool} className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="mt-8 flex flex-wrap gap-3">
              {currentProject.links.github && (
                <a
                  href={currentProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  <Github size={16} /> View code
                </a>
              )}
              {currentProject.links.live && (
                <a
                  href={currentProject.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
                >
                  <ExternalLink size={16} /> Live demo
                </a>
              )}
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 shadow-2xl shadow-slate-950/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_36%),linear-gradient(135deg,rgba(14,116,144,0.9),rgba(2,6,23,0.95))]" />
            <div className="relative flex h-full min-h-[24rem] items-end p-8">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">Selected project</p>
                <h4 className="text-xl font-semibold text-white">{currentProject.title}</h4>
                <p className="mt-2 text-sm text-slate-300">{currentProject.description}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-100">All projects</h3>
            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={() => scroll('left')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-400"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scroll('right')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-cyan-400"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
            {projectsData.map((project, index) => (
              <motion.button
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el }}
                type="button"
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-shrink-0 w-80 snap-center rounded-3xl overflow-hidden border-2 transition-all duration-200 ${
                  currentIndex === index
                    ? 'border-cyan-400 ring-2 ring-cyan-400/30'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_36%)]" />
                  <div className="relative flex h-full flex-col justify-end p-4">
                    <p className="text-sm font-semibold text-white truncate">{project.title}</p>
                    <p className="text-xs text-slate-400 line-clamp-1">{project.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
