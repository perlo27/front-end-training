console.log("\nExercise 6 : https://javascript.info/logical-operators#check-the-range-between\n");
let age = prompt("What is your age? ","");
console.log("Your age is "+age);
let isBetween = 14 <= age && age <= 90;
console.log("Your age is "+(isBetween ? "between" : "not between")+" 14 and 90");
