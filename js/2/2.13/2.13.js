// rewrite to if

let browser = prompt("whats that browser mate?!" ,"");
if(browser === 'Edge') {
    alert('Youve got the Edge!');
} else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}


// rewrite to switch

let a = prompt('UHHH WHATS THAT?!?!', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
}