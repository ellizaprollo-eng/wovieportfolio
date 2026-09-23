import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups, techStack } from '@/data/portfolio'

const LOGO_BY_NAME = new Map(techStack.map((t) => [t.name, t.logo]))

export function TechStackGrid() {
  return (
    <section className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Tech Stack"
          title={
            <>
              The stack I use to <span className="heading-accent">build and connect</span>{' '}
              your business systems.
            </>
          }
          subtitle="Four groups: automation platforms, AI, integrations, and CRM tooling. Claude Code shows up in two of them, it's how I ship without cutting corners."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 70}
              className="group/card relative overflow-hidden rounded-2xl border border-fg/10 bg-card/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_16px_40px_-16px_var(--color-accent)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

              <div className="flex items-baseline justify-between">
                <p className="font-mono text-[0.65rem] tracking-[0.08em] text-accent uppercase">
                  {String(i + 1).padStart(2, '0')} · {group.label}
                </p>
                <span className="font-mono text-[0.65rem] text-body-dim">
                  {group.items.length}
                </span>
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => {
                  const logo = LOGO_BY_NAME.get(item)
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-fg/[0.06] bg-fg/[0.02] px-2.5 py-2 text-xs font-medium text-body transition-colors duration-200 hover:border-accent/25 hover:text-fg"
                    >
                      {logo ? (
                        <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                          <img
                            src={logo}
                            alt=""
                            loading="lazy"
                            className="size-full object-contain p-0.5"
                          />
                        </span>
                      ) : (
                        <span className="inline-flex size-1.5 shrink-0 rounded-full bg-accent/60" />
                      )}
                      {item}
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
