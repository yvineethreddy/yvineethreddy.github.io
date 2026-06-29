import React, { Suspense, lazy } from 'react'
import { SkeletonText } from '../components/Skeleton'

const Hero = lazy(() => import('../components/Hero'))
const About = lazy(() => import('../components/About'))
const Timeline = lazy(() => import('../components/Timeline'))
const SkillsSection = lazy(() => import('../components/SkillsSection'))
const Projects = lazy(() => import('../components/Projects'))
const ResumePreview = lazy(() => import('../components/ResumePreview'))
const Contact = lazy(() => import('../components/Contact'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><SkeletonText lines={6} /></div>}>
        <Hero />
        <About />
        <Timeline />
        <SkillsSection />
        <Projects />
        <ResumePreview />
        <Contact />
      </Suspense>
    </>
  )
}
