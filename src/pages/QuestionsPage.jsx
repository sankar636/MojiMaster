import { useMemo, useState } from 'react';

import Header from '../Components/Header.jsx';
import PracticeConfigPanel from '../Components/vocabulary/PracticeConfigPanel.jsx';
import SectionSwitchLink from '../Components/vocabulary/SectionSwitchLink.jsx';

import McqResults from '../Components/vocabulary/McqResults.jsx';

import { useMcqSession } from '../hooks/useMcqSession.js';
import {
  getQuestionsByLessonRange,
  MAX_AVAILABLE_QUESTION_LESSON,
} from '../data/lessonUtils.js';
import McqCard from '../Components/vocabulary/McqCard.jsx';

const QuestionsPage = () => {
  const [fromLesson, setFromLesson] = useState(1);
  const [toLesson, setToLesson] = useState(4);
  const [questionCount, setQuestionCount] = useState(20);

  const pool = useMemo(
    () => getQuestionsByLessonRange(fromLesson, toLesson),
    [fromLesson, toLesson],
  );

  const session = useMcqSession({ pool, questionCount });

  const handleRangeChange = (from, to) => {
    setFromLesson(from);
    setToLesson(to);
  };

  const showingConfig = !session.sessionActive && !session.sessionFinished;

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-6 py-8 select-none bg-bg text-text font-ui">
      <Header />

      <div className="w-full max-w-3xl flex-1 flex flex-col items-center">
        <h1 className="text-xl font-semibold text-text mb-1 self-start">
          Question &amp; Answer Practice
        </h1>
        <SectionSwitchLink
          to="/vocabulary"
          label="Switch to Vocabulary Practice"
        />

        {showingConfig && (
          <PracticeConfigPanel
            fromLesson={fromLesson}
            toLesson={toLesson}
            onRangeChange={handleRangeChange}
            maxAvailable={MAX_AVAILABLE_QUESTION_LESSON}
            showWordLength={false}
            questionCount={questionCount}
            onQuestionCountChange={setQuestionCount}
            poolCount={pool.length}
            itemLabel="question"
            onStart={session.start}
          />
        )}

        {session.sessionActive && session.currentItem && (
          <div className="w-full flex-1 flex flex-col items-center justify-center py-10">
            <McqCard
              item={session.currentItem}
              selectedIndex={session.selectedIndex}
              answered={session.answered}
              progress={{
                current: session.currentIndex + 1,
                total: session.items.length,
              }}
              onSelect={session.selectOption}
              onNext={session.goNext}
            />
          </div>
        )}

        {session.sessionFinished && (
          <McqResults
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
}

export default QuestionsPage;