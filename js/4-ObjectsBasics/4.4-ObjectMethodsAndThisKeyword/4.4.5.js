// 5. Chaining
const ladder = {
  step: 0,
  up() {
    this.step += 1;
    console.log('up');
    return this;
  },
  down() {
    this.step -= 1;
    console.log('down');
    return this;
  },
  showStep() { // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();
