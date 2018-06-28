describe('pow', () => {
  describe('raises x to power n', () => {
    function makeTest(x) {
      const expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, () => {
        // eslint-disable-next-line no-undef
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x += 1) {
      makeTest(x);
    }
  });

  it('for negative n the result is NaN', () => {
    // eslint-disable-next-line no-undef
    assert.isNaN(pow(2, -1));
  });

  it('for non-integer n the result is NaN', () => {
    // eslint-disable-next-line no-undef
    assert.isNaN(pow(2, 1.5));
  });
});
