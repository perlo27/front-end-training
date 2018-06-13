console.log( null || 2 || undefined ); //2

console.log(console.log(1) || 2 || console.log(3)); //1 2 

console.log(1 && null && 2); //null

console.log(console.log(1) && console.log(2)); //1 undefined

console.log( null || 2 && 3 || 4); //3

let age = 99;
if(age >= 14 && age <= 90){}

if(!(age >= 14 && age <= 90)){
    console.log(age);
}

if(age <= 14 || age >= 90) {
    console.log(age);
}

if (-1 || 0) console.log(-1 || 0 ); // -1
if (-1 && 0) console.log(-1 && 0 ); // 0
if (null || -1 && 1) console.log( null || -1 && 1 ); //1