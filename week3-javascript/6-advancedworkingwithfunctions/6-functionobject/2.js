// function sum(a) {
//
//   let currentSum = a;
//
//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//
//   f.toString = function() {
//     return currentSum;
//   };
//
//   return f;
// }

// could not solve this one

sum(1)(2);
sum(1)(2)(3); // 1 + 2 + 3
sum(5)(-1)(2);
sum(6)(-1)(-2)(-3);
sum(0)(1)(2)(3)(4)(5);
