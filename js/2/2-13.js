// before
switch (browser) {
    case 'Edge':
        console.log("You've got the Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these browsers too');
        break;

    default:
        console.log('We hope that this page looks ok!');
}

// after
let browser = 'Chrome';

if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}


// before
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

// after
let a = +prompt('a?', '');

switch (a) {
    case 0 :
    case 1 :
        console.log(a);
        break;
    case 2:
    case 3:
        console.log('2,3');
}