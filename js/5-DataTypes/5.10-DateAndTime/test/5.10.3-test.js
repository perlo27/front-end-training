const { assert } = require('chai');
const { getLocalDay } = require('../5.10.3.js');

describe('getLocalDay returns the "european" weekday', () => {
  it('3 January 2014 - friday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
  });

  it('4 January 2014 - saturday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
  });

  it('5 January 2014 - sunday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
  });

  it('6 January 2014 - monday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
  });

  it('7 January 2014 - tuesday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
  });

  it('8 January 2014 - wednesday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
  });

  it('9 January 2014 - thursday', () => {
    assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
  });
});
