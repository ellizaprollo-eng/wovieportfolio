import { Reveal } from '@/components/Reveal'

export function SectionHeading({
  title,
  subtitle,
}: {
  title: React.ReactNode
  subtitle: string
}) {
  return (
    <Reveal className="max-w-2xl">
      <h2 className="heading-display text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-base text-body-dim sm:text-lg">
        {subtitle}
      </p>
    </Reveal>
  )
}
