import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Work Experience"
          subtitle="A track record of delivering excellence across various domains"
        />

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-5">
          {experience.map((role, i) => (
            <Reveal
              key={role.title}
              delay={i * 60}
              as="article"
              className="rounded-lg border border-white/[0.07] border-l-2 border-l-accent/50 bg-card/60 p-6 transition-colors duration-300 hover:border-l-accent"
            >
              <h3 className="heading-display text-lg font-bold text-white">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
