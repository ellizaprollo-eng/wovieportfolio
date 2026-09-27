import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { StatsBand } from '@/components/StatsBand'
import { Certifications } from '@/components/Certifications'
import { About } from '@/components/About'
import { FinalCta } from '@/components/FinalCta'
import { Contact } from '@/components/Contact'
import { Clients } from '@/components/Clients'
import { Testimonials } from '@/components/Testimonials'
import { ProcessScroller } from '@/components/ProcessScroller'
import { Services } from '@/components/Services'
import { TechStackGrid } from '@/components/TechStackGrid'
import { Projects } from '@/components/Projects'
import { LeadsJourney } from '@/components/LeadsJourney'
import { Faq } from '@/components/Faq'
import { Footer } from '@/components/Footer'
import { useHashAlign } from '@/lib/useHashAlign'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  useHashAlign()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBand />
        <Services />
        <TechStackGrid />
        <Projects />
        <LeadsJourney />
        <ProcessScroller />
        <Testimonials />
        <Clients />
        <Certifications />
        <About />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
