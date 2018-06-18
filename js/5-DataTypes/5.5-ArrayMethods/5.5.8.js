// Sort objects
function sortByName(users) {
  return users.sort((u1, u2) => u1.name > u2.name);
}

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 28 };

const arr = [john, pete, mary];

console.log('Users:');
console.log(arr);
console.log('Sorted by name users:');
sortByName(arr);
// now: [john, mary, pete]
console.log(arr);
