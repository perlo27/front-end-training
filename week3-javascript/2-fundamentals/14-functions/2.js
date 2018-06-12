console.log("\nExercise 2 : https://javascript.info/function-basics#rewrite-the-function-using-or\n");
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }
function ex2_checkAge(age) {
  return age > 18 ? true : 'Do you have your parents permission to access this page?';
}

function ex2_checkAge_2(age) {
  return (age > 18 && true) || 'Do you have your parents permission to access this page?';
}

console.log(ex2_checkAge(10)); // 'Do you have your parents permission to access this page?'
console.log(ex2_checkAge(20)); // true
console.log(ex2_checkAge_2(10));  // 'Do you have your parents permission to access this page?'
console.log(ex2_checkAge_2(20));  // true
