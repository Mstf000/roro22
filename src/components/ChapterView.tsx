import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { chapters, outro, outroSurprise, outroSurpriseJoke } from '../data/story'
import type { Chapter } from '../data/story'
import { StickScene } from './StickScene'
import { StaggeredChapterText } from './StaggeredChapterText'
import { ProgressDots } from './ProgressDots'
import { MascotDog } from './MascotDog'
import { FloatingHearts } from './FloatingHearts'
import { RoroGuessGame } from './RoroGuessGame'
import { RoroDarknessGame } from './RoroDarknessGame'
import { JuiceMomentHint } from './JuiceMomentHint'

const TOTAL_STEPS = chapters.length + 1

function sceneHasFloatingHearts(scene: Chapter['scene'] | undefined) {
  return (
    scene === 'flowers_cairo_luxor' ||
    scene === 'family_approved' ||
    scene === 'palitos_luxor_quest' ||
    scene === 'dress_april_love' ||
    scene === 'dad_call_agreement' ||
    scene === 'hundred_i_love_yous' ||
    scene === 'salon_juice_moment' ||
    scene === 'salon_day_two' ||
    scene === 'late_night_calls'
  )
}

export function ChapterView() {
  const [index, setIndex] = useState(0)
  const [heartsKey, setHeartsKey] = useState(0)
  const [darknessGameOpen, setDarknessGameOpen] = useState(false)
  const reduce = useReducedMotion() ?? false
  const isOutro = index >= chapters.length
  const chapter: Chapter | null = isOutro ? null : chapters[index]!
  const themeCool = !isOutro && index === 0

  function goNext() {
    if (index >= TOTAL_STEPS - 1) return
    const next = index + 1
    if (next < chapters.length && sceneHasFloatingHearts(chapters[next]?.scene)) {
      setHeartsKey((k) => k + 1)
    }
    setIndex(next)
  }

  function goPrev() {
    if (index <= 0) return
    const next = index - 1
    if (next < chapters.length && sceneHasFloatingHearts(chapters[next]?.scene)) {
      setHeartsKey((k) => k + 1)
    }
    setIndex(next)
  }

  const justLeftSad = index === 1

  return (
    <div className={`story-shell${themeCool ? ' story-shell--cool' : ''}`}>
      <button
        type="button"
        className="roro-note-launch"
        onClick={() => setDarknessGameOpen(true)}
        aria-label="Open a short note for Roro"
      >
        <span className="roro-note-launch__glyph" aria-hidden />
      </button>
      <RoroDarknessGame open={darknessGameOpen} onClose={() => setDarknessGameOpen(false)} />

      <ProgressDots total={TOTAL_STEPS} current={index} />

      <div className="story-stage">
        <FloatingHearts
          key={heartsKey}
          active={!isOutro && sceneHasFloatingHearts(chapter?.scene)}
        />

        <AnimatePresence mode="wait">
          {isOutro ? (
            <OutroPanel key="outro" reduce={reduce} />
          ) : (
            <motion.div
              key={chapter!.id}
              className="chapter-panel"
              initial={reduce ? false : { opacity: 0, x: 28, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, x: -22, scale: 0.98 }}
              transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="chapter-card">
                <StickScene scene={chapter!.scene} />
                <StaggeredChapterText
                  dateLabel={chapter!.dateLabel}
                  title={chapter!.title}
                  body={chapter!.body}
                  contextTag={chapter!.contextTag}
                  contextIcon={chapter!.contextIcon}
                />
                {chapter!.id === 'april30' && <JuiceMomentHint />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MascotDog
        chapterIndex={index}
        line={
          isOutro
            ? 'That’s all I drew for now. (More hugs later.)'
            : chapter!.mascotLine
        }
        justLeftSad={justLeftSad}
      />

      <nav className="story-nav" aria-label="Chapter navigation">
        <motion.button
          type="button"
          className="btn btn-ghost"
          onClick={goPrev}
          disabled={index === 0}
          whileHover={reduce || index === 0 ? undefined : { scale: 1.02 }}
          whileTap={reduce || index === 0 ? undefined : { scale: 0.98 }}
        >
          ← Back
        </motion.button>
        <motion.button
          type="button"
          className="btn btn-primary"
          onClick={goNext}
          disabled={index >= TOTAL_STEPS - 1}
          whileHover={reduce || index >= TOTAL_STEPS - 1 ? undefined : { scale: 1.02 }}
          whileTap={reduce || index >= TOTAL_STEPS - 1 ? undefined : { scale: 0.98 }}
        >
          Next
          <span className="btn-arrow" aria-hidden>
            →
          </span>
        </motion.button>
      </nav>
    </div>
  )
}

type SurprisePhase = 'closed' | 'joke' | 'real'

function OutroPanel({ reduce }: { reduce: boolean }) {
  const [phase, setPhase] = useState<SurprisePhase>('closed')
  const [photoHidden, setPhotoHidden] = useState(false)

  return (
    <motion.div
      className="chapter-panel chapter-panel--outro"
      initial={reduce ? false : { opacity: 0, x: 28, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={reduce ? undefined : { opacity: 0, x: -22, scale: 0.98 }}
      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="chapter-card chapter-card--outro">
        <div className="outro-sparkles" aria-hidden>
          {['✦', '·', '✧', '·', '✦'].map((c, i) => (
            <motion.span
              key={i}
              className="outro-sparkle"
              animate={reduce ? undefined : { opacity: [0.4, 1, 0.4], y: [0, -3, 0] }}
              transition={{ duration: 2.4, delay: i * 0.15, repeat: Infinity }}
            >
              {c}
            </motion.span>
          ))}
        </div>
        <motion.h2
          className="chapter-title chapter-title--outro"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {outro.title}
        </motion.h2>
        <div className="chapter-body">
          {outro.body.map((para, i) => (
            <motion.p
              key={i}
              className="chapter-p"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.08 * (i + 1) }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        <div className="outro-surprise">
          {phase === 'closed' ? (
            <motion.button
              type="button"
              className="btn btn-secondary btn-surprise"
              onClick={() => setPhase('joke')}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Open my heart
              <span className="btn-surprise-heart" aria-hidden>
                ♥
              </span>
            </motion.button>
          ) : null}

          <AnimatePresence mode="wait">
            {phase === 'joke' ? (
              <motion.div
                key="joke"
                className="outro-joke"
                dir="rtl"
                lang="ar"
                initial={reduce ? false : { opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96, y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              >
                <p className="outro-joke-arabic">{outroSurpriseJoke.arabicLine}</p>
                <p className="outro-joke-tease" dir="ltr">
                  {outroSurpriseJoke.tease}
                </p>
                <p className="outro-joke-hint" dir="ltr">
                  {outroSurpriseJoke.hint}
                </p>
                <motion.button
                  type="button"
                  className="btn btn-primary outro-joke-btn"
                  onClick={() => setPhase('real')}
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  {outroSurpriseJoke.realButtonLabel}
                  <span className="btn-surprise-heart" aria-hidden>
                    ♥
                  </span>
                </motion.button>
              </motion.div>
            ) : phase === 'real' ? (
              <motion.div
                key="real-letter"
                className="outro-reveal"
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              >
                <div className="outro-love-letter">
                <div className="outro-love-letter-ornament" aria-hidden>
                  ♥
                </div>
                <motion.p
                  className="outro-love-salutation"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.06 }}
                >
                  {outroSurprise.salutation}
                </motion.p>
                {outroSurprise.paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    className="outro-love-p"
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduce ? 0 : 0.1 + i * 0.09,
                      duration: reduce ? 0 : 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {para}
                  </motion.p>
                ))}
                <motion.p
                  className="outro-love-closing"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.15 + outroSurprise.paragraphs.length * 0.09,
                  }}
                >
                  {outroSurprise.closing}
                </motion.p>
                <motion.p
                  className="outro-love-sign"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: reduce ? 0 : 0.28 + outroSurprise.paragraphs.length * 0.09,
                  }}
                >
                  {outroSurprise.signOff}
                </motion.p>
              </div>
              {!photoHidden ? (
                <motion.div
                  className="outro-photo-wrap outro-photo-wrap--after-letter"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.5, duration: 0.45 }}
                >
                  <img
                    src="/for-roro.jpg"
                    alt="Us"
                    className="outro-photo"
                    onError={() => setPhotoHidden(true)}
                  />
                </motion.div>
              ) : null}
              </motion.div>
            ) : null}
          </AnimatePresence>

          {phase === 'real' ? (
            <div className="outro-after-letter">
              <RoroGuessGame />
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  )
}
