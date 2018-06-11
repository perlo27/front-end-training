// Rewrite the function using '?' or '||'
function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

function checkAge(age) {
    return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

// Function min(a, b)
function min(a, b) {
    return a < b ? a : b;
}

// Function pow(x,n)
function pow(x, n) {
    return x ** n;
}

let x = 2;
let n = 2;
if (n < 1) {
    console.error(`Power ${n} is not supported, use an integer greater than 0`);
}
else {
    console.log(pow(x, n));
}