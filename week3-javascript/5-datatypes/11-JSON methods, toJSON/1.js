let user = {
  name: "John Smith",
  age: 35
};

let userSerialized = JSON.stringify(user);
console.log(userSerialized);

let userParsed = JSON.parse(userSerialized);
console.log(userParsed);
