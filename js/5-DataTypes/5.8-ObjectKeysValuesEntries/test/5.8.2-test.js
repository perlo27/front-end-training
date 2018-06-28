const { assert } = require('chai');
const { count } = require('../5.8.2.js');

describe('count', () => {
  it('counts the number of properties', () => {
    assert.equal(count({ a: 1, b: 2 }), 2);
  });

  it('returns 0 for an empty object', () => {
    assert.equal(count({}), 0);
  });

  it('ignores symbolic properties', () => {
    assert.equal(count({ [Symbol('id')]: 1 }), 0);
  });
});
