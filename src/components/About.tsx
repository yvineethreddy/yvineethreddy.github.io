import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Cloud, Workflow, Award, Zap } from 'lucide-react'

const highlights = [
  { icon: Award, label: 'Experience', value: '5+ years' },
  { icon: Code2, label: 'Organisations', value: '3' },
  { icon: Database, label: 'Backend', value: 'Java' },
  { icon: Cloud, label: 'Cloud', value: 'GCP · Azure' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary-500 font-medium mb-3">About me</p>
          <h2 id="about-title" className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">A little about my work</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
            Java full-stack developer with experience building and supporting enterprise applications across healthcare, banking, and trading-related domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 border border-slate-200/80 dark:border-slate-600/50">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-3xl border-2 border-cyan-400/40 bg-slate-900 p-1 shadow-xl">
                  <img
                    src="/vineeth-profile.png"
                    alt="Vineeth Reddy Yadanaparthi"
                    className="h-full w-full rounded-[1.1rem] object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Vineeth Reddy Yadanaparthi</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">Consultant · Java Full Stack Developer</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    Most of my work is with Java, Spring Boot, REST APIs, and database-backed services. I also build frontend features with React and have worked with asynchronous processing, batch jobs, cloud platforms, containers, and CI/CD pipelines.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Java & Spring Boot', 'REST APIs', 'React', 'Cloud & CI/CD'].map((item) => (
                      <span key={item} className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-700 dark:text-cyan-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="glass-effect rounded-xl p-4 text-center border border-slate-200/80 dark:border-slate-600/50"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-primary-400" />
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{item.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-xl p-6 border border-slate-200/80 dark:border-slate-600/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary-400" />
                Areas I work in
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Java and Spring Boot development',
                  'REST APIs and microservices',
                  'Batch and asynchronous processing',
                  'React frontend development',
                  'SQL and database query analysis',
                  'Docker and Kubernetes',
                  'Cloud deployment and CI/CD',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-slate-200/80 dark:border-slate-600/50">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-primary-400" />
                Across my roles
              </h3>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>Healthcare pricing and batch-processing workflows.</p>
                <p>Enterprise banking applications and deployment pipelines.</p>
                <p>Java full-stack application development and identity integrations.</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
