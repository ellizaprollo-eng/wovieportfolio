import { useEffect, useState } from 'react'
import { Aurora } from '@/components/Aurora'
import { heroStats, profile } from '@/data/portfolio'

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  useEffect(() => {
    if (!isVideoOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVideoOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isVideoOpen])

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
              href="#services"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:text-accent-bright"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm lg:justify-self-end">
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Play video introduction"
            className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-card/40 text-left"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              width={480}
              height={600}
              className="aspect-[4/5] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors group-hover:bg-ink/40">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-6 w-6 fill-ink"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <span className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-ink/90 px-3 py-1.5 text-xs font-semibold text-body shadow-lg backdrop-blur-md">
              Watch my intro
            </span>
          </button>
          <div className="absolute -bottom-4 right-4 rounded-lg border border-white/10 bg-ink/90 px-4 py-2.5 text-xs font-semibold text-body shadow-lg backdrop-blur-md">
            {profile.locationNote}
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Video introduction"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 text-sm font-semibold text-white/80 hover:text-white"
            >
              Close ✕
            </button>
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <iframe
                src={profile.videoIntroEmbedUrl}
                title={`${profile.name} - video introduction`}
                allow="fullscreen; autoplay"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
