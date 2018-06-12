console.log("\nExercise 7 : https://javascript.info/while-for#output-prime-numbers\n");
let primeCheckNumber = prompt("Please enter a number to check for being prime","");
let isPrime = true;
for(let nextInt=2;nextInt<primeCheckNumber;nextInt++){
  if(primeCheckNumber % nextInt == 0){
    isPrime = false;
    break;
  }
}
console.log("The number "+primeCheckNumber+ (isPrime ? " is prime" : " is not prime"));
