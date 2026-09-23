import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Database,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Route,
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
  globe: Globe,
  route: Route,
  mail: Mail,
  phone: Phone,
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number]
  index: number
}) {
  const Icon = ICONS[service.icon]
  return (
    <article className="w-full max-w-md rounded-lg border border-fg/[0.07] bg-card/60 p-6">
      <div className="flex items-center justify-between">
        <span className="inline-flex rounded-lg border border-fg/10 bg-fg/[0.03] p-2.5 text-accent">
          <Icon className="size-5" />
        </span>
        <span className="font-mono text-xs text-body-dim">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="heading-display mt-4 text-lg font-bold text-fg">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body-dim">
        {service.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="btn-primary mt-5"
        style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
      >
        Discuss this service
        <ArrowRight className="btn-arrow size-4" />
      </Link>
    </article>
  )
}

/**
 * Grows a fill line from 0 to 100% height as the container scrolls through
 * the viewport, and activates each dot (persistent glow + one-shot flash)
 * only once the fill's actual pixel progress reaches that dot's own
 * measured center — never on a fixed delay or on page load.
 */
function useTimelineProgress(count: number) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const fillRef = useRef<HTMLDivElement | null>(null)
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([])
  const activeRef = useRef<boolean[]>(Array(count).fill(false))
  const [active, setActive] = useState<boolean[]>(() => Array(count).fill(false))

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

        const fillPx = clamped * rect.height
        let changed = false
        const next = activeRef.current.map((was, i) => {
          const dot = dotRefs.current[i]
          if (!dot) return was
          const dotCenter =
            dot.getBoundingClientRect().top - rect.top + dot.offsetHeight / 2
          const isActive = fillPx >= dotCenter
          if (isActive && !was) {
            // just reached this dot — restart the one-shot highlight flash
            dot.classList.remove('node-flash')
            void dot.offsetWidth
            dot.classList.add('node-flash')
          }
          if (isActive !== was) changed = true
          return isActive
        })

        if (changed) {
          activeRef.current = next
          setActive(next)
        }
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

  return { containerRef, fillRef, dotRefs, active }
}

export function Services() {
  const { containerRef, fillRef, dotRefs, active } = useTimelineProgress(
    services.length,
  )

  return (
    <section id="services" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Services"
          title="Comprehensive automation solutions"
          subtitle="End-to-end systems that transform how your business operates"
        />

        {/* Mobile / tablet: plain stacked list — the centerline timeline is a desktop pattern */}
        <div className="mx-auto mt-14 flex max-w-md flex-col gap-6 lg:hidden">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 70}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>

        {/* Desktop: alternating centerline timeline */}
        <div ref={containerRef} className="relative mt-16 hidden lg:block">
          <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-fg/10" />
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
                    className={`absolute top-8 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full ring-4 ring-ink transition-colors duration-300 ${
                      active[i] ? 'bg-accent' : 'bg-fg/20'
                    }`}
                  />

                  <div className={isLeft ? 'flex justify-end' : ''}>
                    {isLeft && <ServiceCard service={service} index={i} />}
                  </div>
                  <div>{!isLeft && <ServiceCard service={service} index={i} />}</div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
