/**
 * The hero backdrop: layered radial washes plus blurred SVG wave ribbons that
 * drift slowly, recreating the aurora look behind the headline.
 */

const PARTICLES = [
  { cx: 1226, cy: 560, r: 4, fill: '#7fd88a', delay: '0s' },
  { cx: 1258, cy: 592, r: 3, fill: '#f472e8', delay: '1.2s' },
  { cx: 1186, cy: 616, r: 2.5, fill: '#c084fc', delay: '2.4s' },
  { cx: 1330, cy: 528, r: 2, fill: '#f9a8f0', delay: '0.6s' },
  { cx: 1096, cy: 660, r: 2, fill: '#e935d8', delay: '3s' },
  { cx: 148, cy: 604, r: 2.5, fill: '#c084fc', delay: '1.8s' },
  { cx: 96, cy: 512, r: 2, fill: '#f472e8', delay: '2.9s' },
  { cx: 402, cy: 690, r: 2, fill: '#7fd88a', delay: '1.4s' },
  { cx: 640, cy: 726, r: 2.5, fill: '#f9a8f0', delay: '0.3s' },
  { cx: 940, cy: 706, r: 2, fill: '#e935d8', delay: '2.1s' },
]

export function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base plum wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0514_0%,#150b22_45%,#0b0616_78%,#070310_100%)]" />

      {/* Broad glow centred behind the avatar and headline */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_44%,rgba(217,38,192,0.28)_0%,rgba(140,35,190,0.12)_45%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_20%_78%,rgba(120,30,170,0.22)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_88%_70%,rgba(190,40,150,0.18)_0%,transparent_60%)]" />

      {/* Drifting wave ribbons */}
      <svg
        className="aurora-a absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b1fb5" stopOpacity="0" />
            <stop offset="22%" stopColor="#c026b8" stopOpacity="0.45" />
            <stop offset="52%" stopColor="#f472e8" stopOpacity="0.62" />
            <stop offset="80%" stopColor="#8b1fb5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5b1580" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ribbon-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b1580" stopOpacity="0" />
            <stop offset="30%" stopColor="#a21caf" stopOpacity="0.5" />
            <stop offset="62%" stopColor="#e935d8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6d1a95" stopOpacity="0" />
          </linearGradient>
          <filter id="soften" x="-25%" y="-60%" width="150%" height="220%">
            <feGaussianBlur stdDeviation="34" />
          </filter>
          <filter id="soften-tight" x="-25%" y="-60%" width="150%" height="220%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <g filter="url(#soften)">
          <path
            d="M -120 470 C 220 372 500 516 780 440 S 1250 322 1560 396"
            fill="none"
            stroke="url(#ribbon-a)"
            strokeWidth="120"
            strokeLinecap="round"
          />
          <path
            d="M -120 556 C 240 462 520 648 800 560 S 1290 436 1560 528"
            fill="none"
            stroke="url(#ribbon-b)"
            strokeWidth="150"
            strokeLinecap="round"
          />
          <path
            d="M -120 664 C 300 600 600 764 900 664 S 1300 560 1560 636"
            fill="none"
            stroke="url(#ribbon-a)"
            strokeWidth="132"
            strokeLinecap="round"
          />
        </g>

        {/* Brighter cores riding on top of the soft bands */}
        <g filter="url(#soften-tight)" opacity="0.85">
          <path
            d="M -120 470 C 220 372 500 516 780 440 S 1250 322 1560 396"
            fill="none"
            stroke="url(#ribbon-a)"
            strokeWidth="14"
          />
          <path
            d="M -120 556 C 240 462 520 648 800 560 S 1290 436 1560 528"
            fill="none"
            stroke="url(#ribbon-b)"
            strokeWidth="10"
          />
        </g>
      </svg>

      {/* Second, slower ribbon layer for depth */}
      <svg
        className="aurora-b absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-c" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b0c58" stopOpacity="0" />
            <stop offset="40%" stopColor="#9c1fc0" stopOpacity="0.42" />
            <stop offset="75%" stopColor="#f9a8f0" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#3b0c58" stopOpacity="0" />
          </linearGradient>
          <filter id="soften-wide" x="-25%" y="-70%" width="150%" height="240%">
            <feGaussianBlur stdDeviation="46" />
          </filter>
        </defs>
        <g filter="url(#soften-wide)">
          <path
            d="M -120 520 C 300 600 560 420 860 500 S 1300 620 1560 540"
            fill="none"
            stroke="url(#ribbon-c)"
            strokeWidth="170"
            strokeLinecap="round"
          />
          <path
            d="M -120 726 C 260 660 640 800 940 720 S 1320 640 1560 700"
            fill="none"
            stroke="url(#ribbon-c)"
            strokeWidth="140"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Sparse particles */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {PARTICLES.map((p) => (
          <circle
            key={`${p.cx}-${p.cy}`}
            className="twinkle"
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.fill}
            style={{ animationDelay: p.delay }}
          />
        ))}
      </svg>

      {/* Edge vignette + fade into the next section */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_38%,rgba(7,3,16,0.55)_78%,rgba(7,3,16,0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent_0%,#070310_92%)]" />
    </div>
  )
}
