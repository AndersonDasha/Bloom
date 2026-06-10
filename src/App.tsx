import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from './screens/Welcome'
import Goal from './screens/Goal'
import Connect from './screens/Connect'
import Scan from './screens/Scan'
import Home from './screens/Home'

type Stage = 'welcome' | 'goal' | 'connect' | 'scan' | 'home'

const KEY = 'bloom-onboarded'

export default function App() {
  const [stage, setStage] = useState<Stage>(() => (localStorage.getItem(KEY) ? 'home' : 'welcome'))
  const [goals, setGoals] = useState<string[]>([])
  const [sources, setSources] = useState<string[]>([])

  useEffect(() => {
    if (stage === 'home') localStorage.setItem(KEY, '1')
  }, [stage])

  const restart = () => {
    localStorage.removeItem(KEY)
    setGoals([])
    setSources([])
    setStage('welcome')
  }

  return (
    <div className="phone">
      <div className="aurora" aria-hidden>
        <i />
        <i />
        <i />
      </div>
      <div className="statusbar" aria-hidden>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
            <rect x="0" y="7" width="3" height="4" rx="1" />
            <rect x="4.5" y="5" width="3" height="6" rx="1" />
            <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
            <rect x="13.5" y="0" width="3" height="11" rx="1" />
          </svg>
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none" stroke="currentColor">
            <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" />
            <rect x="2.5" y="2.5" width="14" height="7" rx="1.5" fill="currentColor" stroke="none" />
            <path d="M23.5 4v4a2 2 0 0 0 0-4z" fill="currentColor" stroke="none" />
          </svg>
        </span>
      </div>

      <AnimatePresence mode="wait">
        {stage === 'welcome' && <Welcome key="welcome" onNext={() => setStage('goal')} />}
        {stage === 'goal' && (
          <Goal
            key="goal"
            selected={goals}
            onChange={setGoals}
            onBack={() => setStage('welcome')}
            onNext={() => setStage('connect')}
          />
        )}
        {stage === 'connect' && (
          <Connect
            key="connect"
            connected={sources}
            onChange={setSources}
            onBack={() => setStage('goal')}
            onNext={() => setStage('scan')}
          />
        )}
        {stage === 'scan' && <Scan key="scan" onDone={() => setStage('home')} />}
        {stage === 'home' && <Home key="home" onRestart={restart} />}
      </AnimatePresence>
    </div>
  )
}
