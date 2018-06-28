// Count properties

function count(user) {
  return Object.keys(user).length;
}

exports.count = count;

const user = {
  name: 'John',
  age: 30,
};

console.log(count(user)); // 2
