import { useEffect } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const CALENDLY_URL = 'https://calendly.com/wovieprollo42/30min'
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'

function CalendlyEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget overflow-hidden rounded-lg"
      data-url={`${CALENDLY_URL}?primary_color=3fc7b0`}
      style={{ minWidth: '280px', height: '650px' }}
    />
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x flex flex-col items-center text-center">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to automate your workflow? Let's discuss your project"
        />

        <Reveal className="mt-8 w-full max-w-2xl rounded-lg border border-fg/[0.07] bg-card/60 p-6 sm:p-8">
          <CalendlyEmbed />
        </Reveal>
      </div>
    </section>
  )
}
