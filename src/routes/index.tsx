import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
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
        <About />
        <SkillsStack />
        <Clients />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
