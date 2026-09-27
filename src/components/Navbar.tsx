import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/ThemeToggle'
import { navLinks, profile } from '@/data/portfolio'

const idOf = (href: string) => href.split('#')[1] ?? ''
const SECTION_IDS = navLinks.map((l) => idOf(l.href)).filter(Boolean)

/**
 * The site is one page, so nav links are section jumps. Instead of a long
 * smooth scroll through every section in between, a short logo cover fades
 * in, the page jumps to the section underneath it, and the cover fades out,
 * which reads like switching pages. Reduced motion skips the cover.
 */
function useSectionJump() {
  const [cover, setCover] = useState<'off' | 'in' | 'out'>('off')
  const busy = useRef(false)

  function jump(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const target = document.getElementById(idOf(href))
    if (!target) return // not on the home page: let the browser navigate
    e.preventDefault()
    if (busy.current) return

    const go = () => {
      target.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
      history.replaceState(null, '', `#${target.id}`)
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return go()

    busy.current = true
    setCover('in')
    window.setTimeout(() => {
      go()
      setCover('out')
      window.setTimeout(() => {
        setCover('off')
        busy.current = false
      }, 380)
    }, 280)
  }

  return { cover, jump }
}

/** Which nav section is currently in view, for the underline. */
function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    )
    if (!els.length) return
    // Sections aren't in nav order on the page, so pick the last one whose
    // top has passed a line a third of the way down the viewport.
    const onScroll = () => {
      const line = window.innerHeight * 0.35
      let current = 'home'
      let best = -Infinity
      for (const el of els) {
        const top = el.getBoundingClientRect().top
        if (top <= line && top > best) {
          best = top
          current = el.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { cover, jump } = useSectionJump()
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    jump(e, href)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          className={cn(
            'container-x flex h-14 items-center justify-between gap-4 rounded-full border px-3 transition-all duration-300 sm:px-4',
            scrolled || open
              ? 'border-fg/10 bg-card/90 shadow-lg shadow-black/10 backdrop-blur-xl'
              : 'border-fg/10 bg-card/70 backdrop-blur-xl',
          )}
        >
          <a
            href="/#home"
            onClick={(e) => onNav(e, '/#home')}
            className="heading-display pl-2 text-base font-extrabold tracking-tight text-fg transition-colors hover:text-accent-bright"
          >
            {profile.shortName}
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = idOf(link.href) === active
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => onNav(e, link.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-2 text-sm transition-colors hover:bg-fg/5 hover:text-fg',
                    isActive ? 'text-fg' : 'text-body/90',
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </a>
              )
            })}
            <ThemeToggle className="ml-1" />
            <a
              href="/#contact"
              onClick={(e) => onNav(e, '/#contact')}
              className="btn-primary ml-2"
              style={{ '--btn-px': '1rem', '--btn-py': '0.5rem' } as React.CSSProperties}
            >
              <span className="btn-node" aria-hidden="true" />
              Get In Touch
            </a>
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => onNav(e, link.href)}
                  className={cn(
                    'rounded-full px-3 py-2.5 text-sm transition-colors hover:bg-fg/5 hover:text-fg',
                    idOf(link.href) === active ? 'bg-fg/5 text-fg' : 'text-body',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => onNav(e, '/#contact')}
                className="btn-primary mt-2 justify-center"
              >
                <span className="btn-node" aria-hidden="true" />
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </header>

      {cover !== 'off' && (
        <div
          aria-hidden="true"
          className={cn(
            'fixed inset-0 z-40 grid place-items-center bg-ink',
            cover === 'in' ? 'nav-cover-in' : 'nav-cover-out',
          )}
        >
          <span className="nav-cover-logo grid size-24 place-items-center rounded-3xl bg-white p-3 shadow-2xl shadow-accent/30">
            <img src="/brand/logo-mark.png" alt="" className="size-full object-contain" />
          </span>
        </div>
      )}
    </>
  )
}
