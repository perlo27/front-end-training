const { assert } = require('chai');
const { getLastDayOfMonth } = require('../5.10.5.js');

describe('getLastDayOfMonth', () => {
  it('last day of 01.01.2012 - 31', () => {
    assert.equal(getLastDayOfMonth(2012, 0), 31);
  });

  it('last day of 01.02.2012 - 29 (leap year)', () => {
    assert.equal(getLastDayOfMonth(2012, 1), 29);
  });

  it('last day of 01.02.2013 - 28', () => {
    assert.equal(getLastDayOfMonth(2013, 1), 28);
  });
});
