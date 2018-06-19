function unique(arr) {
  let set = new Set(arr);
  let array = [];
  for(el of set.values()) {
    array.push(el);
  }
  return array;
}

// the solution in the webpage is shorter
// Array.from(new Set(arr));

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O
