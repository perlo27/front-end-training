// 1. Hello, object
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Check for emptiness
function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}

const schedule = {};
console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

// 2. Constant objects?
const user1 = {
  name: 'John',
};

// does it work?
user1.name = 'Pete'; // yes


// 3. Sum object properties
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const key in salaries) {
  sum += +salaries[key];
}

console.log(sum);

// 4. Multiply numeric properties by 2
function multiplyNumeric(obj) {
  for (const key in obj) {
    if ( (typeof obj[key]) === 'number') {
      obj[key] *= 2;
    }
  }
}

function printProperties(obj) {
  for (const key in obj) {
    console.log(key + ':' + obj[key]);
  }
}
// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

printProperties(menu);
multiplyNumeric(menu);
printProperties(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: 'My menu',
};
