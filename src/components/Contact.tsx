import { useEffect } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/portfolio'

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
      <div className="container-x">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to automate your workflow? Let's discuss your project"
        />

        <Reveal
          delay={40}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-soft"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {profile.responseTime}
        </Reveal>

        <div className="mt-8">
          <Reveal className="mx-auto max-w-2xl rounded-lg border border-fg/[0.07] bg-card/60 p-6 sm:p-8">
            <h3 className="heading-display text-xl font-bold text-fg">
              Book a Call
            </h3>
            <p className="mt-1.5 text-sm text-body-dim">
              Pick a time that works for you, no back-and-forth needed &middot;{' '}
              {profile.locationNote}
            </p>

            <div className="mt-6">
              <CalendlyEmbed />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
