// Turn the user into JSON and then 
// read it back into another variable.
let user = {
    name: "John Smith",
    age: 35
};

let userJson = JSON.stringify(user);

let newUser = JSON.parse(userJson);

console.log(userJson);
console.log(newUser);

