import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Services } from '@/components/Services'
import { Process } from '@/components/Process'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [{ title: 'Services | Wovie Prollo' }],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
        <Process />
      </main>
      <Footer />
    </>
  )
}
