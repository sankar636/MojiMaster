const MODES = [
  { id: 'meaning', label: 'English Meaning' },
  { id: 'reading', label: 'Hiragana (Reading)' },
];

const AnswerModeSelector = ({ answerMode, onChange }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-sub">
      <span>Answer with</span>
      <div className="flex items-center gap-1 rounded-lg p-1 bg-bg">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
              answerMode === m.id
                ? 'bg-accent text-bg'
                : 'text-sub hover:text-text'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnswerModeSelector;
