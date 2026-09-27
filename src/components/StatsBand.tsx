import { SectionHeading } from '@/components/SectionHeading'
import { Backdrop } from '@/components/Backdrop'
import { byTheNumbers } from '@/data/portfolio'

export function StatsBand() {
  return (
    <section className="relative isolate overflow-clip bg-surface py-20 sm:py-24">
      <Backdrop id="stats" variant="lines" glow="bottom-right" />
      <div className="container-x">
        <SectionHeading
          kicker="By the Numbers"
          title={
            <>
              Real systems, shipped to <span className="heading-accent">real businesses</span>.
            </>
          }
          subtitle="A mix of GoHighLevel builds, AI agents, and automation workflows shipped for service businesses, agencies, and coaches."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {byTheNumbers.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-fg/10 bg-card/60 p-5"
            >
              <p className="heading-display text-3xl font-extrabold text-accent-bright sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-body-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
