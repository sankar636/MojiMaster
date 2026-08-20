import { Gamepad2, Heart, Zap } from 'lucide-react';

const GameStartScreen = ({ onStart, bestScore }) => {
  return (
    <section className="vocab-game__start-card">
      <div className="vocab-game__start-icon">
        <Gamepad2 size={28} />
      </div>
      <p className="vocab-game__eyebrow">Arcade Vocabulary Practice</p>
      <h1>Japanese Vocabulary Rush</h1>
      <p className="vocab-game__start-copy">
        Read the Japanese word, type its English meaning, and destroy it before it reaches the bottom.
      </p>

      <div className="vocab-game__rules">
        <div><Zap size={17} /><span>Correct answer - 1 point</span></div>
        <div><Heart size={17} /><span>You have 3 lives</span></div>
      </div>

      <button type="button" className="vocab-game__primary-btn" onClick={onStart}>
        Start Game
      </button>

      <p className="vocab-game__best-start">Best score: {bestScore}</p>
    </section>
  );
};

export default GameStartScreen;
