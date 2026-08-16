// Displays the current vocabulary item and echoes the user's own keystrokes
// (never the target) while they type — same "echo, don't autocomplete"
// idea as the home page's Word.jsx, just laid out for a single big item
// instead of a scrolling word list.
//
// The question is always shown in hiragana/katakana (item.japanese) only —
// no romaji is shown here, matching the typing test's existing convention
// of never displaying the answer alongside the prompt.
//
// In "meaning" answer mode the English meaning is deliberately NOT shown
// (that's what the learner has to recall and type). In "reading" mode the
// meaning is shown as a helpful hint, since it isn't the answer being
// checked.

const PROMPT_TEXT = {
  meaning: 'type the English meaning',
  reading: 'type the reading in romaji',
};

const PracticeCard = ({ item, typed, progress, answerMode }) => {
  if (!item) return null;

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
      <span className="text-xs text-subAlt font-mono">
        {progress.current} / {progress.total} · Lesson {item.lesson}
      </span>

      <div className="flex flex-col items-center gap-3 min-h-30 justify-center">
        <span className="font-jp text-5xl text-text">{item.japanese}</span>
        {answerMode === 'reading' && (
          <span className="text-base text-sub">{item.meaning}</span>
        )}
      </div>

      <div className="font-mono text-xl min-h-9 px-4 py-2 rounded-lg bg-bgSub text-text">
        {typed || <span className="text-subAlt">start typing…</span>}
        <span className="border-l border-accent animate-blink ml-px" />
      </div>

      <span className="text-xs text-subAlt">
        {PROMPT_TEXT[answerMode] ?? 'type your answer'} · press Enter to submit
      </span>
    </div>
  );
};

export default PracticeCard;
