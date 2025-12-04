import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import SkillsSection from './components/SkillsSection'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles.css'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navigation />
        <main className="relative">
          <Hero />
          <About />
          <SkillsSection />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
