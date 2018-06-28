// Repeat until the input is a number

// Build in isFinite() vs Number.isFinite()
// isFinite(null) == false | Number.isFinite(null) == true
// isFinite('0') == true | Number.isFinite('0') == false
function readNumber() {
  let num;

  do {
    // 'num' is 'string' or 'null'
    // eslint-disable-next-line no-alert
    num = prompt('Enter a number please?', 0);
  } while (!Number.isFinite(+num));

  return num;
}

const number = readNumber();
if (number === null || number === '') {
  // eslint-disable-next-line no-alert
  alert('Exited');
} else {
  // eslint-disable-next-line no-alert
  alert(`Read: ${number}`);
}
