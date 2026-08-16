function normalize(str) {
  return (str ?? '').toLowerCase().trim().replace(/\s+/g, ' ');
}

function stripParenthetical(str) {
  return str.replace(/\([^)]*\)/g, '').trim();
}

/** Split a meaning string into its individually-acceptable answers. */
export function getAcceptableMeanings(meaning) {
  return stripParenthetical(meaning)
    .split(/,|\/|;|\bor\b/i)
    .map((s) => normalize(s))
    .filter(Boolean);
}

/** True if `typed` matches any acceptable synonym within `meaning`. */
export function isMeaningMatch(typed, meaning) {
  const t = normalize(typed);
  if (!t) return false;
  return getAcceptableMeanings(meaning).includes(t);
}

export { normalize };
