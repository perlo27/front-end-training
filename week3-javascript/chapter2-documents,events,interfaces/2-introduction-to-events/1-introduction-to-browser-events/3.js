
button.addEventListener("click", () => console.log("1"));
// runs

button.removeEventListener("click", () => console.log("1"));
// doesn't not remove first handler because the argument isn't the
// same function as given to the addEventListener

button.onclick = () => console.log(2);
// runs
