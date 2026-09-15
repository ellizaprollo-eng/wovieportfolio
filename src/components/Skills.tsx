import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'
import { techStack, type TechStackItem } from '@/data/portfolio'

function Pill({ item }: { item: TechStackItem }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 rounded-full bg-white py-2 pr-5 pl-2 text-sm font-semibold text-ink shadow-lg shadow-black/20">
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
    <section
      id="skills"
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden bg-ink"
      >
        <div className="aurora-a absolute top-1/2 left-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]" />
        <div className="aurora-b absolute top-1/3 left-1/4 size-[55%] rounded-full bg-accent-deep/25 blur-[100px]" />
        <div className="halo-pulse absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_35%,rgba(63,199,176,0.16)_0%,transparent_70%)]" />
      </div>

      <div className="container-x relative z-10 flex justify-center text-center">
        <SectionHeading
          title={
            <>
              My <span className="text-accent-bright">Tech Stack</span>
            </>
          }
          subtitle="The platforms and tools behind every workflow, agent, and integration I build"
        />
      </div>

      <div className="relative z-10 mt-14 flex flex-col gap-5">
        <MarqueeRow items={rowOne} duration={34} />
        <MarqueeRow items={rowTwo} reverse duration={38} />
      </div>
    </section>
  )
}
