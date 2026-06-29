import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCountUp } from '../hooks/useScroll'
import { Code2, Zap, Target, Award } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const yearsExperience = useCountUp(inView ? 5 : 0, 2000)
  const projectsCompleted = useCountUp(inView ? 6 : 0, 2000)
  const reliabilityScore = useCountUp(inView ? 99 : 0, 2000)

  const stats = [
    { icon: Award, label: 'Years experience', value: yearsExperience, suffix: '+' },
    { icon: Code2, label: 'Projects delivered', value: projectsCompleted, suffix: '+' },
    { icon: Target, label: 'System reliability', value: reliabilityScore, suffix: '%' },
    { icon: Zap, label: 'Performance gain', value: 40, suffix: '%' },
  ]

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            A consultant building resilient healthcare and enterprise products with a strong design lens, scalable architecture, and polished product thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 border border-slate-200/80 dark:border-slate-600/50">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-3xl border-2 border-violet-400/50 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 p-1 shadow-xl shadow-violet-500/20">
                  <img
                    src="/vineeth-profile.png"
                    alt="Vineeth Reddy Yadanaparthi"
                    className="h-full w-full rounded-[1.1rem] object-cover"
                  />
                </div>
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">Vineeth Reddy Yadanaparthi</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">Consultant · Product Engineering & Design Systems</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      I shape backend architecture for regulated healthcare systems and elevate the experience around it with thoughtful UI, accessible interfaces, and disciplined design systems. My work blends performance engineering, product thinking, and modern frontend polish.
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {['Design systems', 'Accessibility', 'Product thinking', 'Motion language'].map((item) => (
                        <span key={item} className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href="mailto:yadanaparthivineethreddy@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="rounded-lg border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100 transition hover:bg-violet-500/20"
                      >
                        Contact me
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    whileHover={{ translateY: -5 }}
                    className="glass-effect rounded-xl p-4 text-center border border-slate-200/80 dark:border-slate-600/50 hover:border-primary-500/50 transition-colors"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary-400" />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                      <span className="text-primary-400">{stat.suffix}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{stat.label}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-xl p-6 border border-slate-200/80 dark:border-slate-600/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-400" />
                Core competencies
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Microservices architecture',
                  'Spring Boot & Java 17+',
                  'Design systems & interface polish',
                  'Accessibility-first UX patterns',
                  'Event-driven systems',
                  'Observability & tracing',
                  'Deployment automation',
                  'React + TypeScript interfaces'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-slate-200/80 dark:border-slate-600/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Selected outcomes
              </h3>
              <div className="space-y-4 text-sm text-slate-300">
                {[
                  'Reduced latency through profiling, caching, and query tuning.',
                  'Improved service stability with retries and circuit breakers.',
                  'Elevated product experience with accessible, high-clarity interfaces.',
                  'Delivered production-ready features with monitoring and automation.'
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
