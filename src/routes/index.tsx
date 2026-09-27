import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { StatsBand } from '@/components/StatsBand'
import { Certifications } from '@/components/Certifications'
import { About } from '@/components/About'
import { FinalCta } from '@/components/FinalCta'
import { Clients } from '@/components/Clients'
import { Testimonials } from '@/components/Testimonials'
import { ProcessScroller } from '@/components/ProcessScroller'
import { SampleWorksPreview } from '@/components/Projects'
import { CaseStudyPreview } from '@/components/CaseStudyPreview'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <StatsBand />
        <ProcessScroller />
        <SampleWorksPreview />
        <CaseStudyPreview />
        <Certifications />
        <About />
        <FinalCta />
        <Testimonials />
        <Clients />
      </main>
      <Footer />
    </>
  )
}
