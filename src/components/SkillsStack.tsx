import { Reveal } from '@/components/Reveal'
import { skillGroups } from '@/data/portfolio'

const LABEL_COLORS = [
  'text-accent-bright',
  'text-accent-soft',
  'text-accent',
  'text-body',
]

export function SkillsStack() {
  return (
    <section className="relative bg-ink py-20 sm:py-24">
      <div className="container-x">
        <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
          <span className="h-px w-5 bg-accent-bright" aria-hidden="true" />
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
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-fg/10 px-3 py-1 text-xs font-medium text-body-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
