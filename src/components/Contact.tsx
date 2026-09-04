import { useState } from 'react'
import { CheckCircle2, Globe, Linkedin, Loader2, Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { contactChannels, profile, type ContactIcon } from '@/data/portfolio'

const CHANNEL_ICONS: Record<ContactIcon, typeof Mail> = {
  whatsapp: MessageCircle,
  mail: Mail,
  linkedin: Linkedin,
  globe: Globe,
}

const FORM_NAME = 'contact'
const EMPTY = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  message: '',
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

const fieldClass =
  'w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-body-dim/70 outline-none transition-colors focus:border-accent/60 focus:bg-white/[0.06]'

const labelClass = 'mb-1.5 block text-xs font-semibold tracking-wide text-body'

export function Contact() {
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>(
    'idle',
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...fields }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('done')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to automate your workflow? Let's discuss your project"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Message form */}
          <Reveal className="rounded-xl border border-white/[0.07] bg-card/60 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">Send a Message</h3>
            <p className="mt-1.5 text-sm text-body-dim">
              Fill out the form and I&rsquo;ll get back to you shortly
            </p>

            {status === 'done' ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-accent/25 bg-accent/[0.07] px-6 py-12 text-center">
                <CheckCircle2 className="size-8 text-accent-bright" />
                <p className="font-semibold text-white">Message sent</p>
                <p className="text-sm text-body-dim">
                  Thanks for reaching out — I&rsquo;ll be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm font-semibold text-accent-bright underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <p className="hidden">
                  <label>
                    Do not fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <span className={labelClass}>
                    Name <span className="text-accent">*</span>
                  </span>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      className={fieldClass}
                      name="firstName"
                      placeholder="First Name"
                      value={fields.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      required
                    />
                    <input
                      className={fieldClass}
                      name="lastName"
                      placeholder="Last Name"
                      value={fields.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="company">
                    Company Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="company"
                    className={fieldClass}
                    name="company"
                    placeholder="Your company"
                    value={fields.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    className={fieldClass}
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={fields.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    className={`${fieldClass} min-h-32 resize-y`}
                    name="message"
                    placeholder="Tell me about the workflow you want to automate"
                    value={fields.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-300">
                    Something went wrong sending that. Please try again, or email
                    me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-deep px-7 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-8px_rgba(233,53,216,0.9)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === 'sending' && (
                    <Loader2 className="size-4 animate-spin" />
                  )}
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </Reveal>

          {/* Channels + location */}
          <div className="flex flex-col gap-6">
            <Reveal
              delay={90}
              className="rounded-xl border border-white/[0.07] bg-card/60 p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mt-1.5 text-sm text-body-dim">
                Reach out through any of these channels
              </p>

              <ul className="mt-7 space-y-5">
                {contactChannels.map((channel) => {
                  const Icon = CHANNEL_ICONS[channel.icon]
                  return (
                    <li key={`${channel.label}-${channel.value}`}>
                      <a
                        href={channel.href}
                        target={
                          channel.href.startsWith('mailto:')
                            ? undefined
                            : '_blank'
                        }
                        rel="noreferrer"
                        className="group flex items-center gap-4"
                      >
                        <span className="inline-flex shrink-0 rounded-xl border border-accent/25 bg-gradient-to-br from-accent/25 to-accent-deep/15 p-2.5 text-accent-bright transition-colors group-hover:border-accent/55">
                          <Icon className="size-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs text-body-dim">
                            {channel.label}
                          </span>
                          <span className="block truncate text-sm font-semibold text-white transition-colors group-hover:text-accent-bright">
                            {channel.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Reveal>

            <Reveal
              delay={160}
              className="rounded-xl border border-white/[0.07] bg-card/60 p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white">Location</h3>
              <p className="mt-5 text-sm font-bold text-white">
                {profile.location}
              </p>
              <p className="mt-1.5 text-sm text-body-dim">
                {profile.locationNote}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
