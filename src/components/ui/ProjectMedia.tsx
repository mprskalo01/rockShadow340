import type { ProjectVisual } from '../../types'

interface ProjectMediaProps {
  visual: ProjectVisual
}

/**
 * Domain-relevant minimalist line-art rendered as a faint monochrome background
 * behind each project card. No <img> / external assets — pure inline SVG that
 * inherits colour from CSS via `currentColor`.
 */
export default function ProjectMedia({ visual }: ProjectMediaProps) {
  if (visual === 'cars') return <CarsArt />
  return <FinanceArt />
}

function FinanceArt() {
  return (
    <svg
      className="project-media__svg"
      viewBox="0 0 480 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* axes */}
      <path d="M40 30 V260 H470" stroke="currentColor" strokeWidth="1.5" />
      {/* horizontal gridlines */}
      <path d="M40 90 H470 M40 150 H470 M40 210 H470" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* volume bars along the baseline */}
      <path
        d="M70 260 V232 M110 260 V214 M150 260 V224 M190 260 V196 M230 260 V206 M270 260 V176 M310 260 V188 M350 260 V146 M390 260 V162 M430 260 V112"
        stroke="currentColor"
        strokeWidth="6"
        opacity="0.35"
      />
      {/* trend line */}
      <polyline
        points="40,232 70,214 110,224 150,188 190,200 230,156 270,172 310,120 350,138 390,86 430,104 470,52"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* vertex markers */}
      <g fill="currentColor">
        <circle cx="150" cy="188" r="3.5" />
        <circle cx="270" cy="172" r="3.5" />
        <circle cx="390" cy="86" r="3.5" />
        <circle cx="470" cy="52" r="3.5" />
      </g>
    </svg>
  )
}

function CarsArt() {
  return (
    <svg
      className="project-media__svg"
      viewBox="0 0 480 300"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* road */}
      <path d="M10 246 H470" stroke="currentColor" strokeWidth="1.5" />
      <path d="M40 262 H90 M140 262 H190 M240 262 H290 M340 262 H390" stroke="currentColor" strokeWidth="1" opacity="0.5" />

      {/* back car (smaller, offset up) */}
      <g opacity="0.55" stroke="currentColor" strokeWidth="2">
        <path d="M250 150 L268 150 L284 124 L344 124 L360 150 L392 150 Q400 150 400 162 L400 178 L250 178 Z" />
        <line x1="312" y1="124" x2="312" y2="150" />
        <circle cx="288" cy="178" r="16" />
        <circle cx="368" cy="178" r="16" />
      </g>

      {/* front car (larger) */}
      <g stroke="currentColor" strokeWidth="2">
        <path d="M70 184 L96 184 L120 150 L196 150 L222 184 L262 184 Q272 184 272 198 L272 220 L70 220 Z" />
        <line x1="158" y1="150" x2="158" y2="184" />
        <path d="M118 154 L150 154 L150 184 L96 184 Z" opacity="0.5" />
        <path d="M166 154 L194 154 L218 184 L166 184 Z" opacity="0.5" />
        <circle cx="116" cy="220" r="22" />
        <circle cx="226" cy="220" r="22" />
        <circle cx="116" cy="220" r="9" opacity="0.5" />
        <circle cx="226" cy="220" r="9" opacity="0.5" />
      </g>
    </svg>
  )
}
