import { useCallback, useMemo, useState } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Session engine for 4-option multiple-choice Q&A practice.
 *
 * Flow per question: the learner selects an option (click, or number keys
 * 1-4) → the choice is locked in and right/wrong is shown immediately →
 * they press Next (or Enter/Space) to advance. Nothing is scored until an
 * option is actually chosen, and once chosen it can't be changed for that
 * question — same "only evaluate the completed answer" principle as the
 * typing engine, adapted to a selection instead of keystrokes.
 */
export function useMcqSession({ pool, questionCount }) {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState([]); // { item, selectedIndex, correct }
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionFinished, setSessionFinished] = useState(false);

  const start = useCallback(() => {
    const shuffled = shuffle(pool);
    const limited = questionCount ? shuffled.slice(0, questionCount) : shuffled;
    setItems(limited);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswered(false);
    setResults([]);
    setSessionActive(true);
    setSessionFinished(false);
  }, [pool, questionCount]);

  const restart = useCallback(() => {
    setSessionActive(false);
    setSessionFinished(false);
    setItems([]);
    setCurrentIndex(0);
    setSelectedIndex(null);
    setAnswered(false);
    setResults([]);
  }, []);

  const selectOption = useCallback(
    (idx) => {
      if (answered) return; // already answered this question, ignore further clicks
      const item = items[currentIndex];
      if (!item) return;
      const correct = idx === item.correctIndex;
      setSelectedIndex(idx);
      setAnswered(true);
      setResults((prev) => [...prev, { item, selectedIndex: idx, correct }]);
    },
    [answered, items, currentIndex],
  );

  const goNext = useCallback(() => {
    if (!answered) return;
    const next = currentIndex + 1;
    if (next >= items.length) {
      setSessionActive(false);
      setSessionFinished(true);
    } else {
      setCurrentIndex(next);
      setSelectedIndex(null);
      setAnswered(false);
    }
  }, [answered, currentIndex, items.length]);

  const stats = useMemo(() => {
    const correct = results.filter((r) => r.correct).length;
    const incorrect = results.length - correct;
    const accuracy = results.length
      ? Math.round((correct / results.length) * 100)
      : 0;
    return { correct, incorrect, accuracy, total: results.length };
  }, [results]);

  const currentItem = items[currentIndex] ?? null;

  return {
    items,
    currentItem,
    currentIndex,
    selectedIndex,
    answered,
    results,
    stats,
    sessionActive,
    sessionFinished,
    start,
    restart,
    selectOption,
    goNext,
  };
}
