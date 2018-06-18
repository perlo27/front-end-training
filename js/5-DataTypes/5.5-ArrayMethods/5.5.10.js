// Get average age

// Fisher-Yates shuffle
function getAverageAge(array) {
  return array.reduce((sum, user) => sum + user.age, 0) / array.length;
}


const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 29 };

const arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
