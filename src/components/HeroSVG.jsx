import React from 'react'

function HeroSVG() {
  return (
    <svg
      viewBox="0 0 400 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Code Editor Window */}
      <g transform="translate(50, 100)">
        {/* Window frame */}
        <rect
          x="0"
          y="0"
          width="300"
          height="400"
          rx="8"
          fill="rgba(0, 0, 0, 0.6)"
          stroke="#f43f5e"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Title bar */}
        <rect
          x="0"
          y="0"
          width="300"
          height="30"
          rx="8"
          fill="rgba(244, 63, 94, 0.2)"
        />

        {/* Window controls */}
        <circle cx="15" cy="15" r="5" fill="#f43f5e" opacity="0.6" />
        <circle cx="35" cy="15" r="5" fill="#ec4899" opacity="0.6" />
        <circle cx="55" cy="15" r="5" fill="#fda4af" opacity="0.6" />

        {/* Code lines */}
        <g transform="translate(20, 50)">
          <text x="0" y="0" fill="#f43f5e" fontSize="14" fontFamily="monospace" opacity="0.8">
            <tspan fill="#ec4899">const</tspan>
            <tspan fill="#ffffff"> developer = </tspan>
            <tspan fill="#fda4af">&#123;</tspan>
          </text>

          <text x="0" y="25" fill="#ffffff" fontSize="14" fontFamily="monospace" opacity="0.7">
            <tspan x="20">name: </tspan>
            <tspan fill="#f43f5e">&apos;Farhan Minaj &apos;</tspan>
          </text>

          <text x="0" y="50" fill="#ffffff" fontSize="14" fontFamily="monospace" opacity="0.7">
            <tspan x="20">role: </tspan>
            <tspan fill="#f43f5e">&apos;Full-Stack Dev&apos;</tspan>
          </text>

          <text x="0" y="75" fill="#ffffff" fontSize="14" fontFamily="monospace" opacity="0.7">
            <tspan x="20">skills: [</tspan>
            <tspan fill="#ec4899">&apos;React&apos;</tspan>
            <tspan fill="#ffffff">, </tspan>
            <tspan fill="#ec4899">&apos;JavaScript&apos;</tspan>
            <tspan fill="#ffffff">]</tspan>
          </text>

          <text x="0" y="100" fill="#fda4af" fontSize="14" fontFamily="monospace" opacity="0.8">
            <tspan>&#125;</tspan>
          </text>

          {/* Coding Icon Below skills/JavaScript */}
          <g transform="translate(80, 115)">
            {/* Code brackets */
            <g transform="translate(109, 5)">
              {/* Left bracket < */}
              <path 
                d="M 3 3 L -3 16 L 3 29"
                stroke="#f43f5e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
                filter="url(#glow)"
              >
                 <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Right bracket > */}
              <path
                d="M 25 3 L 31 16 L 25 29"
                stroke="#f43f5e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
                filter="url(#glow)"
              >
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </path>
            </g>}
          </g>
            
          <rect
            x="140"
            y="95"
            width="2"
            height="18"
            fill="#f4355e"
            opacity="1"
            filter="url(#glow)"
          >
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </g>

      {/* Terminal Window */}
      <g transform="translate(102, 350)">
        <rect
          x="0"
          y="0"
          width="200"
          height="120"
          rx="4"
          fill="rgba(0, 0, 0, 0.8)"
          stroke="#22c55e"
          strokeWidth="1"
          opacity="0.7"
        />

        <text x="10" y="20" fill="#22c55e" fontSize="11" fontFamily="monospace">
          $ npm run dev
        </text>
        <text x="10" y="35" fill="#22c55e" fontSize="10" fontFamily="monospace" opacity="0.8">
          &gt; vite dev starting...
        </text>
        <text x="10" y="50" fill="#22c55e" fontSize="10" fontFamily="monospace" opacity="0.8">
          ✓ built in 0.12s
        </text>
        <text x="10" y="70" fill="#22c55e" fontSize="10" fontFamily="monospace">
          ➜ http://localhost:5173
        </text>
        <text x="10" y="100" fill="#22c55e" fontSize="11" fontFamily="monospace" opacity="0.6">
          _
        </text>
      </g>

      {/* Particles */}
      <circle cx="100" cy="200" r="2" fill="#f43f5e" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="250" r="2" fill="#ec4899" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="150" r="1.5" fill="#fda4af" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="400" r="1.5" fill="#22c55e" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default HeroSVG
