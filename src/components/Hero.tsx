import { Link } from '@tanstack/react-router'
import { Aurora } from '@/components/Aurora'
import { profile } from '@/data/portfolio'

function Headline() {
  const { headline, headlineHighlight } = profile
  const index = headlineHighlight ? headline.indexOf(headlineHighlight) : -1

  if (index === -1) {
    return <>{headline}</>
  }

  const before = headline.slice(0, index)
  const after = headline.slice(index + headlineHighlight.length)

  return (
    <>
      {before}
      <span className="text-accent-bright">{headlineHighlight}</span>
      {after}
    </>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-28"
    >
      <Aurora />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            {profile.role}
          </p>

          <h1 className="heading-display mt-5 max-w-xl text-[2.35rem] leading-[1.14] font-extrabold tracking-tight text-fg sm:text-5xl lg:text-[3.25rem]">
            <Headline />
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-body sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-soft">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.locationNote}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary">
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fg/15 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm lg:justify-self-end">
          <div className="overflow-hidden rounded-2xl border border-fg/10 bg-card/40">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-lg border border-fg/10 bg-ink/90 px-4 py-2.5 text-xs font-semibold text-body shadow-lg backdrop-blur-md">
            {profile.locationNote}
          </div>
        </div>
      </div>
    </section>
  )
}
