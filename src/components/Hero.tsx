import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Linkedin, Mail } from 'lucide-react'
import { powersData } from '../data'

const NAME = 'Vineeth Reddy Yadanaparthi'
const TAGLINE = 'Backend Engineer · Systems Architect · 4+ Years'

function CinematicName() {
  const words = NAME.split(' ')
  return (
    <h1
      id="hero-title"
      className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
      aria-label={NAME}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                duration: 0.5,
                delay: wi * 0.15 + ci * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}

function TaglineReveal() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800)
    return () => clearTimeout(t)
  }, [])
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-lg sm:text-xl text-slate-400 dark:text-slate-300 font-medium tracking-wide"
    >
      {TAGLINE}
    </motion.p>
  )
}

function PowersStrip() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400)
    return () => clearTimeout(t)
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, staggerChildren: 0.08, delayChildren: 0.1 }}
      className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10"
    >
      {powersData.map((power, i) => (
        <motion.div
          key={power.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
          className="power-badge group"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black gradient-text">
              {typeof power.value === 'number' && power.value >= 100 ? power.value : `${power.value}%`}
            </span>
            <span className="text-sm font-semibold text-slate-400 dark:text-slate-300 group-hover:text-slate-200 transition-colors">
              {power.label}
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{power.sub}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 80])
  const opacity = useTransform(scrollY, [0, 350], [1, 0.25])
  const scale = useTransform(scrollY, [0, 400], [1, 0.97])

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Cinematic dark base */}
      <div className="absolute inset-0 bg-[#0a0a0b]" />
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-radial from-primary-500/12 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[80%] h-[50%] bg-gradient-radial from-cyan-500/8 via-transparent to-transparent pointer-events-none" />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Small intro line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-6"
        >
          Backend-Focused · Java · Spring Boot · Microservices
        </motion.p>

        <CinematicName />
        <div className="mt-6">
          <TaglineReveal />
        </div>
        <PowersStrip />

        {/* CTA + Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-14"
        >
          <motion.a
            href="#recruiter"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(229, 9, 20, 0.25)' }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            Get In Touch
            <ChevronDown size={20} className="mt-0.5" />
          </motion.a>
          <div className="flex items-center gap-3">
            <motion.a
              href="https://linkedin.com/in/vineeth-reddy-y"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-11 h-11 rounded-xl glass-effect flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors border border-slate-300/50 dark:border-slate-600/50"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              href="mailto:yadanaparthivineethreddy@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="w-11 h-11 rounded-xl glass-effect flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors border border-slate-300/50 dark:border-slate-600/50"
              aria-label="Email"
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
