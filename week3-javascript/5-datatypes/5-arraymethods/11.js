function unique(arr) {
  let set = [];
  arr.forEach(el => {
    if(set.indexOf(el) == -1) {
      set.push(el);
    }
  });
  return set;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
