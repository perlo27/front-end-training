function pow(x,n)
{                                       // bracket should be in line above
  let result=1;                         // there is no space between 't' and '=' and '1'
  for(let i=0;i<n;i++) {result*=x;}     // lack of spaces, content of loop should be in separate line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // strings must be double quoted (), each variable should be declared in separate line, lack of spaces
if (n<=0)                                // lack of spaces
{                                        // bracket should be in line above
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n)) // lack of space and semicolon
}