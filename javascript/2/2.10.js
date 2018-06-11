//The name of JavaScript

const CORRECT_ANSWER = "ECMAScript";
let usersAnswer = "Test"; //use ECMAScript for correct flow

if (usersAnswer === CORRECT_ANSWER) {
    console.log("Right!")
}
else {
    console.log("You don’t know? ECMAScript!")
}

// Show the sign
let selectedNumber = 1;
if (selectedNumber > 0) {
    console.log(1);
}
else if (selectedNumber < 0) {
    console.log(-1)
}
else {
    console.log(0)
}

//Check the login
const ADMIN_NAME = "Admin";
const ADMIN_PASSWORD = "TheMaster";
let userName = "user"; //change to Admin for Admin flow
// let userName = prompt("Insert username");
if (userName === ADMIN_NAME) {
    //prompt for password
    let password = "invalidPassword" //use TheMaster for correct flow
    // let password = prompt("Insert password");
    if (password === ADMIN_PASSWORD) {
        console.log("Welcome!");
    }
    else if (password === "" || password == null) {
        console.log("Canceled.");
    }
    else {
        console.log("Wrong password!");
    }
}
else if (userName === "" || userName == null) {
    console.log("Canceled");
}
else {
    console.log("I don't know you");
}

//Rewrite 'if' into '?'
let a = 0, b = 1;
let result = a + b < 4 ? 'Below' : "Over";
console.log(result);

//Rewrite 'if..else' into '?'
let login = 'Employee';
// let login = 'Director';
// let login = '';
// let login = 'any other login value';

let message = login == 'Employee' ? 'Hello'
        : login == 'Director' ? 'Greetings'
        : login == '' ? 'No login' : '';

console.log(message);