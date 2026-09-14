import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { testimonials } from '@/data/portfolio'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="Testimonials"
          subtitle="What clients say about working with me"
        />

        <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 3) * 90}
              as="article"
              className="flex h-full flex-col rounded-lg border border-white/[0.07] bg-card/60 p-6 transition-colors duration-300 hover:border-accent/35"
            >
              <span className="heading-display text-3xl leading-none text-accent/70">
                &ldquo;
              </span>

              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-body/85">
                {item.quote}
              </blockquote>

              <footer className="mt-6 border-t border-white/[0.07] pt-4">
                <p className="text-sm font-bold text-white">{item.name}</p>
                <p className="mt-0.5 text-xs text-body-dim">{item.title}</p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
