// Filter unique array members
function unique(arr) {
  const result = [];

  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

const strings = ['Hare', 'Krishna', 'Hare', 'Krishna',
  'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
];


console.log(strings); // Hare, Krishna, :-O
console.log(unique(strings)); // Hare, Krishna, :-O
