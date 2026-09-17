import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/portfolio'

export function VideoIntro() {
  return (
    <section id="intro" className="relative bg-surface py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          title="A Quick Hello"
          subtitle="A short introduction to who I am and how I approach automation work, before we hop on a call."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/[0.07] shadow-2xl">
            <iframe
              src={profile.videoIntroEmbedUrl}
              title={`${profile.name} - video introduction`}
              allow="fullscreen; autoplay"
              allowFullScreen
              className="h-full w-full"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <a href="#contact" className="btn-primary">
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
