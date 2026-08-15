const LENGTHS = [1, 2, 3, 4, 5, 10, 20, 100];

const WordLengthSelector = ({ maxLength, onChange }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-sub">
      <span>Max word length</span>
      <div className="flex items-center gap-1">
        {LENGTHS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`w-7 h-7 rounded transition-colors ${
              maxLength === n
                ? 'bg-accent text-bg font-semibold'
                : 'bg-bgSub text-sub hover:text-text'
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
};
export default WordLengthSelector;
