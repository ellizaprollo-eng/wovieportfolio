import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Aurora } from '@/components/Aurora'
import { Reveal } from '@/components/Reveal'
import { heroFlow, heroStats, profile } from '@/data/portfolio'

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

        <Reveal
          delay={210}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent/25 p-3 shadow-[0_0_60px_-15px_var(--color-accent)] sm:p-5"
        >
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {heroFlow.flatMap((step, i) => {
              const card = (
                <div
                  key={step.label}
                  className="rounded-xl border border-fg/10 bg-card/80 p-4 text-left"
                >
                  <p className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.06em] text-accent uppercase">
                    <span className="inline-flex size-1.5 rounded-full bg-accent" />
                    {step.label}
                  </p>
                  <p className="heading-display mt-2 text-sm font-bold text-fg">
                    {step.title}
                  </p>
                  <p className="mt-1 font-mono text-[0.65rem] text-body-dim">
                    {step.meta}
                  </p>
                </div>
              )
              if (i === heroFlow.length - 1) return [card]
              return [
                card,
                <ArrowRight
                  key={`${step.label}-arrow`}
                  aria-hidden="true"
                  className="mx-auto hidden size-4 rotate-90 text-accent/40 sm:block sm:rotate-0"
                />,
              ]
            })}
          </div>
        </Reveal>

        <Reveal
          delay={250}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-fg/10 pt-10 sm:grid-cols-4 lg:mt-16"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="heading-display text-3xl font-extrabold text-accent-bright sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-body-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
