import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight, LayoutGrid, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import { projects, type Project } from '@/data/portfolio'
import { slugify } from '@/lib/slug'

type FilterKey =
  | 'all'
  | 'featured'
  | 'n8n'
  | 'Make'
  | 'Zapier'
  | 'GoHighLevel'
  | 'Retell AI'

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'featured', label: 'Featured' },
  { key: 'GoHighLevel', label: 'GoHighLevel' },
  { key: 'n8n', label: 'n8n' },
  { key: 'Make', label: 'Make' },
  { key: 'Zapier', label: 'Zapier' },
  { key: 'Retell AI', label: 'Retell AI' },
]

function matchesFilter(project: Project, filter: FilterKey) {
  if (filter === 'all') return true
  if (filter === 'featured') return !!project.featured
  return project.tags.includes(filter)
}

function ViewOverlay({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 bg-black/0 text-sm font-semibold text-white opacity-0 transition duration-200 group-hover/view:bg-black/65 group-hover/view:opacity-100">
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
      className="overflow-hidden rounded-lg border border-fg/[0.07] bg-card/60 lg:grid lg:grid-cols-[0.85fr_1.15fr]"
    >
      <button
        type="button"
        onClick={onView}
        aria-label={`View the full ${project.title} workflow`}
        className="group/view relative flex items-center overflow-hidden border-b border-fg/[0.06] bg-black/40 text-left lg:border-r lg:border-b-0"
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

        <h3 className="heading-display mt-4 text-xl font-bold text-fg">
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

        <Link
          to="/case-studies/$slug"
          params={{ slug: slugify(project.title) }}
          className="btn-primary mt-6"
          style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
        >
          View Case Study Details
          <ArrowRight className="btn-arrow size-4" />
        </Link>
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
      className="group overflow-hidden rounded-lg border border-fg/[0.07] bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <button
        type="button"
        onClick={onView}
        aria-label={`View the full ${project.title} workflow`}
        className="group/view relative block w-full overflow-hidden border-b border-fg/[0.06] bg-black/40 text-left"
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
        <h3 className="heading-display text-lg font-bold text-fg">
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

        <Link
          to="/case-studies/$slug"
          params={{ slug: slugify(project.title) }}
          className="btn-primary mt-5"
          style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
        >
          View Case Study Details
          <ArrowRight className="btn-arrow size-4" />
        </Link>
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
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-fg/15 bg-card text-fg transition hover:border-accent/50 hover:text-accent"
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
        className="absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-fg/15 bg-card text-fg transition hover:border-accent/50 hover:text-accent sm:left-6"
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
        className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-fg/15 bg-card text-fg transition hover:border-accent/50 hover:text-accent sm:right-6"
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
          className="content-fade max-h-[72vh] w-auto rounded-lg border border-fg/10 object-contain"
        />
        <figcaption key={project.title} className="content-fade max-w-xl text-center">
          <p className="heading-display text-lg font-bold text-fg">
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
  const [filter, setFilter] = useState<FilterKey>('all')

  const visible = projects.filter((project) => matchesFilter(project, filter))
  const featured = visible.filter((project) => project.featured)
  const rest = visible.filter((project) => !project.featured)

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
        <Reveal>
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            <span className="h-px w-5 bg-accent-bright" aria-hidden="true" />
            Featured Systems
          </p>
          <h1 className="heading-display mt-4 text-3xl leading-[1.15] font-extrabold tracking-tight text-fg sm:text-4xl">
            Automations I&rsquo;ve actually shipped.
          </h1>
          <p className="mt-3 max-w-2xl text-base text-body-dim">
            Every project below is a real workflow built for a real
            business, not a demo. Click any workflow to view it in full.
          </p>
        </Reveal>

        <Reveal delay={40} className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors',
                filter === f.key
                  ? 'border-accent bg-accent/10 text-accent-bright'
                  : 'border-fg/12 text-body-dim hover:border-fg/25 hover:text-fg',
              )}
            >
              {f.key === 'all' && <LayoutGrid className="size-3.5" />}
              {f.label}
            </button>
          ))}
        </Reveal>

        {featured.length > 0 && (
          <div className="mt-10 flex flex-col gap-6">
            {featured.map((project, i) => (
              <CaseStudy
                key={project.title}
                project={project}
                delay={i * 90}
                onView={() => setActiveProject(project)}
              />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            <h3 className="heading-display mt-16 text-lg font-bold text-fg">
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

        {visible.length === 0 && (
          <p className="mt-14 text-sm text-body-dim">
            No projects match this filter yet.
          </p>
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
