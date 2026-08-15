// Question & Answer MCQ data — Minna no Nihongo I, Lesson 4.
// Adapted from the project owner's own Test_Chapter-4.pdf: particle-choice
// questions (Section 2) and a short reading passage with comprehension
// questions (Section 3). Vocabulary MCQs for this lesson (Section-1-style,
// "What is the meaning of X?") are generated automatically from
// src/data/vocabulary/lesson4.js by mcqGenerator.js — no need to duplicate
// them here.

const passage =
  'Yamada-san wa ABC kaisha no shain desu。\n' +
  'Mainichi asa 6 ji ni okimasu。\n' +
  '7 ji han ni ie o demasu。\n' +
  'Kaisha wa 9 ji kara 5 ji made desu。\n' +
  'Getsuyoubi kara kinyoubi made hatarakimasu。\n' +
  'Demo, kinyoubi wa 4 ji made desu。\n' +
  'Getsuyoubi wa 8 ji kara kaigishitsu de kaigi ga arimasu。\n' +
  'Kaigi wa 9 ji made desu。\n' +
  'Kyou wa kinyoubi desu。\n' +
  'Yamada-san wa ima kaisha ni imasu。';

const lesson4 = [
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Watashi wa 6 ji (　　) okimasu.',
    options: ['ni', 'de', 'wo', 'ga'],
    correctIndex: 0,
    explanation:
      'Watashi wa 6 ji ni okimasu. — I get up at 6. (ni marks a clock time)',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Kaisha wa 9 ji (　　) 5 ji made desu.',
    options: ['kara', 'ni', 'wo', 'de'],
    correctIndex: 0,
    explanation:
      'Kaisha wa 9 ji kara 5 ji made desu. — Work is from 9 to 5. (kara = from)',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Watashi wa getsuyoubi (　　) hatarakimasu.',
    options: ['ni', 'wo', 'de', 'ga'],
    correctIndex: 0,
    explanation: 'Watashi wa getsuyoubi ni hatarakimasu. — I work on Monday.',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Gakkou wa 8 ji han (　　) hajimarimasu.',
    options: ['ni', 'de', 'made', 'wo'],
    correctIndex: 0,
    explanation: 'Gakkou wa 8 ji han ni hajimarimasu. — School starts at 8:30.',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Watashi wa mainichi 7 ji (　　) nemasu.',
    options: ['ni', 'de', 'wo', 'ga'],
    correctIndex: 0,
    explanation:
      'Watashi wa mainichi 7 ji ni nemasu. — I go to bed at 7 every day.',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Kaisha wa nanji (　　) nanji made desu ka.',
    options: ['kara', 'ni', 'de', 'ga'],
    correctIndex: 0,
    explanation:
      'Kaisha wa nanji kara nanji made desu ka. — From what time to what time is work?',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Watashi wa raishuu Nihon (　　) ikimasu.',
    options: ['e', 'wo', 'de', 'kara'],
    correctIndex: 0,
    explanation:
      "Watashi wa raishuu Nihon e ikimasu. — I'm going to Japan next week.",
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Gakkou wa 9 ji kara 3 ji (　　) desu.',
    options: ['made', 'ni', 'de', 'ga'],
    correctIndex: 0,
    explanation: 'Gakkou wa 9 ji kara 3 ji made desu. — School is from 9 to 3.',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Anata wa nanji (　　) benkyou shimasu ka.',
    options: ['ni', 'de', 'wo', 'ga'],
    correctIndex: 0,
    explanation:
      'Anata wa nanji ni benkyou shimasu ka. — What time do you study?',
  },
  {
    lesson: 4,
    type: 'particle',
    passage: null,
    question: 'Watashi wa doyoubi (　　) yasumimasu.',
    options: ['ni', 'de', 'wo', 'kara'],
    correctIndex: 0,
    explanation: 'Watashi wa doyoubi ni yasumimasu. — I rest on Saturday.',
  },
  {
    lesson: 4,
    type: 'reading',
    passage,
    question: 'Kyou wa nan youbi desu ka.',
    options: ['Getsuyoubi', 'Kinyoubi', 'Doyoubi', 'Nichiyoubi'],
    correctIndex: 1,
    explanation: 'The passage says "Kyou wa kinyoubi desu" — today is Friday.',
  },
  {
    lesson: 4,
    type: 'reading',
    passage,
    question: 'Kinyoubi wa nanji made hatarakimasu ka.',
    options: ['5 ji made', '4 ji made', '6 ji made', '9 ji made'],
    correctIndex: 1,
    explanation:
      '"Demo, kinyoubi wa 4 ji made desu" — but on Fridays it\'s until 4.',
  },
  {
    lesson: 4,
    type: 'reading',
    passage,
    question: 'Kaisha wa nan youbi kara nan youbi made desu ka.',
    options: [
      'Getsuyoubi kara kinyoubi made',
      'Getsuyoubi kara doyoubi made',
      'Kayoubi kara kinyoubi made',
      'Mainichi',
    ],
    correctIndex: 0,
    explanation:
      '"Getsuyoubi kara kinyoubi made hatarakimasu" — works Monday to Friday.',
  },
  {
    lesson: 4,
    type: 'reading',
    passage,
    question: 'Getsuyoubi no kaigi wa nanji kara desu ka.',
    options: ['9 ji kara', '8 ji kara', '6 ji kara', '7 ji han kara'],
    correctIndex: 1,
    explanation:
      '"Getsuyoubi wa 8 ji kara kaigishitsu de kaigi ga arimasu" — the meeting starts at 8.',
  },
  {
    lesson: 4,
    type: 'reading',
    passage,
    question: 'Ima Yamada-san wa doko ni imasu ka.',
    options: [
      'Ie ni imasu',
      'Kaigishitsu ni imasu',
      'Kaisha ni imasu',
      'Toshokan ni imasu',
    ],
    correctIndex: 2,
    explanation:
      '"Yamada-san wa ima kaisha ni imasu" — Mr. Yamada is at the office now.',
  },
];

export default lesson4;
