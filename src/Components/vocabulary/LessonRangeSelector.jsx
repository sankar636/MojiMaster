import { TOTAL_LESSONS } from '../../data/lessonUtils.js';

const LESSON_OPTIONS = Array.from({ length: TOTAL_LESSONS }, (_, i) => i + 1);

const LessonRangeSelector = ({
  fromLesson,
  toLesson,
  onChange,
  maxAvailable,
}) => {
  const handleFrom = (val) => {
    const n = Number(val);
    onChange(n, Math.max(n, toLesson));
  };
  const handleTo = (val) => {
    const n = Number(val);
    onChange(Math.min(fromLesson, n), n);
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-sub">
          From
          <select
            value={fromLesson}
            onChange={(e) => handleFrom(e.target.value)}
            className="bg-bg text-text border border-subAlt rounded px-2 py-1 outline-none"
          >
            {LESSON_OPTIONS.map((n) => (
              <option key={n} value={n}>
                Lesson {n}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-sub">
          To
          <select
            value={toLesson}
            onChange={(e) => handleTo(e.target.value)}
            className="bg-bg text-text border border-subAlt rounded px-2 py-1 outline-none"
          >
            {LESSON_OPTIONS.map((n) => (
              <option key={n} value={n}>
                Lesson {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      {toLesson > maxAvailable && (
        <div className="text-xs text-error text-center mt-2">
          Only Lessons 1–{maxAvailable} have content loaded so far
        </div>
      )}
    </div>
  );
};

export default LessonRangeSelector;
