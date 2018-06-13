'use strict';

// TASK 1
if ("0") {
    alert( 'Hello' );
}

// TASK 2
let question = "What is the \"official\" name of JavaScript?"
let answer = prompt(question);

let correctAswer = "ECMAScript";

if (answer === correctAswer) {
    alert("Right");
} else {
    alert("Didn’t know? ECMAScript!");
}

// TASK 3
let question = "Give me a number!"
let answer = prompt(question);

if (0 > Number(answer)) {
    alert("-1");
} else if (0 === Number(answer)) {
    alert(0);
} else {
    alert("1");
}

// TASK 4
let question1 = "Who is there?";
let question2 = "Password?";
let answer = prompt(question1);

if ("Admin" === answer) {
    answer = prompt(question2);
    if("TheMaster" === answer) {
        alert("Welcome!")
    } else if (null == answer) {
        alert("Canceled.")
    } else {
        alert("Wrong password");
    }
} else if (null == answer) {
    alert("Canceled.")
} else {
    alert("I don't know you.");
}

// TASK 5
let result;
let a = prompt("give me a:");
let b = prompt("give me b:");

result = a + b < 4 ? 'Below' : 'Over';
alert(result);

// TASK 6
let login = prompt("Give login:");

let message = (login === "Employee") ? "Hello" : (login === "Director") ? "Greetings" : (login === '') ? "No login" : '';
alert(message);