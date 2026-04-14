import { useState, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { PassphraseGate } from './components/PassphraseGate'
import { ChapterView } from './components/ChapterView'
import { STORAGE_REMEMBER_KEY } from './config'

function readRemembered(): boolean {
  try {
    return localStorage.getItem(STORAGE_REMEMBER_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const [unlocked, setUnlocked] = useState(readRemembered)
  const reduce = useReducedMotion() ?? false

  const handleUnlocked = useCallback(() => {
    setUnlocked(true)
  }, [])

  return (
    <div className="app-root">
      <div className="noise-overlay" aria-hidden />
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.main
            key="gate"
            className="app-main app-main--gate"
            initial={false}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4 }}
          >
            <PassphraseGate onUnlocked={handleUnlocked} reduceMotion={reduce} />
          </motion.main>
        ) : (
          <motion.main
            key="story"
            className="app-main app-main--story"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 0.5 }}
          >
            <ChapterView />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
