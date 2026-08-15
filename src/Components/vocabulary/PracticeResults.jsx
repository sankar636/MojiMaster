import { RotateCcw } from 'lucide-react';

const PracticeResults = ({
  mode,
  stats,
  fromLesson,
  toLesson,
  results,
  onRestart,
}) => {
  const incorrect = results.filter((r) => !r.correct);

  return (
    <div className="w-full flex flex-col items-center gap-8 py-10 animate-fadeIn">
      <span className="text-lg font-semibold text-text">
        Practice Complete!
      </span>

      <div className="flex items-end gap-16">
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl font-bold text-correct">
            {stats.correct}
          </span>
          <span className="text-sm mt-1 text-sub">correct</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl font-bold text-error">
            {stats.incorrect}
          </span>
          <span className="text-sm mt-1 text-sub">incorrect</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-5xl font-bold text-accent">
            {stats.accuracy}%
          </span>
          <span className="text-sm mt-1 text-sub">accuracy</span>
        </div>
      </div>

      <div className="flex gap-10 font-mono text-sm text-sub">
        <div className="flex flex-col items-center">
          <span className="text-text">
            {fromLesson}–{toLesson}
          </span>
          <span>lesson range</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-text">{stats.total}</span>
          <span>{mode === 'vocabulary' ? 'words' : 'questions'} practiced</span>
        </div>
      </div>

      {incorrect.length > 0 && (
        <div className="w-full max-w-md">
          <h3 className="text-sm font-semibold text-sub mb-3">Review</h3>
          <div className="flex flex-col gap-2">
            {incorrect.map((r, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-bgSub px-4 py-2 text-left"
              >
                {mode === 'vocabulary' ? (
                  <>
                    <div className="font-jp text-lg text-text">
                      {r.item.japanese}{' '}
                      <span className="font-ui text-sm text-sub">
                        → {r.item.meaning}
                      </span>
                    </div>
                    <div className="font-mono text-xs mt-1">
                      <span className="text-error">
                        Your answer: {r.typed || '(empty)'}
                      </span>
                      {'  '}
                      <span className="text-correct">
                        Correct: {r.item.romaji}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-text">{r.item.question}</div>
                    <div className="font-mono text-xs mt-1">
                      <span className="text-error">
                        Your answer: {r.typed || '(empty)'}
                      </span>
                      {'  '}
                      <span className="text-correct">
                        Correct: {r.item.answer}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-4 py-2 rounded-lg mt-2 bg-bgSub text-accent transition-transform hover:scale-105"
      >
        <RotateCcw size={16} />
        practice again
      </button>
    </div>
  );
};

export default PracticeResults;
