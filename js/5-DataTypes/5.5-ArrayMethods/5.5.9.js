// Shuffle an array

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const array = [1, 2, 3];
console.log(`Input: ${array}`);
shuffle(array);
console.log(`Shuffled: ${array}`);
shuffle(array);
console.log(`Shuffled: ${array}`);
shuffle(array);
console.log(`Shuffled: ${array}`);
