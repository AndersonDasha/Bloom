import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Screen from '../components/Screen'
import Avatar from '../components/Avatar'
import ScoreRing from '../components/ScoreRing'
import Wordmark from '../components/Wordmark'
import { ChannelGlyph, ChatIcon, PeopleIcon, Pin, Restart, UserIcon } from '../icons'
import { formatLastContact, people, type Person } from '../data/people'

const FILTERS = ['All', 'Hiring now', 'In SF', 'Warmest'] as const
type Filter = (typeof FILTERS)[number]

function applyFilter(f: Filter): Person[] {
  switch (f) {
    case 'Hiring now':
      return people.filter((p) => p.hiring)
    case 'In SF':
      return people.filter((p) => p.location === 'San Francisco')
    case 'Warmest':
      return people.filter((p) => p.lastContactWeeks <= 2)
    default:
      return people
  }
}

function MetaLine({ p }: { p: Person }) {
  return (
    <div className="person-meta">
      <Pin />
      {p.location}
      <span className="meta-dot">·</span>
      <ChannelGlyph channel={p.channel} />
      {formatLastContact(p.lastContactWeeks)}
    </div>
  )
}

function FeatureCard({ p, sent, onWave }: { p: Person; sent: boolean; onWave: () => void }) {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
    >
      <div className="feature-head">
        <Avatar name={p.name} size={56} />
        <div className="person-main">
          <div className="person-name">
            {p.name}
            <span className="hiring-pill">Top match</span>
          </div>
          <div className="person-role">
            {p.role} · {p.company}
          </div>
          <MetaLine p={p} />
        </div>
        <ScoreRing score={p.score} size={48} />
      </div>
      <div className="tag-row">
        {p.topics.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <button className={`feature-cta${sent ? ' sent' : ''}`} onClick={onWave}>
        {sent ? 'Sent ✓' : 'Say hi 👋'}
      </button>
    </motion.div>
  )
}

function PersonRow({ p, sent, onWave }: { p: Person; sent: boolean; onWave: () => void }) {
  return (
    <div className="person-card">
      <Avatar name={p.name} />
      <div className="person-main">
        <div className="person-name">
          {p.name}
          {p.hiring && <span className="hiring-pill">Hiring</span>}
        </div>
        <div className="person-role">
          {p.role} · {p.company}
        </div>
        <MetaLine p={p} />
        <div className="tag-row">
          {p.topics.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="person-side">
        <ScoreRing score={p.score} size={36} />
        <button className={`wave-btn${sent ? ' sent' : ''}`} onClick={onWave} aria-label={`Say hi to ${p.name}`}>
          {sent ? '✓' : '👋'}
        </button>
      </div>
    </div>
  )
}

export default function Home({ onRestart }: { onRestart: () => void }) {
  const [filter, setFilter] = useState<Filter>('All')
  const [sent, setSent] = useState<Set<string>>(new Set())

  const list = useMemo(() => applyFilter(filter), [filter])
  const [top, ...rest] = list

  const wave = (id: string) =>
    setSent((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  return (
    <Screen>
      <div className="home-top">
        <Wordmark size={17} />
        <button className="icon-btn" onClick={onRestart} aria-label="Replay onboarding">
          <Restart />
        </button>
      </div>

      <div className="home-hero">
        <h1 className="display">
          Your <span className="accent">50</span>
        </h1>
        <p className="sub" style={{ marginTop: 6 }}>
          The people most likely to move you forward.
        </p>
      </div>

      <div className="filter-row">
        {FILTERS.map((f) => (
          <button key={f} className={`filter-chip${filter === f ? ' on' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="screen-scroll">
        <motion.div
          key={filter}
          className="people-list"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.035 } } }}
        >
          {top && <FeatureCard p={top} sent={sent.has(top.id)} onWave={() => wave(top.id)} />}
          {rest.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } },
              }}
            >
              <PersonRow p={p} sent={sent.has(p.id)} onWave={() => wave(p.id)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <nav className="tabbar">
        <button className="tab on">
          <PeopleIcon />
          Network
        </button>
        <button className="tab">
          <ChatIcon />
          Chats
        </button>
        <button className="tab">
          <UserIcon />
          You
        </button>
      </nav>
    </Screen>
  )
}
