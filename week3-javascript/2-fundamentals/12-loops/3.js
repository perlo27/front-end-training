console.log("\nExercise 3 : https://javascript.info/while-for#which-values-get-shown-by-the-for-loop\n");

console.log("Prefix form:");
for (let k = 0; k < 5; k++) console.log( k );
console.log("Postfix form:")
for (let k = 0; k < 5; ++k) console.log( k );
// prints 0,1,2,3,4 in both postfix and prefix forms
