'use strict'

console.log('4.1 task 4');

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumOfSalary(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
