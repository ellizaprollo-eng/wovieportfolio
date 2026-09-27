import { useRef, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials, videoTestimonial } from '@/data/portfolio'

type Testimonial = (typeof testimonials)[number]

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 24" fill="currentColor" className={className}>
      <path d="M0 24V14.4C0 6.1 4.3 1.3 12.9 0l1.3 3.1C9.4 4.3 7 7 6.7 11H13v13H0Zm18 0V14.4C18 6.1 22.3 1.3 30.9 0l1.3 3.1C27.4 4.3 25 7 24.7 11H31v13H18Z" />
    </svg>
  )
}

/**
 * Self-hosted video with a poster overlay (play button + name). Native
 * controls appear once playback starts; the overlay returns when it ends.
 */
function VideoCard() {
  const { src, poster, name, title, duration } = videoTestimonial
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function play() {
    setStarted(true)
    ref.current?.play().catch(() => {})
  }

  return (
    <Reveal
      as="article"
      className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-2xl border border-fg/10 bg-ink shadow-[0_30px_60px_-30px_rgb(36_87_255/0.55)] lg:row-span-2 lg:mx-0 lg:max-w-none"
    >
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        onEnded={() => setStarted(false)}
        aria-label={`Video testimonial from ${name}`}
        className="block aspect-[9/16] h-full w-full object-cover"
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play video testimonial from ${name}`}
          className="group absolute inset-0 flex flex-col justify-between p-5 text-left"
        >
          <span className="absolute inset-0 bg-gradient-to-t from-[#05081a] via-[#05081a]/10 to-[#05081a]/40" />

          <span className="relative flex items-center justify-between">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
              Client video
            </span>
            {duration && (
              <span className="rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white tabular-nums">
                {duration}
              </span>
            )}
          </span>

          <span className="relative">
            <span className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-accent text-white ring-[6px] ring-accent/25 transition-transform duration-300 group-hover:scale-110">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
            <span className="heading-display block text-2xl leading-tight font-extrabold text-white">
              {name}
            </span>
            <span className="mt-1 block text-sm text-white/70">{title}</span>
          </span>
        </button>
      )}
    </Reveal>
  )
}

function Person({ item, photo }: { item: Testimonial; photo?: string }) {
  return (
    <div className="flex items-center gap-3">
      {photo ? (
        <img
          src={photo}
          alt=""
          className="h-10 w-10 shrink-0 rounded-full object-cover object-[50%_30%] ring-2 ring-accent/40"
        />
      ) : (
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-bold text-accent-soft ring-1 ring-accent/30">
          {initials(item.name)}
        </span>
      )}
      <div>
        <p className="text-sm font-bold text-fg">{item.name}</p>
        <p className="mt-0.5 text-xs text-body-dim">{item.title}</p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const featured = videoTestimonial.src
    ? testimonials.find((t) => t.name === videoTestimonial.name)
    : undefined
  const rest = testimonials.filter((t) => t !== featured)

  return (
    <section id="testimonials" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Testimonials"
          subtitle="What clients say about working with me"
        />

        <div
          className={`mt-14 grid gap-5 ${
            featured
              ? 'md:grid-cols-2 lg:grid-cols-[20rem_minmax(0,1fr)_minmax(0,1fr)]'
              : 'md:grid-cols-3'
          }`}
        >
          {featured && (
            <>
              <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 lg:flex">
                <VideoCard />
              </div>

              <Reveal
                as="article"
                delay={90}
                className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.14] via-card/70 to-card/60 p-7 md:col-span-2 lg:p-9"
              >
                <div>
                  <QuoteMark className="h-7 w-10 text-accent" />
                  <blockquote className="heading-display mt-5 max-w-2xl text-xl leading-snug font-semibold text-fg sm:text-2xl">
                    {featured.quote}
                  </blockquote>
                </div>
                <div className="mt-8">
                  <Person item={featured} photo={videoTestimonial.poster} />
                </div>
              </Reveal>
            </>
          )}

          {rest.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i + 2) * 90}
              as="article"
              className="flex flex-col rounded-2xl border border-fg/[0.07] bg-card/60 p-7 transition-colors duration-300 hover:border-accent/35"
            >
              <QuoteMark className="h-5 w-7 text-accent/70" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-body/90">
                {item.quote}
              </blockquote>
              <div className="mt-6 border-t border-fg/[0.07] pt-5">
                <Person item={item} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
