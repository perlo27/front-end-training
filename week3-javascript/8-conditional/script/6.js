console.log("\nExercise 6 : https://javascript.info/ifelse#rewrite-if-else-into\n");
let login = prompt("What is your login? Employee,Director or else","");
console.log("Your login is "+login);
let message = (login == "Employee") ? "Hello"
              : (login == "Director") ? "Greetings"
              : (login == '') ? 'No login'
              : '';

console.log("Message is "+message+" \nCode :\n"+
              "(login == 'Employee') ? 'Hello'\n"+
              ": (login == 'Director') ? 'Greetings'\n"+
              ": (login == '') ? 'No login'\n"+
              ": '';");
