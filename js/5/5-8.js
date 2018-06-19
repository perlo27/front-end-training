export function sumSalaries(obj) {
  let sum = 0;
  for (let value of Object.values(obj)) {
    sum += value;
  }
  return sum;
}

export const count = obj => {
  return Object.keys(obj).length;
};

export const destructuring = obj => {
  let { name, years: age, isAdmin = false } = obj;
};

export const topSalary = obj => {
  let maxSalary = 0;
  let topPerson = null;
  for (let [name, salary] of Object.entries(obj)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topPerson = name;
    }
  }
  return topPerson;
};
