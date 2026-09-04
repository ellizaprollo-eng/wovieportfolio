import { Reveal } from '@/components/Reveal'

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <Reveal className="text-center">
      <h2 className="heading-gradient pb-2 text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-body-dim sm:text-lg">
        {subtitle}
      </p>
    </Reveal>
  )
}
