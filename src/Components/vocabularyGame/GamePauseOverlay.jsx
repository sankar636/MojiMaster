import { Play } from 'lucide-react';

const GamePauseOverlay = ({ onResume }) => (
  <div className="vocab-game__overlay">
    <div className="vocab-game__overlay-card">
      <p className="vocab-game__eyebrow">Game paused</p>
      <h2>Take a breath.</h2>
      <button type="button" className="vocab-game__primary-btn" onClick={onResume}>
        <Play size={17} /> Resume
      </button>
    </div>
  </div>
);

export default GamePauseOverlay;
