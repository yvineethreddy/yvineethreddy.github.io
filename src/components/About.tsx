import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCountUp } from '../hooks/useScroll'
import { Code2, Zap, Target, Award } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  
  const yearsExperience = useCountUp(inView ? 4 : 0, 2000)
  const projectsCompleted = useCountUp(inView ? 4 : 0, 2000)
  const clientsSatisfied = useCountUp(inView ? 100 : 0, 2000)

  const stats = [
    { icon: Award, label: 'Years Experience', value: yearsExperience, suffix: '+' },
    { icon: Code2, label: 'Projects Delivered', value: projectsCompleted, suffix: '+' },
    { icon: Target, label: 'Uptime SLA', value: 99.99, suffix: '%' },
    { icon: Zap, label: 'Performance Gain', value: 40, suffix: '%' },
  ]

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
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
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Backend-focused Java developer with 4+ years designing and building highly available microservices for banking and financial markets.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Profile and bio */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profile card */}
            <div className="glass-effect rounded-2xl p-8 border border-slate-200/80 dark:border-slate-600/50">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-primary-500/50 p-0.5 bg-gradient-to-r from-primary-500 to-cyan-500">
                    <img
                      src="/vineeth-profile.jpg"
                      alt="Vineeth Reddy Yadanaparthi"
                      className="w-full h-full rounded-2xl object-cover bg-slate-900"
                    />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">Vineeth Reddy Yadanaparthi</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">Associate Consultant @ Infosys</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      I design and build resilient, scalable systems with Java, Spring Boot, and microservices. 
                      With 4+ years in banking and trading (Danske Bank, Bankhaus Scheich), I've modernized legacy platforms, 
                      reduced API latency by ~30%, and delivered end-to-end ownership from development to L3 production support. 
                      I focus on fault tolerance, performance optimization, and secure API design in Agile environments.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href="mailto:yadanaparthivineethreddy@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-lg glass-effect text-sm font-medium hover:bg-white/20 transition-colors"
                      >
                        Get In Touch
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Experience grid */}
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

          {/* Right: Expertise sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Core competencies */}
            <div className="glass-effect rounded-xl p-6 border border-slate-200/80 dark:border-slate-600/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-400" />
                Core Competencies
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Microservices Architecture',
                  'Spring Boot & Java 8+',
                  'PostgreSQL & Database Design',
                  'API Design & REST principles',
                  'Workflow Automation (Camunda)',
                  'Performance Optimization',
                  'Resilience Engineering',
                  'React & TypeScript'
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

            {/* Key achievements */}
            <div className="glass-effect rounded-xl p-6 border border-slate-200/80 dark:border-slate-600/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Key Achievements
              </h3>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {[
                  '📊 Reduced latency by 40% through optimization',
                  '🚀 Deployed 15+ production features',
                  '⚡ Built systems handling 100K+ daily transactions',
                  '🔧 Led platform modernization initiatives'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-0.5 flex-shrink-0">{item.split(' ')[0]}</span>
                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
