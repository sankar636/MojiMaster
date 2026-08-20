export const GAME_CONFIG = {
  maxLives: 3,
  initialFallDuration: 20000,
  minimumFallDuration: 2600,
  speedIncrease: 180,
  blastDuration: 260,
};

export function normalizeAnswer(value) {
  return (value ?? '').toLowerCase().trim().replace(/\s+/g, ' ');
}

export function getAcceptableAnswers(meaning) {
  if (Array.isArray(meaning)) {
    return meaning.flatMap(getAcceptableAnswers).filter(Boolean);
  }

  return String(meaning ?? '')
    .replace(/\([^)]*\)/g, '')
    .split(/,|\/|;|\bor\b/i)
    .map(normalizeAnswer)
    .filter(Boolean);
}

export function isVocabularyAnswerCorrect(input, meaning) {
  const answer = normalizeAnswer(input);
  if (!answer) return false;
  return getAcceptableAnswers(meaning).includes(answer);
}

export function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getFallDuration(correctCount) {
  return Math.max(
    GAME_CONFIG.minimumFallDuration,
    GAME_CONFIG.initialFallDuration - correctCount * GAME_CONFIG.speedIncrease,
  );
}
