import {
  ArrowRight,
  BarChart3,
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

export function Services() {
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
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10" />

          <div className="flex flex-col gap-14">
            {services.map((service, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 3) * 70}
                  className="relative grid grid-cols-2 gap-10"
                >
                  <span className="absolute top-8 left-1/2 z-10 size-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-ink" />

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
