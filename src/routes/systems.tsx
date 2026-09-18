import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/systems')({
  head: () => ({
    meta: [{ title: 'Systems | Wovie Prollo' }],
  }),
  component: SystemsPage,
})

function SystemsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  )
}
