import {
  vocabularyData,
  MAX_AVAILABLE_VOCAB_LESSON,
} from './vocabulary/index.js';
import {
  questionAnswerData,
  MAX_AVAILABLE_QUESTION_LESSON as MAX_AVAILABLE_GRAMMAR_QUESTION_LESSON,
} from './questions/index.js';
import { generateVocabMcqQuestions } from './questions/mcqGenerator.js';

export const TOTAL_LESSONS = 25; // per the spec (Lesson 1 – Lesson 25 selector)

// Small kana that attach to the previous character to form one mora
// (きゃ, しゅ, ちょ, etc.) — used so word-length counts mora, not raw
// characters, matching how src/data/kana.js already defines a "word"
// (2-4 mora) for the existing kana typing test.
const SMALL_KANA = new Set(['ゃ', 'ゅ', 'ょ', 'ャ', 'ュ', 'ョ']);

/**
 * Count the number of mora (kana "beats") in a reading string.
 * This is the same unit the existing kana typing test uses for word length,
 * so vocabulary/Q&A length filtering stays consistent with it.
 */
export function countMora(reading) {
  if (!reading) return 0;
  let count = 0;
  for (const ch of reading) {
    if (SMALL_KANA.has(ch)) continue; // combines with previous mora
    count += 1;
  }
  return count;
}

/** Get vocabulary items whose lesson is within [fromLesson, toLesson] inclusive. */
export function getVocabularyByLessonRange(fromLesson, toLesson) {
  const lo = Math.min(fromLesson, toLesson);
  const hi = Math.max(fromLesson, toLesson);
  return vocabularyData.filter(
    (item) => item.lesson >= lo && item.lesson <= hi,
  );
}

/**
 * Get every Q&A MCQ item (hand-authored grammar-pattern + auto-generated
 * vocabulary MCQ) whose lesson is within [fromLesson, toLesson] inclusive.
 */
export function getQuestionsByLessonRange(fromLesson, toLesson) {
  const lo = Math.min(fromLesson, toLesson);
  const hi = Math.max(fromLesson, toLesson);

  const grammarQuestions = questionAnswerData.filter(
    (item) => item.lesson >= lo && item.lesson <= hi,
  );

  const vocabPool = vocabularyData.filter(
    (item) => item.lesson >= lo && item.lesson <= hi,
  );
  const vocabQuestions = generateVocabMcqQuestions(vocabPool, vocabularyData);

  return [...grammarQuestions, ...vocabQuestions];
}

/**
 * Keep only vocabulary items whose reading is at most `maxLength` mora long
 * (i.e. length 1 through maxLength are all included, nothing longer).
 */
export function filterByWordLength(words, maxLength) {
  if (!maxLength) return words;
  return words.filter((w) => countMora(w.reading ?? w.japanese) <= maxLength);
}

// Q&A now draws on both hand-authored grammar questions (Lessons 1–4 so
// far) and auto-generated vocab MCQs (Lessons 1–10, same as vocabulary
// data). The effective max for the lesson-range UI is the larger of the two,
// since a range like "8–10" still returns real (vocab) questions even
// though it has no grammar-pattern content yet.
export const MAX_AVAILABLE_QUESTION_LESSON = MAX_AVAILABLE_VOCAB_LESSON;
export { MAX_AVAILABLE_VOCAB_LESSON, MAX_AVAILABLE_GRAMMAR_QUESTION_LESSON };

// import { vocabularyData, MAX_AVAILABLE_VOCAB_LESSON } from "./vocabulary/index.js";
// import { questionAnswerData, MAX_AVAILABLE_QUESTION_LESSON } from "./questions/index.js";

// export const TOTAL_LESSONS = 25; // per the spec (Lesson 1 – Lesson 25 selector)

// // Small kana that attach to the previous character to form one mora
// // (きゃ, しゅ, ちょ, etc.) — used so word-length counts mora, not raw
// // characters, matching how src/data/kana.js already defines a "word"
// // (2-4 mora) for the existing kana typing test.
// const SMALL_KANA = new Set(["ゃ", "ゅ", "ょ", "ャ", "ュ", "ョ"]);

// /**
//  * Count the number of mora (kana "beats") in a reading string.
//  * This is the same unit the existing kana typing test uses for word length,
//  * so vocabulary/Q&A length filtering stays consistent with it.
//  */
// export function countMora(reading) {
//   if (!reading) return 0;
//   let count = 0;
//   for (const ch of reading) {
//     if (SMALL_KANA.has(ch)) continue; // combines with previous mora
//     count += 1;
//   }
//   return count;
// }

// /** Get vocabulary items whose lesson is within [fromLesson, toLesson] inclusive. */
// export function getVocabularyByLessonRange(fromLesson, toLesson) {
//   const lo = Math.min(fromLesson, toLesson);
//   const hi = Math.max(fromLesson, toLesson);
//   return vocabularyData.filter((item) => item.lesson >= lo && item.lesson <= hi);
// }

// /** Get question/answer items whose lesson is within [fromLesson, toLesson] inclusive. */
// export function getQuestionsByLessonRange(fromLesson, toLesson) {
//   const lo = Math.min(fromLesson, toLesson);
//   const hi = Math.max(fromLesson, toLesson);
//   return questionAnswerData.filter((item) => item.lesson >= lo && item.lesson <= hi);
// }

// /**
//  * Keep only vocabulary items whose reading is at most `maxLength` mora long
//  * (i.e. length 1 through maxLength are all included, nothing longer).
//  */
// export function filterByWordLength(words, maxLength) {
//   if (!maxLength) return words;
//   return words.filter((w) => countMora(w.reading ?? w.japanese) <= maxLength);
// }

// export { MAX_AVAILABLE_VOCAB_LESSON, MAX_AVAILABLE_QUESTION_LESSON };
