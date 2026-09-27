import { Bot, Code2, Plug, Workflow } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Backdrop } from '@/components/Backdrop'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups, techStack } from '@/data/portfolio'

const GROUP_ICONS = [Workflow, Bot, Plug, Code2]

const LOGO_BY_NAME = new Map(techStack.map((t) => [t.name, t.logo]))

export function TechStackGrid() {
  return (
    <section id="tech-stack" className="relative isolate overflow-clip bg-surface py-24 sm:py-28">
      <Backdrop id="stack" variant="dots" glow="bottom-left" />
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = GROUP_ICONS[i % GROUP_ICONS.length]
            return (
              <Reveal
                key={group.label}
                delay={i * 70}
                className="group/card relative flex flex-col overflow-hidden rounded-2xl border border-fg/10 bg-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-20px_var(--color-accent)]"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent-deep via-accent to-accent-bright opacity-60 transition-opacity duration-300 group-hover/card:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent-bright transition-colors duration-300 group-hover/card:bg-accent group-hover/card:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full border border-fg/10 px-2.5 py-0.5 font-mono text-[0.65rem] text-body-dim tabular-nums">
                    {String(group.items.length).padStart(2, '0')} tools
                  </span>
                </div>

                <p className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-accent-bright uppercase">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="heading-display mt-1 text-lg font-bold text-fg">{group.label}</h3>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => {
                    const logo = LOGO_BY_NAME.get(item)
                    return (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 rounded-full border border-fg/[0.08] bg-fg/[0.03] py-1 pr-3 pl-1 text-xs font-medium text-body transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                      >
                        {logo ? (
                          <span className="flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                            <img src={logo} alt="" loading="lazy" className="size-full object-contain p-0.5" />
                          </span>
                        ) : (
                          <span className="ml-1.5 inline-flex size-1.5 shrink-0 rounded-full bg-accent" />
                        )}
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
