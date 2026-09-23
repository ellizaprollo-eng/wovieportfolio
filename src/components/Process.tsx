import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/portfolio'

export function Process() {
  return (
    <section id="process" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="How I Work"
          title={
            <>
              Five steps from your <span className="heading-accent">messy ops</span> to a
              working system.
            </>
          }
          subtitle="No 30-page decks. No months of scoping calls. Map the system, build the smallest version that helps, then improve it based on how real users actually move through it."
        />

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute top-2 bottom-2 left-5 w-px bg-fg/10" aria-hidden="true" />

          <ol className="flex flex-col gap-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 70} as="li" className="relative pl-16">
                <span className="heading-display absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border border-accent/30 bg-card text-sm font-extrabold text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="heading-display text-xl font-bold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-body-dim">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
