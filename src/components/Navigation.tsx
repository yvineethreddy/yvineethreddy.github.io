import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollDirection, useScrollPosition } from '../hooks/useScroll'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const scrollDirection = useScrollDirection()
  const scrollPosition = useScrollPosition()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Strengths', href: '#powers' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#recruiter' }
  ]

  const isScrolled = scrollPosition > 50
  const isHidden = scrollDirection === 'down' && scrollPosition > 300

  useEffect(() => {
    // Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHidden ? 'translate-y-full' : 'translate-y-0'
        } ${isScrolled ? 'glass-effect border-b border-slate-200 dark:border-slate-600/50' : ''}`}
      >
        <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect width="24" height="24" rx="6" fill="#0d9488" />
              <path d="M7 15.5V8.5L12 12L17 8.5V15.5" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-bold text-lg hidden sm:inline">VINEETH</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                whileHover={{ color: '#0d9488' }}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Contact button */}
            <motion.a
              href="#recruiter"
              onClick={() => handleNavClick('#recruiter')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-cyan-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/40 transition-all"
            >
              Get In Touch
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass-effect hover:bg-white/20 dark:hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden glass-effect border-t border-slate-200 dark:border-slate-600/50"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                whileHover={{ x: 4 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#recruiter"
              onClick={() => handleNavClick('#recruiter')}
              className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-center font-medium mt-4"
              whileHover={{ scale: 1.02 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      {/* Spacer for fixed header */}
      {isScrolled && <div className="h-20" />}
    </>
  )
}
