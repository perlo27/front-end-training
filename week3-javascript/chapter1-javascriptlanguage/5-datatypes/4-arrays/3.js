let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
})

arr[2](); // prints ["a", "b", ƒ], this works as a reference to the array
