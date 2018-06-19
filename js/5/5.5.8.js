let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

let sortByName = function(arr) {
    arr.sort((a, b) => a.name < b.name);
};

sortByName(arr);
console.log(arr[1].name);