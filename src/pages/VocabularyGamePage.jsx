import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Header from '../Components/Header.jsx';
import FallingWord from '../Components/vocabularyGame/FallingWord.jsx';
import GameHud from '../Components/vocabularyGame/GameHud.jsx';
import GamePauseOverlay from '../Components/vocabularyGame/GamePauseOverlay.jsx';
import GameResults from '../Components/vocabularyGame/GameResults.jsx';
import GameStartScreen from '../Components/vocabularyGame/GameStartScreen.jsx';
import { vocabularyData } from '../data/vocabulary/index.js';
import {
  GAME_CONFIG,
  getAcceptableAnswers,
  getFallDuration,
  isVocabularyAnswerCorrect,
  shuffle,
} from '../Components/vocabularyGame/gameUtils.js';
import './VocabularyGamePage.css';

const BEST_SCORE_KEY = 'mojimaster-vocabulary-game-best';

function getBestScore() {
  try {
    return Number.parseInt(localStorage.getItem(BEST_SCORE_KEY) ?? '0', 10) || 0;
  } catch {
    return 0;
  }
}

function saveBestScore(score) {
  try {
    const previous = getBestScore();
    const next = Math.max(previous, score);
    localStorage.setItem(BEST_SCORE_KEY, String(next));
    return next;
  } catch {
    return score;
  }
}

function preparePool() {
  return shuffle(
    vocabularyData.filter(
      (item) => item?.japanese && item?.meaning,
    ),
  );
}

function makeGameWord(item, index) {
  return {
    ...item,
    id: `${item.lesson}-${item.japanese}-${index}-${Date.now()}`,
    left: 12 + Math.random() * 76,
  };
}

