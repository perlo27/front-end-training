'use strict'

console.log('I’m JavaScript!');

//2.4.1
let admin
let name = 'John'
admin = name;
console.log(admin);

//2.4.2
const EARTH = 'Earth'
let currentVisitor

//2.4.3
const BIRTHDAY = '18.04.1982' 
let age = someCode(BIRTHDAY)
function someCode() {

}

//2.5.1
let name2 = 'Ilya'
console.log(`hello ${1}`) //hello 1
console.log(`hello ${"name"}`) //hello name
console.log(`hello ${name2}`) //hello Ilya  

//2.6.1
console.log("" - 1 + 0) //-1
console.log("" + 1 + 0) //10
console.log(true + false) // 1
console.log(6 / "3") //2
console.log("2" * "3") //6
console.log(4 + 5 + "px") //9px
console.log("$" + 4 + 5) //$45
console.log("4" - 2) //2
console.log("4px" - 2) //Nan
console.log(7 / 0) //Infinity
console.log("  -9\n" + 5) //-9\n5
console.log("  -9\n" - 5) //-14
console.log(null + 1) //1
console.log(undefined + 1) //Nan

//2.7.1
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log(c);
console.log(d);

//2.7.2
let x = 2;
x = 1 + (x *= 2);
console.log(x);

//2.8.1
console.log(5 > 4) // true
console.log("apple" > "pineapple") //false
console.log("2" > "12") // true
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(null == "\n0\n") //false 
console.log(null === +"\n0\n") //false

//2.10.1
if ("0") { //any string except an empty one returns true
    console.log('Hello');
}

//2.10.2
