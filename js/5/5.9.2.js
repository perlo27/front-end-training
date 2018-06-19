let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let topSalary = function(salaries) {
    let max = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
};

console.log(topSalary(salaries));