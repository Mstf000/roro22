export type SceneKey =
  | 'alone_after_work'
  | 'interview_night'
  | 'always_talking'
  | 'car_feelings_call'
  | 'feelings_on_phone_roro'
  | 'flowers_cairo_luxor'
  | 'family_approved'
  | 'first_gold_gram'
  | 'talked_to_father'
  | 'palitos_luxor_quest'
  | 'dress_april_love'

export type Chapter = {
  id: string
  dateLabel: string
  title: string
  body: string[]
  scene: SceneKey
  /** Mascot thought / line for this beat */
  mascotLine: string
  /** Optional pill under the date (e.g. “In the car, on a call”) */
  contextTag?: string
  /** Emoji for the context pill (defaults to car) */
  contextIcon?: string
}

export const chapters: Chapter[] = [
  {
    id: 'before',
    dateLabel: 'Before 1 March 2026',
    title: 'When it was just me',
    body: [
      'I’d come home from work so tired, crawl into bed, and the quiet felt heavy.',
      'There was no one to really talk to — just me and the same four walls.',
      'I didn’t know it yet, but that lonely little routine was about to change.',
    ],
    scene: 'alone_after_work',
    mascotLine: 'Shh… this part is a little sad. But it gets warmer, I promise.',
  },
  {
    id: 'march1',
    dateLabel: '1 March 2026',
    title: 'The day you walked in',
    body: [
      'You came for an interview at my company. I still remember that first hello.',
      'We talked that night, and something in me started to unclench — like the world got a bit brighter.',
      'That was the first time in a long while I went to sleep smiling.',
    ],
    scene: 'interview_night',
    mascotLine: 'Okay okay — plot twist: the best person shows up. Ever.',
  },
  {
    id: 'between',
    dateLabel: '2–6 March 2026',
    title: 'Twenty-four seven',
    body: [
      'We didn’t just talk — we lived in each other’s phones for days.',
      'Morning to night, silly voice notes, random thoughts, everything.',
      'I was ridiculously, stupidly happy.',
    ],
    scene: 'always_talking',
    mascotLine: 'Notification sounds = serotonin. Science.* (*not science)',
  },
  {
    id: 'march8',
    dateLabel: '8 March 2026',
    title: 'When I opened up',
    contextTag: 'In the car · on a call with you',
    body: [
      'I was driving — hands busy, heart louder than the engine — and I called you.',
      'I told you I was starting to feel things. Real things. The kind that don’t fit in a joke or a “maybe later.”',
      'No script, no perfect moment… just me, the road, and your voice saying it was okay to say it out loud.',
    ],
    scene: 'car_feelings_call',
    mascotLine: 'Car karaoke but make it vulnerable. You nailed it.',
  },
  {
    id: 'march10',
    dateLabel: '10 March 2026',
    title: 'When you felt it too',
    contextTag: 'Still on the phone together',
    contextIcon: '📞',
    body: [
      'You didn’t have to mirror every word — but you met me there.',
      'You told me you were feeling it too — the pull, the softness, the “this is getting serious” kind of ache.',
      'We weren’t dropping big labels yet; we were just honest. And that honesty meant everything.',
    ],
    scene: 'feelings_on_phone_roro',
    mascotLine: 'Two humans doing the scary thing: telling the truth. Proud of you both.',
  },
  {
    id: 'march16',
    dateLabel: '16 March 2026',
    title: 'The first flowers',
    body: [
      'Long distance is hard — I’m in Cairo, you’re in Luxor — but love doesn’t need a map to show up.',
      'On 16 March I sent you your first flowers, all the way from Cairo to Luxor.',
      'I wanted you to feel chosen, even from hundreds of kilometres away.',
    ],
    scene: 'flowers_cairo_luxor',
    mascotLine: 'Flowers travelled farther than my sleep schedule. Worth it.',
  },
  {
    id: 'march25',
    dateLabel: '25 March 2026',
    title: 'I told my family',
    body: [
      'On 25 March I told my family about you — about us.',
      'I was nervous in that way you only get when something really matters.',
      'They listened, they met the idea of you with open hearts… and they approved. Fully.',
    ],
    scene: 'family_approved',
    mascotLine: 'Officially: family-approved crush upgraded to family-approved love.',
  },
  {
    id: 'march27',
    dateLabel: '27 March 2026',
    title: 'I talked to your father',
    body: [
      'On 27 March I talked to your father — properly, respectfully, heart in my throat.',
      'I wanted him to hear who I am, how I care about you, and that I’m serious.',
      'That conversation mattered to me more than almost any meeting I’ve ever had.',
    ],
    scene: 'talked_to_father',
    mascotLine: 'Respect mode: ON. Dad chat survived. Legend.',
  },
  {
    id: 'april3',
    dateLabel: '3 April 2026',
    title: 'Our first gram of gold',
    body: [
      'I sent you money — and you went and bought our first gold. One gram. Literally one gram. xD',
      'It’s tiny, it’s ridiculous, and it’s ours. A little shiny proof that “we’re doing this” doesn’t need to be loud.',
      'I smile every time I think about that gram existing somewhere because of us.',
    ],
    scene: 'first_gold_gram',
    mascotLine: 'Investment portfolio: 1g gold + infinite chaos. Solid.',
  },
  {
    id: 'april9',
    dateLabel: '9 April 2026',
    title: 'The Palitos mission',
    body: [
      'Out of nowhere you said you wished you had Palitos — that snack you love and can never find.',
      'I was in Cairo. You were in Luxor. So I called supermarket after supermarket across Luxor until someone finally had them.',
      'I got them to you. You were so, so, so happy — and seeing you like that made me happier than the snack ever could.',
    ],
    scene: 'palitos_luxor_quest',
    mascotLine: 'Detective dog rating this case: 14/10. Snack acquired. Tail velocity: illegal.',
  },
  {
    id: 'april15',
    dateLabel: '15 April 2026',
    title: 'The dress I didn’t get — at first',
    body: [
      'You fell in love with a dress style that just wasn’t my taste — and I kept saying no, again and again.',
      'You got upset, and I hated that I made you feel wrong for wanting to feel pretty.',
      'I came around: what matters isn’t my opinion on the fabric — it’s you feeling good in your own skin. I want you happy, confident, and glowing — wear what makes you feel like you.',
    ],
    scene: 'dress_april_love',
    mascotLine: 'Moral of the story: her smile > my stubbornness. Always.',
  },
]

