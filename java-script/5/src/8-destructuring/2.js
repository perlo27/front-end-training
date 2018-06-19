function topSalary(salaries) {
    
    let maxSalary = 0;
    let topPaidPerson = null;
  
    for(let [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        topPaidPerson = name;
      }
    }
  
    return topPaidPerson;
  }
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  export default topSalary;