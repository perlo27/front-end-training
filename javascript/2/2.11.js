//Check the range between
let age = 45;
if (age >= 14 && age <= 90) {
    console.log("Correct");
}

// Check the range outside
age = 99;
if (!(age >= 14 && age <= 90)) {
    console.log("Correct");
}

if (age < 14 && age > 90) {
    console.log("Correct");
}

