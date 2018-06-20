// Filter anagrams
const aclean = exports.aclean = function (arr) {
  const map = new Map();
  arr.forEach((word) => {
    map.set(word.split('').sort().join('').toLowerCase(), word);
  });
  const keySet = new Set(map.keys());
  const uniqueArray = [];
  keySet.forEach((key) => {
    uniqueArray.push(map.get(key));
  });
  return uniqueArray;
};

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

