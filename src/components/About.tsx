import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { aboutQuickFacts, industriesBuiltFor, profile } from '@/data/portfolio'

const PARAGRAPHS = [
  "I'm Wovie, a GoHighLevel and AI Automation Specialist based in Butuan City, Philippines, working remotely with clients across every time zone.",
  "For the past 3+ years I've built automation systems for businesses that were still running on manual processes, fragmented tools, and follow-ups that depended on someone remembering to do them. My work spans GoHighLevel CRM setup, AI chat and voice agents, and workflow automation built on n8n, Zapier, and Make.",
  "I've run the full operational workflow behind two property management businesses, Press Haven Homes and Stay Classy Homes, handling tenant relations, guest communication, and reservation pipelines end to end. That hands-on experience shaped how I build: every automation gets tested in a sandbox against real data before it ever touches a client's live systems.",
  "My focus isn't just connecting apps together. It's building systems a business can actually rely on long after the handover.",
]

export function About() {
  return (
    <section id="about" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          kicker="About"
          title={
            <>
              Three years building GoHighLevel systems and{' '}
              <span className="heading-accent">AI automation</span>, shipped across multiple
              industries.
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">
          <Reveal className="mx-auto sm:mx-0">
            <div className="w-40 overflow-hidden rounded-2xl border border-fg/10 bg-card/40 sm:w-48">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={192}
                height={240}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={60} className="flex flex-col gap-5">
            {PARAGRAPHS.map((p) => (
              <p key={p} className="text-[15px] leading-7 text-body sm:text-base">
                {p}
              </p>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit rounded-lg border border-fg/15 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              View Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={100} className="mx-auto mt-16 max-w-4xl">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            <span aria-hidden="true" className="text-accent/50">
              //
            </span>
            Industries I&apos;ve built for
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industriesBuiltFor.map((industry) => (
              <div
                key={industry.name}
                className="rounded-lg border border-fg/[0.07] bg-card/60 p-5"
              >
                <p className="flex items-center gap-2 text-sm font-bold text-fg">
                  <span className="inline-flex size-1.5 rounded-full bg-accent" />
                  {industry.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-body-dim">
                  {industry.note}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={140}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-6 border-t border-fg/10 pt-8 sm:grid-cols-4"
        >
          {aboutQuickFacts.map((fact) => (
            <div key={fact.label}>
              <p className="text-xs tracking-[0.08em] text-body-dim uppercase">
                {fact.label}
              </p>
              <p className="heading-display mt-1 text-lg font-bold text-fg">
                {fact.value}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
