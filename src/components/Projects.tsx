import { useEffect, useState } from 'react'
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { projects, type Project } from '@/data/portfolio'

function ViewOverlay({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-ink/0 text-sm font-semibold text-white opacity-0 transition duration-200 group-hover/view:bg-ink/65 group-hover/view:opacity-100">
      <Maximize2 className="size-4" />
      {label}
    </span>
  )
}

function CaseStudy({
  project,
  delay,
  onView,
}: {
  project: Project
  delay: number
  onView: () => void
}) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="overflow-hidden rounded-lg border border-white/[0.07] bg-card/60 lg:grid lg:grid-cols-[0.85fr_1.15fr]"
    >
      <button
        type="button"
        onClick={onView}
        aria-label={`View the full ${project.title} workflow`}
        className="group/view relative flex items-center overflow-hidden border-b border-white/[0.06] bg-black/40 text-left lg:border-r lg:border-b-0"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-[281/160] w-full object-cover"
        />
        <ViewOverlay label="View full workflow" />
      </button>

      <div className="p-6 sm:p-8">
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <h3 className="heading-display mt-4 text-xl font-bold text-white">
          {project.title}
        </h3>

        <dl className="mt-5 space-y-4">
          <div>
            <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
              Problem
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-body/90">
              {project.problem}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
              Approach
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-body/90">
              {project.approach}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
              Result
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-body/90">
              {project.result}
            </dd>
          </div>
        </dl>

        <a
          href="#contact"
          className="btn-primary mt-6"
          style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
        >
          Discuss a project like this
          <ArrowRight className="btn-arrow size-4" />
        </a>
      </div>
    </Reveal>
  )
}

function ProjectCard({
  project,
  delay,
  onView,
}: {
  project: Project
  delay: number
  onView: () => void
}) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="group overflow-hidden rounded-lg border border-white/[0.07] bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <button
        type="button"
        onClick={onView}
        aria-label={`View the full ${project.title} workflow`}
        className="group/view relative block w-full overflow-hidden border-b border-white/[0.06] bg-black/40 text-left"
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-[281/160] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <ViewOverlay label="View full workflow" />
      </button>

      <div className="p-5">
        <h3 className="heading-display text-lg font-bold text-white">
          {project.title}
        </h3>

        {project.problem && project.approach && project.result ? (
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
                Problem
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-body-dim">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
                Approach
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-body-dim">
                {project.approach}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
                Result
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-body-dim">
                {project.result}
              </dd>
            </div>
          </dl>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-body-dim">
            {project.description}
          </p>
        )}

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary mt-5"
          style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
        >
          Discuss this project
          <ArrowRight className="btn-arrow size-4" />
        </a>
      </div>
    </Reveal>
  )
}

function ProjectLightbox({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} workflow preview`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-white/15 bg-card text-white transition hover:border-accent/50 hover:text-accent"
      >
        <X className="size-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous workflow"
        className="absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-card text-white transition hover:border-accent/50 hover:text-accent sm:left-6"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next workflow"
        className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-card text-white transition hover:border-accent/50 hover:text-accent sm:right-6"
      >
        <ChevronRight className="size-5" />
      </button>

      <figure
        className="flex max-h-[90vh] max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={project.image}
          src={project.image}
          alt={project.title}
          className="content-fade max-h-[72vh] w-auto rounded-lg border border-white/10 object-contain"
        />
        <figcaption key={project.title} className="content-fade max-w-xl text-center">
          <p className="heading-display text-lg font-bold text-white">
            {project.title}
          </p>
          {project.problem && project.approach && project.result ? (
            <dl className="mt-3 space-y-3 text-left">
              <div>
                <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
                  Problem
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-body-dim">
                  {project.problem}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
                  Approach
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-body-dim">
                  {project.approach}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-[0.1em] text-accent uppercase">
                  Result
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-body-dim">
                  {project.result}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="mt-1 text-sm text-body-dim">{project.description}</p>
          )}
        </figcaption>
      </figure>
    </div>
  )
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  function showRelative(offset: number) {
    setActiveProject((current) => {
      if (!current) return current
      const index = projects.indexOf(current)
      return projects[(index + offset + projects.length) % projects.length]
    })
  }

  return (
    <section
      id="portfolio"
      className="relative bg-surface py-24 sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          title="Project Highlights"
          subtitle="Real-world automation solutions delivered for diverse clients. Click any workflow to view it in full."
        />

        <div className="mt-14 flex flex-col gap-6">
          {featured.map((project, i) => (
            <CaseStudy
              key={project.title}
              project={project}
              delay={i * 90}
              onView={() => setActiveProject(project)}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <h3 className="heading-display mt-16 text-lg font-bold text-white">
              More automations
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  delay={(i % 3) * 90}
                  onView={() => setActiveProject(project)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {activeProject && (
        <ProjectLightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onPrev={() => showRelative(-1)}
          onNext={() => showRelative(1)}
        />
      )}
    </section>
  )
}
