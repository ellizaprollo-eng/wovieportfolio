import { Reveal } from '@/components/Reveal'

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
}: {
  /** Short eyebrow label, e.g. "01 · Services". Rendered as "// 01 · Services". */
  kicker?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {kicker && (
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent uppercase [.text-center_&]:justify-center">
          <span aria-hidden="true" className="text-accent/50">
            //
          </span>
          {kicker}
        </p>
      )}
      <h2 className="heading-display text-3xl leading-[1.15] font-extrabold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base text-body-dim sm:text-lg [.text-center_&]:mx-auto">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
