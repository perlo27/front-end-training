function Calculator() {
  this.read = function(a, b) {
    this.a = a;
    this.b = b;
  };

  this.sum = function() {
    return +this.a + +this.b;
  };

  this.mul = function() {
    return +this.a * +this.b;
  };
}

function Accumulator(startingValue) {
  this.value = +startingValue || 0;

  this.read = function(a) {
    if (typeof a === "number") {
      this.value += a;
    }
  };
}

function ExtendableCalculator() {
  let that = this;
  
  this.init = function() {
    that.addMethod('+', (a, b) => a + b);
    that.addMethod('-', (a, b) => a - b);
  };

  this.calculate = function(operation) {
    let array = operation.split(' ');
    let name = array[1];
    return that[name](+array[0], +array[2]);
  };

  this.addMethod = function(name, func) {
    that[name] = func;
  };
}

export { Calculator, Accumulator, ExtendableCalculator };
