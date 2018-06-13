//2.15.1
function ask(question, yes, no) {
    if (question) yes()
    else no();
  }
  
ask("Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
  );