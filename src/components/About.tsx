import { Reveal } from '@/components/Reveal'
import { Backdrop } from '@/components/Backdrop'
import { SectionHeading } from '@/components/SectionHeading'
import { aboutQuickFacts, profile } from '@/data/portfolio'

const LEAD =
  "I'm Wovie, a GoHighLevel and AI Automation Specialist based in Manila, Philippines, working remotely with clients across every time zone. For the past 4 years I've built automation systems for businesses that were still running on manual processes, fragmented tools, and follow-ups that depended on someone remembering to do them."

const PARAGRAPHS = [
  "My work spans GoHighLevel CRM setup, AI chat and voice agents, and workflow automation built on n8n, Zapier, and Make. I've also run the full operational workflow behind two property management businesses, Press Haven Homes and Stay Classy Homes, handling tenant relations, guest communication, and reservation pipelines end to end.",
  "That hands-on experience shaped how I build: every automation gets tested in a sandbox against real data before it ever touches a client's live systems. My focus isn't just connecting apps together. It's building systems a business can actually rely on long after the handover.",
]

export function About() {
  return (
    <section id="about" className="relative isolate overflow-clip bg-surface py-24 sm:py-28">
      <Backdrop id="about" variant="flow" glow="bottom-left" />
      <div className="container-x">
        <SectionHeading
          kicker="About"
          title={
            <>
              Four years building GoHighLevel systems and{' '}
              <span className="heading-accent">AI automation</span>, shipped across multiple
              industries.
            </>
          }
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-10 lg:gap-12">
          {/* Small portrait, sticks while the text scrolls past */}
          <Reveal className="sm:sticky sm:top-28 sm:self-start">
            <div className="w-36 overflow-hidden rounded-2xl border border-fg/10 bg-white shadow-xl shadow-black/30 sm:w-40 lg:w-44">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={176}
                height={220}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <p className="text-base leading-relaxed font-medium text-fg sm:text-lg">{LEAD}</p>
            {PARAGRAPHS.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-relaxed text-body-dim sm:text-base">
                {p}
              </p>
            ))}


            <dl className="mt-8 grid grid-cols-2 gap-3">
              {aboutQuickFacts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-fg/[0.08] bg-card/60 p-4">
                  <dt className="font-mono text-[0.65rem] tracking-[0.12em] text-body-dim uppercase">
                    {fact.label}
                  </dt>
                  <dd className="heading-display mt-1.5 text-base font-bold text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
