import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  total: number
  current: number
}

export function ProgressDots({ total, current }: Props) {
  const reduce = useReducedMotion() ?? false

  return (
    <div className="progress-dots" role="navigation" aria-label="Story progress">
      {Array.from({ length: total }, (_, i) => {
        const active = i === current
        return (
          <motion.span
            key={i}
            className={`progress-dot${active ? ' progress-dot--active' : ''}`}
            animate={
              active && !reduce
                ? { scale: [1, 1.15, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 1.6, repeat: active ? Infinity : 0, ease: 'easeInOut' }}
            aria-current={active ? 'step' : undefined}
          />
        )
      })}
    </div>
  )
}
