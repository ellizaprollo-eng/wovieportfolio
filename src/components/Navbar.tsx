import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, profile } from '@/data/portfolio'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/5 bg-ink/85 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="heading-display text-[15px] font-extrabold tracking-tight text-white transition-colors hover:text-accent-bright"
        >
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-body/90 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary ml-3"
            style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
          >
            <span className="btn-node" aria-hidden="true" />
            Get In Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="rounded-lg p-2 text-body transition-colors hover:bg-white/5 hover:text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="container-x pb-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
