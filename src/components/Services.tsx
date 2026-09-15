import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Database,
  MessageSquare,
  Share2,
  Zap,
} from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { services, type ServiceIcon } from '@/data/portfolio'

const ICONS: Record<ServiceIcon, typeof Zap> = {
  workflow: Share2,
  zap: Zap,
  database: Database,
  message: MessageSquare,
  calendar: CalendarDays,
  chart: BarChart3,
  bot: Bot,
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = ICONS[service.icon]
  return (
    <article className="w-full max-w-md rounded-lg border border-white/[0.07] bg-card/60 p-6">
      <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-accent">
        <Icon className="size-5" />
      </span>
      <h3 className="heading-display mt-4 text-lg font-bold text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body-dim">
        {service.description}
      </p>
      <a
        href="#contact"
        className="btn-primary mt-5"
        style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
      >
        Discuss this service
        <ArrowRight className="btn-arrow size-4" />
      </a>
    </article>
  )
}

/** Flashes a centerline dot when it crosses the vertical middle of the viewport while scrolling. */
function useNodeFlash() {
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([])

  useEffect(() => {
    const nodes = dotRefs.current.filter(Boolean) as HTMLSpanElement[]
    if (nodes.length === 0 || typeof IntersectionObserver === 'undefined')
      return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLSpanElement
          if (entry.isIntersecting) {
            el.classList.remove('node-flash')
            // force reflow so the animation restarts if it fires again quickly
            void el.offsetWidth
            el.classList.add('node-flash')
          } else {
            el.classList.remove('node-flash')
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return dotRefs
}

/** Grows a fill line from 0 to 100% height as the container scrolls through the viewport. */
function useScrollProgressLine() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const fillRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const fill = fillRef.current
    if (!container || !fill) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const progress = (viewportCenter - rect.top) / rect.height
        const clamped = Math.min(1, Math.max(0, progress))
        fill.style.height = `${clamped * 100}%`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { containerRef, fillRef }
}

export function Services() {
  const dotRefs = useNodeFlash()
  const { containerRef, fillRef } = useScrollProgressLine()

  return (
    <section id="services" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Services"
          subtitle="Comprehensive automation solutions to transform your business operations"
        />

        {/* Mobile / tablet: plain stacked list — the centerline timeline is a desktop pattern */}
        <div className="mx-auto mt-14 flex max-w-md flex-col gap-6 lg:hidden">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Desktop: alternating centerline timeline */}
        <div ref={containerRef} className="relative mt-16 hidden lg:block">
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/10" />
          <div
            ref={fillRef}
            className="absolute top-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent"
            style={{ height: '0%' }}
          />

          <div className="flex flex-col gap-14">
            {services.map((service, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 3) * 70}
                  className="relative grid grid-cols-2 gap-10"
                >
                  <span
                    ref={(el) => {
                      dotRefs.current[i] = el
                    }}
                    className="absolute top-8 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-ink"
                  />

                  <div className={isLeft ? 'flex justify-end' : ''}>
                    {isLeft && <ServiceCard service={service} />}
                  </div>
                  <div>{!isLeft && <ServiceCard service={service} />}</div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
