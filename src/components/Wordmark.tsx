import { Sprout } from '../icons'

export default function Wordmark({ size = 20, shine = false }: { size?: number; shine?: boolean }) {
  return (
    <div className="wordmark" style={{ fontSize: size }}>
      <Sprout size={size * 1.1} />
      <span className={shine ? 'shine-text' : undefined}>bloom</span>
    </div>
  )
}
