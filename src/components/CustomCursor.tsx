import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      setHovering(
        !!target.closest('a, button, [role="button"]')
      )
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${hovering ? 'cursor-hover' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}
