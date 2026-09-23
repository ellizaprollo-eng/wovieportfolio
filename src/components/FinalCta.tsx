import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Aurora } from '@/components/Aurora'
import { Reveal } from '@/components/Reveal'
import { contactChannels } from '@/data/portfolio'

export function FinalCta() {
  const whatsapp = contactChannels.find((c) => c.icon === 'whatsapp')

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      <Aurora />

      <div className="container-x relative z-10 mx-auto max-w-2xl text-center">
        <Reveal className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 font-mono text-xs tracking-[0.08em] text-accent-soft uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="heading-display mt-6 text-[2.1rem] leading-[1.14] font-extrabold tracking-tight text-fg sm:text-5xl">
            Ready to <span className="heading-accent">automate</span> your business?
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-body sm:text-base">
            Whether you need a complete GoHighLevel setup, smarter follow-up workflows, or
            AI-powered automation, I can help you build a system that runs while you focus on
            growth.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
          >
            Get In Touch
            <ArrowRight className="size-4" />
          </Link>
          {whatsapp && (
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-fg/[0.03] px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/40 hover:text-accent-bright"
            >
              Message on WhatsApp
              <ArrowRight className="size-4" />
            </a>
          )}
        </Reveal>
      </div>
    </section>
  )
}
