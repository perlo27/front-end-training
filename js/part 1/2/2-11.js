console.log( null || 2 || undefined ); // 2

console.log( console.log(1) || 2 || console.log(3) ); // 1 and 2

console.log( 1 && null && 2 );  // null

console.log( console.log(1) && console.log(2) ); // 1 and undefined

console.log( null || 2 && 3 || 4 ); // 3

if (age >= 14 && age <= 90){}

if (!(age >= 14 && age <= 90)){}
if (age < 14 || age > 90){}

if (-1 || 0) console.log( 'first' );
if (-1 && 0) console.log( 'second' );
if (null || -1 && 1) console.log( 'third' );

// first and third
