'use strict'

console.log('2.14 task 1');
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return console.log('Did your parents allow you?');
}

console.log('2.14 task 2');
function checkAge(age) {
    return (age > 18) ? true : confirm('Did your parents allow you?');
}

function checkAge(age) {
    return (age > 18 || confirm('Did your parents allow you?'));
}

console.log('2.14 task 3');
function min(a, b) {
    return (a <= b) ? a : b;
}

console.log(min(1, 2));
console.log(min(2, 2));
console.log(min(3, 2));

console.log('2.14 task 4');
function pow(num, power) {
    if (power == 0) return 1;
    let res = num;
    for (let i = 1; i < power; i++)
        res *= num;
    return res;
}
console.log(pow(4, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));
