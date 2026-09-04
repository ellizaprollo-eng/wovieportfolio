import { Star } from 'lucide-react'
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
              className="flex h-full flex-col rounded-xl border border-white/[0.07] bg-card/60 p-6 transition-colors duration-300 hover:border-accent/35"
            >
              <div className="mb-5 flex gap-1 text-accent">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-body/85 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <footer className="mt-6">
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
