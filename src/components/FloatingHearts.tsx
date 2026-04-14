import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const HEARTS = [0, 1, 2, 3, 4, 5]

export function FloatingHearts({ active }: { active: boolean }) {
  const reduce = useReducedMotion() ?? false
  const seeds = useMemo(
    () =>
      HEARTS.map((i) => ({
        left: 8 + i * 15 + (i % 3) * 5,
        delay: i * 0.12,
        scale: 0.5 + (i % 3) * 0.2,
      })),
    [],
  )

  if (!active || reduce) return null

  return (
    <div className="floating-hearts" aria-hidden>
      {seeds.map((s, i) => (
        <motion.span
          key={i}
          className="floating-heart"
          style={{ left: `${s.left}%`, fontSize: `${1.1 * s.scale}rem` }}
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -120 - i * 10],
            x: [0, (i % 2 === 0 ? 1 : -1) * 20],
            scale: [0.5, 1, 0.9],
            rotate: [0, i % 2 === 0 ? 12 : -12],
          }}
          transition={{
            duration: 2.2,
            delay: s.delay,
            ease: 'easeOut',
            times: [0, 0.15, 0.7, 1],
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}
