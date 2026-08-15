import LessonRangeSelector from './LessonRangeSelector.jsx';
import WordLengthSelector from './WordLengthSelector.jsx';
import QuestionCountSelector from './QuestionCountSelector.jsx';
import { Play } from 'lucide-react';

const PracticeConfigPanel = ({
  fromLesson,
  toLesson,
  onRangeChange,
  maxAvailable,
  showWordLength,
  maxWordLength,
  onWordLengthChange,
  questionCount,
  onQuestionCountChange,
  poolCount,
  itemLabel, // "word" | "question"
  onStart,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-5 rounded-lg px-6 py-6 bg-bgSub">
      <LessonRangeSelector
        fromLesson={fromLesson}
        toLesson={toLesson}
        onChange={onRangeChange}
        maxAvailable={maxAvailable}
      />

      {showWordLength && (
        <WordLengthSelector
          maxLength={maxWordLength}
          onChange={onWordLengthChange}
        />
      )}

      <QuestionCountSelector
        count={questionCount}
        onChange={onQuestionCountChange}
      />

      <div className="text-sm text-sub">
        {poolCount} {itemLabel}
        {poolCount === 1 ? '' : 's'} available for this range
      </div>

      <button
        onClick={onStart}
        disabled={poolCount === 0}
        className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-semibold transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
      >
        <Play size={16} />
        Start Practice
      </button>

      {poolCount === 0 && (
        <p className="text-xs text-error max-w-sm text-center">
          No {itemLabel}s available for this combination yet — try a lesson
          range within 1–{maxAvailable}
          {showWordLength ? ' or a higher max word length' : ''}.
        </p>
      )}
    </div>
  );
};

export default PracticeConfigPanel;
