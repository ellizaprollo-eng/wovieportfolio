import { ArrowDown } from 'lucide-react'
import { Aurora } from '@/components/Aurora'
import { profile } from '@/data/portfolio'

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-24 pb-20"
    >
      <Aurora />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        {/* Avatar with glowing ring */}
        <div className="relative mb-9">
          <div className="halo-pulse absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(233,53,216,0.45)_0%,rgba(160,30,190,0.18)_55%,transparent_72%)] blur-md" />
          <div className="relative rounded-full bg-gradient-to-br from-accent-bright via-accent to-accent-deep p-[3px] shadow-[0_0_45px_-8px_rgba(233,53,216,0.85)]">
            <img
              src={profile.avatar}
              alt={profile.name}
              width={168}
              height={168}
              className="size-[132px] rounded-full object-cover object-top sm:size-[168px]"
            />
          </div>
        </div>

        <h1 className="heading-gradient max-w-4xl pb-3 text-[2.75rem] leading-[1.12] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

<p className="mt-4 text-lg font-medium text-white/90 sm:text-xl">
  {profile.role}
</p>

<p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-base">
  {profile.intro}
</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-accent to-accent-deep px-7 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-6px_rgba(233,53,216,0.9)] transition-transform hover:scale-[1.04]"
          >
            Get In Touch
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:bg-white/[0.07]"
          >
            View Services
          </a>
        </div>

        <a
          href="#services"
          aria-label="Scroll to services"
          className="mt-14 text-accent-soft/80 transition-colors hover:text-accent-bright"
        >
          <ArrowDown className="mx-auto size-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
