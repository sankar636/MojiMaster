const PracticeCard = ({ mode, item, typed, progress }) => {
  if (!item) return null;

  const isVocab = mode === 'vocabulary';

  return (
    <div className="w-full flex flex-col items-center gap-6 animate-fadeIn">
      <span className="text-xs text-subAlt font-mono">
        {progress.current} / {progress.total} · Lesson {item.lesson}
      </span>

      <div className="flex flex-col items-center gap-3 min-h-30 justify-center">
        {isVocab ? (
          <>
            <span className="font-jp text-5xl text-text">{item.japanese}</span>
            {/* <span className="text-base text-sub">{item.meaning}</span> */}
          </>
        ) : (
          <>
            <span className="text-xs uppercase tracking-wide text-subAlt">
              Question
            </span>
            <span className="text-2xl text-text leading-snug max-w-xl">
              {item.question}
            </span>
          </>
        )}
      </div>

      <div className="font-mono text-xl min-h-9 px-4 py-2 rounded-lg bg-bgSub text-text">
        {typed || <span className="text-subAlt">start typing…</span>}
        <span className="border-l border-accent animate-blink ml-px" />
      </div>

      <span className="text-xs text-subAlt">press Enter to submit</span>
    </div>
  );
};

export default PracticeCard;
