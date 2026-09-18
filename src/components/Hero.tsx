import { Aurora } from '@/components/Aurora'
import { heroStats, profile } from '@/data/portfolio'

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
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            <span className="h-px w-5 bg-accent-bright" aria-hidden="true" />
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
            <a href="#contact" className="btn-primary">
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fg/15 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              Resume
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-fg/10 pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="heading-display text-2xl font-bold text-fg">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-body-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-xs items-center justify-center lg:mx-0 lg:max-w-sm lg:justify-self-end">
          <div className="absolute inset-0 m-auto aspect-square w-[110%] rounded-full border border-fg/15" />
          <div className="relative aspect-square w-[78%] overflow-hidden rounded-full border-2 border-accent/60 shadow-[0_0_45px_-10px_rgba(63,199,176,0.55)]">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={480}
              height={480}
              className="size-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-fg/10 bg-ink/90 px-3 py-1.5 text-xs font-semibold text-body shadow-lg backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full motion-safe:animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Available
          </div>
        </div>
      </div>
    </section>
  )
}
