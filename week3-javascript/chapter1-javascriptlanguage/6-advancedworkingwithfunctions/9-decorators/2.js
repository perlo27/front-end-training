function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

function delay(func, funcDelay) {
  function delayStarterFunc() {
    function delayedFunc() {
      delayedFunc.func.apply(delayedFunc.thisRef,delayedFunc.argRef);
    }
    delayedFunc.func = func;
    delayedFunc.thisRef = this;
    delayedFunc.argRef = arguments;
    setTimeout(delayedFunc, funcDelay);
  }
  return delayStarterFunc;
}

// the solutions on the website are shorter and easier to understand :


// function delay(f, ms) {
//
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
//
// }

// function delay(f, ms) {
// added variables to pass this and arguments from the wrapper inside setTimeout
//   return function(...args) {
//     let savedThis = this;
//     setTimeout(function() {
//       f.apply(savedThis, args);
//     }, ms);
//   };
//
// }
