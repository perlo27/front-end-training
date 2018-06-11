console.log("\nExercise 4 : https://javascript.info/ifelse#check-the-login\n");
let username=prompt("Your login: (Admin or sth. else)","");
console.log("Your login is: "+username);

if(username==="Admin"){
  let password = prompt("Your password : (TheMaster or sth. else)","");
  console.log("Your password is: "+password);
  if(password === "TheMaster"){
    console.log("Welcome");
  }else if(password == false){
    console.log("Canceled");
  }else{
    console.log("I don't know you");
  }
}else if(username == false){
  console.log("Canceled");
}else{
  console.log("I don't know you");
}
