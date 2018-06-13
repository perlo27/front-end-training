'use strict'

//2.14.1
//No difference

//2.14.2
function checkAge1(age) {
    return age > 18 ? true : console.log('Do you have your parents permission to access this page?');
}

function checkAge2(age) {
    return age > 18 || console.log('Do you have your parents permission to access this page?');
}

//2.14.3
function min(a,b) {
    return a < b ? a : b;
}

//2.14.4
function pow(x,n) {
    if( n < 1 ) {
        return 0;
    }
    let result = x;
    while(n > 1) {
        result *= x;
        n--;
    }
    return result;
}

console.log(pow(1,0));
console.log(pow(0,2));
console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));
