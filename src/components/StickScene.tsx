import { motion, useReducedMotion } from 'framer-motion'
import type { SceneKey } from '../data/story'

type Props = { scene: SceneKey }

export function StickScene({ scene }: Props) {
  const reduce = useReducedMotion() ?? false

  return (
    <div className={`stick-scene stick-scene--${scene}`}>
      <svg
        viewBox={
          scene === 'palitos_luxor_quest' ? '0 0 320 278' : '0 0 320 260'
        }
        className="stick-svg"
        role="img"
        aria-label="Illustration for this chapter"
      >
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="goldFlowArrow"
            markerWidth="7"
            markerHeight="7"
            refX="6"
            refY="3.5"
            orient="auto"
          >
            <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--stick-muted)" />
          </marker>
        </defs>

        {scene === 'alone_after_work' && (
          <AloneScene reduce={reduce} />
        )}
        {scene === 'interview_night' && (
          <InterviewNightScene reduce={reduce} />
        )}
        {scene === 'always_talking' && (
          <AlwaysTalkingScene reduce={reduce} />
        )}
        {scene === 'car_feelings_call' && (
          <CarFeelingsCallScene reduce={reduce} />
        )}
        {scene === 'feelings_on_phone_roro' && (
          <FeelingsOnPhoneRoroScene reduce={reduce} />
        )}
        {scene === 'flowers_cairo_luxor' && (
          <FlowersCairoLuxorScene reduce={reduce} />
        )}
        {scene === 'family_approved' && (
          <FamilyApprovedScene reduce={reduce} />
        )}
        {scene === 'first_gold_gram' && (
          <FirstGoldGramScene reduce={reduce} />
        )}
        {scene === 'talked_to_father' && (
          <TalkedToFatherScene reduce={reduce} />
        )}
        {scene === 'palitos_luxor_quest' && (
          <PalitosLuxorQuestScene reduce={reduce} />
        )}
      </svg>
    </div>
  )
}

function AloneScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <motion.rect
        x="20"
        y="40"
        width="70"
        height="90"
        rx="8"
        fill="var(--stick-building)"
        stroke="var(--stick-stroke)"
        strokeWidth="2"
        initial={false}
        animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x="38" y="78" className="stick-svg-label" fontSize="11" fill="var(--stick-muted)">
        work
      </text>
      <path
        d="M95 120 L140 120 L140 180 L200 180"
        fill="none"
        stroke="var(--stick-path)"
        strokeWidth="3"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />
      <text x="118" y="112" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        home
      </text>
      <motion.rect
        x="200"
        y="60"
        width="100"
        height="160"
        rx="12"
        fill="var(--stick-room)"
        stroke="var(--stick-stroke)"
        strokeWidth="2"
        initial={false}
        animate={reduce ? undefined : { opacity: [0.65, 0.85, 0.65] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <rect x="255" y="85" width="28" height="22" rx="4" fill="var(--stick-window)" opacity="0.5" />
      <rect x="215" y="175" width="70" height="14" rx="4" fill="var(--stick-bed)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
      <rect x="215" y="158" width="70" height="20" rx="4" fill="var(--stick-pillow)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
      <motion.g
        style={{ transformOrigin: '248px 150px' }}
        animate={reduce ? undefined : { rotate: [-6, -10, -6] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <line x1="248" y1="150" x2="248" y2="118" stroke="var(--stick-stroke)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="248" y1="130" x2="232" y2="142" stroke="var(--stick-stroke)" strokeWidth="3" strokeLinecap="round" />
        <line x1="248" y1="130" x2="264" y2="142" stroke="var(--stick-stroke)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="248" cy="108" r="14" fill="var(--stick-head)" stroke="var(--stick-stroke)" strokeWidth="2" />
        <path d="M238 104 Q248 112 258 104" fill="none" stroke="var(--stick-stroke)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="244" cy="104" r="2" fill="var(--stick-stroke)" />
        <circle cx="252" cy="104" r="2" fill="var(--stick-stroke)" />
        <ellipse cx="248" cy="112" rx="3" ry="2" fill="var(--stick-blush)" opacity="0.5" />
      </motion.g>
    </>
  )
}

function InterviewNightScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <rect x="24" y="50" width="120" height="100" rx="10" fill="var(--stick-office)" stroke="var(--stick-stroke)" strokeWidth="2" />
      <rect x="40" y="68" width="88" height="12" rx="4" fill="var(--stick-desk)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
      <text x="48" y="104" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        interview day
      </text>
      <StickPerson x={72} y={138} happy scale={0.9} />
      <StickPerson x={108} y={138} happy blush scale={0.88} flip />
      <rect x="170" y="48" width="130" height="170" rx="12" fill="var(--stick-night-room)" stroke="var(--stick-stroke)" strokeWidth="2" />
      <motion.circle
        cx="248"
        cy="88"
        r="22"
        fill="var(--stick-moon)"
        stroke="var(--stick-stroke)"
        strokeWidth="1.5"
        initial={false}
        animate={reduce ? undefined : { opacity: [0.75, 1, 0.75], scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity }}
        filter="url(#softGlow)"
      />
      <rect x="188" y="92" width="36" height="52" rx="4" fill="var(--stick-window-glass)" opacity="0.35" />
      <StickPerson x={210} y={178} happy phone scale={0.95} />
      <StickPerson x={252} y={178} happy phone scale={0.92} flip />
    </>
  )
}

function AlwaysTalkingScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <rect x="30" y="44" width="260" height="172" rx="14" fill="var(--stick-warm-bg)" stroke="var(--stick-stroke)" strokeWidth="2" />
      <StickPerson x={88} y={168} happy phone scale={1} />
      <StickPerson x={228} y={168} happy phone scale={1} flip />
      <motion.g
        initial={false}
        animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: '160px 100px' }}
      >
        <motion.rect
          x="108"
          y="58"
          width="100"
          height="36"
          rx="10"
          fill="#fff"
          stroke="var(--stick-stroke)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduce ? 0 : 0.1, type: 'spring' }}
        />
        <text x="128" y="80" className="stick-svg-label" fontSize="11" fill="var(--stick-muted)">
          ping ♥
        </text>
        <motion.rect
          x="188"
          y="102"
          width="92"
          height="32"
          rx="10"
          fill="#fff9fb"
          stroke="var(--stick-accent)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduce ? 0 : 0.35, type: 'spring' }}
        />
        <text x="204" y="122" className="stick-svg-label" fontSize="10" fill="var(--stick-accent)">
          zzz cute
        </text>
        <motion.rect
          x="48"
          y="102"
          width="88"
          height="30"
          rx="10"
          fill="#fff"
          stroke="var(--stick-stroke)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: reduce ? 0 : 0.6, type: 'spring' }}
        />
        <text x="62" y="122" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
          goodnight?
        </text>
      </motion.g>
      <text x="118" y="210" className="stick-svg-label" fontSize="11" fill="var(--stick-muted)">
        24/7
      </text>
    </>
  )
}

function CarFeelingsCallScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <text x="78" y="28" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        8 March · driving &amp; calling you
      </text>
      <rect x="0" y="38" width="320" height="88" rx="0" fill="#cfe2f3" opacity="0.55" />
      <rect x="0" y="198" width="320" height="62" fill="#4a4a52" />
      <motion.line
        x1="0"
        y1="228"
        x2="360"
        y2="228"
        stroke="#e8e8ee"
        strokeWidth="3"
        strokeDasharray="14 16"
        strokeLinecap="round"
        initial={false}
        animate={reduce ? undefined : { strokeDashoffset: [0, -30] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
      />
      <path
        d="M 62 168 L 248 168 Q 258 168 262 178 L 268 198 L 268 208 L 52 208 L 52 198 L 58 178 Q 62 168 72 168 Z"
        fill="#9eb8d4"
        stroke="var(--stick-stroke)"
        strokeWidth="2.5"
      />
      <path
        d="M 78 138 L 232 138 L 242 168 L 68 168 Z"
        fill="#b8d4e8"
        stroke="var(--stick-stroke)"
        strokeWidth="2"
        opacity="0.85"
      />
      <circle cx="118" cy="188" r="14" fill="none" stroke="var(--stick-stroke)" strokeWidth="2.5" />
      <StickPerson x={168} y={198} happy phone scale={0.82} />
      <motion.rect
        x="72"
        y="48"
        width="176"
        height="44"
        rx="12"
        fill="#fff"
        stroke="var(--stick-accent)"
        strokeWidth="2.5"
        initial={reduce ? false : { y: 54, opacity: 0 }}
        animate={{ y: 48, opacity: 1 }}
        transition={{ delay: reduce ? 0 : 0.2, type: 'spring' }}
      />
      <text x="84" y="70" className="stick-svg-label" fontSize="10" fontWeight="600" fill="var(--stick-accent)">
        {"I'm starting to feel…"}
      </text>
      <text x="84" y="84" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        (on the phone, in the car)
      </text>
    </>
  )
}

function FeelingsOnPhoneRoroScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <text x="88" y="28" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        10 March · same call, your side
      </text>
      <rect x="24" y="48" width="120" height="168" rx="16" fill="#f0f4f8" stroke="var(--stick-stroke)" strokeWidth="2" />
      <rect x="176" y="48" width="120" height="168" rx="16" fill="#fff5f8" stroke="var(--stick-stroke)" strokeWidth="2" />
      <text x="48" y="72" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        MSTF
      </text>
      <text x="208" y="72" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        Roro
      </text>
      <StickPerson x={72} y={188} happy phone scale={0.75} />
      <StickPerson x={236} y={188} happy blush phone scale={0.75} flip />
      <motion.rect
        x="36"
        y="88"
        width="96"
        height="36"
        rx="10"
        fill="#fff"
        stroke="var(--stick-stroke)"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduce ? 0 : 0.15, type: 'spring' }}
      />
      <text x="44" y="110" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        I hear you…
      </text>
      <motion.rect
        x="184"
        y="96"
        width="104"
        height="48"
        rx="12"
        fill="#fff"
        stroke="var(--stick-accent)"
        strokeWidth="2.5"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduce ? 0 : 0.35, type: 'spring' }}
      />
      <text x="192" y="116" className="stick-svg-label" fontSize="9" fontWeight="600" fill="var(--stick-accent)">
        {"Me too. I'm feeling"}
      </text>
      <text x="192" y="130" className="stick-svg-label" fontSize="9" fontWeight="600" fill="var(--stick-accent)">
        it too.
      </text>
      <motion.path
        d="M160 198 C152 188 152 178 160 172 C168 178 168 188 160 198Z"
        fill="none"
        stroke="var(--stick-heart)"
        strokeWidth="1.8"
        opacity="0.5"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: reduce ? 0 : 0.55 }}
      />
    </>
  )
}

function FirstGoldGramScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <text x="96" y="28" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        3 April · 1 gram, literally
      </text>
      <g transform="translate(48,168)">
        <rect x="-20" y="-28" width="40" height="26" rx="4" fill="#7cb87c" stroke="var(--stick-stroke)" strokeWidth="2" />
        <text x="-14" y="-10" className="stick-svg-label" fontSize="8" fill="#fff">
          $
        </text>
        <text x="-18" y="16" className="stick-svg-label" fontSize="8" fill="var(--stick-muted)">
          sent
        </text>
      </g>
      <path
        d="M 100 155 L 138 142"
        fill="none"
        stroke="var(--stick-path)"
        strokeWidth="2.5"
        strokeDasharray="4 4"
        markerEnd="url(#goldFlowArrow)"
      />
      <motion.g
        animate={reduce ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <rect x="148" y="108" width="88" height="36" rx="6" fill="var(--stick-gold)" stroke="var(--stick-stroke)" strokeWidth="2.5" />
        <text x="168" y="132" className="stick-svg-label" fontSize="14" fontWeight="700" fill="#5c4a1a">
          1g
        </text>
        <text x="158" y="98" className="stick-svg-label" fontSize="8" fill="var(--stick-muted)">
          our gold
        </text>
      </motion.g>
      <StickPerson x={248} y={188} happy blush scale={0.88} flip />
      <text x="210" y="218" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        Roro bought it
      </text>
      <text x="118" y="242" className="stick-svg-label" fontSize="8" fill="var(--stick-accent)" fontStyle="italic">
        literally one gram xD
      </text>
    </>
  )
}

function TalkedToFatherScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <text x="88" y="28" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        27 March · with your dad
      </text>
      <rect x="32" y="52" width="256" height="108" rx="14" fill="var(--stick-warm-bg)" stroke="var(--stick-stroke)" strokeWidth="2" />
      <text x="124" y="78" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        honest conversation
      </text>
      <StickPerson x={72} y={200} happy scale={0.92} />
      <StickPerson x={158} y={196} happy scale={1.05} />
      <StickPerson x={244} y={200} happy blush scale={0.9} flip />
      <text x="48" y="228" className="stick-svg-label" fontSize="8" fill="var(--stick-muted)">
        MSTF
      </text>
      <text x="138" y="228" className="stick-svg-label" fontSize="8" fill="var(--stick-muted)">
        baba
      </text>
      <text x="218" y="228" className="stick-svg-label" fontSize="8" fill="var(--stick-muted)">
        Roro
      </text>
      <motion.rect
        x="88"
        y="100"
        width="144"
        height="36"
        rx="10"
        fill="#fff"
        stroke="var(--stick-gold)"
        strokeWidth="2"
        initial={reduce ? false : { opacity: 0, y: 106 }}
        animate={{ opacity: 1, y: 100 }}
        transition={{ delay: reduce ? 0 : 0.3, type: 'spring' }}
      />
      <text x="98" y="122" className="stick-svg-label" fontSize="10" fontWeight="600" fill="var(--stick-gold)">
        respect · clarity · care
      </text>
    </>
  )
}

