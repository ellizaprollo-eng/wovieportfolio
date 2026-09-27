import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import type { Project } from '@/data/portfolio'
import { slugify } from '@/lib/slug'

export function hasDetails(project: Project) {
  return slugify(project.title) in caseStudies
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-fg/[0.07] bg-ink/40 p-5">
      <h3 className="heading-display text-base font-bold text-fg">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-body/90">
          <span className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-accent/70" />
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Full case-study write-up for one project, shown over the page. */
export function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const content = caseStudies[slugify(project.title)]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  if (!content) return null

  // Portal to <body> so the parent section's stacking context can't put the navbar on top.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={onClose}
      className="fixed inset-0 z-[60] overflow-y-auto bg-[#05081a]/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto max-w-4xl rounded-2xl border border-fg/10 bg-card p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-fg/15 bg-ink/60 text-fg transition hover:border-accent/50 hover:text-accent"
        >
          <X className="size-5" />
        </button>

        <ul className="flex flex-wrap gap-2 pr-12">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h2 className="heading-display mt-4 text-2xl font-extrabold text-fg sm:text-3xl">{project.title}</h2>
        <p className="mt-2 text-base leading-relaxed text-body-dim">{project.description}</p>

        <img
          src={project.image}
          alt={project.title}
          className="mt-6 max-h-[24rem] w-full rounded-lg border border-fg/10 object-cover"
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Block title="Operational Value">
            <Bullets items={content.operationalValue} />
          </Block>
          <Block title="Project Overview">
            <p className="text-sm leading-relaxed text-body/90">{content.overview}</p>
          </Block>
          <Block title="Workflow Process">
            <ol className="space-y-2.5">
              {content.workflowProcess.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-body/90">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent-bright">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Block>
          <Block title="Automation Solution">
            <Bullets items={content.automationSolution} />
          </Block>
          <Block title="Business Challenges">
            <Bullets items={content.businessChallenges} />
          </Block>
          <Block title="Key Blueprint Features">
            <Bullets items={content.keyFeatures} />
          </Block>
        </div>

        <a
          href="#contact"
          onClick={onClose}
          className="btn-primary mt-6"
          style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
        >
          Want something like this? Get In Touch
        </a>
      </div>
    </div>,
    document.body,
  )
}
