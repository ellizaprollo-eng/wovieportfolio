import { useRef, useState } from 'react'
import { Backdrop } from '@/components/Backdrop'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials, videoTestimonial } from '@/data/portfolio'

type Testimonial = (typeof testimonials)[number]

function QuoteMark({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 24" fill="currentColor" className={className}>
      <path d="M0 24V14.4C0 6.1 4.3 1.3 12.9 0l1.3 3.1C9.4 4.3 7 7 6.7 11H13v13H0Zm18 0V14.4C18 6.1 22.3 1.3 30.9 0l1.3 3.1C27.4 4.3 25 7 24.7 11H31v13H18Z" />
    </svg>
  )
}

function Chip({ label }: { label: string }) {
  return (
    <span className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-md bg-black/45 px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-sm">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white" />
      {label}
    </span>
  )
}

/** Shared card shell: media area on top, name bar below. */
function Card({
  name,
  delay,
  children,
}: {
  name: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group/card flex w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-fg/[0.08] bg-card/60 transition-colors duration-300 hover:border-accent/40 sm:w-[60%] md:w-auto"
    >
      <div className="relative flex flex-1 flex-col overflow-hidden">{children}</div>
      <div className="border-t border-fg/[0.07] px-5 py-4">
        <div>
          <p className="text-base font-bold text-fg">{name}</p>
          <p className="mt-1 font-mono text-[0.65rem] tracking-[0.14em] text-body-dim uppercase">
            Client testimonial
          </p>
        </div>
      </div>
    </Reveal>
  )
}

/**
 * Self-hosted video with a poster overlay. Native controls appear once
 * playback starts; the overlay returns when it ends.
 */
function VideoMedia() {
  const { src, poster, name, duration } = videoTestimonial
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  function play() {
    setStarted(true)
    ref.current?.play().catch(() => {})
  }

  return (
    <div className="relative aspect-[3/4] flex-1">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        onEnded={() => setStarted(false)}
        aria-label={`Video testimonial from ${name}`}
        className="absolute inset-0 h-full w-full bg-ink object-cover"
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={`Play video testimonial from ${name}`}
          className="group absolute inset-0 grid place-items-center"
        >
          <span className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
          <Chip label="Video" />
          {duration && (
            <span className="absolute top-4 right-4 rounded-md bg-black/45 px-2 py-1 font-mono text-[0.65rem] text-white tabular-nums backdrop-blur-sm">
              {duration}
            </span>
          )}
          <span className="relative grid h-16 w-16 place-items-center rounded-full bg-accent text-white shadow-[0_10px_30px_-6px_rgb(36_87_255/0.8)] transition-transform duration-300 group-hover:scale-110">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

function QuoteMedia({ item }: { item: Testimonial }) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col bg-gradient-to-br from-accent/[0.12] via-transparent to-transparent p-6 pt-16 lg:p-7 lg:pt-16">
      <Chip label="Review" />
      <QuoteMark className="h-7 w-10 shrink-0 text-accent" />
      <blockquote className="mt-5 text-sm leading-relaxed text-body/90 sm:text-base md:text-sm lg:text-base xl:text-[1.05rem]">
        {item.quote}
      </blockquote>
      <p className="mt-auto pt-4 text-sm text-body-dim">{item.title}</p>
    </div>
  )
}

export function Testimonials() {
  const hasVideo = !!videoTestimonial.src
  const quotes = testimonials.filter((t) => !hasVideo || t.name !== videoTestimonial.name)

  return (
    <section id="testimonials" className="relative isolate overflow-clip bg-surface py-24 sm:py-28">
      <Backdrop id="testimonials" variant="glow" glow="top" />
      <div className="container-x">
        <SectionHeading
          title="Testimonials"
          subtitle="What clients say about working with me"
        />

        <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {hasVideo && (
            <Card name={videoTestimonial.name} delay={0}>
              <VideoMedia />
            </Card>
          )}
          {quotes.map((item, i) => (
            <Card key={item.name} name={item.name} delay={(i + (hasVideo ? 1 : 0)) * 90}>
              <QuoteMedia item={item} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
