'use strict'

//task 1
let i = 3;
while (i) {
    console.log(i--);   //3, 2, 1
}

// task 2
console.log("2.12 - task 2.1");
let j = 0;
while (++j < 5) {
    console.log(j)  //1, 2, 3, 4
}

console.log("2.12 - task 2.2");
j = 0;
while (j++ < 5) {
    console.log(j)  //1, 2, 3, 4, 5
}

console.log("2.12 - task 3.1");
for (i = 0; i < 5; i++)
    console.log(i)  //0, 1, 2, 3, 4

console.log("2.12 - task 3.2");
for (i = 0; i < 5; ++i)
    console.log(i)  //0, 1, 2, 3, 4

console.log("2.12 - task 4");
for (i = 2; i <= 10; ++i)
    if (i%2 == 0)
        console.log(i)  //2, 4, 6, 8, 10

console.log("2.12 - task 5");
/*let isCorrect = false;
let userNumber = 0;
while (!isCorrect) {
    userNumber = prompt("Please, type any number greater than 100", userNumber);
    isCorrect = userNumber > 100;
}*/

console.log("2.12 - task 6");
let n = 100;
nextPrime:
for (i = 2; i <= 100; i++) {
    for (j = 2; j < i; j++){
        if (i%j == 0)
            continue nextPrime;
    }
    console.log(i);
}