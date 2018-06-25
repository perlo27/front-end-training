// The maximal salary

const topSalary = exports.topSalary = function (salaries) {
  const max = { maxName: null, maxSalary: 0 };
  const entry = {};

  for ([entry.name, entry.salary] of Object.entries(salaries)) {
    if (entry.salary > max.maxSalary) {
      ({ name: max.maxName, salary: max.maxSalary } = entry);
    }
  }
  return max.maxName;
};

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};


console.log(topSalary(salaries));

