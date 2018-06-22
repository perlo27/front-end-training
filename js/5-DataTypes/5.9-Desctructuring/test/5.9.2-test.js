const { assert } = require('chai');
const { topSalary } = require('../5.9.2.js');

describe('topSalary', () => {
  it('returns top-paid person', () => {
    const salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(topSalary(salaries), 'Pete');
  });

  it('returns null for the empty object', () => {
    assert.isNull(topSalary({}));
  });
});
