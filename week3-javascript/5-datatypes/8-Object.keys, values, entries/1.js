let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
  let salaryNumbers = Object.values(salaries);
  let sum = 0;
  for(let salary of salaryNumbers) {
    sum = sum + salary;
  }
  return sum;
}
