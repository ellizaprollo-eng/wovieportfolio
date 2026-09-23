import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ThemeToggle'
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
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={cn(
          'container-x flex h-14 items-center justify-between gap-4 rounded-full border px-3 transition-all duration-300 sm:px-4',
          scrolled || open
            ? 'border-fg/10 bg-card/90 shadow-lg shadow-black/10 backdrop-blur-xl'
            : 'border-fg/10 bg-card/70 backdrop-blur-xl',
        )}
      >
        <Link
          to="/"
          className="heading-display flex items-center gap-2.5 text-[15px] font-extrabold tracking-tight text-fg transition-colors hover:text-accent-bright"
        >
          <img
            src="/favicon.png?v=2"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full"
          />
          {profile.shortName}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.href.includes('#') ? (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-body/90 transition-colors hover:bg-fg/5 hover:text-fg"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                activeOptions={{ exact: true }}
                className="rounded-full px-3 py-2 text-sm text-body/90 transition-colors hover:bg-fg/5 hover:text-fg [&.active]:text-fg"
              >
                {link.label}
              </Link>
            ),
          )}
          <ThemeToggle className="ml-1" />
          <Link
            to="/contact"
            className="btn-primary ml-2"
            style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
          >
            <span className="btn-node" aria-hidden="true" />
            Get In Touch
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-full p-2 text-body transition-colors hover:bg-fg/5 hover:text-fg"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-x mt-2 lg:hidden">
          <div className="flex flex-col gap-1 rounded-3xl border border-fg/10 bg-card/95 p-3 shadow-lg shadow-black/10 backdrop-blur-xl">
            {navLinks.map((link) =>
              link.href.includes('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-3 py-2.5 text-sm text-body transition-colors hover:bg-fg/5 hover:text-fg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full px-3 py-2.5 text-sm text-body transition-colors hover:bg-fg/5 hover:text-fg"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
