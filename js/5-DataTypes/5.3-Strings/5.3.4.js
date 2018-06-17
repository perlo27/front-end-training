// Extract the money

function extractCurrencyValue(str) {
  if (!str) return str;
  return +str.slice(1, str.length);
}

const currencyValue = extractCurrencyValue('$120');
console.log(currencyValue); // 120
console.log(typeof currencyValue); // number

