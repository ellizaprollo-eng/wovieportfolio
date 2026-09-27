
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-fg/[0.08] bg-card/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-[#05081a]/60 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 rounded-md bg-black/55 px-2 py-1 font-mono text-[0.65rem] font-bold text-white backdrop-blur-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-xl bg-white text-accent shadow-lg">
          <Icon className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="heading-display text-lg font-bold text-fg">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body-dim">{service.description}</p>
        <Link
          to="/contact"
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-bright transition-colors hover:text-fg"
        >
          Discuss this service
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
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
