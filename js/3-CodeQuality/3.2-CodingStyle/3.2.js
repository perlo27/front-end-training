// A space is required after ','. (comma-spacing)
// Expected linebreaks to be 'LF' but found 'CRLF'. (linebreak-style)
// Trailing spaces not allowed. (no-trailing-spaces)
function pow(x, n) {
  let result = 1; // Expected linebreaks to be 'LF' but found 'CRLF'. (linebreak-style)
  // Expected space(s) after "for". (keyword-spacing)
  // Infix operators must be spaced. (space-infix-ops)
  // Missing whitespace after semicolon. (semi-spacing)
  // Unary operator '++' used. (no-plusplus)
  // Requires a space after '{' (block-spacing)
  // Requires a space before '}' (block-spacing)
  // Trailing spaces not allowed. (no-trailing-spaces)
  for (let i = 0; i < n; i += 1) { result *= x; }
  return result;
}
// Split 'let' declarations into multiple statements. (one-var)
// Unexpected tab character. (no-tabs)
// 'x' is never reassigned. Use 'const' instead. (prefer-const)
// Infix operators must be spaced. (space-infix-ops)
// Strings must use singlequote. (quotes)
// A space is required after ','. (comma-spacing)
// 'x' and n' is never reassigned. Use 'const' instead. (prefer-const)
// Unexpected prompt. (no-alert)
// Unexpected alert. (no-alert)
// eslint-disable-next-line no-alert
const x = prompt('x?', '');
// eslint-disable-next-line no-alert
const n = prompt('n?', '');
// Opening curly brace does not appear on the same line as controlling statement. (brace-style)
// Closing curly brace does not appear on the same line as the subsequent block. (brace-style)
// Opening curly brace does not appear on the same line as controlling statement. (brace-style)
if (n <= 0) {
// eslint-disable-next-line no-alert
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  // A space is required after ','. (comma-spacing)
  // Missing semicolon. (semi)
// eslint-disable-next-line no-alert
  alert(pow(x, n));
}
