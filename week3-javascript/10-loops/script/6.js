console.log("\nExercise 6 : https://javascript.info/while-for#repeat-until-the-input-is-correct\n");
let number = prompt("Please enter a number to check for being less than or equal to 100:","");
while(number != null && number !== "" && number <= 100){
  console.log(number+" is a number and smaller than or equal to 100.");
  number = prompt("Please enter a number to check for being less than or equal to 100:","");
}
console.log(number+" is not a number or not smaller than or equal to 100.");
