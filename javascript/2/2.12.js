//Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Replace "for" with "while"
let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

//Repeat until the input is correct
while (true) {
    //prompt for user's input
    // let value = prompt("Insert number");
    let value = 101;
    if (value >= 100 || value == null) {
        console.log("Finished!");
        break;
    }
}

//Output prime numbers
let n = 10;
outer: for (let i = 2; i <= n; i++) {
    for (let j = i - 1; j > 1; j--) {
        if (i % j == 0) {
            continue outer;
        }
    }
    console.log(`${i} is a prime number`);
}