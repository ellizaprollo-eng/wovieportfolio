import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Backdrop } from '@/components/Backdrop'
import { Reveal } from '@/components/Reveal'
import { journeyIntro, journeySteps } from '@/data/leadsJourney'

const pad = (n: number) => String(n).padStart(2, '0')

/** Home page teaser for the Leads Journey case study. */
export function CaseStudyPreview() {
  return (
    <section
      id="case-study"
      className="relative isolate overflow-clip bg-ink py-24 sm:py-28"
    >
      <Backdrop id="case-study-preview" variant="flow" glow="top-right" />
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              <span aria-hidden="true" className="text-accent/50">
                //
              </span>
              Case Study
            </p>
            <h2 className="heading-display text-3xl leading-[1.15] font-extrabold tracking-tight text-fg sm:text-4xl">
              {journeyIntro.title}
            </h2>
            <p className="mt-4 text-base text-body-dim sm:text-lg">{journeyIntro.subtitle}</p>
          </Reveal>
          <Link
            to="/case-study"
            className="btn-primary shrink-0"
            style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
          >
            Read the Full Case Study
            <ArrowRight className="btn-arrow size-4" />
          </Link>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {journeySteps.map((step, i) => (
            <Reveal key={step.id} as="li" delay={i * 70}>
              <Link
                to="/case-study"
                hash={step.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-fg/[0.08] bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-fg/[0.06] bg-white">
                  <img
                    src={step.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-3 left-3 grid size-9 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-white shadow-lg">
                    {pad(i + 1)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="heading-display text-base leading-snug font-bold text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body-dim">{step.trigger}.</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-accent-bright">
                    See this step
                    <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
