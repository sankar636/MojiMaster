import { useCallback, useMemo, useState } from 'react';

import Header from '../Components/Header.jsx';
import PracticeConfigPanel from '../Components/vocabulary/PracticeConfigPanel.jsx';
import AnswerModeSelector from '../Components/vocabulary/AnswerModeSelector.jsx';
import SectionSwitchLink from '../Components/vocabulary/SectionSwitchLink.jsx';
import PracticeCard from '../Components/vocabulary/PracticeCard.jsx';
import PracticeInput from '../Components/vocabulary/PracticeInput.jsx';
import PracticeResults from '../Components/vocabulary/PracticeResults.jsx';

import { usePracticeSession } from '../hooks/usePracticeSession.js';
import { isMeaningMatch, normalize } from '../data/meaningMatch.js';
import {
  getVocabularyByLessonRange,
  filterByWordLength,
  MAX_AVAILABLE_VOCAB_LESSON,
} from '../data/lessonUtils.js';

const VocabularyPage = () => {
  const [fromLesson, setFromLesson] = useState(1);
  const [toLesson, setToLesson] = useState(5);
  const [maxWordLength, setMaxWordLength] = useState(3);
  const [questionCount, setQuestionCount] = useState(20);
  const [answerMode, setAnswerMode] = useState('meaning'); // "meaning" | "reading"

  const pool = useMemo(() => {
    const vocab = getVocabularyByLessonRange(fromLesson, toLesson);
    return filterByWordLength(vocab, maxWordLength);
  }, [fromLesson, toLesson, maxWordLength]);

  // What counts as "the answer" for review/display purposes.
  const getTarget = useCallback(
    (item) => (answerMode === 'meaning' ? item.meaning : item.romaji),
    [answerMode],
  );

  const isCorrect = useCallback(
    (typed, item) =>
      answerMode === 'meaning'
        ? isMeaningMatch(typed, item.meaning)
        : normalize(typed) === normalize(item.romaji),
    [answerMode],
  );

  const session = usePracticeSession({
    pool,
    getTarget,
    questionCount,
    isCorrect,
  });

  const handleRangeChange = (from, to) => {
    setFromLesson(from);
    setToLesson(to);
  };

  const showingConfig = !session.sessionActive && !session.sessionFinished;

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center px-6 py-8 select-none bg-bg text-text font-ui"
      onClick={() => session.sessionActive && session.inputRef.current?.focus()}
    >
      {session.sessionActive && (
        <PracticeInput
          inputRef={session.inputRef}
          value={session.currentInput}
          onChange={session.handleChange}
          onKeyDown={session.handleKeyDown}
        />
      )}

      <Header />

      <div className="w-full max-w-3xl flex-1 flex flex-col items-center">
        <h1 className="text-xl font-semibold text-text mb-1 self-start">
          Vocabulary Practice
        </h1>
        <SectionSwitchLink
          to="/vocabulary/questions"
          label="Switch to Question & Answer Practice"
        />

        {showingConfig && (
          <div className="w-full flex flex-col items-center gap-5">
            <AnswerModeSelector
              answerMode={answerMode}
              onChange={setAnswerMode}
            />

            <PracticeConfigPanel
              fromLesson={fromLesson}
              toLesson={toLesson}
              onRangeChange={handleRangeChange}
              maxAvailable={MAX_AVAILABLE_VOCAB_LESSON}
              showWordLength
              maxWordLength={maxWordLength}
              onWordLengthChange={setMaxWordLength}
              questionCount={questionCount}
              onQuestionCountChange={setQuestionCount}
              poolCount={pool.length}
              itemLabel="word"
              onStart={session.start}
            />
          </div>
        )}

        {session.sessionActive && session.currentItem && (
          <div className="w-full flex-1 flex flex-col items-center justify-center py-10">
            <PracticeCard
              item={session.currentItem}
              typed={session.currentInput}
              progress={{
                current: session.currentIndex + 1,
                total: session.items.length,
              }}
              answerMode={answerMode}
            />
          </div>
        )}

        {session.sessionFinished && (
          <PracticeResults
            stats={session.stats}
            fromLesson={fromLesson}
            toLesson={toLesson}
            results={session.results}
            onRestart={session.restart}
          />
        )}
      </div>
    </div>
  );
};

export default VocabularyPage;
