// Question & Answer MCQ data — Minna no Nihongo I, Lesson 1.
// Sourced from the Lesson 1 workbook fill-in-the-blank exercise the project
// owner shared (Ex. 4: confirmation questions with はい/いいえ answers, and
// Ex. 5: particle-choice sentences). A few extra items follow the same
// pattern with different names/vocabulary from the same lesson.
//
// type: "fill-blank" — a Japanese dialogue with one blank; choose the word
//        that completes the question so it matches the given answer.
// type: "particle"   — a single sentence with one blank; choose the
//        correct grammar particle.

const lesson1 = [
  {
    lesson: 1,
    type: 'fill-blank',
    passage: null,
    question: 'あなたは（　　）ですか。\n……はい、ミラーです。',
    options: ['ミラーさん', 'がくせい', 'せんせい', 'いしゃ'],
    correctIndex: 0,
    explanation:
      "あなたはミラーさんですか。 — Are you Mr. Miller? …Yes, I'm Miller.",
  },
  {
    lesson: 1,
    type: 'fill-blank',
    passage: null,
    question: 'ミラーさんは（　　）ですか。\n……はい、アメリカ人です。',
    options: ['アメリカ人', 'イギリス人', 'にほんじん', 'ちゅうごくじん'],
    correctIndex: 0,
    explanation:
      'ミラーさんはアメリカ人ですか。 — Is Mr. Miller American? …Yes, he is.',
  },
  {
    lesson: 1,
    type: 'fill-blank',
    passage: null,
    question:
      'ワットさんも（　　）ですか。\n……いいえ、アメリカ人じゃ ありません。イギリス人です。',
    options: ['アメリカ人', 'いしゃ', 'がくせい', 'せんせい'],
    correctIndex: 0,
    explanation:
      "ワットさんもアメリカ人ですか。 — Is Mr. Watt also American? …No, he's not American. He's British.",
  },
  {
    lesson: 1,
    type: 'fill-blank',
    passage: null,
    question: 'あの　方は（　　）ですか。\n……サントスさんです。',
    options: ['だれ', 'どなた', 'なにじん', 'なんさい'],
    correctIndex: 1,
    explanation:
      "あの方はどなたですか。 — Who is that person? (polite) …That's Mr. Santos.",
  },
  {
    lesson: 1,
    type: 'fill-blank',
    passage: null,
    question: 'テレーザちゃんは（　　）ですか。\n……9歳です。',
    options: ['だれ', 'どなた', 'なんさい', 'なにじん'],
    correctIndex: 2,
    explanation:
      "テレーザちゃんはなんさいですか。 — How old is Teresa? …She's 9.",
  },
  {
    lesson: 1,
    type: 'particle',
    passage: null,
    question: 'わたし（　　）ミラーです。',
    options: ['は', 'が', 'も', 'の'],
    correctIndex: 0,
    explanation: 'わたしはミラーです。 — I am Miller. (topic particle wa)',
  },
  {
    lesson: 1,
    type: 'particle',
    passage: null,
    question: 'ワンさん（　　）医者です。',
    options: ['は', 'も', 'の', 'か'],
    correctIndex: 0,
    explanation: 'ワンさんは医者です。 — Mr. Wang is a doctor.',
  },
  {
    lesson: 1,
    type: 'particle',
    passage: null,
    question: 'カリナさん（　　）先生ですか。\n……いいえ、先生じゃ ありません。',
    options: ['は', 'が', 'も', 'の'],
    correctIndex: 0,
    explanation:
      "カリナさんは先生ですか。 — Is Ms. Karina a teacher? …No, she isn't.",
  },
  {
    lesson: 1,
    type: 'particle',
    passage: null,
    question: 'ミラーさんは IMC（　　）社員です。',
    options: ['の', 'は', 'も', 'が'],
    correctIndex: 0,
    explanation:
      'ミラーさんはIMCの社員です。 — Mr. Miller is an employee of IMC.',
  },
  {
    lesson: 1,
    type: 'particle',
    passage: null,
    question: 'ミラーさんは会社員です。サントスさん（　　）会社員です。',
    options: ['も', 'は', 'の', 'か'],
    correctIndex: 0,
    explanation:
      "サントスさんも会社員です。 — Mr. Santos is also a company employee. (mo = 'also')",
  },
];

export default lesson1;

// // Question & Answer practice data — PLACEHOLDER.
// //
// // The exact Q&A pattern/format has not been confirmed by the project owner
// // yet (see KenoType spec, section 12: "I will provide the exact
// // question/answer pattern that I want to use... implement it exactly").
// //
// // Until then, this file seeds the Q&A mode with a few *genuine* example
// // sentences taken directly from the Lesson 1 grammar-explanation section of
// // the provided textbook PDF (numbered examples ④⑤⑥), so the screen has
// // real, sourced content to review — not invented dialogue.
// //
// // Fields:
// //   question     - the Japanese question, in romaji (as given in the source)
// //   answer       - the Japanese answer, in romaji (as given in the source), for display
// //   romaji       - the exact string the learner should type (answer, lowercase,
// //                  punctuation stripped) — this is what gets checked against input
// //   meaning      - English translation of the exchange

// const lesson1 = [
//   {
//     lesson: 1,
//     question: "Mirā-san wa Amerika-jin desu ka.",
//     answer: "Hai, Amerika-jin desu.",
//     romaji: "hai amerikajin desu",
//     meaning: "Is Mr. Miller an American? — Yes, he is.",
//   },
//   {
//     lesson: 1,
//     question: "Mirā-san wa sensei desu ka.",
//     answer: "Iie, sensei ja arimasen.",
//     romaji: "iie sensei ja arimasen",
//     meaning: "Is Mr. Miller a teacher? — No, he is not.",
//   },
//   {
//     lesson: 1,
//     question: "Ano kata wa donata desu ka.",
//     answer: "Mirā-san desu.",
//     romaji: "miraasan desu",
//     meaning: "Who is that man? — That's Mr. Miller.",
//   },
// ];

// export default lesson1;
