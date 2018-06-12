'use strict'

//2.10.1
if ("0") { //any string except an empty one returns true
    console.log('Hello');
}

//2.10.2
let answer;
// answer = prompt('what is the official name of JS?', '');
if(answer == 'ECMAScript') {
    console.log('Right!')
} else {
    console.log("You don't know? ECMAScript")
}

//2.10.3
let number;
if(number > 0) {
    console.log('1');
} else if(number < 0) {
    console.log('-1')
} else {
    console.log('0')
}

//2.10.4
let userName = 'Admin';

if (userName == 'Admin') {
  let pass = 'TheMaster';
  if (pass == 'TheMaster') {
    console.log( 'Welcome!' );
  } else if (pass == '' || pass == null) {
    console.log( 'Canceled.' );
  } else {
    console.log( 'Wrong password' );
  }
} else if (userName == '' || userName == null) {
  console.log( 'Canceled' );
} else {
  console.log( "I don't know you" );
}

//2.10.5
// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }
let a,b,result;
a + b < 4 ? result = 'Below' : result = 'Over'

//2.10.6
let message,login = 'Director';
// if (login == 'Employee') {
//   message = 'Hello';ł
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
message = login == 'Employee' ? 'Hello' :
login == 'Director' ? 'Greetings':
login == '' ?  'No login' : 
'';