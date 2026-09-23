import { Award } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Badges & Certifications"
          title={
            <>
              GoHighLevel <span className="heading-accent">badges and certifications</span>,
              on the way.
            </>
          }
          subtitle="Official badges from GoHighLevel's certification program. This section goes live as soon as they're uploaded."
        />

        <Reveal
          delay={80}
          className="mt-12 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-dashed border-fg/15 bg-card/40 px-6 py-14 text-center"
        >
          <span className="inline-flex rounded-full border border-accent/25 bg-accent/10 p-3 text-accent">
            <Award className="size-6" />
          </span>
          <p className="heading-display text-lg font-bold text-fg">Coming soon</p>
          <p className="max-w-sm text-sm leading-relaxed text-body-dim">
            Certificates are being added here shortly.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
