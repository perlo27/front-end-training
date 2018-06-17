// Check for spam

function checkSpam(str) {
  if (!str) return false;
  const lowStr = str.toLowerCase();
  return lowStr.includes('viagra') || lowStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxx')); // true
console.log(checkSpam('innocent rabbit')); // false

