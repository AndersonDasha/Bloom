import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import {
  ChevronLeft,
  InstagramIcon,
  LinkedInIcon,
  Lock,
  MailIcon,
  MessageIcon,
  TikTokIcon,
  XIcon,
} from '../icons'

const SOURCES = [
  { id: 'imessage', name: 'iMessage', meta: 'Texts & group chats', signals: 5630, tint: '#34c759', icon: <MessageIcon /> },
  { id: 'linkedin', name: 'LinkedIn', meta: 'Connections & DMs', signals: 1840, tint: '#0a66c2', icon: <LinkedInIcon /> },
  { id: 'x', name: 'X', meta: 'Follows & replies', signals: 3210, tint: '#536471', icon: <XIcon /> },
  { id: 'instagram', name: 'Instagram', meta: 'DMs & close friends', signals: 2480, tint: '#d6336c', icon: <InstagramIcon /> },
  { id: 'tiktok', name: 'TikTok', meta: 'Mutuals & comments', signals: 980, tint: '#69c9d0', icon: <TikTokIcon /> },
  { id: 'gmail', name: 'Gmail', meta: 'Threads & intros', signals: 4120, tint: '#ea4335', icon: <MailIcon /> },
]

function useCountUp(target: number, duration = 700) {
  const [value, setValue] = useState(target)
  const fromRef = useRef(target)
  useEffect(() => {
    const from = fromRef.current
    if (from === target) return
    const t0 = performance.now()
    let raf: number
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(from + (target - from) * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

type Props = {
  connected: string[]
  onChange: (ids: string[]) => void
  onBack: () => void
  onNext: () => void
}

export default function Connect({ connected, onChange, onBack, onNext }: Props) {
  const toggle = (id: string) =>
    onChange(connected.includes(id) ? connected.filter((x) => x !== id) : [...connected, id])

  const total = SOURCES.filter((s) => connected.includes(s.id)).reduce((n, s) => n + s.signals, 0)
  const shown = useCountUp(total)

  return (
    <Screen>
      <div className="ob-top">
        <button className="icon-btn" onClick={onBack} aria-label="Back">
          <ChevronLeft />
        </button>
        <div className="dots">
          <i />
          <i className="on" />
        </div>
        <div style={{ width: 40 }} />
      </div>

      <h1 className="title">Connect your world</h1>
      <p className="sub" style={{ marginTop: 8 }}>
        Bloom finds the people you already know.
      </p>

      <div className="screen-scroll">
        <div className="source-list">
          {SOURCES.map((s, i) => {
            const on = connected.includes(s.id)
            return (
              <motion.button
                key={s.id}
                className={`source-row${on ? ' on' : ''}`}
                onClick={() => toggle(s.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 + i * 0.05 }}
              >
                <span className="source-tile" style={{ background: `${s.tint}33` }}>
                  {s.icon}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span className="source-name">{s.name}</span>
                  <div className="source-meta">{s.meta}</div>
                </span>
                <span className={`switch${on ? ' on' : ''}`} />
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="ob-footer">
        {total > 0 && (
          <motion.div
            className="signal-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="pulse-dot" />
            {shown.toLocaleString()} signals found
          </motion.div>
        )}
        <button className="btn-primary" disabled={connected.length === 0} onClick={onNext}>
          Scan my network
        </button>
        <span className="caption" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <Lock /> Private by design. Nothing is ever posted.
        </span>
      </div>
    </Screen>
  )
}
