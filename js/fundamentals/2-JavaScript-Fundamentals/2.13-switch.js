'use strict'

console.log("2.13 - task 1");
let browser = 'Chrome';
if (browser === 'Edge')
    console.log( "You've got the Edge!" );
else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
    console.log( "Okay we support these browsers too");
else
    console.log('We hope that this page looks ok!');


console.log("2.13 - task 1");
let a = 4;
switch (a) {
    case 0: console.log(a);
        break;
    case 1: console.log(a);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}