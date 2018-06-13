"use strict";

// Rewrite the "switch" into an "if"
let browser = "Safari";
if(browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  console.log( 'Okay we support these browsers too' );
} else {
  console.log( 'We hope that this page looks ok!' );
}

// Rewrite "if" into "switch"
let randomCeiling = 6;
let number = Math.floor((Math.random() * randomCeiling) + 1);
switch (number) {
  case 0:
  case 1:
    console.log(number);
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}
