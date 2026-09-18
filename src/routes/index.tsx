import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { VideoIntro } from '@/components/VideoIntro'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { SkillsStack } from '@/components/SkillsStack'
import { Clients } from '@/components/Clients'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
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
        <Skills />
        <VideoIntro />
        <Projects />
        <Services />
        <Process />
        <Clients />
        <Experience />
        <Testimonials />
        <SkillsStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
