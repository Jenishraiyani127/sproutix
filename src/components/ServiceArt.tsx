import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { ServiceArt as ArtKey, Tint } from '../data/services'
import { tintColors } from '../lib/tints'

const grey = '#9aa6bd'
const ink = '#596070'
const brand = '#1f6bff'

/** Hover-tilting wrapper shared by all illustrations (group = the service card). */
function Stage({ children }: { children: ReactNode }) {
  return (
    <g className="origin-center [transform-box:fill-box] transition-transform duration-700 ease-out group-hover:-rotate-3 group-hover:scale-105">
      {children}
    </g>
  )
}

function Web({ t }: { t: string }) {
  return (
    <Stage>
      <g transform="rotate(-7 200 150)">
        <rect x="62" y="64" width="276" height="182" rx="24" fill="#fff" />
        {[90, 106, 122].map((x) => (
          <circle key={x} cx={x} cy="88" r="5" fill={grey} />
        ))}
        <rect x="76" y="108" width="248" height="126" rx="14" fill={t} />
        <rect x="94" y="126" width="96" height="12" rx="6" fill="#fff" />
        <rect x="94" y="148" width="138" height="8" rx="4" fill="#fff" opacity=".85" />
        <rect x="94" y="164" width="108" height="8" rx="4" fill="#fff" opacity=".85" />
        <rect x="94" y="190" width="66" height="24" rx="12" fill="#fff" />
        <rect x="246" y="126" width="62" height="88" rx="12" fill="#fff" opacity=".9" />
      </g>
    </Stage>
  )
}

function App({ t }: { t: string }) {
  return (
    <Stage>
      <g transform="rotate(10 225 160)">
        <rect x="178" y="40" width="130" height="270" rx="28" fill="#fff" opacity=".7" />
      </g>
      <g transform="rotate(-9 185 170)">
        <rect x="108" y="42" width="142" height="280" rx="30" fill="#fff" />
        <rect x="118" y="52" width="122" height="260" rx="22" fill={t} />
        <rect x="148" y="64" width="62" height="13" rx="6.5" fill={ink} />
        <circle cx="146" cy="116" r="16" fill="#fff" />
        <rect x="170" y="108" width="52" height="8" rx="4" fill="#fff" />
        <rect x="170" y="122" width="34" height="8" rx="4" fill="#fff" opacity=".8" />
        <rect x="132" y="154" width="94" height="58" rx="12" fill="#fff" opacity=".9" />
        <rect x="132" y="224" width="94" height="30" rx="12" fill="#fff" opacity=".7" />
      </g>
    </Stage>
  )
}

function Cms({ t }: { t: string }) {
  return (
    <Stage>
      <g transform="rotate(5 200 150)">
        <rect x="56" y="60" width="288" height="192" rx="24" fill="#fff" />
        <rect x="68" y="72" width="70" height="168" rx="14" fill={t} />
        {[88, 108, 128, 148].map((y) => (
          <rect key={y} x="80" y={y} width={y === 88 ? 46 : 38} height="8" rx="4" fill="#fff" />
        ))}
        <rect x="154" y="76" width="96" height="14" rx="7" fill={grey} opacity=".6" />
        <rect x="154" y="104" width="172" height="52" rx="12" fill={t} />
        <rect x="154" y="168" width="82" height="62" rx="12" fill={t} />
        <rect x="246" y="168" width="80" height="62" rx="12" fill={t} />
        <circle cx="322" cy="80" r="24" fill={brand} />
        <path d="M313 90l2-8 14-14 6 6-14 14z" fill="#fff" />
      </g>
    </Stage>
  )
}

function Graphic({ t }: { t: string }) {
  return (
    <Stage>
      <g transform="rotate(-5 200 150)">
        <circle cx="150" cy="128" r="64" fill="#fff" />
        <rect x="196" y="96" width="122" height="122" rx="22" fill="#fff" opacity=".92" transform="rotate(12 257 157)" />
        <path d="M112 262 L176 168 L244 262 Z" fill={t} stroke="#fff" strokeWidth="10" strokeLinejoin="round" />
        <path d="M66 222 C120 90, 250 310, 336 140" stroke={brand} strokeWidth="5" strokeLinecap="round" fill="none" />
        {[
          [66, 222],
          [336, 140],
        ].map(([x, y]) => (
          <rect key={x} x={x - 7} y={y - 7} width="14" height="14" rx="3" fill="#fff" stroke={brand} strokeWidth="3" />
        ))}
      </g>
    </Stage>
  )
}

function UiUx({ t }: { t: string }) {
  return (
    <Stage>
      <g transform="rotate(-4 200 150)">
        <rect x="64" y="48" width="272" height="214" rx="22" fill="#fff" />
        <rect x="80" y="64" width="240" height="30" rx="10" fill={t} />
        <rect x="80" y="108" width="112" height="86" rx="12" fill={t} />
        <rect x="204" y="108" width="116" height="38" rx="10" fill={t} />
        <rect x="204" y="156" width="116" height="38" rx="10" fill={t} />
        <rect x="80" y="208" width="84" height="30" rx="15" fill={brand} />
        <rect
          x="72"
          y="100"
          width="128"
          height="102"
          rx="8"
          fill="none"
          stroke={brand}
          strokeWidth="2.5"
          strokeDasharray="6 5"
        />
        {[
          [72, 100],
          [200, 100],
          [72, 202],
          [200, 202],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 5} y={y - 5} width="10" height="10" rx="2" fill="#fff" stroke={brand} strokeWidth="2.5" />
        ))}
        <path d="M262 196 L262 244 L274 233 L284 254 L293 250 L283 230 L300 229 Z" fill={ink} stroke="#fff" strokeWidth="3.5" strokeLinejoin="round" />
      </g>
    </Stage>
  )
}

function Marketing({ t }: { t: string }) {
  const bars = [52, 84, 70, 118, 158]
  return (
    <Stage>
      <g transform="rotate(-4 200 160)">
        <rect x="52" y="50" width="296" height="214" rx="24" fill="#fff" />
        {bars.map((h, i) => (
          <rect key={i} x={80 + i * 52} y={238 - h} width="34" height={h} rx="10" fill={i === bars.length - 1 ? brand : t} />
        ))}
        <motion.path
          d="M92 176 C140 170 150 130 190 138 S250 92 316 78"
          stroke="#5b4bf2"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3 }}
        />
        <circle cx="316" cy="78" r="9" fill="#9333ea" stroke="#fff" strokeWidth="4" />
      </g>
    </Stage>
  )
}

const arts: Record<ArtKey, (p: { t: string }) => ReactNode> = {
  web: Web,
  app: App,
  cms: Cms,
  graphic: Graphic,
  uiux: UiUx,
  marketing: Marketing,
}

export function ServiceIllustration({ art, tint }: { art: ArtKey; tint: Tint }) {
  const Art = arts[art]
  return (
    <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Art t={tintColors[tint].solid} />
    </svg>
  )
}
