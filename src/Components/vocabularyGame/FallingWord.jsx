const FallingWord = ({ word, duration, paused, blasting, onMiss }) => {
  if (!word) return null;

  return (
    <div
      className={`vocab-game__falling-word${blasting ? ' is-blasting' : ''}`}
      style={{
        '--fall-duration': `${duration}ms`,
        '--word-left': `${word.left}%`,
        animationPlayState: paused ? 'paused' : 'running',
      }}
      onAnimationEnd={onMiss}
      aria-label={`Japanese vocabulary word: ${word.japanese}`}
    >
      <span className="vocab-game__word-glow" aria-hidden="true" />
      <span className="vocab-game__word-text">{word.japanese}</span>
      <span className="vocab-game__word-trail" aria-hidden="true" />
    </div>
  );
};

export default FallingWord;
