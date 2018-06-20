'use strict'

function Calculator() {

    this.read = function() {
        this.val1 = prompt('Provide the first value');
        this.val2 = prompt('Provide the first value');
    };

    this.sum = function() {
        return this.val1*1 + this.val2*1;
    };

    this.mul = function() {
        return this.val1 * this.val2;
    };
    
    this.calculate = function (expr) {
        let args = expr.split(" ");
        return this[args[1]](args[0], args[2]);
    };
    
    this.addMethod = function (method, func) {
        this[method] = func;
    }
};

describe('Extended calculator', function () {
    it('adds division method and adds division expression 4 / 2 and returns 2', function () {
        let calc = new Calculator();
        calc.addMethod('/', (a, b) => { return a/b; });
        assert( calc.calculate('4 / 2'), 2 );
    });

    it('adds exponentiation method and adds expression 4 ** 2 and returns 16', function () {
        let calc = new Calculator();
        calc.addMethod('**', (a, b) => { return a**b; });
        assert( calc.calculate('4 ** 2'), 16 );
    });

});