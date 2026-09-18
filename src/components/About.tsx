import { Reveal } from '@/components/Reveal'

const PARAGRAPHS = [
  "I'm Wovie, a GoHighLevel and AI Automation Specialist based in Butuan City, Philippines, working remotely with clients across every time zone.",
  "For the past 3+ years I've built automation systems for businesses that were still running on manual processes, fragmented tools, and follow-ups that depended on someone remembering to do them. My work spans GoHighLevel CRM setup, AI chat and voice agents, and workflow automation built on n8n, Zapier, and Make.",
  "I've run the full operational workflow behind two property management businesses, Press Haven Homes and Stay Classy Homes, handling tenant relations, guest communication, and reservation pipelines end to end. That hands-on experience shaped how I build: every automation gets tested in a sandbox against real data before it ever touches a client's live systems.",
  "My focus isn't just connecting apps together. It's building systems a business can actually rely on long after the handover.",
]

export function About() {
  return (
    <section id="about" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-16">
        <Reveal>
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            <span className="h-px w-5 bg-accent-bright" aria-hidden="true" />
            About Me
          </p>
          <h2 className="heading-display mt-4 text-3xl leading-[1.15] font-extrabold tracking-tight text-fg sm:text-4xl">
            From manual work
            <br />
            <span className="text-accent-bright">to systems that run themselves.</span>
          </h2>
        </Reveal>

        <Reveal delay={60} className="flex flex-col gap-5">
          {PARAGRAPHS.map((p) => (
            <p key={p} className="text-[15px] leading-7 text-body sm:text-base">
              {p}
            </p>
          ))}

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fg/15 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              View Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
