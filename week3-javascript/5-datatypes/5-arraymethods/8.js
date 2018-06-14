function sortByName(arr) {
  arr.sort( (a,b) => {
    return a.name > b.name;
  });
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

sortByName(arr);

// now: [john, mary, pete]
console.log(arr[1].name); // Mary
