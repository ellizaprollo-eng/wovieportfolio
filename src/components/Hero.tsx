import { Aurora } from '@/components/Aurora'
import { heroStats, profile } from '@/data/portfolio'

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

          <h1 className="heading-display mt-5 max-w-xl text-[2.35rem] leading-[1.14] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-body sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="heading-display text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[10rem] text-xs leading-snug text-body-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm lg:justify-self-end">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/40">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-lg border border-white/10 bg-ink/90 px-4 py-2.5 text-xs font-semibold text-body shadow-lg backdrop-blur-md">
            {profile.locationNote}
          </div>
        </div>
      </div>
    </section>
  )
}
