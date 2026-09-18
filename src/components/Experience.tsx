import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import { experience } from '@/data/portfolio'

const VH_PER_ITEM = 85

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

      <a
        href="#contact"
        className="btn-primary mt-5"
        style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
      >
        Discuss a project like this
        <ArrowRight className="btn-arrow size-4" />
      </a>
    </article>
  )
}

/** Pinned content that advances through `experience` as the tall wrapper below it is scrolled. */
function ScrollThrough() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const progress = (viewportCenter - rect.top) / rect.height
        const index = Math.min(
          experience.length - 1,
          Math.max(0, Math.floor(progress * experience.length)),
        )
        setActive(index)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const role = experience[active]

  return (
    <div
      ref={wrapperRef}
      className="relative hidden lg:block"
      style={{ height: `${experience.length * VH_PER_ITEM}vh` }}
    >
      <div className="sticky top-20 flex h-[calc(100svh-5rem)] items-start pt-20">
        <div className="container-x grid grid-cols-[10rem_1fr] items-center gap-16">
          <span
            key={active}
            aria-hidden="true"
            className="content-fade heading-display select-none text-[8rem] leading-none font-extrabold text-fg/[0.04]"
          >
            {String(active + 1).padStart(2, '0')}
          </span>

          <div key={role.title} className="content-fade max-w-xl">
            <p className="text-xs font-bold tracking-[0.14em] text-accent uppercase">
              {String(active + 1).padStart(2, '0')} •{' '}
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

            <a
              href="#contact"
              className="btn-primary mt-6"
              style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
            >
              Discuss a project like this
              <ArrowRight className="btn-arrow size-4" />
            </a>
          </div>
        </div>

        <div className="absolute top-1/2 right-6 flex -translate-y-1/2 flex-col gap-3 xl:right-10">
          {experience.map((r, i) => (
            <span
              key={r.title}
              aria-hidden="true"
              className={cn(
                'size-2 rounded-full transition-colors duration-300',
                i === active ? 'bg-accent' : 'bg-fg/15',
              )}
            />
          ))}
        </div>
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
          subtitle="Scroll to move through the full work history, one role at a time."
        />
      </div>

      {/* Mobile / tablet: plain stacked list — the pinned scroll-through is a desktop pattern */}
      <div className="container-x mx-auto mt-14 flex max-w-3xl flex-col gap-5 lg:hidden">
        {experience.map((role, i) => (
          <Reveal key={role.title} delay={i * 60}>
            <ExperienceCard role={role} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <ScrollThrough />
      </div>
    </section>
  )
}
