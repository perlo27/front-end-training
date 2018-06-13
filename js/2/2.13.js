//2.13.1
if(browser === 'Edge') {
    console.log("You've got the Edge!");
  } else if (browser === 'Chrome'
   || browser === 'Firefox'
   || browser === 'Safari'
   || browser === 'Opera') {
    console.log( 'Okay we support these browsers too' );
  } else {
    console.log( 'We hope that this page looks ok!' );
  }

//2.13.2
let a;
// a = +prompt('a?', '');
switch(a) {
  case 0:
  case 1:
    console.log(`${a}`);
    break;
  case 2:
  case 3:
    console.log('2,3');
    break;
  default:
    console.log('something went wrong...');
}
  