'use strict'

console.log('4.1 task 2');
function isEmpty(scheduler) {
    for (let key in scheduler)
        return false;
    return true;
}