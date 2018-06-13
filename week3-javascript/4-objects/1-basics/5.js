// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);
// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

function multiplyNumeric(object) {
  for(prop in object) {
    let val = object[prop];
    if(typeof val === "number"){
      object[prop] = val * 2;
    }
  }
}
