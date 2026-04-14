import { useState } from 'react'
import { motion } from 'framer-motion'
import { getExpectedPassphrase, STORAGE_REMEMBER_KEY } from '../config'

type Props = {
  onUnlocked: () => void
  reduceMotion: boolean
}

export function PassphraseGate({ onUnlocked, reduceMotion }: Props) {
  const [phrase, setPhrase] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState(false)

  const dur = reduceMotion ? 0 : 0.45

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const expected = getExpectedPassphrase()
    const ok = phrase.trim().toLowerCase() === expected.toLowerCase()
    if (ok) {
      setError(false)
      if (remember) {
        try {
          localStorage.setItem(STORAGE_REMEMBER_KEY, '1')
        } catch {
          /* ignore */
        }
      }
      onUnlocked()
    } else {
      setError(true)
    }
  }

  return (
    <motion.div
      className="gate"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: dur, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p
        className="gate-eyebrow"
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.12, duration: dur }}
      >
        A tiny story for
      </motion.p>
      <motion.h1
        className="gate-title"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.2, duration: dur }}
      >
        Roro
      </motion.h1>
      <motion.p
        className="gate-sub"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 0.32, duration: dur }}
      >
        Enter the secret phrase to begin.
      </motion.p>
      <form onSubmit={submit} className="gate-form">
        <input
          type="password"
          autoComplete="off"
          className={`gate-input${error ? ' gate-input--error' : ''}`}
          placeholder="Your passphrase"
          value={phrase}
          onChange={(e) => {
            setPhrase(e.target.value)
            setError(false)
          }}
          aria-invalid={error}
          aria-describedby={error ? 'gate-err' : undefined}
        />
        {error ? (
          <p id="gate-err" className="gate-error" role="alert">
            Not quite — try again?
          </p>
        ) : null}
        <label className="gate-remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember on this device
        </label>
        <motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          Open the story
          <span className="btn-heart" aria-hidden>
            ♥
          </span>
        </motion.button>
      </form>
    </motion.div>
  )
}
