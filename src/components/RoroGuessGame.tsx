import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const OPTIONS: { id: number; num: string; text: string; correct: boolean }[] = [
  { id: 0, num: '١', text: 'ماشي', correct: false },
  { id: 1, num: '٢', text: 'طيزك', correct: true },
  { id: 2, num: '٣', text: 'لا', correct: false },
]

const STROKE = 'var(--stick-stroke)'
const HEAD = 'var(--stick-head)'
const BLUSH = 'var(--stick-blush)'

function RoroGameStickIllustration({
  reduce,
  solved,
}: {
  reduce: boolean
  solved: boolean
}) {
  return (
    <div className="roro-game-illustration-wrap" aria-hidden>
      <svg
        viewBox="0 0 380 188"
        className="roro-game-illustration-svg"
        role="img"
        aria-label="MSTF asking Roro the pizza question"
      >
        <defs>
          <linearGradient id="roroDressGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5b8c8" />
            <stop offset="100%" stopColor="#e8a0b4" />
          </linearGradient>
        </defs>

        {/* Speech bubble + pizza line */}
        <path
          d="M 78 28 L 268 28 Q 278 28 278 38 L 278 96 Q 278 106 268 106 L 118 106 L 92 122 L 98 106 L 78 106 Q 68 106 68 96 L 68 38 Q 68 28 78 28 Z"
          fill="#fff"
          stroke="var(--stick-accent)"
          strokeWidth="2.2"
        />
        <text x="82" y="48" className="roro-game-svg-text" fontSize="9" fontWeight="600" fill="var(--stick-muted)">
          Roro, I&apos;ll eat some
        </text>
        <text x="82" y="62" className="roro-game-svg-text" fontSize="9" fontWeight="700" fill="var(--text)">
          MEGA CHICKEN RANCH
        </text>
        <text x="82" y="76" className="roro-game-svg-text" fontSize="8" fontWeight="600" fill="var(--text)">
          EXTRA SAUSE SUPER LARGE PIZZA.
        </text>
        <text x="82" y="96" className="roro-game-svg-text" fontSize="14" aria-hidden>
          🍕
        </text>

        {/* MSTF — left stick man */}
        <g transform="translate(48, 172)">
          <line x1="0" y1="0" x2="0" y2="-40" stroke={STROKE} strokeWidth="3.2" strokeLinecap="round" />
          <line x1="0" y1="-24" x2="-14" y2="-10" stroke={STROKE} strokeWidth="2.8" strokeLinecap="round" />
          <line x1="0" y1="-24" x2="18" y2="-16" stroke={STROKE} strokeWidth="2.8" strokeLinecap="round" />
          <line x1="0" y1="0" x2="-10" y2="30" stroke={STROKE} strokeWidth="2.8" strokeLinecap="round" />
          <line x1="0" y1="0" x2="10" y2="30" stroke={STROKE} strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="0" cy="-52" r="15" fill={HEAD} stroke={STROKE} strokeWidth="2" />
          <path
            d="M -8 -54 Q0 -48 8 -54"
            fill="none"
            stroke={STROKE}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="-5" cy="-56" r="2.2" fill={STROKE} />
          <circle cx="5" cy="-56" r="2.2" fill={STROKE} />
          <text x="-14" y="44" className="roro-game-svg-caption" fontSize="8" fill="var(--stick-muted)">
            MSTF
          </text>
        </g>

        {/* Roro — right, triangle dress, blush, facing left */}
        <g transform="translate(312, 172)">
          <motion.g
            animate={
              reduce
                ? undefined
                : solved
                  ? { rotate: [0, -5, 5, -3, 0] }
                  : { y: [0, -2.5, 0] }
            }
            transition={
              solved
                ? { duration: 0.45, repeat: 2 }
                : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
            }
            style={{ transformOrigin: '0px -24px' }}
          >
          {/* triangle dress */}
          <path
            d="M 0 -8 L 20 36 L -20 36 Z"
            fill="url(#roroDressGrad)"
            stroke={STROKE}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="0" y1="-8" x2="0" y2="-38" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-22" x2="14" y2="-12" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="-22" x2="-14" y2="-12" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="0" cy="-50" r="14" fill={HEAD} stroke={STROKE} strokeWidth="2" />
          {/* hair */}
          <path
            d="M -12 -58 Q0 -66 12 -58"
            fill="none"
            stroke={STROKE}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <ellipse cx="-8" cy="-60" rx="5" ry="4" fill={STROKE} opacity="0.15" />
          <ellipse cx="8" cy="-60" rx="5" ry="4" fill={STROKE} opacity="0.15" />
          {/* blush */}
          <ellipse cx="-9" cy="-48" rx="5" ry="3" fill={BLUSH} opacity="0.75" />
          <ellipse cx="9" cy="-48" rx="5" ry="3" fill={BLUSH} opacity="0.75" />
          <circle cx="-4" cy="-52" r="2" fill={STROKE} />
          <circle cx="4" cy="-52" r="2" fill={STROKE} />
          <path
            d="M -6 -46 Q0 -42 6 -46"
            fill="none"
            stroke={STROKE}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* tiny feet under dress */}
          <line x1="-8" y1="36" x2="-8" y2="42" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="36" x2="8" y2="42" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
          <text x="-18" y="54" className="roro-game-svg-caption" fontSize="8" fill="var(--stick-muted)">
            Roro
          </text>
          </motion.g>
        </g>

        {!reduce && solved ? (
          <>
            {[-28, -8, 12].map((ox, i) => (
              <motion.text
                key={i}
                x={312 + ox}
                y={88}
                textAnchor="middle"
                className="roro-game-svg-text"
                fontSize="11"
                fill="var(--stick-gold)"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: [0.6, 1, 0.6], y: [6, 0, 6] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
              >
                ✦
              </motion.text>
            ))}
          </>
        ) : null}
      </svg>
    </div>
  )
}

