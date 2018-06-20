let sumTo = function(n) {
    if(n == 0) return n;
    return sumTo(n - 1) + n;
};

console.log(sumTo(100));