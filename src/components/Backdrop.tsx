/**
 * Quiet decorative backgrounds for page sections. Each variant is inline SVG
 * or CSS (no image downloads) and uses theme tokens, so it follows the
 * light/dark toggle. The parent section needs `relative isolate overflow-clip`.
 *
 * - grid: blueprint grid, nods to workflow builders
 * - dots: dot matrix
 * - flow: node-and-connector line art, like an automation canvas
 * - lines: soft diagonal hatching
 * - glow: glow only
 */
type Variant = 'grid' | 'dots' | 'flow' | 'lines' | 'glow'
type GlowAt = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'top'

const GLOW_POS: Record<GlowAt, string> = {
  'top-left': '12% 8%',
  'top-right': '88% 8%',
  'bottom-left': '10% 92%',
  'bottom-right': '90% 92%',
  center: '50% 50%',
  top: '50% 0%',
}

/** Fades the pattern out toward the edges so it never frames the content. */
const EDGE_MASK = 'radial-gradient(ellipse 75% 70% at 50% 45%, #000 20%, transparent 85%)'

/**
 * Circuit-board traces: 45-degree bends, vias at the ends, two chip outlines,
 * and light pulses that travel along the traces like data moving through a
 * system. Pulses stop under prefers-reduced-motion.
 */
const TRACES = [
  'M0 150 H220 L260 190 H470 L510 150 H640',
  'M640 150 H760 L800 110 H1010 L1050 150 H1440',
  'M0 330 H120 L160 370 H330 L370 330 H560',
  'M860 330 H1040 L1080 290 H1260 L1300 330 H1440',
  'M0 560 H180 L220 520 H420 L460 560 H600',
  'M840 560 H980 L1020 600 H1240 L1280 560 H1440',
  'M0 700 H300 L340 660 H520',
  'M920 700 H1120 L1160 660 H1440',
  'M330 370 V470 L370 510 V520',
  'M1080 290 V200 L1120 160',
  'M220 520 V420 L180 380',
  'M1240 600 V700',
]

const VIAS: [number, number][] = [
  [640, 150], [560, 330], [860, 330], [600, 560], [840, 560], [520, 660],
  [920, 700], [1120, 160], [180, 380], [1240, 700], [370, 520], [260, 190],
]

/** Chip outlines with pins on the long sides. */
const CHIPS = [
  { x: 60, y: 400, w: 150, h: 70 },
  { x: 1230, y: 420, w: 150, h: 70 },
]

function Circuit() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-accent-soft"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.13">
        {TRACES.map((d) => (
          <path key={d} d={d} />
        ))}
        {CHIPS.map((c) => (
          <g key={`${c.x}-${c.y}`}>
            <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="10" />
            <rect x={c.x + 14} y={c.y + 14} width={c.w - 28} height={c.h - 28} rx="6" strokeDasharray="3 5" />
            {Array.from({ length: Math.floor(c.w / 24) - 1 }, (_, i) => c.x + 24 + i * 24).map((px) => (
              <g key={px}>
                <path d={`M${px} ${c.y} v-10`} />
                <path d={`M${px} ${c.y + c.h} v10`} />
              </g>
            ))}
          </g>
        ))}
      </g>

      <g fill="currentColor" opacity="0.22">
        {VIAS.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="1.8" />
          </g>
        ))}
      </g>

      {/* Data pulses riding the traces */}
      <g fill="none" strokeWidth="2" strokeLinecap="round" className="text-accent-bright">
        {TRACES.slice(0, 8).map((d, i) => (
          <path
            key={d}
            d={d}
            stroke="currentColor"
            className="circuit-pulse"
            style={{ animationDelay: `${i * -1.3}s`, animationDuration: `${7 + (i % 3) * 2}s` }}
          />
        ))}
      </g>

      {/* Status LEDs on the chips */}
      {CHIPS.map((c, i) => (
        <circle
          key={`led-${c.x}`}
          cx={c.x + c.w - 22}
          cy={c.y + 22}
          r="3"
          className="circuit-led fill-accent-bright"
          style={{ animationDelay: `${i * 0.9}s` }}
        />
      ))}
    </svg>
  )
}

function Pattern({ variant, id }: { variant: Variant; id: string }) {
  if (variant === 'glow') return null

  if (variant === 'flow') return <Circuit />

  const patterns = {
    grid: (
      <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
        <path d="M56 0H0V56" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    ),
    dots: (
      <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="currentColor" />
      </pattern>
    ),
    lines: (
      <pattern id={id} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <path d="M0 0V22" fill="none" stroke="currentColor" strokeWidth="1" />
      </pattern>
    ),
  }
  const opacity = { grid: 'opacity-[0.09]', dots: 'opacity-[0.16]', lines: 'opacity-[0.05]' }[variant]

  return (
    <svg
      className={`absolute inset-0 h-full w-full text-accent-soft ${opacity}`}
      style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
    >
      <defs>{patterns[variant]}</defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

export function Backdrop({
  variant,
  glow = 'top-right',
  id,
}: {
  variant: Variant
  glow?: GlowAt | false
  /** Unique per page, used for the SVG pattern id. */
  id: string
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {glow && (
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(40% 45% at ${GLOW_POS[glow]}, color-mix(in srgb, var(--color-accent) 16%, transparent) 0%, transparent 70%)`,
          }}
        />
      )}
      <Pattern variant={variant} id={`bd-${id}`} />
    </div>
  )
}
