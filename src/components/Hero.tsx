import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Linkedin, Mail } from 'lucide-react'
import { powersData } from '../data'

const NAME = 'Vineeth Reddy Yadanaparthi'
const TITLES = ['Software Engineer', 'Java Backend Engineer', 'Full Stack Developer', 'Microservices Engineer']

function CinematicName() {
  const words = NAME.split(' ')
  return (
    <h1
      id="hero-title"
      className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]"
      aria-label={NAME}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.25em]">
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: wi * 0.1 + ci * 0.02, ease: [0.22, 1, 0.36, 1] }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}

function RotatingTitle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % TITLES.length)
    }, 2800)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative mt-4 inline-flex h-14 overflow-hidden rounded-full border border-white/10 bg-slate-950/80 px-5 text-lg font-semibold text-slate-100 shadow-lg shadow-slate-950/20">
      <AnimatePresence mode="wait">
        <motion.span
          key={TITLES[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {TITLES[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{TITLES[index]}</span>
    </div>
  )
}

function TaglineReveal() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
      className="text-lg sm:text-xl text-slate-400 dark:text-slate-300 font-medium tracking-wide max-w-3xl mx-auto"
    >
      I design resilient healthcare services and enterprise APIs with observable architecture, scalable Java microservices, and production-safe delivery.
    </motion.p>
  )
}

function PowersStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10"
    >
      {powersData.map((power, i) => (
        <motion.div
          key={power.label}
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ duration: 0.25 }}
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
    <section id="hero" aria-labelledby="hero-title" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-[#070a0e]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-radial from-primary-500/12 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[80%] h-[50%] bg-gradient-radial from-cyan-500/8 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-6"
        >
          KPMG · Healthcare · Production engineering
        </motion.p>

        <CinematicName />
        <RotatingTitle />
        <TaglineReveal />
        <PowersStrip />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <motion.a
            href="/vineeth_resume.pdf"
            download="Vineeth_Reddy_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
