const { assert } = require('chai');
const { getDateAgo } = require('../5.10.4.js');

describe('getDateAgo', () => {
  it('1 day before 02.01.2015 -> day 1', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
  });


  it('2 days before 02.01.2015 -> day 31', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
  });

  it('100 days before 02.01.2015 -> day 24', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
  });

  it('365 days before 02.01.2015 -> day 2', () => {
    assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
  });

  it('does not modify the given date', () => {
    const date = new Date(2015, 0, 2);
    const dateCopy = new Date(date);
    getDateAgo(dateCopy, 100);
    assert.equal(date.getTime(), dateCopy.getTime());
  });
});
