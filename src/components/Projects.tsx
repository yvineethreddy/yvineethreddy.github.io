import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projectsData } from '../data'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const CARD_WIDTH = 336 // w-80 (320) + gap-4 (16)

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState(projectsData[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])

  const goToProject = (index: number) => {
    const i = (index + projectsData.length) % projectsData.length
    setCurrentIndex(i)
    setSelectedProject(projectsData[i])
    setTimeout(() => {
      cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
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
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-medium mb-3">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            High-impact projects: microservices, performance optimization, and platform modernization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-none">
            <div>
              <motion.h3
                key={selectedProject.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold mb-3 text-slate-800 dark:text-white"
              >
                {selectedProject.title}
              </motion.h3>
              <motion.p
                key={`desc-${selectedProject.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
              >
                {selectedProject.longDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary-500/15 text-primary-300 dark:text-primary-300 text-xs font-medium border border-primary-500/25"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            <div className="flex gap-3 pt-6 border-t border-slate-200 dark:border-slate-700/50">
              {selectedProject.links.github && (
                <motion.a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 hover:bg-primary-500/20 border border-slate-300 dark:border-slate-600/50 hover:border-primary-500/30 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors"
                >
                  <Github size={18} />
                  View Code
                </motion.a>
              )}
              {selectedProject.links.live && (
                <motion.a
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500/20 border border-primary-500/40 text-primary-300 font-medium hover:bg-primary-500/30 transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>

          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-slate-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 to-cyan-500/10" />
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.style.display = 'none'
                const fallback = t.nextElementSibling as HTMLElement
                if (fallback) fallback.classList.remove('hidden')
              }}
            />
            <div className="hidden absolute inset-0 flex items-center justify-center p-4 bg-slate-800">
              <span className="text-xl md:text-3xl font-bold gradient-text opacity-80 text-center">
                {selectedProject.title}
              </span>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* All projects strip + arrows */}
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">All projects</h3>
            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={() => scroll('left')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-500/50 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/40 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scroll('right')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-500/50 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/40 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'thin' }}
          >
            {projectsData.map((project, index) => (
              <motion.button
                key={project.id}
                ref={(el) => { cardRefs.current[index] = el }}
                type="button"
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-shrink-0 w-80 snap-center rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  currentIndex === index
                    ? 'border-primary-500 ring-2 ring-primary-500/30'
                    : 'border-slate-300 dark:border-slate-700/50 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <div className="relative h-36 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-semibold text-white truncate">{project.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1">{project.description}</p>
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
