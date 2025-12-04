import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setIsError(false)
    
    try {
      // Send using FormSubmit (completely free, no setup needed)
      const response = await fetch('https://formsubmit.co/ajax/yadanaparthivineethreddy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      })

      if (response.ok) {
        setIsLoading(false)
        setIsSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        
        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Email send failed:', error)
      setIsLoading(false)
      setIsError(true)
      
      // Reset error after 3 seconds
      setTimeout(() => setIsError(false), 3000)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yadanaparthivineethreddy@gmail.com',
      href: 'mailto:yadanaparthivineethreddy@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7036546590',
      href: 'tel:+917036546590'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: 'https://maps.google.com/?q=Bangalore,India'
    }
  ]

  return (
    <section id="recruiter" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 -left-96 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-96 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Build Together</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Whether you're a recruiter, client, or fellow developer, I'd love to hear from you. Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            {!isSubmitted && !isError ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all"
                  />
                </div>

                {/* Message input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-600/50 disabled:opacity-50 transition-all"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            ) : isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle size={48} className="text-green-400 mb-4" />
                </motion.div>
                <h4 className="text-xl font-bold mb-2">Message sent!</h4>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <AlertCircle size={48} className="text-red-400 mb-4" />
                </motion.div>
                <h4 className="text-xl font-bold mb-2">Oops! Something went wrong</h4>
                <p className="text-slate-400 mb-4">Please try again or email me directly at yadanaparthivineethreddy@gmail.com</p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact info and recruiter details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick contact methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick contact</h3>
              <div className="space-y-4">
                {contactMethods.map((method, i) => {
                  const Icon = method.icon
                  return (
                    <motion.a
                      key={i}
                      href={method.href}
                      target={method.label === 'Location' ? '_blank' : undefined}
                      rel={method.label === 'Location' ? 'noreferrer' : undefined}
                      whileHover={{ x: 10 }}
                      className="glass-effect rounded-lg p-4 border border-white/10 hover:border-violet-500/50 transition-all flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{method.label}</p>
                        <p className="text-white font-medium truncate">{method.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* For Recruiters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass-effect rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold mb-4">For Recruiters 🎯</h4>
              <p className="text-slate-300 text-sm mb-6">
                I'm actively open to opportunities in backend engineering, microservices architecture, and platform modernization roles.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  '4+ years in Java/Spring Boot microservices',
                  'Platform modernization & performance optimization',
                  'Camunda BPM workflow automation',
                  'Fintech & banking domain expertise'
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-slate-300 text-sm"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
              <motion.a
                href="/vineeth_resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/50 text-violet-300 font-medium hover:bg-gradient-to-r hover:from-violet-500/40 hover:to-cyan-500/40 transition-all"
              >
                Download Resume (ATS)
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-effect rounded-xl p-6 border border-white/10"
            >
              <h4 className="text-lg font-bold mb-4">Connect with me</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/vineeth-reddy-y' },
                  { name: 'Email', url: 'mailto:yadanaparthivineethreddy@gmail.com' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg glass-effect border border-white/10 hover:border-violet-500/50 text-center font-medium transition-all text-sm"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
