import { Link } from '@tanstack/react-router'
import { ArrowRight, FormInput, Send, Sparkles } from 'lucide-react'
import { Aurora } from '@/components/Aurora'
import { Reveal } from '@/components/Reveal'
import { heroFlow, profile } from '@/data/portfolio'

const FLOW_ICONS = {
  form: FormInput,
  ai: Sparkles,
  send: Send,
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28"
    >
      <Aurora />

      <div className="container-x relative z-10 mx-auto max-w-4xl text-center">
        <Reveal className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 font-mono text-xs tracking-[0.08em] text-accent-soft uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.heroTags.join(' · ')}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="heading-display mx-auto mt-6 max-w-3xl text-[2.5rem] leading-[1.12] font-extrabold tracking-tight text-fg sm:text-6xl sm:leading-[1.1]">
            {profile.heroHeadline.map((segment, i) =>
              segment.accent ? (
                <span key={i} className="heading-accent">
                  {segment.text}
                </span>
              ) : (
                <span key={i}>{segment.text}</span>
              ),
            )}
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-body sm:text-base">
            {profile.intro}
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
          <Link
            to="/systems"
            className="inline-flex items-center gap-2 rounded-full border border-fg/15 bg-fg/[0.03] px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-accent/40 hover:text-accent-bright"
          >
            View my work
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Reveal
          delay={180}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-body-dim"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex size-1.5 rounded-full bg-accent" />
            Available for work &amp; projects
          </span>
          <span>Reply · &lt; 24h</span>
          <span>Engagement · Sprint-based</span>
        </Reveal>

        <Reveal delay={210} className="mx-auto mt-10 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-[1fr_2.5rem_1fr_2.5rem_1fr] sm:items-center">
            {heroFlow.flatMap((step, i) => {
              const Icon = FLOW_ICONS[step.icon]
              const card = (
                <div
                  key={step.label}
                  className="group rounded-xl border border-fg/10 bg-card/80 p-4 text-left shadow-[0_0_30px_-14px_var(--color-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_8px_28px_-10px_var(--color-accent)]"
                >
                  <span className="mb-3 flex size-8 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20">
                    <Icon className="size-4" />
                  </span>
                  <p className="font-mono text-[0.65rem] tracking-[0.06em] text-accent uppercase">
                    {step.label}
                  </p>
                  <p className="heading-display mt-1.5 text-sm font-bold text-fg">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[0.7rem] text-body-dim">{step.meta}</p>
                </div>
              )
              if (i === heroFlow.length - 1) return [card]
              return [
                card,
                <div
                  key={`${step.label}-connector`}
                  aria-hidden="true"
                  className="flow-connector relative mx-auto h-6 w-px sm:h-px sm:w-full"
                >
                  <span className="flow-connector-dot" />
                </div>,
              ]
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
