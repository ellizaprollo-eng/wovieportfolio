import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealTag = 'div' | 'article' | 'section' | 'li'

/**
 * Fades + lifts its children into view once they enter the viewport.
 * Falls back to plain visible content when IntersectionObserver is missing.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: RevealTag
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Renders the requested tag at runtime; narrowed to 'div' so JSX resolves to
  // a single, concrete set of element props instead of a union.
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
