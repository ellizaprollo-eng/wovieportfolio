import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import { experience } from '@/data/portfolio'

function ExperienceCard({ role }: { role: (typeof experience)[number] }) {
  return (
    <article className="rounded-lg border border-fg/[0.07] border-l-2 border-l-accent/50 bg-card/60 p-6">
      <h3 className="heading-display text-lg font-bold text-fg">
        {role.title}
      </h3>
      <p className="mt-1 text-sm text-body-dim">{role.meta}</p>

      <ul className="mt-5 space-y-2.5">
        {role.points.map((point) => (
          <li
            key={point}
            className="relative pl-5 text-sm leading-relaxed text-body/90"
          >
            <span className="absolute top-[0.5em] left-0 size-1.5 rounded-full bg-accent/70" />
            {point}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="btn-primary mt-5"
        style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
      >
        Get In Touch
        <ArrowRight className="btn-arrow size-4" />
      </Link>
    </article>
  )
}

const AUTO_ADVANCE_MS = 6000

/** Auto-advancing slider: rotates through `experience` on a timer, pauses on hover, and the dots jump to a role. */
function ExperienceSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const role = experience[active]

  // Re-runs on every change of `active`, so clicking a dot restarts the timer.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(
      () => setActive((prev) => (prev + 1) % experience.length),
      AUTO_ADVANCE_MS,
    )
    return () => window.clearTimeout(id)
  }, [active, paused])

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-x">
        <div key={role.title} className="content-fade min-w-0 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.14em] text-accent uppercase">
            {role.meta.split('|')[0].trim()}
          </p>
          <h3 className="heading-display mt-3 text-3xl font-extrabold text-fg sm:text-4xl">
            {role.title}
          </h3>
          <p className="mt-2 text-sm text-body-dim">{role.meta}</p>

          <ul className="mt-6 space-y-2.5">
            {role.points.map((point) => (
              <li
                key={point}
                className="relative pl-5 text-sm leading-relaxed text-body/90"
              >
                <span className="absolute top-[0.5em] left-0 size-1.5 rounded-full bg-accent/70" />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="btn-primary mt-6"
            style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
          >
            Get In Touch
            <ArrowRight className="btn-arrow size-4" />
          </Link>
        </div>
      </div>

      <div className="container-x mt-10 flex items-center justify-center gap-3">
        {experience.map((r, i) => (
          <button
            key={r.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to ${r.title}`}
            aria-current={i === active}
            className="p-1"
          >
            <span
              aria-hidden="true"
              className={cn(
                'block size-2 rounded-full transition-colors duration-300',
                i === active ? 'bg-accent' : 'bg-fg/15',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Work Experience"
          subtitle="Browse the full work history, one role at a time."
        />
      </div>

      {/* Mobile / tablet: plain stacked list — the slider is a desktop pattern */}
      <div className="container-x mx-auto mt-14 flex max-w-3xl flex-col gap-5 lg:hidden">
        {experience.map((role, i) => (
          <Reveal key={role.title} delay={i * 60}>
            <ExperienceCard role={role} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <ExperienceSlider />
      </div>
    </section>
  )
}
