function Calculator() {
    this.read = function(a, b) {
        this.a = a;
        this.b = b;
    }

    this.sum = function() {
        return +this.a + +this.b;
    }

    this.mul = function() {
        return +this.a * +this.b;
    }

}

function Accumulator(startingValue) {
    this.value = +startingValue || 0;

    this.read = function(a) {
        if (typeof(a) === 'number') {
            this.value += a;
        }
        
    }
}

export {
    Calculator, Accumulator
}