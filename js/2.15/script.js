'use strict';

function ask(question, yes, no) {
    if (confirm()) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

