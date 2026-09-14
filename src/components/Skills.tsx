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

        <div className="mt-14 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <h3 className="text-xs font-bold tracking-[0.14em] text-body-dim uppercase">
                {group.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={`${group.group}-${item}`}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-body transition-colors duration-150 hover:border-accent/40 hover:text-white"
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
