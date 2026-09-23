import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import { clientLogos, type ClientLogo } from '@/data/portfolio'

/**
 * Some client marks (FinPro, Texas Tires, Tuff Tube Transition) are white-only
 * artwork made for a dark backdrop. The chip background is pinned dark on
 * purpose, independent of the site's light/dark toggle, so every logo stays
 * legible no matter which theme the visitor has selected.
 */
function LogoCard({ item }: { item: ClientLogo }) {
  return (
    <span className="flex h-24 w-48 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#121a4a] px-6 shadow-lg shadow-black/20">
      <img
        src={item.logo}
        alt={item.name}
        loading="lazy"
        className="max-h-14 max-w-full object-contain"
      />
    </span>
  )
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: ClientLogo[]
  reverse?: boolean
  duration: number
}) {
  return (
    <div
      className="marquee-row"
      style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-edge marquee-edge-left" aria-hidden="true" />
      <div className="marquee-edge marquee-edge-right" aria-hidden="true" />
      <div
        className={cn('marquee-track gap-5', reverse && 'marquee-track-reverse')}
      >
        {[...items, ...items].map((item, i) => (
          <LogoCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export function Clients() {
  return (
    <section id="clients" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x flex justify-center text-center">
        <SectionHeading
          title="Trusted by Industry Leaders"
          subtitle="I've had the privilege of working with amazing brands and entrepreneurs"
        />
      </div>

      <div className="mt-14">
        <MarqueeRow items={clientLogos} duration={34} />
      </div>
    </section>
  )
}
