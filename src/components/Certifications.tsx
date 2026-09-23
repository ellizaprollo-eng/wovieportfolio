import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { certBadges, certCertificates } from '@/data/portfolio'

type Cert = { image: string; label: string }

function CertLightbox({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={cert.label}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full border border-fg/15 bg-card text-fg transition-colors hover:border-accent/50 hover:text-accent"
      >
        <X className="size-5" />
      </button>
      <figure
        className="flex max-h-[90vh] max-w-2xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.image}
          alt={cert.label}
          className="content-fade max-h-[78vh] w-auto rounded-lg border border-fg/10 object-contain"
        />
        <figcaption className="text-center text-sm text-body-dim">{cert.label}</figcaption>
      </figure>
    </div>
  )
}

function CertCard({
  image,
  label,
  sub,
  aspect,
  onView,
}: {
  image: string
  label: string
  sub: string
  aspect: string
  onView: () => void
}) {
  return (
    <button
      type="button"
      onClick={onView}
      aria-label={`View ${label}`}
      className="group relative overflow-hidden rounded-xl border border-fg/10 bg-card/60 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
    >
      <div className={`${aspect} w-full overflow-hidden bg-white`}>
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity duration-300 group-hover:bg-ink/50 group-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-ink">
          <ZoomIn className="size-3.5" />
          View
        </span>
      </span>
      <div className="p-3">
        <p className="text-sm font-bold text-fg">{label}</p>
        <p className="mt-0.5 text-xs text-body-dim">{sub}</p>
      </div>
    </button>
  )
}

export function Certifications() {
  const [active, setActive] = useState<Cert | null>(null)

  return (
    <section id="certifications" className="relative bg-ink py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          kicker="Badges & Certifications"
          title={
            <>
              GoHighLevel and n8n <span className="heading-accent">badges and certifications</span>
              , officially earned.
            </>
          }
          subtitle="Direct from GoHighLevel and n8n Academy. Click any badge or certificate to view it in full."
        />

        <Reveal delay={60} className="mt-12">
          <p className="text-xs font-semibold tracking-[0.14em] text-body-dim uppercase">
            Official Badges · {certBadges.length}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {certBadges.map((badge) => (
              <CertCard
                key={badge.name}
                image={badge.image}
                label={badge.name}
                sub={badge.issuer}
                aspect="aspect-[3/4]"
                onView={() => setActive({ image: badge.image, label: badge.name })}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-body-dim uppercase">
            Course Certificates · {certCertificates.length}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certCertificates.map((cert) => (
              <CertCard
                key={cert.title}
                image={cert.image}
                label={cert.title}
                sub={`${cert.issuer} · ${cert.date}`}
                aspect="aspect-[7/6]"
                onView={() => setActive({ image: cert.image, label: cert.title })}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {active && <CertLightbox cert={active} onClose={() => setActive(null)} />}
    </section>
  )
}
