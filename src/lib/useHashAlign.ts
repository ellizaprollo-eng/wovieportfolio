import { useEffect } from 'react'

/**
 * Sections on the home page (the pinned How I Work scroller, images, fonts)
 * settle their height after the router has already jumped to a #hash, which
 * leaves the visitor short of the target. For a couple of seconds after
 * arriving, re-align whenever the page height changes, and stop the moment
 * the visitor scrolls on their own.
 */
export function useHashAlign() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    const target = id ? document.getElementById(id) : null
    if (!target) return

    const align = () => target.scrollIntoView()
    const ro = new ResizeObserver(align)
    const events = ['wheel', 'touchstart', 'keydown'] as const
    let timer = 0
    const stop = () => {
      ro.disconnect()
      window.clearTimeout(timer)
      for (const e of events) window.removeEventListener(e, stop)
    }
    ro.observe(document.body)
    timer = window.setTimeout(stop, 2500)
    for (const e of events) window.addEventListener(e, stop, { passive: true })
    align()
    return stop
  }, [])
}
