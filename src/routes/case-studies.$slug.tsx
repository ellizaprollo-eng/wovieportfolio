import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Reveal } from '@/components/Reveal'
import { projects } from '@/data/portfolio'
import { caseStudies } from '@/data/caseStudies'
import { slugify } from '@/lib/slug'

export const Route = createFileRoute('/case-studies/$slug')({
  loader: ({ params }) => {
    const project = projects.find((p) => slugify(p.title) === params.slug)
    const content = caseStudies[params.slug]
    if (!project || !content) throw notFound()
    return { project, content }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { project } = loaderData
    const title = `${project.title} Case Study | Wovie Prollo`
    return {
      meta: [
        { title },
        { name: 'description', content: project.description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: project.description },
        { property: 'og:image', content: project.image },
      ],
    }
  },
  component: CaseStudyPage,
  notFoundComponent: CaseStudyNotFound,
})

function BackLink() {
  return (
    <Link
      to="/"
      hash="portfolio"
      className="inline-flex items-center gap-2 text-sm font-semibold text-body-dim transition-colors hover:text-accent-bright"
    >
      <ArrowLeft className="size-4" />
      Back to Project Highlights
    </Link>
  )
}

function CaseStudyNotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-ink px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
          Not Found
        </p>
        <h1 className="heading-display text-3xl font-extrabold text-fg">
          This case study doesn&rsquo;t exist
        </h1>
        <p className="max-w-md text-sm text-body-dim">
          The project you&rsquo;re looking for may have moved. Head back to
          see the full list of projects.
        </p>
        <Link to="/" hash="portfolio" className="btn-primary mt-2">
          <span className="btn-node" aria-hidden="true" />
          Back to Project Highlights
        </Link>
      </main>
      <Footer />
    </>
  )
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <Reveal
      delay={delay}
      as="article"
      className="rounded-lg border border-fg/[0.07] bg-card/60 p-6 sm:p-8"
    >
      <h2 className="heading-display text-lg font-bold text-fg">{title}</h2>
      <div className="mt-4">{children}</div>
    </Reveal>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-relaxed text-body/90"
        >
          <span className="mt-[0.5em] size-1.5 shrink-0 rounded-full bg-accent/70" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function CaseStudyPage() {
  const { project, content } = Route.useLoaderData()

  return (
    <>
      <Navbar />
      <main className="bg-ink pt-28 pb-24 sm:pt-32">
        <div className="container-x">
          <BackLink />

          <Reveal className="mt-6 max-w-3xl">
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
            <h1 className="heading-display mt-4 text-3xl font-extrabold text-fg sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-body-dim">
              {project.description}
            </p>
          </Reveal>

          <Reveal
            delay={60}
            className="mt-8 overflow-hidden rounded-lg border border-fg/10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[28rem] w-full object-cover"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Section title="Operational Value">
              <BulletList items={content.operationalValue} />
            </Section>

            <Section title="Project Overview" delay={40}>
              <p className="text-sm leading-relaxed text-body/90">
                {content.overview}
              </p>
            </Section>

            <Section title="Workflow Process" delay={80}>
              <ol className="space-y-3">
                {content.workflowProcess.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-relaxed text-body/90"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-[11px] font-bold text-accent-bright">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Section>

            <Section title="Automation Solution" delay={120}>
              <BulletList items={content.automationSolution} />
            </Section>

            <Section title="Business Challenges" delay={160}>
              <BulletList items={content.businessChallenges} />
            </Section>

            <Section title="Key Blueprint Features" delay={200}>
              <BulletList items={content.keyFeatures} />
            </Section>
          </div>

          <Reveal
            delay={100}
            className="mt-10 flex flex-col items-start gap-4 rounded-lg border border-accent/20 bg-accent/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <p className="heading-display text-lg font-bold text-fg">
                Want something like this built for your business?
              </p>
              <p className="mt-1 text-sm text-body-dim">
                Let&rsquo;s talk through what a similar system could look
                like for you.
              </p>
            </div>
            <Link to="/" hash="contact" className="btn-primary shrink-0">
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </Link>
          </Reveal>

          <div className="mt-10">
            <BackLink />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
