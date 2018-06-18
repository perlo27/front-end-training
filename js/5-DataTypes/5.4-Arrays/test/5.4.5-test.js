const chai = require('chai');
const getMaxSubSum = require('../5.4.5.js').getMaxSubSum;

describe('getMaxSubSum', () => {
  describe('Test in loop', () => {
    function makeTest(input, output) {
      it(`Max sum of given array ${input} equals ${output}`, () => {
        chai.assert.equal(getMaxSubSum(input), output);
      });
    }


    const testFeed = [
      [-1, 2, 3, -9], 5,
      [2, -1, 2, 3, -9], 6,
      [-1, 2, 3, -9, 11], 11,
      [-2, -1, 1, 2], 3,
      [100, -9, 2, -3, 5], 100,
      [1, 2, 3], 6,
      [-1, -2, -3], -1,
    ];

    for (let x = 0; x < testFeed.length / 2 -1; x += 1) {
      makeTest(testFeed[2 * x], testFeed[2 * x + 1]);
    }
  });

  // it('for [-1, 2, 3, -9] the max sum is 5', () => {
  //   chai.assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  // });
});
