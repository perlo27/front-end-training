function calculatePrimes(n) {
    for (let index = 0; index <= n; ++index) {
        if (isPrime(index)) {
            console.log(index);
        }
    }
}

function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    let m = Math.sqrt(n);
    for (let i = 2; i <= m; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

calculatePrimes(1);