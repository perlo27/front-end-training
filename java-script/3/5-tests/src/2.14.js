'use strict'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

if (typeof module !== 'undefined' && module.exports != null) {
  exports.checkAge = checkAge;
}