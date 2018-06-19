function isEmpty(object) {
  let isEmpty = true;
  for(let key in object){
    isEmpty = false;
  }
  return isEmpty;
}
let firstObject = isEmpty({});
console.log(firstObject);
let secondObject = isEmpty({test:""});
console.log(secondObject);
