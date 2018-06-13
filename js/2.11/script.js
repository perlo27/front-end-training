'use strict';

let age = prompt("Give me your age");

if ( age >= 14 && age <= 90 ) {
    alert("Your age is in range");
}

if ( !(age >= 14) || age >= 90 ){
    alert("Your age is out of range")
}
