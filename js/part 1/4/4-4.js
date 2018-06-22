let calculator = {
  a: 0,
  b: 0,

  read(a, b) {
    // this.a = prompt("Type a", 0); doesn't work on NodeJS
    // this.b = prompt("Type b", 0); doesn't work on NodeJS
    this.a = a;
    this.b = b;
  },

  sum() {
    return +this.a + +this.b;
  },

  mul() {
    return +this.a * +this.b;
  }
};

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    if (this.step > 1) {
      this.step--;
    }
    return this;
  },
  showStep: function() {
    // returns the current step
    return this.step;
  }
};

export { calculator, ladder };
