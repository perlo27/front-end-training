function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

ask(
  "Do you agree?",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
);
