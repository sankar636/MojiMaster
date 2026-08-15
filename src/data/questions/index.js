import lesson1 from './lesson1.js';
import lesson2 from './lesson2.js';
import lesson3 from './lesson3.js';
import lesson4 from './lesson4.js';

// Flat list of every hand-authored (grammar-pattern: fill-blank / particle /
// reading) question currently available. See lesson1.js for field shapes.
// Vocabulary MCQs are NOT included here — they're generated on demand from
// vocabulary data by mcqGenerator.js, which covers Lessons 1–10 already.
// Add more src/data/questions/lessonN.js files (same shape) and append them
// below as more grammar-pattern content is authored.
export const questionAnswerData = [
  ...lesson1,
  ...lesson2,
  ...lesson3,
  ...lesson4,
];

// Highest lesson with hand-authored grammar-pattern questions. Vocab MCQs
// extend further than this (see MAX_AVAILABLE_VOCAB_LESSON in lessonUtils.js).
export const MAX_AVAILABLE_QUESTION_LESSON = 4;

export default questionAnswerData;
