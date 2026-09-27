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

function Pattern({ variant, id }: { variant: Variant; id: string }) {
  if (variant === 'glow') return null

  if (variant === 'flow') {
    return (
      <svg
        className="absolute inset-0 h-full w-full text-accent-soft opacity-[0.09]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M40 180 H300 C360 180 360 300 420 300 H640" />
          <path d="M420 300 C480 300 480 460 540 460 H760 C820 460 820 360 880 360 H1100" />
          <path d="M1100 360 C1160 360 1160 200 1220 200 H1420" />
          <path d="M1100 360 C1160 360 1160 540 1220 540 H1420" />
          <path d="M20 620 H260 C320 620 320 520 380 520 H540" strokeDasharray="4 6" />
          <path d="M760 460 C820 460 820 660 880 660 H1060" strokeDasharray="4 6" />
        </g>
        <g fill="currentColor">
          {[
            [300, 180], [640, 300], [540, 460], [760, 460], [880, 360],
            [1100, 360], [1220, 200], [1220, 540], [260, 620], [540, 520], [1060, 660],
          ].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x - 7} y={y - 7} width="14" height="14" rx="4" />
          ))}
        </g>
      </svg>
    )
  }

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