export function RoroGuessGame() {
  const [open, setOpen] = useState(false)
  const [pickedId, setPickedId] = useState<number | null>(null)
  const reduce = useReducedMotion() ?? false

  const solved =
    pickedId !== null && OPTIONS.some((o) => o.id === pickedId && o.correct)
  const showWrongHint = pickedId !== null && !solved

  function pick(id: number) {
    if (solved) return
    setPickedId(id)
  }

  function reset() {
    setPickedId(null)
  }

  return (
    <div className="roro-game-section">
      {!open ? (
        <motion.button
          type="button"
          className="btn btn-secondary roro-game-launch"
          onClick={() => setOpen(true)}
          whileHover={reduce ? undefined : { scale: 1.02 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          Mini game: guess Roro’s answer
          <span className="roro-game-launch-emoji" aria-hidden>
            🍕
          </span>
        </motion.button>
      ) : (
        <motion.div
          className="roro-game-card"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
        >
          <RoroGameStickIllustration reduce={reduce} solved={solved} />

          <p className="roro-game-prompt">What would Roro say?</p>

          <div className="roro-game-options" dir="rtl" lang="ar">
            {OPTIONS.map((opt) => {
              const isSelected = pickedId === opt.id
              const shake = isSelected && !opt.correct && !solved
              return (
                <motion.button
                  key={opt.id}
                  type="button"
                  className={`roro-game-option${shake ? ' roro-game-option--wrong' : ''}${solved && opt.correct ? ' roro-game-option--confirmed' : ''}`}
                  onClick={() => pick(opt.id)}
                  disabled={solved}
                  whileTap={reduce || solved ? undefined : { scale: 0.97 }}
                  animate={
                    shake && !reduce
                      ? { x: [0, -6, 6, -4, 4, 0] }
                      : undefined
                  }
                  transition={{ duration: 0.45 }}
                >
                  <span className="roro-game-option-num">{opt.num}</span>
                  <span className="roro-game-option-text">{opt.text}</span>
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            {showWrongHint ? (
              <motion.p
                key="wrong"
                className="roro-game-feedback roro-game-feedback--wrong"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Nope — that’s not her. Try again.
              </motion.p>
            ) : null}
            {solved ? (
              <motion.div
                key="win"
                className="roro-game-feedback roro-game-feedback--win"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              >
                <p className="roro-game-win-title">U got me.</p>
                <p className="roro-game-win-sub">That’s exactly her energy. You know us.</p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {solved ? (
            <button type="button" className="roro-game-reset btn btn-ghost" onClick={reset}>
              Play again
            </button>
          ) : null}
        </motion.div>
      )}
    </div>
  )
}
