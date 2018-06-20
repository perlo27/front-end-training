Function.prototype.defer = function(delay) {
    return setTimeout(this, delay);
}

function f() {
    console.log("Milik why");
}

f.defer(1000);


Function.prototype.defer = function(delay) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), delay);
    }
}

function f(a, b) {
    alert( a + b );
  }
  
  f.defer(1000)(1, 2);