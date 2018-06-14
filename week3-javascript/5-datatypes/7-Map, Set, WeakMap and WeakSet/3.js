let map = new Map();

map.set("name", "John");

let keys = map.keys();
// create array from keys
let asArray = Array.from(keys);
// Error: numbers.push is not a function
asArray.push("more");
