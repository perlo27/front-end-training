let user = {};
console.log(user);

user.name = "John";
user.surname = "Smith";
window.alert(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);