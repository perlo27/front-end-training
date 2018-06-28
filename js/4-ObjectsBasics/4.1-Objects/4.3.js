// Sum object properties

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
// eslint-disable-next-line no-restricted-syntax,guard-for-in
for (const key in salaries) {
  sum += +salaries[key];
}

console.log(sum);
