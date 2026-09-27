import { useEffect, useState } from 'react'
import { Backdrop } from '@/components/Backdrop'
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

/**
 * Plain iframe instead of Calendly's widget.js: the script only scans the
 * page once, so after a client-side navigation to /contact the box stayed
 * blank. An iframe loads on every mount.
 */
function CalendlyEmbed() {
  const [loaded, setLoaded] = useState(false)
  const [src, setSrc] = useState<string | null>(null)

  // embed_domain must be the real host, so build the URL on the client.
  useEffect(() => {
    const params = new URLSearchParams({
      embed_domain: window.location.hostname,
      embed_type: 'Inline',
      primary_color: '3fc7b0',
    })
    setSrc(`${CALENDLY_URL}?${params}`)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-lg" style={{ minWidth: '280px', height: '650px' }}>
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-body-dim">
          <span className="size-8 animate-spin rounded-full border-2 border-accent/25 border-t-accent" />
          Loading calendar&hellip;
        </div>
      )}
      {src && (
        <iframe
          src={src}
          title="Book a call with Wovie"
          onLoad={() => setLoaded(true)}
          className="relative h-full w-full border-0"
        />
      )}
    </div>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-clip bg-ink py-24 sm:py-28">
      <Backdrop id="contact" variant="grid" glow="top-right" />
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
