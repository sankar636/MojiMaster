import { useCallback, useMemo, useRef, useState } from "react";

/** Fisher-Yates shuffle, returns a new array (doesn't mutate input). */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Normalize an answer for comparison: lowercase, trim, collapse whitespace. */
function normalize(str) {
  return (str ?? "").toLowerCase().trim().replace(/\s+/g, " ");
}

/**
 * Reusable practice-session engine for both Vocabulary Practice and
 * Question & Answer Practice.
 *
 * It deliberately reuses the same idea as the existing kana typing engine
 * (useTypingTest.js): a real, native, controlled <input> whose value is
 * mirrored into React state. That's what makes Backspace "just work" —
 * the browser owns deletion, we only ever read the resulting value.
 *
 * The one difference from the home page engine: instead of committing a
 * word when the user types a trailing space (kana words never contain a
 * space), the learner submits with Enter, since Q&A answers are full
 * sentences that legitimately contain spaces. A word/answer is only ever
 * evaluated once it is submitted — partial or temporarily-wrong input
 * never locks anything in.
 *
 * @param {object} opts
 * @param {Array}  opts.pool - already lesson/length-filtered items
 * @param {(item) => string} opts.getTarget - returns the romaji string the user must type
 * @param {number} [opts.questionCount] - cap the session to N items (optional)
 */
export function usePracticeSession({ pool, getTarget, questionCount }) {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [results, setResults] = useState([]); // { item, typed, correct }
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionFinished, setSessionFinished] = useState(false);

  const inputRef = useRef(null);

  const start = useCallback(() => {
    const shuffled = shuffle(pool);
    const limited = questionCount ? shuffled.slice(0, questionCount) : shuffled;
    setItems(limited);
    setCurrentIndex(0);
    setCurrentInput("");
    setResults([]);
    setSessionActive(true);
    setSessionFinished(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  }, [pool, questionCount]);

  const restart = useCallback(() => {
    setSessionActive(false);
    setSessionFinished(false);
    setItems([]);
    setCurrentIndex(0);
    setCurrentInput("");
    setResults([]);
  }, []);

  const commitCurrent = useCallback(() => {
    const item = items[currentIndex];
    if (!item) return;
    const target = getTarget(item);
    const correct = normalize(currentInput) === normalize(target);
    setResults((prev) => [...prev, { item, typed: currentInput, correct }]);
    setCurrentInput("");

    const next = currentIndex + 1;
    if (next >= items.length) {
      setSessionActive(false);
      setSessionFinished(true);
      inputRef.current?.blur();
    } else {
      setCurrentIndex(next);
    }
  }, [items, currentIndex, currentInput, getTarget]);

  const handleChange = useCallback((e) => {
    setCurrentInput(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (currentInput.trim().length > 0) commitCurrent();
      }
    },
    [currentInput, commitCurrent]
  );

  const stats = useMemo(() => {
    const correct = results.filter((r) => r.correct).length;
    const incorrect = results.length - correct;
    const accuracy = results.length ? Math.round((correct / results.length) * 100) : 0;
    return { correct, incorrect, accuracy, total: results.length };
  }, [results]);

  const currentItem = items[currentIndex] ?? null;

  return {
    items,
    currentItem,
    currentIndex,
    currentInput,
    results,
    stats,
    sessionActive,
    sessionFinished,
    inputRef,
    start,
    restart,
    handleChange,
    handleKeyDown,
  };
}
