function sumSalaries(salaries) {
  let summarySalaries = 0;
  for (let value of Object.values(salaries)) {
    summarySalaries = summarySalaries + value;
  }
  return summarySalaries;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


export default sumSalaries;