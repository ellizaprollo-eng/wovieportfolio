import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { StatsBand } from '@/components/StatsBand'
import { About } from '@/components/About'
import { SkillsStack } from '@/components/SkillsStack'
import { Clients } from '@/components/Clients'
import { Testimonials } from '@/components/Testimonials'
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
        <About />
        <SkillsStack />
        <Clients />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
