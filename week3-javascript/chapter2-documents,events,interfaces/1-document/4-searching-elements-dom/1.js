
// 1
let ageTableByID = document.getElementById("age-table");
console.log(ageTableByID);

// 2
let labels = ageTableByID.getElementsByTagName("label");
console.log(labels);

// 3
let firstTd = ageTableByID.querySelector("tr td");
console.log(firstTd);

// 4
let searchForm = document.getElementsByName("search")[0];
console.log(searchForm);

// 5
let firstInput = searchForm.querySelector("input");
console.log(firstInput);

// 6
let allInputs = searchForm.querySelectorAll("input");
console.log(allInputs[allInputs.length-1]);
