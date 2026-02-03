import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experienceData } from '../data'
import { ChevronDown, Calendar } from 'lucide-react'

export default function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" aria-labelledby="timeline-title" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent" />

      <div className="container max-w-3xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-medium mb-3">
            Experience
          </p>
          <h2 id="timeline-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="gradient-text">Career Journey</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
            4+ years across banking and trading platforms, with full ownership from development to production support.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-6 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-600/40" />

          <div className="space-y-0">
            {experienceData.map((exp, index) => {
              const isExpanded = expandedIndex === index
              return (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="relative pl-14 md:pl-16 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                      isExpanded ? 'bg-primary-500 border-primary-500' : 'bg-slate-200 border-slate-400 dark:bg-slate-700 dark:border-slate-500'
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full text-left group"
                  >
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 hover:border-primary-500/30 transition-all duration-200 overflow-hidden shadow-sm dark:shadow-none">
                      <div className="p-5 md:p-6 flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
                              {exp.company}
                            </h3>
                            {exp.client && (
                              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                                {exp.client}
                              </span>
                            )}
                          </div>
                          <p className="text-primary-600 dark:text-primary-400 font-medium text-sm md:text-base">
                            {exp.role}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-slate-600 dark:text-slate-400">
                            <Calendar size={12} />
                            {exp.year}
                          </div>
                        </div>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-600/50 text-slate-600 dark:text-slate-300 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
                        >
                          <ChevronDown size={18} />
                        </motion.span>
                      </div>
                      {!isExpanded && (
                        <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 rounded-xl border border-slate-200 dark:border-slate-700/50 border-l-primary-500/50 bg-slate-50 dark:bg-slate-800/10 p-5 md:p-6">
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            {exp.description}
                          </p>
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                                Key achievements
                              </p>
                              <ul className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                                  >
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Years', value: '4+' },
            { label: 'Companies', value: '2' },
            { label: 'Projects', value: '4+' },
            { label: 'Domain', value: 'Banking' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/10 p-4 text-center shadow-sm dark:shadow-none"
            >
              <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{item.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
