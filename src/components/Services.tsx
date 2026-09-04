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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 90}
                className="group rounded-xl border border-white/[0.07] bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_50px_-24px_rgba(233,53,216,0.6)]"
              >
                <div className="mb-5 inline-flex rounded-xl border border-accent/25 bg-gradient-to-br from-accent/25 to-accent-deep/15 p-2.5 text-accent-bright transition-colors group-hover:border-accent/50">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body-dim">
                  {service.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
