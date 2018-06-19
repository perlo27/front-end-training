function sumInput() {
  let enteredValues = [];

  while(true) {
    let nextNumber = prompt("Enter a number to add, non numeric input, ESC or ENTER to exit");
    if(!nextNumber || !isFinite(nextNumber)) {
      let sum = 0;
      for(let element of enteredValues) {
        sum = sum + Number(element);
      }
      console.log("Total of entered values is " + sum);
      break;
    }
    enteredValues.push(nextNumber);
  }
}

sumInput();
