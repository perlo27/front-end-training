let user = {
    name: 'John',
    age: 30
};

let count = function(obj) {
    return Object.keys(obj).length;
};

console.log(count(user));