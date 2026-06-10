import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import { ChevronLeft } from '../icons'

const GOALS = [
  'Product Design',
  'Engineering',
  'Product',
  'Marketing',
  'Data',
  'Content',
  'Founder mode',
  'Open to anything',
]

type Props = {
  selected: string[]
  onChange: (goals: string[]) => void
  onBack: () => void
  onNext: () => void
}

export default function Goal({ selected, onChange, onBack, onNext }: Props) {
  const toggle = (g: string) => {
    if (selected.includes(g)) onChange(selected.filter((x) => x !== g))
    else if (selected.length < 3) onChange([...selected, g])
  }

  return (
    <Screen>
      <div className="ob-top">
        <button className="icon-btn" onClick={onBack} aria-label="Back">
          <ChevronLeft />
        </button>
        <div className="dots">
          <i className="on" />
          <i />
        </div>
        <div style={{ width: 40 }} />
      </div>

      <h1 className="title">What's next for you?</h1>
      <p className="sub" style={{ marginTop: 8 }}>
        Pick up to 3.
      </p>

      <div className="chip-grid">
        {GOALS.map((g, i) => (
          <motion.button
            key={g}
            className={`chip${selected.includes(g) ? ' on' : ''}`}
            onClick={() => toggle(g)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.04 }}
          >
            {g}
          </motion.button>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      <div className="ob-footer">
        <button className="btn-primary" disabled={selected.length === 0} onClick={onNext}>
          Continue
        </button>
      </div>
    </Screen>
  )
}
