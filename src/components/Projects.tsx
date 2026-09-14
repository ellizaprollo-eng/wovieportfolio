import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { projects, type Project } from '@/data/portfolio'

function CaseStudy({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="overflow-hidden rounded-lg border border-white/[0.07] bg-card/60 lg:grid lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div className="overflow-hidden border-b border-white/[0.06] bg-black/40 lg:border-r lg:border-b-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-[281/160] w-full object-cover lg:h-full lg:aspect-auto"
        />
      </div>

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

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="group overflow-hidden rounded-lg border border-white/[0.07] bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
    >
      <div className="overflow-hidden border-b border-white/[0.06] bg-black/40">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-[281/160] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="p-5">
        <h3 className="heading-display text-lg font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body-dim">
          {project.description}
        </p>
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

export function Projects() {
  const featured = projects.filter((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section
      id="portfolio"
      className="relative bg-surface py-24 sm:py-28"
    >
      <div className="container-x">
        <SectionHeading
          title="Project Highlights"
          subtitle="Real-world automation solutions delivered for diverse clients"
        />

        <div className="mt-14 flex flex-col gap-6">
          {featured.map((project, i) => (
            <CaseStudy key={project.title} project={project} delay={i * 90} />
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
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