export const outro = {
  title: 'For you, Roro',
  body: [
    'This is our story — the short version, drawn in sticks and hearts.',
    'Every chapter from here is one I want to write with you.',
    'Thank you for turning my quiet nights into something worth coming home to.',
  ],
}

/** First tap: fake-out. Second tap: real letter below. */
export const outroSurpriseJoke = {
  /** Big Arabic punchline */
  arabicLine: 'اه يا حبيبي',
  /** Playful subline (English so the site stays readable) */
  tease: 'Got you. That was the plot twist.',
  hint: 'Tap again — I’m actually serious this time.',
  /** Second button */
  realButtonLabel: 'Okay… show me the real one',
}

/** Revealed on second tap — your promises, polished but still your voice. */
export const outroSurprise = {
  salutation: 'Roro,',
  paragraphs: [
    'Whatever you need, whenever you need it — I’ll be here. Any time, any place, for anything. You don’t have to carry the weight alone; I want to stand beside you in all of it.',
    'I’ll be your dream man — not in a movie line kind of way, but in the real way: loyal, gentle, and completely yours. Because you are already my dream woman. Literally. You’re not a phase or a “we’ll see” — you’re the name my heart knows by heart.',
    'You are the joy in my life: the laugh I reach for, the softness I think about when the day gets loud, the peace I feel even when we’re far apart.',
    'I love you — clearly, deeply, without a backup plan.',
    'And I need you to hear this too, so you never doubt it: don’t worry — I won’t be a bad man. I’ll honor you, protect your heart, and keep choosing you with respect, every single day I’m lucky enough to get.',
  ],
  closing: 'All of me, for all of you — always.',
  signOff: '— MSTF',
}
