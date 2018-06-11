// Rewrite with arrow functions
// let ask = (question, yes, no) => {
//     if (confirm(question)) {
//         return yes();
//     }
//     else {
//         return no();
//     }
// };

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution."),
);