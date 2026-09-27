
import { Backdrop } from '@/components/Backdrop'
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
    <article className="flex h-full flex-col rounded-lg border border-fg/[0.07] bg-card/60 p-6 transition-colors duration-300 hover:border-accent/40">
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
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body-dim">
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
        to="/" hash="contact"
        className="btn-primary mt-5 w-fit"
        style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
      >
        Discuss this service
        <ArrowRight className="btn-arrow size-4" />
      </Link>
    </article>
  )
}

export function Services() {
  return (
    <section id="services" className="relative isolate overflow-clip bg-ink py-24 sm:py-28">
      <Backdrop id="services" variant="flow" glow="top-right" />
      <div className="container-x">
        <SectionHeading
          kicker="Services"
          title="Comprehensive automation solutions"
          subtitle="End-to-end systems that transform how your business operates"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 70} className="h-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
