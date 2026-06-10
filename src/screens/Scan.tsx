import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import Avatar from '../components/Avatar'
import { Check } from '../icons'
import { people } from '../data/people'

const PHASES = [
  { at: 0, label: 'Reading 18,260 conversations' },
  { at: 30, label: 'Mapping 1,032 people' },
  { at: 58, label: 'Finding warm paths' },
  { at: 84, label: 'Ranking your top 50' },
]

const DURATION = 4600

export default function Scan({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const t0 = performance.now()
    let raf: number
    let finished = false
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / DURATION)
      const eased = 1 - Math.pow(1 - p, 2.2)
      setProgress(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else if (!finished) {
        finished = true
        setTimeout(onDone, 900)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  const ringSize = 168
  const r = (ringSize - 8) / 2
  const c = 2 * Math.PI * r
  const orbiters = people.slice(0, 6)

  return (
    <Screen>
      <div className="scan-stage">
        <div className="orbit">
          {orbiters.map((p, i) => {
            const angle = (i / orbiters.length) * 2 * Math.PI
            const x = Math.cos(angle) * 140
            const y = Math.sin(angle) * 140
            return (
              <div key={p.id} style={{ position: 'absolute', left: `calc(50% + ${x}px - 17px)`, top: `calc(50% + ${y}px - 17px)` }}>
                <div className="orbit-item">
                  <Avatar name={p.name} size={34} />
                </div>
              </div>
            )
          })}
        </div>

        <div className="scan-center">
          <svg width={ringSize} height={ringSize} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={ringSize / 2} cy={ringSize / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle
              cx={ringSize / 2}
              cy={ringSize / 2}
              r={r}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - progress / 100)}
              style={{ filter: 'drop-shadow(0 0 14px rgba(63,224,129,0.5))' }}
            />
          </svg>
          <span className="scan-pct">
            {progress < 100 ? (
              `${progress}%`
            ) : (
              <motion.span initial={{ scale: 0.6 }} animate={{ scale: 1 }} className="accent">
                50
              </motion.span>
            )}
          </span>
        </div>
      </div>

      <div className="phase-list">
        {PHASES.map((ph, i) => {
          const next = PHASES[i + 1]
          const done = progress >= (next ? next.at : 100)
          const active = !done && progress >= ph.at
          return (
            <div key={ph.label} className={`phase${done ? ' done' : active ? ' active' : ''}`}>
              <span className="phase-icon">{done ? <Check size={11} /> : active ? <span className="pulse-dot" /> : null}</span>
              {ph.label}
            </div>
          )
        })}
      </div>

      {progress >= 100 && (
        <motion.p
          className="title accent"
          style={{ textAlign: 'center', paddingBottom: 36 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your 50 is ready.
        </motion.p>
      )}
    </Screen>
  )
}
