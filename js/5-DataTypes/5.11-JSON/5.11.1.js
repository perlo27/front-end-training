// Turn the object into JSON and back

const user = {
  name: 'John Smith',
  age: 35,
};

const jsonUser = JSON.stringify(user);
const deserializedUser = JSON.parse(jsonUser);

console.log(jsonUser);
console.log(deserializedUser);
