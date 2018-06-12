//2.7.1
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log(c);
console.log(d);

//2.7.2
let x = 2;
x = 1 + (x *= 2);
console.log(x); //5
