console.log("\nExercise 2 : https://javascript.info/switch#rewrite-if-into-switch\n");
let a = +prompt('a?', '');
switch (a) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
  default:
    break;
}
