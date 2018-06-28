const { assert } = require('chai');
const { aclean } = require('../5.7.2.js');

function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

describe('aclean', () => {
  it('returns exactly 1 word from each anagram set', () => {
    const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

    const result = aclean(arr);
    assert.equal(result.length, 3);

    assert.equal(intersection(result, ['nap', 'PAN']).length, 1);
    assert.equal(intersection(result, ['teachers', 'cheaters', 'hectares']).length, 1);
    assert.equal(intersection(result, ['ear', 'era']).length, 1);
  });

  it('is case-insensitive', () => {
    const arr = ['era', 'EAR'];
    assert.equal(aclean(arr).length, 1);
  });
});
