import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Strengths', href: '#powers' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#recruiter' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yvineethreddy', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/vineeth-reddy-y', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yadanaparthivineethreddy@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 backdrop-blur">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect width="24" height="24" rx="6" fill="#0d9488" />
                <path d="M7 15.5V8.5L12 12L17 8.5V15.5" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-lg">Vineeth</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Backend engineer · Java, Spring Boot, Microservices · Building for production.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Resume', href: '/vineeth_resume.pdf', download: true },
                { name: 'LinkedIn Profile', href: 'https://linkedin.com/in/vineeth-reddy-y' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    download={link.download ? true : undefined}
                    target={link.download ? undefined : '_blank'}
                    rel={link.download ? undefined : 'noreferrer'}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-600 dark:text-slate-300">
                <a href="mailto:yadanaparthivineethreddy@gmail.com" className="hover:text-primary-400 transition-colors">
                  yadanaparthivineethreddy@gmail.com
                </a>
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                <a href="tel:+917036546590" className="hover:text-primary-400 transition-colors">
                  +91 7036546590
                </a>
              </p>
              <p className="text-slate-600 dark:text-slate-300">Bangalore, India</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © {currentYear} Vineeth Reddy Yadanaparthi. Built with{' '}
            <span className="inline-flex items-center gap-1">
              <Heart size={14} className="text-primary-500" />
              React + Tailwind
            </span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.filter(s => s.label !== 'GitHub').map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, translateY: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-slate-400 dark:text-slate-300 hover:text-primary-400 transition-colors border border-white/10 dark:border-slate-600/50"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}

            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.15, translateY: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-600/50"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
