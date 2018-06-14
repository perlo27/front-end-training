function camelize(text) {
  let splitted = text.split("-");
  let uppercased = splitted.map((element, index) => {
    if(index == 0 || !element){
      return element;
    }
    return element[0].toUpperCase() + element.substring(1);
  });
  return uppercased.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
