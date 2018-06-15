'use strict';


for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
        alert(i);
    }
}


let i = 2;
while (i < 11) {
    if (i % 2 === 0) {
        alert(i);
    }
    i++;
}


let nb;

do {
    nb = prompt("Give me  number!");
} while (Number(nb) <= 100 && nb);
