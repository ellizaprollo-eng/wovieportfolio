import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import { techStack, type TechStackItem } from '@/data/portfolio'

function Pill({ item }: { item: TechStackItem }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 rounded-full bg-white py-2 pr-5 pl-2 text-sm font-semibold text-[#0b0e14] shadow-lg shadow-black/20">
      <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-black/[0.06]">
        <img
          src={item.logo}
          alt=""
          loading="lazy"
          className="size-full object-contain p-0.5"
        />
      </span>
      {item.name}
    </span>
  )
}

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: TechStackItem[]
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
        className={cn('marquee-track gap-4', reverse && 'marquee-track-reverse')}
      >
        {[...items, ...items].map((item, i) => (
          <Pill key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const mid = Math.ceil(techStack.length / 2)
  const rowOne = techStack.slice(0, mid)
  const rowTwo = techStack.slice(mid)

  return (
    <section id="skills" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x flex justify-center text-center">
        <SectionHeading
          title="My Tech Stack"
          subtitle="The platforms and tools behind every workflow, agent, and integration I build"
        />
      </div>

      <div className="mt-14 flex flex-col gap-5">
        <MarqueeRow items={rowOne} duration={34} />
        <MarqueeRow items={rowTwo} reverse duration={38} />
      </div>
    </section>
  )
}
