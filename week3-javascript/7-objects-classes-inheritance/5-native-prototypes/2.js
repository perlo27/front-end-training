{
  function f(a, b) {
  console.log( a + b );
}
Function.prototype.defer = function(delay){
  let savedThis = this;
  return function(...args) {
    setTimeout(() => savedThis.call(savedThis,...args),delay);
  }
};
f.defer(1000)(1, 2); // shows 3 after 1 second
}
