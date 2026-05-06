import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export function JuiceMomentHint() {
  const [revealed, setRevealed] = useState(false)
  const reduce = useReducedMotion() ?? false

  return (
    <div className="juice-hint-section">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="btn"
            type="button"
            className="btn btn-secondary juice-hint-btn"
            onClick={() => setRevealed(true)}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.18 }}
          >
            <span aria-hidden>🍊</span>
            Psst — what should Roro have said?
          </motion.button>
        ) : (
          <motion.div
            key="reveal"
            className="juice-hint-card"
            initial={reduce ? false : { opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 290, damping: 22 }}
          >
            <p className="juice-hint-label">She should have said:</p>
            <motion.p
              className="juice-hint-arabic"
              dir="rtl"
              lang="ar"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.22, type: 'spring' }}
            >
              لا ولا اي حاجة
            </motion.p>
            <motion.p
              className="juice-hint-sub"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 0.44 }}
            >
              That would've been absolutely perfect ♥ 😭
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
