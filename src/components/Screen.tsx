import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -36 }}
      transition={{ type: 'spring', stiffness: 320, damping: 32 }}
    >
      {children}
    </motion.div>
  )
}
