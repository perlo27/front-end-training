console.log("\nExercise 4 : https://javascript.info/function-basics#function-pow-x-n");
let x=3;
let n=5;
//  x = Number(prompt("What is the basis for power?",""));
//  n = Number(prompt("What is the power?",""));
console.log(calculatePower(x,n));

function calculatePower(x,n){
  let result = 1;
  while(n > 0){
    result *= x;
    n--;
  }
  return result;
}
