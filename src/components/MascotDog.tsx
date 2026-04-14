import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  chapterIndex: number
  line: string
  /** Extra happy bounce after sad chapter (0) */
  justLeftSad?: boolean
}

export function MascotDog({ chapterIndex, line, justLeftSad }: Props) {
  const reduce = useReducedMotion() ?? false

  return (
    <motion.div
      className="mascot"
      initial={reduce ? false : { opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: reduce ? 0 : 0.4 }}
    >
      <motion.div
        className="mascot-bubble"
        key={line}
        initial={reduce ? false : { opacity: 0, scale: 0.92, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      >
        <p className="mascot-line">{line}</p>
      </motion.div>
      <motion.div
        className="mascot-svg-wrap"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -5, 0],
              }
        }
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.svg
          viewBox="0 0 120 100"
          className="mascot-svg"
          aria-hidden
          initial={justLeftSad && !reduce ? { scale: 0.85 } : false}
          animate={
            justLeftSad && !reduce
              ? { scale: [0.85, 1.08, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <ellipse cx="60" cy="78" rx="28" ry="10" fill="var(--mascot-shadow)" opacity="0.2" />
          <motion.g
            animate={
              reduce
                ? undefined
                : {
                    rotate: [0, chapterIndex === 0 ? 0 : 2, 0, -2, 0],
                  }
            }
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '60px 55px' }}
          >
            <ellipse cx="60" cy="52" rx="38" ry="34" fill="var(--mascot-fur)" stroke="var(--mascot-stroke)" strokeWidth="2.5" />
            <ellipse cx="42" cy="48" rx="10" ry="16" fill="var(--mascot-fur)" stroke="var(--mascot-stroke)" strokeWidth="2" />
            <ellipse cx="78" cy="48" rx="10" ry="16" fill="var(--mascot-fur)" stroke="var(--mascot-stroke)" strokeWidth="2" />
            <ellipse cx="48" cy="50" rx="4" ry="6" fill="var(--mascot-inner-ear)" />
            <ellipse cx="84" cy="50" rx="4" ry="6" fill="var(--mascot-inner-ear)" />
            <ellipse cx="52" cy="52" rx="5" ry="6" fill="#fff" />
            <ellipse cx="68" cy="52" rx="5" ry="6" fill="#fff" />
            <circle cx="54" cy="54" r="3" fill="var(--mascot-eye)" />
            <circle cx="70" cy="54" r="3" fill="var(--mascot-eye)" />
            <ellipse cx="60" cy="62" rx="7" ry="5" fill="var(--mascot-nose)" />
            <path
              d="M52 68 Q60 74 68 68"
              fill="none"
              stroke="var(--mascot-stroke)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse cx="38" cy="58" rx="5" ry="3" fill="var(--mascot-blush)" opacity="0.6" />
            <ellipse cx="82" cy="58" rx="5" ry="3" fill="var(--mascot-blush)" opacity="0.6" />
          </motion.g>
          <motion.path
            d="M50 82 Q60 92 70 82"
            fill="none"
            stroke="var(--mascot-stroke)"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={reduce ? undefined : { d: ['M50 82 Q60 92 70 82', 'M50 82 Q60 88 70 82', 'M50 82 Q60 92 70 82'] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.2 }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
