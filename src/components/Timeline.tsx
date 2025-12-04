import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experienceData } from '../data'
import { Briefcase, ChevronDown, Award, TrendingUp } from 'lucide-react'

export default function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const getIcon = (index: number) => {
    const icons = [Award, Briefcase, TrendingUp]
    return icons[index % icons.length]
  }

  return (
    <section id="experience" aria-labelledby="timeline-title" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 -left-96 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-96 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 id="timeline-title" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Career Journey</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            3+ years of professional growth, impactful projects, and technical excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          {experienceData.map((experience, index) => {
            const Icon = getIcon(index)
            const isExpanded = expandedIndex === index

            return (
              <motion.div
                key={`${experience.year}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Vertical connector line */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-red-500 to-orange-500/30 hidden md:block" />
                )}

                {/* Timeline card */}
                <motion.button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="glass-effect rounded-2xl p-6 md:p-8 border border-white/10 dark:border-white/10 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/10 cursor-pointer">
                    <div className="flex items-start gap-6">
                      {/* Timeline dot and icon */}
                      <motion.div
                        className="flex-shrink-0 relative"
                        initial={false}
                        animate={isExpanded ? { scale: 1.1 } : { scale: 1 }}
                      >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-red-500" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-red-500/10 border border-red-500/30"
                          initial={false}
                          animate={isExpanded ? { scale: 1.4, opacity: 0 } : { scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.div>

                      {/* Company info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-widest mb-2">
                              {experience.year}
                            </p>
                            <h3 className="text-2xl md:text-3xl font-bold">
                              <span className="text-red-500 dark:text-red-400">{experience.company}</span>
                            </h3>
                            <p className="text-base md:text-lg text-slate-700 dark:text-slate-400 mt-1 font-semibold">
                              {experience.role}
                            </p>
                          </div>
                          <motion.div
                            animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 mt-2"
                          >
                            <ChevronDown size={24} className="text-red-500 dark:text-red-400" />
                          </motion.div>
                        </div>

                        {/* Collapsed description preview */}
                        {!isExpanded && (
                          <p className="text-sm text-slate-700 dark:text-slate-400 leading-relaxed line-clamp-2">
                            {experience.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 ml-0 md:ml-8 glass-effect rounded-2xl p-6 md:p-8 border border-white/10 dark:border-white/10 border-t-red-500/50">
                        {/* Full description */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-3">
                            About this role
                          </h4>
                          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                            {experience.description}
                          </p>
                        </div>

                        {/* Achievements */}
                        {experience.achievements && experience.achievements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                              <Award size={16} className="text-orange-500" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {experience.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1, duration: 0.4 }}
                                  className="flex items-start gap-3"
                                >
                                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex-shrink-0 shadow-lg shadow-orange-500/50" />
                                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {achievement}
                                  </span>
                                </motion.li>
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { label: 'Years Experience', value: '4+', icon: '📊' },
            { label: 'Companies', value: '2', icon: '🏢' },
            { label: 'Projects Delivered', value: '4+', icon: '🚀' },
            { label: 'Team Members Mentored', value: '8+', icon: '👥' }
          ].map((metric, i) => (
            <motion.div
              key={i}
              whileHover={{ translateY: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="glass-effect rounded-xl p-4 md:p-5 border border-white/10 dark:border-white/10 text-center hover:border-red-500/50 dark:hover:border-red-500/50 transition-all"
            >
              <p className="text-3xl md:text-4xl mb-2">
                {metric.icon}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-red-500 dark:text-red-400 mb-1">
                {metric.value}
              </p>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 font-semibold">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
