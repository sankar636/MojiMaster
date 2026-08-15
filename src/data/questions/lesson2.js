// Question & Answer MCQ data — Minna no Nihongo I, Lesson 2.
// Self-authored, following the same fill-blank/particle pattern as
// lesson1.js, built from Lesson 2 grammar (kore/sore/are, kono/sono/ano,
// N1 no N2) and vocabulary (book, dictionary, notebook, etc.).

const lesson2 = [
  {
    lesson: 2,
    type: 'fill-blank',
    passage: null,
    question: '（　　）は　じしょですか。\n……いいえ、ざっしです。',
    options: ['これ', 'それ', 'あれ', 'どれ'],
    correctIndex: 0,
    explanation:
      "これはじしょですか。 — Is this a dictionary? …No, it's a magazine. (kore = thing near the speaker)",
  },
  {
    lesson: 2,
    type: 'fill-blank',
    passage: null,
    question: 'すみません、（　　）ほんは　だれのですか。\n……わたしのです。',
    options: ['どの', 'この', 'その', 'あの'],
    correctIndex: 1,
    explanation:
      "このほんはだれのですか。 — Whose book is this (here)? …It's mine. (kono N = this N, near speaker)",
  },
  {
    lesson: 2,
    type: 'fill-blank',
    passage: null,
    question:
      'テレビの　うしろの　かばんは（　　）ですか。\n……あれは　わたしのです。',
    options: ['これ', 'それ', 'あれ', 'どなた'],
    correctIndex: 2,
    explanation:
      'あれはわたしのです。 — That one (over there, far from both speakers) is mine.',
  },
  {
    lesson: 2,
    type: 'fill-blank',
    passage: null,
    question: 'これは　なんの　ほんですか。\n……（　　）の　ほんです。',
    options: ['コンピューター', 'コーヒー', 'がくせい', 'せんせい'],
    correctIndex: 0,
    explanation: "コンピューターのほんです。 — It's a book about computers.",
  },
  {
    lesson: 2,
    type: 'particle',
    passage: null,
    question: 'これは　わたし（　　）ほんです。',
    options: ['の', 'は', 'も', 'か'],
    correctIndex: 0,
    explanation: 'これはわたしの本です。 — This is my book. (no = possession)',
  },
  {
    lesson: 2,
    type: 'particle',
    passage: null,
    question:
      'この　かさは　あなた（　　）ですか。\n……いいえ、わたしのじゃ ありません。',
    options: ['の', 'は', 'が', 'も'],
    correctIndex: 0,
    explanation:
      "このかさはあなたのですか。 — Is this umbrella yours? …No, it's not mine.",
  },
  {
    lesson: 2,
    type: 'particle',
    passage: null,
    question: 'ミラーさん（　　）IMCの　しゃいんですか。',
    options: ['は', 'の', 'も', 'が'],
    correctIndex: 0,
    explanation:
      'ミラーさんはIMCの社員ですか。 — Is Mr. Miller an employee of IMC?',
  },
  {
    lesson: 2,
    type: 'fill-blank',
    passage: null,
    question: 'それは　テレホンカードですか。\n……はい、（　　）。',
    options: ['そうです', 'ちがいます', 'どうぞ', 'どうも'],
    correctIndex: 0,
    explanation:
      'はい、そうです。 — Yes, it is. (affirmative reply to a yes/no noun-sentence question)',
  },
];

export default lesson2;

// // Question & Answer practice data — PLACEHOLDER.
// // See lesson1.js in this folder for why this is a placeholder and its field meanings.
// // These come from the Lesson 2 grammar-explanation examples ⑤⑥⑧ in the source PDF.

// const lesson2 = [
//   {
//     lesson: 2,
//     question: "Sore wa terehon kādo desu ka.",
//     answer: "Hai, sō desu.",
//     romaji: "hai sou desu",
//     meaning: "Is that a telephone card? — Yes, it is.",
//   },
//   {
//     lesson: 2,
//     question: "Sore wa terehon kādo desu ka.",
//     answer: "Iie, sō ja arimasen.",
//     romaji: "iie sou ja arimasen",
//     meaning: "Is that a telephone card? — No, it isn't.",
//   },
//   {
//     lesson: 2,
//     question: "Kore wa 9 desu ka, 7 desu ka.",
//     answer: "9 desu.",
//     romaji: "9 desu",
//     meaning: "Is this a 9 or a 7? — It's a 9.",
//   },
// ];

// export default lesson2;
