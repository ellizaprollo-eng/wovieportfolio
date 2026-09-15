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
              <ul className="mt-4 flex flex-wrap items-start gap-x-5 gap-y-4">
                {group.items.map((item) =>
                  item.logo ? (
                    <li
                      key={`${group.group}-${item.name}`}
                      className="flex w-16 flex-col items-center gap-2 text-center"
                      title={item.name}
                    >
                      <span className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-white p-2.5 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] transition-transform duration-150 hover:-translate-y-0.5 hover:border-accent/50">
                        <img
                          src={item.logo}
                          alt={item.name}
                          loading="lazy"
                          className="size-full object-contain"
                        />
                      </span>
                      <span className="text-[0.7rem] leading-tight text-body-dim">
                        {item.name}
                      </span>
                    </li>
                  ) : (
                    <li
                      key={`${group.group}-${item.name}`}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-body transition-colors duration-150 hover:border-accent/40 hover:text-white"
                    >
                      {item.name}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
