let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sum(object) {
  let sum=0;
  for(let prop in object){
    sum = sum+object[prop];
  }
  return sum;
}

console.log(sum(salaries));
