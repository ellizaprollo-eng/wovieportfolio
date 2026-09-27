import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Backdrop } from '@/components/Backdrop'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { faqs } from '@/data/portfolio'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative isolate overflow-clip bg-surface py-24 sm:py-28">
      <Backdrop id="faq" variant="dots" glow="top-left" />
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          kicker="FAQ"
          title={
            <>
              Questions clients <span className="heading-accent">usually ask</span>.
            </>
          }
          subtitle="Can't find your answer here? Book a call below and ask me directly."
        />

        <Reveal delay={60}>
          <ul className="flex flex-col gap-3">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <li
                  key={item.q}
                  className={`rounded-xl border bg-card/60 transition-colors duration-300 ${
                    isOpen ? 'border-accent/50' : 'border-fg/[0.08]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="heading-display text-base font-bold text-fg">{item.q}</span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen ? 'rotate-45 bg-accent text-white' : 'bg-accent/15 text-accent-bright'
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <p className="overflow-hidden px-5 text-sm leading-relaxed text-body-dim">
                      <span className="block pb-5">{item.a}</span>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
