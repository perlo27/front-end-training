// search for elements
document.getElementById("age-table");
document.getElementById("age-table").getElementsByTagName("label");
document.getElementById("age-table").querySelector("td:first-child");
document.querySelector("form");
document.querySelector("form input:first-child");
document.querySelector("form input:last-child");


// count descendants
let li = document.getElementsByTagName("li");
for(let list of li) {
  let arrOfChildren = list.innerText.trim().split("\n"); 
  console.log(`${arrOfChildren[0]}: ${arrOfChildren.length - 1}`);
}