// Calling in an array context

const arr = ['a', 'b'];

arr.push(function () {
  console.log(this);
});

arr[2](); // [ 'a', 'b', [Function] ]