const VocabularyGamePage = () => {
  const [status, setStatus] = useState('idle');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(GAME_CONFIG.maxLives);
  const [currentWord, setCurrentWord] = useState(null);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [bestScore, setBestScore] = useState(getBestScore);
  const [endReason, setEndReason] = useState(null);
  const [blasting, setBlasting] = useState(false);

  const poolRef = useRef([]);
  const poolIndexRef = useRef(0);
  const inputRef = useRef(null);
  const resolvedWordRef = useRef(null);
  const blastTimerRef = useRef(null);

  const canPlay = status === 'playing' || status === 'paused';
  const fallDuration = useMemo(() => getFallDuration(score), [score]);

  const focusInput = useCallback(() => {
    requestAnimationFrame(() => inputRef.current?.focus());
  }, []);

  const getNextWord = useCallback(() => {
    if (poolIndexRef.current >= poolRef.current.length) {
      poolRef.current = preparePool();
      poolIndexRef.current = 0;
    }

    const item = poolRef.current[poolIndexRef.current];
    poolIndexRef.current += 1;
    return item ? makeGameWord(item, poolIndexRef.current) : null;
  }, []);

  const finishGame = useCallback((reason) => {
    setStatus(reason === 'game-over' ? 'game-over' : 'ended');
    setEndReason(reason);
    setCurrentWord(null);
    setInput('');
    setBlasting(false);
    setBestScore((currentBest) => Math.max(currentBest, saveBestScore(score)));
  }, [score]);

  const spawnNextWord = useCallback(() => {
    const next = getNextWord();
    if (!next) {
      finishGame('ended');
      return;
    }
    resolvedWordRef.current = null;
    setCurrentWord(next);
    setInput('');
    setBlasting(false);
    focusInput();
  }, [finishGame, focusInput, getNextWord]);

  const startGame = useCallback(() => {
    window.clearTimeout(blastTimerRef.current);
    poolRef.current = preparePool();
    poolIndexRef.current = 0;
    resolvedWordRef.current = null;
    setScore(0);
    setLives(GAME_CONFIG.maxLives);
    setHistory([]);
    setEndReason(null);
    setBlasting(false);
    setStatus('playing');

    const first = getNextWord();
    setCurrentWord(first);
    setInput('');
    focusInput();
  }, [focusInput, getNextWord]);

  const handleMiss = useCallback(() => {
    if (status !== 'playing' || !currentWord || resolvedWordRef.current === currentWord.id) return;

    resolvedWordRef.current = currentWord.id;
    const nextLives = lives - 1;

    setHistory((items) => [
      ...items,
      {
        id: currentWord.id,
        japanese: currentWord.japanese,
        userAnswer: input.trim(),
        meaning: currentWord.meaning,
        result: 'missed',
      },
    ]);

    setLives(nextLives);

    if (nextLives <= 0) {
      finishGame('game-over');
      return;
    }

    spawnNextWord();
  }, [currentWord, finishGame, input, lives, spawnNextWord, status]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (status !== 'playing' || !currentWord || blasting) return;

    if (!isVocabularyAnswerCorrect(input, currentWord.meaning)) return;
    if (resolvedWordRef.current === currentWord.id) return;

    resolvedWordRef.current = currentWord.id;
    setBlasting(true);
    setHistory((items) => [
      ...items,
      {
        id: currentWord.id,
        japanese: currentWord.japanese,
        userAnswer: input.trim(),
        meaning: getAcceptableAnswers(currentWord.meaning).join(', '),
        result: 'correct',
      },
    ]);
    setScore((value) => value + 1);

    blastTimerRef.current = window.setTimeout(() => {
      setBlasting(false);
      spawnNextWord();
    }, GAME_CONFIG.blastDuration);
  }, [blasting, currentWord, input, spawnNextWord, status]);

  const togglePause = useCallback(() => {
    if (status === 'playing') {
      setStatus('paused');
    } else if (status === 'paused') {
      setStatus('playing');
      focusInput();
    }
  }, [focusInput, status]);

  const endGame = useCallback(() => {
    if (!canPlay) return;
    window.clearTimeout(blastTimerRef.current);
    finishGame('ended');
  }, [canPlay, finishGame]);

  useEffect(() => {
    return () => window.clearTimeout(blastTimerRef.current);
  }, []);

  useEffect(() => {
    if (status === 'playing') focusInput();
  }, [focusInput, status]);

  return (
    <div className="vocab-game-page" onClick={() => canPlay && focusInput()}>
      <Header />

      <main className="vocab-game-page__content">
        {status === 'idle' && (
          <GameStartScreen onStart={startGame} bestScore={bestScore} />
        )}

        {canPlay && (
          <section className="vocab-game" aria-label="Japanese vocabulary typing game">
            <GameHud
              score={score}
              bestScore={bestScore}
              lives={lives}
              paused={status === 'paused'}
              onPause={togglePause}
              onEnd={endGame}
            />

            <div className="vocab-game__arena">
              <div className="vocab-game__top-line" aria-hidden="true" />
              <div className="vocab-game__bottom-line" aria-hidden="true" />
              {currentWord && (
                <FallingWord
                  key={currentWord.id}
                  word={currentWord}
                  duration={fallDuration}
                  paused={status === 'paused' || blasting}
                  blasting={blasting}
                  onMiss={handleMiss}
                />
              )}

              <div className="vocab-game__hint">Type the English meaning</div>
            </div>

            <form className="vocab-game__answer" onSubmit={handleSubmit} onClick={(event) => event.stopPropagation()}>
              <label htmlFor="vocab-game-answer">English meaning</label>
              <input
                ref={inputRef}
                id="vocab-game-answer"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                disabled={status !== 'playing' || blasting}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                placeholder="Type meaning..."
              />
            </form>

            {status === 'paused' && <GamePauseOverlay onResume={togglePause} />}
          </section>
        )}

        {(status === 'game-over' || status === 'ended') && (
          <GameResults
            score={score}
            lives={lives}
            history={history}
            bestScore={bestScore}
            reason={endReason}
            onRestart={startGame}
          />
        )}
      </main>
    </div>
  );
};

export default VocabularyGamePage;
