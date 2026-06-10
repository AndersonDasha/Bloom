import { Sprout } from '../icons'

export default function Wordmark({ size = 20 }: { size?: number }) {
  return (
    <div className="wordmark" style={{ fontSize: size }}>
      <Sprout size={size * 1.1} />
      bloom
    </div>
  )
}
