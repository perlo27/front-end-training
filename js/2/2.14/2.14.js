function checkAge(age) {
    return age > 18 ? true : confirm('Did parents allow you?');
}

function checkAge2(age) {
    return age > 18 || confirm('Did parents allow you?');
}

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}