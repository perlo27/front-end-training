console.log("\nExercise 6 : https://javascript.info/while-for#repeat-until-the-input-is-correct\n");
let ex6_message = "Please enter a number to check for being less than or equal to 100:"
let number = prompt(ex6_message,"");
while(number != null && number !== "" && number <= 100){
  console.log(number+" is smaller than or equal to 100.");
  number = prompt(ex6_message,"");
}
console.log(number+" is not smaller than or equal to 100.");
