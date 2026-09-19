import { useEffect, useState } from 'react'

/**
 * Follows the pointer everywhere on the site with a small branded "Hire Me"
 * tag, trailing the brand arrow cursor (set in styles.css). Desktop/mouse
 * only; never attaches on touch devices.
 */
export function CursorLabel() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const hide = () => setVisible(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hide)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`cursor-label ${visible ? 'cursor-label-visible' : ''}`}
      style={{ left: position.x, top: position.y }}
    >
      Hire Me
    </div>
  )
}
