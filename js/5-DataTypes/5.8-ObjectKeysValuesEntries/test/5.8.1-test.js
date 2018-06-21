const assert = require('chai').assert;
const sumSalariesVer1 = require('../5.8.1.js').sumSalariesVer1;
const sumSalariesVer2 = require('../5.8.1.js').sumSalariesVer2;

describe('sumSalariesVer1', () => {
  it('returns sum of salaries', () => {
    const salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(sumSalariesVer1(salaries), 650);
  });

  it('returns 0 for the empty object', () => {
    assert.strictEqual(sumSalariesVer1({}), 0);
  });
});

describe('sumSalariesVer2', () => {
  it('returns sum of salaries', () => {
    const salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(sumSalariesVer2(salaries), 650);
  });

  it('returns 0 for the empty object', () => {
    assert.strictEqual(sumSalariesVer2({}), 0);
  });
});