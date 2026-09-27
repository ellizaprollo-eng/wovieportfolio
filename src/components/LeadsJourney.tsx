import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, Check, Maximize2, X, Zap } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Backdrop } from '@/components/Backdrop'
import { journeyIntro, journeySteps, type JourneyStep } from '@/data/leadsJourney'

const pad = (n: number) => String(n).padStart(2, '0')

/** Full-screen, scrollable view of a workflow screenshot. */
function Lightbox({ step, onClose }: { step: JourneyStep; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={step.imageLabel}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex flex-col bg-[#05081a]/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <p className="truncate text-sm font-semibold text-white">{step.imageLabel}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="flex-1 overflow-auto px-4 pb-6 sm:px-6">
        <img
          src={step.image}
          alt={step.imageLabel}
          onClick={(e) => e.stopPropagation()}
          className="mx-auto w-full max-w-[110rem] min-w-[56rem] rounded-lg bg-white"
        />
      </div>
    </div>
  )
}

function StageChain({ stages }: { stages: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {stages.map((stage, i) => (
        <span key={stage} className="flex items-center gap-1.5">
          {i > 0 && <ArrowRight aria-hidden="true" className="size-3.5 text-body-dim" />}
          <span
            className={
              i === stages.length - 1
                ? 'rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white'
                : 'rounded-full border border-fg/15 px-3 py-1 text-xs font-medium text-body'
            }
          >
            {stage}
          </span>
        </span>
      ))}
    </div>
  )
}

function Step({
  step,
  index,
  onExpand,
}: {
  step: JourneyStep
  index: number
  onExpand: () => void
}) {
  const next = journeySteps[index + 1]

  return (
    <section id={step.id} className="scroll-mt-28">
      <Reveal
        as="article"
        className="overflow-hidden rounded-2xl border border-fg/[0.08] bg-card/60"
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12 lg:p-10">
          <div>
            <div className="flex items-center gap-4">
              <span className="heading-display text-5xl leading-none font-extrabold text-accent sm:text-6xl">
                {pad(index + 1)}
              </span>
              <span className="h-px flex-1 bg-fg/10" />
              <span className="font-mono text-[0.65rem] tracking-[0.14em] text-body-dim uppercase">
                Step {index + 1} of {journeySteps.length}
              </span>
            </div>
            <h3 className="heading-display mt-5 text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-body/90">{step.summary}</p>
          </div>

          <div className="rounded-xl border border-fg/[0.07] bg-ink/40 p-5 sm:p-6">
            <p className="flex items-center gap-2 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-accent-bright uppercase">
              <Zap aria-hidden="true" className="size-3.5" />
              Trigger
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{step.trigger}</p>

            <p className="mt-6 font-mono text-[0.65rem] font-semibold tracking-[0.14em] text-accent-bright uppercase">
              What it does
            </p>
            <ul className="mt-3 space-y-2.5">
              {step.actions.map((action) => (
                <li key={action} className="flex gap-2.5 text-sm leading-relaxed text-body/90">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent/20 text-accent-bright">
                    <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                  </span>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Workflow screenshot, framed like an app window */}
        <div className="px-3 sm:px-6 lg:px-10">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-fg/10">
            <div className="flex items-center gap-3 border-b border-fg/10 bg-ink/70 px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-fg/20" />
                <span className="size-2.5 rounded-full bg-fg/20" />
                <span className="size-2.5 rounded-full bg-fg/20" />
              </span>
              <span className="min-w-0 flex-1 truncate font-mono text-[0.7rem] text-body-dim">
                GoHighLevel &middot; {step.imageLabel}
              </span>
              <button
                type="button"
                onClick={onExpand}
                className="flex shrink-0 items-center gap-1.5 rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-white transition-colors hover:bg-accent-deep"
              >
                <Maximize2 aria-hidden="true" className="size-3.5" />
                Expand
              </button>
            </div>
            <button
              type="button"
              onClick={onExpand}
              aria-label={`Expand screenshot: ${step.imageLabel}`}
              className="block w-full cursor-zoom-in bg-white"
            >
              <img
                src={step.image}
                alt={`GoHighLevel workflow: ${step.imageLabel}`}
                loading="lazy"
                className="mx-auto block max-h-[34rem] w-full object-contain"
              />
            </button>
          </div>
        </div>

        <div className="grid gap-5 border-t border-fg/[0.07] bg-ink/30 px-6 py-5 sm:px-8 md:grid-cols-2 lg:px-10">
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-body-dim uppercase">
              Pipeline
            </p>
            <div className="mt-2.5">
              <StageChain stages={step.stages} />
            </div>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] text-body-dim uppercase">
              Tags applied
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {step.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-fg/[0.06] px-2.5 py-1 font-mono text-[0.7rem] text-body"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {step.systems && (
          <div
            className={`grid gap-3 bg-ink/30 px-6 pt-1 pb-6 sm:px-8 lg:px-10 ${
              step.systems.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
            }`}
          >
            {step.systems.map((system, i) => (
              <div
                key={system.title}
                className="rounded-xl border border-fg/[0.07] bg-card/70 p-5"
              >
                <p className="flex items-center gap-2.5 text-sm font-bold text-fg">
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-accent font-mono text-[0.65rem] text-white">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {system.title}
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-body-dim">{system.text}</p>
              </div>
            ))}
          </div>
        )}
      </Reveal>

      {next && (
        <a
          href={`#${next.id}`}
          className="group mx-auto my-5 flex w-fit flex-col items-center gap-2 text-xs font-medium text-body-dim transition-colors hover:text-accent-bright"
        >
          <span className="h-8 w-px bg-gradient-to-b from-fg/0 to-fg/20" />
          <span className="flex items-center gap-2 rounded-full border border-fg/10 bg-card/60 px-3.5 py-1.5">
            <ArrowDown aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-y-0.5" />
            Next: {next.title}
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-fg/20 to-fg/0" />
        </a>
      )}
    </section>
  )
}

/** The full Leads Journey case study, as a section of the one-page site. */
export function LeadsJourney() {
  const [open, setOpen] = useState<JourneyStep | null>(null)

  return (
    <>
      <section id="case-study" className="relative isolate overflow-clip bg-surface py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60rem]">
          <Backdrop id="case-study" variant="grid" glow="top-right" />
        </div>
        <div className="container-x">
          {/* Intro */}
          <Reveal className="max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {journeyIntro.eyebrow}
            </p>
            <h2 className="heading-display mt-4 text-3xl leading-[1.1] font-extrabold tracking-tight text-fg sm:text-5xl">
              {journeyIntro.title}
            </h2>
            <p className="mt-4 text-lg text-accent-soft sm:text-xl">{journeyIntro.subtitle}</p>
            <p className="mt-5 text-base leading-relaxed text-body-dim">
              {journeyIntro.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {journeyIntro.stack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Journey map: jump to any step */}
          <Reveal delay={80} as="section" className="mt-12">
            <ol className="grid gap-3 sm:grid-cols-5">
              {journeySteps.map((step, i) => (
                <li key={step.id}>
                  <a
                    href={`#${step.id}`}
                    className="group flex h-full items-center gap-3 rounded-xl border border-fg/[0.08] bg-card/60 p-4 transition-colors hover:border-accent/50 sm:flex-col sm:items-start"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-xs font-bold text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                      {pad(i + 1)}
                    </span>
                    <span className="text-sm leading-snug font-semibold text-fg">{step.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Steps */}
          <div className="mt-16">
            {journeySteps.map((step, i) => (
              <Step key={step.id} step={step} index={i} onExpand={() => setOpen(step)} />
            ))}
          </div>

          {/* CTA */}
          <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-accent/30 bg-accent/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="heading-display text-2xl font-extrabold text-fg sm:text-3xl">
                Want this running in your business?
              </h3>
              <p className="mt-2 text-base text-body-dim">
                I build the same system inside your GoHighLevel account, tuned to your offer.
              </p>
            </div>
            <Link to="/" hash="contact" className="btn-primary shrink-0">
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </Link>
          </Reveal>
        </div>
      </section>

      {open && <Lightbox step={open} onClose={() => setOpen(null)} />}
    </>
  )
}
