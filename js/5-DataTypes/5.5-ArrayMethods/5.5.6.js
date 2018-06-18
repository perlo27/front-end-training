// Map to names
function getUserNames(users) {
  return users.map(item => item.name);
}

const john = { name: 'John', age: 25 };
const pete = { name: 'Pete', age: 30 };
const mary = { name: 'Mary', age: 28 };

const users = [john, pete, mary];

const names = getUserNames(users);

console.log(`Names =\t ${names}`);
