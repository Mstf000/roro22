import { useEffect, useId } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Props = {
  open: boolean
  onClose: () => void
}

export function RoroDarknessGame({ open, onClose }: Props) {
  const reduce = useReducedMotion() ?? false
  const labelId = useId()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="roro-note-backdrop"
          role="presentation"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            key="card"
            className="roro-note"
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="roro-note__x" onClick={onClose} aria-label="Close">
              <span />
              <span />
            </button>

            <p className="roro-note__kicker" id={labelId}>
              For you, Roro
            </p>

            <div className="roro-note__body">
              <motion.section
                className="roro-note__strip roro-note__strip--night"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.05 }}
              >
                <h2 className="roro-note__h">My life without you</h2>
                <p>
                  I need you to picture it: the day still ends, the room is still there, but nothing in it
                  is really waiting. Not drama — just a dim kind of fine. This was my life before you had a
                  name in it.
                </p>
              </motion.section>

              <motion.section
                className="roro-note__strip roro-note__strip--day"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.1 }}
              >
                <h2 className="roro-note__h">My life with you</h2>
                <p>
                  Same me, same world — and still the sun hits different. I laugh easier. I go to sleep
                  with something real to miss. <em>This is my life with you.</em>
                </p>
              </motion.section>

              <motion.section
                className="roro-note__strip roro-note__strip--hug"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.15 }}
              >
                <h2 className="roro-note__h">A hug, not a speech</h2>
                <p>
                  All of this is trying to hand you the same ending: I don&apos;t need more words on a
                  screen. I need you here. <strong>Let me hold you.</strong> That&apos;s the whole point.
                </p>
                <div className="roro-note__emblem" aria-hidden>
                  <span className="roro-note__emblem-inner" />
                </div>
              </motion.section>
            </div>

            <div className="roro-note__footer">
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Back to the story
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
