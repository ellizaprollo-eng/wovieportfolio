import {
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

export function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Services"
          subtitle="Comprehensive automation solutions to transform your business operations"
        />

        <div className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 70}
                as="article"
                className="group grid grid-cols-[auto_1fr] items-start gap-5 py-7 sm:grid-cols-[3.5rem_auto_1fr] sm:items-center sm:gap-8"
              >
                <span className="heading-display text-sm font-bold text-body-dim tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon className="hidden size-5 text-accent sm:block" />
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="heading-display text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-body-dim">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
