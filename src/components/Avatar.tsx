import { initials } from '../data/people'

const palettes = [
  ['#2dd4bf', '#0f766e'],
  ['#86efac', '#15803d'],
  ['#a5b4fc', '#4338ca'],
  ['#fda4af', '#be123c'],
  ['#fcd34d', '#b45309'],
  ['#93c5fd', '#1d4ed8'],
  ['#d8b4fe', '#7e22ce'],
  ['#6ee7b7', '#047857'],
]

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

export default function Avatar({ name, size = 48 }: { name: string; size?: number }) {
  const [from, to] = palettes[hash(name) % palettes.length]
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(140deg, ${from}, ${to})`,
        border: '1px solid rgba(255,255,255,0.22)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
        fontSize: size * 0.36,
        fontWeight: 800,
        color: 'rgba(255,255,255,0.95)',
        letterSpacing: '0.01em',
      }}
    >
      {initials(name)}
    </div>
  )
}
