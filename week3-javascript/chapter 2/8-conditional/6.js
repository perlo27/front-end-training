console.log("\nExercise 6 : https://javascript.info/ifelse#rewrite-if-else-into\n");
let login = prompt("What is your login? Employee,Director or else","");
console.log("Your login is "+login);
let message = (login == "Employee") ? "Hello"
              : (login == "Director") ? "Greetings"
              : (login == '') ? 'No login'
              : '';
console.log(message);
// prints Hello for Employee, Greetings for Director, No login for empty string, otherwise prints empty string