function PalitosLuxorQuestScene({ reduce }: { reduce: boolean }) {
  /** Aligned grid: Cairo | Luxor same top/height; 3 shops centered in Luxor */
  const rowY = 52
  const rowH = 90
  const cairoX = 10
  const cairoW = 118
  const luxorX = cairoX + cairoW + 8
  const luxorW = 320 - luxorX - 10
  const cairoCx = Math.round(cairoX + cairoW / 2)
  const pad = 12
  const luxorInnerL = luxorX + pad
  const luxorInnerW = luxorW - pad * 2
  const shopW = 36
  const shopGap = 10
  const shopCount = 3
  const shopsTotalW = shopCount * shopW + (shopCount - 1) * shopGap
  const shopRowStartX = luxorInnerL + (luxorInnerW - shopsTotalW) / 2
  const shopYs = rowY + 50
  const storeXs = [0, 1, 2].map((i) => shopRowStartX + i * (shopW + shopGap))
  const winIndex = 2
  const winCx = storeXs[winIndex] + shopW / 2
  /** Hips Y so feet sit just inside panel bottom */
  const cairoStickY = rowY + rowH - 34

  return (
    <>
      <defs>
        <linearGradient id="palitosBagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f4a84a" />
          <stop offset="100%" stopColor="#d97a28" />
        </linearGradient>
        <filter id="palitosWinGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <text
        x="160"
        y="15"
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="9"
        fill="var(--stick-muted)"
      >
        9 April · Cairo → every shop in Luxor
      </text>

      {/* Wish bubble — centered, doesn’t overlap panels */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ellipse cx="160" cy="34" rx="108" ry="18" fill="#fff" stroke="var(--stick-accent)" strokeWidth="2" />
        <text
          x="160"
          y="30"
          textAnchor="middle"
          className="stick-svg-label"
          fontSize="8"
          fill="var(--stick-muted)"
        >
          “wish I had{' '}
          <tspan fontWeight="700" fill="var(--stick-accent)">
            Palitos
          </tspan>
          …”
        </text>
        <circle cx="58" cy="34" r="11" fill="var(--stick-head)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <circle cx="56" cy="32" r="1.8" fill="var(--stick-stroke)" />
        <circle cx="60" cy="32" r="1.8" fill="var(--stick-stroke)" />
        <path
          d="M 52 38 Q 58 42 64 38"
          fill="none"
          stroke="var(--stick-stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Cairo — same height as Luxor; you + phone only */}
      <rect
        x={cairoX}
        y={rowY}
        width={cairoW}
        height={rowH}
        rx="12"
        fill="#e8f2fc"
        stroke="var(--stick-stroke)"
        strokeWidth="2"
      />
      <text
        x={cairoCx}
        y={rowY + 18}
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="9"
        fontWeight="700"
        fill="var(--stick-muted)"
      >
        Cairo
      </text>
      <text
        x={cairoCx}
        y={rowY + 30}
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="6"
        fill="var(--stick-muted)"
      >
        me · on the phone
      </text>
      <StickPerson x={cairoCx} y={cairoStickY} happy phone scale={0.78} />

      {/* Call lines: Cairo right → Luxor left, aligned to panel mid */}
      {!reduce ? (
        <>
          <motion.path
            d={`M ${cairoX + cairoW - 4} ${rowY + 48} Q ${(cairoX + cairoW + luxorX) / 2} ${rowY + 28} ${luxorX + 6} ${rowY + 48}`}
            fill="none"
            stroke="var(--stick-accent)"
            strokeWidth="1.6"
            strokeDasharray="4 5"
            opacity="0.75"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 0.35 }}
          />
          <motion.path
            d={`M ${cairoX + cairoW - 4} ${rowY + 56} Q ${(cairoX + cairoW + luxorX) / 2 + 8} ${rowY + 38} ${luxorX + 6} ${rowY + 58}`}
            fill="none"
            stroke="var(--stick-accent)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            opacity="0.55"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <motion.path
            d={`M ${cairoX + cairoW - 4} ${rowY + 64} Q ${(cairoX + cairoW + luxorX) / 2 + 16} ${rowY + 50} ${luxorX + 6} ${rowY + 68}`}
            fill="none"
            stroke="var(--stick-muted)"
            strokeWidth="1"
            strokeDasharray="2 4"
            opacity="0.45"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </>
      ) : (
        <path
          d={`M ${cairoX + cairoW - 4} ${rowY + 52} Q ${(cairoX + cairoW + luxorX) / 2} ${rowY + 34} ${luxorX + 6} ${rowY + 54}`}
          fill="none"
          stroke="var(--stick-accent)"
          strokeWidth="1.4"
          strokeDasharray="4 5"
          opacity="0.5"
        />
      )}
      <text
        x={(cairoX + cairoW + luxorX) / 2}
        y={rowY + 22}
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="6"
        fill="var(--stick-muted)"
      >
        calling Luxor…
      </text>

      {/* Luxor — supermarkets row, evenly spaced */}
      <rect
        x={luxorX}
        y={rowY}
        width={luxorW}
        height={rowH}
        rx="12"
        fill="#fdf6f0"
        stroke="var(--stick-stroke)"
        strokeWidth="2"
      />
      <text
        x={luxorX + luxorW / 2}
        y={rowY + 18}
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="9"
        fontWeight="700"
        fill="var(--stick-muted)"
      >
        Luxor · supermarkets
      </text>
      <text
        x={luxorX + luxorW / 2}
        y={rowY + 30}
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="6"
        fill="var(--stick-muted)"
      >
        every single one
      </text>

      {storeXs.map((sx, i) => (
        <g key={i} transform={`translate(${sx}, ${shopYs})`}>
          <path
            d={`M 0 0 L ${shopW} 0 L ${shopW - 2} 11 L 0 11 Z`}
            fill={i % 2 === 0 ? '#c76b88' : '#fff'}
            stroke="var(--stick-stroke)"
            strokeWidth="1.2"
          />
          <rect x="0" y="11" width={shopW} height="28" rx="2" fill="#f5ebe3" stroke="var(--stick-stroke)" strokeWidth="1.2" />
          <rect x="12" y="20" width="12" height="15" fill="#6b5b4a" opacity="0.35" />
          {i !== winIndex ? (
            <text x="10" y="30" className="stick-svg-label" fontSize="16" fontWeight="700" fill="#c44">
              ×
            </text>
          ) : null}
        </g>
      ))}

      <motion.g
        filter="url(#palitosWinGlow)"
        animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        style={{ transformOrigin: `${winCx}px ${shopYs + 20}px` }}
      >
        <rect
          x={winCx - 16}
          y={shopYs + 2}
          width="32"
          height="22"
          rx="3"
          fill="url(#palitosBagGrad)"
          stroke="var(--stick-stroke)"
          strokeWidth="1.6"
        />
        <line x1={winCx - 11} y1={shopYs + 8} x2={winCx + 11} y2={shopYs + 8} stroke="#fff" strokeWidth="1.3" opacity="0.65" />
        <line x1={winCx - 11} y1={shopYs + 13} x2={winCx + 9} y2={shopYs + 13} stroke="#fff" strokeWidth="1.2" opacity="0.45" />
        <text
          x={winCx}
          y={shopYs + 38}
          textAnchor="middle"
          className="stick-svg-label"
          fontSize="6"
          fontWeight="700"
          fill="#8b4513"
        >
          PALITOS
        </text>
        <text
          x={winCx}
          y={shopYs + 46}
          textAnchor="middle"
          className="stick-svg-label"
          fontSize="5"
          fill="#2d7a3e"
          fontWeight="700"
        >
          FOUND
        </text>
        {!reduce
          ? ['✦', '★', '✧'].map((sym, si) => {
              const starY = shopYs - 4
              return (
                <motion.text
                  key={si}
                  x={winCx - 14 + si * 14}
                  y={starY}
                  textAnchor="middle"
                  className="stick-svg-label"
                  fontSize="9"
                  fill="var(--stick-gold)"
                  initial={false}
                  animate={{ opacity: [0.5, 1, 0.5], y: [starY, starY - 6, starY] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: si * 0.12 }}
                >
                  {sym}
                </motion.text>
              )
            })
          : null}
      </motion.g>

      {/* Delivery: path from win shop → Roro; van follows arc */}
      <path
        d={`M ${winCx} ${rowY + rowH + 4} Q ${(winCx + 268) / 2} ${rowY + rowH + 36} 258 198`}
        fill="none"
        stroke="var(--stick-path)"
        strokeWidth="2"
        strokeDasharray="6 5"
        opacity="0.85"
      />
      <text x="200" y={rowY + rowH + 28} textAnchor="middle" className="stick-svg-label" fontSize="7" fill="var(--stick-muted)">
        delivered
      </text>
      <motion.g
        animate={
          reduce
            ? undefined
            : {
                x: [0, 26, 52, 78],
                y: [0, 8, 16, 24],
              }
        }
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <g transform={`translate(${winCx - 11}, ${rowY + rowH - 6})`}>
          <rect x="0" y="0" width="24" height="15" rx="3" fill="#6b9ed4" stroke="var(--stick-stroke)" strokeWidth="1.2" />
          <circle cx="7" cy="17" r="4" fill="#2d2d33" />
          <circle cx="18" cy="17" r="4" fill="#2d2d33" />
          <rect x="12" y="2" width="10" height="8" rx="1" fill="url(#palitosBagGrad)" stroke="var(--stick-stroke)" strokeWidth="0.8" />
        </g>
      </motion.g>

      {/* Roro — bottom right, clear margin */}
      <g transform="translate(238, 176)">
        {['✦', '★', '✧', '★', '✦'].map((sym, si) => (
          <motion.text
            key={si}
            x={-8 + si * 10}
            y={-14 + (si % 2) * 5}
            textAnchor="middle"
            className="stick-svg-label"
            fontSize="9"
            fill="var(--stick-gold)"
            initial={false}
            animate={reduce ? undefined : { opacity: [0.45, 1, 0.45], y: [-14 + (si % 2) * 5, -20 + (si % 2) * 5, -14 + (si % 2) * 5] }}
            transition={{ duration: 1.5 + si * 0.08, repeat: Infinity, delay: si * 0.07 }}
          >
            {sym}
          </motion.text>
        ))}
        <motion.g
          animate={reduce ? undefined : { rotate: [-2.5, 2.5, -2.5] }}
          transition={{ duration: 0.55, repeat: Infinity }}
          style={{ transformOrigin: '14px 44px' }}
        >
          <StickPerson x={14} y={64} happy blush scale={0.92} flip />
          <rect x="2" y="6" width="22" height="30" rx="3" fill="url(#palitosBagGrad)" stroke="var(--stick-stroke)" strokeWidth="1.8" />
          <line x1="6" y1="13" x2="20" y2="13" stroke="#fff" strokeWidth="1.5" opacity="0.75" />
          <line x1="6" y1="19" x2="18" y2="19" stroke="#fff" strokeWidth="1.5" opacity="0.55" />
          <text x="7" y="30" className="stick-svg-label" fontSize="5" fontWeight="700" fill="#5c3d1a">
            PALITOS
          </text>
        </motion.g>
      </g>

      <text
        x="160"
        y="268"
        textAnchor="middle"
        className="stick-svg-label"
        fontSize="9"
        fontWeight="600"
        fill="var(--rose-deep)"
      >
        her joy = my joy
      </text>
    </>
  )
}

function FlowersCairoLuxorScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <text x="108" y="30" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        Cairo → Luxor · 16 March
      </text>
      <motion.path
        d="M40 200 Q160 150 280 200"
        fill="none"
        stroke="var(--stick-path)"
        strokeWidth="3"
        strokeDasharray="8 6"
        strokeLinecap="round"
        initial={false}
        animate={reduce ? undefined : { strokeDashoffset: [0, -28] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
      />
      <g transform="translate(28,168)">
        <polygon points="0,-20 8,8 -8,8" fill="var(--stick-gold)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <rect x="-14" y="8" width="28" height="14" rx="3" fill="var(--stick-building)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <text x="-12" y="38" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
          Cairo
        </text>
      </g>
      <g transform="translate(252,168)">
        <rect x="-12" y="-24" width="8" height="32" fill="var(--stick-desk)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <rect x="4" y="-18" width="8" height="26" fill="var(--stick-desk)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <path d="M-18 8 L18 8 L12 18 L-12 18 Z" fill="var(--stick-night-room)" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <text x="-18" y="38" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
          Luxor
        </text>
      </g>
      <motion.g
        animate={reduce ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ellipse cx="160" cy="118" rx="36" ry="14" fill="#fff" stroke="var(--stick-stroke)" strokeWidth="2" opacity="0.95" />
        <text x="132" y="114" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
          first bouquet
        </text>
        <circle cx="145" cy="100" r="8" fill="#f5a3c8" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <circle cx="160" cy="92" r="9" fill="#e8a0b4" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <circle cx="175" cy="100" r="8" fill="#f5a3c8" stroke="var(--stick-stroke)" strokeWidth="1.5" />
        <rect x="152" y="108" width="16" height="28" rx="2" fill="#6b9e6b" stroke="var(--stick-stroke)" strokeWidth="1.5" />
      </motion.g>
      <text x="118" y="228" className="stick-svg-label" fontSize="9" fill="var(--stick-muted)">
        long distance, same heart
      </text>
    </>
  )
}

function FamilyApprovedScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <text x="108" y="28" className="stick-svg-label" fontSize="10" fill="var(--stick-muted)">
        25 March · family
      </text>
      <rect x="36" y="52" width="248" height="108" rx="14" fill="var(--stick-warm-bg)" stroke="var(--stick-stroke)" strokeWidth="2" opacity="0.9" />
      <StickPerson x={86} y={168} happy scale={0.68} />
      <StickPerson x={234} y={168} happy scale={0.68} flip />
      <text x="72" y="182" className="stick-svg-label" fontSize="7" fill="var(--stick-muted)">
        family
      </text>
      <StickPerson x={128} y={198} happy scale={0.92} leanToward="right" blush />
      <StickPerson x={192} y={198} happy scale={0.92} flip leanToward="left" blush />
      <text x="132" y="222" className="stick-svg-label" fontSize="8" fill="var(--stick-muted)">
        us
      </text>
      <motion.g
        initial={reduce ? false : { scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: reduce ? 0 : 0.35, type: 'spring' }}
      >
        <rect x="108" y="64" width="104" height="34" rx="10" fill="#fff" stroke="var(--stick-gold)" strokeWidth="2.5" />
        <text x="122" y="86" className="stick-svg-label" fontSize="12" fontWeight="700" fill="var(--stick-gold)">
          approved ♥
        </text>
      </motion.g>
      <motion.path
        d="M152 178 L160 188 L176 168"
        fill="none"
        stroke="var(--stick-gold)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: reduce ? 0 : 0.5, duration: reduce ? 0 : 0.45 }}
      />
    </>
  )
}

