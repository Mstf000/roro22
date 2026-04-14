import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  dateLabel: string
  title: string
  body: string[]
  contextTag?: string
  contextIcon?: string
}

export function StaggeredChapterText({
  dateLabel,
  title,
  body,
  contextTag,
  contextIcon = '🚗',
}: Props) {
  const reduce = useReducedMotion() ?? false
  const stagger = reduce ? 0 : 0.09
  const base = { duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] as const }

  return (
    <div className="chapter-text">
      <motion.p
        className="chapter-date"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: 0 }}
      >
        {dateLabel}
      </motion.p>
      {contextTag ? (
        <motion.p
          className="chapter-context"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...base, delay: stagger * 0.5 }}
          role="note"
        >
          <span className="chapter-context-icon" aria-hidden>
            {contextIcon}
          </span>
          {contextTag}
        </motion.p>
      ) : null}
      <motion.h2
        className="chapter-title"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...base, delay: stagger * (contextTag ? 1.2 : 1) }}
      >
        {title}
      </motion.h2>
      <div className="chapter-body">
        {body.map((para, i) => (
          <motion.p
            key={i}
            className="chapter-p"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...base,
              delay: stagger * (i + 2 + (contextTag ? 0.3 : 0)),
            }}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </div>
  )
}
