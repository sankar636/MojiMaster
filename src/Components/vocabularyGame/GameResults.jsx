import { Check, RotateCcw, Trophy, X } from 'lucide-react';

const ResultIcon = ({ result }) => {
  if (result === 'correct') return <Check size={15} />;
  return <X size={15} />;
};

const GameResults = ({ score, lives, history, bestScore, reason, onRestart }) => {
  const correct = history.filter((item) => item.result === 'correct').length;
  const missed = history.filter((item) => item.result === 'missed').length;
  const attempted = history.length;
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;

  return (
    <section className="vocab-game__results">
      <div className="vocab-game__results-heading">
        <div className="vocab-game__results-icon"><Trophy size={26} /></div>
        <p className="vocab-game__eyebrow">{reason === 'game-over' ? 'Game over' : 'Game ended'}</p>
        <h1>Final Score: {score}</h1>
        <p>{lives === 0 ? 'You used all three lives.' : 'Nice run. Ready for another round?'}</p>
      </div>

      <div className="vocab-game__summary-grid">
        <div><strong>{correct}</strong><span>Correct</span></div>
        <div><strong>{missed}</strong><span>Missed</span></div>
        <div><strong>{accuracy}%</strong><span>Accuracy</span></div>
        <div><strong>{bestScore}</strong><span>Best</span></div>
      </div>

      <div className="vocab-game__history">
        <div className="vocab-game__history-header">
          <h2>Vocabulary Review</h2>
          <span>{history.length} words</span>
        </div>

        {history.length === 0 ? (
          <p className="vocab-game__empty">No words were answered in this round.</p>
        ) : (
          <div className="vocab-game__history-list">
            {history.map((item) => (
              <div className={`vocab-game__history-row ${item.result}`} key={item.id}>
                <span className="vocab-game__history-icon"><ResultIcon result={item.result} /></span>
                <span className="vocab-game__history-japanese">{item.japanese}</span>
                <span className="vocab-game__history-answer">{item.userAnswer || '—'}</span>
                <span className="vocab-game__history-meaning">{item.meaning}</span>
                <span className="vocab-game__history-result">
                  {item.result === 'correct' ? 'Correct' : 'Missed'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <button type="button" className="vocab-game__primary-btn" onClick={onRestart}>
        <RotateCcw size={17} /> Play Again
      </button>
    </section>
  );
};

export default GameResults;