type StickProps = {
  x: number
  y: number
  happy?: boolean
  blush?: boolean
  phone?: boolean
  scale?: number
  flip?: boolean
  leanToward?: 'left' | 'right'
}

function StickPerson({
  x,
  y,
  happy,
  blush,
  phone,
  scale = 1,
  flip,
  leanToward,
}: StickProps) {
  const lean = leanToward === 'left' ? -6 : leanToward === 'right' ? 6 : 0
  const sx = flip ? -1 : 1
  return (
    <g transform={`translate(${x},${y}) scale(${sx * scale},${scale})`}>
      <g transform={`rotate(${lean})`}>
        <line x1="0" y1="0" x2="0" y2="-38" stroke="var(--stick-stroke)" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="0" y1="-22" x2="-16" y2="-8" stroke="var(--stick-stroke)" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="0" y1="-22" x2="16" y2="-8" stroke="var(--stick-stroke)" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="0" y1="0" x2="-12" y2="32" stroke="var(--stick-stroke)" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="0" y1="0" x2="12" y2="32" stroke="var(--stick-stroke)" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="0" cy="-50" r="15" fill="var(--stick-head)" stroke="var(--stick-stroke)" strokeWidth="2" />
        {happy ? (
          <path
            d="M-8 -52 Q0 -46 8 -52"
            fill="none"
            stroke="var(--stick-stroke)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M-6 -48 Q0 -44 6 -48"
            fill="none"
            stroke="var(--stick-stroke)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        )}
        <circle cx="-5" cy="-54" r="2.2" fill="var(--stick-stroke)" />
        <circle cx="5" cy="-54" r="2.2" fill="var(--stick-stroke)" />
        {blush ? (
          <>
            <ellipse cx="-9" cy="-48" rx="4" ry="2.5" fill="var(--stick-blush)" opacity="0.65" />
            <ellipse cx="9" cy="-48" rx="4" ry="2.5" fill="var(--stick-blush)" opacity="0.65" />
          </>
        ) : null}
        {phone ? (
          <rect
            x={flip ? 10 : -18}
            y="-32"
            width="14"
            height="22"
            rx="3"
            fill="var(--stick-phone)"
            stroke="var(--stick-stroke)"
            strokeWidth="1.5"
          />
        ) : null}
      </g>
    </g>
  )
}
