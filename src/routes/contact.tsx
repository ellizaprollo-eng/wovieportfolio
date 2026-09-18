import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: 'Contact | Wovie Prollo' }],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
