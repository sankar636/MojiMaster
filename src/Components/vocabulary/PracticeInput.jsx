const PracticeInput = ({ inputRef, value, onChange, onKeyDown, disabled }) => {
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoFocus
      disabled={disabled}
      className="opacity-0 absolute w-0 h-0"
      autoCapitalize="off"
      autoCorrect="off"
      autoComplete="off"
      spellCheck={false}
    />
  );
};

export default PracticeInput;
