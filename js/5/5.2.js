//5.2.1
// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// console.log(a + b);

//5.2.2
console.log(Math.round(6.35 * 10) / 10);

//5.2.3
function readNumber() {
    let number;

    do {
        number = +prompt('enter number', 0);
    } while (!isFinite(number));

    if (number === null || number === '') return null;

    return number;

}

//5.2.4
// let i = 0;
// while (i != 10) {
    // i += 0.2;
// }
//loop never ends because of precision loses

//5.2.5
function random(min, max) {
    return min + Math.random() * (max - min);
}

//5.2.6
function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
