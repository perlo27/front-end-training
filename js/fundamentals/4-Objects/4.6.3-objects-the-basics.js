'use strict'

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (nextValue) {
        this.value += nextValue;
    }
}

describe('Accumulator', function () {
    it('creates a new accumulator with 100, then adds 1 and returns 101', function () {
        let accu = new Accumulator(100);
        accu.read(1);
        assert(accu.value == 101);
    });
});