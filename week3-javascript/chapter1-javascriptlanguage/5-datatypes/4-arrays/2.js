let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

replaceMiddleValue(styles, "Classics");
console.log(styles);

let firstValue = styles.shift();
console.log("First value is : " + firstValue);

styles.push("Rap", "Reggae");
console.log(styles);

function replaceMiddleValue(array, newValue) {
  array[ ( array.length-1 ) / 2 ] = newValue;
}
