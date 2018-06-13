function ask(isConfirmed, yes, no) {
    if (isConfirmed) {
        yes();
    }
    else {
        no();
    }
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.ask = ask;
}