// Turns vocabulary items into 4-option multiple-choice questions, in the
// same style as Test_Chapter-4.pdf's Section 1 ("What is the meaning of
// 'asa'? a) Night b) Morning c) Evening d) Afternoon").
//
// Rather than hand-authoring 4 meaning-options for every one of the ~250
// vocabulary items already in src/data/vocabulary, we generate them from
// the vocabulary data itself: the correct meaning + 3 other meanings drawn
// from the same lesson range (falling back to the full vocabulary list if
// the range is too small to supply 3 distinct distractors). This means
// vocab MCQs are available for every lesson that has vocabulary data
// (currently 1–10), even though the hand-written grammar-pattern questions
// below only go up to Lesson 4 so far.

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * @param {Array} pool - vocabulary items already filtered to the selected lesson range
 * @param {Array} fallbackPool - full vocabulary list, used as a backup distractor
 *   source when `pool` is too small (e.g. a single-lesson range) to supply 3
 *   distinct wrong answers.
 */
export function generateVocabMcqQuestions(pool, fallbackPool = pool) {
  return pool.map((item) => {
    let distractorSource = pool.filter((w) => w.meaning !== item.meaning);
    if (distractorSource.length < 3) {
      distractorSource = fallbackPool.filter((w) => w.meaning !== item.meaning);
    }

    const distractors = shuffle(distractorSource)
      .slice(0, 3)
      .map((w) => w.meaning);
    // Extremely small datasets (e.g. a lesson with <4 unique meanings total)
    // could still come up short — pad defensively rather than crash.
    while (distractors.length < 3) distractors.push('(none of the above)');

    const options = shuffle([item.meaning, ...distractors]);
    const correctIndex = options.indexOf(item.meaning);

    return {
      lesson: item.lesson,
      type: 'vocab',
      passage: null,
      question: `What is the meaning of "${item.romaji}"?`,
      options,
      correctIndex,
      explanation: `${item.japanese} (${item.romaji}) means "${item.meaning}".`,
    };
  });
}
