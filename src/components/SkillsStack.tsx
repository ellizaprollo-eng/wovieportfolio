import { Reveal } from '@/components/Reveal'
import { skillGroups, techStack } from '@/data/portfolio'

const LABEL_COLORS = [
  'text-accent-bright',
  'text-accent-soft',
  'text-accent',
  'text-body',
]

const LOGO_BY_NAME = new Map(techStack.map((t) => [t.name, t.logo]))

export function SkillsStack() {
  return (
    <section className="relative bg-ink py-20 sm:py-24">
      <div className="container-x">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
          Tools &amp; Platforms
        </p>

        <div className="mt-8 flex flex-col gap-6">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 60}
              className="flex flex-wrap items-baseline gap-x-4 gap-y-3 border-t border-fg/[0.07] pt-5"
            >
              <span
                className={`w-full shrink-0 text-xs font-bold tracking-[0.1em] uppercase sm:w-44 ${LABEL_COLORS[i % LABEL_COLORS.length]}`}
              >
                {group.label}
              </span>
              <div className="flex flex-1 flex-wrap gap-2">
                {group.items.map((item) => {
                  const logo = LOGO_BY_NAME.get(item)
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-fg/10 py-1 pr-3 pl-1.5 text-xs font-medium text-body-dim"
                    >
                      {logo && (
                        <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                          <img
                            src={logo}
                            alt=""
                            loading="lazy"
                            className="size-full object-contain p-0.5"
                          />
                        </span>
                      )}
                      {item}
                    </span>
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
