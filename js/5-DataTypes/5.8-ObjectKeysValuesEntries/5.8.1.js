// Sum the properties
function sumSalariesVer1(salaries) {
  return Object.values(salaries).reduce((sum, sal) => sum + sal, 0);
}
function sumSalariesVer2(salaries) {
  let sum = 0;
  for ( let val of Object.values(salaries)) {
  	sum += val;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalariesVer1(salaries) ); // 650
console.log( sumSalariesVer2(salaries) ); // 650

