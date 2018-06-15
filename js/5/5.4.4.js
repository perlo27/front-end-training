// Sum input numbers

// Build in isFinite() vs Number.isFinite()
// isFinite(null) == false | Number.isFinite(null) == true
// isFinite('0') == true | Number.isFinite('0') == false
// works on strings | works on numbers
function sumImput() {
  const numberArray = [];
  while (true) {
    const input = prompt('Insert value', 'Any value');
    if (input == null || input === '' || !Number.isFinite(+input)) break;
    numberArray.push(+input);
  }
  console.log(numberArray);

  let sum = 0;
  for (num of numberArray) {
    sum += num;
  }
  console.log(sum);
}


sumImput();
