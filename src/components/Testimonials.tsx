import { useRef, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials, videoTestimonial } from '@/data/portfolio'

/**
 * Self-hosted video with a poster overlay (play button + name). Native
 * controls appear once playback starts; the overlay returns when it ends.
 */
function VideoPlayer() {
  const { src, poster, name, duration } = videoTestimonial
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function play() {
    setStarted(true)
    ref.current?.play().catch(() => {})
  }

  return (
    <div className="relative overflow-hidden rounded-md bg-ink ring-1 ring-fg/10">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        onEnded={() => setStarted(false)}
        aria-label={`Video testimonial from ${name}`}
        className="block aspect-[9/16] w-full object-cover"
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play video testimonial from ${name}`}
          className="group absolute inset-0 flex items-end text-left"
        >
          <span className="absolute inset-0 bg-gradient-to-t from-[#05081a]/85 via-[#05081a]/5 to-transparent" />
          <span className="relative flex w-full items-center gap-3 p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-white shadow-[0_10px_30px_-6px_rgb(36_87_255/0.7)] ring-4 ring-accent/25 transition-transform duration-300 group-hover:scale-110">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
            <span>
              <span className="block text-sm font-bold text-white">Watch testimonial</span>
              {duration && <span className="block text-xs text-white/70">{duration}</span>}
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

function Quote({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <>
      <span className="heading-display text-3xl leading-none text-accent/70">&ldquo;</span>
      <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-body/85">
        {item.quote}
      </blockquote>
      <footer className="mt-6 border-t border-fg/[0.07] pt-4">
        <p className="text-sm font-bold text-fg">{item.name}</p>
        <p className="mt-0.5 text-xs text-body-dim">{item.title}</p>
      </footer>
    </>
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

        {featured && (
          <Reveal
            as="article"
            className="mt-14 grid gap-8 rounded-lg border border-fg/[0.07] bg-card/60 p-5 sm:p-6 md:grid-cols-[16rem_minmax(0,1fr)] md:items-center md:gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:p-8"
          >
            <div className="mx-auto w-full max-w-[17rem] md:max-w-none">
              <VideoPlayer />
            </div>

            <div className="md:pr-6">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
                Video testimonial
              </p>
              <span className="heading-display mt-6 block text-5xl leading-none text-accent/70">
                &ldquo;
              </span>
              <blockquote className="heading-display mt-1 text-xl leading-snug font-semibold text-fg sm:text-2xl">
                {featured.quote}
              </blockquote>
              <footer className="mt-8 flex items-center gap-4 border-t border-fg/[0.07] pt-5">
                <img
                  src={videoTestimonial.poster}
                  alt=""
                  className="h-11 w-11 rounded-full object-cover object-[50%_30%] ring-2 ring-accent/40"
                />
                <div>
                  <p className="text-sm font-bold text-fg">{featured.name}</p>
                  <p className="mt-0.5 text-xs text-body-dim">{featured.title}</p>
                </div>
              </footer>
            </div>
          </Reveal>
        )}

        <div
          className={`grid items-start gap-6 ${featured ? 'mt-6 md:grid-cols-2' : 'mt-14 md:grid-cols-3'}`}
        >
          {rest.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 3) * 90}
              as="article"
              className="flex h-full flex-col rounded-lg border border-fg/[0.07] bg-card/60 p-6 transition-colors duration-300 hover:border-accent/35"
            >
              <Quote item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
