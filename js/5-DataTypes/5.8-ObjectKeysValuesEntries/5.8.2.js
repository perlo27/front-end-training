// Count properties
const count = exports.count = function (user) {
  return Object.keys(user).length;
};

const user = {
  name: 'John',
  age: 30,
};

console.log(count(user)); // 2
