const COUNTS = [10, 20, 30, 50];

const QuestionCountSelector = ({ count, onChange }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-sub">
      <span>Questions</span>
      <div className="flex items-center gap-1">
        {COUNTS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`px-2 py-1 rounded transition-colors ${
              count === n
                ? 'bg-accent text-bg font-semibold'
                : 'bg-bgSub text-sub hover:text-text'
            }`}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => onChange(null)}
          className={`px-2 py-1 rounded transition-colors ${
            count === null
              ? 'bg-accent text-bg font-semibold'
              : 'bg-bgSub text-sub hover:text-text'
          }`}
        >
          all
        </button>
      </div>
    </div>
  );
};

export default QuestionCountSelector;
