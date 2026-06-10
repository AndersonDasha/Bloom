import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import Wordmark from '../components/Wordmark'
import { Beanie, Bob, BunEarrings, CurlyGlasses, Spiky, Wavy } from '../components/Portraits'
import { ChevronRight } from '../icons'
import type { CSSProperties, FC } from 'react'

type Bubble = {
  Portrait: FC<{ size?: number }>
  size: number
  x: string
  y: string
  drift: CSSProperties
}

const bubbles: Bubble[] = [
  { Portrait: Bob, size: 74, x: '6%', y: '8%', drift: { '--dur': '21s', '--dx': '18px', '--dy': '-22px', '--dx2': '-12px', '--dy2': '14px' } as CSSProperties },
  { Portrait: CurlyGlasses, size: 54, x: '68%', y: '3%', drift: { '--dur': '26s', '--dx': '-20px', '--dy': '16px', '--dx2': '14px', '--dy2': '-12px' } as CSSProperties },
  { Portrait: BunEarrings, size: 84, x: '55%', y: '34%', drift: { '--dur': '24s', '--dx': '-16px', '--dy': '-18px', '--dx2': '20px', '--dy2': '10px' } as CSSProperties },
  { Portrait: Beanie, size: 48, x: '12%', y: '48%', drift: { '--dur': '19s', '--dx': '22px', '--dy': '12px', '--dx2': '-10px', '--dy2': '-16px' } as CSSProperties },
  { Portrait: Spiky, size: 62, x: '34%', y: '66%', drift: { '--dur': '28s', '--dx': '-14px', '--dy': '-14px', '--dx2': '16px', '--dy2': '18px' } as CSSProperties },
  { Portrait: Wavy, size: 44, x: '80%', y: '60%', drift: { '--dur': '23s', '--dx': '12px', '--dy': '-20px', '--dx2': '-18px', '--dy2': '8px' } as CSSProperties },
]

export default function Welcome({ onNext }: { onNext: () => void }) {
  return (
    <Screen>
      <div style={{ paddingTop: 10 }}>
        <Wordmark shine />
      </div>

      <div className="hero-cloud">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.09, type: 'spring', stiffness: 260, damping: 18 }}
            style={{ position: 'absolute', left: b.x, top: b.y }}
          >
            <div className="bubble-wrap" style={b.drift}>
              <div className="bubble" style={{ width: b.size, height: b.size }}>
                <b.Portrait size={b.size * 0.72} />
                <span className="dot" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, type: 'spring', stiffness: 240, damping: 26 }}
        style={{ paddingBottom: 8 }}
      >
        <h1 className="display">
          Your next job is already in <span className="accent">your network.</span>
        </h1>
        <p className="sub" style={{ marginTop: 14 }}>
          Bloom finds the 50 people most likely to get you hired.
        </p>
      </motion.div>

      <div className="ob-footer">
        <motion.button
          className="btn-primary cta-big"
          onClick={onNext}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          GET STARTED
          <span className="cta-arrows" aria-hidden>
            <i><ChevronRight /></i>
            <i><ChevronRight /></i>
            <i><ChevronRight /></i>
          </span>
        </motion.button>
        <span className="caption">Takes 2 minutes</span>
      </div>
    </Screen>
  )
}
