import { Heart, Pause, Play, Square } from 'lucide-react';

const GameHud = ({ score, bestScore, lives, paused, onPause, onEnd }) => {
  return (
    <div className="vocab-game__hud">
      <div className="vocab-game__stat">
        <span className="vocab-game__stat-label">Score</span>
        <strong>{score}</strong>
      </div>

      <div className="vocab-game__lives" aria-label={`${lives} lives remaining`}>
        <span className="vocab-game__stat-label">Lives</span>
        <span className="vocab-game__hearts">
          {Array.from({ length: 3 }, (_, index) => (
            <Heart
              key={index}
              size={18}
              fill={index < lives ? 'currentColor' : 'none'}
              className={index < lives ? 'is-alive' : 'is-empty'}
              aria-hidden="true"
            />
          ))}
        </span>
      </div>

      <div className="vocab-game__stat vocab-game__best">
        <span className="vocab-game__stat-label">Best</span>
        <strong>{bestScore}</strong>
      </div>

      <div className="vocab-game__controls">
        <button type="button" onClick={onPause} className="vocab-game__control-btn">
          {paused ? <Play size={15} /> : <Pause size={15} />}
          {paused ? 'Resume' : 'Pause'}
        </button>
        <button type="button" onClick={onEnd} className="vocab-game__control-btn vocab-game__control-btn--danger">
          <Square size={14} />
          End
        </button>
      </div>
    </div>
  );
};

export default GameHud;
