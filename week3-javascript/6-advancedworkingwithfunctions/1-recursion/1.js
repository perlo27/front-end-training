function iterativeSumTo(n) {
  let sum = 0;
  for(let i = n; i > 0; i--) {
    sum = sum + i;
  }
  return sum;
}

function recursiveSumTo(n) {
  if(n == 1){
    return 1;
  } else {
    return n + sumTo(n-1);
  }
}

function arithmeticSumTo(n) {
  return (n * (n + 1)) / 2;
}


startTime = Date.now();
for(let i=0; i<100; i++) {
  iterativeSumTo(Math.floor(Math.random()*10000));
  // recursiveSumTo(Math.floor(Math.random()*10000));
  // arithmeticSumTo(Math.floor(Math.random()*10000));
}

endTime = Date.now();
console.log("difference " + (endTime-startTime));

// Iterative : takes 5,3,3,5 milliseconds in 4 runs : average 4 ms
// Recursive : takes 9,10,7,8 milliseconds in 4 runs : average 8.5 ms
// Arithmetic : takes 0,0,0,0 milliseconds in 4 runs : average 0 ms

// Arithmetic progression is the fastest because sum is
// calculated in a single step. It takes O(n) steps for other
// methods to calculate the sum


console.log("Recursive sum for 100000 : " + recursiveSumTo(100000));
// This works, the result is 5000050000
