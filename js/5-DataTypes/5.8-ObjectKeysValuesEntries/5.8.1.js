// Sum the properties

function sumSalariesVer1(salaries) {
  return Object.values(salaries).reduce((sum, sal) => sum + sal, 0);
}

function sumSalariesVer2(salaries) {
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const val of Object.values(salaries)) {
    sum += val;
  }
  return sum;
}

exports.sumSalariesVer1 = sumSalariesVer1;
exports.sumSalariesVer2 = sumSalariesVer2;

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalariesVer1(salaries)); // 650
console.log(sumSalariesVer2(salaries)); // 650

