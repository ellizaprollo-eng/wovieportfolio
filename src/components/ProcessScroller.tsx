import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// Measure before paint on the client so the page height is final before any
// #hash jump; plain useEffect on the server where layout effects warn.
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect
import { FlaskConical, Map, Rocket, Search, Wrench } from 'lucide-react'
import { Backdrop } from '@/components/Backdrop'
import { processSteps } from '@/data/portfolio'

const pad = (n: number) => String(n).padStart(2, '0')
const STEP_ICONS = [Search, Map, Wrench, FlaskConical, Rocket]

/**
 * "How I Work" as a pinned horizontal scroll. The section is as tall as the
 * sideways distance the card track travels; a sticky full-height stage slides
 * the track left as the page scrolls, then un-sticks after the last step so
 * vertical scrolling carries on. Reduced motion gets a plain swipeable row.
 */
export function ProcessScroller() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)
  const [distance, setDistance] = useState(0)
  const [progress, setProgress] = useState(0)
  const [pinned, setPinned] = useState(true)

  useIsoLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPinned(false)
      return
    }
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const measure = () => {
      // Travel until the last card's right edge meets the right gutter.
      const gutter = parseFloat(getComputedStyle(track).paddingLeft) || 0
      const last = track.lastElementChild as HTMLElement | null
      const end = last ? last.offsetLeft + last.offsetWidth : track.scrollWidth
      setDistance(Math.max(0, end - (track.clientWidth - gutter)))
    }

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const travel = section.offsetHeight - window.innerHeight
        setProgress(travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0)
      })
    }

    measure()
    onScroll()
    const ro = new ResizeObserver(() => {
      measure()
      onScroll()
    })
    ro.observe(track)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [])

  const count = processSteps.length
  const active = pinned ? Math.min(count - 1, Math.floor(progress * count)) : -1

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="How I work"
      className="relative isolate bg-ink"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div
        className={
          pinned
            ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-20'
            : 'overflow-hidden py-24 sm:py-28'
        }
      >
        <Backdrop id="process-scroll" variant="flow" glow="top-left" />

        <div className="container-x flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              How I Work
            </p>
            <h2 className="heading-display text-3xl leading-[1.15] font-extrabold tracking-tight text-fg sm:text-4xl">
              Five steps from your <span className="heading-accent">messy ops</span> to a working
              system.
            </h2>
            <p className="mt-4 hidden text-base text-body-dim sm:block sm:text-lg">
              No 30-page decks. No months of scoping calls. Map the system, build the smallest
              version that helps, then improve it based on how real users actually move through it.
            </p>
          </div>

          {pinned && (
            <div className="flex shrink-0 items-center gap-4" aria-hidden="true">
              <span className="font-mono text-sm text-fg tabular-nums">
                {pad(active + 1)}
                <span className="text-body-dim"> / {pad(count)}</span>
              </span>
              <span className="relative h-1 w-32 overflow-hidden rounded-full bg-fg/10 sm:w-40">
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  style={{ width: `${Math.max(4, progress * 100)}%` }}
                />
              </span>
            </div>
          )}
        </div>

        <ol
          ref={trackRef}
          className={`mt-10 flex gap-5 pr-6 pl-6 sm:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] ${
            pinned ? 'will-change-transform' : 'snap-x snap-mandatory overflow-x-auto pb-4'
          }`}
          style={pinned ? { transform: `translate3d(${-progress * distance}px, 0, 0)` } : undefined}
        >
          {processSteps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Search
            const isActive = i === active
            const isDone = pinned && i < active
            return (
              <li
                key={step.title}
                className={`relative flex min-h-[20rem] w-[82vw] max-w-[26rem] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border bg-card/70 p-7 backdrop-blur-sm transition-colors duration-300 sm:w-[26rem] sm:p-8 ${
                  isActive ? 'border-accent/60' : 'border-fg/[0.08]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="heading-display pointer-events-none absolute -top-6 -right-3 text-[9rem] leading-none font-extrabold text-fg/[0.04]"
                >
                  {pad(i + 1)}
                </span>

                <div className="flex items-center gap-3">
                  <span
                    className={`grid size-12 place-items-center rounded-xl transition-colors duration-300 ${
                      isActive || isDone ? 'bg-accent text-white' : 'bg-accent/15 text-accent-bright'
                    }`}
                  >
                    <Icon className="size-6" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.14em] text-body-dim uppercase">
                    Step {pad(i + 1)}
                  </span>
                </div>

                <h3 className="heading-display mt-8 text-2xl font-extrabold text-fg">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-body-dim">{step.description}</p>

                {/* Connector to the next step */}
                <span className="mt-auto flex items-center gap-2 pt-8" aria-hidden="true">
                  <span
                    className={`h-px flex-1 transition-colors duration-300 ${
                      isDone ? 'bg-accent' : 'bg-fg/15'
                    }`}
                  />
                  <span
                    className={`size-2 rounded-full transition-colors duration-300 ${
                      isActive || isDone ? 'bg-accent' : 'bg-fg/25'
                    }`}
                  />
                </span>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
