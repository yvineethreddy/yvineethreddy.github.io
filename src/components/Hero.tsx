import React, { useEffect, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScroll'
import { ChevronDown, Linkedin, Mail } from 'lucide-react'

const ROLES = ['Backend Engineer', 'Full-Stack Developer', 'Problem Solver', 'Systems Architect']

function Typewriter() {
  const [i, setI] = useState(0)
  const [sub, setSub] = useState(0)
  const [blink, setBlink] = useState(true)
  const [rev, setRev] = useState(false)

  useEffect(() => {
    const bt = setInterval(() => setBlink(b => !b), 500)
    return () => clearInterval(bt)
  }, [])

  useEffect(() => {
    const current = ROLES[i]
    if (!rev && sub === current.length + 1) {
      setRev(true)
      setTimeout(() => setRev(true), 700)
      return
    }

    if (rev && sub === 0) {
      setRev(false)
      setI((p) => (p + 1) % ROLES.length)
      return
    }

    const t = setTimeout(() => setSub(s => s + (rev ? -1 : 1)), rev ? 40 : 80)
    return () => clearTimeout(t)
  }, [sub, i, rev])

  return (
    <span aria-live="polite">
      {ROLES[i].substring(0, sub)}<span style={{ opacity: blink ? 0 : 1 }} aria-hidden>|</span>
    </span>
  )
}

export default function Hero() {
  const scrollPosition = useScrollPosition()
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 400], [0, 40])
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3])

  return (
    <section aria-labelledby="hero-title" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-hero"
        style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-5 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, .05) 25%, rgba(124, 58, 237, .05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, .05) 75%, rgba(124, 58, 237, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, .05) 25%, rgba(124, 58, 237, .05) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, .05) 75%, rgba(124, 58, 237, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div
        style={{ opacity }}
        className="absolute inset-0 -z-5 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] md:min-h-[70vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
                  🚀 Welcome to my digital studio
                </p>
              </motion.div>

              <motion.h1
                id="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="gradient-text">Building</span> Resilient,{' '}
                <span className="gradient-text">Scalable</span> Systems
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed"
              >
                I specialize in backend engineering with 4+ years crafting high-performance microservices, 
                automating workflows, and modernizing platforms. Let's build something extraordinary.
              </motion.p>
            </div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Microservices'].map((tech, i) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full glass-effect text-sm font-medium text-slate-300 border border-white/10"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* Dynamic role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg space-y-2"
            >
              <p className="text-slate-500 dark:text-slate-400">Currently working as:</p>
              <p className="text-2xl font-semibold text-white">
                <Typewriter />
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#recruiter"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary shadow-lg shadow-red-600/50"
              >
                <span>Get In Touch</span>
                <ChevronDown size={18} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://linkedin.com/in/vineeth-reddy-y"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:yadanaparthivineethreddy@gmail.com"
                whileHover={{ scale: 1.15 }}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-slate-400 hover:text-orange-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right visual - Premium code visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ y }}
            className="relative h-full min-h-96 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full"
              >
                <div className="glass-effect rounded-2xl p-6 border border-white/10 backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/5" />
                  
                  <pre className="text-sm font-mono text-green-300/90 select-none space-y-3 relative z-10 overflow-hidden">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                      <span className="text-pink-300">// resilient architecture</span>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                      <span className="text-purple-300">@Service</span>
                      <br />
                      <span className="text-white">public class </span>
                      <span className="text-cyan-300">AssetValidator</span> {'{'}
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                      <span className="text-slate-400">  </span>
                      <span className="text-pink-300">@CircuitBreaker</span>
                      <br />
                      <span className="text-slate-400">  </span>
                      <span className="text-white">void </span>
                      <span className="text-yellow-300">validate</span>
                      <span className="text-white">(Asset a) {'{}'}</span>
                    </div>
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                      <span className="text-white">{'}'}</span>
                    </div>
                  </pre>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    <span>Production Ready • 99.99% Uptime</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-violet-500/40 rounded-full blur-sm"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
