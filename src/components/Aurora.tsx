/**
 * Hero backdrop with darker center for readability,
 * subtle purple side glows, soft lower aurora ribbons,
 * and sparse floating particles.
 */

const PARTICLES = [
  { cx: 1226, cy: 560, r: 3, fill: '#7fd88a', delay: '0s' },
  { cx: 1258, cy: 592, r: 2.5, fill: '#f472e8', delay: '1.2s' },
  { cx: 1186, cy: 616, r: 2, fill: '#c084fc', delay: '2.4s' },
  { cx: 1330, cy: 528, r: 1.8, fill: '#f9a8f0', delay: '0.6s' },
  { cx: 1096, cy: 660, r: 1.8, fill: '#e935d8', delay: '3s' },
  { cx: 148, cy: 604, r: 2, fill: '#c084fc', delay: '1.8s' },
  { cx: 96, cy: 512, r: 1.8, fill: '#f472e8', delay: '2.9s' },
  { cx: 402, cy: 690, r: 1.8, fill: '#7fd88a', delay: '1.4s' },
  { cx: 640, cy: 726, r: 2, fill: '#f9a8f0', delay: '0.3s' },
  { cx: 940, cy: 706, r: 1.8, fill: '#e935d8', delay: '2.1s' },
]

export function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Dark premium base */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#070310_0%,#090413_45%,#0b0616_75%,#070310_100%)]" />

      {/* Very subtle glow behind avatar only */}
      <div className="absolute inset-0 bg-[radial-gradient(42%_30%_at_50%_26%,rgba(233,53,216,0.13)_0%,rgba(140,35,190,0.06)_42%,transparent_72%)]" />

      {/* Side ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_0%_72%,rgba(120,30,170,0.16)_0%,transparent_65%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_100%_72%,rgba(190,40,150,0.12)_0%,transparent_65%)]" />

      {/* Main lower glow */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_38%_at_50%_92%,rgba(233,53,216,0.32)_0%,rgba(162,28,175,0.16)_38%,rgba(80,15,110,0.05)_62%,transparent_78%)]" />

      {/* Dark readability zone behind main text */}
      <div className="absolute inset-0 bg-[radial-gradient(45%_42%_at_50%_49%,rgba(7,3,16,0.42)_0%,rgba(7,3,16,0.22)_45%,transparent_76%)]" />

      {/* Main aurora ribbons */}
      <svg
        className="aurora-a absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8b1fb5" stopOpacity="0" />
            <stop offset="22%" stopColor="#c026b8" stopOpacity="0.22" />
            <stop offset="52%" stopColor="#f472e8" stopOpacity="0.34" />
            <stop offset="80%" stopColor="#8b1fb5" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#5b1580" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ribbon-b" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b1580" stopOpacity="0" />
            <stop offset="30%" stopColor="#a21caf" stopOpacity="0.26" />
            <stop offset="62%" stopColor="#e935d8" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#6d1a95" stopOpacity="0" />
          </linearGradient>

          <filter
            id="soften"
            x="-25%"
            y="-60%"
            width="150%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="42" />
          </filter>

          <filter
            id="soften-tight"
            x="-25%"
            y="-60%"
            width="150%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* Move ribbons lower than original */}
        <g filter="url(#soften)">
          <path
            d="M -120 585 C 220 520 500 650 780 580 S 1250 470 1560 535"
            fill="none"
            stroke="url(#ribbon-a)"
            strokeWidth="105"
            strokeLinecap="round"
          />

          <path
            d="M -120 665 C 240 590 520 745 800 675 S 1290 560 1560 640"
            fill="none"
            stroke="url(#ribbon-b)"
            strokeWidth="125"
            strokeLinecap="round"
          />

          <path
            d="M -120 745 C 300 690 600 820 900 745 S 1300 665 1560 725"
            fill="none"
            stroke="url(#ribbon-a)"
            strokeWidth="110"
            strokeLinecap="round"
          />
        </g>

        {/* Very subtle bright cores */}
        <g filter="url(#soften-tight)" opacity="0.38">
          <path
            d="M -120 585 C 220 520 500 650 780 580 S 1250 470 1560 535"
            fill="none"
            stroke="url(#ribbon-a)"
            strokeWidth="8"
          />

          <path
            d="M -120 665 C 240 590 520 745 800 675 S 1290 560 1560 640"
            fill="none"
            stroke="url(#ribbon-b)"
            strokeWidth="6"
          />
        </g>
      </svg>

      {/* Second depth layer */}
      <svg
        className="aurora-b absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ribbon-c" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b0c58" stopOpacity="0" />
            <stop offset="40%" stopColor="#9c1fc0" stopOpacity="0.20" />
            <stop offset="75%" stopColor="#f9a8f0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#3b0c58" stopOpacity="0" />
          </linearGradient>

          <filter
            id="soften-wide"
            x="-25%"
            y="-70%"
            width="150%"
            height="240%"
          >
            <feGaussianBlur stdDeviation="58" />
          </filter>
        </defs>

        <g filter="url(#soften-wide)">
          <path
            d="M -120 635 C 300 690 560 560 860 620 S 1300 710 1560 655"
            fill="none"
            stroke="url(#ribbon-c)"
            strokeWidth="145"
            strokeLinecap="round"
          />

          <path
            d="M -120 770 C 260 720 640 840 940 775 S 1320 710 1560 760"
            fill="none"
            stroke="url(#ribbon-c)"
            strokeWidth="120"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Sparse particles */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
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

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(115%_95%_at_50%_48%,transparent_34%,rgba(7,3,16,0.30)_68%,rgba(7,3,16,0.82)_100%)]" />

      {/* Fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent_0%,rgba(7,3,16,0.55)_55%,#070310_100%)]" />
    </div>
  )
}
