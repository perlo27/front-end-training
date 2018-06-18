//5.3.1
let ucFirst = function(str) {
    console.log(str[0].toUpperCase() + str.substring(1, str.length));
}

ucFirst("john");

//5.3.2
let checkSpam = function(str) {
    return str.toUpperCase().includes('VIAGRA') || str.toUpperCase().includes('XXX');
}

console.log(checkSpam('free xxxxx'));
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam("innocent rabbit"));

//5.3.3
let truncate = function(str, maxLenght) {
    const replacer = "...";
    return str.length > 20 ? str.slice(0, maxLenght) + replacer : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

//5.3.4
let extractCurrencyValue = function(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));