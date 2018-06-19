let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

let getAverageAge = function(arr) {
    return arr.reduce((a,b) => a + b.age, 0) / arr.length; 
};

console.log(getAverageAge(arr));