"use strict";

// if (a string with zero)
if ("0") {  // true (not empty)
  console.log( "Hello" );
}

// The name of JavaScript
let ecmaName = prompt("What is the \"official\" name of JavaScript?", "");
if (ecmaName == "ECMAScript") {
  console.log("Right!");
} else {
  console.log("You don\"t know? ECMAScript!");
}

// Show the sign
let input1 = prompt("Write a number", "");
if (input1 > 0){
  console.log(1);
} else if (input1 < 0) {
  console.log(-1);
} else {
  console.log(0);
}

// Check the login
let input = prompt("Write a login", "");
if (input == null || input == "") {
  console.log("Canceled");
} else if (input == "Admin") {
  let inputPassword = prompt("Write a password", "");
  if (inputPassword == null || inputPassword == "") {
    console.log("Canceled");
  } else if (inputPassword == "TheMaster") {
    console.log("Welcome");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("I don't know you");
}

// Rewrite 'if' into '?'
let a = 0, b = 0;
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);

// Rewrite 'if..else' into '?'
let login = "Director";
let message = login == "Employee" ? "Hello" :
  login == "Director" ? "Greetings" :
    login == "" ? "No login" :
      "";
console.log(message);
