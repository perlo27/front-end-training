ucFirst("john") == "John";

function ucFirst(text) {
  return text.slice(0,1).toUpperCase()+text.slice(1);
}

console.log(ucFirst("test"));
console.log(ucFirst("te"));
console.log(ucFirst("t"));
console.log(ucFirst(""));
