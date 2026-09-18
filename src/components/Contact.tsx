import { useEffect } from 'react'
import { Globe, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { contactChannels, profile, type ContactIcon } from '@/data/portfolio'

const CHANNEL_ICONS: Record<ContactIcon, typeof Mail> = {
  whatsapp: MessageCircle,
  mail: Mail,
  linkedin: Linkedin,
  globe: Globe,
}

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

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="flex flex-col gap-4">
            {contactChannels.map((channel) => {
              const Icon = CHANNEL_ICONS[channel.icon]
              return (
                <a
                  key={`${channel.label}-${channel.value}`}
                  href={channel.href}
                  target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-fg/[0.07] bg-card/60 p-4 transition-colors hover:border-accent/40"
                >
                  <span className="inline-flex shrink-0 rounded-lg border border-fg/10 bg-fg/[0.03] p-2.5 text-accent transition-colors group-hover:border-accent/45 group-hover:text-accent-bright">
                    <Icon className="size-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-body-dim">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm font-semibold text-fg transition-colors group-hover:text-accent-bright">
                      {channel.value}
                    </span>
                  </span>
                </a>
              )
            })}

            <div className="rounded-lg border border-fg/[0.07] bg-card/60 p-4">
              <span className="block text-xs text-body-dim">Location</span>
              <span className="block text-sm font-semibold text-fg">
                {profile.location}
              </span>
              <span className="mt-1 block text-xs text-body-dim">
                {profile.locationNote}
              </span>
            </div>
          </Reveal>

          <Reveal
            delay={60}
            className="rounded-lg border border-fg/[0.07] bg-card/60 p-6 sm:p-8"
          >
            <h3 className="heading-display text-lg font-bold text-fg">
              Schedule a Call
            </h3>
            <p className="mt-1.5 text-sm text-body-dim">
              Pick a time that works for you, no back-and-forth needed
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
