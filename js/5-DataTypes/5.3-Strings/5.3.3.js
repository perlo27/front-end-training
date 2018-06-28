// Truncate the text

function truncate(str, maxLength) {
  if (!str || maxLength < 1) return false;
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength - 1)}\u2026`; // \u2026 is the ellipsis character '...'
  }
  return str;
}

console.log(truncate('What I\'d like to tell on this topic is:', 20)); // "What I'd like to te…"
console.log(truncate('Hi everyone!', 20)); // "Hi everyone!"

