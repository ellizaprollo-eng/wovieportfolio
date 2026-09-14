import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { projects } from '@/data/portfolio'

export function Projects() {
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 90}
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
