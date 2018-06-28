// The maximal salary

function topSalary(salaries) {
  const max = { maxName: null, maxSalary: 0 };
  const entry = {};

  // eslint-disable-next-line no-restricted-syntax
  for ([entry.name, entry.salary] of Object.entries(salaries)) {
    if (entry.salary > max.maxSalary) {
      ({ name: max.maxName, salary: max.maxSalary } = entry);
    }
  }
  return max.maxName;
}

exports.topSalary = topSalary;

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
