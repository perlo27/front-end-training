// Sum the properties
const sumSalariesVer1 = exports.sumSalariesVer1 = function (salaries) {
  return Object.values(salaries).reduce((sum, sal) => sum + sal, 0);
};

const sumSalariesVer2 = exports.sumSalariesVer2 = function (salaries) {
  let sum = 0;
  for (const val of Object.values(salaries)) {
    sum += val;
  }
  return sum;
}

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalariesVer1(salaries)); // 650
console.log(sumSalariesVer2(salaries)); // 650

