console.log("\nExercise 2 : https://javascript.info/while-for#which-values-shows-the-while\n");
console.log("Prefix form:")
let j = 0;
while (++j < 5) console.log( j );
console.log("Postfix form:")
j = 0;
while (j++ < 5) console.log( j );
// prints 1,2,3,4 in prefix form
// prints 1,2,3,4,5 in postfix form
