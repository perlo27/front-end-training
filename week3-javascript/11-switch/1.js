console.log("\nExercise 1 : https://javascript.info/switch#rewrite-the-switch-into-an-if\n");
let browser = console.log("Please enter your browser : (Edge,Chrome,Firefox,Safari,Opera,etc.)");
if(browser === 'Edge'){
  console.log("You've got the Edge!");
}else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
  console.log("Okay we support these browsers too");
}else{
  console.log("We hope that this page looks ok!");
}
