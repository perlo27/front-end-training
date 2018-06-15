'use strict';

//  TASK 1
let user = {};

user["name"] = "John";
user["surname"] = "Smith";

alert(user.name + " " + user.surname);

user.name = "Pete";

alert(user.name + " " + user.surname);

delete user.name;

alert(user.name + " " + user.surname);

// TASK 2
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    if ( !((Object.keys(obj).length === 0) && (obj.constructor === Object)) ) {
        return false;
    }
    return true;
}

// TASK 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}

alert(sum);

// TASK 4
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
alert("width: " + menu.width + ", height: " + menu.height)

function multiplyNumeric(obj) {
    let multiplayer = 2;
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= multiplayer;
        }
    }
}