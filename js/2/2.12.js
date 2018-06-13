//2.12.1
let i = 3;

while (i) {
  console.log( i-- );
}
//last output: 1

//2.12.2
i = 0;
while (++i < 5) console.log( i ); //1,2,3,4

i = 0;
while (i++ < 5) console.log( i ); //1,2,3,4,5

//2.12.3
for (let i = 0; i < 5; i++) console.log( i ); //0,1,2,3,4

for (let i = 0; i < 5; ++i) console.log( i ); //0,1,2,3,4

//2.12.4
for (let i = 2 ; i <= 10 ; ++i) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

//2.12.5
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }
i = 0;
while(i < 3) {
    console.log(`number ${i}!`);
    i++;
}

//2.12.6
let val;
do {
    // val = prompt('enter number bigger than 100', 0);
    val = 101;
} while (val <= 100);

//2.12.7
let n = 10;
next:
for (let i = 1 ; i <= n ; i++) {
    for(let j = 2 ; j < i ; j++) {
        if ( i % j == 0 ) continue next;
    }
    console.log(i);
}