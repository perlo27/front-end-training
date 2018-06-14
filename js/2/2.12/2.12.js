
// ################# WHILE ###########################
let i = 3;

while (i) {
    alert(i--);
}

//last alerted = 3 -> 2-> 1     cause i-- is posts decrement


let i = 0;
while (++i < 5) alert(i);

// prefix alerted = 1 -> 2 -> 3 -> 4


let i = 0;
while (i++ < 5) alert(i);

// postifx alerted = 1 -> 2 > 3 -> 4 -> 5->


// ################# FOR ###########################

// The postfix form: 0,1,2,3,4

for (let i = 0; i < 5; i++) alert(i);

// The prefix form: 0,1,2,3,4

for (let i = 0; i < 5; ++i) alert(i);

//even numbers

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        alert( i );
    }
}



//replace for with while

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}


//repeat

let EXPECTED_VALUE = 100;
let insertedByUser;
do {
    insertedByUser = prompt("Pass some big number bro! like MORE THAN 100", '');
} while (insertedByUser <= EXPECTED_VALUE && insertedByUser);