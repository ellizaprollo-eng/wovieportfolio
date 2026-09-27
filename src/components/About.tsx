import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { Backdrop } from '@/components/Backdrop'
import { aboutMastery, byTheNumbers, industriesBuiltFor, profile } from '@/data/portfolio'

const LEAD =
  "I'm Wovie, a GoHighLevel and AI Automation Specialist based in Manila, Philippines, working remotely with clients across every time zone."

const PARAGRAPHS = [
  "For the past 4 years I've built automation systems for businesses that were still running on manual processes, fragmented tools, and follow-ups that depended on someone remembering to do them. My work spans GoHighLevel CRM setup, AI chat and voice agents, and workflow automation built on n8n, Zapier, and Make.",
  "I've run the full operational workflow behind two property management businesses, Press Haven Homes and Stay Classy Homes, handling tenant relations, guest communication, and reservation pipelines end to end. That hands-on experience shaped how I build: every automation gets tested in a sandbox against real data before it ever touches a client's live systems.",
  "My focus isn't just connecting apps together. It's building systems a business can actually rely on long after the handover.",
]

/** Big number + italic unit, as in "4 years". */
const GLANCE = [
  { value: '4', unit: 'years', label: 'GoHighLevel & AI' },
  { value: byTheNumbers[0].value, unit: 'workflows', label: 'Shipped for clients' },
  { value: byTheNumbers[1].value, unit: 'AI agents', label: 'In production' },
  { value: byTheNumbers[3].value, unit: 'industries', label: 'Served' },
]

/** Skill bars fill once, the first time they scroll into view. */
function Mastery() {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="mt-12">
      <p className="font-mono text-xs font-semibold tracking-[0.16em] text-accent-bright uppercase">
        Mastery
      </p>
      <ul className="mt-6 space-y-5">
        {aboutMastery.map((m, i) => (
          <li key={m.skill}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-fg sm:text-[15px]">{m.skill}</span>
              <span className="font-mono text-xs text-body-dim tabular-nums">{m.level}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-fg/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent-deep via-accent to-accent-bright transition-[width] duration-1000 ease-out"
                style={{ width: shown ? `${m.level}%` : '0%', transitionDelay: `${i * 90}ms` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative isolate overflow-clip bg-surface py-24 sm:py-28">
      <Backdrop id="about" variant="flow" glow="bottom-left" />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
          {/* Left: portrait card + at-a-glance stats */}
          <Reveal className="mx-auto flex w-full max-w-md flex-col gap-5 lg:mx-0 lg:h-full lg:max-w-none">
            <div className="flex flex-col rounded-2xl border border-fg/10 bg-card/70 p-3 shadow-2xl shadow-black/30 lg:flex-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white lg:aspect-auto lg:min-h-[28rem] lg:flex-1">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  width={600}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <p className="absolute inset-x-3 bottom-3 rounded-lg bg-[#05081a]/80 px-4 py-2.5 font-mono text-xs text-white backdrop-blur-sm">
                  {profile.name} &middot; GoHighLevel Expert
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-fg/10 bg-card/70 p-6 sm:p-7">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent-deep via-accent to-accent-bright"
              />
              <p className="font-mono text-xs font-semibold tracking-[0.16em] text-accent-bright uppercase">
                At a glance
              </p>
              <dl className="mt-5 grid grid-cols-2">
                {GLANCE.map((g, i) => (
                  <div
                    key={g.unit}
                    className={`py-3 ${i % 2 === 1 ? 'border-l border-fg/10 pl-5' : 'pr-5'} ${
                      i > 1 ? 'border-t border-fg/10 pt-5' : ''
                    }`}
                  >
                    <dt className="sr-only">{`${g.unit}, ${g.label}`}</dt>
                    <dd>
                      <span className="heading-display text-4xl font-extrabold text-fg sm:text-5xl">
                        {g.value}
                      </span>{' '}
                      <span className="heading-accent text-lg sm:text-xl">{g.unit}</span>
                      <span className="mt-1 block font-mono text-[0.65rem] tracking-[0.12em] text-body-dim uppercase">
                        {g.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Right: story + mastery */}
          <Reveal delay={80}>
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              <span aria-hidden="true" className="text-accent/50">
                //
              </span>
              About me
            </p>
            <h2 className="heading-display mt-4 text-3xl leading-[1.12] font-extrabold tracking-tight text-fg sm:text-[2.6rem]">
              Four years building GoHighLevel systems and{' '}
              <span className="heading-accent">AI automation</span>, shipped across multiple
              industries.
            </h2>

            <p className="mt-7 text-lg leading-relaxed font-medium text-fg sm:text-xl">{LEAD}</p>
            <div className="mt-5 flex flex-col gap-5">
              {PARAGRAPHS.map((p) => (
                <p key={p} className="text-base leading-relaxed text-body-dim sm:text-[17px]">
                  {p}
                </p>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit rounded-lg border border-fg/15 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              View Resume
            </a>

            <Mastery />
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-20">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            <span aria-hidden="true" className="text-accent/50">
              //
            </span>
            Industries I&apos;ve built for
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industriesBuiltFor.map((industry) => (
              <div key={industry.name} className="rounded-lg border border-fg/[0.07] bg-card/60 p-5">
                <p className="flex items-center gap-2 text-sm font-bold text-fg">
                  <span className="inline-flex size-1.5 rounded-full bg-accent" />
                  {industry.name}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-body-dim">{industry.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
