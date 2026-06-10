import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import Wordmark from '../components/Wordmark'

const bubbles = [
  { txt: 'MC', size: 64, x: '8%', y: '12%', delay: 0 },
  { txt: 'JR', size: 48, x: '66%', y: '4%', delay: 0.8 },
  { txt: 'SO', size: 76, x: '58%', y: '38%', delay: 1.6 },
  { txt: 'LP', size: 42, x: '14%', y: '52%', delay: 0.4 },
  { txt: 'AD', size: 54, x: '38%', y: '70%', delay: 2.1 },
  { txt: 'NK', size: 38, x: '80%', y: '66%', delay: 1.2 },
]

export default function Welcome({ onNext }: { onNext: () => void }) {
  return (
    <Screen>
      <div style={{ paddingTop: 10 }}>
        <Wordmark />
      </div>

      <div className="hero-cloud">
        {bubbles.map((b, i) => (
          <motion.div
            key={b.txt}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.09, type: 'spring', stiffness: 260, damping: 18 }}
            style={{ position: 'absolute', left: b.x, top: b.y }}
          >
            <div
              className="bubble"
              style={{
                width: b.size,
                height: b.size,
                fontSize: b.size * 0.3,
                animationDelay: `${b.delay}s`,
              }}
            >
              {b.txt}
              <span className="dot" />
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
          className="btn-primary"
          onClick={onNext}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Find my people
        </motion.button>
        <span className="caption">Takes 2 minutes</span>
      </div>
    </Screen>
  )
}
