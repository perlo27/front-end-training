let readNumber = function() {
  while(true) {
    let inputFromUser = prompt("Please enter a number","");

    if(!inputFromUser || isFinite(inputFromUser)){
      break;
    }
  }
}

readNumber();
