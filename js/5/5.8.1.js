let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let sumSalaries = function(sal) {
    return Object.values(sal).reduce((a,b) => a + b);
};

console.log(sumSalaries(salaries)); // 650