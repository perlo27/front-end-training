let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let topSalary = 0;
  let topSalaryOwner = null;
  for(let [salaryOwner, salary] of Object.entries(salaries)) {
    if(salary > topSalary) {
      topSalary = salary;
      topSalaryOwner = salaryOwner;
    }
  }
  return topSalaryOwner;
}

console.log(topSalary(salaries));
