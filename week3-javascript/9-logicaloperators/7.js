console.log("\nExercise 7 : https://javascript.info/logical-operators#check-the-range-outside\n");

let age2 = prompt("What is your age? ","");
console.log("Your age is "+age2);

let isNotBetweenUsingNot = !(14 <= age2 && age2 <= 90);
console.log("Using not operator : \n");
console.log("Your age is outside the range 14 and 80 : "+isNotBetweenUsingNot);

let isNotBetweenWithoutUsingNot = age2 < 14 || age2 > 90;
console.log("Without not operator : \n");
console.log("Your age is outside the range 14 and 80 : "+isNotBetweenWithoutUsingNot);
