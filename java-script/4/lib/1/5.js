"use strict";

var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sum(object) {
    var sum = 0;
    for (var property in salaries) {
        sum = sum + salaries[property];
    }
    return sum;
}

console.log(sum(salaries));