import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, BookOpen, Sparkles } from 'lucide-react'

const certifications = [
//   {
//     title: 'AWS Certified Cloud Practitioner',
//     issuer: 'Amazon Web Services',
//     year: '2025',
//     description: 'Validated cloud fundamentals, service design, and secure deployment patterns for enterprise platforms.'
//   },
//   {
//     title: 'Oracle Certified Professional: Java SE 17 Developer',
//     issuer: 'Oracle',
//     year: '2024',
//     description: 'Proven expertise in modern Java language features, performance optimization, and platform architecture.'
//   },
//   {
//     title: 'Certified Kubernetes Application Developer',
//     issuer: 'CNCF',
//     year: '2024',
//     description: 'Practical skills in containerized application deployment, service discovery, and resource management.'
//   }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-500/10 to-transparent pointer-events-none" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary-500 font-semibold mb-3">Certifications</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Technical credentials</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mx-auto mt-3">
            Credentials that back a practice of dependable backend systems, cloud deployments, and production-ready architecture.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-900/85 p-8 shadow-2xl shadow-slate-950/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary-500/15 text-primary-300">
                {index === 0 ? <Award size={22} /> : index === 1 ? <ShieldCheck size={22} /> : <Sparkles size={22} />}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-4">{cert.issuer} · {cert.year}</p>
              <p className="text-slate-400 leading-relaxed text-sm">{cert.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
