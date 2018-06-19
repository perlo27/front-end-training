let two = document.createElement("li");
two.textContent = "2";
let three = document.createElement("li");
three.textContent = "3";

ul.insertBefore(three, ul.children[1]);
ul.insertBefore(two, three);
