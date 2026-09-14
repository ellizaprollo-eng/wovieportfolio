import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/portfolio'

export function Process() {
  return (
    <section id="process" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="How We'd Work Together"
          subtitle="A straightforward path from first call to a workflow running on its own"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 70}
              as="article"
              className="rounded-lg border border-white/[0.07] bg-card/60 p-6"
            >
              <span className="heading-display text-sm font-extrabold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="heading-display mt-3 text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body-dim">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
