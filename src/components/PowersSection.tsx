import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { powersData } from '../data'
import { Shield, Zap, Gauge, Activity, Target } from 'lucide-react'

const icons = [Shield, Zap, Gauge, Activity, Target]

export default function PowersSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="powers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent pointer-events-none" />
      <div className="container max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-primary-500 font-semibold mb-3">
            Core Strengths
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Built for Production</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            What I bring to every system: resilience, scale, and full ownership from design to L3 support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {powersData.map((power, i) => {
            const Icon = icons[i % icons.length]
            const valueNum = typeof power.value === 'number' ? power.value : 100
            return (
              <motion.div
                key={power.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="glass-effect rounded-2xl p-6 border border-white/10 dark:border-slate-600/50 hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-amber-500/20 flex items-center justify-center border border-primary-500/20 group-hover:border-primary-500/40 transition-colors">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <span className="text-3xl font-black gradient-text">
                      {valueNum >= 100 ? valueNum : `${valueNum}%`}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                    {power.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex-1">
                    {power.sub}
                  </p>
                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${Math.min(valueNum, 100)}%` } : {}}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-500"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
