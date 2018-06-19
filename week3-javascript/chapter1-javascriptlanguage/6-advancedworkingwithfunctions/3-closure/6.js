let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('surname'));
console.log(JSON.parse(JSON.stringify(users)));
users.sort(byField('name'));
console.log(JSON.parse(JSON.stringify(users)));
users.sort(byField('age'));
console.log(JSON.parse(JSON.stringify(users)));
// console log printed only the last version, added JSON
// to print all the versions

function byField(field) {
  return function(a, b) {
    if(a[field] > b[field]) {
      return 1;
    } else {
      return -1;
    }
  }
}
