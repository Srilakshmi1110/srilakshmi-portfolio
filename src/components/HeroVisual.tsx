// A warm, illustrated workspace scene — laptop with a rising results chart,
// a potted plant, and a few floating accents. Replaces the earlier technical
// diagram with something friendlier and more human.

export default function HeroVisual({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 340" className={className} fill="none" aria-hidden="true">
      {/* soft glow behind everything */}
      <circle cx="190" cy="150" r="150" fill="#F5C542" opacity="0.14" />
      <circle cx="190" cy="150" r="105" fill="#2E8B4F" opacity="0.08" />

      {/* desk line */}
      <line x1="30" y1="280" x2="330" y2="280" stroke="#E1E5D6" strokeWidth="2" />

      {/* potted plant */}
      <g className="float-slow">
        <path d="M52 280 L60 244 H96 L104 280 Z" fill="#F5C542" />
        <rect x="60" y="238" width="36" height="8" rx="3" fill="#16281D" />
        <path
          d="M78 240 C 60 232, 54 204, 66 184 C 74 200, 78 222, 78 240 Z"
          fill="#2E8B4F"
        />
        <path
          d="M78 240 C 96 230, 104 202, 92 182 C 82 198, 78 220, 78 240 Z"
          fill="#3DA563"
        />
        <path
          d="M78 240 C 78 218, 82 196, 78 174 C 70 196, 72 220, 78 240 Z"
          fill="#16281D"
          opacity="0.12"
        />
      </g>

      {/* laptop */}
      <g>
        {/* base */}
        <path d="M96 262 L116 250 H264 L284 262 Z" fill="#16281D" />
        <rect x="96" y="260" width="188" height="8" rx="2" fill="#16281D" />

        {/* screen bezel */}
        <rect x="120" y="128" width="140" height="124" rx="8" fill="#16281D" />
        {/* screen */}
        <rect x="130" y="138" width="120" height="96" rx="3" fill="#FAF9EF" />

        {/* chart on screen */}
        <g>
          <line x1="140" y1="222" x2="240" y2="222" stroke="#E1E5D6" strokeWidth="1.5" />
          <rect x="148" y="198" width="14" height="24" rx="2" fill="#2E8B4F" className="bar-grow" style={{ transformOrigin: '155px 222px', animationDelay: '150ms' }} />
          <rect x="170" y="182" width="14" height="40" rx="2" fill="#3DA563" className="bar-grow" style={{ transformOrigin: '177px 222px', animationDelay: '300ms' }} />
          <rect x="192" y="164" width="14" height="58" rx="2" fill="#F5C542" className="bar-grow" style={{ transformOrigin: '199px 222px', animationDelay: '450ms' }} />
          <rect x="214" y="150" width="14" height="72" rx="2" fill="#2E8B4F" className="bar-grow" style={{ transformOrigin: '221px 222px', animationDelay: '600ms' }} />
          <path
            d="M150 196 L176 176 L198 158 L222 144"
            stroke="#16281D"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.35"
          />
        </g>
      </g>

      {/* floating accent chips */}
      <g className="float-a">
        <rect x="272" y="96" width="52" height="30" rx="8" fill="#FFFFFF" stroke="#E1E5D6" />
        <text x="298" y="115" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#2E8B4F">{'</>'}</text>
      </g>

      <g className="float-b">
        <circle cx="70" cy="120" r="16" fill="#FFFFFF" stroke="#E1E5D6" />
        <text x="70" y="124" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#F5B700">AI</text>
      </g>

      <g className="float-c">
        <circle cx="300" cy="200" r="6" fill="#F5C542" />
      </g>
      <g className="float-d">
        <circle cx="46" cy="196" r="5" fill="#2E8B4F" />
      </g>

      <style>{`
        .bar-grow {
          transform: scaleY(0);
          animation: growBar 0.5s ease forwards;
        }
        @keyframes growBar { to { transform: scaleY(1); } }

        .float-slow { animation: bob 5s ease-in-out infinite; }
        .float-a { animation: bob 4s ease-in-out infinite; animation-delay: 0.2s; }
        .float-b { animation: bob 4.5s ease-in-out infinite; animation-delay: 0.6s; }
        .float-c { animation: bob 3.5s ease-in-out infinite; animation-delay: 0.1s; }
        .float-d { animation: bob 3.8s ease-in-out infinite; animation-delay: 0.4s; }
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bar-grow { animation: none; transform: scaleY(1); }
          .float-slow, .float-a, .float-b, .float-c, .float-d { animation: none; }
        }
      `}</style>
    </svg>
  )
}
