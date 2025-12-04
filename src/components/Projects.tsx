import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projectsData } from '../data'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [selectedProject, setSelectedProject] = useState(projectsData[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const goToProject = (index: number) => {
    setCurrentIndex(index)
    setSelectedProject(projectsData[index])
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            High-impact projects showcasing microservices, performance optimization, and platform modernization
          </p>
        </motion.div>

        {/* Main project showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Project detail */}
          <div className="glass-effect rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <motion.h3
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold mb-3"
              >
                {selectedProject.title}
              </motion.h3>

              <motion.p
                key={`desc-${selectedProject.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-slate-400 mb-6 leading-relaxed"
              >
                {selectedProject.longDescription}
              </motion.p>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium border border-violet-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-6 border-t border-white/10">
              {selectedProject.links.github && (
                <motion.a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20 hover:from-violet-500/40 hover:to-cyan-500/40 border border-white/10 transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </motion.a>
              )}
              {selectedProject.links.live && (
                <motion.a
                  href={selectedProject.links.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 hover:shadow-lg hover:shadow-violet-500/50 transition-all"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>

          {/* Project visual */}
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 rounded-2xl" />
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 rounded-2xl border border-white/20" />
          </motion.div>
        </motion.div>

        {/* Projects carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-6"
          >
            <h3 className="text-xl font-semibold">All Projects</h3>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll('left')}
                className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors border border-white/10"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scroll('right')}
                className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors border border-white/10"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [-webkit-mask-image:linear-gradient(90deg,#000,#000_calc(100%-20px),transparent)] mask-image-linear-gradient"
          >
            {projectsData.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => goToProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 w-80 h-40 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index
                    ? 'border-violet-500 ring-2 ring-violet-500/50'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-semibold text-white truncate">{project.title}</p>
                    <p className="text-xs text-slate-400 line-clamp-1">{project.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
