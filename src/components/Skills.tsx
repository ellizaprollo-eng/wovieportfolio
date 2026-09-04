import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Technical Skills"
          subtitle="Comprehensive expertise across automation, management, and productivity tools"
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-col gap-9">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <h3 className="text-lg font-bold text-white">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={`${group.group}-${item}`}
                    className="rounded-full border border-accent/30 bg-gradient-to-b from-accent/12 to-accent-deep/10 px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-white"
                  >
                    {item}
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
