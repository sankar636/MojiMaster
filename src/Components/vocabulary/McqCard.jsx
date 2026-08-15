import { useEffect } from 'react';
import { Check, X } from 'lucide-react';

const TYPE_LABEL = {
  'fill-blank': 'Question Pattern',
  particle: 'Grammar Particle',
  reading: 'Reading Comprehension',
  vocab: 'Vocabulary',
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const McqCard = ({
  item,
  selectedIndex,
  answered,
  progress,
  onSelect,
  onNext,
}) => {
  // Keyboard support: 1-4 (or A-D) to pick an option, Enter/Space to advance.
  useEffect(() => {
    const handleKey = (e) => {
      if (!answered) {
        const num = Number(e.key);
        if (num >= 1 && num <= 4) {
          e.preventDefault();
          onSelect(num - 1);
        }
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [answered, onSelect, onNext]);

  if (!item) return null;

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-6 animate-fadeIn">
      <div className="flex items-center gap-3 text-xs text-subAlt font-mono">
        <span>
          {progress.current} / {progress.total} · Lesson {item.lesson}
        </span>
        <span className="px-2 py-0.5 rounded bg-bgSub text-accent">
          {TYPE_LABEL[item.type] ?? item.type}
        </span>
      </div>

      {item.passage && (
        <pre className="w-full whitespace-pre-wrap font-jp text-sm text-sub bg-bgSub rounded-lg px-4 py-3 leading-relaxed">
          {item.passage}
        </pre>
      )}

      <p className="whitespace-pre-wrap text-center font-jp text-2xl text-text leading-relaxed">
        {item.question}
      </p>

      <div className="w-full flex flex-col gap-2.5">
        {item.options.map((opt, idx) => {
          const isCorrect = idx === item.correctIndex;
          const isSelected = idx === selectedIndex;

          let stateClasses = 'bg-bgSub text-text hover:bg-subAlt/20';
          if (answered) {
            if (isCorrect)
              stateClasses = 'bg-correct/15 border border-correct text-correct';
            else if (isSelected)
              stateClasses = 'bg-error/15 border border-error text-error';
            else stateClasses = 'bg-bgSub text-subAlt';
          }

          return (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              disabled={answered}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left font-jp text-lg transition-colors ${stateClasses}`}
            >
              <span className="font-mono text-xs text-subAlt w-4">
                {OPTION_LETTERS[idx]}
              </span>
              <span className="flex-1">{opt}</span>
              {answered && isCorrect && (
                <Check size={16} className="text-correct" />
              )}
              {answered && isSelected && !isCorrect && (
                <X size={16} className="text-error" />
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="w-full flex flex-col items-center gap-3 animate-fadeIn">
          {item.explanation && (
            <p className="text-sm text-sub text-center max-w-md">
              {item.explanation}
            </p>
          )}
          <button
            onClick={onNext}
            className="px-5 py-2 rounded-lg bg-accent text-bg font-semibold transition-transform hover:scale-105"
          >
            Next
          </button>
        </div>
      )}

      {!answered && (
        <span className="text-xs text-subAlt">tap an option, or press 1–4</span>
      )}
    </div>
  );
};

export default McqCard;
