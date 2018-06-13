// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }
//
function pow(x,n) {         // parentheses
  let result = 1;           // spaces
  for(let i=0; i < n; i++) {  // spaces and line breaks
    result *= x;              // spaces
  }
  return result;
}

// let x=prompt("x?",''), n=prompt("n?",'')
let x = prompt("x?",'');    // separate declarations for x and n
let n = prompt("n?",'');


// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }
if (n <= 0) {               // parentheses and line breaks
  console.log(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  console.log(pow(x,n))
}
