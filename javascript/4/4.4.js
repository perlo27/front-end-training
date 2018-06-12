// Create a calculator
let calculator = {
    read() {
        // this.a = Number(prompt("Set first value:"));
        // this.b = Number(prompt("Set second value:"));
        this.a = 2;
        this.b = 3;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );

//Chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        console.log( this.step );
    }
};

ladder.up().up().down().showStep();