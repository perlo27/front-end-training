function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.isEmpty = isEmpty;
}
