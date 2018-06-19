let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in the reverse order

arr.sort(function (a, b) {
    if (a > b) {
        return -1;
    };
    if (a == b) {
        return 0;
    };
    if (a < b) {
        return 1;
    };
});

console.log(arr); 