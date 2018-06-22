let i = 3;

while (i) {
    console.log(i--);
}
// 1


let i = 0;
while (++i < 5) console.log(i); // 1, 2, 3, 4

let i = 0;
while (i++ < 5) console.log(i); // 1, 2, 3, 4, 5


for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4

for (let i = 2; i <= 10; i += 2) console.log(i); // even numbers from 2 to 10

for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

let number;
do {
    // number = prompt('Type number greater than 100');
    number = 101;
} while (number < 100);

let n = 10;
for (let i = 2; i <= n; i++) {
    let counter = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            counter++;
        }
    }
    if (counter === 0) {
        console.log(i);
    }
}