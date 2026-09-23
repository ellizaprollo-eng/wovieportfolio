/**
 * Hero backdrop: a faint blueprint-style grid (nods to workflow diagrams)
 * plus one restrained corner glow and sparse static nodes. Deliberately
 * quiet — the content carries the hero, not the background.
 */

const NODES = [
  { cx: 1180, cy: 160, r: 2, delay: '0s' },
  { cx: 1290, cy: 240, r: 1.6, delay: '1.4s' },
  { cx: 1080, cy: 300, r: 1.4, delay: '2.6s' },
  { cx: 1340, cy: 120, r: 1.4, delay: '0.8s' },
  { cx: 150, cy: 620, r: 1.6, delay: '1.8s' },
  { cx: 90, cy: 520, r: 1.4, delay: '3s' },
]

export function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Flat neutral base */}
      <div className="aurora-base absolute inset-0" />

      {/* Faint blueprint grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              style={{ stroke: 'var(--color-accent-soft)' }}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1440" height="800" fill="url(#grid)" />
      </svg>

      {/* One restrained glow, upper right — not centered, not smeared */}
      <div className="aurora-glow absolute inset-0" />

      {/* Sparse static nodes */}
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {NODES.map((n) => (
          <circle
            key={`${n.cx}-${n.cy}`}
            className="twinkle"
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            style={{
              fill: 'var(--color-accent-bright)',
              animationDelay: n.delay,
            }}
          />
        ))}
      </svg>

      {/* Fade into next section */}
      <div className="aurora-fade absolute inset-x-0 bottom-0 h-32" />
    </div>
  )
}
