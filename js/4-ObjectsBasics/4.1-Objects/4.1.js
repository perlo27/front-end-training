// Hello, object

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Check for emptiness
function isEmpty(obj) {
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const key in obj) {
    return false;
  }
  return true;
}

const schedule = {};
console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false
