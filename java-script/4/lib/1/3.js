'use strict';

function isEmpty(object) {
    for (var key in object) {
        return false;
    }
    return true;
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.isEmpty = isEmpty;
}